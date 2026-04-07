"use client";
import { useState } from "react";

const CITY = "San Fernando";
const APP_NAME = "MiMercado";
const WHATSAPP_NUMBER = "584243232671";
const PRIMARY = "#0f172a";
const ACCENT = "#f59e0b";

const DELIVERY_CENTRAL = 1.0;
const DELIVERY_OUTSIDE = 2.0;
const FREE_DELIVERY_FOOD = 8.0;
const FREE_DELIVERY_SUPER_CENTRAL = 12.0;
const FREE_DELIVERY_SUPER_OUTSIDE = 20.0;

const MAIN_SECTIONS = ["Productos","Servicios"];

const PRODUCT_CATS = ["Todo","Supermercado","Comida preparada","Postres","Jugos y bebidas","Pan y repostería"];

const SERVICES = [
  { id:"s1", name:"Mototaxi", emoji:"🛵", desc:"Te llevamos a donde necesites dentro de la ciudad", price:"Desde $1.00", color:"#fef3c7", textColor:"#92400e" },
  { id:"s2", name:"Taxi", emoji:"🚗", desc:"Viajes cómodos y seguros en San Fernando", price:"Desde $2.00", color:"#e0f2fe", textColor:"#0369a1" },
  { id:"s3", name:"Lavandería", emoji:"👕", desc:"Recogemos tu ropa y la entregamos limpia", price:"Desde $3.00/kg", color:"#f0fdf4", textColor:"#15803d" },
  { id:"s4", name:"Limpieza del hogar", emoji:"🧹", desc:"Personal de confianza para limpiar tu casa", price:"Desde $10.00/día", color:"#fdf4ff", textColor:"#7e22ce" },
  { id:"s5", name:"Enfermería a domicilio", emoji:"💉", desc:"Atención de enfermería profesional en tu hogar", price:"Desde $5.00", color:"#fff1f2", textColor:"#be123c" },
  { id:"s6", name:"Encomiendas locales", emoji:"📦", desc:"Enviamos o buscamos lo que necesites en la ciudad", price:"$1.00 – $2.00", color:"#fff7ed", textColor:"#c2410c" },
];

const PRODUCTS = [
  // Supermercado
  { id:1, name:"Pechuga de pollo", cat:"Supermercado", price:3.00, unit:"kg", emoji:"🍗", tag:"Popular", margin:0.05 },
  { id:2, name:"Carne de res", cat:"Supermercado", price:5.50, unit:"kg", emoji:"🥩", margin:0.05 },
  { id:3, name:"Pescado fresco", cat:"Supermercado", price:4.00, unit:"kg", emoji:"🐟", margin:0.05 },
  { id:4, name:"Arroz (1 kg)", cat:"Supermercado", price:1.20, unit:"kg", emoji:"🌾", tag:"Oferta", margin:0.05 },
  { id:5, name:"Aceite (1 L)", cat:"Supermercado", price:2.00, unit:"L", emoji:"🫙", margin:0.05 },
  { id:6, name:"Pasta (500g)", cat:"Supermercado", price:0.90, unit:"paq", emoji:"🍝", margin:0.05 },
  { id:7, name:"Tomates", cat:"Supermercado", price:1.50, unit:"kg", emoji:"🍅", margin:0.05 },
  { id:8, name:"Cebollas", cat:"Supermercado", price:1.00, unit:"kg", emoji:"🧅", margin:0.05 },
  { id:9, name:"Leche (1 L)", cat:"Supermercado", price:1.80, unit:"L", emoji:"🥛", margin:0.05 },
  { id:10, name:"Huevos (cartón)", cat:"Supermercado", price:3.50, unit:"cartón", emoji:"🥚", margin:0.05 },
  // Comida preparada
  { id:11, name:"Almuerzo completo", cat:"Comida preparada", price:6.50, unit:"porción", emoji:"🍱", kitchen:"Cocina del Centro", tag:"⭐ 4.8", margin:0.20 },
  { id:12, name:"Pabellón criollo", cat:"Comida preparada", price:7.00, unit:"porción", emoji:"🫘", kitchen:"Cocina del Centro", margin:0.20 },
  { id:13, name:"Sopa + Segundo", cat:"Comida preparada", price:5.50, unit:"porción", emoji:"🥣", kitchen:"Cocina Familiar", tag:"⭐ 4.6", margin:0.20 },
  { id:14, name:"Pollo asado", cat:"Comida preparada", price:8.00, unit:"porción", emoji:"🍖", kitchen:"Cocina Familiar", margin:0.20 },
  { id:15, name:"Pernil con yuca", cat:"Comida preparada", price:9.00, unit:"porción", emoji:"🍽️", kitchen:"Cocina Llanera", margin:0.20 },
  // Postres
  { id:16, name:"Torta de chocolate", cat:"Postres", price:4.00, unit:"porción", emoji:"🍫", kitchen:"Dulces Apure", tag:"Casero", margin:0.20 },
  { id:17, name:"Quesillo", cat:"Postres", price:2.50, unit:"porción", emoji:"🍮", kitchen:"Dulces Apure", margin:0.20 },
  { id:18, name:"Bienmesabe", cat:"Postres", price:3.00, unit:"porción", emoji:"🍯", kitchen:"Postres Caseros", margin:0.20 },
  { id:19, name:"Helado artesanal", cat:"Postres", price:2.00, unit:"vasito", emoji:"🍨", kitchen:"Postres Caseros", margin:0.20 },
  // Jugos y bebidas
  { id:20, name:"Jugo de parchita", cat:"Jugos y bebidas", price:2.00, unit:"500ml", emoji:"🥤", kitchen:"Jugos Naturales", margin:0.20 },
  { id:21, name:"Jugo de mango", cat:"Jugos y bebidas", price:2.00, unit:"500ml", emoji:"🥭", kitchen:"Jugos Naturales", margin:0.20 },
  { id:22, name:"Agua de panela", cat:"Jugos y bebidas", price:1.50, unit:"500ml", emoji:"🫖", kitchen:"Jugos Naturales", margin:0.20 },
  { id:23, name:"Batido de lechoza", cat:"Jugos y bebidas", price:2.50, unit:"500ml", emoji:"🍹", kitchen:"Jugos Naturales", margin:0.20 },
  // Pan y repostería
  { id:24, name:"Pan casero (12 und)", cat:"Pan y repostería", price:3.00, unit:"docena", emoji:"🍞", kitchen:"Panadería Casera", tag:"Fresco", margin:0.20 },
  { id:25, name:"Cachitos de jamón", cat:"Pan y repostería", price:3.50, unit:"6 und", emoji:"🥐", kitchen:"Panadería Casera", margin:0.20 },
  { id:26, name:"Tequeños (10 und)", cat:"Pan y repostería", price:4.00, unit:"10 und", emoji:"🧀", kitchen:"Panadería Casera", tag:"Popular", margin:0.20 },
  { id:27, name:"Ponqué casero", cat:"Pan y repostería", price:5.00, unit:"porción", emoji:"🎂", kitchen:"Panadería Casera", margin:0.20 },
];

