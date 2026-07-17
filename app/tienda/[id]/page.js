// BUILD:1783844000
// Ruta dinámica /tienda/[id] — Server Component
// Objetivo: que al compartir el link de una tienda por WhatsApp, el preview
// muestre el LOGO y NOMBRE de esa tienda (Open Graph dinámico leído en servidor).
// El humano es redirigido a la app existente con el deep link que YA funciona.
// NO toca page.js. Es un archivo nuevo e independiente.

const SUPABASE_URL = "https://cdiuboyklymirssxperd.supabase.co";
const SUPABASE_KEY = "sb_publishable_WkUnC5ElLD9xRbhzG_OKFw_13gOTwGk";
const SITE_URL = "https://usalokl.com";
const LOGO_FALLBACK = SITE_URL + "/icon-512.png";

// Lee un proveedor aprobado y con suscripción activa desde Supabase (server-side).
// Devuelve null si no existe / no aprobado / sin suscripción (o si hay error de red).
async function getProveedor(id) {
  try {
    const url =
      SUPABASE_URL +
      "/rest/v1/proveedores" +
      "?select=id,negocio,logo_url,tipo_negocio,descripcion_negocio" +
      "&aprobado=eq.true&suscripcion_activa=eq.true" +
      "&id=eq." + encodeURIComponent(id) +
      "&limit=1";
    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: "Bearer " + SUPABASE_KEY,
      },
      // Cache corto: el preview no necesita ser en tiempo real, pero sí frescamente
      // regenerado. 5 min evita golpear Supabase en cada scrape.
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return null;
    return data[0];
  } catch (e) {
    return null;
  }
}

// Convierte cualquier logo_url a URL absoluta. Si viene vacío o relativo raro,
// cae al ícono de Lokl. Open Graph EXIGE URL absoluta.
function logoAbsoluto(logoUrl) {
  if (!logoUrl || typeof logoUrl !== "string") return LOGO_FALLBACK;
  const u = logoUrl.trim();
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  if (u.startsWith("/")) return SITE_URL + u;
  return LOGO_FALLBACK;
}

// Mapea el tipo_negocio al valor EXACTO de tab que espera el deep link de page.js.
// Regla tomada del propio page.js (líneas 734-735):
//   "Restaurante / Cocina / Comida" o vacío -> Feria de comida
//   "Tienda / Negocio local"               -> Negocios locales
function tabParaProveedor(tipoNegocio) {
  if (tipoNegocio === "Tienda / Negocio local") return "Negocios locales";
  // Restaurante o cualquier otro/vacío cae en Feria de comida (mismo criterio que la app)
  return "Feria de comida";
}

// Construye el deep link a la app existente (que ya abre la tienda directo).
function deepLink(prov) {
  const tab = tabParaProveedor(prov.tipo_negocio);
  return (
    SITE_URL +
    "/?tab=" + encodeURIComponent(tab) +
    "&id=" + encodeURIComponent(prov.id)
  );
}

// --- Metadata dinámica (lo que lee el bot de WhatsApp/Facebook/Telegram) ---
export async function generateMetadata({ params }) {
  const { id } = params;
  const prov = await getProveedor(id);

  // Si no encontramos la tienda, devolvemos el preview genérico de Lokl.
  if (!prov) {
    return {
      title: "Lokl — San Fernando de Apure",
      description:
        "Compra desde tu teléfono: supermercado, comida, tiendas y servicios con delivery.",
      openGraph: {
        title: "Lokl — San Fernando de Apure",
        description:
          "Compra desde tu teléfono: supermercado, comida, tiendas y servicios con delivery.",
        url: SITE_URL,
        type: "website",
        images: [{ url: LOGO_FALLBACK, width: 512, height: 512 }],
      },
    };
  }

  const nombre = prov.negocio || "Tienda en Lokl";
  const desc =
    (prov.descripcion_negocio && prov.descripcion_negocio.trim()) ||
    ("Pide de " + nombre + " por Lokl. Delivery en San Fernando de Apure.");
  const img = logoAbsoluto(prov.logo_url);
  const canonical = SITE_URL + "/tienda/" + encodeURIComponent(prov.id);

  return {
    title: nombre + " — Lokl",
    description: desc,
    openGraph: {
      title: nombre + " — Lokl",
      description: desc,
      url: canonical,
      type: "website",
      siteName: "Lokl",
      images: [{ url: img, width: 512, height: 512, alt: nombre }],
    },
    twitter: {
      card: "summary_large_image",
      title: nombre + " — Lokl",
      description: desc,
      images: [img],
    },
  };
}

// --- Componente cliente que hace el redirect SOLO en el navegador ---
// El bot de WhatsApp no ejecuta este JS -> se queda leyendo la metadata (logo correcto).
// El humano sí lo ejecuta -> es reenviado a la app de siempre.
function Redirector({ destino, nombre }) {
  return (
    <>
      <meta httpEquiv="refresh" content={"0;url=" + destino} />
      <div
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#334155",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          fontSize: 16,
          textAlign: "center",
          padding: 20,
        }}
      >
        <p>
          Abriendo {nombre}…{" "}
          <a href={destino} style={{ color: "#16a34a" }}>
            Toca aquí si no abre
          </a>
        </p>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: "location.replace(" + JSON.stringify(destino) + ");",
        }}
      />
    </>
  );
}

// --- Página (Server Component) ---
// NO renderiza <html>/<body> (eso lo pone el layout raíz). Solo el contenido.
// El redirect ocurre en el navegador vía <script> + meta-refresh, no en el servidor,
// para que el bot de WhatsApp se quede en esta ruta leyendo la metadata correcta.
export default async function TiendaPage({ params }) {
  const { id } = params;
  const prov = await getProveedor(id);
  const destino = prov ? deepLink(prov) : SITE_URL + "/";
  const nombre = prov ? prov.negocio || "la tienda" : "Lokl";
  return <Redirector destino={destino} nombre={nombre} />;
}
