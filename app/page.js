"use client";
import { useState } from "react";

const CITY = "San Fernando";
const APP_NAME = "MiMercado";
const WHATSAPP_NUMBER = "584243232671";
const DELIVERY_MIN = 8;
const DELIVERY_FEE = 1.0;
const PRIMARY = "#0f172a";
const ACCENT = "#f59e0b";

const CATEGORIES = ["Todo", "Proteínas", "Básicos", "Verduras", "Comida lista"];

const PRODUCTS = [
  { id: 1, name: "Pechuga de pollo", cat: "Proteínas", price: 3.0, unit: "kg", emoji: "🍗", type: "super", tag: "Popular" },
  { id: 2, name: "Carne de res", cat: "Proteínas", price: 5.5, unit: "kg", emoji: "🥩", type: "super" },
  { id: 3, name: "Pescado fresco", cat: "Proteínas", price: 4.0, unit: "kg", emoji: "🐟", type: "super" },
  { id: 4, name: "Arroz (1 kg)", cat: "Básicos", price: 1.2, unit: "kg", emoji: "🌾", type: "super", tag: "Oferta" },
  { id: 5, name: "Aceite (1 L)", cat: "Básicos", price: 2.0, unit: "L", emoji: "🫙", type: "super" },
  { id: 6, name: "Pasta (500g)", cat: "Básicos", price: 0.9, unit: "paq", emoji: "🍝", type: "super" },
  { id: 7, name: "Tomates", cat: "Verduras", price: 1.5, unit: "kg", emoji: "🍅", type: "super" },
  { id: 8, name: "Cebollas", cat: "Verduras", price: 1.0, unit: "kg", emoji: "🧅", type: "super" },
  { id: 9, name: "Pimentones", cat: "Verduras", price: 1.8, unit: "kg", emoji: "🫑", type: "super" },
  { id: 10, name: "Almuerzo completo", cat: "Comida lista", price: 6.5, unit: "porción", emoji: "🍱", type: "food", kitchen: "Cocina del Centro", tag: "⭐ 4.8" },
  { id: 11, name: "Pabellón criollo", cat: "Comida lista", price: 7.0, unit: "porción", emoji: "🫘", type: "food", kitchen: "Cocina del Centro" },
  { id: 12, name: "Sopa + Segundo", cat: "Comida lista", price: 5.5, unit: "porción", emoji: "🥣", type: "food", kitchen: "Cocina Familiar" },
  { id: 13, name: "Pollo asado", cat: "Comida lista", price: 8.0, unit: "porción", emoji: "🍖", type: "food", kitchen: "Cocina Familiar" },
];