// ─── ESTILOS ───────────────────────────────────────────────
const s = {
  app:{ fontFamily:"'Segoe UI',sans-serif", background:"#f8fafc", minHeight:"100vh", maxWidth:430, margin:"0 auto" },
  header:{ background:PRIMARY, padding:"12px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:100 },
  logo:{ color:"#fff", fontWeight:700, fontSize:18 },
  cityBadge:{ background:ACCENT, color:PRIMARY, fontSize:10, fontWeight:700, padding:"2px 8px", borderRadius:20, marginLeft:6 },
  cartBtn:{ background:"rgba(255,255,255,0.12)", border:"none", borderRadius:20, padding:"6px 12px", color:"#fff", display:"flex", alignItems:"center", gap:6, cursor:"pointer", fontSize:13 },
  cartCount:{ background:ACCENT, color:PRIMARY, borderRadius:"50%", width:18, height:18, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700 },
  banner:{ background:"linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)", padding:"16px", color:"#fff" },
  bannerTitle:{ fontSize:19, fontWeight:700, margin:"0 0 2px" },
  bannerSub:{ fontSize:12, color:"rgba(255,255,255,0.7)", margin:"0 0 10px" },
  badgeRow:{ display:"flex", gap:6, flexWrap:"wrap" },
  badge:{ fontSize:10, fontWeight:600, padding:"3px 9px", borderRadius:12, display:"inline-block" },
  greenBadge:{ background:"#22c55e", color:"#fff" },
  amberBadge:{ background:ACCENT, color:PRIMARY },
  tabRow:{ display:"flex", background:PRIMARY, borderTop:"1px solid rgba(255,255,255,0.1)" },
  tabBtn:(a)=>({ flex:1, padding:"10px 0", border:"none", background:"transparent", color: a?"#fff":"rgba(255,255,255,0.5)", fontWeight: a?700:400, fontSize:14, cursor:"pointer", borderBottom: a?`2px solid ${ACCENT}`:"2px solid transparent" }),
  searchWrap:{ padding:"12px 16px 0" },
  search:{ width:"100%", padding:"10px 14px", borderRadius:12, border:"1px solid #e2e8f0", fontSize:14, background:"#fff", boxSizing:"border-box", outline:"none" },
  catScroll:{ display:"flex", gap:8, padding:"12px 16px", overflowX:"auto" },
  catBtn:(a)=>({ background: a?PRIMARY:"#fff", color: a?"#fff":"#64748b", border: a?"none":"1px solid #e2e8f0", borderRadius:20, padding:"6px 14px", fontSize:13, fontWeight:500, cursor:"pointer", whiteSpace:"nowrap", flexShrink:0 }),
  section:{ padding:"0 16px 16px" },
  sectionTitle:{ fontSize:12, fontWeight:700, color:"#94a3b8", letterSpacing:1, margin:"14px 0 8px", textTransform:"uppercase" },
  grid:{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 },
  card:{ background:"#fff", borderRadius:14, padding:12, border:"1px solid #f1f5f9", display:"flex", flexDirection:"column", gap:5 },
  cardEmoji:{ fontSize:34, textAlign:"center", padding:"4px 0" },
  cardName:{ fontSize:13, fontWeight:600, color:"#1e293b", lineHeight:1.3 },
  cardKitchen:{ fontSize:10, color:"#94a3b8" },
  cardBottom:{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:"auto" },
  cardPrice:{ fontSize:15, fontWeight:700, color:PRIMARY },
  cardUnit:{ fontSize:10, color:"#94a3b8" },
  addBtn:{ background:PRIMARY, color:"#fff", border:"none", borderRadius:20, width:30, height:30, fontSize:20, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 },
  tag:{ fontSize:10, fontWeight:600, background:"#fef3c7", color:"#92400e", padding:"2px 7px", borderRadius:8, alignSelf:"flex-start" },
  qtyRow:{ display:"flex", alignItems:"center", gap:5 },
  qtyBtn:{ background:"#f1f5f9", border:"none", borderRadius:"50%", width:26, height:26, cursor:"pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center" },
  qtyNum:{ fontSize:14, fontWeight:700, minWidth:16, textAlign:"center" },
  // Servicios
  svcCard:{ background:"#fff", borderRadius:14, padding:14, border:"1px solid #f1f5f9", display:"flex", gap:12, alignItems:"flex-start" },
  svcEmoji:{ fontSize:30, width:40, textAlign:"center", flexShrink:0 },
  svcInfo:{ flex:1 },
  svcName:{ fontSize:14, fontWeight:700, color:"#1e293b" },
  svcDesc:{ fontSize:12, color:"#64748b", margin:"2px 0 6px", lineHeight:1.4 },
  svcPrice:{ fontSize:12, fontWeight:600 },
  svcBtn:{ background:PRIMARY, color:"#fff", border:"none", borderRadius:10, padding:"7px 14px", fontSize:12, fontWeight:600, cursor:"pointer", flexShrink:0, alignSelf:"center" },
  // Panel proveedor
  provCard:{ background:"#fff", borderRadius:14, padding:16, border:"1px solid #f1f5f9", marginBottom:10 },
  provTitle:{ fontSize:15, fontWeight:700, color:PRIMARY, marginBottom:12 },
  provInput:{ width:"100%", padding:"10px 14px", borderRadius:10, border:"1px solid #e2e8f0", fontSize:14, marginBottom:8, boxSizing:"border-box", outline:"none" },
  provLabel:{ fontSize:12, fontWeight:600, color:"#64748b", marginBottom:3, display:"block" },
  // Overlay / sheets
  overlay:{ position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", zIndex:200, display:"flex", alignItems:"flex-end", justifyContent:"center" },
  sheet:{ background:"#fff", borderRadius:"20px 20px 0 0", width:"100%", maxWidth:430, maxHeight:"88vh", overflowY:"auto", padding:20 },
  handle:{ width:40, height:4, background:"#e2e8f0", borderRadius:2, margin:"0 auto 16px" },
  sheetTitle:{ fontSize:18, fontWeight:700, color:PRIMARY, marginBottom:14 },
  cartItem:{ display:"flex", alignItems:"center", gap:10, padding:"10px 0", borderBottom:"1px solid #f1f5f9" },
  summaryRow:{ display:"flex", justifyContent:"space-between", padding:"5px 0", fontSize:14 },
  summaryLabel:{ color:"#64748b" },
  summaryVal:{ fontWeight:600, color:"#1e293b" },
  totalRow:{ display:"flex", justifyContent:"space-between", padding:"10px 0 0", fontSize:16, borderTop:"1px solid #e2e8f0", marginTop:4 },
  freeTag:{ background:"#dcfce7", color:"#15803d", fontSize:11, fontWeight:600, padding:"2px 8px", borderRadius:8 },
  progWrap:{ background:"#f1f5f9", borderRadius:8, padding:"10px 12px", margin:"10px 0" },
  progTrack:{ background:"#e2e8f0", borderRadius:4, height:6, overflow:"hidden", margin:"6px 0" },
  progFill:(p)=>({ background:"#22c55e", height:"100%", width:`${Math.min(p,100)}%`, borderRadius:4, transition:"width 0.3s" }),
  btn:{ background:PRIMARY, color:"#fff", border:"none", borderRadius:14, padding:"14px", fontSize:15, fontWeight:700, width:"100%", cursor:"pointer", marginTop:10 },
  btnGray:{ background:"#f1f5f9", color:"#64748b", border:"none", borderRadius:14, padding:"13px", fontSize:14, fontWeight:600, width:"100%", cursor:"pointer", marginTop:8 },
  btnWa:{ background:"#25d366", color:"#fff", border:"none", borderRadius:14, padding:"13px", fontSize:14, fontWeight:700, width:"100%", cursor:"pointer", marginBottom:10 },
  input:{ width:"100%", padding:"11px 14px", borderRadius:12, border:"1px solid #e2e8f0", fontSize:14, marginBottom:10, boxSizing:"border-box", outline:"none" },
  label:{ fontSize:12, fontWeight:600, color:"#64748b", marginBottom:4, display:"block" },
  infoBox:{ background:"#f1f5f9", borderRadius:12, padding:"10px 14px", marginBottom:8 },
};

// ─── COMPONENTES ───────────────────────────────────────────
export default function App() {
  const [mainTab, setMainTab] = useState("Productos");
  const [cat, setCat] = useState("Todo");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState({});
  const [sheet, setSheet] = useState(null);
  const [zone, setZone] = useState("central");
  const [form, setForm] = useState({ nombre:"", telefono:"", direccion:"", pago:"pago_movil" });
  const [selService, setSelService] = useState(null);
  const [svcForm, setSvcForm] = useState({ nombre:"", telefono:"", direccion:"", detalle:"" });
  // Proveedor
  const [provView, setProvView] = useState("login");
  const [provForm, setProvForm] = useState({ nombre:"", negocio:"", categoria:"Comida preparada", telefono:"", pass:"" });
  const [provProducts, setProvProducts] = useState([]);
  const [newProd, setNewProd] = useState({ name:"", price:"", unit:"porción", emoji:"🍱", disponible:true });
  const [provLogged, setProvLogged] = useState(false);

  const filtered = PRODUCTS.filter(p =>
    (cat === "Todo" || p.cat === cat) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const catGroups = PRODUCT_CATS.filter(c => c !== "Todo").map(c => ({
    cat: c,
    items: filtered.filter(p => p.cat === c)
  })).filter(g => g.items.length > 0);

  const add = (p) => setCart(c => ({ ...c, [p.id]:{ ...p, qty:(c[p.id]?.qty||0)+1 } }));
  const remove = (id) => setCart(c => {
    const n = { ...c };
    n[id].qty > 1 ? n[id] = { ...n[id], qty:n[id].qty-1 } : delete n[id];
    return n;
  });

  const items = Object.values(cart);
  const count = items.reduce((a,i) => a+i.qty, 0);
  const sub = items.reduce((a,i) => a+i.price*i.qty, 0);

  const hasSuperOnly = items.every(i => i.cat === "Supermercado");
  const freeMin = hasSuperOnly
    ? (zone === "central" ? FREE_DELIVERY_SUPER_CENTRAL : FREE_DELIVERY_SUPER_OUTSIDE)
    : (zone === "central" ? FREE_DELIVERY_FOOD : FREE_DELIVERY_FOOD + 2);
  const deliveryCost = zone === "central" ? DELIVERY_CENTRAL : DELIVERY_OUTSIDE;
  const del = sub >= freeMin ? 0 : deliveryCost;
  const total = sub + del;
  const pct = (sub / freeMin) * 100;

  const myGain = items.reduce((a,i) => a + (i.price * i.qty * (i.margin||0.05)), 0);

  const confirm = () => {
    if (!form.nombre || !form.telefono || !form.direccion) return alert("Completa todos los campos");
    setSheet("success");
  };

  const sendWa = () => {
    const lines = items.map(i => `• ${i.name} x${i.qty} — $${(i.price*i.qty).toFixed(2)}`).join("\n");
    const msg = `*Pedido ${APP_NAME} ${CITY}*\n\n${lines}\n\nSubtotal: $${sub.toFixed(2)}\nDelivery: ${del===0?"GRATIS":"$"+del.toFixed(2)}\n*Total: $${total.toFixed(2)}*\n\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nDirección: ${form.direccion}\nZona: ${zone==="central"?"Casco central":"Fuera de SF"}\nPago: ${form.pago}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
  };

  const sendSvcWa = () => {
    const msg = `*Solicitud de servicio: ${selService.name}* — ${APP_NAME} ${CITY}\n\nNombre: ${svcForm.nombre}\nTeléfono: ${svcForm.telefono}\nDirección: ${svcForm.direccion}\nDetalle: ${svcForm.detalle}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
    setSheet(null); setSelService(null); setSvcForm({ nombre:"", telefono:"", direccion:"", detalle:"" });
  };

  const QtyCtrl = ({ p }) => cart[p.id] ? (
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

  // ── RENDER ────────────────────────────────────────────────
  return (
    <div style={s.app}>
      {/* HEADER */}
      <div style={s.header}>
        <div style={{ display:"flex", alignItems:"center" }}>
          <span style={s.logo}>{APP_NAME}</span>
          <span style={s.cityBadge}>{CITY}</span>
        </div>
        <div style={{ display:"flex", gap:8, alignItems:"center" }}>
          {count > 0 && (
            <button style={s.cartBtn} onClick={() => setSheet("cart")}>
              🛒 <span style={s.cartCount}>{count}</span>
              <span style={{ fontSize:12 }}>${total.toFixed(2)}</span>
            </button>
          )}
          <button style={{ ...s.cartBtn, fontSize:12 }} onClick={() => setMainTab("proveedor")}>
            🏪 Soy proveedor
          </button>
        </div>
      </div>

      {/* TABS PRINCIPALES */}
      <div style={s.tabRow}>
        {MAIN_SECTIONS.map(t => (
          <button key={t} style={s.tabBtn(mainTab===t)} onClick={() => setMainTab(t)}>{t}</button>
        ))}
        <button style={s.tabBtn(mainTab==="proveedor")} onClick={() => setMainTab("proveedor")}>Proveedores</button>
      </div>

      {/* ══════════ SECCIÓN PRODUCTOS ══════════ */}
      {mainTab === "Productos" && (
        <>
          <div style={s.banner}>
            <p style={s.bannerTitle}>Delivery en {CITY} 🛵</p>
            <p style={s.bannerSub}>Mercado + comida lista + postres a tu puerta</p>
            <div style={s.badgeRow}>
              <span style={{ ...s.badge, ...s.greenBadge }}>✓ Delivery gratis desde $8 (comida)</span>
              <span style={{ ...s.badge, ...s.amberBadge }}>Casco central $1 · Fuera $2</span>
            </div>
          </div>
          <div style={s.searchWrap}>
            <input style={s.search} placeholder="🔍  Buscar productos..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div style={s.catScroll}>
            {PRODUCT_CATS.map(c => (
              <button key={c} style={s.catBtn(cat===c)} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
          <div style={s.section}>
            {catGroups.length === 0 && (
              <div style={{ textAlign:"center", padding:"40px 0", color:"#94a3b8" }}>
                <div style={{ fontSize:40 }}>🔍</div><p>No encontramos ese producto</p>
              </div>
            )}
            {catGroups.map(g => (
              <div key={g.cat}>
                <div style={s.sectionTitle}>
                  {g.cat==="Supermercado"?"🛒":g.cat==="Comida preparada"?"🍱":g.cat==="Postres"?"🍰":g.cat==="Jugos y bebidas"?"🥤":"🍞"} {g.cat}
                </div>
                <div style={s.grid}>{g.items.map(p => <Card key={p.id} p={p} />)}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ══════════ SECCIÓN SERVICIOS ══════════ */}
      {mainTab === "Servicios" && (
        <>
          <div style={{ ...s.banner, paddingBottom:14 }}>
            <p style={s.bannerTitle}>Servicios en {CITY} ⚡</p>
            <p style={{ ...s.bannerSub, margin:0 }}>Todo lo que necesitas sin salir de casa</p>
          </div>
          <div style={{ ...s.section, marginTop:14 }}>
            {SERVICES.map(sv => (
              <div key={sv.id} style={{ ...s.svcCard, marginBottom:10 }}>
                <div style={{ ...s.svcEmoji, background:sv.color, borderRadius:12, padding:"8px 0" }}>{sv.emoji}</div>
                <div style={s.svcInfo}>
                  <div style={s.svcName}>{sv.name}</div>
                  <div style={s.svcDesc}>{sv.desc}</div>
                  <div style={{ ...s.svcPrice, color:sv.textColor, background:sv.color, display:"inline-block", padding:"2px 8px", borderRadius:8 }}>{sv.price}</div>
                </div>
                <button style={s.svcBtn} onClick={() => { setSelService(sv); setSheet("service"); }}>Solicitar</button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ══════════ SECCIÓN PROVEEDOR ══════════ */}
      {mainTab === "proveedor" && (
        <div style={{ ...s.section, marginTop:16 }}>
          {!provLogged ? (
            <div style={s.provCard}>
              <div style={s.provTitle}>
                {provView === "login" ? "🏪 Acceso proveedores" : "📝 Registro de proveedor"}
              </div>
              {provView === "register" && (
                <>
                  <label style={s.provLabel}>Tu nombre</label>
                  <input style={s.provInput} placeholder="María González" value={provForm.nombre} onChange={e => setProvForm({...provForm, nombre:e.target.value})} />
                  <label style={s.provLabel}>Nombre de tu negocio / cocina</label>
                  <input style={s.provInput} placeholder="Cocina de María" value={provForm.negocio} onChange={e => setProvForm({...provForm, negocio:e.target.value})} />
                  <label style={s.provLabel}>Categoría</label>
                  <select style={{ ...s.provInput, background:"#fff" }} value={provForm.categoria} onChange={e => setProvForm({...provForm, categoria:e.target.value})}>
                    <option>Comida preparada</option>
                    <option>Postres</option>
                    <option>Jugos y bebidas</option>
                    <option>Pan y repostería</option>
                  </select>
                  <label style={s.provLabel}>WhatsApp</label>
                  <input style={s.provInput} placeholder="+58 424-000-0000" value={provForm.telefono} onChange={e => setProvForm({...provForm, telefono:e.target.value})} />
                </>
              )}
              <label style={s.provLabel}>Contraseña</label>
              <input style={s.provInput} type="password" placeholder="••••••••" value={provForm.pass} onChange={e => setProvForm({...provForm, pass:e.target.value})} />
              <button style={s.btn} onClick={() => {
                if (provView === "login" && provForm.pass.length >= 4) setProvLogged(true);
                else if (provView === "register" && provForm.nombre && provForm.negocio && provForm.pass.length >= 4) setProvLogged(true);
                else alert("Completa todos los campos");
              }}>
                {provView === "login" ? "Entrar" : "Registrarme como proveedor"}
              </button>
              <button style={s.btnGray} onClick={() => setProvView(provView==="login"?"register":"login")}>
                {provView === "login" ? "¿Eres nuevo? Regístrate aquí" : "¿Ya tienes cuenta? Inicia sesión"}
              </button>
            </div>
          ) : (
            <>
              <div style={{ ...s.provCard, background:"#f0fdf4", borderColor:"#bbf7d0" }}>
                <div style={{ fontSize:13, fontWeight:700, color:"#15803d" }}>✓ Bienvenida, {provForm.negocio || "Proveedor"}</div>
                <div style={{ fontSize:12, color:"#64748b", marginTop:2 }}>Gestiona tus productos del día</div>
              </div>

              {/* Agregar producto */}
              <div style={s.provCard}>
                <div style={s.provTitle}>➕ Agregar producto del día</div>
                <label style={s.provLabel}>Nombre del producto</label>
                <input style={s.provInput} placeholder="Ej: Torta de zanahoria" value={newProd.name} onChange={e => setNewProd({...newProd, name:e.target.value})} />
                <label style={s.provLabel}>Emoji</label>
                <input style={s.provInput} placeholder="🍰" value={newProd.emoji} onChange={e => setNewProd({...newProd, emoji:e.target.value})} />
                <label style={s.provLabel}>Precio ($)</label>
                <input style={s.provInput} type="number" placeholder="3.50" value={newProd.price} onChange={e => setNewProd({...newProd, price:e.target.value})} />
                <label style={s.provLabel}>Unidad</label>
                <input style={s.provInput} placeholder="porción, kg, unidad..." value={newProd.unit} onChange={e => setNewProd({...newProd, unit:e.target.value})} />
                <button style={s.btn} onClick={() => {
                  if (!newProd.name || !newProd.price) return alert("Completa nombre y precio");
                  setProvProducts(pp => [...pp, { ...newProd, id:`prov_${Date.now()}`, cat:provForm.categoria, kitchen:provForm.negocio, margin:0.20 }]);
                  setNewProd({ name:"", price:"", unit:"porción", emoji:"🍱", disponible:true });
                }}>Publicar producto hoy</button>
              </div>

              {/* Mis productos del día */}
              {provProducts.length > 0 && (
                <div style={s.provCard}>
                  <div style={s.provTitle}>📋 Tus productos de hoy</div>
                  {provProducts.map((p,i) => (
                    <div key={p.id} style={{ display:"flex", alignItems:"center", gap:10, padding:"8px 0", borderBottom:"1px solid #f1f5f9" }}>
                      <span style={{ fontSize:22 }}>{p.emoji}</span>
                      <div style={{ flex:1 }}>
                        <div style={{ fontSize:13, fontWeight:600 }}>{p.name}</div>
                        <div style={{ fontSize:11, color:"#64748b" }}>${parseFloat(p.price).toFixed(2)} / {p.unit}</div>
                      </div>
                      <div style={{ display:"flex", gap:6, alignItems:"center" }}>
                        <div style={{ fontSize:11, background: p.disponible?"#dcfce7":"#fee2e2", color: p.disponible?"#15803d":"#be123c", padding:"2px 8px", borderRadius:8, fontWeight:600 }}>
                          {p.disponible ? "Disponible" : "Agotado"}
                        </div>
                        <button style={{ background:"none", border:"none", cursor:"pointer", fontSize:16 }}
                          onClick={() => setProvProducts(pp => pp.map((x,j) => j===i ? {...x, disponible:!x.disponible} : x))}>
                          🔄
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button style={s.btnGray} onClick={() => { setProvLogged(false); setProvProducts([]); }}>
                Cerrar sesión
              </button>
            </>
          )}
        </div>
      )}

      {/* BOTÓN FLOTANTE */}
      {count > 0 && !sheet && mainTab === "Productos" && (
        <div style={{ position:"fixed", bottom:16, left:"50%", transform:"translateX(-50%)", zIndex:150, width:"calc(100% - 32px)", maxWidth:398 }}>
          <button style={{ ...s.btn, margin:0, display:"flex", justifyContent:"space-between", alignItems:"center" }} onClick={() => setSheet("cart")}>
            <span>🛒 Ver pedido ({count})</span>
            <span>${total.toFixed(2)}</span>
          </button>
        </div>
      )}

      {/* ══ SHEET: CARRITO ══ */}
      {sheet === "cart" && (
        <div style={s.overlay} onClick={() => setSheet(null)}>
          <div style={s.sheet} onClick={e => e.stopPropagation()}>
            <div style={s.handle} />
            <div style={s.sheetTitle}>Tu pedido</div>
            {/* Zona */}
            <div style={{ ...s.infoBox, marginBottom:10 }}>
              <div style={{ fontSize:12, fontWeight:600, color:"#64748b", marginBottom:6 }}>¿Dónde entregamos?</div>
              <div style={{ display:"flex", gap:8 }}>
                {["central","outside"].map(z => (
                  <button key={z} onClick={() => setZone(z)} style={{ flex:1, padding:"7px", borderRadius:10, border: zone===z?`2px solid ${PRIMARY}`:"1px solid #e2e8f0", background: zone===z?"#0f172a":"#fff", color: zone===z?"#fff":"#64748b", fontSize:12, fontWeight:600, cursor:"pointer" }}>
                    {z==="central" ? "🏙️ Casco central ($1)" : "🌄 Fuera de SF ($2)"}
                  </button>
                ))}
              </div>
            </div>
            {items.map(i => (
              <div key={i.id} style={s.cartItem}>
                <span style={{ fontSize:24, width:32, textAlign:"center" }}>{i.emoji}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:13, fontWeight:500 }}>{i.name}</div>
                  {i.kitchen && <div style={{ fontSize:10, color:"#94a3b8" }}>{i.kitchen}</div>}
                </div>
                <div style={s.qtyRow}>
                  <button style={s.qtyBtn} onClick={() => remove(i.id)}>−</button>
                  <span style={s.qtyNum}>{i.qty}</span>
                  <button style={s.qtyBtn} onClick={() => add(i)}>+</button>
                </div>
                <div style={{ fontSize:13, fontWeight:700, color:PRIMARY, marginLeft:8, minWidth:50, textAlign:"right" }}>${(i.price*i.qty).toFixed(2)}</div>
              </div>
            ))}
            {sub < freeMin && (
              <div style={s.progWrap}>
                <div style={{ fontSize:12, color:"#64748b" }}>Te faltan <strong style={{ color:PRIMARY }}>${(freeMin-sub).toFixed(2)}</strong> para delivery gratis</div>
                <div style={s.progTrack}><div style={s.progFill(pct)} /></div>
              </div>
            )}
            <div style={{ marginTop:10 }}>
              <div style={s.summaryRow}><span style={s.summaryLabel}>Subtotal</span><span style={s.summaryVal}>${sub.toFixed(2)}</span></div>
              <div style={s.summaryRow}>
                <span style={s.summaryLabel}>Delivery</span>
                {del===0 ? <span style={s.freeTag}>GRATIS</span> : <span style={s.summaryVal}>${del.toFixed(2)}</span>}
              </div>
              <div style={s.totalRow}><span style={{ fontWeight:700 }}>Total</span><span style={{ fontWeight:700, fontSize:17 }}>${total.toFixed(2)}</span></div>
            </div>
            <button style={s.btn} onClick={() => setSheet("checkout")}>Continuar →</button>
            <button style={s.btnGray} onClick={() => setSheet(null)}>Seguir comprando</button>
          </div>
        </div>
      )}

      {/* ══ SHEET: CHECKOUT ══ */}
      {sheet === "checkout" && (
        <div style={s.overlay} onClick={() => setSheet("cart")}>
          <div style={s.sheet} onClick={e => e.stopPropagation()}>
            <div style={s.handle} />
            <div style={s.sheetTitle}>¿A dónde enviamos?</div>
            <label style={s.label}>Tu nombre</label>
            <input style={s.input} placeholder="María González" value={form.nombre} onChange={e => setForm({...form, nombre:e.target.value})} />
            <label style={s.label}>WhatsApp</label>
            <input style={s.input} placeholder="+58 424-000-0000" value={form.telefono} onChange={e => setForm({...form, telefono:e.target.value})} />
            <label style={s.label}>Dirección de entrega</label>
            <input style={s.input} placeholder="Calle, número, referencia..." value={form.direccion} onChange={e => setForm({...form, direccion:e.target.value})} />
            <label style={s.label}>Método de pago</label>
            <select style={{ ...s.input, background:"#fff" }} value={form.pago} onChange={e => setForm({...form, pago:e.target.value})}>
              <option value="pago_movil">Pago Móvil</option>
              <option value="zelle">Zelle</option>
              <option value="efectivo">Efectivo al recibir</option>
            </select>
            <div style={s.infoBox}>
              <div style={s.summaryRow}><span style={s.summaryLabel}>Total</span><span style={{ fontWeight:700, fontSize:16, color:PRIMARY }}>${total.toFixed(2)}</span></div>
              <div style={{ fontSize:11, color:"#94a3b8", marginTop:2 }}>Entrega estimada: 40–60 min</div>
            </div>
            <button style={s.btn} onClick={confirm}>✓ Confirmar — ${total.toFixed(2)}</button>
            <button style={s.btnGray} onClick={() => setSheet("cart")}>← Volver</button>
          </div>
        </div>
      )}

      {/* ══ SHEET: ÉXITO ══ */}
      {sheet === "success" && (
        <div style={s.overlay}>
          <div style={s.sheet}>
            <div style={s.handle} />
            <div style={{ textAlign:"center", padding:"16px 0" }}>
              <div style={{ fontSize:52, marginBottom:10 }}>🎉</div>
              <div style={{ fontSize:20, fontWeight:700, color:PRIMARY, marginBottom:6 }}>¡Pedido confirmado!</div>
              <div style={{ fontSize:13, color:"#64748b", lineHeight:1.6, marginBottom:20 }}>
                Hola <strong>{form.nombre}</strong>, tu pedido está en camino.<br />
                Te escribimos al <strong>{form.telefono}</strong>.<br />
                Tiempo estimado: <strong>40–60 min</strong>
              </div>
              <button style={s.btnWa} onClick={sendWa}>📲 Recibir confirmación por WhatsApp</button>
              <button style={s.btnGray} onClick={() => { setCart({}); setSheet(null); setForm({ nombre:"", telefono:"", direccion:"", pago:"pago_movil" }); }}>
                Hacer otro pedido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══ SHEET: SERVICIO ══ */}
      {sheet === "service" && selService && (
        <div style={s.overlay} onClick={() => setSheet(null)}>
          <div style={s.sheet} onClick={e => e.stopPropagation()}>
            <div style={s.handle} />
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
              <span style={{ fontSize:30 }}>{selService.emoji}</span>
              <div style={s.sheetTitle}>{selService.name}</div>
            </div>
            <label style={s.label}>Tu nombre</label>
            <input style={s.input} placeholder="María González" value={svcForm.nombre} onChange={e => setSvcForm({...svcForm, nombre:e.target.value})} />
            <label style={s.label}>WhatsApp</label>
            <input style={s.input} placeholder="+58 424-000-0000" value={svcForm.telefono} onChange={e => setSvcForm({...svcForm, telefono:e.target.value})} />
            <label style={s.label}>Dirección</label>
            <input style={s.input} placeholder="¿Dónde necesitas el servicio?" value={svcForm.direccion} onChange={e => setSvcForm({...svcForm, direccion:e.target.value})} />
            <label style={s.label}>Detalle de tu solicitud</label>
            <input style={s.input} placeholder={
              selService.name==="Mototaxi" ? "¿A dónde vas?" :
              selService.name==="Taxi" ? "Origen y destino" :
              selService.name==="Lavandería" ? "¿Cuánta ropa aproximadamente?" :
              selService.name==="Limpieza del hogar" ? "¿Cuántas habitaciones? ¿Qué día?" :
              selService.name==="Encomiendas locales" ? "¿Qué enviamos y a dónde?" :
              "Cuéntanos lo que necesitas"
            } value={svcForm.detalle} onChange={e => setSvcForm({...svcForm, detalle:e.target.value})} />
            <div style={{ ...s.infoBox, marginBottom:8 }}>
              <div style={{ fontSize:12, color:"#64748b" }}>💬 Te contactaremos por WhatsApp para confirmar disponibilidad y precio exacto.</div>
            </div>
            <button style={s.btnWa} onClick={sendSvcWa}>📲 Enviar solicitud por WhatsApp</button>
            <button style={s.btnGray} onClick={() => setSheet(null)}>Cancelar</button>
          </div>
        </div>
      )}

      <div style={{ height:80 }} />
    </div>
  );
}
