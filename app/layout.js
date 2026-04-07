export const metadata = {
  title: "MiMercado San Fernando",
  description: "Supermercado y comida lista a domicilio en San Fernando de Apure. Delivery en 45 minutos.",
  openGraph: {
    title: "MiMercado San Fernando",
    description: "Pide tu mercado y comida desde el teléfono. Delivery en 45 min.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#f8fafc" }}>
        {children}
      </body>
    </html>
  );
}