const s = {
  app: { fontFamily: "'Segoe UI', sans-serif", background: "#f8fafc", minHeight: "100vh", maxWidth: 430, margin: "0 auto", position: "relative" },
  header: { background: PRIMARY, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100 },
  logo: { color: "#fff", fontWeight: 700, fontSize: 18 },
  cityBadge: { background: ACCENT, color: PRIMARY, fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, marginLeft: 6 },
  cartBtn: { background: "rgba(255,255,255,0.12)", border: "none", borderRadius: 20, padding: "6px 12px", color: "#fff", display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 13 },
  cartCount: { background: ACCENT, color: PRIMARY, borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 },
  banner: { background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", padding: "18px 16px", color: "#fff" },
  bannerTitle: { fontSize: 20, fontWeight: 700, margin: 0 },
  bannerSub: { fontSize: 13, color: "rgba(255,255,255,0.75)", margin: "4px 0 10px" },
  freeBadge: { background: "#22c55e", color: "#fff", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 12, display: "inline-block" },
  searchWrap: { padding: "12px 16px 0" },
  search: { width: "100%", padding: "10px 14px", borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 14, background: "#fff", boxSizing: "border-box", outline: "none" },
  catScroll: { display: "flex", gap: 8, padding: "12px 16px", overflowX: "auto" },
  catBtn: (a) => ({ background: a ? PRIMARY : "#fff", color: a ? "#fff" : "#64748b", border: a ? "none" : "1px solid #e2e8f0", borderRadius: 20, padding: "6px 14px", fontSize: 13, fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }),
  section: { padding: "0 16px 16px" },
  sectionTitle: { fontSize: 13, fontWeight: 700, color: "#94a3b8", letterSpacing: 1, margin: "12px 0 8px", textTransform: "uppercase" },
  grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 },
  card: { background: "#fff", borderRadius: 14, padding: 12, border: "1px solid #f1f5f9", display: "flex", flexDirection: "column", gap: 6 },
  cardEmoji: { fontSize: 32, textAlign: "center", padding: "4px 0" },
  cardName: { fontSize: 13, fontWeight: 600, color: "#1e293b", lineHeight: 1.3 },
  cardKitchen: { fontSize: 11, color: "#94a3b8" },
  cardBottom: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" },
  cardPrice: { fontSize: 15, fontWeight: 700, color: PRIMARY },
  cardUnit: { fontSize: 10, color: "#94a3b8" },
  addBtn: { background: PRIMARY, color: "#fff", border: "none", borderRadius: 20, width: 30, height: 30, fontSize: 20, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" },
  tag: { fontSize: 10, fontWeight: 600, background: "#fef3c7", color: "#92400e", padding: "2px 7px", borderRadius: 8, alignSelf: "flex-start" },
  qtyRow: { display: "flex", alignItems: "center", gap: 6 },
  qtyBtn: { background: "#f1f5f9", border: "none", borderRadius: "50%", width: 26, height: 26, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" },
  qtyNum: { fontSize: 14, fontWeight: 700, minWidth: 16, textAlign: "center" },
  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "flex-end", justifyContent: "center" },
  sheet: { background: "#fff", borderRadius: "20px 20px 0 0", width: "100%", maxWidth: 430, maxHeight: "85vh", overflowY: "auto", padding: 20 },
  handle: { width: 40, height: 4, background: "#e2e8f0", borderRadius: 2, margin: "0 auto 16px" },
  sheetTitle: { fontSize: 18, fontWeight: 700, color: PRIMARY, marginBottom: 16 },
  cartItem: { display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: "1px solid #f1f5f9" },
  summaryRow: { display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 14 },
  summaryLabel: { color: "#64748b" },
  summaryVal: { fontWeight: 600, color: "#1e293b" },
  totalRow: { display: "flex", justifyContent: "space-between", padding: "10px 0 0", fontSize: 16, borderTop: "1px solid #e2e8f0", marginTop: 4 },
  freeTag: { background: "#dcfce7", color: "#15803d", fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 8 },
  progWrap: { background: "#f1f5f9", borderRadius: 8, padding: "10px 12px", margin: "10px 0" },
  progTrack: { background: "#e2e8f0", borderRadius: 4, height: 6, overflow: "hidden", margin: "6px 0" },
  progFill: (p) => ({ background: "#22c55e", height: "100%", width: `${Math.min(p, 100)}%`, borderRadius: 4, transition: "width 0.3s" }),
  btn: { background: PRIMARY, color: "#fff", border: "none", borderRadius: 14, padding: "14px", fontSize: 15, fontWeight: 700, width: "100%", cursor: "pointer", marginTop: 10 },
  btnGray: { background: "#f1f5f9", color: "#64748b", border: "none", borderRadius: 14, padding: "13px", fontSize: 14, fontWeight: 600, width: "100%", cursor: "pointer", marginTop: 8 },
  btnWa: { background: "#25d366", color: "#fff", border: "none", borderRadius: 14, padding: "13px", fontSize: 14, fontWeight: 700, width: "100%", cursor: "pointer", marginBottom: 10 },
  input: { width: "100%", padding: "11px 14px", borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 14, marginBottom: 10, boxSizing: "border-box", outline: "none" },
  label: { fontSize: 12, fontWeight: 600, color: "#64748b", marginBottom: 4, display: "block" },
  successWrap: { textAlign: "center", padding: "20px 0" },
};

export default function Home() {
  const [cat, setCat] = useState("Todo");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState({});
  const [sheet, setSheet] = useState(null);
  const [form, setForm] = useState({ nombre: "", telefono: "", direccion: "", pago: "pago_movil" });

  const filtered = PRODUCTS.filter(
    (p) => (cat === "Todo" || p.cat === cat) && p.name.toLowerCase().includes(search.toLowerCase())
  );
  const superP = filtered.filter((p) => p.type === "super");
  const foodP = filtered.filter((p) => p.type === "food");

  const add = (p) => setCart((c) => ({ ...c, [p.id]: { ...p, qty: (c[p.id]?.qty || 0) + 1 } }));
  const remove = (id) =>
    setCart((c) => {
      const n = { ...c };
      n[id].qty > 1 ? (n[id] = { ...n[id], qty: n[id].qty - 1 }) : delete n[id];
      return n;
    });

  const items = Object.values(cart);
  const count = items.reduce((a, i) => a + i.qty, 0);
  const sub = items.reduce((a, i) => a + i.price * i.qty, 0);
  const del = sub >= DELIVERY_MIN ? 0 : DELIVERY_FEE;
  const total = sub + del;
  const pct = (sub / DELIVERY_MIN) * 100;

  const confirm = () => {
    if (!form.nombre || !form.telefono || !form.direccion) return alert("Completa todos los campos");
    setSheet("success");
  };

  const sendWa = () => {
    const lines = items.map((i) => `• ${i.name} x${i.qty} — $${(i.price * i.qty).toFixed(2)}`).join("\n");
    const msg = `*Pedido ${APP_NAME} ${CITY}*\n\n${lines}\n\nSubtotal: $${sub.toFixed(2)}\nDelivery: ${del === 0 ? "GRATIS" : "$" + del.toFixed(2)}\n*Total: $${total.toFixed(2)}*\n\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nDirección: ${form.direccion}\nPago: ${form.pago}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
  };

  const QtyCtrl = ({ p }) =>
    cart[p.id] ? (
      <div style={s.qtyRow}>
        <button style={s.qtyBtn} onClick={() => remove(p.id)}>−</button>
        <span style={s.qtyNum}>{cart[p.id].qty}</span>
        <button style={s.qtyBtn} onClick={() => add(p)}>+</button>
      </div>
    ) : (
      <button style={s.addBtn} onClick={() => add(p)}>+</button>
    );

  const Card = ({ p }) => (
    <div style={s.card}>
      {p.tag && <div style={s.tag}>{p.tag}</div>}
      <div style={s.cardEmoji}>{p.emoji}</div>
      <div style={s.cardName}>{p.name}</div>
      {p.kitchen && <div style={s.cardKitchen}>{p.kitchen}</div>}
      <div style={s.cardBottom}>
        <div>
          <div style={s.cardPrice}>${p.price.toFixed(2)}</div>
          <div style={s.cardUnit}>/ {p.unit}</div>
        </div>
        <QtyCtrl p={p} />
      </div>
    </div>
  );

  return (
    <div style={s.app}>
      {/* HEADER */}
      <div style={s.header}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={s.logo}>{APP_NAME}</span>
          <span style={s.cityBadge}>{CITY}</span>
        </div>
        {count > 0 && (
          <button style={s.cartBtn} onClick={() => setSheet("cart")}>
            🛒 <span style={s.cartCount}>{count}</span>
            <span style={{ fontSize: 12 }}>${total.toFixed(2)}</span>
          </button>
        )}
      </div>

      {/* BANNER */}
      <div style={s.banner}>
        <p style={s.bannerTitle}>Delivery en {CITY} 🛵</p>
        <p style={s.bannerSub}>Supermercado + comida lista a tu puerta</p>
        <span style={s.freeBadge}>✓ Delivery gratis desde ${DELIVERY_MIN}</span>
      </div>

      {/* BÚSQUEDA */}
      <div style={s.searchWrap}>
        <input style={s.search} placeholder="🔍  Buscar productos..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {/* CATEGORÍAS */}
      <div style={s.catScroll}>
        {CATEGORIES.map((c) => (
          <button key={c} style={s.catBtn(cat === c)} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>

      {/* PRODUCTOS */}
      <div style={s.section}>
        {superP.length > 0 && (cat === "Todo" || cat !== "Comida lista") && (
          <>
            <div style={s.sectionTitle}>🛒 Supermercado</div>
            <div style={s.grid}>{superP.map((p) => <Card key={p.id} p={p} />)}</div>
          </>
        )}
        {foodP.length > 0 && (cat === "Todo" || cat === "Comida lista") && (
          <>
            <div style={{ ...s.sectionTitle, marginTop: 16 }}>🍽️ Comida lista</div>
            <div style={s.grid}>{foodP.map((p) => <Card key={p.id} p={p} />)}</div>
          </>
        )}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px 0", color: "#94a3b8" }}>
            <div style={{ fontSize: 40 }}>🔍</div>
            <p>No encontramos ese producto</p>
          </div>
        )}
      </div>

      {/* BOTÓN FLOTANTE */}
      {count > 0 && !sheet && (
        <div style={{ position: "fixed", bottom: 16, left: "50%", transform: "translateX(-50%)", zIndex: 150, width: "calc(100% - 32px)", maxWidth: 398 }}>
          <button style={{ ...s.btn, margin: 0, display: "flex", justifyContent: "space-between", alignItems: "center" }} onClick={() => setSheet("cart")}>
            <span>🛒 Ver mi pedido ({count})</span>
            <span>${total.toFixed(2)}</span>
          </button>
        </div>
      )}

      {/* CARRITO */}
      {sheet === "cart" && (
        <div style={s.overlay} onClick={() => setSheet(null)}>
          <div style={s.sheet} onClick={(e) => e.stopPropagation()}>
            <div style={s.handle} />
            <div style={s.sheetTitle}>Tu pedido</div>
            {items.map((i) => (
              <div key={i.id} style={s.cartItem}>
                <span style={{ fontSize: 26, width: 36, textAlign: "center" }}>{i.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{i.name}</div>
                  {i.kitchen && <div style={{ fontSize: 11, color: "#94a3b8" }}>{i.kitchen}</div>}
                </div>
                <div style={s.qtyRow}>
                  <button style={s.qtyBtn} onClick={() => remove(i.id)}>−</button>
                  <span style={s.qtyNum}>{i.qty}</span>
                  <button style={s.qtyBtn} onClick={() => add(i)}>+</button>
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: PRIMARY, marginLeft: 8, minWidth: 48, textAlign: "right" }}>${(i.price * i.qty).toFixed(2)}</div>
              </div>
            ))}
            {sub < DELIVERY_MIN && (
              <div style={s.progWrap}>
                <div style={{ fontSize: 12, color: "#64748b" }}>Te faltan <strong style={{ color: PRIMARY }}>${(DELIVERY_MIN - sub).toFixed(2)}</strong> para delivery gratis</div>
                <div style={s.progTrack}><div style={s.progFill(pct)} /></div>
              </div>
            )}
            <div style={{ marginTop: 12 }}>
              <div style={s.summaryRow}><span style={s.summaryLabel}>Subtotal</span><span style={s.summaryVal}>${sub.toFixed(2)}</span></div>
              <div style={s.summaryRow}>
                <span style={s.summaryLabel}>Delivery</span>
                {del === 0 ? <span style={s.freeTag}>GRATIS</span> : <span style={s.summaryVal}>${del.toFixed(2)}</span>}
              </div>
              <div style={s.totalRow}><span style={{ fontWeight: 700 }}>Total</span><span style={{ fontWeight: 700, fontSize: 17 }}>${total.toFixed(2)}</span></div>
            </div>
            <button style={s.btn} onClick={() => setSheet("checkout")}>Continuar →</button>
            <button style={s.btnGray} onClick={() => setSheet(null)}>Seguir comprando</button>
          </div>
        </div>
      )}

      {/* CHECKOUT */}
      {sheet === "checkout" && (
        <div style={s.overlay} onClick={() => setSheet("cart")}>
          <div style={s.sheet} onClick={(e) => e.stopPropagation()}>
            <div style={s.handle} />
            <div style={s.sheetTitle}>¿A dónde enviamos?</div>
            <label style={s.label}>Tu nombre</label>
            <input style={s.input} placeholder="María González" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
            <label style={s.label}>WhatsApp</label>
            <input style={s.input} placeholder="+58 414-000-0000" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} />
            <label style={s.label}>Dirección de entrega</label>
            <input style={s.input} placeholder="Calle, número, referencia..." value={form.direccion} onChange={(e) => setForm({ ...form, direccion: e.target.value })} />
            <label style={s.label}>Método de pago</label>
            <select style={{ ...s.input, background: "#fff" }} value={form.pago} onChange={(e) => setForm({ ...form, pago: e.target.value })}>
              <option value="pago_movil">Pago Móvil</option>
              <option value="zelle">Zelle</option>
              <option value="efectivo">Efectivo al recibir</option>
            </select>
            <div style={{ background: "#f1f5f9", borderRadius: 12, padding: "12px 14px", marginBottom: 4 }}>
              <div style={s.summaryRow}><span style={s.summaryLabel}>Total a pagar</span><span style={{ fontWeight: 700, fontSize: 16, color: PRIMARY }}>${total.toFixed(2)}</span></div>
              <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>Tiempo estimado: 40–60 min</div>
            </div>
            <button style={s.btn} onClick={confirm}>✓ Confirmar pedido — ${total.toFixed(2)}</button>
            <button style={s.btnGray} onClick={() => setSheet("cart")}>← Volver al carrito</button>
          </div>
        </div>
      )}

      {/* ÉXITO */}
      {sheet === "success" && (
        <div style={s.overlay}>
          <div style={s.sheet}>
            <div style={s.handle} />
            <div style={s.successWrap}>
              <div style={{ fontSize: 56, marginBottom: 12 }}>🎉</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: PRIMARY, marginBottom: 6 }}>¡Pedido confirmado!</div>
              <div style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, marginBottom: 20 }}>
                Hola <strong>{form.nombre}</strong>, tu pedido está listo.<br />
                Te escribiremos al <strong>{form.telefono}</strong> para coordinar el pago.<br /><br />
                Tiempo estimado: <strong>40–60 minutos</strong>
              </div>
              <button style={s.btnWa} onClick={sendWa}>📲 Enviar pedido por WhatsApp</button>
              <button style={s.btnGray} onClick={() => { setCart({}); setSheet(null); setForm({ nombre: "", telefono: "", direccion: "", pago: "pago_movil" }); }}>
                Hacer otro pedido
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{ height: 80 }} />
    </div>
  );
}
