// BUILD:1776395781
"use client"; // Apure Market v1776307949
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://cdiuboyklymirssxperd.supabase.co",
  "sb_publishable_WkUnC5ElLD9xRbhzG_OKFw_13gOTwGk"
);

const CITY = "San Fernando";
const APP_NAME = "Apure Market";
const WA = "584243232671";
const ADMIN_USER = "admin";
const ADMIN_PASS = "mimercado2024";
const P = "#25D366";
const A = "#FB8C00";
const DARK = "#2E2E2E";
const LIGHT = "#F6F6F6";
const P2 = "#1aab52";

const MAIN_TABS = ["Inicio","Supermercado","Negocios locales","Feria de comidas","Servicios"];
const SEC_TABS = ["Clasificados","Mercadito local"];
const NEGOCIO_CATS = [
  {cat:"Ropa y calzado",emoji:"👗",color:"#fdf2f8",tc:"#9d174d"},
  {cat:"Accesorios y joyería",emoji:"💍",color:"#fefce8",tc:"#854d0e"},
  {cat:"Farmacia y salud",emoji:"💊",color:"#f0fdf4",tc:"#15803d"},
  {cat:"Ferretería",emoji:"🔧",color:"#fff7ed",tc:"#c2410c"},
  {cat:"Tecnología",emoji:"📱",color:"#eff6ff",tc:"#1d4ed8"},
  {cat:"Hogar y muebles",emoji:"🏠",color:"#f0fdf4",tc:"#15803d"},
  {cat:"Regalos",emoji:"🎁",color:"#fdf4ff",tc:"#7c3aed"},
  {cat:"Belleza",emoji:"✂️",color:"#fdf2f8",tc:"#9d174d"},
  {cat:"Cuidado personal",emoji:"🧴",color:"#ecfdf5",tc:"#065f46"},
  {cat:"Mascotas",emoji:"🐾",color:"#fff7ed",tc:"#c2410c"},
  {cat:"Otros",emoji:"📦",color:"#f8fafc",tc:"#475569"},
];
const SUPER_CATS = ["Snacks","Granos y cereales","Bebidas","Lácteos","Panadería","Aceites y condimentos","Enlatados","Limpieza del hogar","Aseo personal","Proteínas","Frutas y verduras"];
const PROV_CATS = ["Comida preparada","Postres","Jugos y bebidas","Pan y repostería"];
const ALL_CATS = ["Todo","Supermercado",...PROV_CATS];
const PAGOS = ["Pago Móvil","Zelle","Efectivo al recibir","Binance/USDT"];

const CLASIF_TIPOS = ["Vehículos","Motos","Inmuebles"];
const VEHICULO_MARCAS = ["Toyota","Ford","Chevrolet","Hyundai","Kia","Nissan","Mitsubishi","Honda","Mazda","Jeep","Dodge","RAM","Otro"];
const MOTO_MARCAS = ["Honda","Yamaha","Suzuki","Kawasaki","TVS","AKT","Otro"];
const TRANSMISION = ["Manual","Automático"];
const COMBUSTIBLE = ["Gasolina","Diesel","Eléctrico","Híbrido"];
const TIPO_OPERACION = ["Venta","Alquiler"];
const REMATE_CATS = ["Electrodomésticos","Ropa y calzado","Muebles","Electrónica","Repuestos","Herramientas","Hogar","Juguetes","Otros"];
const TIPO_NEGOCIO = ["Restaurante / Cocina / Comida","Tienda / Negocio local","Transporte y encomiendas","Lavandería","Otro servicio"];
const NEGOCIO_LOCAL_CATS = [
  {cat:"Ropa y calzado",emoji:"👗",color:"#fce7f3",tc:"#be185d"},
  {cat:"Accesorios y joyería",emoji:"💍",color:"#fef3c7",tc:"#92400e"},
  {cat:"Farmacia y salud",emoji:"💊",color:"#dbeafe",tc:"#1d4ed8"},
  {cat:"Ferretería",emoji:"🔧",color:"#f1f5f9",tc:"#475569"},
  {cat:"Tecnología",emoji:"📱",color:"#ede9fe",tc:"#7c3aed"},
  {cat:"Hogar y muebles",emoji:"🏠",color:"#dcfce7",tc:"#15803d"},
  {cat:"Regalos",emoji:"🎁",color:"#fff7ed",tc:"#c2410c"},
  {cat:"Belleza",emoji:"✂️",color:"#fdf4ff",tc:"#a21caf"},
  {cat:"Cuidado personal",emoji:"🧴",color:"#f0fdf4",tc:"#15803d"},
  {cat:"Mascotas",emoji:"🐾",color:"#fef9c3",tc:"#854d0e"},
  {cat:"Otros",emoji:"📦",color:"#f8fafc",tc:"#64748b"},
];
const NEGOCIO_CATS_RESTAURANTE = ["Comida criolla","Comida rápida","Pizzería","Mariscos","Panadería/Pastelería","Jugos y bebidas","Postres","Otro"];
const TIPOS_OPERACION_GASTRO = [
  {value:"restaurante",label:"🏠 Restaurante — Local físico abierto al público",desc:"Tiene local, atiende en sitio y puede hacer delivery"},
  {value:"cocina_oscura",label:"🍱 Cocina preparada en casa — Solo delivery",desc:"Prepara desde casa, solo entrega a domicilio, sin local físico"},
  {value:"panaderia",label:"🍞 Panadería / Pastelería / Repostería",desc:"Panadería, tortas, dulces, postres y repostería"},
  {value:"comida_rapida",label:"⚡ Comida rápida — Puesto ambulante o local",desc:"Perros, hamburguesas, empanadas, pepitos, comida de calle"},
];
const TIPOS_COMIDA = [
  "Parrilla","Carne asada","Pollo a la brasa","Costillas","BBQ / Ahumados",
  "Hamburguesas","Perros calientes","Pepitos","Club house","Papas fritas","Salchipapas","Alitas / Nuggets",
  "Comida criolla","Cachapas","Arepas","Pabellón","Pisillo","Empanadas","Asado llanero",
  "Pizzería","Pastas","Lasaña",
  "Mondongo","Caldos","Hervidos",
  "Pescado frito","Mariscos","Ceviches",
  "Comida china","Comida asiática","Comida mexicana","Comida árabe","Comida peruana",
  "Panadería","Pastelería","Postres","Tortas","Repostería",
  "Jugos naturales","Batidos","Bebidas frías","Café",
  "Comida saludable","Vegetariana","Vegana",
  "Combos","Menú del día","Especiales","Otros",
];
// Avatar inteligente para proveedores de comida
const getAvatarColor=(name)=>{const colors=["#f97316","#ec4899","#8b5cf6","#06b6d4","#10b981","#f59e0b","#ef4444","#6366f1"];const i=name?.charCodeAt(0)%colors.length||0;return colors[i];};
const TIPO_GASTRO_LABEL = {
  restaurante:"🍽️ Restaurante · Atención en local",
  cocina_oscura:"🚚 Cocina de delivery · Solo a domicilio",
  panaderia:"🍞 Panadería · Postres y repostería",
  comida_rapida:"⚡ Comida rápida",
};
const NEGOCIO_CATS_TRANSPORTE = ["Mototaxi","Taxi","Línea de transporte","Encomiendas"];
const SERVICIO_CATS = ["Plomería","Electricidad","Mecánica","Belleza y estética","Costura y modistería","Clases y tutorías","Limpieza","Construcción","Transporte","Salud","Otros"];

const SVCS = [
  {id:"s1",name:"Mototaxi",emoji:"🛵",desc:"Te llevamos a donde necesites",price:"Desde $1.00",bg:"#fef3c7",tc:"#92400e"},
  {id:"s2",name:"Taxi",emoji:"🚗",desc:"Viajes cómodos y seguros en SF",price:"Desde $2.00",bg:"#e0f2fe",tc:"#0369a1"},
  {id:"s3",name:"Lavandería",emoji:"👕",desc:"Recogemos y entregamos limpia",price:"Desde $3.00/kg",bg:"#f0fdf4",tc:"#15803d"},
  {id:"s4",name:"Limpieza del hogar",emoji:"🧹",desc:"Personal de confianza para tu casa",price:"Desde $10.00/día",bg:"#fdf4ff",tc:"#7e22ce"},
  {id:"s5",name:"Enfermería a domicilio",emoji:"💉",desc:"Atención profesional en tu hogar",price:"Desde $5.00",bg:"#fff1f2",tc:"#be123c"},
  {id:"s6",name:"Encomiendas locales",emoji:"📦",desc:"Enviamos lo que necesites",price:"$1.00 – $2.00",bg:"#fff7ed",tc:"#c2410c"},
];

const s = {
  app:{fontFamily:"'Poppins','Segoe UI',system-ui,sans-serif",background:"#f8fafc",minHeight:"100vh",maxWidth:430,margin:"0 auto",paddingBottom:20},
  hdr:{background:"#fff",padding:"10px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 8px rgba(0,0,0,0.08)",borderBottom:"1px solid #f0f0f0"},
  logo:{color:DARK,fontWeight:800,fontSize:20,letterSpacing:-0.5},
  city:{background:"#f0fdf4",color:P,fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:20,marginLeft:6},
  cBtn:{background:"#f6f6f6",border:"1px solid #e0e0e0",borderRadius:20,padding:"6px 12px",color:DARK,display:"flex",alignItems:"center",gap:6,cursor:"pointer",fontSize:13},
  cN:{background:A,color:"#fff",borderRadius:"50%",width:18,height:18,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700},
  tabs:{display:"flex",background:"#fff",borderBottom:"2px solid #f0f0f0",position:"sticky",top:54,zIndex:99,boxShadow:"0 1px 4px rgba(0,0,0,0.05)",overflowX:"auto",justifyContent:"space-around"},
  tab:(a)=>({flex:1,padding:"8px 4px 6px",border:"none",background:a?"#dcfce7":"transparent",color:a?"#14532d":"#94a3b8",fontWeight:a?800:400,fontSize:8,cursor:"pointer",borderBottom:a?`4px solid #14532d`:"4px solid transparent",display:"flex",flexDirection:"column",alignItems:"center",gap:1,minWidth:0,transition:"all 0.15s"}),
  banner:{background:"linear-gradient(135deg,#25D366,#1aab52)",padding:"16px",color:"#fff"},
  bT:{fontSize:19,fontWeight:700,margin:"0 0 2px"},
  bS:{fontSize:12,color:"rgba(255,255,255,0.7)",margin:"0 0 10px"},
  bdg:(bg,c)=>({fontSize:10,fontWeight:600,background:bg,color:c,padding:"3px 9px",borderRadius:12,display:"inline-block",marginRight:6,marginBottom:4}),
  sw:{padding:"12px 16px 0"},
  si:{width:"100%",padding:"10px 14px",borderRadius:12,border:"1px solid #e2e8f0",fontSize:14,background:"#fff",boxSizing:"border-box",outline:"none"},
  cs:{display:"flex",gap:8,padding:"12px 16px",overflowX:"auto"},
  cb:(a)=>({background:a?P:"#fff",color:a?"#fff":"#64748b",border:a?`1px solid ${P}`:"1px solid #e2e8f0",borderRadius:20,padding:"6px 14px",fontSize:13,fontWeight:a?600:500,cursor:"pointer",whiteSpace:"nowrap",flexShrink:0,boxShadow:a?"0 2px 6px rgba(22,163,74,0.2)":"none"}),
  sec:{padding:"0 16px 16px"},
  sT:{fontSize:11,fontWeight:700,color:P,letterSpacing:0.8,margin:"14px 0 8px",textTransform:"uppercase",display:"flex",alignItems:"center",gap:4},
  grid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},
  card:{background:"#fff",borderRadius:16,padding:12,border:"1px solid #e7f3ee",display:"flex",flexDirection:"column",gap:5,boxShadow:"0 1px 4px rgba(22,163,74,0.06)"},
  cEm:{fontSize:32,textAlign:"center",padding:"4px 0"},
  cImg:{width:"100%",height:90,objectFit:"cover",borderRadius:8,marginBottom:4},
  cLogo:{width:24,height:24,borderRadius:"50%",objectFit:"cover",border:"2px solid #f1f5f9"},
  cNm:{fontSize:12,fontWeight:600,color:"#334155",lineHeight:1.3},
  cMeta:{fontSize:10,color:"#94a3b8"},
  cKt:{fontSize:10,color:"#94a3b8",display:"flex",alignItems:"center",gap:4},
  cBt:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"auto"},
  cPr:{fontSize:18,fontWeight:900,color:P,letterSpacing:-0.3},
  cUn:{fontSize:10,color:"#94a3b8"},
  aBtn:{background:P,color:"#fff",border:"none",borderRadius:20,width:32,height:32,fontSize:20,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 2px 6px rgba(22,163,74,0.3)"},
  tag:{fontSize:10,fontWeight:600,background:"#fef3c7",color:"#92400e",padding:"2px 7px",borderRadius:8,alignSelf:"flex-start"},
  promoTag:{fontSize:10,fontWeight:600,background:"#fdf4ff",color:"#7e22ce",padding:"2px 7px",borderRadius:8,alignSelf:"flex-start"},
  qR:{display:"flex",alignItems:"center",gap:5},
  qB:{background:"#f1f5f9",border:"none",borderRadius:"50%",width:26,height:26,cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center"},
  qN:{fontSize:14,fontWeight:700,minWidth:16,textAlign:"center"},
  stars:{display:"flex",gap:4,margin:"4px 0"},
  star:(f)=>({fontSize:18,cursor:"pointer",color:f?"#f59e0b":"#e2e8f0"}),
  ov:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"flex-end",justifyContent:"center"},
  sh:{background:"#fff",borderRadius:"20px 20px 0 0",width:"100%",maxWidth:430,maxHeight:"92vh",overflowY:"auto",padding:20},
  hnd:{width:40,height:4,background:"#e2e8f0",borderRadius:2,margin:"0 auto 16px"},
  shT:{fontSize:18,fontWeight:700,color:P,marginBottom:14},
  ci:{display:"flex",alignItems:"center",gap:10,padding:"10px 0",borderBottom:"1px solid #f1f5f9"},
  sr:{display:"flex",justifyContent:"space-between",padding:"5px 0",fontSize:14},
  sL:{color:"#64748b"},sV:{fontWeight:600,color:"#1e293b"},
  tR:{display:"flex",justifyContent:"space-between",padding:"10px 0 0",fontSize:16,borderTop:"1px solid #e2e8f0",marginTop:4},
  fT:{background:"#dcfce7",color:"#15803d",fontSize:11,fontWeight:600,padding:"2px 8px",borderRadius:8},
  pw:{background:"#f1f5f9",borderRadius:8,padding:"10px 12px",margin:"10px 0"},
  pt:{background:"#e2e8f0",borderRadius:4,height:6,overflow:"hidden",margin:"6px 0"},
  pf:(p)=>({background:"#22c55e",height:"100%",width:`${Math.min(p,100)}%`,borderRadius:4,transition:"width 0.3s"}),
  btn:{background:P,color:"#fff",border:"none",borderRadius:14,padding:"14px",fontSize:15,fontWeight:700,width:"100%",cursor:"pointer",marginTop:10},
  btnG:{background:"#f1f5f9",color:"#64748b",border:"none",borderRadius:14,padding:"13px",fontSize:14,fontWeight:600,width:"100%",cursor:"pointer",marginTop:8},
  btnWa:{background:"#22c55e",color:"#fff",border:"none",borderRadius:14,padding:"14px",fontSize:15,fontWeight:700,width:"100%",cursor:"pointer",marginTop:10},
  btnPurple:{background:"#7e22ce",color:"#fff",border:"none",borderRadius:14,padding:"13px",fontSize:14,fontWeight:700,width:"100%",cursor:"pointer",marginTop:8},
  btnRed:{background:"#ef4444",color:"#fff",border:"none",borderRadius:10,padding:"7px 12px",fontSize:12,fontWeight:600,cursor:"pointer"},
  btnAmber:{background:"#f59e0b",color:P,border:"none",borderRadius:10,padding:"7px 12px",fontSize:12,fontWeight:600,cursor:"pointer"},
  btnGreen:{background:P,color:"#fff",border:"none",borderRadius:10,padding:"7px 12px",fontSize:12,fontWeight:600,cursor:"pointer"},
  inp:{width:"100%",padding:"11px 14px",borderRadius:12,border:"1px solid #e2e8f0",fontSize:14,marginBottom:10,boxSizing:"border-box",outline:"none"},
  lbl:{fontSize:12,fontWeight:600,color:"#64748b",marginBottom:4,display:"block"},
  ib:{background:"#f1f5f9",borderRadius:12,padding:"10px 14px",marginBottom:8},
  pc:{background:"#fff",borderRadius:16,padding:16,border:"1px solid #e7f3ee",marginBottom:10,boxShadow:"0 1px 6px rgba(22,163,74,0.05)"},
  pT:{fontSize:15,fontWeight:700,color:P,marginBottom:12},
  msg:(ok)=>({fontSize:13,color:ok?"#15803d":"#be123c",background:ok?"#f0fdf4":"#fff1f2",padding:"8px 12px",borderRadius:8,marginBottom:10}),
  apvBtn:{flex:1,padding:"8px",borderRadius:10,border:"none",fontSize:13,fontWeight:600,cursor:"pointer"},
  promoCard:{background:"linear-gradient(135deg,#7c3aed,#4f46e5)",borderRadius:16,padding:16,margin:"0 16px 12px",color:"#fff"},
  comboCard:{background:"#fff",borderRadius:14,padding:12,border:"2px solid #f59e0b",marginBottom:10},
  admRow:(a)=>({width:"100%",padding:"10px 14px",background:a?"#0f172a":"#f8fafc",color:a?"#fff":"#1e293b",border:"1px solid #e2e8f0",borderRadius:10,fontSize:13,fontWeight:500,cursor:"pointer",textAlign:"left",marginBottom:6,display:"flex",justifyContent:"space-between",alignItems:"center"}),
  toggleBtn:(on)=>({display:"flex",alignItems:"center",gap:8,background:on?"#f0fdf4":"#fff7ed",border:`1px solid ${on?"#86efac":"#fcd34d"}`,borderRadius:20,padding:"8px 16px",cursor:"pointer",width:"100%",justifyContent:"center"}),
  statCard:{background:"#fff",borderRadius:12,padding:"12px 14px",border:"1px solid #f1f5f9",textAlign:"center"},
  statNum:{fontSize:22,fontWeight:700,color:P},
  statLbl:{fontSize:11,color:"#94a3b8",marginTop:2},
  barWrap:{background:"#f1f5f9",borderRadius:8,overflow:"hidden",height:8,flex:1},
  barFill:(p,c)=>({height:"100%",width:`${Math.min(p,100)}%`,background:c,borderRadius:8,transition:"width 0.5s"}),
};

const getHorario=()=>{const h=new Date().getHours();if(h>=6&&h<11)return{label:"🌅 Desayunos del día",sub:"Lo mejor para empezar tu mañana"};if(h>=11&&h<15)return{label:"☀️ Almuerzos del día",sub:"El menú perfecto para el mediodía"};if(h>=15&&h<18)return{label:"🍪 Meriendas",sub:"Algo rico para la tarde"};return{label:"🌙 Cenas",sub:"Termina el día con buen sabor"};};

export default function App() {
  const [tab,setTab]=useState("Inicio");
  const [cat,setCat]=useState("Todo");
  const [superCat,setSuperCat]=useState("Todas");
  const [showBulkImport,setShowBulkImport]=useState(false);
  const [bulkData,setBulkData]=useState([]);
  const [bulkMsg,setBulkMsg]=useState("");
  const [bulkLoading,setBulkLoading]=useState(false);
  const [search,setSearch]=useState("");
  const [cart,setCart]=useState({});
  const [cartSuper,setCartSuper]=useState({});
  const [cartRest,setCartRest]=useState({});
  const [cartNegocio,setCartNegocio]=useState({});
  const [cartNegocioId,setCartNegocioId]=useState(null);
  const [cartNegocioNombre,setCartNegocioNombre]=useState("");
  const [cartNegocioWa,setCartNegocioWa]=useState("");
  const [negocioActivo,setNegocioActivo]=useState(null);
  const [negocioCatFiltro,setNegocioCatFiltro]=useState(null);
  const [allNegocios,setAllNegocios]=useState([]);
  const [misNegPedidos,setMisNegPedidos]=useState([]);
  const [cartRestId,setCartRestId]=useState(null);
  const [cartRestNombre,setCartRestNombre]=useState("");
  const [cartRestWa,setCartRestWa]=useState("");
  const [restauranteActivo,setRestauranteActivo]=useState(null);
  const [secTab,setSecTab]=useState(null);
  const [misRestPedidos,setMisRestPedidos]=useState([]);
  const [suscripciones,setSuscripciones]=useState([]);
  const [sheet,setSheet]=useState(null);
  const [platoDetalle,setPlatoDetalle]=useState(null);
  const [imgZoom,setImgZoom]=useState(null);
  const [zonas,setZonas]=useState([]);
  const [zonaSelId,setZonaSelId]=useState("");
  const [zonaSel,setZonaSel]=useState(null);
  const [addr,setAddr]=useState({calle:"",referencia:""});
  const [form,setForm]=useState({nombre:"",telefono:"",sexo:"",pago:"Pago Móvil",recibirPromos:false});
  const [consentPromo,setConsentPromo]=useState({});
  const [pedidoEnviadoA,setPedidoEnviadoA]=useState(null); // confirmación visual post-envío
  const [numsPedido,setNumsPedido]=useState({}); // {provNombre: numero_siguiente}
  const [filtroPed,setFiltroPed]=useState("hoy");
  const [filtroEstado,setFiltroEstado]=useState("todos");
  const [editandoPagos,setEditandoPagos]=useState(false);
  const [pagoData,setPagoData]=useState({pago_movil_banco:"",pago_movil_telefono:"",pago_movil_cedula:"",pago_movil_nombre:"",acepta_efectivo:false,acepta_zelle:false,zelle_cuenta:"",acepta_divisas:false,acepta_binance:false,binance_cuenta:""});
  const [favoritos,setFavoritos]=useState({}); // {proveedor_id: true}
  const [clienteHistorial,setClienteHistorial]=useState([]); // pedidos del cliente
  const [misClientes,setMisClientes]=useState([]); // clientes del proveedor
  const [etaData,setEtaData]=useState({eta_minutos_min:"",eta_minutos_max:"",eta_texto:""});
  const [editandoEta,setEditandoEta]=useState(false);
  const [seccionNegocio,setSeccionNegocio]=useState("perfil");
  const [filtroVentas,setFiltroVentas]=useState("todo");
  const [selSvc,setSelSvc]=useState(null);
  const [svcForm,setSvcForm]=useState({nombre:"",telefono:"",direccion:"",detalle:""});
  const [superProds,setSuperProds]=useState([]);
  const [provProds,setProvProds]=useState([]);
  const [provPromos,setProvPromos]=useState([]);
  const [combos,setCombos]=useState([]);
  const [remates,setRemates]=useState([]);
  const [clasificados,setClasificados]=useState([]);
  const [clasificadoTipo,setClasificadoTipo]=useState("Todos");
  const [clasificadoSeleccionado,setClasificadoSeleccionado]=useState(null);
  const [showPublicarClasificado,setShowPublicarClasificado]=useState(false);
  const [pendClasificados,setPendClasificados]=useState([]);
  const [newClasificado,setNewClasificado]=useState({
    tipo:"Vehículos",titulo:"",descripcion:"",precio:"",negociable:false,categoria:"Vehículos",
    marca:"",modelo:"",anio:"",kilometraje:"",color:"",transmision:"Manual",combustible:"Gasolina",
    tipo_operacion:"Venta",habitaciones:"",banos:"",metros2:"",sector:"",
    vendedor_nombre:"",vendedor_telefono:""
  });
  const [clasifFotos,setClasifFotos]=useState([null,null,null,null]);
  const [clasifFotosPrev,setClasifFotosPrev]=useState([null,null,null,null]);
  const [serviciosCom,setServiciosCom]=useState([]);
  const [remateCat,setRemateCat]=useState("Todos");
  const [remateSearch,setRemateSearch]=useState("");
  const [showPublicarRemate,setShowPublicarRemate]=useState(false);
  const [showPublicarServicio,setShowPublicarServicio]=useState(false);
  const [newRemate,setNewRemate]=useState({titulo:"",descripcion:"",precio:"",categoria:REMATE_CATS[0],vendedor_nombre:"",vendedor_telefono:""});
  const [newServicioCom,setNewServicioCom]=useState({nombre_servicio:"",descripcion:"",categoria:SERVICIO_CATS[0],precio_referencial:"",zona:"",proveedor_nombre:"",proveedor_telefono:""});
  const [remateFoto,setRemateFoto]=useState(null);
  const [remateFotoPreview,setRemateFotoPreview]=useState(null);
  const [servComFoto,setServComFoto]=useState(null);
  const [servComFotoPreview,setServComFotoPreview]=useState(null);
  const [pendRemates,setPendRemates]=useState([]);
  const [pendServiciosCom,setPendServiciosCom]=useState([]);
  const [resenaSheet,setResenaSheet]=useState(null);
  const [resena,setResena]=useState({estrellas:0,comentario:"",nombre:"",telefono:""});
  const [resenaMsj,setResenaMsj]=useState("");
  const [pedidoRef,setPedidoRef]=useState("");

  // -- PEDIDOS (NUEVO) --------------------------------------
  const [pedidos,setPedidos]=useState([]);
  const [pedidoFiltro,setPedidoFiltro]=useState("todos");
  // ---------------------------------------------------------

  const [provMode,setProvMode]=useState("login");
  const [provForm,setProvForm]=useState({email:"",nombre:"",negocio:"",whatsapp_negocio:"",telefono_principal:"",instagram:"",categorias:[],pass:"",tipo_negocio:"Restaurante / Cocina / Comida",tipo_operacion_gastro:"",descripcion_negocio:"",delivery_propio:false,permite_retiro:false,delivery_costo:0,delivery_gratis_desde:15,direccion_fisica:"",horario_desde:"08:00",horario_hasta:"18:00",horario_desc:""});
  const [provData,setProvData]=useState(null);
  const [myProds,setMyProds]=useState([]);
  const [myPromos,setMyPromos]=useState([]);
  const [myVentas,setMyVentas]=useState([]);
  const [pendProds,setPendProds]=useState([]);
  const [pendPromos,setPendPromos]=useState([]);
  const [pendResenas,setPendResenas]=useState([]);
  const [allZonas,setAllZonas]=useState([]);
  const [allRestaurantes,setAllRestaurantes]=useState([]);
  const [allProveedores,setAllProveedores]=useState([]);
  const [adminVentas,setAdminVentas]=useState([]);
  const [catFilter,setCatFilter]=useState("Todas");
  const [combosAdmin,setCombosAdmin]=useState([]);
  const [rejectMotivo,setRejectMotivo]=useState({});
  const [resetPass,setResetPass]=useState({});
  const [editandoPerfil,setEditandoPerfil]=useState(false);
  const [perfilData,setPerfilData]=useState({});
  const [cambiandoClave,setCambiandoClave]=useState(false);
  const [claveForm,setClaveForm]=useState({actual:"",nueva:"",confirmar:""});

  const [newProd,setNewProd]=useState({nombre:"",descripcion:"",marca:"",presentacion:"",precio:"",unidad:"porción",categoria:"",stock:1,hi:"08:00",hf:"18:00",permanente:false,es_oferta:false});
  const [editandoHorario,setEditandoHorario]=useState(false);
  const [editandoDelivery,setEditandoDelivery]=useState(false);
  const [deliveryConfig,setDeliveryConfig]=useState({delivery_propio:false,delivery_costo:0,delivery_gratis_desde:15});
  const [horarioNegocio,setHorarioNegocio]=useState({desde:"08:00",hasta:"20:00",descripcion:""});
  const [editingProdId,setEditingProdId]=useState(null);
  const [newPromo,setNewPromo]=useState({nombre:"",descripcion:"",precio:"",fecha_inicio:"",fecha_fin:""});
  const [promoFotoFile,setPromoFotoFile]=useState(null);
  const [promoFotoPreview,setPromoFotoPreview]=useState(null);
  const [logoFile,setLogoFile]=useState(null);
  const [editLogoFile,setEditLogoFile]=useState(null);
  const [editLogoPreview,setEditLogoPreview]=useState(null);
  const [fotoFile,setFotoFile]=useState(null);
  const [logoPreview,setLogoPreview]=useState(null);
  const [fotoPreview,setFotoPreview]=useState(null);
  const [loading,setLoading]=useState(false);
  const [pmsg,setPmsg]=useState("");
  const [provTab,setProvTab]=useState("estado");
  const [adminSec,setAdminSec]=useState("dashboard");
  const [newSP,setNewSP]=useState({nombre:"",marca:"",presentacion:"",descripcion:"",precio:"",unidad:"kg",emoji:"🛒",categoria:SUPER_CATS[0],es_oferta:false});
  const [editingSPId,setEditingSPId]=useState(null);
  const [editSPData,setEditSPData]=useState({});
  const [spFoto,setSpFoto]=useState(null);
  const [spFotoPreview,setSpFotoPreview]=useState(null);
  const [newZona,setNewZona]=useState({municipio:"San Fernando",zona:"",tipo:"barrio",costo_delivery:1.50,delivery_gratis_super:18.00,delivery_gratis_comida:12.00});
  const [newCombo,setNewCombo]=useState({nombre:"",descripcion:"",precio:"",temporada:"",fecha_inicio:"",fecha_fin:""});
  const [notaSheet,setNotaSheet]=useState(null);
  const [notaTemp,setNotaTemp]=useState("");
  const [prodResenas,setProdResenas]=useState({});

  useEffect(()=>{loadAll();loadRemates();loadServiciosCom();loadClasificados();},[]);

  useEffect(()=>{
    const interval=setInterval(()=>{
      loadAll();loadRemates();loadServiciosCom();loadClasificados();
      if(provData){loadMyProds(provData.id);loadMyPromos(provData.id);}
      if(provMode==="admin"){loadAdmin();loadPedidos();setTab("Proveedores");}
    },15000);
    return ()=>clearInterval(interval);
  },[provData,provMode]);

  const loadAll=async()=>{
    const hoy=new Date().toISOString().split("T")[0];
    const [z,sp,pp,pr,cb]=await Promise.all([
      supabase.from("zonas_delivery").select("*").eq("activa",true).order("municipio"),
      supabase.from("productos_supermercado").select("*").eq("disponible",true).order("categoria"),
      supabase.from("productos_proveedor").select("*,proveedores(negocio,logo_url,en_pausa,activo,horario_desde,horario_hasta,horario_desc,whatsapp_negocio,telefono,suscripcion_activa,delivery_propio,delivery_costo,delivery_gratis_desde,tipo_negocio,instagram,descripcion_negocio,eta_minutos_min,eta_minutos_max,eta_texto,permite_retiro)").eq("aprobado",true).eq("disponible",true).eq("rechazado",false),
      supabase.from("promociones_proveedor").select("*,proveedores(negocio,logo_url,en_pausa,activo,horario_desde,horario_hasta,horario_desc,whatsapp_negocio,telefono,delivery_propio,delivery_costo,delivery_gratis_desde,permite_retiro,tipo_operacion_gastro)").eq("aprobada",true).eq("activa",true),
      supabase.from("combos").select("*").eq("activa",true),
    ]);
    if(z.data)setZonas(z.data);
    if(sp.data)setSuperProds(sp.data);
    if(pp.data)setProvProds(pp.data.filter(p=>!p.proveedores?.en_pausa&&p.proveedores?.suscripcion_activa!==false&&(p.permanente||(p.fecha===hoy&&p.stock>0))));
    if(pr.data)setProvPromos(pr.data.filter(p=>!p.proveedores?.en_pausa&&p.proveedores?.activo!==false));
    if(cb.data)setCombos(cb.data);
    // Load restaurantes list
    const{data:restList}=await supabase.from("proveedores").select("id,negocio,logo_url,activo,en_pausa,horario_desde,horario_hasta,horario_desc,telefono,whatsapp_negocio,suscripcion_activa,tipo_negocio,descripcion_negocio,delivery_propio,delivery_costo,delivery_gratis_desde,categorias,direccion_fisica").eq("aprobado",true).eq("suscripcion_activa",true).eq("en_pausa",false).order("negocio");
    if(restList){
      setAllRestaurantes(restList.filter(r=>r.tipo_negocio==="Restaurante / Cocina / Comida"||!r.tipo_negocio));
      setAllNegocios(restList.filter(r=>r.tipo_negocio==="Tienda / Negocio local"));
    }
    // Load negocios locales (tipo_negocio not restaurante, suscripcion active)
    const{data:negList}=await supabase.from("proveedores").select("id,negocio,logo_url,activo,en_pausa,horario_desde,horario_hasta,horario_desc,telefono,whatsapp_negocio,suscripcion_activa,tipo_negocio,descripcion_negocio,delivery_propio,delivery_costo,delivery_gratis_desde,categorias,direccion").eq("aprobado",true).eq("suscripcion_activa",true).eq("en_pausa",false).not("tipo_negocio","eq","Restaurante / Cocina / Comida").order("negocio");
    if(negList)setAllNegocios(negList);
  };

  const loadMisNegPedidos=async(pid)=>{
    const{data}=await supabase.from("pedidos").select("*").eq("proveedor_id",pid).order("created_at",{ascending:false}).limit(100);
    if(data)setMisNegPedidos(data);
  };

  const loadMisRestPedidos=async(pid,nombre)=>{
    // Buscar por proveedor_id O por proveedor_nombre (compatibilidad)
    const{data:d1}=await supabase.from("pedidos").select("*").eq("proveedor_id",pid).order("created_at",{ascending:false}).limit(100);
    const{data:d2}=await supabase.from("pedidos").select("*").eq("proveedor_nombre",nombre||"").order("created_at",{ascending:false}).limit(100);
    // Combinar y deduplicar por id
    const todos=[...(d1||[]),...(d2||[])];
    const unique=Object.values(todos.reduce((acc,p)=>({...acc,[p.id]:p}),{}));
    unique.sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
    setMisRestPedidos(unique);
  };

  const loadSuscripciones=async()=>{
    const{data}=await supabase.from("proveedores").select("id,negocio,usuario,telefono,logo_url,suscripcion_activa,suscripcion_vence,suscripcion_pagada,meses_gratis_restantes,activo,en_pausa,tipo_negocio").eq("aprobado",true).order("negocio");
    if(data)setSuscripciones(data);
  };

  const guardarPedidoRestaurante=async(restId,restItems,restSub,restDel,restTotal,restRef,aceptaPromo,provNombre)=>{
    const{error:errPed}=await supabase.from("pedidos").insert({
      ref:restRef,
      proveedor_nombre:provNombre||"",
      cliente_nombre:form.nombre,
      cliente_telefono:form.telefono,
      cliente_direccion:[zonaSel?.zona,addr.calle,addr.referencia].filter(Boolean).join(", "),
      zona:zonaSel?.zona||"",
      metodo_pago:"WhatsApp",
      items:restItems.map(i=>({nombre:i.name,precio:i.price,qty:i.qty,nota:i.nota||null,isPromo:i.isPromo||false})),
      subtotal:parseFloat(restSub.toFixed(2)),
      delivery:parseFloat(restDel.toFixed(2)),
      total:parseFloat(restTotal.toFixed(2)),
      estado:"nuevo",
    });
    if(errPed)console.error("Error guardando pedido:",errPed.message);
    // Guardar suscripción a promos si el cliente aceptó, solo para este proveedor
    if(aceptaPromo&&form.telefono&&form.nombre&&restId){
      const{data:existe}=await supabase.from("suscriptores_promo")
        .select("id").eq("proveedor_id",restId).eq("cliente_telefono",form.telefono).single();
      if(!existe){
        await supabase.from("suscriptores_promo").insert({
          proveedor_id:restId,
          proveedor_nombre:provNombre||"",
          cliente_nombre:form.nombre,
          cliente_telefono:form.telefono,
          zona:zonaSel?.zona||"",
          acepta_promos:true,
          ultimo_pedido:new Date().toISOString(),
        });
      } else {
        await supabase.from("suscriptores_promo")
          .update({acepta_promos:true,ultimo_pedido:new Date().toISOString(),cliente_nombre:form.nombre})
          .eq("proveedor_id",restId).eq("cliente_telefono",form.telefono);
      }
    }
  };

  const buildNegocioWaMsg=(negNombre,negItems,negSub,negDel,negTotal,negRef)=>{
    const lineas=negItems.map(i=>`  - ${i.name} x${i.qty} - $${(i.price*i.qty).toFixed(2)}`).join("\n");
    return `🛍️ *Nuevo pedido - ${APP_NAME}*\n📋 Ref: ${negRef}\n----------------------------\n${lineas}\n----------------------------\nSubtotal: $${negSub.toFixed(2)}\nDelivery: ${negDel===0?"GRATIS":"$"+negDel.toFixed(2)}\n*TOTAL: $${negTotal.toFixed(2)}*\n----------------------------\n👤 ${form.nombre}\n📱 ${form.telefono}\n📍 ${zonaSel?.zona||""}, ${addr.calle}\n`;
  };

  const buildRestWaMsg=(restNombre,restItems,restTotal,del,clienteNombre,clienteTel,clienteDir)=>{
    const promos=restItems.filter(i=>i.isPromo);
    const platos=restItems.filter(i=>!i.isPromo);
    const lineasPromo=promos.map(i=>`🔥 Promo: ${i.name} x${i.qty||1}\n• Cantidad: ${i.qty||1}\n• Precio unitario: $${i.price.toFixed(2)}\n• Subtotal: $${(i.price*(i.qty||1)).toFixed(2)}`).join("\n\n");
    const lineasPlato=platos.map(i=>`🍔 ${i.name}\n• Cantidad: ${i.qty}\n• Precio: $${i.price.toFixed(2)}${i.nota?"\n• Nota: "+i.nota:""}`).join("\n\n");
    const lineas=[lineasPromo,lineasPlato].filter(Boolean).join("\n\n");
    const delLinea=del===0?"🚚 Delivery: Gratis 🎉":`🚚 Delivery: $${del.toFixed(2)}`;
    const clienteBloque=`👤 *Datos del cliente:*\nNombre: ${clienteNombre||"No indicado"}\nTeléfono: ${clienteTel||"No indicado"}${clienteDir?`\nDirección: ${clienteDir}`:""}`;
    return `👋 Hola, quiero realizar un pedido:\n\n🏪 *${restNombre}*\n\n${clienteBloque}\n\n🍽️ *Mi pedido:*\n\n${lineas}\n\n${delLinea}\n\n💵 *Total estimado:* $${restTotal.toFixed(2)}\n\n📞 Quedo atento(a) para confirmar disponibilidad, tiempo de entrega y método de pago.\nGracias.`;
  };
  const getModalidad=(prov)=>{
    if(prov?.delivery_propio&&prov?.permite_retiro)return"Delivery disponible";
    if(prov?.delivery_propio)return"Solo delivery";
    if(prov?.permite_retiro)return"Retiro en local";
    return"Solo delivery";
  };
  // Mensaje unificado para cualquier proveedor del carrito global
  const buildGlobalWaMsg=(provNombre,items,total,del,numPedido,clienteNombre,clienteTel,clienteDir)=>{
    const promos=items.filter(i=>i.isPromo);
    const platos=items.filter(i=>!i.isPromo);
    // Recalcular subtotal internamente para garantizar exactitud
    const subReal=items.reduce((a,i)=>a+i.price*i.qty,0);
    const totalReal=subReal+del;
    const lineasPromo=promos.map(i=>`🔥 Promo: ${i.name} x${i.qty||1}\n   • Cantidad: ${i.qty||1}\n   • Precio unitario: $${i.price.toFixed(2)}\n   • Subtotal: $${(i.price*(i.qty||1)).toFixed(2)}`).join("\n\n");
    const lineasPlato=platos.map(i=>`🍽️ ${i.name}\n   • Cantidad: ${i.qty}\n   • Precio unitario: $${i.price.toFixed(2)}\n   • Subtotal: $${(i.price*i.qty).toFixed(2)}${i.nota?"\n   • Nota: "+i.nota:""}`).join("\n\n");
    const lineas=[lineasPromo,lineasPlato].filter(Boolean).join("\n\n");
    const delLinea=del===0?"🚚 Delivery: Gratis 🎉":`🚚 Delivery: $${del.toFixed(2)}`;
    return `🧾 *Pedido N° ${String(numPedido).padStart(3,"0")}*\n\n👋 Hola, quiero realizar un pedido:\n\n🏪 *${provNombre}*\n\n👤 *Datos del cliente:*\nNombre: ${clienteNombre||"No indicado"}\nTeléfono: ${clienteTel||"No indicado"}${clienteDir?"\nDirección: "+clienteDir:""}\n\n🛒 *Mi pedido:*\n\n${lineas}\n\n${delLinea}\n\n💵 *Total estimado: $${totalReal.toFixed(2)}*\n\n📞 Quedo atento(a) para confirmar disponibilidad, tiempo de entrega y método de pago.\nGracias.`;
  };

  const parseCsvRow=(row)=>{
    const cols=[];let cur="",inQ=false;
    for(let i=0;i<row.length;i++){
      if(row[i]==='"'){inQ=!inQ;}
      else if(row[i]===','&&!inQ){cols.push(cur.trim());cur="";}
      else cur+=row[i];
    }
    cols.push(cur.trim());
    return cols;
  };

  const processBulkCsv=(text)=>{
    const lines=text.split("\n").filter(l=>l.trim());
    if(lines.length<2){setBulkMsg("El archivo está vacío");return;}
    const header=parseCsvRow(lines[0]).map(h=>h.toLowerCase().replace(/[^a-z]/g,''));
    const rows=lines.slice(1).map(l=>parseCsvRow(l));
    const products=rows.map(r=>{
      const obj={};
      header.forEach((h,i)=>{obj[h]=r[i]||"";});
      return{
        nombre:obj.nombre||obj.name||"",
        descripcion:obj.descripcion||obj.description||"",
        precio:parseFloat(obj.precio||obj.price||0),
        unidad:obj.unidad||obj.unit||"unidad",
        categoria:obj.categoria||obj.category||"Supermercado",
        super_cat:obj.supercategoria||obj.supcat||obj.subcategoria||"",
        marca:obj.marca||obj.brand||"",
        stock:parseInt(obj.stock||10),
        foto_url:obj.foto||obj.fotourl||obj.foto_url||null,
        disponible:true,aprobado:true,rechazado:false,permanente:true,
        proveedor_id:null,
        es_super:true,
      };
    }).filter(p=>p.nombre&&p.precio>0);
    setBulkData(products);
    setBulkMsg(`✅ ${products.length} productos listos para importar`);
  };

  const importBulkProducts=async()=>{
    if(bulkData.length===0)return;
    setBulkLoading(true);
    let ok=0,err=0;
    for(const p of bulkData){
      const{error}=await supabase.from("productos_supermercado").insert({
        nombre:p.nombre,descripcion:p.descripcion||null,
        precio:p.precio,unidad:p.unidad,
        categoria:p.super_cat||p.categoria,
        marca:p.marca||null,stock:p.stock,
        disponible:true,
      });
      if(error)err++;else ok++;
    }
    setBulkLoading(false);
    setBulkMsg(`✅ ${ok} productos importados${err>0?` · ${err} errores`:""}`);
    setBulkData([]);
    setShowBulkImport(false);
    loadAll();
  };

  const loadClasificados=async()=>{
    const{data}=await supabase.from("clasificados").select("*").eq("aprobado",true).eq("vendido",false).order("created_at",{ascending:false});
    if(data)setClasificados(data);
  };

  const publishClasificado=async()=>{
    const c=newClasificado;
    if(!c.titulo||!c.precio||!c.vendedor_nombre||!c.vendedor_telefono)return setPmsg("Completa los campos obligatorios");
    setLoading(true);
    const fotos=[];
    for(let i=0;i<4;i++){
      if(clasifFotos[i]){
        const url=await upload(clasifFotos[i],"productos",`clasif_${Date.now()}_${i}`);
        fotos.push(url);
      } else fotos.push(null);
    }
    const{error}=await supabase.from("clasificados").insert({
      tipo:c.tipo,titulo:c.titulo,descripcion:c.descripcion||null,
      precio:parseFloat(c.precio),negociable:c.negociable,categoria:c.tipo,
      marca:c.marca||null,modelo:c.modelo||null,
      anio:c.anio?parseInt(c.anio):null,kilometraje:c.kilometraje||null,
      color:c.color||null,transmision:c.transmision||null,combustible:c.combustible||null,
      tipo_operacion:c.tipo_operacion||null,habitaciones:c.habitaciones?parseInt(c.habitaciones):null,
      banos:c.banos?parseInt(c.banos):null,metros2:c.metros2||null,sector:c.sector||null,
      foto1_url:fotos[0],foto2_url:fotos[1],foto3_url:fotos[2],foto4_url:fotos[3],
      vendedor_nombre:c.vendedor_nombre,vendedor_telefono:c.vendedor_telefono,
      aprobado:false,vendido:false,
    });
    setLoading(false);
    if(error){setPmsg("Error: "+error.message);return;}
    setPmsg("✅ Tu publicación fue enviada. El admin la revisará antes de publicarla.");
    setNewClasificado({tipo:"Vehículos",titulo:"",descripcion:"",precio:"",negociable:false,categoria:"Vehículos",marca:"",modelo:"",anio:"",kilometraje:"",color:"",transmision:"Manual",combustible:"Gasolina",tipo_operacion:"Venta",habitaciones:"",banos:"",metros2:"",sector:"",vendedor_nombre:"",vendedor_telefono:""});
    setClasifFotos([null,null,null,null]);setClasifFotosPrev([null,null,null,null]);
    setShowPublicarClasificado(false);
  };

  const loadRemates=async()=>{
    const{data}=await supabase.from("remates").select("*").eq("aprobado",true).eq("vendido",false).order("created_at",{ascending:false});
    if(data)setRemates(data);
  };

  const loadServiciosCom=async()=>{
    const{data}=await supabase.from("servicios_comunidad").select("*").eq("aprobado",true).eq("activo",true).order("created_at",{ascending:false});
    if(data)setServiciosCom(data);
  };

  const publishRemate=async()=>{
    if(!newRemate.titulo||!newRemate.precio||!newRemate.vendedor_nombre||!newRemate.vendedor_telefono)return setPmsg("Completa todos los campos obligatorios");
    setLoading(true);
    let foto_url=null;
    if(remateFoto)foto_url=await upload(remateFoto,"productos",`remate_${Date.now()}`);
    const{error}=await supabase.from("remates").insert({...newRemate,precio:parseFloat(newRemate.precio),foto_url,aprobado:false,vendido:false,vendedor_whatsapp:newRemate.vendedor_telefono});
    setLoading(false);
    if(error){setPmsg("Error: "+error.message);return;}
    setPmsg("✅ Tu artículo fue enviado. El admin lo revisará antes de publicarlo.");
    setNewRemate({titulo:"",descripcion:"",precio:"",categoria:REMATE_CATS[0],vendedor_nombre:"",vendedor_telefono:""});
    setRemateFoto(null);setRemateFotoPreview(null);
    setShowPublicarRemate(false);
  };

  const publishServicioCom=async()=>{
    if(!newServicioCom.nombre_servicio||!newServicioCom.descripcion||!newServicioCom.proveedor_nombre||!newServicioCom.proveedor_telefono)return setPmsg("Completa todos los campos obligatorios");
    setLoading(true);
    let foto_url=null;
    if(servComFoto)foto_url=await upload(servComFoto,"productos",`serv_${Date.now()}`);
    const{error}=await supabase.from("servicios_comunidad").insert({...newServicioCom,foto_url,aprobado:false,activo:true});
    setLoading(false);
    if(error){setPmsg("Error: "+error.message);return;}
    setPmsg("✅ Tu servicio fue enviado. El admin lo revisará antes de publicarlo.");
    setNewServicioCom({nombre_servicio:"",descripcion:"",categoria:SERVICIO_CATS[0],precio_referencial:"",zona:"",proveedor_nombre:"",proveedor_telefono:""});
    setServComFoto(null);setServComFotoPreview(null);
    setShowPublicarServicio(false);
  };

  // -- FUNCIONES DE PEDIDOS (NUEVO) -------------------------
  const loadPedidos=async()=>{
    const{data}=await supabase
      .from("pedidos")
      .select("*")
      .order("created_at",{ascending:false})
      .limit(200);
    if(data)setPedidos(data);
  };

  const actualizarEstadoPedido=async(id,nuevoEstado)=>{
    await supabase
      .from("pedidos")
      .update({estado:nuevoEstado,updated_at:new Date().toISOString()})
      .eq("id",id);
    loadPedidos();
  };

  const guardarPedidoEnDB=async()=>{
    const itemsParaGuardar=items.map(i=>({
      id:i.id,
      nombre:i.name,
      precio:i.price,
      qty:i.qty,
      kitchen:i.kitchen||null,
      nota:i.nota||null,
      categoria:i.cat,
    }));
    const margenTotal=items.reduce((a,i)=>{
      const margen=i.cat==="Supermercado"?0.10:0;
      return a+(i.price*i.qty*margen);
    },0);
    const{error}=await supabase.from("pedidos").insert({
      ref:pedidoRef,
      cliente_nombre:form.nombre,
      cliente_telefono:form.telefono,
      cliente_direccion:`${zonaSel?.zona||""}, ${addr.calle} ${addr.referencia}`.trim(),
      zona:zonaSel?.zona||"",
      zona_id:zonaSelId||null,
      metodo_pago:form.pago,
      items:itemsParaGuardar,
      subtotal:parseFloat(sub.toFixed(2)),
      delivery:parseFloat(del.toFixed(2)),
      total:parseFloat(total.toFixed(2)),
      ganancia:parseFloat(margenTotal.toFixed(2)),
      estado:"nuevo",
    });
    if(error)console.error("Error guardando pedido:",error.message);
  };
  // ---------------------------------------------------------

  const allProds=[
    ...superProds.map(p=>({id:`sp_${p.id}`,name:p.nombre,cat:"Supermercado",superCat:p.categoria,price:p.precio,unit:p.unidad,emoji:p.emoji||"🛒",margin:0.10,foto:p.foto_url,marca:p.marca,presentacion:p.presentacion,descripcion:p.descripcion,abierto:true})),
    ...provProds.map(p=>({id:`pv_${p.id}`,name:p.nombre,cat:p.categoria,price:p.precio,unit:p.unidad,emoji:"🍽️",margin:0,kitchen:p.proveedores?.negocio,kitchenWa:p.proveedores?.whatsapp_negocio||p.proveedores?.telefono,kitchenDelivery:p.proveedores?.delivery_propio,kitchenDeliveryCosto:p.proveedores?.delivery_costo||0,kitchenDeliveryGratis:p.proveedores?.delivery_gratis_desde||15,kitchenRetiro:p.proveedores?.permite_retiro,kitchenTipo:p.proveedores?.tipo_operacion_gastro,kitchenEta:p.proveedores?.eta_texto||(p.proveedores?.eta_minutos_min&&p.proveedores?.eta_minutos_max?`${p.proveedores.eta_minutos_min}–${p.proveedores.eta_minutos_max} min`:null),logo:p.proveedores?.logo_url,foto:p.foto_url,marca:p.marca,presentacion:p.presentacion,descripcion:p.descripcion,stock:p.stock,horario:p.permanente?"Siempre disponible":`${p.horario_inicio}–${p.horario_fin}`,tag:p.stock<=3?`Solo ${p.stock} disp.`:null,dbId:p.id,abierto:p.proveedores?.activo!==false&&!p.proveedores?.en_pausa,horarioNeg:p.proveedores?.horario_desde&&p.proveedores?.horario_hasta?`${p.proveedores.horario_desde}–${p.proveedores.horario_hasta}${p.proveedores.horario_desc?" ("+p.proveedores.horario_desc+")":""}`:null})),
    ...provPromos.map(pr=>({id:`promo_${pr.id}`,name:pr.nombre,cat:"Comida preparada",price:pr.precio,unit:"promo",emoji:"🎁",margin:0,kitchen:pr.proveedores?.negocio,kitchenWa:pr.proveedores?.whatsapp_negocio||pr.proveedores?.telefono,kitchenDelivery:pr.proveedores?.delivery_propio,kitchenDeliveryCosto:pr.proveedores?.delivery_costo||0,kitchenDeliveryGratis:pr.proveedores?.delivery_gratis_desde||15,kitchenRetiro:pr.proveedores?.permite_retiro,kitchenTipo:pr.proveedores?.tipo_operacion_gastro,logo:pr.proveedores?.logo_url,foto:pr.foto_url,descripcion:pr.descripcion,isPromo:true,tag:"🔥 PROMO",horario:`Hasta ${pr.fecha_fin}`,abierto:pr.proveedores?.activo!==false&&!pr.proveedores?.en_pausa,horarioNeg:pr.proveedores?.horario_desde&&pr.proveedores?.horario_hasta?`${pr.proveedores.horario_desde}–${pr.proveedores.horario_hasta}${pr.proveedores.horario_desc?" ("+pr.proveedores.horario_desc+")":""}`:null})),
  ];

  const allProdsConMargen=allProds.map(p=>({...p,priceOriginal:p.price}));

  const filteredProds=allProdsConMargen.filter(p=>{
    const matchCat=cat==="Todo"||(cat==="Supermercado"?p.cat==="Supermercado":p.cat===cat);
    const matchSearch=p.name.toLowerCase().includes(search.toLowerCase());
    const matchSuperCat=cat!=="Supermercado"||superCat==="Todas"||p.superCat===superCat;
    return matchCat&&matchSearch&&matchSuperCat;
  });
  const superGroups=SUPER_CATS.filter(sc=>superCat==="Todas"||superCat===sc).map(sc=>({cat:sc,items:allProdsConMargen.filter(p=>p.cat==="Supermercado"&&p.superCat===sc&&p.name.toLowerCase().includes(search.toLowerCase()))})).filter(g=>g.items.length>0);
  const provGroups=PROV_CATS.filter(c=>cat==="Todo"||cat===c).map(c=>({cat:c,items:filteredProds.filter(p=>p.cat===c)})).filter(g=>g.items.length>0);

  const add=(p)=>{
    const stockMax=p.stock||999;
    const actual=cart[p.id]?.qty||0;
    if(actual>=stockMax){alert(`Solo hay ${stockMax} unidades disponibles`);return;}
    setCart(c=>({...c,[p.id]:{...p,qty:actual+1,nota:c[p.id]?.nota||""}}));
  };
  const rem=(id)=>setCart(c=>{const n={...c};n[id].qty>1?n[id]={...n[id],qty:n[id].qty-1}:delete n[id];return n;});
  const items=Object.values(cart);
  const count=items.reduce((a,i)=>a+i.qty,0);
  const sub=items.reduce((a,i)=>a+i.price*i.qty,0);
  const delCost=zonaSel?.costo_delivery||1.00;
  const esCascoCentral=zonaSel?.tipo==="casco"||zonaSel?.zona==="Casco Central";

  const superItems=items.filter(i=>i.cat==="Supermercado");
  const foodItems=items.filter(i=>i.cat!=="Supermercado");
  const superSub=superItems.reduce((a,i)=>a+i.price*i.qty,0);
  const foodSub=foodItems.reduce((a,i)=>a+i.price*i.qty,0);

  const freeMinSuper=zonaSel?.delivery_gratis_super??15;
  const freeMinFood=zonaSel?.delivery_gratis_comida??10;
  const freeMin=Math.min(freeMinSuper,freeMinFood);

  const calcDel=(secItems,secSub,freeMin)=>{
    if(secItems.length===0)return 0;
    if(esCascoCentral)return secSub>=freeMin?0:delCost;
    return secSub>=freeMin?Math.max(0,delCost-1):delCost;
  };

  const delSuper=calcDel(superItems,superSub,freeMinSuper);
  const delFood=calcDel(foodItems,foodSub,freeMinFood);
  const del=delSuper+delFood;
  const total=sub+del;

  const hasSuperOnly=items.length>0&&foodItems.length===0;
  const hasFoodOnly=items.length>0&&superItems.length===0;
  const pct=hasSuperOnly?(superSub/freeMinSuper)*100:(foodSub/freeMinFood)*100;

  const generarRef=()=>`PED-${Date.now().toString().slice(-5)}`;

  const precioConMargen=(p)=>{
    return p.price;
  };

  const saveCliente=async()=>{
    if(!form.telefono||!form.nombre)return;
    const{data:ex}=await supabase.from("clientes").select("id").eq("telefono",form.telefono).single();
    if(!ex)await supabase.from("clientes").insert({nombre:form.nombre,telefono:form.telefono,direccion:`${zonaSel?.zona||""} ${addr.calle} ${addr.referencia}`.trim(),sexo:form.sexo,recibir_promos:form.recibirPromos});
  };

  const confirm=async()=>{
    if(!form.nombre||!form.telefono||!zonaSelId)return alert("Completa nombre, teléfono y zona");
    const ref=generarRef();setPedidoRef(ref);
    await saveCliente();setSheet("resumen");
  };

  const buildWaMsg=()=>{
    const lineas=items.map(i=>`  • ${i.name} x${i.qty} - ${(i.price*i.qty).toFixed(2)}`).join("\n");
    const dir=`${zonaSel?.zona||""}, ${addr.calle}${addr.referencia?`, ${addr.referencia}`:""}`;
    const hora=new Date().toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"});
    const delDetalle=del===0?"GRATIS 🎉":`${del.toFixed(2)}${delSuper>0&&delFood>0?` (super ${delSuper.toFixed(2)} + comida ${delFood.toFixed(2)})`:""}`;
    return `🛒 *Nuevo pedido ${APP_NAME} ${CITY}*\n📋 Ref: ${pedidoRef}\n----------------------------\n${lineas}\n----------------------------\nSubtotal: ${sub.toFixed(2)}\nDelivery: ${delDetalle}\n*TOTAL: ${total.toFixed(2)}*\n----------------------------\n👤 ${form.nombre}\n📱 ${form.telefono}\n📍 ${zonaSel?.zona||""}\n🏠 ${dir}\n💳 ${form.pago}\n⏰ ${hora}`;
  };

  const sendWa=()=>{window.location.href=`https://wa.me/${WA}?text=${encodeURIComponent(buildWaMsg())}`;};
  const sendSvcWa=()=>{const m=`*Solicitud: ${selSvc.name}* — ${APP_NAME}\n\nNombre: ${svcForm.nombre}\nTeléfono: ${svcForm.telefono}\nDirección: ${svcForm.direccion}\nDetalle: ${svcForm.detalle}`;window.location.href=`https://wa.me/${WA}?text=${encodeURIComponent(m)}`;setSheet(null);setSelSvc(null);};
  const enviarResena=async()=>{if(!resena.estrellas||!resena.nombre)return setResenaMsj("Pon tu nombre y calificación");await supabase.from("resenas").insert({producto_id:resenaSheet,cliente_nombre:resena.nombre,cliente_telefono:resena.telefono,estrellas:resena.estrellas,comentario:resena.comentario,aprobada:false});setResenaMsj("✅ Gracias por tu reseña.");setTimeout(()=>{setSheet(null);setResenaSheet(null);setResena({estrellas:0,comentario:"",nombre:"",telefono:""});setResenaMsj("");},2000);};

  const upload=async(file,bucket,path)=>{await supabase.storage.from(bucket).upload(path,file,{upsert:true});return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;};

  const handleLogin=async()=>{
    if(!provForm.email||!provForm.pass)return setPmsg("Completa correo y contraseña");
    if(provForm.email===ADMIN_USER&&provForm.pass===ADMIN_PASS){setProvMode("admin");setTab("Proveedores");setAdminSec("dashboard");loadAdmin();loadPedidos();loadSuscripciones();return;}
    setLoading(true);
    const{data,error}=await supabase.from("proveedores").select("*").eq("email",provForm.email).single();
    setLoading(false);
    if(error||!data)return setPmsg("Usuario no encontrado");
    if(data.en_pausa)return setPmsg("Tu cuenta está pausada. Contacta al administrador.");
    if(data.password_plain&&data.password_plain!==provForm.pass)return setPmsg("Contraseña incorrecta");
    setProvData(data);setProvMode("dash");setProvTab("prod_aprobados");setPmsg("");
    loadMyProds(data.id);loadMyPromos(data.id);loadMyVentas(data.id);loadMisRestPedidos(data.id,data.negocio);loadMisClientes(data.negocio);
  };

  const handleRegister=async()=>{
    if(!provForm.email||!provForm.nombre||!provForm.negocio||!provForm.whatsapp_negocio||!provForm.pass)return setPmsg("Completa todos los campos obligatorios (*)");
    setLoading(true);
    const{data:existing}=await supabase.from("proveedores").select("id").eq("email",provForm.email).single();
    if(existing){setLoading(false);return setPmsg("Ya existe una cuenta con ese correo");}
    let logo_url=null;
    if(logoFile)logo_url=await upload(logoFile,"logos",`${provForm.email.split("@")[0]}_logo_${Date.now()}`);
    const{error}=await supabase.from("proveedores").insert({
      usuario:provForm.email.split("@")[0],nombre:provForm.nombre,negocio:provForm.negocio,
      telefono:provForm.whatsapp_negocio,email:provForm.email,
      whatsapp_negocio:provForm.whatsapp_negocio,
      telefono_principal:provForm.telefono_principal||null,
      instagram:provForm.instagram||null,
      categorias:provForm.categorias,
      logo_url,aprobado:true,activo:false,en_pausa:false,password_plain:provForm.pass,
      tipo_negocio:provForm.tipo_negocio||"Restaurante / Cocina / Comida",
      descripcion_negocio:provForm.descripcion_negocio||null,
      tipo_operacion_gastro:provForm.tipo_operacion_gastro||null,
      horario_desde:provForm.horario_desde||null,
      horario_hasta:provForm.horario_hasta||null,
      horario_desc:provForm.horario_desc||null,
      delivery_propio:provForm.delivery_propio||false,
      permite_retiro:provForm.permite_retiro||false,
      delivery_costo:provForm.delivery_costo||0,
      delivery_gratis_desde:provForm.delivery_gratis_desde||15,
      direccion_fisica:provForm.direccion_fisica||null,
      suscripcion_activa:true,meses_gratis_restantes:3,
      suscripcion_vence:new Date(Date.now()+90*24*60*60*1000).toISOString().split("T")[0]
    });
    setLoading(false);
    if(error)return setPmsg(error.message.includes("unique")?"Ese correo ya está registrado":"Error al registrarse: "+error.message);
    setPmsg("✅ Registro exitoso. Ya puedes iniciar sesión y abrir tu negocio.");
    setProvMode("login");
  };

  const loadMyProds=async(pid)=>{
    const hoy=new Date().toISOString().split("T")[0];
    const{data}=await supabase.from("productos_proveedor").select("*").eq("proveedor_id",pid).or(`permanente.eq.true,fecha.eq.${hoy}`).order("created_at",{ascending:false});
    if(data)setMyProds(data);
  };
  const loadMyPromos=async(pid)=>{const{data}=await supabase.from("promociones_proveedor").select("*").eq("proveedor_id",pid).order("created_at",{ascending:false});if(data)setMyPromos(data);};
  const loadMyVentas=async(pid)=>{const{data}=await supabase.from("ventas").select("*").eq("proveedor_id",pid).order("fecha",{ascending:false}).limit(50);if(data)setMyVentas(data);};
  const loadFavoritos=async(tel)=>{if(!tel)return;const{data}=await supabase.from("favoritos_cliente").select("proveedor_id").eq("cliente_telefono",tel);if(data){const f={};data.forEach(r=>f[r.proveedor_id]=true);setFavoritos(f);}};
  const toggleFavorito=async(provId,provNombre)=>{if(!form.telefono)return alert("Ingresa tu teléfono para guardar favoritos");if(favoritos[provId]){await supabase.from("favoritos_cliente").delete().eq("cliente_telefono",form.telefono).eq("proveedor_id",provId);setFavoritos(f=>({...f,[provId]:false}));}else{await supabase.from("favoritos_cliente").insert({cliente_telefono:form.telefono,proveedor_id:provId,proveedor_nombre:provNombre});setFavoritos(f=>({...f,[provId]:true}));}};
  const loadClienteHistorial=async(tel)=>{if(!tel)return;const{data}=await supabase.from("pedidos").select("*").eq("cliente_telefono",tel).order("created_at",{ascending:false}).limit(30);if(data)setClienteHistorial(data);};
  const loadMisClientes=async(provNombre)=>{const{data}=await supabase.from("pedidos").select("cliente_nombre,cliente_telefono,created_at,total,ref").eq("proveedor_nombre",provNombre).order("created_at",{ascending:false});if(data){const mapa={};data.forEach(p=>{const k=p.cliente_telefono;if(!mapa[k])mapa[k]={nombre:p.cliente_nombre,telefono:p.cliente_telefono,ultimoPedido:p.created_at,totalPedidos:0,totalGastado:0};mapa[k].totalPedidos++;mapa[k].totalGastado+=p.total||0;});setMisClientes(Object.values(mapa).sort((a,b)=>new Date(b.ultimoPedido)-new Date(a.ultimoPedido)));}};

  const loadAdmin=async()=>{
    const[pr,re,zo,av,todos,cb,ped,promo,remPend,svcPend,clasifPend]=await Promise.all([
      supabase.from("productos_proveedor").select("*,proveedores(negocio,id)").eq("aprobado",false).eq("rechazado",false),
      supabase.from("resenas").select("*").eq("aprobada",false),
      supabase.from("zonas_delivery").select("*").order("municipio"),
      supabase.from("ventas").select("*").order("fecha",{ascending:false}).limit(100),
      supabase.from("proveedores").select("*").eq("aprobado",true).order("negocio"),
      supabase.from("combos").select("*").order("created_at",{ascending:false}),
      supabase.from("pedidos").select("*").order("created_at",{ascending:false}).limit(200),
      supabase.from("promociones_proveedor").select("*,proveedores(negocio)").eq("aprobada",false).eq("activa",true),
      supabase.from("remates").select("*").eq("aprobado",false).eq("vendido",false).order("created_at",{ascending:false}),
      supabase.from("servicios_comunidad").select("*").eq("aprobado",false).order("created_at",{ascending:false}),
      supabase.from("clasificados").select("*").eq("aprobado",false).eq("vendido",false).order("created_at",{ascending:false}),
    ]);
    if(pr.data)setPendProds(pr.data);
    if(re.data)setPendResenas(re.data);
    if(zo.data)setAllZonas(zo.data);
    if(av.data)setAdminVentas(av.data);
    if(todos.data)setAllProveedores(todos.data);
    if(cb.data)setCombosAdmin(cb.data);
    if(ped.data)setPedidos(ped.data);
    if(promo.data)setPendPromos(promo.data);
    if(remPend.data)setPendRemates(remPend.data);
    if(svcPend.data)setPendServiciosCom(svcPend.data);
    if(clasifPend.data)setPendClasificados(clasifPend.data);
  };

  const loadResenas=async(prodId)=>{
    if(prodResenas[prodId])return;
    const{data}=await supabase.from("resenas").select("*").eq("producto_id",prodId).eq("aprobada",true).order("created_at",{ascending:false}).limit(5);
    if(data)setProdResenas(r=>({...r,[prodId]:data}));
  };

  const togglePausa=async(id,enPausa)=>{await supabase.from("proveedores").update({en_pausa:!enPausa}).eq("id",id);loadAdmin();loadAll();};
  const deleteProveedor=async(id)=>{if(!window.confirm("¿Eliminar este proveedor? No se puede deshacer."))return;await supabase.from("productos_proveedor").delete().eq("proveedor_id",id);await supabase.from("proveedores").delete().eq("id",id);loadAdmin();loadAll();};
  const toggleMiEstado=async()=>{const n=!provData.activo;await supabase.from("proveedores").update({activo:n}).eq("id",provData.id);setProvData({...provData,activo:n});loadAll();};

  const publishProd=async()=>{
    if(!newProd.nombre||!newProd.precio)return setPmsg("Completa nombre y precio");
    setLoading(true);setPmsg("");
    let foto_url=null;
    if(fotoFile)foto_url=await upload(fotoFile,"productos",`${provData.id}_${Date.now()}`);
    const{data:existing}=await supabase.from("productos_proveedor").select("id").eq("proveedor_id",provData.id).eq("nombre",newProd.nombre).eq("primera_aprobacion",true).limit(1);
    const auto=existing&&existing.length>0;
    const{error}=await supabase.from("productos_proveedor").insert({
      proveedor_id:provData.id,
      nombre:newProd.nombre,
      descripcion:newProd.descripcion||null,
      marca:newProd.marca||null,
      presentacion:newProd.presentacion||null,
      precio:parseFloat(newProd.precio),
      unidad:newProd.unidad,
      categoria:newProd.categoria,
      foto_url:foto_url||null,
      stock:parseInt(newProd.stock)||1,
      horario_inicio:newProd.hi,
      horario_fin:newProd.hf,
      aprobado:auto,
      disponible:true,
      permanente:newProd.permanente,
      es_oferta:newProd.es_oferta||false,
      primera_aprobacion:auto,
      rechazado:false,
      fecha:new Date().toISOString().split("T")[0],
    });
    setLoading(false);
    if(error){setPmsg("Error: "+error.message);return;}
    setPmsg(auto?"✅ Producto publicado directamente":"✅ Enviado al admin para aprobación");
    setNewProd({nombre:"",descripcion:"",marca:"",presentacion:"",precio:"",unidad:"porción",categoria:"Comida preparada",stock:1,hi:"08:00",hf:"18:00",permanente:false,es_oferta:false});
    setFotoFile(null);setFotoPreview(null);
    loadMyProds(provData.id);loadAll();
  };

  const publishPromo=async()=>{
    if(!newPromo.nombre||!newPromo.precio||!newPromo.fecha_inicio||!newPromo.fecha_fin)return setPmsg("Completa todos los campos");
    setLoading(true);
    let foto_url=null;
    if(promoFotoFile)foto_url=await upload(promoFotoFile,"productos",`promo_${provData.id}_${Date.now()}`);
    const{error}=await supabase.from("promociones_proveedor").insert({
      proveedor_id:provData.id,...newPromo,precio:parseFloat(newPromo.precio),
      foto_url,aprobada:false,activa:true
    });
    setLoading(false);
    if(error){setPmsg("Error: "+error.message);return;}
    setPmsg("✅ Promoción enviada para aprobación");
    setNewPromo({nombre:"",descripcion:"",precio:"",fecha_inicio:"",fecha_fin:""});
    setPromoFotoFile(null);setPromoFotoPreview(null);
    loadMyPromos(provData.id);
  };

  const toggleDisp=async(id,val)=>{await supabase.from("productos_proveedor").update({disponible:!val}).eq("id",id);loadMyProds(provData.id);loadAll();};
  const notifyClientes=async(promo)=>{
    // Solo clientes que aceptaron promos de ESTE proveedor
    const{data:subs}=await supabase.from("suscriptores_promo")
      .select("cliente_nombre,cliente_telefono")
      .eq("proveedor_id",provData.id)
      .eq("acepta_promos",true);
    if(!subs||subs.length===0)return alert("Aún no tienes clientes suscritos a tus promos.\n\nCuando un cliente acepte recibir promociones al hacer un pedido, aparecerá aquí.");
    const appUrl="https://mimercado-mu5k.vercel.app";
    // Abrir WhatsApp con el primero — el proveedor envía manualmente uno a uno
    const primero=subs[0];
    const raw=(primero.cliente_telefono||"").replace(/\D/g,"");
    const num=raw.startsWith("0")?"58"+raw.slice(1):raw.startsWith("58")?raw:"58"+raw;
    const msg=`👋 Hola ${primero.cliente_nombre||""}\n\n*${provData.negocio}* tiene una nueva promo para ti 🍔\n\n🔥 *${promo.nombre}*\n${promo.descripcion||""}\n\n💵 Precio: $${promo.precio}\n\n👉 Pide aquí:\n${appUrl}\n\nSi no deseas recibir más promociones, responde *BAJA*.`;
    alert(`Vas a enviar esta promo a ${subs.length} cliente${subs.length>1?"s":""} suscrito${subs.length>1?"s":""}.\n\nSe abrirá WhatsApp con el primer mensaje. Recuerda enviar uno a uno.`);
    window.open("https://wa.me/"+num+"?text="+encodeURIComponent(msg),"_blank");
  };

  const approvePr=async(id)=>{await supabase.from("productos_proveedor").update({aprobado:true,primera_aprobacion:true,rechazado:false}).eq("id",id);loadAdmin();loadAll();};
  const rejectPr=async(id)=>{const motivo=rejectMotivo[id]||"No cumple los requisitos";await supabase.from("productos_proveedor").update({rechazado:true,aprobado:false,motivo_rechazo:motivo}).eq("id",id);loadAdmin();};
  const approveRe=async(id)=>{await supabase.from("resenas").update({aprobada:true}).eq("id",id);loadAdmin();};
  const rejectRe=async(id)=>{await supabase.from("resenas").delete().eq("id",id);loadAdmin();};
  const addZona=async()=>{if(!newZona.zona)return;await supabase.from("zonas_delivery").insert(newZona);setNewZona({municipio:"San Fernando",zona:"",tipo:"barrio",costo_delivery:1.50,delivery_gratis_super:18.00,delivery_gratis_comida:12.00});loadAdmin();loadAll();};
  const addCombo=async()=>{if(!newCombo.nombre||!newCombo.precio)return;await supabase.from("combos").insert({...newCombo,precio:parseFloat(newCombo.precio),activa:true});setNewCombo({nombre:"",descripcion:"",precio:"",temporada:"",fecha_inicio:"",fecha_fin:""});loadAll();loadAdmin();};

  const addSuperProd=async()=>{
    if(!newSP.nombre||!newSP.precio)return;
    setLoading(true);
    let foto_url=null;
    if(spFoto)foto_url=await upload(spFoto,"productos",`super_${Date.now()}`);
    await supabase.from("productos_supermercado").insert({nombre:newSP.nombre,categoria:newSP.categoria,marca:newSP.marca||null,presentacion:newSP.presentacion||null,descripcion:newSP.descripcion||null,precio:parseFloat(newSP.precio),unidad:newSP.unidad,emoji:newSP.emoji,foto_url,disponible:true,es_oferta:newSP.es_oferta||false});
    setLoading(false);
    setNewSP({nombre:"",marca:"",presentacion:"",descripcion:"",precio:"",unidad:"kg",emoji:"🛒",categoria:SUPER_CATS[0],es_oferta:false});
    setSpFoto(null);setSpFotoPreview(null);
    loadAll();
  };
  const deleteSuperProd=async(id)=>{await supabase.from("productos_supermercado").update({disponible:false}).eq("id",id.replace("sp_",""));loadAll();};

  const cambiarClave=async(provId,nuevaClave)=>{
    if(!nuevaClave||nuevaClave.length<4)return alert("La clave debe tener al menos 4 caracteres");
    await supabase.from("proveedores").update({password_plain:nuevaClave}).eq("id",provId);
    setResetPass({...resetPass,[provId]:""});
    alert("✅ Clave actualizada correctamente");
  };

  const horario=getHorario();
  const ventasHoy=adminVentas.filter(v=>v.fecha?.startsWith(new Date().toISOString().split("T")[0]));
  const ingresoHoy=ventasHoy.reduce((a,v)=>a+(v.total_item||0),0);
  const ingresoTotal=adminVentas.reduce((a,v)=>a+(v.total_item||0),0);
  const topAdminProds=Object.entries(adminVentas.reduce((a,v)=>{a[v.producto_nombre]=(a[v.producto_nombre]||0)+v.cantidad;return a;},{})).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const myVentasHoy=myVentas.filter(v=>v.fecha?.startsWith(new Date().toISOString().split("T")[0]));
  const myIngresoHoy=myVentasHoy.reduce((a,v)=>a+(v.total_item||0),0);
  const myIngresoTotal=myVentas.reduce((a,v)=>a+(v.total_item||0),0);
  const myTopProds=Object.entries(myVentas.reduce((a,v)=>{a[v.producto_nombre]=(a[v.producto_nombre]||0)+v.cantidad;return a;},{})).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const myClientes=[...new Set(myVentas.map(v=>v.cliente_telefono).filter(Boolean))].length;
  const filteredProvs=catFilter==="Todas"?allProveedores:allProveedores.filter(p=>(p.categorias||[]).includes(catFilter));

  const QtyCtrl=({p})=>cart[p.id]?(
    <div style={{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-end"}}>
      <div style={s.qR}>
        <button style={s.qB} onClick={()=>rem(p.id)}>−</button>
        <span style={s.qN}>{cart[p.id].qty}</span>
        <button style={s.qB} onClick={()=>add(p)}>+</button>
      </div>
      <button onClick={()=>{setNotaSheet(p.id);setNotaTemp(cart[p.id]?.nota||"");}} style={{fontSize:9,color:cart[p.id]?.nota?"#7e22ce":"#94a3b8",background:cart[p.id]?.nota?"#fdf4ff":"none",border:"none",cursor:"pointer",padding:"1px 4px",borderRadius:6}}>
        {cart[p.id]?.nota?"📝 Nota añadida":"+ nota"}
      </button>
    </div>
  ):<button style={s.aBtn} onClick={()=>add(p)}>+</button>;

  const Card=({p})=>{
    const cerrado=p.abierto===false;
    const resenas=prodResenas[p.dbId]||[];
    const avgStars=resenas.length>0?(resenas.reduce((a,r)=>a+r.estrellas,0)/resenas.length).toFixed(1):null;
    return(
      <div style={{...s.card,position:"relative",opacity:cerrado?0.75:1}}>
        {cerrado&&(
          <div style={{position:"absolute",inset:0,background:"rgba(248,250,252,0.88)",borderRadius:14,zIndex:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:5,padding:8}}>
            <div style={{fontSize:22}}>🔴</div>
            <div style={{fontSize:11,fontWeight:700,color:"#be123c",textAlign:"center"}}>Cerrado ahora</div>
            <button onClick={()=>{setCat("Todo");setSearch("");}} style={{fontSize:10,background:P,color:"#fff",border:"none",borderRadius:8,padding:"4px 10px",cursor:"pointer"}}>Ver otras opciones</button>
          </div>
        )}
        {p.foto?<img src={p.foto} alt={p.name} style={s.cImg}/>:<div style={s.cEm}>{p.emoji}</div>}
        {p.isPromo&&<div style={s.promoTag}>🎉 Promoción</div>}
        {p.tag&&!p.isPromo&&<div style={s.tag}>{p.tag}</div>}
        {p.kitchen&&(
          <div style={{...s.cKt,flexDirection:"column",alignItems:"flex-start",gap:2}}>
            <div style={{display:"flex",alignItems:"center",gap:4,width:"100%"}}>
              {p.logo&&<img src={p.logo} alt="" style={s.cLogo}/>}
              <span>{p.kitchen}</span>
              <span style={{marginLeft:"auto",fontSize:10,fontWeight:600,color:cerrado?"#be123c":"#15803d"}}>{cerrado?"● Cerrado":"● Abierto"}</span>
            </div>
            {p.horarioNeg&&<div style={{fontSize:10,color:"#94a3b8"}}>🕐 {p.horarioNeg}</div>}
          </div>
        )}
        <div style={s.cNm}>{p.name}</div>
        {(p.marca||p.presentacion)&&<div style={s.cMeta}>{[p.marca,p.presentacion].filter(Boolean).join(" · ")}</div>}
        {p.descripcion&&<div style={{fontSize:10,color:"#94a3b8",lineHeight:1.3}}>{p.descripcion}</div>}
        {p.horario&&<div style={{fontSize:10,color:"#94a3b8"}}>🕐 {p.horario}</div>}
        {p.dbId&&(
          <div>
            {avgStars?(
              <div style={{fontSize:10,color:"#f59e0b",display:"flex",alignItems:"center",gap:3}}>
                {"★".repeat(Math.round(avgStars))}{"☆".repeat(5-Math.round(avgStars))}
                <span style={{color:"#64748b"}}>{avgStars} ({resenas.length})</span>
              </div>
            ):(
              <button onClick={()=>loadResenas(p.dbId)} style={{fontSize:10,color:"#94a3b8",background:"none",border:"none",cursor:"pointer",padding:0}}>Ver reseñas</button>
            )}
            {resenas.length>0&&resenas.slice(0,2).map((r,i)=>(
              <div key={i} style={{fontSize:10,color:"#64748b",background:"#f8fafc",borderRadius:6,padding:"4px 6px",marginTop:3}}>
                <span style={{color:"#f59e0b"}}>{"★".repeat(r.estrellas)}</span> {r.comentario&&`"${r.comentario}"`}
              </div>
            ))}
          </div>
        )}
        <div style={s.cBt}>
          <div><div style={s.cPr}>${p.price.toFixed(2)}</div><div style={s.cUn}>/ {p.unit}</div></div>
          {cerrado?<div style={{fontSize:11,color:"#94a3b8"}}>No disp.</div>:<QtyCtrl p={p}/>}
        </div>
        {p.dbId&&!cerrado&&<button onClick={()=>{setResenaSheet(p.dbId);setSheet("resena");}} style={{fontSize:10,color:"#94a3b8",background:"none",border:"none",cursor:"pointer",textAlign:"left",padding:0,marginTop:2}}>⭐ Dejar reseña</button>}
      </div>
    );
  };


  const CardNegocio=({p})=>{
    const qtyNeg=cartNegocio[p.id]?.qty||0;
    return(
      <div style={{...s.card,padding:"0 0 10px",overflow:"hidden"}}>
        {/* IMAGEN */}
        <div style={{position:"relative",marginBottom:8}}>
          {p.foto
            ?<img src={p.foto} alt={p.name} style={{width:"100%",height:110,objectFit:"cover",display:"block",borderRadius:"12px 12px 0 0"}}/>
            :<div style={{height:100,background:"linear-gradient(135deg,#dbeafe,#bfdbfe)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,borderRadius:"12px 12px 0 0"}}>🛍️</div>
          }
          {p.tag&&<div style={{position:"absolute",top:6,left:6,fontSize:9,fontWeight:800,background:"#f59e0b",color:"#fff",padding:"2px 7px",borderRadius:8}}>{p.tag}</div>}
        </div>
        <div style={{padding:"0 10px"}}>
          {/* NOMBRE */}
          <div style={{fontSize:12,fontWeight:700,color:"#0f172a",lineHeight:1.3,marginBottom:3}}>{p.name}</div>
          {/* DESCRIPTOR */}
          {(p.marca||p.descripcion)&&(
            <div style={{fontSize:10,color:"#64748b",lineHeight:1.3,marginBottom:5}}>
              {p.marca&&<span style={{fontWeight:600}}>{p.marca}</span>}
              {p.marca&&p.descripcion&&" · "}
              {p.descripcion&&<span>{p.descripcion.length>40?p.descripcion.slice(0,40)+"…":p.descripcion}</span>}
            </div>
          )}
          {/* PRECIO + CTA */}
          <div style={s.cBt}>
            <div style={{fontSize:17,fontWeight:900,color:"#15803d",letterSpacing:-0.3}}>${p.price.toFixed(2)}<span style={{fontSize:10,fontWeight:400,color:"#94a3b8",marginLeft:2}}>/{p.unit}</span></div>
            {qtyNeg>0?(
              <div style={s.qR}>
                <button style={s.qB} onClick={()=>{const n={...cartNegocio};n[p.id].qty>1?n[p.id]={...n[p.id],qty:n[p.id].qty-1}:delete n[p.id];setCartNegocio(n);}}>-</button>
                <span style={s.qN}>{qtyNeg}</span>
                <button style={s.qB} onClick={()=>setCartNegocio(c=>({...c,[p.id]:{...p,qty:qtyNeg+1}}))}>+</button>
              </div>
            ):<button style={{...s.aBtn,borderRadius:8,width:"auto",padding:"5px 10px",fontSize:11,fontWeight:700}} onClick={()=>setCartNegocio(c=>({...c,[p.id]:{...p,qty:1}}))}>+ Agregar</button>}
          </div>
        </div>
      </div>
    );
  };

  const CardRest=({p})=>{
    const qtyRest=cartRest[p.id]?.qty||0;
    // Badge permitido: solo basado en tag del producto, filtrado
    const BADGES_OK={"⭐ Más vendido":{bg:"#f59e0b",txt:"⭐ Más vendido"},"🔥 Recomendado":{bg:"#ef4444",txt:"🔥 Recomendado"},"🌶️ Picante":{bg:"#dc2626",txt:"🌶️ Picante"},"👶 Infantil":{bg:"#06b6d4",txt:"👶 Infantil"},"⏱️ Listo rápido":{bg:"#8b5cf6",txt:"⏱️ Listo rápido"},"🔥 COMBO":{bg:"#f97316",txt:"🔥 Promo"}};
    const isCombo=p.name?.toLowerCase().includes("combo")||p.name?.toLowerCase().includes("promo")||p.isPromo;
    const badgeKey=isCombo?"🔥 COMBO":(p.isPromo?"🔥 COMBO":p.tag);
    const badge=BADGES_OK[badgeKey]||null;
    return(
      <div style={{...s.card,padding:"0 0 10px",overflow:"hidden",cursor:"pointer",borderRadius:14,boxShadow:"0 2px 8px rgba(0,0,0,0.07)"}} onClick={()=>setPlatoDetalle(p)}>
        {/* 1. IMAGEN — elemento dominante */}
        <div style={{position:"relative",marginBottom:8}}>
          {p.foto
            ?<img src={p.foto} alt={p.name} style={{width:"100%",height:120,objectFit:"cover",display:"block",borderRadius:"14px 14px 0 0",cursor:"zoom-in"}} onClick={e=>{e.stopPropagation();setImgZoom(p.foto);}}/>
            :<div style={{height:120,background:"linear-gradient(135deg,#fef3c7,#fde68a)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:44,borderRadius:"14px 14px 0 0"}}>🍽️</div>
          }
          {/* 2. BADGE — máximo 1, esquina sup izquierda */}
          {badge&&(
            <div style={{position:"absolute",top:7,left:7,background:badge.bg,color:"#fff",fontSize:9,fontWeight:800,padding:"3px 8px",borderRadius:20,letterSpacing:0.2,boxShadow:"0 1px 4px rgba(0,0,0,0.2)"}}>
              {badge.txt}
            </div>
          )}
        </div>
        <div style={{padding:"0 10px"}}>
          {/* 3. NOMBRE — 1 línea, claro */}
          <div style={{fontSize:12,fontWeight:700,color:"#0f172a",lineHeight:1.3,marginBottom:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.name}</div>
          {/* 4. DESCRIPCIÓN — 1 línea, ingredientes clave */}
          {p.descripcion&&<div style={{fontSize:10,color:"#94a3b8",lineHeight:1.3,marginBottom:6,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.descripcion}</div>}
          {/* 5. PRECIO + 6. CTA */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:p.descripcion?0:4}}>
            <div style={{fontSize:18,fontWeight:900,color:"#ef4444",letterSpacing:-0.4}}>${p.price.toFixed(2)}</div>
            {qtyRest>0?(
              <div style={s.qR}>
                <button style={s.qB} onClick={e=>{e.stopPropagation();const n={...cartRest};n[p.id].qty>1?n[p.id]={...n[p.id],qty:n[p.id].qty-1}:delete n[p.id];setCartRest(n);}}>−</button>
                <span style={s.qN}>{qtyRest}</span>
                <button style={s.qB} onClick={e=>{e.stopPropagation();const stockMax=p.stock||999;if(qtyRest>=stockMax){alert("Stock máximo");return;}setCartRest(c=>({...c,[p.id]:{...p,qty:qtyRest+1}}))}}>+</button>
              </div>
            ):(
              <button style={{background:"#ef4444",color:"#fff",border:"none",borderRadius:8,padding:"6px 12px",fontSize:11,fontWeight:800,cursor:"pointer",flexShrink:0}} onClick={e=>{e.stopPropagation();const stockMax=p.stock||999;if(qtyRest>=stockMax)return;setCartRest(c=>({...c,[p.id]:{...p,qty:1}}))}}>
                + Agregar
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  const StatCard=({num,lbl,color})=>(<div style={s.statCard}><div style={{...s.statNum,color:color||P}}>{num}</div><div style={s.statLbl}>{lbl}</div></div>);
  const BarChart=({data,max})=>(<div style={{display:"flex",flexDirection:"column",gap:8}}>{data.map(([name,val],i)=>(<div key={i} style={{display:"flex",alignItems:"center",gap:8}}><div style={{fontSize:11,color:"#64748b",width:110,flexShrink:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{name}</div><div style={s.barWrap}><div style={s.barFill((val/max)*100,["#6366f1","#f59e0b","#22c55e","#ef4444","#0ea5e9"][i%5])}/></div><div style={{fontSize:12,fontWeight:700,color:P,minWidth:24,textAlign:"right"}}>{val}</div></div>))}</div>);

  const getProdEstado=(p)=>{
    if(p.rechazado)return{label:"✗ Rechazado",bg:"#fee2e2",color:"#be123c"};
    if(p.aprobado)return{label:"✓ Aprobado",bg:"#dcfce7",color:"#15803d"};
    return{label:"⏳ Pendiente",bg:"#fef9c3",color:"#854d0e"};
  };

  return(
    <div style={s.app}>
      <div style={s.hdr}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{display:"flex",flexDirection:"column",lineHeight:1}}>
                <span style={{fontFamily:"Poppins,system-ui,sans-serif",fontWeight:800,fontSize:18,color:"#1a5c2a",letterSpacing:-0.5}}>Apure</span>
                <span style={{fontFamily:"Poppins,system-ui,sans-serif",fontWeight:800,fontSize:18,color:"#25D366",letterSpacing:-0.5}}>Market</span>
              </div>
              <svg width="32" height="38" viewBox="0 0 32 38" fill="none">
                <path d="M20 2 L12 6 L4 2 L4 28 L12 24 L20 28 L28 24 L28 2 L20 2Z" fill="none" stroke="#25D366" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/>
                <path d="M12 6 L12 24" stroke="#25D366" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M20 2 L20 12" stroke="#25D366" strokeWidth="2" strokeLinecap="round" fill="none"/>
                <path d="M20 0 C16 0 13 3 13 7 C13 12 20 18 20 18 C20 18 27 12 27 7 C27 3 24 0 20 0Z" fill="#25D366"/>
                <circle cx="20" cy="7" r="3" fill="#fff"/>
              </svg>
            </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          {(count>0||Object.values(cartNegocio).length>0)&&<button style={s.cBtn} onClick={()=>Object.values(cartNegocio).length>0?setSheet("cartNegocio"):setSheet("cart")}>🛒 {Object.values(cartNegocio).length>0&&<span style={s.cN}>{Object.values(cartNegocio).reduce((a,i)=>a+i.qty,0)}</span>}{count>0&&Object.values(cartNegocio).length===0&&<span style={s.cN}>{count}</span>}</button>}
          <button onClick={()=>setTab("Proveedores")} style={{background:"#f6f6f6",border:"1px solid #e0e0e0",borderRadius:"50%",width:34,height:34,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:16,flexShrink:0}}>👤</button>
        </div>
      </div>
      <div style={s.tabs}>
        {MAIN_TABS.map(t=>{
          const icons={"Inicio":"🏠","Supermercado":"🛒","Negocios locales":"🏪","Feria de comidas":"🍽️","Servicios":"⚡"};
          const labels={"Inicio":"Inicio","Supermercado":"Supermercado","Negocios locales":"Negocios locales","Feria de comidas":"Feria de comidas","Servicios":"Servicios"};
          const isActive=tab===t||(t==="Negocios"&&tab==="MiCuenta"===false);
          return(<button key={t} style={s.tab(tab===t)} onClick={()=>setTab(t)}>
            <span style={{fontSize:tab===t?26:19,transition:"all 0.2s",filter:tab===t?"none":"grayscale(50%)",display:"block"}}>{icons[t]}</span>
            <span style={{fontSize:9,lineHeight:1.2,textAlign:"center"}}>{labels[t]}</span>
          </button>);
        })}
      </div>
      {/* SECONDARY TABS */}
      <div style={{display:"flex",background:"#f0fdf4",borderBottom:"1px solid #dcfce7",position:"sticky",top:102,zIndex:98}}>
        {SEC_TABS.map(t=>(
          <button key={t} onClick={()=>setTab(t)} style={{flex:1,padding:"6px 0",border:"none",background:"transparent",color:tab===t?P:"#64748b",fontWeight:tab===t?700:400,fontSize:10,cursor:"pointer",borderBottom:tab===t?`2px solid ${P}`:"2px solid transparent",display:"flex",flexDirection:"column",alignItems:"center",gap:1}}>
            <span style={{fontSize:14}}>{t==="Clasificados"?"🚗":"🏷️"}</span>
            <span>{t}</span>
          </button>
        ))}
        <button onClick={()=>setSecTab(null)} style={{padding:"6px 12px",border:"none",background:"transparent",color:"#94a3b8",fontSize:10,cursor:"pointer"}}>✕</button>
      </div>

      {/* INICIO */}
      {tab==="Inicio"&&(<>
        {/* BANNER PRINCIPAL */}
        <div style={{background:"linear-gradient(180deg,#166534 0%,#16a34a 60%,#22c55e 100%)",padding:"20px 16px 18px",color:"#fff",borderRadius:"0 0 24px 24px"}}>
          <div style={{fontSize:22,fontWeight:900,marginBottom:3,letterSpacing:-0.5}}>¡Hola! 👋</div>
          <div style={{fontSize:13,color:"rgba(255,255,255,0.82)",marginBottom:14,fontWeight:400}}>¿Qué necesitas hoy en Apure?</div>
          <div style={{background:"rgba(255,255,255,0.18)",borderRadius:14,padding:"12px 16px",display:"flex",alignItems:"center",gap:10,border:"1px solid rgba(255,255,255,0.25)"}} onClick={()=>{setTab("Supermercado");document.querySelector("input")?.focus();}}>
            <span style={{fontSize:18,opacity:0.9}}>🔍</span>
            <span style={{fontSize:14,color:"rgba(255,255,255,0.9)",fontWeight:500}}>Buscar comida, productos o servicios cerca de ti</span>
          </div>
        </div>

        {/* DELIVERY BADGE */}
        <div style={{padding:"10px 16px 0"}}>
          <div style={{background:"#f0fdf4",borderRadius:14,padding:"13px 15px",display:"flex",alignItems:"center",gap:13,border:"2px solid #86efac"}}>
            <span style={{fontSize:30}}>🚚</span>
            <div>
              <div style={{display:"flex",alignItems:"baseline",gap:6}}>
                <span style={{fontSize:24,fontWeight:900,color:"#14532d",letterSpacing:-0.5}}>DELIVERY GRATIS</span>
              </div>
              <div style={{fontSize:13,color:"#166534",fontWeight:700,marginTop:2}}>En el Supermercado</div>
              <div style={{fontSize:11,color:"#64748b",marginTop:1}}>Pedidos mayores a $15 · San Fernando</div>
            </div>
          </div>
        </div>

        {/* RESTAURANTES ABIERTOS */}
        {allRestaurantes.filter(r=>r.activo).length>0&&(
          <div style={{padding:"0 16px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"14px 0 10px"}}>
              <div style={{fontSize:17,fontWeight:900,color:"#0f172a",letterSpacing:-0.3}}>🍽️ Restaurantes abiertos</div>
              <button onClick={()=>setTab("Feria de comidas")} style={{fontSize:11,color:"#94a3b8",background:"none",border:"none",cursor:"pointer",fontWeight:400}}>Ver todos →</button>
            </div>
            <div style={{display:"flex",gap:12,overflowX:"auto",paddingBottom:8}}>
              {allRestaurantes.filter(r=>r.activo).slice(0,6).map(r=>(
                <div key={r.id} onClick={()=>{setTab("Feria de comidas");setRestauranteActivo(r);setCartRestId(r.id);setCartRestNombre(r.negocio);setCartRestWa(r.whatsapp_negocio||r.telefono);}} style={{flexShrink:0,textAlign:"center",cursor:"pointer",width:72}}>
                  <div style={{width:60,height:60,borderRadius:"50%",background:r.logo_url?"#f8fafc":getAvatarColor(r.negocio),display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",padding:r.logo_url?4:0,margin:"0 auto",border:"2px solid #dcfce7"}}>
                      {r.logo_url
                        ?<img src={r.logo_url} alt="" style={{width:"100%",height:"100%",objectFit:"contain"}} onError={e=>{e.target.style.display="none";e.target.parentNode.style.background=getAvatarColor(r.negocio);e.target.parentNode.innerHTML=`<span style="color:#fff;font-size:22px;font-weight:900">${(r.negocio||"?")[0].toUpperCase()}</span>`;}}/>
                        :<span style={{color:"#fff",fontSize:22,fontWeight:900}}>{(r.negocio||"?")[0].toUpperCase()}</span>
                      }
                    </div>
                  <div style={{fontSize:10,fontWeight:600,color:"#1e293b",marginTop:4,lineHeight:1.2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:72}}>{r.negocio}</div>
                  <div style={{fontSize:9,color:"#22c55e",fontWeight:600}}>● Abierto</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROMOS ACTIVAS */}
        {provPromos.length>0&&(
          <div style={{padding:"0 16px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"14px 0 10px"}}>
              <div style={{fontSize:17,fontWeight:900,color:"#0f172a",letterSpacing:-0.3}}>🔥 Promociones activas</div>
              <button onClick={()=>{setTab("Feria de comidas");}} style={{fontSize:11,color:"#94a3b8",background:"none",border:"none",cursor:"pointer",fontWeight:400}}>Ver todo →</button>
            </div>
            <div style={{display:"flex",gap:10,overflowX:"auto",paddingBottom:8}}>
              {provPromos.slice(0,6).map(p=>(
                <div key={p.id} onClick={()=>setTab("Feria de comidas")} style={{flexShrink:0,width:140,background:"#fff",borderRadius:12,border:"1px solid #fde68a",overflow:"hidden",cursor:"pointer",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
                  {p.foto_url?<img src={p.foto_url} alt={p.nombre} style={{width:"100%",height:75,objectFit:"cover"}}/>:<div style={{height:75,background:"#fef9c3",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>🎁</div>}
                  <div style={{padding:"6px 8px"}}>
                    <div style={{fontSize:11,color:"#fff",fontWeight:800,background:"#ea580c",padding:"2px 6px",borderRadius:6,display:"inline-block",letterSpacing:0.3}}>🏷️ PROMO</div>
                    <div style={{fontSize:11,fontWeight:600,color:"#1e293b",lineHeight:1.2,marginTop:3}}>{p.nombre}</div>
                    <div style={{fontSize:15,fontWeight:900,color:"#15803d",marginTop:3}}>${parseFloat(p.precio||0).toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CLASIFICADOS RECIENTES */}
        {clasificados.length>0&&(
          <div style={{padding:"0 16px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"14px 0 10px"}}>
              <div style={{fontSize:17,fontWeight:900,color:"#0f172a",letterSpacing:-0.3}}>🚗 Lo último en clasificados</div>
              <button onClick={()=>setTab("Clasificados")} style={{fontSize:11,color:"#94a3b8",background:"none",border:"none",cursor:"pointer",fontWeight:400}}>Ver todo →</button>
            </div>
            <div style={{display:"flex",gap:10,overflowX:"auto",paddingBottom:8}}>
              {clasificados.slice(0,4).map(c=>(
                <div key={c.id} onClick={()=>{setTab("Clasificados");setClasificadoSeleccionado(c);}} style={{flexShrink:0,width:150,background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",overflow:"hidden",cursor:"pointer",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
                  {c.foto1_url?<img src={c.foto1_url} alt={c.titulo} style={{width:"100%",height:90,objectFit:"cover"}}/>:<div style={{height:90,background:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:30}}>{c.tipo==="Motos"?"🏍️":c.tipo==="Inmuebles"?"🏠":"🚗"}</div>}
                  <div style={{padding:"6px 8px"}}>
                    <div style={{fontSize:10,color:"#7e22ce",fontWeight:700}}>{c.tipo}</div>
                    <div style={{fontSize:11,fontWeight:600,color:"#1e293b",lineHeight:1.2,marginTop:1}}>{c.titulo}</div>
                    <div style={{fontSize:15,fontWeight:900,color:"#16a34a",marginTop:3}}>${parseFloat(c.precio).toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA MERCADITO */}
        <div style={{padding:"14px 16px"}}>
          <div onClick={()=>setTab("Mercadito local")} style={{background:"linear-gradient(135deg,#f59e0b,#d97706)",borderRadius:16,padding:"14px 16px",cursor:"pointer",display:"flex",alignItems:"center",gap:12}}>
            <span style={{fontSize:32}}>🏷️</span>
            <div style={{flex:1}}>
              <div style={{fontSize:15,fontWeight:900,color:"#fff",letterSpacing:-0.3}}>¿Tienes algo que vender?</div>
              <div style={{fontSize:12,color:"rgba(255,255,255,0.9)",fontWeight:600,marginTop:2}}>Publícalo <span style={{textDecoration:"underline"}}>GRATIS</span> en el Mercadito local</div>
            </div>
            <span style={{color:"#fff",fontSize:20}}>→</span>
          </div>
        </div>

        <div style={{height:20}}/>
      </>)}

      {tab==="Supermercado"&&(<>
        <div style={{background:"linear-gradient(160deg,#0f172a 0%,#1e293b 60%,#334155 100%)",padding:"16px 16px 14px",color:"#fff"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
            <div style={{width:48,height:48,background:"#f59e0b",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0,boxShadow:"0 2px 8px rgba(245,158,11,0.4)"}}>🛒</div>
            <div>
              <div style={{fontSize:20,fontWeight:900,color:"#fff",letterSpacing:-0.5}}>Supermercado</div>
              <div style={{fontSize:11,color:"rgba(255,255,255,0.55)",marginTop:1}}>Productos frescos · Delivery a domicilio</div>
            </div>
          </div>
          <div style={{background:"rgba(245,158,11,0.18)",borderRadius:12,padding:"10px 14px",display:"flex",alignItems:"center",gap:10,border:"1px solid rgba(245,158,11,0.4)"}}>
            <span style={{fontSize:20}}>🚚</span>
            <div>
              <div style={{fontSize:15,color:"#fbbf24",fontWeight:900,letterSpacing:-0.3}}>DELIVERY GRATIS</div>
              <div style={{fontSize:11,color:"rgba(255,255,255,0.65)",marginTop:1}}>En pedidos mayores a $15</div>
            </div>
          </div>
        </div>
        <div style={{padding:"12px 16px 0"}}><input style={{width:"100%",padding:"13px 16px",borderRadius:14,border:"2px solid #e2e8f0",fontSize:14,background:"#fff",boxSizing:"border-box",outline:"none",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}} placeholder="🔍  Buscar productos del supermercado…" value={search} onChange={e=>setSearch(e.target.value)}/></div>
        {superCat==="Todas"?(
          <div style={{padding:"12px 16px 8px"}}>
            {/* CATEGORÍAS DESTACADAS */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
              {[
                {cat:"Snacks",emoji:"🍿",color:"#fff7ed",tc:"#c2410c",border:"#fed7aa",micro:"Compra rápida ⚡"},
                {cat:"Granos y cereales",emoji:"🌾",color:"#fef9c3",tc:"#854d0e",border:"#fde68a",micro:"Para la despensa 🏠"},
              ].map(x=>(
                <button key={x.cat} onClick={()=>setSuperCat(x.cat)} style={{background:x.color,border:`2px solid ${x.border}`,borderRadius:16,padding:"14px 8px",display:"flex",flexDirection:"column",alignItems:"center",gap:5,cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.07)",width:"100%"}}>
                  <span style={{fontSize:34}}>{x.emoji}</span>
                  <span style={{fontSize:12,fontWeight:800,color:x.tc,textAlign:"center",lineHeight:1.2}}>{x.cat}</span>
                  <span style={{fontSize:9,color:x.tc,opacity:0.75,fontWeight:600,marginTop:1}}>{x.micro}</span>
                </button>
              ))}
            </div>
            {/* RESTO DE CATEGORÍAS — orden por frecuencia online */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8}}>
              {[
                {cat:"Bebidas",emoji:"🥤",color:"#dbeafe",tc:"#1d4ed8"},
                {cat:"Lácteos",emoji:"🥛",color:"#e0f2fe",tc:"#0369a1"},
                {cat:"Panadería",emoji:"🍞",color:"#fef3c7",tc:"#92400e"},
                {cat:"Aceites y condimentos",emoji:"🫙",color:"#fef3c7",tc:"#b45309"},
                {cat:"Enlatados",emoji:"🥫",color:"#f1f5f9",tc:"#475569"},
                {cat:"Limpieza del hogar",emoji:"🧹",color:"#ede9fe",tc:"#7c3aed"},
                {cat:"Aseo personal",emoji:"🧴",color:"#f0fdf4",tc:"#15803d"},
                {cat:"Proteínas",emoji:"🥩",color:"#fee2e2",tc:"#be123c"},
                {cat:"Frutas y verduras",emoji:"🥦",color:"#dcfce7",tc:"#166534"},
                {cat:"Ver todo",emoji:"🛒",color:"#f0fdf4",tc:"#15803d"},
              ].map(x=>(
                <button key={x.cat} onClick={()=>setSuperCat(x.cat==="Ver todo"?"Todas":x.cat)} style={{background:x.color,border:`1px solid ${x.color}`,borderRadius:14,padding:"10px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer",minHeight:72}}>
                  <span style={{fontSize:26}}>{x.emoji}</span>
                  <span style={{fontSize:9,fontWeight:600,color:x.tc,textAlign:"center",lineHeight:1.2}}>{x.cat==="Ver todo"?"Ver todo":x.cat.split(" ").slice(0,2).join(" ")}</span>
                </button>
              ))}
            </div>
          </div>
        ):(
          <div style={{padding:"8px 16px 4px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{fontSize:13,fontWeight:600,color:"#1e293b"}}>{superCat}</div>
            <button onClick={()=>setSuperCat("Todas")} style={{fontSize:12,color:P,background:"none",border:"none",cursor:"pointer",fontWeight:600}}>← Todas</button>
          </div>
        )}
        {/* OFERTAS DEL SUPERMERCADO */}
        {superCat==="Todas"&&!search&&(
          <div style={{padding:"12px 16px 8px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
              <div style={{fontSize:17,fontWeight:900,color:"#0f172a",letterSpacing:-0.3}}>🔥 Ofertas del Supermercado</div>
              <button onClick={()=>setSuperCat("Ver todo")} style={{fontSize:11,color:"#94a3b8",background:"none",border:"none",cursor:"pointer",fontWeight:400}}>Ver más →</button>
            </div>
            {superProds.filter(p=>p.es_oferta).slice(0,6).length>0?(
              <>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                {superProds.filter(p=>p.es_oferta).slice(0,6).map((p,idx)=>{
                  const isCombo=p.nombre&&(p.nombre.toLowerCase().includes("combo")||p.nombre.toLowerCase().includes("familiar")||p.nombre.toLowerCase().includes("pack")||p.nombre.toLowerCase().includes("kit")||p.nombre.toLowerCase().includes("x2")||p.nombre.toLowerCase().includes("duo")||p.descripcion?.toLowerCase().includes("combo"));
                  const microLabel=isCombo?"Combo ahorro":"Oferta del día";
                  const microIcon=isCombo?"🎁":"🏷️";
                  const microColor=isCombo?"#6d28d9":"#b45309";
                  const microBg=isCombo?"#ede9fe":"#fef3c7";
                  const confianza=isCombo?"Más valor por tu dinero":"Precio especial hoy";
                  return(
                  <div key={p.id} style={{background:"#fff",borderRadius:18,overflow:"hidden",border:"1px solid #e2e8f0",boxShadow:"0 3px 12px rgba(0,0,0,0.07)"}}>
                    {/* IMAGEN */}
                    <div style={{position:"relative"}}>
                      {p.foto_url
                        ?<img src={p.foto_url} alt={p.nombre} style={{width:"100%",height:125,objectFit:"cover",display:"block"}}/>
                        :<div style={{height:125,background:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:44}}>{p.emoji||"🛒"}</div>
                      }
                      {/* BADGE OFERTA — fijo sobre imagen */}
                      <div style={{position:"absolute",top:8,left:8,background:"#ea580c",color:"#fff",fontSize:10,fontWeight:900,padding:"3px 9px",borderRadius:8,boxShadow:"0 2px 6px rgba(234,88,12,0.4)",letterSpacing:0.3}}>🏷️ OFERTA</div>
                    </div>
                    <div style={{padding:"10px 11px 12px"}}>
                      {/* TIPO: combo vs producto */}
                      <div style={{display:"inline-flex",alignItems:"center",gap:3,fontSize:9,fontWeight:700,color:microColor,background:microBg,padding:"3px 9px",borderRadius:20,marginBottom:6,letterSpacing:0.2}}><span>{microIcon}</span><span>{microLabel}</span></div>
                      {/* PRECIO — protagonista absoluto */}
                      <div style={{fontSize:22,fontWeight:900,color:"#15803d",letterSpacing:-0.5,lineHeight:1,marginBottom:4}}>${parseFloat(p.precio||0).toFixed(2)}</div>
                      {/* NOMBRE — apoyo visual */}
                      <div style={{fontSize:11,fontWeight:500,color:"#64748b",lineHeight:1.35,marginBottom:9}}>{p.nombre}</div>
                      {/* CTA ROW */}
                      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:6}}>
                        <span style={{fontSize:9,color:"#94a3b8",fontWeight:400,lineHeight:1.3,flex:1}}>{confianza}</span>
                        <button
                          onClick={(e)=>{e.stopPropagation();add({id:`sp_${p.id}`,name:p.nombre,price:parseFloat(p.precio),emoji:p.emoji||"🛒",cat:"Supermercado",unit:p.unidad||""});}}
                          style={{background:"#15803d",color:"#fff",border:"none",borderRadius:10,padding:"7px 13px",fontSize:12,fontWeight:800,cursor:"pointer",display:"flex",alignItems:"center",gap:5,flexShrink:0,minHeight:34,boxShadow:"0 2px 6px rgba(21,128,61,0.3)"}}>
                          <span style={{fontSize:17,lineHeight:1,fontWeight:900}}>+</span>
                          <span>Agregar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
              {/* CIERRE DE FLUJO — natural, no agresivo */}
              <div style={{marginTop:18,padding:"13px 16px",background:"#f0fdf4",borderRadius:14,border:"1px solid #bbf7d0",display:"flex",alignItems:"center",justifyContent:"space-between",gap:8}}>
                <div>
                  <div style={{fontSize:12,color:"#166534",fontWeight:600}}>¿Buscas algo más?</div>
                  <div style={{fontSize:11,color:"#4ade80",fontWeight:400,marginTop:1}}>Explora las categorías del supermercado</div>
                </div>
                <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{fontSize:11,color:"#15803d",background:"#fff",border:"1px solid #86efac",borderRadius:10,padding:"6px 12px",cursor:"pointer",fontWeight:600,whiteSpace:"nowrap",flexShrink:0}}>↑ Categorías</button>
              </div>
              </>
            ):(
              <div style={{textAlign:"center",padding:"28px 0",color:"#94a3b8",background:"#f8fafc",borderRadius:16,border:"1px dashed #e2e8f0"}}>
                <div style={{fontSize:36,marginBottom:8}}>🏷️</div>
                <div style={{fontSize:13,fontWeight:600,color:"#64748b"}}>Próximamente ofertas aquí</div>
                <div style={{fontSize:11,color:"#94a3b8",marginTop:4}}>Usa el buscador o las categorías para ver todos los productos</div>
              </div>
            )}
          </div>
        )}
        {/* RESULTADOS DE BÚSQUEDA O CATEGORÍA SELECCIONADA */}
        {(search||superCat!=="Todas")&&(
          <div style={s.sec}>
            {superGroups.map(g=>(<div key={g.cat}><div style={s.sT}>{g.cat}</div><div style={s.grid}>{g.items.map(p=><Card key={p.id} p={p}/>)}</div></div>))}
            {superGroups.length===0&&<div style={{textAlign:"center",padding:"40px 0",color:"#94a3b8"}}><div style={{fontSize:40}}>🔍</div><p>No encontramos ese producto</p></div>}
          </div>
        )}
      </>)}

      {/* REMATES */}
      {(tab==="Mercadito local"||tab==="Mercadito")&&(<>
        <div style={s.banner}>
          <p style={s.bT}>Mercadito San Fernando 🏷️</p>
          <p style={s.bS}>Compra y vende en San Fernando · Contacto directo</p>
          <span style={s.bdg("#22c55e","#fff")}>✓ Gratis publicar</span>
          <span style={s.bdg(A,P)}>Contacto directo al vendedor</span>
        </div>

        {/* BOTÓN PUBLICAR */}
        <div style={{padding:"12px 16px 0"}}>
          <button onClick={()=>setShowPublicarRemate(!showPublicarRemate)} style={{...s.btn,marginTop:0,background:showPublicarRemate?"#64748b":"#f59e0b",color:"#fff",boxShadow:"0 2px 8px rgba(245,158,11,0.3)"}}>
            {showPublicarRemate?"✕ Cancelar":"➕ Publicar mi artículo gratis"}
          </button>
        </div>

        {/* FORMULARIO PUBLICAR REMATE */}
        {showPublicarRemate&&(
          <div style={{...s.sec,paddingTop:12}}>
            {pmsg&&<div style={s.msg(pmsg.includes("✅"))}>{pmsg}</div>}
            <div style={s.pc}>
              <div style={s.pT}>📦 Publicar artículo</div>
              <div style={{...s.ib,background:"#f0fdf4",marginBottom:12}}><div style={{fontSize:12,color:"#15803d"}}>✓ Gratis · El admin revisa antes de publicar · Tu WhatsApp va directo al comprador</div></div>
              <label style={s.lbl}>Título del artículo *</label>
              <input style={s.inp} placeholder="Televisor Samsung 32 pulgadas" value={newRemate.titulo} onChange={e=>setNewRemate({...newRemate,titulo:e.target.value})}/>
              <label style={s.lbl}>Categoría *</label>
              <select style={{...s.inp,background:"#fff"}} value={newRemate.categoria} onChange={e=>setNewRemate({...newRemate,categoria:e.target.value})}>{REMATE_CATS.map(c=><option key={c}>{c}</option>)}</select>
              <label style={s.lbl}>Descripción (estado, detalles)</label>
              <input style={s.inp} placeholder="Buen estado, funciona perfectamente, 2 años de uso..." value={newRemate.descripcion} onChange={e=>setNewRemate({...newRemate,descripcion:e.target.value})}/>
              <label style={s.lbl}>Precio ($) *</label>
              <input style={s.inp} type="number" placeholder="25.00" value={newRemate.precio} onChange={e=>setNewRemate({...newRemate,precio:e.target.value})}/>
              <label style={s.lbl}>Tu nombre *</label>
              <input style={s.inp} placeholder="Juan Pérez" value={newRemate.vendedor_nombre} onChange={e=>setNewRemate({...newRemate,vendedor_nombre:e.target.value})}/>
              <label style={s.lbl}>Tu WhatsApp * (compradores te escribirán aquí)</label>
              <input style={s.inp} placeholder="+58 424-000-0000" value={newRemate.vendedor_telefono} onChange={e=>setNewRemate({...newRemate,vendedor_telefono:e.target.value})}/>
              <label style={s.lbl}>📸 Foto del artículo (muy recomendada)</label>
              {remateFotoPreview&&<img src={remateFotoPreview} alt="" style={{width:"100%",height:160,objectFit:"cover",borderRadius:10,marginBottom:8}}/>}
              <input type="file" accept="image/*" style={{marginBottom:10,fontSize:13}} onChange={e=>{const f=e.target.files[0];if(f){setRemateFoto(f);setRemateFotoPreview(URL.createObjectURL(f));}}}/>
              <button style={s.btn} onClick={publishRemate} disabled={loading}>{loading?"Enviando...":"📤 Enviar para publicación"}</button>
            </div>
          </div>
        )}

        {/* FILTROS */}
        {!showPublicarRemate&&(
          <div style={s.cs}>
            {["Todos",...REMATE_CATS].map(c=>(
              <button key={c} style={s.cb(remateCat===c)} onClick={()=>setRemateCat(c)}>{c}</button>
            ))}
          </div>
        )}

        {/* BUSCADOR */}
        {!showPublicarRemate&&(
          <div style={s.sw}>
            <input style={s.si} placeholder="🔍  Buscar artículo..." value={remateSearch} onChange={e=>setRemateSearch(e.target.value)}/>
          </div>
        )}

        {/* LISTA DE REMATES */}
        {!showPublicarRemate&&(
          <div style={{...s.sec,paddingTop:12}}>
            {remates.filter(r=>(remateCat==="Todos"||r.categoria===remateCat)&&(!remateSearch||r.titulo.toLowerCase().includes(remateSearch.toLowerCase())||r.descripcion?.toLowerCase().includes(remateSearch.toLowerCase()))).length===0&&(
              <div style={{textAlign:"center",padding:"40px 0",color:"#94a3b8"}}>
                <div style={{fontSize:40}}>🔍</div>
                <p>No hay artículos en esta categoría</p>
                <button onClick={()=>setShowPublicarRemate(true)} style={{...s.btn,maxWidth:260,margin:"12px auto 0"}}>Sé el primero en publicar</button>
              </div>
            )}
            <div style={s.grid}>
              {remates.filter(r=>(remateCat==="Todos"||r.categoria===remateCat)&&(!remateSearch||r.titulo.toLowerCase().includes(remateSearch.toLowerCase())||r.descripcion?.toLowerCase().includes(remateSearch.toLowerCase()))).map(r=>(
                <div key={r.id} style={{...s.card,position:"relative"}}>
                  {r.foto_url?<img src={r.foto_url} alt={r.titulo} style={s.cImg}/>:<div style={{...s.cEm,background:"#f1f5f9",borderRadius:8,padding:"16px 0"}}>🏷️</div>}
                  <div style={{fontSize:10,fontWeight:600,background:"#fef3c7",color:"#92400e",padding:"2px 7px",borderRadius:8,alignSelf:"flex-start"}}>{r.categoria}</div>
                  <div style={s.cNm}>{r.titulo}</div>
                  {r.descripcion&&<div style={{fontSize:10,color:"#94a3b8",lineHeight:1.3}}>{r.descripcion}</div>}
                  <div style={s.cBt}>
                    <div><div style={s.cPr}>${parseFloat(r.precio).toFixed(2)}</div><div style={{fontSize:10,color:"#94a3b8"}}>{r.vendedor_nombre}</div></div>
                  </div>
                  <button onClick={()=>{const _n=(r.vendedor_whatsapp||"").replace(/\D/g,"");window.location.href="https://wa.me/"+_n+"?text="+encodeURIComponent("Hola "+r.vendedor_nombre+", vi tu artículo *"+r.titulo+"* en MiMercado y me interesa. ¿Sigue disponible?");}} style={{...s.btnWa,marginTop:6,padding:"8px",fontSize:12}}>
                    📲 Contactar vendedor
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </>)}

      {/* NEGOCIOS LOCALES */}
      {tab==="Negocios locales"&&(<>
        {negocioActivo?(
          <div>
            {/* HEADER TIENDA — identidad del negocio */}
            <div style={{background:"linear-gradient(160deg,#0f172a 0%,#1e293b 65%,#1e3a5f 100%)",padding:"14px 16px 16px",color:"#fff"}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
                <button onClick={()=>{setNegocioActivo(null);setCartNegocio({});setCartNegocioId(null);}} style={{background:"rgba(255,255,255,0.12)",border:"none",borderRadius:8,color:"#fff",padding:"6px 10px",fontSize:12,cursor:"pointer",flexShrink:0}}>← Volver</button>
                {negocioActivo.logo_url
                  ?<img src={negocioActivo.logo_url} alt="" style={{width:48,height:48,borderRadius:14,objectFit:"cover",border:"2px solid rgba(255,255,255,0.2)",flexShrink:0}}/>
                  :<div style={{width:48,height:48,borderRadius:14,background:"#3b82f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>🏪</div>
                }
                <div style={{flex:1,minWidth:0}}>
                  <div style={{color:"#fff",fontWeight:900,fontSize:17,letterSpacing:-0.3}}>{negocioActivo.negocio}</div>
                  <div style={{color:"rgba(255,255,255,0.6)",fontSize:11,marginTop:1}}>{negocioActivo.descripcion_negocio||(negocioActivo.categorias||[]).join(" · ")}</div>
                </div>
                <span style={{fontSize:11,fontWeight:700,padding:"4px 10px",borderRadius:20,background:negocioActivo.activo?"#dcfce7":"#fee2e2",color:negocioActivo.activo?"#15803d":"#dc2626",flexShrink:0,border:`1px solid ${negocioActivo.activo?"#86efac":"#fca5a5"}`}}>{negocioActivo.activo?"● Abierto":"● Cerrado"}</span>
              </div>
              {/* INFO CONFIANZA */}
              <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:10}}>
                {negocioActivo.direccion_fisica&&<span style={{fontSize:10,color:"rgba(255,255,255,0.7)",background:"rgba(255,255,255,0.08)",padding:"3px 8px",borderRadius:20}}>📍 {negocioActivo.direccion_fisica}</span>}
                {negocioActivo.horario_desde&&<span style={{fontSize:10,color:"rgba(255,255,255,0.7)",background:"rgba(255,255,255,0.08)",padding:"3px 8px",borderRadius:20}}>🕐 {negocioActivo.horario_desde}–{negocioActivo.horario_hasta}</span>}
                {negocioActivo.delivery_propio
                  ?<span style={{fontSize:10,color:"#86efac",fontWeight:600,background:"rgba(34,197,94,0.15)",padding:"3px 8px",borderRadius:20}}>🛵 Delivery disponible</span>
                  :<span style={{fontSize:10,color:"rgba(255,255,255,0.6)",background:"rgba(255,255,255,0.08)",padding:"3px 8px",borderRadius:20}}>🏃 Solo retiro</span>
                }
              </div>
              {/* CTA WHATSAPP */}
              {(negocioActivo.whatsapp_negocio||negocioActivo.telefono)&&(
                <button onClick={()=>{const num=((negocioActivo.whatsapp_negocio||negocioActivo.telefono)||"").replace(/\D/g,"");const n=num.startsWith("0")?"58"+num.slice(1):num.startsWith("58")?num:"58"+num;window.location.href="https://wa.me/"+n+"?text="+encodeURIComponent("Hola, vi tu tienda "+negocioActivo.negocio+" en Apure Market y quiero consultar algo");}} style={{width:"100%",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:10,padding:"9px",color:"#fff",fontSize:13,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
                  💬 Consultar por WhatsApp
                </button>
              )}
            </div>
            {/* BANNER CERRADO */}
            {!negocioActivo.activo&&(
              <div style={{background:"#fff7ed",borderLeft:"4px solid #f97316",padding:"10px 16px",display:"flex",alignItems:"center",gap:8}}>
                <span style={{fontSize:16}}>🔴</span>
                <div>
                  <div style={{fontSize:13,fontWeight:700,color:"#c2410c"}}>Esta tienda está cerrada ahora</div>
                  <div style={{fontSize:11,color:"#92400e"}}>Puedes ver el catálogo y hacer tu pedido — será atendido cuando abran</div>
                </div>
              </div>
            )}
            {/* BUSCADOR INTERNO */}
            <div style={{padding:"12px 16px 0"}}><input style={{width:"100%",padding:"11px 16px",borderRadius:12,border:"2px solid #e2e8f0",fontSize:13,background:"#fff",boxSizing:"border-box",outline:"none"}} placeholder="🔍  Buscar productos de esta tienda…" value={search} onChange={e=>setSearch(e.target.value)}/></div>
            <div style={{...s.sec,paddingTop:8}}>
              <div style={s.grid}>
                {allProdsConMargen.filter(p=>p.kitchen===negocioActivo.negocio&&!p.proveedores?.en_pausa&&p.name.toLowerCase().includes(search.toLowerCase())).map(p=><CardNegocio key={p.id} p={p}/>)}
              </div>
              {allProdsConMargen.filter(p=>p.kitchen===negocioActivo.negocio).length===0&&<div style={{textAlign:"center",padding:"30px 0",color:"#94a3b8"}}><div style={{fontSize:36}}>🛍️</div><p style={{fontSize:13,fontWeight:600,color:"#64748b"}}>Esta tienda aún no tiene productos publicados</p><p style={{fontSize:11,marginTop:4}}>Vuelve pronto o consulta por WhatsApp</p></div>}
              {allProdsConMargen.filter(p=>p.kitchen===negocioActivo.negocio).length>0&&(
                <div style={{textAlign:"center",padding:"20px 16px",marginTop:8,background:"#f0fdf4",borderRadius:14,border:"1px solid #bbf7d0"}}>
                  <div style={{fontSize:13,color:"#15803d",fontWeight:600,lineHeight:1.5}}>💚 Apoyar a {negocioActivo.negocio} es apoyar a los emprendedores de San Fernando</div>
                </div>
              )}
            </div>
            {Object.values(cartNegocio).length>0&&(
              <div style={{position:"fixed",bottom:80,left:"50%",transform:"translateX(-50%)",zIndex:150,width:"calc(100% - 32px)",maxWidth:398}}>
                <button style={{...s.btn,margin:0,display:"flex",justifyContent:"space-between",alignItems:"center",background:"#22c55e"}} onClick={()=>setSheet("cartGlobal")}>
                  <span>🛒 Ver pedido ({Object.values(cartNegocio).reduce((a,i)=>a+i.qty,0)})</span>
                  <span>${Object.values(cartNegocio).reduce((a,i)=>a+i.price*i.qty,0).toFixed(2)}</span>
                </button>
              </div>
            )}
          </div>
        ):(
          <>
            <div style={{background:"linear-gradient(160deg,#0f172a 0%,#1e293b 65%,#1e3a5f 100%)",padding:"18px 16px 16px",color:"#fff"}}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
                <div style={{width:48,height:48,background:"#3b82f6",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0,boxShadow:"0 2px 8px rgba(59,130,246,0.4)"}}>🏪</div>
                <div>
                  <div style={{fontSize:20,fontWeight:900,color:"#fff",letterSpacing:-0.5}}>Negocios locales</div>
                  <div style={{fontSize:11,color:"rgba(255,255,255,0.6)",marginTop:1}}>Descubre y apoya las tiendas de San Fernando</div>
                </div>
              </div>
            </div>
            <div style={{padding:"12px 16px 0"}}><input style={{width:"100%",padding:"12px 16px",borderRadius:14,border:"2px solid #e2e8f0",fontSize:14,background:"#fff",boxSizing:"border-box",outline:"none",boxShadow:"0 1px 4px rgba(0,0,0,0.05)"}} placeholder="🔍  Buscar tiendas o negocios…" value={search} onChange={e=>setSearch(e.target.value)}/></div>
            {!negocioCatFiltro&&search.length<2?(
              <>
                <div style={{padding:"12px 16px 4px"}}>
                  <div style={{fontSize:13,fontWeight:700,color:"#1e293b",marginBottom:10}}>Explorar por categoría</div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8}}>
                    {NEGOCIO_LOCAL_CATS.map(c=>(
                      <button key={c.cat} onClick={()=>setNegocioCatFiltro(c.cat)} style={{background:c.color,border:"none",borderRadius:12,padding:"10px 4px",display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer"}}>
                        <span style={{fontSize:22}}>{c.emoji}</span>
                        <span style={{fontSize:9,fontWeight:600,color:c.tc,textAlign:"center",lineHeight:1.2}}>{c.cat.split(" ").slice(0,2).join(" ")}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{...s.sec,paddingTop:8}}>
                  <div style={{fontSize:14,fontWeight:800,color:"#0f172a",marginBottom:12,letterSpacing:-0.2}}>{allNegocios.length>0?`${allNegocios.length} tienda${allNegocios.length===1?"":"s"} disponible${allNegocios.length===1?"":"s"}`:"Tiendas del centro comercial virtual"}</div>
                  {allNegocios.length===0&&(
                    <div style={{textAlign:"center",padding:"28px 16px",color:"#94a3b8",background:"#f8fafc",borderRadius:16,border:"1px dashed #e2e8f0",marginBottom:16}}>
                      <div style={{fontSize:40,marginBottom:8}}>🏪</div>
                      <div style={{fontSize:13,fontWeight:600,color:"#475569",marginBottom:4}}>Muy pronto podrás explorar los negocios de tu ciudad</div>
                      <div style={{fontSize:11,color:"#94a3b8"}}>Los negocios locales estarán disponibles aquí</div>
                    </div>
                  )}
                  {allNegocios.map(n=>(
                    <div key={n.id} onClick={()=>{setNegocioActivo(n);setCartNegocioId(n.id);setCartNegocioNombre(n.negocio);setCartNegocioWa(n.whatsapp_negocio||n.telefono);setSearch("");}} style={{background:"#fff",borderRadius:16,padding:14,border:"1px solid #e2e8f0",display:"flex",gap:12,alignItems:"center",marginBottom:10,cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
                      {n.logo_url
                        ?<img src={n.logo_url} alt="" style={{width:58,height:58,borderRadius:14,objectFit:"cover",flexShrink:0,border:"2px solid #f1f5f9"}}/>
                        :<div style={{width:58,height:58,borderRadius:14,background:"linear-gradient(135deg,#dbeafe,#bfdbfe)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0}}>🏪</div>
                      }
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontSize:15,fontWeight:800,color:"#0f172a",letterSpacing:-0.2}}>{n.negocio}</div>
                        <div style={{fontSize:11,color:"#64748b",marginTop:1}}>{(n.categorias||[]).join(" · ")} · San Fernando</div>
                        {n.descripcion&&<div style={{fontSize:10,color:"#94a3b8",marginTop:2,lineHeight:1.3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{n.descripcion}</div>}
                        <div style={{display:"flex",gap:6,marginTop:4,flexWrap:"wrap"}}>
                          <span style={{fontSize:10,fontWeight:600,color:n.activo?"#15803d":"#94a3b8",background:n.activo?"#dcfce7":"#f1f5f9",padding:"2px 7px",borderRadius:8}}>{n.activo?"● Abierto":"● Cerrado"}</span>
                          {n.delivery_propio&&<span style={{fontSize:10,background:"#dbeafe",color:"#1d4ed8",padding:"2px 7px",borderRadius:8,fontWeight:600}}>🛵 Delivery</span>}
                          {n.permite_retiro&&<span style={{fontSize:10,background:"#eff6ff",color:"#3b82f6",padding:"2px 7px",borderRadius:8,fontWeight:600}}>🏪 Retiro</span>}
                        </div>
                      </div>
                      <div style={{color:"#3b82f6",fontSize:20,fontWeight:300}}>›</div>
                    </div>
                  ))}
                </div>
                {/* CTA PROVEEDOR */}
                <div onClick={()=>setTab("Proveedores")} style={{background:"linear-gradient(135deg,#1e3a5f,#1d4ed8)",borderRadius:16,padding:"14px 16px",cursor:"pointer",display:"flex",alignItems:"center",gap:12,marginTop:4}}>
                  <span style={{fontSize:30}}>🏬</span>
                  <div style={{flex:1}}>
                    <div style={{fontSize:13,fontWeight:800,color:"#fff",letterSpacing:-0.2}}>¿Tienes un negocio en San Fernando?</div>
                    <div style={{fontSize:11,color:"rgba(255,255,255,0.75)",marginTop:2}}>Abre tu tienda en Apure Market y muestra tus productos</div>
                  </div>
                  <div style={{background:"rgba(255,255,255,0.15)",borderRadius:10,padding:"6px 10px",fontSize:11,color:"#fff",fontWeight:700,whiteSpace:"nowrap"}}>Abrir tienda →</div>
                </div>
              </>
            ):(
              <div style={s.sec}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"8px 0 12px"}}>
                  <div style={{fontSize:13,fontWeight:700}}>{negocioCatFiltro||`"${search}"`}</div>
                  <button onClick={()=>{setNegocioCatFiltro(null);setSearch("");}} style={{fontSize:12,color:P,background:"none",border:"none",cursor:"pointer"}}>← Volver</button>
                </div>
                {allNegocios.filter(n=>negocioCatFiltro?(n.categorias||[]).includes(negocioCatFiltro):n.negocio.toLowerCase().includes(search.toLowerCase())).map(n=>(
                  <div key={n.id} onClick={()=>{setNegocioActivo(n);setCartNegocioId(n.id);setCartNegocioNombre(n.negocio);setCartNegocioWa(n.whatsapp_negocio||n.telefono);setSearch("");}} style={{background:"#fff",borderRadius:14,padding:14,border:"1px solid #f1f5f9",display:"flex",gap:12,alignItems:"center",marginBottom:10,cursor:"pointer"}}>
                    {n.logo_url?<img src={n.logo_url} alt="" style={{width:52,height:52,borderRadius:12,objectFit:"cover",flexShrink:0}}/>:<div style={{width:52,height:52,borderRadius:12,background:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>🏪</div>}
                    <div style={{flex:1}}><div style={{fontSize:14,fontWeight:700,color:P}}>{n.negocio}</div><div style={{fontSize:11,color:"#64748b"}}>{(n.categorias||[]).join(" · ")}</div>{n.direccion_fisica&&<div style={{fontSize:10,color:"#94a3b8"}}>📍 {n.direccion_fisica}</div>}</div>
                    <div style={{color:"#94a3b8",fontSize:18}}>›</div>
                  </div>
                ))}
                {allNegocios.filter(n=>negocioCatFiltro?(n.categorias||[]).includes(negocioCatFiltro):n.negocio.toLowerCase().includes(search.toLowerCase())).length===0&&<div style={{textAlign:"center",padding:"30px 0",color:"#94a3b8"}}><div style={{fontSize:36,marginBottom:8}}>🔍</div><div style={{fontSize:13,fontWeight:600,color:"#64748b"}}>No encontramos tiendas en esta categoría</div><div style={{fontSize:11,marginTop:4}}>Los negocios locales estarán disponibles muy pronto</div></div>}
              </div>
            )}
          </>
        )}
      </>)}

      {tab==="Feria de comidas"&&(<>
        {restauranteActivo?(
          /* -- MENÚ DEL RESTAURANTE -- */
          <div>
            {/* HEADER RESTAURANTE — emocional */}
            <div style={{background:"linear-gradient(160deg,#7c2d12 0%,#c2410c 70%,#ea580c 100%)",color:"#fff"}}>
              <div style={{padding:"12px 16px 14px"}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
                  <button onClick={()=>{setRestauranteActivo(null);}} style={{background:"rgba(255,255,255,0.12)",border:"none",borderRadius:8,color:"#fff",padding:"6px 10px",fontSize:12,cursor:"pointer",flexShrink:0}}>← Volver</button>
                  <div style={{width:52,height:52,borderRadius:"50%",background:restauranteActivo.logo_url?"#fff":getAvatarColor(restauranteActivo.negocio),flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",padding:restauranteActivo.logo_url?4:0,border:"2px solid rgba(255,255,255,0.3)"}}>
                    {restauranteActivo.logo_url
                      ?<img src={restauranteActivo.logo_url} alt="" style={{width:"100%",height:"100%",objectFit:"contain"}} onError={e=>{e.target.style.display="none";e.target.parentNode.style.background=getAvatarColor(restauranteActivo.negocio);e.target.parentNode.innerHTML=`<span style="color:#fff;font-size:20px;font-weight:900">${(restauranteActivo.negocio||"?")[0].toUpperCase()}</span>`;}}/>
                      :<span style={{color:"#fff",fontSize:20,fontWeight:900}}>{(restauranteActivo.negocio||"?")[0].toUpperCase()}</span>
                    }
                  </div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{color:"#fff",fontWeight:900,fontSize:17,letterSpacing:-0.3}}>{restauranteActivo.negocio}</div>
                    <div style={{color:"rgba(255,255,255,0.7)",fontSize:11,marginTop:1}}>{restauranteActivo.tipo_operacion_gastro?TIPO_GASTRO_LABEL[restauranteActivo.tipo_operacion_gastro]:""}{restauranteActivo.descripcion_negocio?` · ${restauranteActivo.descripcion_negocio}`:""}</div>
                  </div>
                  <span style={{fontSize:11,fontWeight:700,padding:"4px 10px",borderRadius:20,background:restauranteActivo.activo?"#dcfce7":"#fee2e2",color:restauranteActivo.activo?"#15803d":"#dc2626",flexShrink:0}}>{restauranteActivo.activo?"● Abierto":"● Cerrado"}</span>
                </div>
                {/* INFO RÁPIDA */}
                <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:10}}>
                  {restauranteActivo.horario_desde&&<span style={{fontSize:10,color:"rgba(255,255,255,0.8)",background:"rgba(255,255,255,0.1)",padding:"3px 8px",borderRadius:20}}>🕐 {restauranteActivo.horario_desde}–{restauranteActivo.horario_hasta}</span>}
                  {restauranteActivo.delivery_propio
                    ?<span style={{fontSize:10,color:"#86efac",fontWeight:600,background:"rgba(34,197,94,0.15)",padding:"3px 8px",borderRadius:20}}>🛵 Delivery {restauranteActivo.delivery_costo>0?`$${restauranteActivo.delivery_costo}`:"gratis"}</span>
                    :<span style={{fontSize:10,color:"rgba(255,255,255,0.7)",background:"rgba(255,255,255,0.1)",padding:"3px 8px",borderRadius:20}}>🏃 Solo retiro en local</span>
                  }
                  {(restauranteActivo.eta_texto||(restauranteActivo.eta_minutos_min&&restauranteActivo.eta_minutos_max))&&(
                    <span style={{fontSize:10,background:"rgba(251,191,36,0.2)",color:"#fbbf24",padding:"3px 8px",borderRadius:20,fontWeight:600}}>⏱️ {restauranteActivo.eta_texto||`${restauranteActivo.eta_minutos_min}–${restauranteActivo.eta_minutos_max} min`}</span>
                  )}
                  {!restauranteActivo.direccion_fisica&&!restauranteActivo.delivery_propio&&<span style={{fontSize:10,color:"rgba(255,255,255,0.6)",background:"rgba(255,255,255,0.08)",padding:"3px 8px",borderRadius:20}}>📦 Solo delivery · Pedido online</span>}
                </div>
                {/* BUSCADOR */}
                <input style={{width:"100%",padding:"10px 14px",borderRadius:12,border:"none",fontSize:13,background:"rgba(255,255,255,0.15)",color:"#fff",boxSizing:"border-box",outline:"none"}} placeholder="🔍  Buscar en el menú…" value={search} onChange={e=>setSearch(e.target.value)}/>
              </div>
            </div>
            {/* INFO RESTAURANTE VS COCINA OSCURA */}
            {(restauranteActivo.direccion_fisica||restauranteActivo.delivery_propio)&&(
              <div style={{background:"#fff7ed",borderLeft:"4px solid #ea580c",padding:"8px 16px",fontSize:11,display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
                {restauranteActivo.direccion_fisica&&<span style={{color:"#92400e"}}>📍 {restauranteActivo.direccion_fisica}</span>}
                {restauranteActivo.direccion_fisica&&!restauranteActivo.delivery_propio&&<span style={{color:"#15803d",fontWeight:600}}>· 🏃 Retiro disponible</span>}
                {!restauranteActivo.direccion_fisica&&restauranteActivo.delivery_propio&&<span style={{color:"#c2410c",fontWeight:600}}>🚚 Solo delivery · Pedido online</span>}
              </div>
            )}
            {/* CTA PRINCIPAL */}
            {Object.values(cartRest).length===0&&(
              <div style={{padding:"12px 16px 4px"}}>
                <button onClick={()=>{const num=((restauranteActivo.whatsapp_negocio||restauranteActivo.telefono)||"").replace(/\D/g,"");const n=num.startsWith("0")?"58"+num.slice(1):num.startsWith("58")?num:"58"+num;window.location.href="https://wa.me/"+n+"?text="+encodeURIComponent("Hola "+restauranteActivo.negocio+", quiero hacer un pedido");}} style={{width:"100%",background:"linear-gradient(135deg,#ea580c,#c2410c)",color:"#fff",border:"none",borderRadius:14,padding:"13px",fontSize:14,fontWeight:800,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,boxShadow:"0 4px 12px rgba(234,88,12,0.35)"}}>
                  🍽️ Pedir por WhatsApp
                </button>
              </div>
            )}
            {/* MENÚ ESTRUCTURADO */}
            <div style={s.sec}>
              {(()=>{
                const todosProds=allProdsConMargen.filter(p=>p.kitchen===restauranteActivo.negocio&&p.name.toLowerCase().includes(search.toLowerCase()));
                const combos=todosProds.filter(p=>p.name?.toLowerCase().includes("combo")||p.name?.toLowerCase().includes("promo")||p.isPromo);
                const resto=todosProds.filter(p=>!p.name?.toLowerCase().includes("combo")&&!p.name?.toLowerCase().includes("promo")&&!p.isPromo);
                const iconoTipo={"Hamburguesas":"🍔","Perros calientes":"🌭","Pizzería":"🍕","Pastas":"🍝","Comida criolla":"🍲","Arepas":"🫓","Cachapas":"🥞","Panadería":"🍞","Pastelería":"🎂","Postres":"🍰","Jugos naturales":"🥤","Batidos":"🥛","Bebidas frías":"🧃","Café":"☕","Comida saludable":"🥗","Vegetariana":"🥦","Mariscos":"🦐","Pescado frito":"🐟","Comida rápida":"⚡","Alitas / Nuggets":"🍗","Papas fritas":"🍟","Salchipapas":"🍟","Combos":"🔥","Menú del día":"📋","Especiales":"⭐"};
                const catsProv=restauranteActivo.categorias?.length>0?restauranteActivo.categorias:PROV_CATS;
                const secciones=[
                  {key:"combos",label:"🔥 Promos recomendadas",items:combos,highlight:true},
                  ...catsProv.filter(cat=>cat!=="Combos"&&cat!=="Especiales"&&cat!=="Menú del día").map(cat=>({
                    key:cat,
                    label:`${iconoTipo[cat]||"🍽️"} ${cat}`,
                    items:resto.filter(p=>p.cat===cat||p.name?.toLowerCase().includes(cat.toLowerCase())),
                    highlight:false
                  })),
                  {key:"otros",label:"🍽️ Otros platos",items:resto.filter(p=>!catsProv.some(c=>p.cat===c||p.name?.toLowerCase().includes(c.toLowerCase()))),highlight:false}
                ].filter(s=>s.items.length>0);
                if(secciones.length===0)return <div style={{textAlign:"center",padding:"40px 0",color:"#94a3b8"}}><div style={{fontSize:40}}>🍽️</div><p>No hay platos disponibles ahora</p></div>;
                return secciones.map(sec=>(
                  <div key={sec.key} style={{marginBottom:16}}>
                    <div style={{fontSize:13,fontWeight:800,color:sec.highlight?"#c2410c":"#0f172a",letterSpacing:-0.2,margin:"14px 0 10px",paddingBottom:6,borderBottom:`2px solid ${sec.highlight?"#fed7aa":"#f1f5f9"}`}}>{sec.label}</div>
                    {sec.highlight?(
                      <div style={{display:"flex",flexDirection:"column",gap:10}}>
                        {sec.items.map(p=>{
                          const qtyRest=cartRest[p.id]?.qty||0;
                          return(
                          <div key={p.id} style={{background:"#fff",borderRadius:16,overflow:"hidden",border:"2px solid #fed7aa",boxShadow:"0 3px 12px rgba(249,115,22,0.12)",cursor:"pointer"}} onClick={()=>setPlatoDetalle(p)}>
                            {/* IMAGEN CLICKABLE → ZOOM */}
                            <div style={{position:"relative"}}>
                              {p.foto
                                ?<img src={p.foto} alt={p.name} style={{width:"100%",height:130,objectFit:"cover",display:"block",cursor:"zoom-in"}} onClick={e=>{e.stopPropagation();setImgZoom(p.foto);}}/>
                                :<div style={{height:130,background:"linear-gradient(135deg,#fff7ed,#fde68a)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:48}}>🎁</div>
                              }
                              <div style={{position:"absolute",top:8,left:8,background:"#f97316",color:"#fff",fontSize:9,fontWeight:900,padding:"3px 9px",borderRadius:20,letterSpacing:0.3}}>🔥 PROMO</div>
                            </div>
                            {/* INFO */}
                            <div style={{padding:"10px 12px 12px"}}>
                              <div style={{fontSize:13,fontWeight:800,color:"#0f172a",lineHeight:1.3,marginBottom:3}}>{p.name}</div>
                              {p.descripcion&&<div style={{fontSize:11,color:"#64748b",lineHeight:1.4,marginBottom:4}}>{p.descripcion.length>70?p.descripcion.slice(0,70)+"…":p.descripcion}</div>}
                              <div style={{fontSize:10,color:"#f97316",fontWeight:600,marginBottom:8}}>💰 Ahorra más con esta promo</div>
                              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                <div style={{fontSize:18,fontWeight:900,color:"#ef4444",letterSpacing:-0.3}}>${p.price.toFixed(2)}</div>
                                {qtyRest>0?(
                                  <div style={s.qR}>
                                    <button style={s.qB} onClick={e=>{e.stopPropagation();const n={...cartRest};n[p.id].qty>1?n[p.id]={...n[p.id],qty:n[p.id].qty-1}:delete n[p.id];setCartRest(n);}}>−</button>
                                    <span style={s.qN}>{qtyRest}</span>
                                    <button style={s.qB} onClick={e=>{e.stopPropagation();setCartRest(c=>({...c,[p.id]:{...p,qty:qtyRest+1}}))}}>+</button>
                                  </div>
                                ):(
                                  <button style={{background:"#f97316",color:"#fff",border:"none",borderRadius:10,padding:"7px 14px",fontSize:11,fontWeight:800,cursor:"pointer"}} onClick={e=>{e.stopPropagation();setCartRest(c=>({...c,[p.id]:{...p,qty:(c[p.id]?.qty||0)+1}}))}}>+ Agregar Promo</button>
                                )}
                              </div>
                            </div>
                          </div>
                          );
                        })}
                      </div>
                    ):(
                      <div style={s.grid}>{sec.items.map(p=><CardRest key={p.id} p={p}/>)}</div>
                    )}
                  </div>
                ));
              })()}
            </div>
            {/* CARRITO RESTAURANTE FLOTANTE */}
            {Object.values(cartRest).length>0&&(
              <div style={{position:"fixed",bottom:16,left:"50%",transform:"translateX(-50%)",zIndex:150,width:"calc(100% - 32px)",maxWidth:398}}>
                <button style={{...s.btn,margin:0,display:"flex",justifyContent:"space-between",alignItems:"center",background:"#22c55e"}} onClick={()=>setSheet("cartGlobal")}>
                  <span>🛒 Ver pedido ({Object.values(cartRest).reduce((a,i)=>a+i.qty,0)})</span>
                  <span>${Object.values(cartRest).reduce((a,i)=>a+i.price*i.qty,0).toFixed(2)}</span>
                </button>
              </div>
            )}
          </div>
        ):(
          /* -- LISTA DE RESTAURANTES -- */
          <>
            <div style={{background:"linear-gradient(160deg,#7c2d12 0%,#c2410c 60%,#ea580c 100%)",padding:"18px 16px 16px",color:"#fff"}}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
                <div style={{width:48,height:48,background:"rgba(255,255,255,0.15)",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0}}>🍽️</div>
                <div>
                  <div style={{fontSize:20,fontWeight:900,color:"#fff",letterSpacing:-0.5}}>Feria de comidas</div>
                  <div style={{fontSize:11,color:"rgba(255,255,255,0.7)",marginTop:1}}>Restaurantes y cocinas de San Fernando</div>
                </div>
              </div>
              <input style={{width:"100%",padding:"11px 16px",borderRadius:12,border:"none",fontSize:13,background:"rgba(255,255,255,0.15)",color:"#fff",boxSizing:"border-box",outline:"none"}} placeholder="🔍  Buscar comida o restaurantes…" value={search} onChange={e=>setSearch(e.target.value)}/>
            </div>
            {/* BÚSQUEDA - mantenemos variable */}
            <div style={{display:"none"}}><input value={search} onChange={e=>setSearch(e.target.value)}/></div>
            {/* SI HAY BÚSQUEDA - mostrar platos de todos los restaurantes */}
            {search.length>1?(
              <div style={s.sec}>
                <div style={s.sT}>Resultados para "{search}"</div>
                <div style={s.grid}>
                  {allProdsConMargen.filter(p=>p.cat!=="Supermercado"&&p.name.toLowerCase().includes(search.toLowerCase())&&p.abierto).map(p=>(
                    <div key={p.id} style={s.card}>
                      {p.foto?<img src={p.foto} alt={p.name} style={s.cImg}/>:<div style={s.cEm}>🍽️</div>}
                      {p.kitchen&&<div style={s.cKt}>{p.logo&&<img src={p.logo} alt="" style={s.cLogo}/>}<span>{p.kitchen}</span></div>}
                      <div style={s.cNm}>{p.name}</div>
                      {p.descripcion&&<div style={{fontSize:10,color:"#94a3b8"}}>{p.descripcion}</div>}
                      <div style={s.cBt}>
                        <div><div style={s.cPr}>${p.price.toFixed(2)}</div><div style={s.cUn}>/{p.unit}</div></div>
                        <button onClick={()=>{const rest=allRestaurantes.find(r=>r.negocio===p.kitchen);if(rest){setRestauranteActivo(rest);setCartRestId(rest.id);setCartRestNombre(rest.negocio);setCartRestWa(rest.whatsapp_negocio||rest.telefono);}}} style={{...s.aBtn,fontSize:12,padding:"4px 10px",width:"auto",borderRadius:8}}>Ver menú</button>
                      </div>
                    </div>
                  ))}
                  {allProdsConMargen.filter(p=>p.cat!=="Supermercado"&&p.name.toLowerCase().includes(search.toLowerCase())).length===0&&<div style={{textAlign:"center",padding:"30px 0",color:"#94a3b8",gridColumn:"1/-1"}}>No encontramos "{search}"</div>}
                </div>
              </div>
            ):(
              /* LISTA DE RESTAURANTES */
              <>
              {/* BANNER PROMOS PREMIUM */}
              {provPromos.length>0&&(
                <div style={{padding:"12px 16px 0"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                    <div style={{fontSize:13,fontWeight:700,color:"#1e293b"}}>🔥 Ofertas destacadas</div>
                    <span style={{fontSize:10,background:"#f59e0b",color:"#fff",padding:"2px 8px",borderRadius:20,fontWeight:700}}>HOT</span>
                  </div>
                  <div style={{display:"flex",gap:10,overflowX:"auto",paddingBottom:8}}>
                    {provPromos.slice(0,5).map(p=>(
                      <div key={p.id} style={{flexShrink:0,width:200,borderRadius:14,overflow:"hidden",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",position:"relative"}}
                        onClick={()=>{const r=allRestaurantes.find(x=>x.negocio===p.proveedores?.negocio);if(r){setRestauranteActivo(r);setCartRestId(r.id);setCartRestNombre(r.negocio);setCartRestWa(r.whatsapp_negocio||r.telefono);}}}>
                        {p.foto_url
                          ?<img src={p.foto_url} alt={p.nombre} style={{width:"100%",height:110,objectFit:"cover"}}/>
                          :<div style={{height:110,background:"linear-gradient(135deg,#f59e0b,#d97706)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:36}}>🎁</div>
                        }
                        {/* Badge precio */}
                        <div style={{position:"absolute",top:8,right:8,background:"#ef4444",color:"#fff",borderRadius:20,padding:"3px 10px",fontSize:12,fontWeight:700}}>${parseFloat(p.precio||0).toFixed(2)}</div>
                        {/* Info */}
                        <div style={{padding:"8px 10px",background:"#fff"}}>
                          <div style={{fontSize:12,fontWeight:700,color:"#1e293b",lineHeight:1.3}}>{p.nombre}</div>
                          <div style={{display:"flex",alignItems:"center",gap:4,marginTop:3}}>
                            {p.proveedores?.logo_url&&<img src={p.proveedores.logo_url} alt="" style={{width:16,height:16,borderRadius:"50%",objectFit:"cover"}}/>}
                            <span style={{fontSize:10,color:"#64748b"}}>{p.proveedores?.negocio}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Espacio premium label */}
                  <div style={{textAlign:"center",marginBottom:4}}>
                    <span style={{fontSize:9,color:"#94a3b8",letterSpacing:0.5}}>ESPACIO PATROCINADO · ¿Quieres aparecer aquí? Contáctanos</span>
                  </div>
                </div>
              )}
              <div style={{...s.sec,paddingTop:12}}>
                {allRestaurantes.length===0&&<div style={{textAlign:"center",padding:"40px 0",color:"#94a3b8"}}><div style={{fontSize:40}}>🍽️</div><p>Próximamente restaurantes aquí</p></div>}
                {allRestaurantes.map(r=>{
                  const opTexto=r.tipo_operacion_gastro==="cocina_oscura"?"🚚 Pedidos solo por delivery":
                    r.tipo_operacion_gastro==="restaurante"?`🍽️ Atención en local${r.delivery_propio?" · 🚚 Delivery disponible":""}`:
                    r.tipo_operacion_gastro==="comida_casera"?"🏠 Comida casera · Delivery":
                    r.tipo_operacion_gastro==="comida_rapida"?`⚡ Comida rápida${r.delivery_propio?" · 🚚 Delivery":""}`:
                    r.tipo_operacion_gastro==="panaderia"?`🍞 Panadería y repostería${r.delivery_propio?" · 🚚 Delivery":""}`:
                    r.delivery_propio?"🚚 Delivery disponible":r.permite_retiro?"🏪 Retiro en local":"";
                  const etaRest=r.eta_texto||(r.eta_minutos_min&&r.eta_minutos_max?`${r.eta_minutos_min}–${r.eta_minutos_max} min`:null);
                  const catPrincipal=(r.categorias||[])[0]||"";
                  return(
                  <div key={r.id} onClick={()=>{setRestauranteActivo(r);setCartRestId(r.id);setCartRestNombre(r.negocio);setCartRestWa(r.whatsapp_negocio||r.telefono);setSearch("");}} style={{background:"#fff",borderRadius:16,border:"1px solid #f1f5f9",marginBottom:10,cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.05)",padding:"12px 14px",display:"flex",gap:12,alignItems:"center"}}>
                    <div style={{width:52,height:52,borderRadius:"50%",background:r.logo_url?"#f8fafc":getAvatarColor(r.negocio),flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",padding:r.logo_url?5:0}}>
                      {r.logo_url
                        ?<img src={r.logo_url} alt="" style={{width:"100%",height:"100%",objectFit:"contain"}} onError={e=>{e.target.style.display="none";e.target.parentNode.style.background=getAvatarColor(r.negocio);e.target.parentNode.innerHTML=`<span style="color:#fff;font-size:20px;font-weight:900">${(r.negocio||"?")[0].toUpperCase()}</span>`;}}/>
                        :<span style={{color:"#fff",fontSize:20,fontWeight:900}}>{(r.negocio||"?")[0].toUpperCase()}</span>
                      }
                    </div>
                    {/* CONTENIDO */}
                    <div style={{flex:1,minWidth:0}}>
                      {/* FILA 1: nombre + estado */}
                      <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
                        <div style={{fontSize:15,fontWeight:800,color:"#0f172a",letterSpacing:-0.3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1}}>{r.negocio}</div>
                        <span style={{fontSize:10,fontWeight:700,padding:"2px 7px",borderRadius:20,background:r.activo?"#dcfce7":"#fee2e2",color:r.activo?"#15803d":"#dc2626",flexShrink:0}}>{r.activo?"● Abierto":"● Cerrado"}</span>
                      </div>
                      {/* FILA 2: descripción (qué vende) */}
                      {r.descripcion_negocio&&<div style={{fontSize:11,color:"#64748b",marginBottom:4,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{r.descripcion_negocio}</div>}
                      {/* FILA 3: cómo pedir + 1 categoría */}
                      <div style={{display:"flex",gap:5,alignItems:"center",flexWrap:"wrap"}}>
                        {opTexto&&<span style={{fontSize:10,color:"#ea580c",fontWeight:600}}>{opTexto}</span>}
                        {catPrincipal&&!opTexto.includes(catPrincipal)&&<span style={{fontSize:10,color:"#94a3b8",background:"#f8fafc",padding:"1px 6px",borderRadius:20}}>· {catPrincipal}</span>}
                        {r.horario_desde&&<span style={{fontSize:10,color:"#cbd5e1"}}>· 🕐 {r.horario_desde}–{r.horario_hasta}</span>}
                      </div>
                    </div>
                    <div style={{color:"#e2e8f0",fontSize:18,flexShrink:0}}>›</div>
                  </div>
                  );
                })}
              </div>
              </>
            )}
          </>
        )}
      </>)}

      {/* CLASIFICADOS */}
      {tab==="Clasificados"&&(<>
        <div style={s.banner}>
          <p style={s.bT}>Clasificados San Fernando 🚗🏠🏍️</p>
          <p style={s.bS}>Vehículos · Motos · Inmuebles</p>
          <span style={s.bdg("#22c55e","#fff")}>✓ Gratis publicar</span>
          <span style={s.bdg(A,P)}>Hasta 4 fotos</span>
        </div>

        {/* BOTÓN PUBLICAR */}
        <div style={{padding:"12px 16px 0"}}>
          <button onClick={()=>{setShowPublicarClasificado(!showPublicarClasificado);setClasificadoSeleccionado(null);}} style={{...s.btn,marginTop:0,background:showPublicarClasificado?"#64748b":"#16a34a"}}>
            {showPublicarClasificado?"✕ Cancelar publicación":"➕ Publicar mi anuncio gratis"}
          </button>
        </div>

        {/* FORMULARIO PUBLICAR */}
        {showPublicarClasificado&&(
          <div style={{...s.sec,paddingTop:12}}>
            {pmsg&&<div style={s.msg(pmsg.includes("✅"))}>{pmsg}</div>}
            <div style={s.pc}>
              <div style={s.pT}>📋 Nuevo anuncio</div>
              <div style={{...s.ib,background:"#f0fdf4",marginBottom:12}}><div style={{fontSize:12,color:"#15803d"}}>✓ Gratis · Revisión del admin · Contacto directo por WhatsApp</div></div>

              {/* TIPO */}
              <label style={s.lbl}>Tipo de anuncio *</label>
              <div style={{display:"flex",gap:8,marginBottom:10}}>
                {CLASIF_TIPOS.map(t=>(
                  <button key={t} onClick={()=>setNewClasificado({...newClasificado,tipo:t,categoria:t})} style={{flex:1,padding:"10px 4px",borderRadius:10,border:newClasificado.tipo===t?`2px solid ${P}`:"1px solid #e2e8f0",background:newClasificado.tipo===t?"#0f172a":"#fff",color:newClasificado.tipo===t?"#fff":"#64748b",fontSize:12,fontWeight:600,cursor:"pointer"}}>
                    {t==="Vehículos"?"🚗":t==="Motos"?"🏍️":"🏠"} {t}
                  </button>
                ))}
              </div>

              {/* TÍTULO */}
              <label style={s.lbl}>Título del anuncio *</label>
              <input style={s.inp} placeholder={newClasificado.tipo==="Vehículos"?"Toyota Corolla 2018 en venta":newClasificado.tipo==="Motos"?"Honda CB 190 2020":"Casa en venta Sector Norte"} value={newClasificado.titulo} onChange={e=>setNewClasificado({...newClasificado,titulo:e.target.value})}/>

              {/* CAMPOS VEHÍCULOS */}
              {newClasificado.tipo==="Vehículos"&&(<>
                <div style={{display:"flex",gap:8}}>
                  <div style={{flex:1}}><label style={s.lbl}>Marca *</label><select style={{...s.inp,background:"#fff"}} value={newClasificado.marca} onChange={e=>setNewClasificado({...newClasificado,marca:e.target.value})}><option value="">Seleccionar...</option>{VEHICULO_MARCAS.map(m=><option key={m}>{m}</option>)}</select></div>
                  <div style={{flex:1}}><label style={s.lbl}>Modelo</label><input style={s.inp} placeholder="Corolla, Hilux..." value={newClasificado.modelo} onChange={e=>setNewClasificado({...newClasificado,modelo:e.target.value})}/></div>
                </div>
                <div style={{display:"flex",gap:8}}>
                  <div style={{flex:1}}><label style={s.lbl}>Año</label><input style={s.inp} type="number" placeholder="2018" value={newClasificado.anio} onChange={e=>setNewClasificado({...newClasificado,anio:e.target.value})}/></div>
                  <div style={{flex:1}}><label style={s.lbl}>Kilometraje</label><input style={s.inp} placeholder="85.000 km" value={newClasificado.kilometraje} onChange={e=>setNewClasificado({...newClasificado,kilometraje:e.target.value})}/></div>
                </div>
                <div style={{display:"flex",gap:8}}>
                  <div style={{flex:1}}><label style={s.lbl}>Color</label><input style={s.inp} placeholder="Blanco" value={newClasificado.color} onChange={e=>setNewClasificado({...newClasificado,color:e.target.value})}/></div>
                  <div style={{flex:1}}><label style={s.lbl}>Transmisión</label><select style={{...s.inp,background:"#fff"}} value={newClasificado.transmision} onChange={e=>setNewClasificado({...newClasificado,transmision:e.target.value})}>{TRANSMISION.map(t=><option key={t}>{t}</option>)}</select></div>
                </div>
                <label style={s.lbl}>Combustible</label>
                <select style={{...s.inp,background:"#fff"}} value={newClasificado.combustible} onChange={e=>setNewClasificado({...newClasificado,combustible:e.target.value})}>{COMBUSTIBLE.map(c=><option key={c}>{c}</option>)}</select>
              </>)}

              {/* CAMPOS MOTOS */}
              {newClasificado.tipo==="Motos"&&(<>
                <div style={{display:"flex",gap:8}}>
                  <div style={{flex:1}}><label style={s.lbl}>Marca *</label><select style={{...s.inp,background:"#fff"}} value={newClasificado.marca} onChange={e=>setNewClasificado({...newClasificado,marca:e.target.value})}><option value="">Seleccionar...</option>{MOTO_MARCAS.map(m=><option key={m}>{m}</option>)}</select></div>
                  <div style={{flex:1}}><label style={s.lbl}>Modelo</label><input style={s.inp} placeholder="CB 190, Titan..." value={newClasificado.modelo} onChange={e=>setNewClasificado({...newClasificado,modelo:e.target.value})}/></div>
                </div>
                <div style={{display:"flex",gap:8}}>
                  <div style={{flex:1}}><label style={s.lbl}>Año</label><input style={s.inp} type="number" placeholder="2020" value={newClasificado.anio} onChange={e=>setNewClasificado({...newClasificado,anio:e.target.value})}/></div>
                  <div style={{flex:1}}><label style={s.lbl}>Kilometraje</label><input style={s.inp} placeholder="15.000 km" value={newClasificado.kilometraje} onChange={e=>setNewClasificado({...newClasificado,kilometraje:e.target.value})}/></div>
                </div>
                <label style={s.lbl}>Color</label>
                <input style={s.inp} placeholder="Rojo, Negro..." value={newClasificado.color} onChange={e=>setNewClasificado({...newClasificado,color:e.target.value})}/>
              </>)}

              {/* CAMPOS INMUEBLES */}
              {newClasificado.tipo==="Inmuebles"&&(<>
                <label style={s.lbl}>Tipo de operación *</label>
                <div style={{display:"flex",gap:8,marginBottom:10}}>{TIPO_OPERACION.map(t=>(<button key={t} onClick={()=>setNewClasificado({...newClasificado,tipo_operacion:t})} style={{flex:1,padding:"9px",borderRadius:10,border:newClasificado.tipo_operacion===t?`2px solid ${P}`:"1px solid #e2e8f0",background:newClasificado.tipo_operacion===t?P:"#fff",color:newClasificado.tipo_operacion===t?"#fff":"#64748b",fontSize:13,fontWeight:600,cursor:"pointer"}}>{t==="Venta"?"🏷️ Venta":"🔑 Alquiler"}</button>))}</div>
                <label style={s.lbl}>Sector / Urbanización</label>
                <input style={s.inp} placeholder="Sector Norte, Barrio El Carmen..." value={newClasificado.sector} onChange={e=>setNewClasificado({...newClasificado,sector:e.target.value})}/>
                <div style={{display:"flex",gap:8}}>
                  <div style={{flex:1}}><label style={s.lbl}>Habitaciones</label><input style={s.inp} type="number" placeholder="3" value={newClasificado.habitaciones} onChange={e=>setNewClasificado({...newClasificado,habitaciones:e.target.value})}/></div>
                  <div style={{flex:1}}><label style={s.lbl}>Baños</label><input style={s.inp} type="number" placeholder="2" value={newClasificado.banos} onChange={e=>setNewClasificado({...newClasificado,banos:e.target.value})}/></div>
                </div>
                <label style={s.lbl}>Metros cuadrados</label>
                <input style={s.inp} placeholder="120 m²" value={newClasificado.metros2} onChange={e=>setNewClasificado({...newClasificado,metros2:e.target.value})}/>
              </>)}

              {/* DESCRIPCIÓN */}
              <label style={s.lbl}>Descripción (detalles adicionales)</label>
              <input style={s.inp} placeholder="Estado, equipamiento, motivo de venta..." value={newClasificado.descripcion} onChange={e=>setNewClasificado({...newClasificado,descripcion:e.target.value})}/>

              {/* PRECIO */}
              <div style={{display:"flex",gap:8,alignItems:"flex-end"}}>
                <div style={{flex:1}}><label style={s.lbl}>Precio ($) *</label><input style={s.inp} type="number" placeholder="5000" value={newClasificado.precio} onChange={e=>setNewClasificado({...newClasificado,precio:e.target.value})}/></div>
                <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10,background:"#f1f5f9",padding:"11px 12px",borderRadius:10,flexShrink:0}}>
                  <input type="checkbox" id="negoc" checked={newClasificado.negociable} onChange={e=>setNewClasificado({...newClasificado,negociable:e.target.checked})} style={{width:16,height:16}}/>
                  <label htmlFor="negoc" style={{fontSize:12,cursor:"pointer",whiteSpace:"nowrap"}}>Negociable</label>
                </div>
              </div>

              {/* FOTOS */}
              <label style={s.lbl}>📸 Fotos (hasta 4 fotos)</label>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}}>
                {[0,1,2,3].map(i=>(
                  <div key={i} style={{position:"relative"}}>
                    {clasifFotosPrev[i]?(
                      <div style={{position:"relative"}}>
                        <img src={clasifFotosPrev[i]} alt="" style={{width:"100%",height:90,objectFit:"cover",borderRadius:8}}/>
                        <button onClick={()=>{const f=[...clasifFotos];const p=[...clasifFotosPrev];f[i]=null;p[i]=null;setClasifFotos(f);setClasifFotosPrev(p);}} style={{position:"absolute",top:4,right:4,background:"#ef4444",color:"#fff",border:"none",borderRadius:"50%",width:22,height:22,fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
                      </div>
                    ):(
                      <label style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:90,background:"#f8fafc",borderRadius:8,border:"2px dashed #e2e8f0",cursor:"pointer",gap:4}}>
                        <span style={{fontSize:22}}>📷</span>
                        <span style={{fontSize:10,color:"#94a3b8"}}>Foto {i+1}</span>
                        <input type="file" accept="image/*" style={{display:"none"}} onChange={e=>{const f=e.target.files[0];if(f){const arr=[...clasifFotos];const prev=[...clasifFotosPrev];arr[i]=f;prev[i]=URL.createObjectURL(f);setClasifFotos(arr);setClasifFotosPrev(prev);}}}/>
                      </label>
                    )}
                  </div>
                ))}
              </div>

              {/* CONTACTO */}
              <label style={s.lbl}>Tu nombre *</label>
              <input style={s.inp} placeholder="Juan Pérez" value={newClasificado.vendedor_nombre} onChange={e=>setNewClasificado({...newClasificado,vendedor_nombre:e.target.value})}/>
              <label style={s.lbl}>Tu WhatsApp * (compradores te contactarán aquí)</label>
              <input style={s.inp} placeholder="+58 424-000-0000" value={newClasificado.vendedor_telefono} onChange={e=>setNewClasificado({...newClasificado,vendedor_telefono:e.target.value})}/>

              <button style={s.btn} onClick={publishClasificado} disabled={loading}>{loading?"Subiendo fotos...":"📤 Publicar anuncio"}</button>
            </div>
          </div>
        )}

        {/* FILTROS TIPO */}
        {!showPublicarClasificado&&!clasificadoSeleccionado&&(
          <div style={s.cs}>
            {["Todos","Vehículos","Motos","Inmuebles"].map(t=>(
              <button key={t} style={s.cb(clasificadoTipo===t)} onClick={()=>setClasificadoTipo(t)}>
                {t==="Todos"?"🔍 Todos":t==="Vehículos"?"🚗 Vehículos":t==="Motos"?"🏍️ Motos":"🏠 Inmuebles"}
              </button>
            ))}
          </div>
        )}

        {/* DETALLE DE UN CLASIFICADO */}
        {clasificadoSeleccionado&&(
          <div style={{...s.sec,paddingTop:12}}>
            <button onClick={()=>setClasificadoSeleccionado(null)} style={{...s.btnG,marginTop:0,marginBottom:12}}>← Volver a la lista</button>
            {/* GALERÍA DE FOTOS */}
            {[clasificadoSeleccionado.foto1_url,clasificadoSeleccionado.foto2_url,clasificadoSeleccionado.foto3_url,clasificadoSeleccionado.foto4_url].filter(Boolean).length>0&&(
              <div style={{display:"grid",gridTemplateColumns:[clasificadoSeleccionado.foto1_url,clasificadoSeleccionado.foto2_url,clasificadoSeleccionado.foto3_url,clasificadoSeleccionado.foto4_url].filter(Boolean).length===1?"1fr":"1fr 1fr",gap:6,marginBottom:12}}>
                {[clasificadoSeleccionado.foto1_url,clasificadoSeleccionado.foto2_url,clasificadoSeleccionado.foto3_url,clasificadoSeleccionado.foto4_url].filter(Boolean).map((f,i)=>(
                  <img key={i} src={f} alt="" style={{width:"100%",height:i===0&&[clasificadoSeleccionado.foto1_url,clasificadoSeleccionado.foto2_url,clasificadoSeleccionado.foto3_url,clasificadoSeleccionado.foto4_url].filter(Boolean).length===1?200:130,objectFit:"cover",borderRadius:10}}/>
                ))}
              </div>
            )}
            <div style={s.pc}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                <div>
                  <div style={{fontSize:11,color:"#7e22ce",fontWeight:700,marginBottom:2}}>{clasificadoSeleccionado.tipo==="Vehículos"?"🚗":clasificadoSeleccionado.tipo==="Motos"?"🏍️":"🏠"} {clasificadoSeleccionado.tipo}</div>
                  <div style={{fontSize:17,fontWeight:700,color:P}}>{clasificadoSeleccionado.titulo}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:20,fontWeight:700,color:"#22c55e"}}>${parseFloat(clasificadoSeleccionado.precio).toLocaleString()}</div>
                  {clasificadoSeleccionado.negociable&&<div style={{fontSize:11,color:"#f59e0b",fontWeight:600}}>Negociable</div>}
                </div>
              </div>
              {/* SPECS */}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:10}}>
                {clasificadoSeleccionado.marca&&<div style={{background:"#f8fafc",borderRadius:8,padding:"6px 10px"}}><div style={{fontSize:10,color:"#94a3b8"}}>Marca</div><div style={{fontSize:13,fontWeight:600}}>{clasificadoSeleccionado.marca}</div></div>}
                {clasificadoSeleccionado.modelo&&<div style={{background:"#f8fafc",borderRadius:8,padding:"6px 10px"}}><div style={{fontSize:10,color:"#94a3b8"}}>Modelo</div><div style={{fontSize:13,fontWeight:600}}>{clasificadoSeleccionado.modelo}</div></div>}
                {clasificadoSeleccionado.anio&&<div style={{background:"#f8fafc",borderRadius:8,padding:"6px 10px"}}><div style={{fontSize:10,color:"#94a3b8"}}>Año</div><div style={{fontSize:13,fontWeight:600}}>{clasificadoSeleccionado.anio}</div></div>}
                {clasificadoSeleccionado.kilometraje&&<div style={{background:"#f8fafc",borderRadius:8,padding:"6px 10px"}}><div style={{fontSize:10,color:"#94a3b8"}}>Kilometraje</div><div style={{fontSize:13,fontWeight:600}}>{clasificadoSeleccionado.kilometraje}</div></div>}
                {clasificadoSeleccionado.transmision&&<div style={{background:"#f8fafc",borderRadius:8,padding:"6px 10px"}}><div style={{fontSize:10,color:"#94a3b8"}}>Transmisión</div><div style={{fontSize:13,fontWeight:600}}>{clasificadoSeleccionado.transmision}</div></div>}
                {clasificadoSeleccionado.combustible&&<div style={{background:"#f8fafc",borderRadius:8,padding:"6px 10px"}}><div style={{fontSize:10,color:"#94a3b8"}}>Combustible</div><div style={{fontSize:13,fontWeight:600}}>{clasificadoSeleccionado.combustible}</div></div>}
                {clasificadoSeleccionado.color&&<div style={{background:"#f8fafc",borderRadius:8,padding:"6px 10px"}}><div style={{fontSize:10,color:"#94a3b8"}}>Color</div><div style={{fontSize:13,fontWeight:600}}>{clasificadoSeleccionado.color}</div></div>}
                {clasificadoSeleccionado.tipo_operacion&&<div style={{background:"#f8fafc",borderRadius:8,padding:"6px 10px"}}><div style={{fontSize:10,color:"#94a3b8"}}>Operación</div><div style={{fontSize:13,fontWeight:600}}>{clasificadoSeleccionado.tipo_operacion}</div></div>}
                {clasificadoSeleccionado.habitaciones&&<div style={{background:"#f8fafc",borderRadius:8,padding:"6px 10px"}}><div style={{fontSize:10,color:"#94a3b8"}}>Habitaciones</div><div style={{fontSize:13,fontWeight:600}}>{clasificadoSeleccionado.habitaciones}</div></div>}
                {clasificadoSeleccionado.banos&&<div style={{background:"#f8fafc",borderRadius:8,padding:"6px 10px"}}><div style={{fontSize:10,color:"#94a3b8"}}>Baños</div><div style={{fontSize:13,fontWeight:600}}>{clasificadoSeleccionado.banos}</div></div>}
                {clasificadoSeleccionado.metros2&&<div style={{background:"#f8fafc",borderRadius:8,padding:"6px 10px"}}><div style={{fontSize:10,color:"#94a3b8"}}>Metros²</div><div style={{fontSize:13,fontWeight:600}}>{clasificadoSeleccionado.metros2}</div></div>}
                {clasificadoSeleccionado.sector&&<div style={{background:"#f8fafc",borderRadius:8,padding:"6px 10px"}}><div style={{fontSize:10,color:"#94a3b8"}}>Sector</div><div style={{fontSize:13,fontWeight:600}}>{clasificadoSeleccionado.sector}</div></div>}
              </div>
              {clasificadoSeleccionado.descripcion&&<div style={{fontSize:13,color:"#64748b",marginBottom:12,lineHeight:1.6}}>{clasificadoSeleccionado.descripcion}</div>}
              <div style={{fontSize:12,color:"#64748b",marginBottom:12}}>👤 {clasificadoSeleccionado.vendedor_nombre}</div>
              <button onClick={()=>{const _n=(clasificadoSeleccionado.vendedor_telefono||"").replace(/\D/g,"");window.location.href="https://wa.me/"+_n+"?text="+encodeURIComponent("Hola "+clasificadoSeleccionado.vendedor_nombre+", vi tu anuncio *"+clasificadoSeleccionado.titulo+"* en MiMercado. ¿Sigue disponible?");}} style={s.btnWa}>
                📲 Contactar por WhatsApp
              </button>
            </div>
          </div>
        )}

        {/* LISTA DE CLASIFICADOS */}
        {!showPublicarClasificado&&!clasificadoSeleccionado&&(
          <div style={{...s.sec,paddingTop:8}}>
            {clasificados.filter(c=>clasificadoTipo==="Todos"||c.tipo===clasificadoTipo).length===0&&(
              <div style={{textAlign:"center",padding:"40px 0",color:"#94a3b8"}}>
                <div style={{fontSize:40}}>{clasificadoTipo==="Motos"?"🏍️":clasificadoTipo==="Inmuebles"?"🏠":"🚗"}</div>
                <p>No hay anuncios en esta categoría</p>
                <button onClick={()=>setShowPublicarClasificado(true)} style={{...s.btn,maxWidth:260,margin:"12px auto 0"}}>Publicar el primero</button>
              </div>
            )}
            {clasificados.filter(c=>clasificadoTipo==="Todos"||c.tipo===clasificadoTipo).map(c=>(
              <div key={c.id} onClick={()=>setClasificadoSeleccionado(c)} style={{background:"#fff",borderRadius:14,marginBottom:12,border:"1px solid #f1f5f9",overflow:"hidden",cursor:"pointer"}}>
                {/* FOTO PRINCIPAL */}
                {c.foto1_url?<img src={c.foto1_url} alt={c.titulo} style={{width:"100%",height:160,objectFit:"cover"}}/>:<div style={{height:100,background:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:40}}>{c.tipo==="Motos"?"🏍️":c.tipo==="Inmuebles"?"🏠":"🚗"}</div>}
                {/* INFO */}
                <div style={{padding:"10px 12px"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
                    <div style={{fontSize:11,color:"#7e22ce",fontWeight:700}}>{c.tipo==="Vehículos"?"🚗":c.tipo==="Motos"?"🏍️":"🏠"} {c.tipo}{c.tipo_operacion?` · ${c.tipo_operacion}`:""}</div>
                    {[c.foto1_url,c.foto2_url,c.foto3_url,c.foto4_url].filter(Boolean).length>1&&<div style={{fontSize:10,color:"#94a3b8"}}>📷 {[c.foto1_url,c.foto2_url,c.foto3_url,c.foto4_url].filter(Boolean).length} fotos</div>}
                  </div>
                  <div style={{fontSize:15,fontWeight:700,color:P,marginBottom:4}}>{c.titulo}</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:6}}>
                    {c.marca&&<span style={{fontSize:11,background:"#f1f5f9",color:"#64748b",padding:"2px 8px",borderRadius:20}}>{c.marca}</span>}
                    {c.anio&&<span style={{fontSize:11,background:"#f1f5f9",color:"#64748b",padding:"2px 8px",borderRadius:20}}>{c.anio}</span>}
                    {c.kilometraje&&<span style={{fontSize:11,background:"#f1f5f9",color:"#64748b",padding:"2px 8px",borderRadius:20}}>{c.kilometraje}</span>}
                    {c.habitaciones&&<span style={{fontSize:11,background:"#f1f5f9",color:"#64748b",padding:"2px 8px",borderRadius:20}}>{c.habitaciones} hab.</span>}
                    {c.sector&&<span style={{fontSize:11,background:"#f1f5f9",color:"#64748b",padding:"2px 8px",borderRadius:20}}>📍 {c.sector}</span>}
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div><span style={{fontSize:18,fontWeight:700,color:"#22c55e"}}>${parseFloat(c.precio).toLocaleString()}</span>{c.negociable&&<span style={{fontSize:11,color:"#f59e0b",fontWeight:600,marginLeft:6}}>Negociable</span>}</div>
                    <span style={{fontSize:12,color:P,fontWeight:600}}>Ver más →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </>)}

      {/* SERVICIOS */}
      {tab==="Servicios"&&(<>
        <div style={{...s.banner,paddingBottom:14}}>
          <p style={s.bT}>Servicios en {CITY} ⚡</p>
          <p style={{fontSize:12,color:"rgba(255,255,255,0.7)",margin:0}}>Servicios propios + comunidad</p>
        </div>

        {/* SERVICIOS FIJOS */}
        <div style={{...s.sec,marginTop:14}}>
          <div style={s.sT}>⚡ Servicios disponibles</div>
          {SVCS.map(sv=>(<div key={sv.id} style={{background:"#fff",borderRadius:14,padding:14,border:"1px solid #f1f5f9",display:"flex",gap:12,alignItems:"flex-start",marginBottom:10}}><div style={{fontSize:28,width:44,height:44,background:sv.bg,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{sv.emoji}</div><div style={{flex:1}}><div style={{fontSize:14,fontWeight:700}}>{sv.name}</div><div style={{fontSize:12,color:"#64748b",margin:"2px 0 6px"}}>{sv.desc}</div><span style={{fontSize:11,fontWeight:600,color:sv.tc,background:sv.bg,padding:"2px 8px",borderRadius:8}}>{sv.price}</span></div><button style={{background:P,color:"#fff",border:"none",borderRadius:10,padding:"7px 14px",fontSize:12,fontWeight:600,cursor:"pointer"}} onClick={()=>{setSelSvc(sv);setSheet("service");}}>Solicitar</button></div>))}
        </div>

        {/* SERVICIOS DE LA COMUNIDAD */}
        <div style={{...s.sec,paddingTop:0}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"14px 0 8px"}}>
            <div style={s.sT}>👥 Servicios de la comunidad</div>
            <button onClick={()=>setShowPublicarServicio(!showPublicarServicio)} style={{fontSize:11,fontWeight:700,color:showPublicarServicio?"#64748b":P,background:showPublicarServicio?"#f1f5f9":"#fef3c7",border:"none",borderRadius:8,padding:"5px 10px",cursor:"pointer"}}>{showPublicarServicio?"✕ Cancelar":"➕ Ofrecer mi servicio"}</button>
          </div>

          {/* FORMULARIO SERVICIO COMUNIDAD */}
          {showPublicarServicio&&(
            <div style={s.pc}>
              <div style={s.pT}>🛠️ Registrar mi servicio</div>
              <div style={{...s.ib,background:"#f0fdf4",marginBottom:12}}><div style={{fontSize:12,color:"#15803d"}}>✓ Gratis · El admin revisa antes de publicar · Los clientes te contactan directo</div></div>
              {pmsg&&<div style={s.msg(pmsg.includes("✅"))}>{pmsg}</div>}
              <label style={s.lbl}>¿Qué servicio ofreces? *</label>
              <input style={s.inp} placeholder="Plomero, Electricista, Costurera..." value={newServicioCom.nombre_servicio} onChange={e=>setNewServicioCom({...newServicioCom,nombre_servicio:e.target.value})}/>
              <label style={s.lbl}>Categoría *</label>
              <select style={{...s.inp,background:"#fff"}} value={newServicioCom.categoria} onChange={e=>setNewServicioCom({...newServicioCom,categoria:e.target.value})}>{SERVICIO_CATS.map(c=><option key={c}>{c}</option>)}</select>
              <label style={s.lbl}>Descripción * (qué haces, experiencia)</label>
              <input style={s.inp} placeholder="10 años de experiencia, trabajo en toda la ciudad..." value={newServicioCom.descripcion} onChange={e=>setNewServicioCom({...newServicioCom,descripcion:e.target.value})}/>
              <label style={s.lbl}>Precio referencial</label>
              <input style={s.inp} placeholder="Desde $5, Consultar, $10/hora..." value={newServicioCom.precio_referencial} onChange={e=>setNewServicioCom({...newServicioCom,precio_referencial:e.target.value})}/>
              <label style={s.lbl}>Zona donde trabajas</label>
              <input style={s.inp} placeholder="Toda la ciudad, Zona Norte, Centro..." value={newServicioCom.zona} onChange={e=>setNewServicioCom({...newServicioCom,zona:e.target.value})}/>
              <label style={s.lbl}>Tu nombre *</label>
              <input style={s.inp} placeholder="Juan Pérez" value={newServicioCom.proveedor_nombre} onChange={e=>setNewServicioCom({...newServicioCom,proveedor_nombre:e.target.value})}/>
              <label style={s.lbl}>Tu WhatsApp * (clientes te escribirán aquí)</label>
              <input style={s.inp} placeholder="+58 424-000-0000" value={newServicioCom.proveedor_telefono} onChange={e=>setNewServicioCom({...newServicioCom,proveedor_telefono:e.target.value})}/>
              <label style={s.lbl}>📸 Tu foto o foto de tu trabajo (recomendada)</label>
              {servComFotoPreview&&<img src={servComFotoPreview} alt="" style={{width:"100%",height:140,objectFit:"cover",borderRadius:10,marginBottom:8}}/>}
              <input type="file" accept="image/*" style={{marginBottom:10,fontSize:13}} onChange={e=>{const f=e.target.files[0];if(f){setServComFoto(f);setServComFotoPreview(URL.createObjectURL(f));}}}/>
              <button style={s.btn} onClick={publishServicioCom} disabled={loading}>{loading?"Enviando...":"📤 Enviar para publicación"}</button>
            </div>
          )}

          {/* LISTA SERVICIOS COMUNIDAD */}
          {!showPublicarServicio&&serviciosCom.length===0&&(
            <div style={{textAlign:"center",padding:"24px 0",color:"#94a3b8"}}>
              <div style={{fontSize:36}}>🛠️</div>
              <p style={{fontSize:13,margin:"8px 0"}}>Aún no hay servicios de la comunidad</p>
              <button onClick={()=>setShowPublicarServicio(true)} style={{...s.btn,maxWidth:240,margin:"8px auto 0",fontSize:13}}>Sé el primero</button>
            </div>
          )}
          {!showPublicarServicio&&serviciosCom.map(sv=>(
            <div key={sv.id} style={{background:"#fff",borderRadius:14,padding:14,border:"1px solid #f1f5f9",marginBottom:10}}>
              <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                {sv.foto_url?<img src={sv.foto_url} alt="" style={{width:52,height:52,borderRadius:10,objectFit:"cover",flexShrink:0}}/>:<div style={{width:52,height:52,background:"#f1f5f9",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>🛠️</div>}
                <div style={{flex:1}}>
                  <div style={{fontSize:14,fontWeight:700}}>{sv.nombre_servicio}</div>
                  <div style={{fontSize:11,color:"#7e22ce",fontWeight:600,marginBottom:2}}>{sv.categoria}</div>
                  <div style={{fontSize:12,color:"#64748b"}}>{sv.descripcion}</div>
                  {sv.precio_referencial&&<div style={{fontSize:11,fontWeight:600,color:"#15803d",marginTop:3}}>💰 {sv.precio_referencial}</div>}
                  {sv.zona&&<div style={{fontSize:11,color:"#94a3b8"}}>📍 {sv.zona}</div>}
                  <div style={{fontSize:11,color:"#64748b",marginTop:2}}>👤 {sv.proveedor_nombre}</div>
                </div>
              </div>
              <button onClick={()=>{const _n=(sv.proveedor_telefono||"").replace(/\D/g,"");window.location.href="https://wa.me/"+_n+"?text="+encodeURIComponent("Hola "+sv.proveedor_nombre+", vi tu servicio de *"+sv.nombre_servicio+"* en MiMercado. ¿Podrías ayudarme?");}} style={{...s.btnWa,marginTop:10,padding:"8px",fontSize:12}}>
                📲 Contactar
              </button>
            </div>
          ))}
        </div>
      </>)}

      {/* PROVEEDORES */}
      {(tab==="Proveedores"||tab==="MiCuenta")&&(<div style={{...s.sec,marginTop:16}}>

        {(provMode==="login"||provMode==="register")&&(<div style={s.pc}>
          <div style={s.pT}>{provMode==="login"?"🏪 Acceso proveedores":"📝 Registro de proveedor"}</div>
          {pmsg&&<div style={s.msg(pmsg.includes("✅"))}>{pmsg}</div>}
          {provMode==="register"&&(<>
            <div style={{background:"#eff6ff",borderRadius:10,padding:"8px 12px",marginBottom:10,fontSize:11,color:"#1d4ed8",fontWeight:600}}>📧 Tu correo será tu usuario de acceso</div>
            <label style={s.lbl}>Correo electrónico * (acceso)</label>
            <input style={s.inp} placeholder="correo@ejemplo.com" type="email" value={provForm.email} onChange={e=>setProvForm({...provForm,email:e.target.value})}/>
            <label style={s.lbl}>Nombre completo *</label>
            <input style={s.inp} placeholder="María González" value={provForm.nombre} onChange={e=>setProvForm({...provForm,nombre:e.target.value})}/>
            <label style={s.lbl}>Nombre del negocio *</label>
            <input style={s.inp} placeholder="Cosméticos DORCAS" value={provForm.negocio} onChange={e=>setProvForm({...provForm,negocio:e.target.value})}/>
            <label style={s.lbl}>Descripción corta del negocio *</label>
            <input style={s.inp} placeholder="Cuidado capilar y belleza natural" value={provForm.descripcion_negocio} onChange={e=>setProvForm({...provForm,descripcion_negocio:e.target.value})}/>
            <label style={s.lbl}>WhatsApp del negocio * (aquí llegarán los pedidos)</label>
            <input style={s.inp} placeholder="04243232671" value={provForm.whatsapp_negocio} onChange={e=>setProvForm({...provForm,whatsapp_negocio:e.target.value})}/>
            <label style={s.lbl}>Teléfono principal (para cobros y contacto administrativo)</label>
            <input style={s.inp} placeholder="04143232671" value={provForm.telefono_principal} onChange={e=>setProvForm({...provForm,telefono_principal:e.target.value})}/>
            <label style={s.lbl}>Instagram (opcional)</label>
            <input style={s.inp} placeholder="@cosmeticosdorcas" value={provForm.instagram||""} onChange={e=>setProvForm({...provForm,instagram:e.target.value})}/>
            <label style={s.lbl}>Tipo de negocio *</label>
            <select style={{...s.inp,background:"#fff"}} value={provForm.tipo_negocio} onChange={e=>setProvForm({...provForm,tipo_negocio:e.target.value,categorias:[],tipo_operacion_gastro:""})}>{TIPO_NEGOCIO.map(t=><option key={t}>{t}</option>)}</select>
            {provForm.tipo_negocio==="Restaurante / Cocina / Comida"&&(
              <div style={{background:"#f8fafc",borderRadius:14,padding:"12px",marginBottom:4,border:"1px solid #e2e8f0"}}>
                <div style={{fontSize:12,fontWeight:700,color:"#374151",marginBottom:8}}>¿Cómo funciona tu negocio? *</div>
                <div style={{display:"flex",flexDirection:"column",gap:6}}>
                  {TIPOS_OPERACION_GASTRO.map(t=>(
                    <div key={t.value} onClick={()=>setProvForm(f=>({...f,tipo_operacion_gastro:t.value}))} style={{display:"flex",alignItems:"flex-start",gap:10,background:provForm.tipo_operacion_gastro===t.value?"#eff6ff":"#fff",border:`2px solid ${provForm.tipo_operacion_gastro===t.value?"#3b82f6":"#e2e8f0"}`,borderRadius:10,padding:"10px 12px",cursor:"pointer"}}>
                      <div style={{width:20,height:20,borderRadius:"50%",background:provForm.tipo_operacion_gastro===t.value?"#3b82f6":"#e2e8f0",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",marginTop:1}}>{provForm.tipo_operacion_gastro===t.value&&<span style={{color:"#fff",fontSize:12,fontWeight:900}}>✓</span>}</div>
                      <div>
                        <div style={{fontSize:13,fontWeight:700,color:provForm.tipo_operacion_gastro===t.value?"#1d4ed8":"#374151"}}>{t.label}</div>
                        <div style={{fontSize:11,color:"#94a3b8",marginTop:2}}>{t.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <label style={s.lbl}>Horario de atención</label>
            <div style={{display:"flex",gap:8,marginBottom:6}}>
              <div style={{flex:1}}><label style={{...s.lbl,marginBottom:2}}>Abre</label><input style={s.inp} type="time" value={provForm.horario_desde} onChange={e=>setProvForm({...provForm,horario_desde:e.target.value})}/></div>
              <div style={{flex:1}}><label style={{...s.lbl,marginBottom:2}}>Cierra</label><input style={s.inp} type="time" value={provForm.horario_hasta} onChange={e=>setProvForm({...provForm,horario_hasta:e.target.value})}/></div>
            </div>
            <input style={s.inp} placeholder="Ej: Solo fines de semana, Lun-Vie..." value={provForm.horario_desc} onChange={e=>setProvForm({...provForm,horario_desc:e.target.value})}/>
            <label style={s.lbl}>¿Cómo entregas los pedidos? (puedes marcar ambas)</label>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}}>
              <button type="button" onClick={()=>setProvForm({...provForm,delivery_propio:!provForm.delivery_propio})} style={{padding:"12px 8px",borderRadius:12,border:`2px solid ${provForm.delivery_propio?"#15803d":"#e2e8f0"}`,background:provForm.delivery_propio?"#f0fdf4":"#fff",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
                <span style={{fontSize:22}}>🛵</span>
                <span style={{fontSize:12,fontWeight:700,color:provForm.delivery_propio?"#15803d":"#374151"}}>Delivery</span>
                <span style={{fontSize:10,color:provForm.delivery_propio?"#15803d":"#94a3b8"}}>Entrego a domicilio</span>
                <div style={{width:18,height:18,borderRadius:4,border:`2px solid ${provForm.delivery_propio?"#15803d":"#d1d5db"}`,background:provForm.delivery_propio?"#15803d":"#fff",display:"flex",alignItems:"center",justifyContent:"center",marginTop:2}}>{provForm.delivery_propio&&<span style={{color:"#fff",fontSize:11,fontWeight:900}}>✓</span>}</div>
              </button>
              <button type="button" onClick={()=>setProvForm({...provForm,permite_retiro:!provForm.permite_retiro})} style={{padding:"12px 8px",borderRadius:12,border:`2px solid ${provForm.permite_retiro?"#3b82f6":"#e2e8f0"}`,background:provForm.permite_retiro?"#eff6ff":"#fff",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
                <span style={{fontSize:22}}>🏪</span>
                <span style={{fontSize:12,fontWeight:700,color:provForm.permite_retiro?"#1d4ed8":"#374151"}}>Retiro en local</span>
                <span style={{fontSize:10,color:provForm.permite_retiro?"#3b82f6":"#94a3b8"}}>El cliente recoge</span>
                <div style={{width:18,height:18,borderRadius:4,border:`2px solid ${provForm.permite_retiro?"#3b82f6":"#d1d5db"}`,background:provForm.permite_retiro?"#3b82f6":"#fff",display:"flex",alignItems:"center",justifyContent:"center",marginTop:2}}>{provForm.permite_retiro&&<span style={{color:"#fff",fontSize:11,fontWeight:900}}>✓</span>}</div>
              </button>
            </div>
            {provForm.delivery_propio&&(
              <div style={{background:"#f0fdf4",borderRadius:10,padding:"10px 12px",marginBottom:8,border:"1px solid #bbf7d0"}}>
                <div style={{fontSize:11,fontWeight:700,color:"#15803d",marginBottom:8}}>Configura tu delivery</div>
                <div style={{display:"flex",gap:8}}>
                  <div style={{flex:1}}><label style={s.lbl}>Costo del delivery $</label><input style={s.inp} type="number" placeholder="1.50" value={provForm.delivery_costo} onChange={e=>setProvForm({...provForm,delivery_costo:parseFloat(e.target.value)||0})}/></div>
                  <div style={{flex:1}}><label style={s.lbl}>Delivery gratis desde $</label><input style={s.inp} type="number" placeholder="15" value={provForm.delivery_gratis_desde} onChange={e=>setProvForm({...provForm,delivery_gratis_desde:parseFloat(e.target.value)||15})}/></div>
                </div>
                <div style={{fontSize:10,color:"#15803d",marginTop:4}}>💡 Pedidos mayores a ${provForm.delivery_gratis_desde||15} tendrán delivery gratis</div>
              </div>
            )}
            <label style={s.lbl}>Dirección física</label>
            <input style={s.inp} placeholder="Calle Comercio #47, Local 3..." value={provForm.direccion_fisica||""} onChange={e=>setProvForm({...provForm,direccion_fisica:e.target.value})}/>
            {(()=>{
  const esComida=provForm.tipo_negocio==="Restaurante / Cocina / Comida";
  const regCats=esComida?TIPOS_COMIDA:
    provForm.tipo_negocio==="Transporte y encomiendas"||provForm.tipo_negocio==="Lavandería"?NEGOCIO_CATS_TRANSPORTE:
    provForm.tipo_negocio==="Tienda / Negocio local"?NEGOCIO_CATS.map(c=>c.cat):
    [...NEGOCIO_CATS.map(c=>c.cat),...NEGOCIO_CATS_RESTAURANTE];
  const catLabel=esComida?"Tipos de comida que ofreces (selecciona varios)":
    provForm.tipo_negocio==="Tienda / Negocio local"?"Categorías de tu negocio":
    provForm.tipo_negocio==="Transporte y encomiendas"||provForm.tipo_negocio==="Lavandería"?"Tipo de servicio":
    "Categorías";
  return(<>

    <label style={s.lbl}>{catLabel} {provForm.categorias.length>0&&<span style={{color:P,fontWeight:700}}>({provForm.categorias.length} seleccionadas)</span>}</label>
    <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:10}}>
      {regCats.map(c=>(<button key={c} onClick={()=>setProvForm(f=>({...f,categorias:f.categorias.includes(c)?f.categorias.filter(x=>x!==c):[...f.categorias,c]}))} style={{padding:"6px 12px",borderRadius:20,fontSize:12,cursor:"pointer",background:provForm.categorias.includes(c)?P:"#f1f5f9",color:provForm.categorias.includes(c)?"#fff":"#64748b",border:provForm.categorias.includes(c)?`2px solid ${P}`:"2px solid transparent",fontWeight:provForm.categorias.includes(c)?700:500,transition:"all 0.15s"}}>{c}</button>))}
    </div>
  </>);
})()}
            <div style={{...s.ib,background:"#f0fdf4",marginBottom:8}}><div style={{fontSize:12,color:"#15803d"}}>🎁 Los primeros 3 meses son completamente gratis. Después $8/mes.</div></div>
            <label style={s.lbl}>Logo del negocio</label>
            {logoPreview&&<img src={logoPreview} alt="" style={{width:60,height:60,borderRadius:"50%",objectFit:"cover",marginBottom:8}}/>}
            <input type="file" accept="image/*" style={{marginBottom:10,fontSize:13}} onChange={e=>{const f=e.target.files[0];if(f){setLogoFile(f);setLogoPreview(URL.createObjectURL(f));}}}/>
          </>)}
          {provMode==="login"&&<><label style={s.lbl}>Correo electrónico</label><input style={s.inp} placeholder="correo@ejemplo.com" type="email" value={provForm.email} onChange={e=>setProvForm({...provForm,email:e.target.value})}/></>}
          <label style={s.lbl}>Contraseña *</label>
          <input style={s.inp} type="password" placeholder="••••••••" value={provForm.pass} onChange={e=>setProvForm({...provForm,pass:e.target.value})}/>
          <button style={s.btn} onClick={provMode==="login"?handleLogin:handleRegister} disabled={loading}>{loading?"Procesando...":(provMode==="login"?"Entrar":"Registrarme")}</button>
          <button style={s.btnG} onClick={()=>{setProvMode(provMode==="login"?"register":"login");setPmsg("");}}>{provMode==="login"?"¿Nuevo? Regístrate aquí":"¿Ya tienes cuenta? Inicia sesión"}</button>
          {provMode==="login"&&(
            <button style={{background:"none",border:"none",color:"#94a3b8",fontSize:12,cursor:"pointer",marginTop:4,textDecoration:"underline"}} onClick={()=>{
              const correo=provForm.email;
              if(!correo)return setPmsg("Escribe tu correo primero");
              const num=WA.startsWith("0")?"58"+WA.slice(1):WA;
              window.location.href="https://wa.me/"+num+"?text="+encodeURIComponent("Hola Apure Market, olvidé mi contraseña. Mi correo registrado es: "+correo);
            }}>¿Olvidaste tu contraseña?</button>
          )}
        </div>)}

        {/* DASHBOARD PROVEEDOR */}
        {provMode==="dash"&&provData&&(<>
          <div style={{...s.pc,background:"#f0fdf4",borderColor:"#bbf7d0"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              {provData.logo_url&&<img src={provData.logo_url} alt="" style={{width:48,height:48,borderRadius:"50%",objectFit:"cover"}}/>}
              <div><div style={{fontSize:14,fontWeight:700,color:"#15803d"}}>{provData.negocio}</div><div style={{fontSize:11,color:"#64748b"}}>{provData.email}{provData.tipo_negocio&&<span style={{marginLeft:6,background:"#f0fdf4",padding:"1px 6px",borderRadius:8,color:"#15803d"}}>{provData.tipo_negocio}</span>}</div>{provData.instagram&&<div style={{fontSize:11,color:"#6366f1",marginTop:2}}>📷 {provData.instagram}</div>}</div>
            </div>
            {/* SUSCRIPCIÓN STATUS */}
            {provData.meses_gratis_restantes>0?(
              <div style={{background:"#f0fdf4",borderRadius:10,padding:"6px 12px",marginBottom:8,fontSize:12,color:"#15803d",display:"flex",justifyContent:"space-between"}}>
                <span>🎁 Período gratis activo</span>
                <span style={{fontWeight:700}}>{provData.meses_gratis_restantes} mes(es) restantes</span>
              </div>
            ):(
              <div style={{background:provData.suscripcion_pagada?"#f0fdf4":"#fff1f2",borderRadius:10,padding:"6px 12px",marginBottom:8,fontSize:12,color:provData.suscripcion_pagada?"#15803d":"#be123c",display:"flex",justifyContent:"space-between"}}>
                <span>{provData.suscripcion_pagada?"✓ Suscripción activa":"⚠️ Suscripción vencida"}</span>
                <span style={{fontWeight:700}}>Vence: {provData.suscripcion_vence?.slice(0,10)}</span>
              </div>
            )}
            <button style={s.toggleBtn(provData.activo)} onClick={toggleMiEstado}>
              <span style={{fontSize:20}}>{provData.activo?"🟢":"🔴"}</span>
              <div><div style={{fontSize:14,fontWeight:700,color:provData.activo?"#15803d":"#92400e"}}>{provData.activo?"ABIERTO — Recibiendo pedidos":"CERRADO — No recibo pedidos"}</div><div style={{fontSize:11,color:"#64748b"}}>Toca para {provData.activo?"cerrar":"abrir"} tu negocio</div></div>
            </button>
          </div>

          {pmsg&&<div style={s.msg(pmsg.includes("✅"))}>{pmsg}</div>}
          <div>
            {[
              {k:"estado",      l:"📊 Inicio",         n:0},
              {k:"pedidos_rest",l:"📋 Pedidos",         n:misRestPedidos.filter(p=>!["entregado","cancelado"].includes(p.estado)).length},
              {k:"productos",   l:"📦 Productos",       n:0},
              {k:"promos",      l:"🎉 Promociones",     n:myPromos.filter(pr=>pr.motivo_rechazo).length},
              {k:"clientes",    l:"👥 Mis clientes",    n:0},
              {k:"ventas",      l:"📈 Dashboard ventas",n:0},
              {k:"mi_negocio",  l:"⚙️ Mi negocio",      n:0},
            ].map(t=>{
              const isPromoTab=t.k==="promos"&&["promo_nueva","promo_activas","promo_pausadas","promo_pendientes","promo_rechazadas"].includes(provTab);
              const isProdTab=t.k==="productos"&&["productos","prod_nuevo","prod_aprobados","prod_pendientes","prod_rechazados"].includes(provTab);
              const isActive=provTab===t.k||isPromoTab||isProdTab;
              return(
                <div key={t.k} style={{marginBottom:6}}>
                  {/* BOTÓN DEL MÓDULO */}
                  <button style={{...s.admRow(isActive),marginBottom:0,borderRadius:isActive?"10px 10px 0 0":10}} onClick={()=>{
                    const newTab=t.k==="promos"?"promo_nueva":t.k==="productos"?"prod_aprobados":t.k;
                    setProvTab(isActive&&provTab===newTab?"__none__":newTab);
                    if(t.k==="clientes")loadMisClientes(provData.negocio);
                  }}>
                    <span>{t.l}</span>
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      {t.n>0&&<span style={{background:"#ef4444",color:"#fff",borderRadius:20,padding:"2px 10px",fontSize:11,fontWeight:700}}>{t.n}</span>}
                      <span style={{fontSize:14,color:isActive?"rgba(255,255,255,0.7)":"#94a3b8",transform:isActive?"rotate(90deg)":"none",transition:"transform 0.2s",display:"inline-block"}}>›</span>
                    </div>
                  </button>
                  {/* CONTENIDO DEL MÓDULO — aparece justo debajo */}
                  {isActive&&(
                    <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderTop:"none",borderRadius:"0 0 10px 10px",padding:"14px 12px"}}>

          {provTab==="estado"&&(<>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:12}}>
              <StatCard num={`$${myIngresoHoy.toFixed(2)}`} lbl="Ingresos hoy" color="#22c55e"/>
              <StatCard num={`$${myIngresoTotal.toFixed(2)}`} lbl="Total histórico"/>
              <StatCard num={myVentasHoy.length} lbl="Ventas hoy" color="#6366f1"/>
              <StatCard num={myClientes} lbl="Clientes únicos" color="#f59e0b"/>
            </div>
            {myTopProds.length>0&&(<div style={s.pc}><div style={s.pT}>🏆 Mis más pedidos</div><BarChart data={myTopProds} max={myTopProds[0]?.[1]||1}/></div>)}
            <div style={s.pc}>
              <div style={s.pT}>📋 Estado de mis productos</div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                <div style={{background:"#dcfce7",borderRadius:10,padding:"8px 12px",fontSize:12}}><span style={{fontWeight:700,color:"#15803d"}}>{myProds.filter(p=>p.aprobado&&!p.rechazado).length}</span> <span style={{color:"#64748b"}}>aprobados</span></div>
                <div style={{background:"#fef9c3",borderRadius:10,padding:"8px 12px",fontSize:12}}><span style={{fontWeight:700,color:"#854d0e"}}>{myProds.filter(p=>!p.aprobado&&!p.rechazado).length}</span> <span style={{color:"#64748b"}}>pendientes</span></div>
                <div style={{background:"#fee2e2",borderRadius:10,padding:"8px 12px",fontSize:12}}><span style={{fontWeight:700,color:"#be123c"}}>{myProds.filter(p=>p.rechazado).length}</span> <span style={{color:"#64748b"}}>rechazados</span></div>
              </div>
            </div>
          </>)}

          {(provTab==="productos"||provTab==="prod_nuevo"||provTab==="prod_aprobados"||provTab==="prod_pendientes"||provTab==="prod_rechazados")&&(<>
            <div style={{display:"flex",gap:6,marginBottom:12,overflowX:"auto"}}>
              {[
                {k:"prod_nuevo",l:"➕ Nuevo"},
                {k:"prod_aprobados",l:`✅ En tienda (${myProds.filter(p=>p.aprobado&&!p.rechazado).length})`},
                {k:"prod_pendientes",l:`⏳ Pendientes (${myProds.filter(p=>!p.aprobado&&!p.rechazado).length})`},
                {k:"prod_rechazados",l:`✗ Rechazados (${myProds.filter(p=>p.rechazado).length})`},
              ].map(t=>(
                <button key={t.k} onClick={()=>setProvTab(t.k)} style={{flexShrink:0,padding:"7px 11px",borderRadius:10,border:"none",background:provTab===t.k?P:"#f1f5f9",color:provTab===t.k?"#fff":"#64748b",fontSize:11,fontWeight:600,cursor:"pointer"}}>{t.l}</button>
              ))}
            </div>

            {provTab==="prod_nuevo"&&(
              <div style={s.pc}>
                <div style={s.pT}>➕ Publicar producto</div>
                <label style={s.lbl}>Nombre *</label>
                <input style={s.inp} placeholder="Torta de zanahoria" value={newProd.nombre} onChange={e=>setNewProd({...newProd,nombre:e.target.value})}/>
                <label style={s.lbl}>Marca (opcional)</label>
                <input style={s.inp} placeholder="Casero, artesanal..." value={newProd.marca} onChange={e=>setNewProd({...newProd,marca:e.target.value})}/>
                <label style={s.lbl}>Presentación (opcional)</label>
                <input style={s.inp} placeholder="500g, 1L..." value={newProd.presentacion} onChange={e=>setNewProd({...newProd,presentacion:e.target.value})}/>
                <label style={s.lbl}>Descripción (opcional)</label>
                <input style={s.inp} placeholder="Ingredientes, sabor..." value={newProd.descripcion} onChange={e=>setNewProd({...newProd,descripcion:e.target.value})}/>
                <label style={s.lbl}>Categoría *</label>
                {(()=>{
                  const prodCats=provData.tipo_negocio==="Tienda / Negocio local"
                    ?(provData.categorias?.length>0?provData.categorias:NEGOCIO_CATS.map(c=>c.cat))
                    :provData.tipo_negocio==="Restaurante / Cocina / Comida"
                    ?(provData.categorias?.length>0?provData.categorias:NEGOCIO_CATS_RESTAURANTE)
                    :(provData.categorias?.length>0?provData.categorias:PROV_CATS);
                  return(<select style={{...s.inp,background:"#fff"}} value={newProd.categoria} onChange={e=>setNewProd({...newProd,categoria:e.target.value})}>{prodCats.map(c=><option key={c}>{c}</option>)}</select>);
                })()}
                <label style={s.lbl}>Precio ($) *</label>
                <input style={s.inp} type="number" placeholder="3.50" value={newProd.precio} onChange={e=>setNewProd({...newProd,precio:e.target.value})}/>
                <label style={s.lbl}>Unidad *</label>
                <input style={s.inp} placeholder="porción, kg..." value={newProd.unidad} onChange={e=>setNewProd({...newProd,unidad:e.target.value})}/>
                <label style={s.lbl}>Cantidad disponible *</label>
                <input style={s.inp} type="number" value={newProd.stock} onChange={e=>setNewProd({...newProd,stock:e.target.value})}/>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10,background:"#f1f5f9",padding:"10px 14px",borderRadius:10}}>
                  <input type="checkbox" id="perm" checked={newProd.permanente} onChange={e=>setNewProd({...newProd,permanente:e.target.checked})} style={{width:18,height:18}}/>
                  <label htmlFor="perm" style={{fontSize:13,cursor:"pointer"}}>🔁 Disponible hasta agotar stock</label>
                </div>
                {!newProd.permanente&&(<div style={{display:"flex",gap:10}}><div style={{flex:1}}><label style={s.lbl}>Desde</label><input style={s.inp} type="time" value={newProd.hi} onChange={e=>setNewProd({...newProd,hi:e.target.value})}/></div><div style={{flex:1}}><label style={s.lbl}>Hasta</label><input style={s.inp} type="time" value={newProd.hf} onChange={e=>setNewProd({...newProd,hf:e.target.value})}/></div></div>)}
                <label style={s.lbl}>Foto del producto</label>
                {fotoPreview&&<img src={fotoPreview} alt="" style={{width:"100%",height:110,objectFit:"cover",borderRadius:10,marginBottom:8}}/>}
                <input type="file" accept="image/*" style={{marginBottom:10,fontSize:13}} onChange={e=>{const f=e.target.files[0];if(f){setFotoFile(f);setFotoPreview(URL.createObjectURL(f));}}}/>
                <div style={{...s.ib,background:"#fef9c3"}}><div style={{fontSize:12,color:"#854d0e"}}>ℹ️ Primera publicación requiere aprobación del admin.</div></div>
                <div onClick={()=>setNewProd({...newProd,es_oferta:!newProd.es_oferta})} style={{display:"flex",alignItems:"center",gap:10,background:newProd.es_oferta?"#fff7ed":"#f8fafc",border:`1px solid ${newProd.es_oferta?"#fed7aa":"#e2e8f0"}`,borderRadius:12,padding:"10px 14px",marginBottom:10,cursor:"pointer"}}><span style={{fontSize:20}}>{newProd.es_oferta?"🏷️":"⬜"}</span><div><div style={{fontSize:13,fontWeight:700,color:newProd.es_oferta?"#c2410c":"#64748b"}}>Destacar como oferta en Inicio</div><div style={{fontSize:11,color:"#94a3b8",marginTop:1}}>Aparecerá en Promociones activas de la home</div></div></div><button style={s.btn} onClick={publishProd} disabled={loading}>{loading?"Subiendo...":"Publicar producto"}</button>
              </div>
            )}

            {provTab==="prod_aprobados"&&(
              <div style={s.pc}>
                <div style={s.pT}>✅ Productos en tienda</div>
                {myProds.filter(p=>p.aprobado&&!p.rechazado).length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>Aún no tienes productos aprobados</div>}
                {myProds.filter(p=>p.aprobado&&!p.rechazado).map(p=>(
                  <div key={p.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}>
                    <div style={{display:"flex",gap:8,marginBottom:8}}>
                      {p.foto_url?<img src={p.foto_url} alt="" style={{width:50,height:50,borderRadius:8,objectFit:"cover"}}/>:<span style={{fontSize:28,width:50,textAlign:"center"}}>🍽️</span>}
                      <div style={{flex:1}}>
                        <div style={{fontSize:13,fontWeight:700}}>{p.nombre}</div>
                        {(p.marca||p.presentacion)&&<div style={{fontSize:11,color:"#94a3b8"}}>{[p.marca,p.presentacion].filter(Boolean).join(" · ")}</div>}
                        <div style={{fontSize:12,color:"#64748b"}}>${p.precio} / {p.unidad}</div>
                        <div style={{display:"flex",alignItems:"center",gap:6,marginTop:3}}>
                          <span style={{fontSize:11,fontWeight:600,padding:"2px 8px",borderRadius:8,background:p.disponible&&p.stock>0?"#dcfce7":"#fee2e2",color:p.disponible&&p.stock>0?"#15803d":"#be123c"}}>
                            {p.disponible&&p.stock>0?"● En tienda":"● Fuera de tienda"}
                          </span>
                          <span style={{fontSize:11,color:"#64748b"}}>Stock: {p.stock}</span>
                        </div>
                      </div>
                    </div>
                    <div style={{display:"flex",gap:6,alignItems:"center",marginBottom:6}}>
                      <span style={{fontSize:12,color:"#64748b",flexShrink:0}}>Cantidad:</span>
                      <button onClick={async()=>{const ns=Math.max(0,p.stock-1);await supabase.from("productos_proveedor").update({stock:ns,disponible:ns>0}).eq("id",p.id);loadMyProds(provData.id);loadAll();}} style={{...s.qB,flexShrink:0}}>−</button>
                      <span style={{fontSize:14,fontWeight:700,minWidth:30,textAlign:"center"}}>{p.stock}</span>
                      <button onClick={async()=>{await supabase.from("productos_proveedor").update({stock:p.stock+1,disponible:true}).eq("id",p.id);loadMyProds(provData.id);loadAll();}} style={{...s.qB,flexShrink:0}}>+</button>
                      <input type="number" placeholder="Cantidad exacta" style={{...s.inp,marginBottom:0,flex:1,fontSize:12,padding:"6px 10px"}}
                        onBlur={async e=>{const v=parseInt(e.target.value);if(!isNaN(v)&&v>=0){await supabase.from("productos_proveedor").update({stock:v,disponible:v>0}).eq("id",p.id);loadMyProds(provData.id);loadAll();}e.target.value="";}}
                        onKeyDown={async e=>{if(e.key==="Enter"){const v=parseInt(e.target.value);if(!isNaN(v)&&v>=0){await supabase.from("productos_proveedor").update({stock:v,disponible:v>0}).eq("id",p.id);loadMyProds(provData.id);loadAll();}e.target.value="";}}}/>
                    </div>
                    {editingProdId===`mod_${p.id}`?(
                      <div style={{background:"#f8fafc",borderRadius:10,padding:12,border:"1px solid #e2e8f0",marginBottom:8}}>
                        <div style={{fontSize:12,fontWeight:700,color:P,marginBottom:8}}>✏️ Modificar producto</div>
                        <label style={s.lbl}>Nombre *</label>
                        <input style={s.inp} value={newProd.nombre} onChange={e=>setNewProd({...newProd,nombre:e.target.value})}/>
                        <label style={s.lbl}>Marca</label>
                        <input style={s.inp} value={newProd.marca} onChange={e=>setNewProd({...newProd,marca:e.target.value})}/>
                        <label style={s.lbl}>Presentación</label>
                        <input style={s.inp} value={newProd.presentacion} onChange={e=>setNewProd({...newProd,presentacion:e.target.value})}/>
                        <label style={s.lbl}>Descripción</label>
                        <input style={s.inp} value={newProd.descripcion} onChange={e=>setNewProd({...newProd,descripcion:e.target.value})}/>
                        <label style={s.lbl}>Precio ($) *</label>
                        <input style={s.inp} type="number" value={newProd.precio} onChange={e=>setNewProd({...newProd,precio:e.target.value})}/>
                        <label style={s.lbl}>Unidad</label>
                        <input style={s.inp} value={newProd.unidad} onChange={e=>setNewProd({...newProd,unidad:e.target.value})}/>
                        <div style={{...s.ib,background:"#fef9c3"}}><div style={{fontSize:12,color:"#854d0e"}}>ℹ️ Al guardar va a revisión del admin antes de publicarse.</div></div>
                        <button style={s.btn} disabled={loading} onClick={async()=>{
                          if(!newProd.nombre||!newProd.precio)return setPmsg("Completa nombre y precio");
                          setLoading(true);
                          await supabase.from("productos_proveedor").update({
                            nombre:newProd.nombre,marca:newProd.marca||null,
                            presentacion:newProd.presentacion||null,descripcion:newProd.descripcion||null,
                            precio:parseFloat(newProd.precio),unidad:newProd.unidad,
                            aprobado:false,rechazado:false,motivo_rechazo:null,
                          }).eq("id",p.id);
                          setLoading(false);setEditingProdId(null);
                          setPmsg("✅ Enviado a revisión del admin");
                          loadMyProds(provData.id);loadAll();
                        }}>{loading?"Guardando...":"📤 Guardar y enviar a revisión"}</button>
                        <button style={s.btnG} onClick={()=>setEditingProdId(null)}>Cancelar</button>
                      </div>
                    ):(
                    <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                      <button onClick={()=>{setEditingProdId(`mod_${p.id}`);setNewProd({nombre:p.nombre||"",marca:p.marca||"",presentacion:p.presentacion||"",descripcion:p.descripcion||"",precio:String(p.precio||""),unidad:p.unidad||"porción",categoria:p.categoria||"Comida preparada",stock:p.stock||1,hi:p.horario_inicio||"08:00",hf:p.horario_fin||"18:00",permanente:p.permanente||false});}} style={{flex:1,padding:"7px",borderRadius:10,border:"none",fontSize:12,fontWeight:600,cursor:"pointer",background:"#eff6ff",color:"#1d4ed8"}}>✏️ Modificar</button>
                      <button onClick={()=>toggleDisp(p.id,p.disponible)} style={{flex:1,padding:"7px",borderRadius:10,border:"none",fontSize:12,fontWeight:600,cursor:"pointer",background:p.disponible?"#fff7ed":"#f0fdf4",color:p.disponible?"#c2410c":"#15803d"}}>{p.disponible?"⏸️ Pausar":"▶️ Activar"}</button>
                      <button onClick={async()=>{if(window.confirm("¿Eliminar este producto?"))await supabase.from("productos_proveedor").delete().eq("id",p.id);loadMyProds(provData.id);loadAll();}} style={{flex:1,padding:"7px",borderRadius:10,border:"none",fontSize:12,fontWeight:600,cursor:"pointer",background:"#fee2e2",color:"#be123c"}}>🗑️ Eliminar</button>
                    </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {provTab==="prod_pendientes"&&(
              <div style={s.pc}>
                <div style={s.pT}>⏳ Esperando aprobación</div>
                {myProds.filter(p=>!p.aprobado&&!p.rechazado).length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No tienes productos pendientes</div>}
                {myProds.filter(p=>!p.aprobado&&!p.rechazado).map(p=>(
                  <div key={p.id} style={{display:"flex",gap:8,padding:"10px 0",borderBottom:"1px solid #f1f5f9"}}>
                    {p.foto_url?<img src={p.foto_url} alt="" style={{width:44,height:44,borderRadius:8,objectFit:"cover"}}/>:<span style={{fontSize:24,width:44,textAlign:"center"}}>🍽️</span>}
                    <div style={{flex:1}}>
                      <div style={{fontSize:13,fontWeight:600}}>{p.nombre}</div>
                      <div style={{fontSize:11,color:"#64748b"}}>${p.precio} · {p.categoria}</div>
                      <div style={{fontSize:11,color:"#f59e0b",marginTop:2}}>⏳ El admin está revisando este producto</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {provTab==="prod_rechazados"&&(
              <div style={s.pc}>
                <div style={s.pT}>✗ Productos rechazados</div>
                {myProds.filter(p=>p.rechazado).length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No tienes productos rechazados</div>}
                {myProds.filter(p=>p.rechazado).map(p=>(
                  <div key={p.id} style={{padding:"10px 0",borderBottom:"1px solid #f1f5f9"}}>
                    <div style={{display:"flex",gap:8,marginBottom:6}}>
                      {p.foto_url?<img src={p.foto_url} alt="" style={{width:44,height:44,borderRadius:8,objectFit:"cover"}}/>:<span style={{fontSize:24,width:44,textAlign:"center"}}>🍽️</span>}
                      <div style={{flex:1}}>
                        <div style={{fontSize:13,fontWeight:600}}>{p.nombre}</div>
                        <div style={{fontSize:11,color:"#64748b"}}>${p.precio} · {p.categoria}</div>
                      </div>
                    </div>
                    {p.motivo_rechazo&&<div style={{background:"#fff1f2",borderRadius:8,padding:"8px 10px",fontSize:12,color:"#be123c",marginBottom:8}}>💬 Motivo: {p.motivo_rechazo}</div>}
                    {editingProdId===p.id?(
                      <div style={{background:"#f8fafc",borderRadius:10,padding:12,border:"1px solid #e2e8f0"}}>
                        <div style={{fontSize:13,fontWeight:600,color:P,marginBottom:8}}>✏️ Corrige tu producto</div>
                        <label style={s.lbl}>Nombre *</label>
                        <input style={s.inp} placeholder="Ej: Torta de zanahoria" value={newProd.nombre} onChange={e=>setNewProd({...newProd,nombre:e.target.value})}/>
                        <label style={s.lbl}>Marca (opcional)</label>
                        <input style={s.inp} placeholder="Casero, artesanal..." value={newProd.marca} onChange={e=>setNewProd({...newProd,marca:e.target.value})}/>
                        <label style={s.lbl}>Presentación (opcional)</label>
                        <input style={s.inp} placeholder="500g, 1 porción..." value={newProd.presentacion} onChange={e=>setNewProd({...newProd,presentacion:e.target.value})}/>
                        <label style={s.lbl}>Descripción (opcional)</label>
                        <input style={s.inp} placeholder="Ingredientes, sabor..." value={newProd.descripcion} onChange={e=>setNewProd({...newProd,descripcion:e.target.value})}/>
                        <label style={s.lbl}>Categoría *</label>
                        {(()=>{
                          const editCats=provData.tipo_negocio==="Tienda / Negocio local"
                            ?(provData.categorias?.length>0?provData.categorias:NEGOCIO_CATS.map(c=>c.cat))
                            :provData.tipo_negocio==="Restaurante / Cocina / Comida"
                            ?(provData.categorias?.length>0?provData.categorias:NEGOCIO_CATS_RESTAURANTE)
                            :(provData.categorias?.length>0?provData.categorias:PROV_CATS);
                          return(<select style={{...s.inp,background:"#fff"}} value={newProd.categoria} onChange={e=>setNewProd({...newProd,categoria:e.target.value})}>{editCats.map(c=><option key={c}>{c}</option>)}</select>);
                        })()}
                        <label style={s.lbl}>Precio ($) *</label>
                        <input style={s.inp} type="number" placeholder="3.50" value={newProd.precio} onChange={e=>setNewProd({...newProd,precio:e.target.value})}/>
                        <label style={s.lbl}>Unidad *</label>
                        <input style={s.inp} placeholder="porción, kg, litro..." value={newProd.unidad} onChange={e=>setNewProd({...newProd,unidad:e.target.value})}/>
                        <label style={s.lbl}>Cantidad disponible *</label>
                        <input style={s.inp} type="number" value={newProd.stock} onChange={e=>setNewProd({...newProd,stock:e.target.value})}/>
                        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10,background:"#f1f5f9",padding:"10px 14px",borderRadius:10}}>
                          <input type="checkbox" id={`perm_edit_${p.id}`} checked={newProd.permanente} onChange={e=>setNewProd({...newProd,permanente:e.target.checked})} style={{width:18,height:18}}/>
                          <label htmlFor={`perm_edit_${p.id}`} style={{fontSize:13,cursor:"pointer"}}>🔁 Disponible hasta agotar stock</label>
                        </div>
                        {!newProd.permanente&&(<div style={{display:"flex",gap:10}}><div style={{flex:1}}><label style={s.lbl}>Disponible desde</label><input style={s.inp} type="time" value={newProd.hi} onChange={e=>setNewProd({...newProd,hi:e.target.value})}/></div><div style={{flex:1}}><label style={s.lbl}>Hasta</label><input style={s.inp} type="time" value={newProd.hf} onChange={e=>setNewProd({...newProd,hf:e.target.value})}/></div></div>)}
                        <label style={s.lbl}>📸 Foto del producto</label>
                        {(fotoPreview||p.foto_url)&&<img src={fotoPreview||p.foto_url} alt="" style={{width:"100%",height:120,objectFit:"cover",borderRadius:10,marginBottom:8}}/>}
                        <input type="file" accept="image/*" style={{marginBottom:10,fontSize:13}} onChange={e=>{const f=e.target.files[0];if(f){setFotoFile(f);setFotoPreview(URL.createObjectURL(f));}}}/>
                        <button style={s.btn} disabled={loading} onClick={async()=>{
                          setLoading(true);
                          let foto_url=p.foto_url;
                          if(fotoFile)foto_url=await upload(fotoFile,"productos",`${provData.id}_${Date.now()}`);
                          await supabase.from("productos_proveedor").update({
                            nombre:newProd.nombre,marca:newProd.marca||null,presentacion:newProd.presentacion||null,
                            descripcion:newProd.descripcion||null,categoria:newProd.categoria,
                            precio:parseFloat(newProd.precio),unidad:newProd.unidad,
                            stock:parseInt(newProd.stock)||1,permanente:newProd.permanente,
                            horario_inicio:newProd.hi,horario_fin:newProd.hf,
                            foto_url,rechazado:false,aprobado:false,motivo_rechazo:null,
                          }).eq("id",p.id);
                          setLoading(false);setEditingProdId(null);
                          setFotoFile(null);setFotoPreview(null);
                          setPmsg("✅ Producto reenviado para aprobación");
                          loadMyProds(provData.id);
                        }}>{loading?"Enviando...":"📤 Enviar corrección"}</button>
                        <button style={s.btnG} onClick={()=>{setEditingProdId(null);setFotoFile(null);setFotoPreview(null);}}>Cancelar</button>
                      </div>
                    ):(
                      <button onClick={()=>{
                        setEditingProdId(p.id);
                        setNewProd({
                          nombre:p.nombre||"",descripcion:p.descripcion||"",marca:p.marca||"",
                          presentacion:p.presentacion||"",precio:String(p.precio||""),
                          unidad:p.unidad||"porción",categoria:p.categoria||"Comida preparada",
                          stock:p.stock||1,hi:p.horario_inicio||"08:00",hf:p.horario_fin||"18:00",
                          permanente:p.permanente||false,
                        });
                        setFotoPreview(null);setFotoFile(null);
                        setProvTab("prod_rechazados");
                      }} style={{width:"100%",padding:"8px",borderRadius:10,border:"none",background:"#fef9c3",color:"#854d0e",fontSize:12,fontWeight:600,cursor:"pointer"}}>
                        ✏️ Corregir y reenviar para aprobación
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>)}

          {(provTab==="promos"||provTab==="promo_nueva"||provTab==="promo_activas"||provTab==="promo_pausadas"||provTab==="promo_pendientes"||provTab==="promo_rechazadas")&&(<>
            {/* SUB-TABS PROMOS */}
            <div style={{display:"flex",gap:6,marginBottom:12,overflowX:"auto"}}>
              {[
                {k:"promo_nueva",l:"➕ Nueva"},
                {k:"promo_activas",l:`✅ Activas (${myPromos.filter(pr=>pr.aprobada&&pr.activa).length})`},
                {k:"promo_pausadas",l:`⏸️ Pausadas (${myPromos.filter(pr=>pr.aprobada&&!pr.activa&&!pr.motivo_rechazo).length})`},
                {k:"promo_pendientes",l:`⏳ Pendientes (${myPromos.filter(pr=>!pr.aprobada&&pr.activa&&!pr.motivo_rechazo).length})`},
                {k:"promo_rechazadas",l:`✗ Rechazadas (${myPromos.filter(pr=>pr.motivo_rechazo).length})`},
              ].map(t=>(
                <button key={t.k} onClick={()=>setProvTab(t.k)} style={{flexShrink:0,padding:"7px 11px",borderRadius:10,border:"none",background:provTab===t.k?P:"#f1f5f9",color:provTab===t.k?"#fff":"#64748b",fontSize:11,fontWeight:600,cursor:"pointer"}}>{t.l}</button>
              ))}
            </div>

            {/* NUEVA PROMO */}
            {(provTab==="promo_nueva")&&(
            <div style={s.pc}>
              <div style={s.pT}>🎉 Nueva promoción</div>
              <label style={s.lbl}>Nombre *</label>
              <input style={s.inp} placeholder="Combo familiar" value={newPromo.nombre} onChange={e=>setNewPromo({...newPromo,nombre:e.target.value})}/>
              <label style={s.lbl}>Descripción * (qué incluye)</label>
              <input style={s.inp} placeholder="2 almuerzos + jugos + postre..." value={newPromo.descripcion} onChange={e=>setNewPromo({...newPromo,descripcion:e.target.value})}/>
              <label style={s.lbl}>Precio ($) *</label>
              <input style={s.inp} type="number" placeholder="12.00" value={newPromo.precio} onChange={e=>setNewPromo({...newPromo,precio:e.target.value})}/>
              <div style={{display:"flex",gap:10}}><div style={{flex:1}}><label style={s.lbl}>Desde *</label><input style={s.inp} type="date" value={newPromo.fecha_inicio} onChange={e=>setNewPromo({...newPromo,fecha_inicio:e.target.value})}/></div><div style={{flex:1}}><label style={s.lbl}>Hasta *</label><input style={s.inp} type="date" value={newPromo.fecha_fin} onChange={e=>setNewPromo({...newPromo,fecha_fin:e.target.value})}/></div></div>
              <label style={s.lbl}>📸 Foto de la promoción *</label>
              <div style={{...s.ib,background:"#fef9c3",marginBottom:8}}><div style={{fontSize:12,color:"#854d0e"}}>⚠️ La foto es obligatoria. Las promociones sin foto serán rechazadas.</div></div>
              {promoFotoPreview&&<img src={promoFotoPreview} alt="" style={{width:"100%",height:140,objectFit:"cover",borderRadius:10,marginBottom:8}}/>}
              <input type="file" accept="image/*" style={{marginBottom:10,fontSize:13}} onChange={e=>{const f=e.target.files[0];if(f){setPromoFotoFile(f);setPromoFotoPreview(URL.createObjectURL(f));}}}/>
              <button style={s.btnPurple} onClick={()=>{if(!promoFotoFile)return setPmsg("⚠️ Debes agregar una foto a la promoción antes de enviar");publishPromo();}} disabled={loading}>{loading?"Enviando...":"Enviar para aprobación"}</button>
            </div>
            )}

            {/* ACTIVAS */}
            {provTab==="promo_activas"&&(
              <div style={s.pc}>
                <div style={s.pT}>✅ Promociones activas</div>
                {myPromos.filter(pr=>pr.aprobada&&pr.activa).length===0&&myPromos.filter(pr=>pr.aprobada&&!pr.activa&&!pr.motivo_rechazo).length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No tienes promociones activas</div>}
                {/* Pausadas */}
                {myPromos.filter(pr=>pr.aprobada&&!pr.activa&&!pr.motivo_rechazo).map(pr=>(
                  <div key={`paused_${pr.id}`} style={{background:"#fff7ed",borderRadius:10,padding:"10px 12px",marginBottom:8,border:"1px solid #fed7aa"}}>
                    {pr.foto_url&&<img src={pr.foto_url} alt="" style={{width:"100%",height:80,objectFit:"cover",borderRadius:8,marginBottom:6}}/>}
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
                      <div><div style={{fontSize:13,fontWeight:700}}>{pr.nombre}</div><div style={{fontSize:11,color:"#64748b"}}>${pr.precio}</div></div>
                      <span style={{fontSize:11,fontWeight:600,padding:"2px 8px",borderRadius:8,background:"#fed7aa",color:"#c2410c",flexShrink:0,marginLeft:8}}>⏸️ Pausada</span>
                    </div>
                    <div style={{display:"flex",gap:6}}>
                      <button onClick={async()=>{await supabase.from("promociones_proveedor").update({activa:true}).eq("id",pr.id);loadMyPromos(provData.id);loadAll();}} style={{flex:1,padding:"7px",borderRadius:10,border:"none",fontSize:12,fontWeight:600,cursor:"pointer",background:"#f0fdf4",color:"#15803d"}}>▶️ Reactivar</button>
                      <button onClick={async()=>{if(!window.confirm("¿Eliminar esta promoción?"))return;await supabase.from("promociones_proveedor").delete().eq("id",pr.id);loadMyPromos(provData.id);loadAll();}} style={{flex:1,padding:"7px",borderRadius:10,border:"none",fontSize:12,fontWeight:600,cursor:"pointer",background:"#fee2e2",color:"#be123c"}}>🗑️ Eliminar</button>
                    </div>
                  </div>
                ))}
                {/* Activas */}
                {myPromos.filter(pr=>pr.aprobada&&pr.activa).map(pr=>(
                  <div key={pr.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}>
                    {pr.foto_url&&<img src={pr.foto_url} alt="" style={{width:"100%",height:110,objectFit:"cover",borderRadius:10,marginBottom:8}}/>}
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:6}}>
                      <div>
                        <div style={{fontSize:13,fontWeight:700}}>{pr.nombre}</div>
                        <div style={{fontSize:11,color:"#64748b"}}>${pr.precio} · {pr.fecha_inicio} → {pr.fecha_fin}</div>
                        <div style={{fontSize:11,color:"#94a3b8"}}>{pr.descripcion}</div>
                      </div>
                      <span style={{fontSize:11,fontWeight:600,padding:"2px 8px",borderRadius:8,background:"#dcfce7",color:"#15803d",flexShrink:0,marginLeft:8}}>✓ Activa</span>
                    </div>
                    {/* Modificar inline */}
                    {editandoHorario===`edit_promo_${pr.id}`?(
                      <div style={{background:"#f8fafc",borderRadius:10,padding:12,border:"1px solid #e2e8f0",marginBottom:8}}>
                        <div style={{fontSize:12,fontWeight:700,color:P,marginBottom:8}}>✏️ Modificar promoción</div>
                        <label style={s.lbl}>Nombre *</label>
                        <input style={s.inp} value={newPromo.nombre} onChange={e=>setNewPromo({...newPromo,nombre:e.target.value})}/>
                        <label style={s.lbl}>Descripción</label>
                        <input style={s.inp} value={newPromo.descripcion} onChange={e=>setNewPromo({...newPromo,descripcion:e.target.value})}/>
                        <label style={s.lbl}>Precio ($) *</label>
                        <input style={s.inp} type="number" value={newPromo.precio} onChange={e=>setNewPromo({...newPromo,precio:e.target.value})}/>
                        <div style={{display:"flex",gap:10}}><div style={{flex:1}}><label style={s.lbl}>Desde</label><input style={s.inp} type="date" value={newPromo.fecha_inicio} onChange={e=>setNewPromo({...newPromo,fecha_inicio:e.target.value})}/></div><div style={{flex:1}}><label style={s.lbl}>Hasta</label><input style={s.inp} type="date" value={newPromo.fecha_fin} onChange={e=>setNewPromo({...newPromo,fecha_fin:e.target.value})}/></div></div>
                        <div style={{...s.ib,background:"#fef9c3"}}><div style={{fontSize:12,color:"#854d0e"}}>ℹ️ Al guardar va a revisión del admin antes de publicarse.</div></div>
                        <button style={s.btn} disabled={loading} onClick={async()=>{
                          if(!newPromo.nombre||!newPromo.precio)return setPmsg("Completa nombre y precio");
                          setLoading(true);
                          await supabase.from("promociones_proveedor").update({
                            nombre:newPromo.nombre,descripcion:newPromo.descripcion||null,
                            precio:parseFloat(newPromo.precio),fecha_inicio:newPromo.fecha_inicio,
                            fecha_fin:newPromo.fecha_fin,aprobada:false,motivo_rechazo:null,
                          }).eq("id",pr.id);
                          setLoading(false);setEditandoHorario(false);
                          setPmsg("✅ Enviado a revisión del admin");
                          loadMyPromos(provData.id);
                        }}>{loading?"Guardando...":"📤 Guardar y enviar a revisión"}</button>
                        <button style={s.btnG} onClick={()=>setEditandoHorario(false)}>Cancelar</button>
                      </div>
                    ):(
                      <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:6}}>
                        <button onClick={()=>{setEditandoHorario(`edit_promo_${pr.id}`);setNewPromo({nombre:pr.nombre||"",descripcion:pr.descripcion||"",precio:String(pr.precio||""),fecha_inicio:pr.fecha_inicio||"",fecha_fin:pr.fecha_fin||""});}} style={{flex:1,padding:"7px",borderRadius:10,border:"none",fontSize:12,fontWeight:600,cursor:"pointer",background:"#eff6ff",color:"#1d4ed8"}}>✏️ Modificar</button>
                        <button onClick={async()=>{await supabase.from("promociones_proveedor").update({activa:false}).eq("id",pr.id);loadMyPromos(provData.id);loadAll();}} style={{flex:1,padding:"7px",borderRadius:10,border:"none",fontSize:12,fontWeight:600,cursor:"pointer",background:"#fff7ed",color:"#c2410c"}}>⏸️ Pausar</button>
                        <button onClick={async()=>{if(!window.confirm("¿Eliminar esta promoción?"))return;await supabase.from("promociones_proveedor").delete().eq("id",pr.id);loadMyPromos(provData.id);loadAll();}} style={{flex:1,padding:"7px",borderRadius:10,border:"none",fontSize:12,fontWeight:600,cursor:"pointer",background:"#fee2e2",color:"#be123c"}}>🗑️ Eliminar</button>
                      </div>
                    )}
                    <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:10,padding:"8px 10px",marginTop:2}}>
                      <div style={{fontSize:10,color:"#15803d",marginBottom:5,fontWeight:600}}>
                        👥 Enviar promo a clientes suscritos
                      </div>
                      <div style={{fontSize:10,color:"#64748b",marginBottom:6,lineHeight:1.4}}>
                        Solo se notifica a clientes que aceptaron recibir tus promos.
                      </div>
                      <button onClick={()=>notifyClientes(pr)} style={{background:"#25d366",color:"#fff",border:"none",borderRadius:8,padding:"7px 14px",fontSize:12,fontWeight:700,cursor:"pointer",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
                        📲 Notificar mis suscriptores
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* PAUSADAS */}
            {provTab==="promo_pausadas"&&(
              <div style={s.pc}>
                <div style={s.pT}>⏸️ Promociones pausadas</div>
                {myPromos.filter(pr=>pr.aprobada&&!pr.activa&&!pr.motivo_rechazo).length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No tienes promociones pausadas</div>}
                {myPromos.filter(pr=>pr.aprobada&&!pr.activa&&!pr.motivo_rechazo).map(pr=>(
                  <div key={pr.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}>
                    {pr.foto_url&&<img src={pr.foto_url} alt="" style={{width:"100%",height:90,objectFit:"cover",borderRadius:10,marginBottom:8,opacity:0.6}}/>}
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                      <div>
                        <div style={{fontSize:13,fontWeight:700,color:"#64748b"}}>{pr.nombre}</div>
                        <div style={{fontSize:11,color:"#94a3b8"}}>${pr.precio} · {pr.descripcion}</div>
                      </div>
                      <span style={{fontSize:11,fontWeight:600,padding:"2px 8px",borderRadius:8,background:"#f1f5f9",color:"#64748b",flexShrink:0,marginLeft:8}}>⏸️ Pausada</span>
                    </div>
                    <button onClick={async()=>{await supabase.from("promociones_proveedor").update({activa:true}).eq("id",pr.id);loadMyPromos(provData.id);loadAll();}} style={{...s.btnGreen,width:"100%",borderRadius:10,padding:"8px",fontSize:12,marginTop:0}}>▶️ Activar promoción</button>
                    <button onClick={async()=>{if(!window.confirm("¿Eliminar esta promoción?"))return;await supabase.from("promociones_proveedor").delete().eq("id",pr.id);loadMyPromos(provData.id);loadAll();}} style={{...s.btnRed,width:"100%",borderRadius:10,padding:"8px",fontSize:12,marginTop:6}}>🗑️ Eliminar</button>
                  </div>
                ))}
              </div>
            )}

            {/* PENDIENTES */}
            {provTab==="promo_pendientes"&&(
              <div style={s.pc}>
                <div style={s.pT}>⏳ Esperando aprobación</div>
                {myPromos.filter(pr=>!pr.aprobada&&pr.activa&&!pr.motivo_rechazo).length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No tienes promociones pendientes</div>}
                {myPromos.filter(pr=>!pr.aprobada&&pr.activa&&!pr.motivo_rechazo).map(pr=>(
                  <div key={pr.id} style={{background:"#fef9c3",borderRadius:10,padding:"10px 12px",marginBottom:8,border:"1px solid #fde68a"}}>
                    {pr.foto_url&&<img src={pr.foto_url} alt="" style={{width:"100%",height:90,objectFit:"cover",borderRadius:8,marginBottom:6}}/>}
                    <div style={{fontSize:13,fontWeight:700}}>{pr.nombre}</div>
                    <div style={{fontSize:11,color:"#64748b"}}>${pr.precio} · {pr.descripcion}</div>
                    <div style={{fontSize:11,color:"#92400e",marginTop:4}}>⏳ El admin está revisando tu promoción</div>
                  </div>
                ))}
              </div>
            )}

            {/* RECHAZADAS — con formulario de corrección igual que productos */}
            {provTab==="promo_rechazadas"&&(
              <div style={s.pc}>
                <div style={s.pT}>✗ Promociones rechazadas</div>
                {myPromos.filter(pr=>pr.motivo_rechazo).length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No tienes promociones rechazadas</div>}
                {myPromos.filter(pr=>pr.motivo_rechazo).map(pr=>(
                  <div key={pr.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}>
                    <div style={{display:"flex",gap:8,marginBottom:8}}>
                      {pr.foto_url?<img src={pr.foto_url} alt="" style={{width:50,height:50,borderRadius:8,objectFit:"cover"}}/>:<span style={{fontSize:28,width:50,textAlign:"center"}}>🎁</span>}
                      <div style={{flex:1}}>
                        <div style={{fontSize:13,fontWeight:600,color:"#be123c"}}>{pr.nombre}</div>
                        <div style={{fontSize:11,color:"#64748b"}}>${pr.precio} · {pr.descripcion}</div>
                      </div>
                    </div>
                    <div style={{background:"#fff1f2",borderRadius:8,padding:"8px 10px",fontSize:12,color:"#be123c",marginBottom:10}}>💬 Motivo: {pr.motivo_rechazo}</div>
                    {editandoHorario&&editandoHorario===pr.id?(
                      <div style={{background:"#f8fafc",borderRadius:10,padding:12,border:"1px solid #e2e8f0"}}>
                        <div style={{fontSize:13,fontWeight:600,color:P,marginBottom:8}}>✏️ Corrige tu promoción</div>
                        <label style={s.lbl}>Nombre *</label>
                        <input style={s.inp} value={newPromo.nombre} onChange={e=>setNewPromo({...newPromo,nombre:e.target.value})}/>
                        <label style={s.lbl}>Descripción *</label>
                        <input style={s.inp} value={newPromo.descripcion} onChange={e=>setNewPromo({...newPromo,descripcion:e.target.value})}/>
                        <label style={s.lbl}>Precio ($) *</label>
                        <input style={s.inp} type="number" value={newPromo.precio} onChange={e=>setNewPromo({...newPromo,precio:e.target.value})}/>
                        <div style={{display:"flex",gap:10}}><div style={{flex:1}}><label style={s.lbl}>Desde *</label><input style={s.inp} type="date" value={newPromo.fecha_inicio} onChange={e=>setNewPromo({...newPromo,fecha_inicio:e.target.value})}/></div><div style={{flex:1}}><label style={s.lbl}>Hasta *</label><input style={s.inp} type="date" value={newPromo.fecha_fin} onChange={e=>setNewPromo({...newPromo,fecha_fin:e.target.value})}/></div></div>
                        <label style={s.lbl}>📸 Foto (obligatoria)</label>
                        {(promoFotoPreview||pr.foto_url)&&<img src={promoFotoPreview||pr.foto_url} alt="" style={{width:"100%",height:120,objectFit:"cover",borderRadius:10,marginBottom:8}}/>}
                        <input type="file" accept="image/*" style={{marginBottom:10,fontSize:13}} onChange={e=>{const f=e.target.files[0];if(f){setPromoFotoFile(f);setPromoFotoPreview(URL.createObjectURL(f));}}}/>
                        <button style={s.btn} disabled={loading} onClick={async()=>{
                          if(!newPromo.nombre||!newPromo.precio)return setPmsg("Completa nombre y precio");
                          setLoading(true);
                          let foto_url=pr.foto_url;
                          if(promoFotoFile)foto_url=await upload(promoFotoFile,"productos",`promo_${provData.id}_${Date.now()}`);
                          await supabase.from("promociones_proveedor").update({
                            nombre:newPromo.nombre,
                            descripcion:newPromo.descripcion||null,
                            precio:parseFloat(newPromo.precio),
                            fecha_inicio:newPromo.fecha_inicio,
                            fecha_fin:newPromo.fecha_fin,
                            foto_url,
                            aprobada:false,
                            activa:true,
                            motivo_rechazo:null,
                          }).eq("id",pr.id);
                          setLoading(false);
                          setEditandoHorario(false);
                          setPromoFotoFile(null);setPromoFotoPreview(null);
                          setPmsg("✅ Promoción reenviada para aprobación");
                          loadMyPromos(provData.id);
                        }}>{loading?"Enviando...":"📤 Enviar corrección"}</button>
                        <button style={s.btnG} onClick={()=>{setEditandoHorario(false);setPromoFotoFile(null);setPromoFotoPreview(null);}}>Cancelar</button>
                      </div>
                    ):(
                      <button onClick={()=>{
                        setEditandoHorario(pr.id);
                        setNewPromo({nombre:pr.nombre||"",descripcion:pr.descripcion||"",precio:String(pr.precio||""),fecha_inicio:pr.fecha_inicio||"",fecha_fin:pr.fecha_fin||""});
                        setPromoFotoPreview(null);setPromoFotoFile(null);
                      }} style={{width:"100%",padding:"8px",borderRadius:10,border:"none",background:"#fef9c3",color:"#854d0e",fontSize:12,fontWeight:600,cursor:"pointer"}}>
                        ✏️ Corregir y reenviar para aprobación
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>)}

          {provTab==="pedidos_rest"&&(()=>{
            // Estados y colores
            const ESTADOS={
              "nuevo":           {label:"🆕 Nuevo",              bg:"#fef9c3",color:"#854d0e"},
              "recibido":        {label:"📥 Recibido",           bg:"#dbeafe",color:"#1e40af"},
              "esperando_pago":  {label:"💳 Esperando pago",     bg:"#fdf4ff",color:"#7e22ce"},
              "preparando":      {label:"👨‍🍳 Preparando",         bg:"#fff7ed",color:"#c2410c"},
              "enviado":         {label:"🚀 Enviado",            bg:"#fef3c7",color:"#92400e"},
              "entregado":       {label:"✅ Entregado",          bg:"#dcfce7",color:"#15803d"},
              "cancelado":       {label:"❌ Cancelado",          bg:"#fee2e2",color:"#991b1b"},
            };
            // Construir bloque de métodos de pago del proveedor
            const bloqPago=(()=>{
              const pm=provData.pago_movil_banco?`\n\n📱 *Pago Móvil:*\nBanco: ${provData.pago_movil_banco}\nTeléfono: ${provData.pago_movil_telefono||""}\nCédula: ${provData.pago_movil_cedula||""}\nNombre: ${provData.pago_movil_nombre||""}`:"";
              const zelle=provData.acepta_zelle&&provData.zelle_cuenta?`\n\n💵 *Zelle:* ${provData.zelle_cuenta}`:"";
              const binance=provData.acepta_binance&&provData.binance_cuenta?`\n\n🟡 *Binance Pay:* ${provData.binance_cuenta}`:"";
              const efectivo=provData.acepta_efectivo?"\n\n💵 *Efectivo USD:* Aceptamos efectivo":"";
              const divisas=provData.acepta_divisas?"\n\n💱 *Otras divisas:* Aceptamos":"";
              return pm||zelle||binance||efectivo||divisas
                ?`💳 *Métodos de pago disponibles:*${pm}${zelle}${binance}${efectivo}${divisas}`
                :"_(El proveedor aún no ha configurado sus métodos de pago)_";
            })();
            const MSGS_ESTADO={
              // RECIBIDO: resumen completo + datos de pago + solicitud de comprobante
              "recibido": (ped)=>{
                const items=(ped.items||[]).map(i=>`  • ${i.nombre} x${i.qty||1} — $${((i.precio||0)*(i.qty||1)).toFixed(2)}`).join("\n");
                return `Hola ${ped.cliente_nombre} 👋\n\n✅ *Recibimos tu pedido ${ped.ref}*\n\n🛒 *Resumen:*\n${items}\n🚚 Delivery: $${(ped.delivery||0).toFixed(2)}\n💵 *Total: $${(ped.total||0).toFixed(2)}*\n\n${bloqPago}\n\n📸 Por favor realiza el pago y envíanos el comprobante para procesar tu pedido.\n\n¡Gracias por tu preferencia! 🙏`;
              },
              // ESPERANDO PAGO: recordatorio simple, sin repetir datos
              "esperando_pago": (ped)=>`Hola ${ped.cliente_nombre} 👋\n\n⏳ Aún estamos esperando tu comprobante de pago del pedido *${ped.ref}*.\n\n💵 *Total pendiente: $${(ped.total||0).toFixed(2)}*\n\nCuando realices el pago, envíanos la captura y comenzamos a preparar tu pedido enseguida. ¡Gracias! 🙏`,
              // PREPARANDO: confirma pago recibido
              "preparando": (ped)=>`Hola ${ped.cliente_nombre} 👋\n\n✅ *¡Pago confirmado!*\n\nTu pedido *${ped.ref}* está siendo preparado con cariño. 👨‍🍳\n\nTe avisaremos cuando esté listo para enviarse. ¡Ya casi llega! 😊`,
              // ENVIADO: en camino con dirección
              "enviado": (ped)=>`Hola ${ped.cliente_nombre} 👋\n\n🚀 *Tu pedido ${ped.ref} ya va en camino.*\n\n📍 Dirección: ${ped.cliente_direccion||"(dirección registrada)"}\n\nMantente atento(a), ¡pronto llega! 🛵`,
              // ENTREGADO: cierre amigable
              "entregado": (ped)=>`Hola ${ped.cliente_nombre} 👋\n\n🎉 *Tu pedido ${ped.ref} fue entregado.*\n\n¡Gracias por elegirnos! Si tienes algún comentario o inconveniente, no dudes en escribirnos. Esperamos verte pronto. 😊`,
              // CANCELADO
              "cancelado": (ped)=>`Hola ${ped.cliente_nombre} 👋\n\n😔 Lamentamos informarte que tu pedido *${ped.ref}* fue cancelado.\n\nPor favor contáctanos si tienes alguna pregunta. Disculpa los inconvenientes.`,
            };
            const actualizarEstado=async(pedId,nuevoEstado,ped)=>{
              const{error}=await supabase.from("pedidos").update({
                estado:nuevoEstado,
                completado:["entregado"].includes(nuevoEstado),
                updated_at:new Date().toISOString()
              }).eq("id",pedId);
              if(error){
                alert("Error al actualizar: "+error.message);
                return;
              }
              await loadMisRestPedidos(provData.id,provData.negocio);
              // Abrir WhatsApp automáticamente con mensaje del estado
              const msgFn=MSGS_ESTADO[nuevoEstado];
              if(msgFn&&ped?.cliente_telefono){
                const _t=ped.cliente_telefono.replace(/\D/g,"");
                const num=_t.startsWith("0")?"58"+_t.slice(1):_t.startsWith("58")?_t:"58"+_t;
                const msg=msgFn(ped);
                setTimeout(()=>window.open("https://wa.me/"+num+"?text="+encodeURIComponent(msg),"_blank"),300);
              }
            };
            // Filtros
            // Usar fecha local Venezuela (UTC-4) para evitar desfase
            const fechaLocal=(d)=>new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10);
            const hoy=fechaLocal(new Date());
            const ayer=fechaLocal(new Date(Date.now()-86400000));
            const semana=fechaLocal(new Date(Date.now()-7*86400000));
            // Fecha del pedido también en local
            const fechaPed=(created_at)=>created_at?fechaLocal(new Date(created_at)):"";
            // filtroPed y filtroEstado están en el estado del componente principal
            const pedFiltrados=misRestPedidos.filter(p=>{
              const fecha=fechaPed(p.created_at);
              const pasaFecha=filtroPed==="hoy"?fecha===hoy:filtroPed==="ayer"?fecha===ayer:filtroPed==="semana"?fecha>=semana:true;
              const pasaEstado=filtroEstado==="todos"||p.estado===filtroEstado;
              return pasaFecha&&pasaEstado;
            });
            // Stats
            const fechaLocal2=(d)=>new Date(new Date(d).getTime()-new Date(d).getTimezoneOffset()*60000).toISOString().slice(0,10);
            const totalHoy=misRestPedidos.filter(p=>fechaLocal2(p.created_at)===hoy);
            const ingreso=misRestPedidos.filter(p=>p.estado==="entregado").reduce((a,p)=>a+(p.total||0),0);
            const pendientes=misRestPedidos.filter(p=>!["entregado","cancelado"].includes(p.estado||"nuevo"));
            return(
              <div style={s.pc}>
                <div style={s.pT}>📋 Mis pedidos</div>
                {/* STATS */}
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:14}}>
                  <div style={s.statCard}><div style={{...s.statNum,fontSize:20,color:"#6366f1"}}>{totalHoy.length}</div><div style={s.statLbl}>Hoy</div></div>
                  <div style={s.statCard}><div style={{...s.statNum,fontSize:20,color:"#f59e0b"}}>{pendientes.length}</div><div style={s.statLbl}>Pendientes</div></div>
                  <div style={s.statCard}><div style={{...s.statNum,fontSize:18,color:"#22c55e"}}>${ingreso.toFixed(0)}</div><div style={s.statLbl}>Entregados</div></div>
                </div>
                {/* FILTRO FECHA */}
                <div style={{display:"flex",gap:6,marginBottom:8,overflowX:"auto",paddingBottom:4}}>
                  {[["hoy","Hoy"],["ayer","Ayer"],["semana","7 días"],["todos","Todos"]].map(([v,l])=>(
                    <button key={v} onClick={()=>setFiltroPed(v)} style={{flexShrink:0,padding:"5px 12px",borderRadius:20,border:"none",fontSize:11,fontWeight:700,cursor:"pointer",background:filtroPed===v?P:"#f1f5f9",color:filtroPed===v?"#fff":"#64748b"}}>
                      {l}
                    </button>
                  ))}
                </div>
                {/* FILTRO ESTADO */}
                <div style={{display:"flex",gap:6,marginBottom:12,overflowX:"auto",paddingBottom:4}}>
                  {[["todos","Todos"],["nuevo","Nuevos"],["recibido","Recibidos"],["esperando_pago","Esp. pago"],["preparando","Preparando"],["enviado","Enviados"],["entregado","Entregados"],["cancelado","Cancelados"]].map(([v,l])=>(
                    <button key={v} onClick={()=>setFiltroEstado(v)} style={{flexShrink:0,padding:"4px 10px",borderRadius:20,border:"none",fontSize:10,fontWeight:700,cursor:"pointer",background:filtroEstado===v?"#0f172a":"#f1f5f9",color:filtroEstado===v?"#fff":"#64748b"}}>
                      {l} {v!=="todos"&&misRestPedidos.filter(p=>p.estado===v).length>0?`(${misRestPedidos.filter(p=>p.estado===v).length})`:""}
                    </button>
                  ))}
                </div>
                {/* LISTA */}
                {pedFiltrados.length===0&&(
                  <div style={{textAlign:"center",padding:"30px 0",color:"#94a3b8",fontSize:13}}>
                    {misRestPedidos.length===0?"¡Cuando un cliente haga un pedido aparecerá aquí!":"No hay pedidos con este filtro."}
                  </div>
                )}
                {pedFiltrados.map(ped=>{
                  const est=ESTADOS[ped.estado]||ESTADOS["nuevo"];
                  const siguientes={
                    "nuevo":          ["recibido","cancelado"],
                    "recibido":       ["esperando_pago","cancelado"],
                    "esperando_pago": ["preparando","cancelado"],
                    "preparando":     ["enviado","cancelado"],
                    "enviado":        ["entregado","cancelado"],
                    "entregado":      [],
                    "cancelado":      [],
                  }[ped.estado||"nuevo"]||[];
                  return(
                    <div key={ped.id} style={{background:"#fff",border:"1.5px solid #e2e8f0",borderRadius:14,padding:"14px",marginBottom:10,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
                      {/* Header pedido */}
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                        <div>
                          <div style={{fontSize:13,fontWeight:800,color:"#0f172a"}}>📋 {ped.ref||"Sin ref"}</div>
                          <div style={{fontSize:10,color:"#94a3b8",marginTop:2}}>{ped.created_at?.slice(0,16).replace("T"," hs ")}</div>
                        </div>
                        <span style={{fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:20,background:est.bg,color:est.color,whiteSpace:"nowrap"}}>
                          {est.label}
                        </span>
                      </div>
                      {/* Items */}
                      <div style={{background:"#f8fafc",borderRadius:10,padding:"8px 10px",marginBottom:8,fontSize:12}}>
                        {(ped.items||[]).map((it,i)=>(
                          <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"2px 0",borderBottom:i<(ped.items.length-1)?"1px solid #f1f5f9":"none"}}>
                            <span style={{color:"#0f172a"}}>{it.isPromo?"🔥 ":""}{it.nombre} <strong>x{it.qty}</strong>{it.nota&&<span style={{color:"#7e22ce"}}> 📝{it.nota}</span>}</span>
                            <span style={{fontWeight:700,color:P}}>${((it.precio||0)*(it.qty||1)).toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      {/* Cliente y totales */}
                      <div style={{fontSize:12,color:"#64748b",marginBottom:6}}>
                        👤 <strong>{ped.cliente_nombre}</strong> · 📱 {ped.cliente_telefono}
                        {ped.cliente_direccion&&<div style={{fontSize:11,marginTop:2}}>📍 {ped.cliente_direccion}</div>}
                      </div>
                      <div style={{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:10,paddingTop:6,borderTop:"1px solid #f1f5f9"}}>
                        <span style={{color:"#64748b"}}>Delivery: ${(ped.delivery||0).toFixed(2)}</span>
                        <span style={{fontWeight:800,color:"#0f172a"}}>Total: <span style={{color:"#22c55e"}}>${(ped.total||0).toFixed(2)}</span></span>
                      </div>
                      {/* Botones de estado */}
                      {siguientes.length>0&&(
                        <div style={{display:"flex",gap:6,marginBottom:6}}>
                          {siguientes.map(sig=>{
                            const e=ESTADOS[sig];
                            const isCancel=sig==="cancelado";
                            return(
                              <button key={sig} onClick={()=>actualizarEstado(ped.id,sig,ped)}
                                style={{flex:1,padding:"9px",borderRadius:10,border:"none",fontSize:11,fontWeight:800,cursor:"pointer",background:isCancel?"#fee2e2":e.bg,color:isCancel?"#991b1b":e.color}}>
                                {e.label}
                              </button>
                            );
                          })}
                        </div>
                      )}
                      {/* Botón WhatsApp cliente */}
                      <button onClick={()=>{
                        const _t=(ped.cliente_telefono||"").replace(/\D/g,"");
                        const num=_t.startsWith("0")?"58"+_t.slice(1):_t.startsWith("58")?_t:"58"+_t;
                        const estadoMsg={
                          "recibido":"✅ Recibimos tu pedido *"+ped.ref+"* y lo estamos preparando.",
                          "en_camino":"🚀 Tu pedido *"+ped.ref+"* ya va en camino. ¡Pronto llega!",
                          "entregado":"🎉 Tu pedido *"+ped.ref+"* fue entregado. ¡Gracias por preferirnos!",
                          "cancelado":"😔 Lamentamos informarte que tu pedido *"+ped.ref+"* fue cancelado. Contáctanos para más info.",
                        }[ped.estado]||"Hola "+ped.cliente_nombre+" 👋, te escribimos sobre tu pedido *"+ped.ref+"*.";
                        window.open("https://wa.me/"+num+"?text="+encodeURIComponent("Hola "+ped.cliente_nombre+" 👋\n\n"+estadoMsg),"_blank");
                      }} style={{width:"100%",background:"#25D366",color:"#fff",border:"none",borderRadius:10,padding:"9px",fontSize:12,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
                        📲 Notificar al cliente por WhatsApp
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })()}

          {/* ═══ TAB CLIENTES ═══ */}
          {provTab==="clientes"&&(
            <div style={s.pc}>
              <div style={s.pT}>👥 Mis clientes</div>
              {/* ETA */}
              <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:12,padding:"12px 14px",marginBottom:14}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div>
                    <div style={{fontSize:12,fontWeight:800,color:"#15803d"}}>⏱️ Tiempo estimado de entrega</div>
                    <div style={{fontSize:11,color:"#64748b",marginTop:2}}>
                      {provData.eta_texto||((provData.eta_minutos_min&&provData.eta_minutos_max)?`${provData.eta_minutos_min}–${provData.eta_minutos_max} min`:"No configurado")}
                    </div>
                  </div>
                  <button onClick={()=>{setEtaData({eta_minutos_min:provData.eta_minutos_min||"",eta_minutos_max:provData.eta_minutos_max||"",eta_texto:provData.eta_texto||""});setEditandoEta(!editandoEta);}} style={{fontSize:11,background:"#dcfce7",color:"#15803d",border:"none",borderRadius:8,padding:"5px 12px",fontWeight:700,cursor:"pointer"}}>
                    {editandoEta?"Cancelar":"✏️ Editar"}
                  </button>
                </div>
                {editandoEta&&(
                  <div style={{marginTop:10}}>
                    <div style={{display:"flex",gap:8,marginBottom:8}}>
                      <div style={{flex:1}}>
                        <label style={s.lbl}>Mín (min)</label>
                        <input style={s.inp} type="number" placeholder="20" value={etaData.eta_minutos_min} onChange={e=>setEtaData({...etaData,eta_minutos_min:e.target.value})}/>
                      </div>
                      <div style={{flex:1}}>
                        <label style={s.lbl}>Máx (min)</label>
                        <input style={s.inp} type="number" placeholder="40" value={etaData.eta_minutos_max} onChange={e=>setEtaData({...etaData,eta_minutos_max:e.target.value})}/>
                      </div>
                    </div>
                    <label style={s.lbl}>O texto libre (ej: "A confirmar")</label>
                    <input style={{...s.inp,marginBottom:8}} placeholder="25–35 min / A confirmar" value={etaData.eta_texto} onChange={e=>setEtaData({...etaData,eta_texto:e.target.value})}/>
                    <button onClick={async()=>{await supabase.from("proveedores").update({eta_minutos_min:etaData.eta_minutos_min||null,eta_minutos_max:etaData.eta_minutos_max||null,eta_texto:etaData.eta_texto||null}).eq("id",provData.id);setProvData({...provData,...etaData});setEditandoEta(false);setPmsg("✅ ETA actualizado");}} style={{...s.btnGreen,width:"100%",borderRadius:10,padding:"9px",fontSize:12}}>
                      💾 Guardar ETA
                    </button>
                  </div>
                )}
              </div>
              {/* Lista clientes */}
              {misClientes.length===0
                ?<div style={{textAlign:"center",padding:"20px 0",color:"#94a3b8",fontSize:13}}>Aún no tienes clientes registrados. Aparecerán cuando recibas pedidos.</div>
                :<div>
                  <div style={{fontSize:11,color:"#64748b",marginBottom:10}}>{misClientes.length} cliente{misClientes.length!==1?"s":""} únicos</div>
                  {misClientes.map((c,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 0",borderBottom:"1px solid #f1f5f9"}}>
                      <div style={{width:36,height:36,borderRadius:"50%",background:getAvatarColor(c.nombre),display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:900,fontSize:14,flexShrink:0}}>
                        {c.nombre?.[0]?.toUpperCase()||"?"}
                      </div>
                      <div style={{flex:1}}>
                        <div style={{fontSize:13,fontWeight:700,color:"#0f172a"}}>{c.nombre}</div>
                        <div style={{fontSize:11,color:"#64748b"}}>📱 {c.telefono} · {c.totalPedidos} pedido{c.totalPedidos!==1?"s":""}</div>
                        <div style={{fontSize:10,color:"#94a3b8"}}>Último: {c.ultimoPedido?.slice(0,10)}</div>
                      </div>
                      <div style={{textAlign:"right"}}>
                        <div style={{fontSize:13,fontWeight:800,color:"#22c55e"}}>${c.totalGastado.toFixed(2)}</div>
                        <div style={{fontSize:10,color:"#94a3b8"}}>total</div>
                      </div>
                    </div>
                  ))}
                </div>
              }
            </div>
          )}

          {provTab==="ventas"&&(()=>{
            const pedidosEntregados=misRestPedidos.filter(p=>p.estado==="entregado");
            const pedidosCancelados=misRestPedidos.filter(p=>p.estado==="cancelado");
            const pedidosTodos=misRestPedidos;
            const fechaLocalV=(d)=>new Date(new Date(d).getTime()-new Date(d).getTimezoneOffset()*60000).toISOString().slice(0,10);
            const hoyV=fechaLocalV(new Date());
            const sem=fechaLocalV(new Date(Date.now()-7*86400000));
            const mes=fechaLocalV(new Date(Date.now()-30*86400000));
            // filtroVentas está en el estado del componente
            const filtroV=filtroVentas;const setFiltroV=setFiltroVentas;
            const pedFiltV=pedidosEntregados.filter(p=>{
              const f=fechaLocalV(p.created_at);
              return filtroV==="hoy"?f===hoyV:filtroV==="semana"?f>=sem:filtroV==="mes"?f>=mes:true;
            });
            const totalVendido=pedFiltV.reduce((a,p)=>a+(p.total||0),0);
            const ticketProm=pedFiltV.length>0?totalVendido/pedFiltV.length:0;
            return(
              <div style={s.pc}>
                <div style={s.pT}>📈 Dashboard de ventas</div>
                {/* FILTROS */}
                <div style={{display:"flex",gap:6,marginBottom:12}}>
                  {[["todo","Todo"],["mes","30 días"],["semana","7 días"],["hoy","Hoy"]].map(([v,l])=>(
                    <button key={v} onClick={()=>setFiltroV(v)} style={{flex:1,padding:"6px 4px",borderRadius:10,border:"none",fontSize:11,fontWeight:700,cursor:"pointer",background:filtroV===v?P:"#f1f5f9",color:filtroV===v?"#fff":"#64748b"}}>{l}</button>
                  ))}
                </div>
                {/* KPIs */}
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
                  <div style={{...s.statCard,gridColumn:"1/-1"}}>
                    <div style={{...s.statNum,fontSize:28,color:"#22c55e"}}>${totalVendido.toFixed(2)}</div>
                    <div style={s.statLbl}>💰 Total vendido (entregados)</div>
                  </div>
                  <div style={s.statCard}><div style={{...s.statNum,color:"#6366f1"}}>{pedFiltV.length}</div><div style={s.statLbl}>Pedidos entregados</div></div>
                  <div style={s.statCard}><div style={{...s.statNum,color:"#f59e0b"}}>${ticketProm.toFixed(2)}</div><div style={s.statLbl}>Ticket promedio</div></div>
                  <div style={s.statCard}><div style={{...s.statNum,color:"#ef4444"}}>{pedidosCancelados.length}</div><div style={s.statLbl}>Cancelados</div></div>
                  <div style={s.statCard}><div style={{...s.statNum,color:"#64748b"}}>{pedidosTodos.length}</div><div style={s.statLbl}>Total pedidos</div></div>
                </div>
                {/* LISTA DE VENTAS */}
                <div style={{fontSize:12,fontWeight:700,color:"#64748b",marginBottom:8}}>Pedidos entregados</div>
                {pedFiltV.length===0
                  ?<div style={{textAlign:"center",padding:"20px 0",color:"#94a3b8",fontSize:13}}>No hay ventas en este período</div>
                  :pedFiltV.map(ped=>(
                    <div key={ped.id} style={{padding:"10px 0",borderBottom:"1px solid #f1f5f9"}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                        <div style={{fontSize:12,fontWeight:700,color:"#0f172a"}}>{ped.ref} — {ped.cliente_nombre}</div>
                        <span style={{fontSize:13,fontWeight:800,color:"#22c55e"}}>${(ped.total||0).toFixed(2)}</span>
                      </div>
                      <div style={{fontSize:11,color:"#94a3b8"}}>{ped.created_at?.slice(0,10)} · {(ped.items||[]).map(i=>`${i.nombre} x${i.qty||1}`).join(", ")}</div>
                    </div>
                  ))
                }
              </div>
            );
          })()}


          {/* ═══ TAB MI NEGOCIO ═══ */}
          {provTab==="mi_negocio"&&(()=>{
            // seccionNegocio está en el estado del componente
            const seccion=seccionNegocio;const setSeccion=setSeccionNegocio;
            const notifPagoWa=(cambio)=>{
              const raw=(provData.whatsapp_negocio||provData.telefono||"").replace(/\D/g,"");
              const num=raw.startsWith("0")?"58"+raw.slice(1):raw.startsWith("58")?raw:"58"+raw;
              if(!num)return;
              const msg=`⚙️ *Apure Market — Cambio en tu cuenta*\n\nHola ${provData.negocio} 👋\n\n${cambio}\n\nSi no realizaste este cambio, contáctanos de inmediato.`;
              window.open("https://wa.me/"+num+"?text="+encodeURIComponent(msg),"_blank");
            };
            return(
              <div style={s.pc}>
                <div style={s.pT}>⚙️ Mi negocio</div>
                {/* SUB-MENÚ */}
                <div style={{display:"flex",gap:6,marginBottom:14,overflowX:"auto",paddingBottom:4}}>
                  {[
                    {k:"perfil",  l:"👤 Perfil"},
                    {k:"horario", l:"🕐 Horario"},
                    {k:"delivery",l:"🛵 Delivery"},
                    {k:"pagos",   l:"💳 Pagos"},
                    {k:"eta",     l:"⏱️ Tiempo entrega"},
                    {k:"clave",   l:"🔑 Clave"},
                  ].map(s2=>(
                    <button key={s2.k} onClick={()=>setSeccion(s2.k)} style={{flexShrink:0,padding:"6px 12px",borderRadius:20,border:"none",fontSize:11,fontWeight:700,cursor:"pointer",background:seccion===s2.k?"#0f172a":"#f1f5f9",color:seccion===s2.k?"#fff":"#64748b",whiteSpace:"nowrap"}}>
                      {s2.l}
                    </button>
                  ))}
                </div>

                {/* ── PERFIL ── */}
                {seccion==="perfil"&&(
                  <div>
                    <div style={{fontSize:11,color:"#94a3b8",marginBottom:10}}>Tu correo de acceso: <strong style={{color:"#0f172a"}}>{provData.email}</strong> (no editable)</div>
                    <label style={s.lbl}>Nombre del negocio</label>
                    <input style={s.inp} value={perfilData.negocio||provData.negocio||""} onChange={e=>setPerfilData({...perfilData,negocio:e.target.value})} placeholder="Nombre de tu negocio"/>
                    <label style={s.lbl}>Descripción</label>
                    <input style={s.inp} value={perfilData.descripcion_negocio||provData.descripcion_negocio||""} onChange={e=>setPerfilData({...perfilData,descripcion_negocio:e.target.value})} placeholder="Describe tu negocio..."/>
                    <label style={s.lbl}>WhatsApp de pedidos *</label>
                    <input style={s.inp} value={perfilData.whatsapp_negocio||provData.whatsapp_negocio||""} onChange={e=>setPerfilData({...perfilData,whatsapp_negocio:e.target.value})} placeholder="04XX-XXXXXXX"/>
                    <label style={s.lbl}>Instagram</label>
                    <input style={s.inp} value={perfilData.instagram||provData.instagram||""} onChange={e=>setPerfilData({...perfilData,instagram:e.target.value})} placeholder="@minegocio"/>
                    <label style={s.lbl}>Dirección física</label>
                    <input style={s.inp} value={perfilData.direccion_fisica||provData.direccion_fisica||""} onChange={e=>setPerfilData({...perfilData,direccion_fisica:e.target.value})} placeholder="Calle, edificio..."/>
                    <button onClick={async()=>{
                      await supabase.from("proveedores").update({
                        negocio:perfilData.negocio||provData.negocio,
                        descripcion_negocio:perfilData.descripcion_negocio,
                        whatsapp_negocio:perfilData.whatsapp_negocio,
                        telefono:perfilData.whatsapp_negocio,
                        instagram:perfilData.instagram,
                        direccion_fisica:perfilData.direccion_fisica,
                      }).eq("id",provData.id);
                      setProvData({...provData,...perfilData});
                      setPmsg("✅ Perfil actualizado");loadAll();
                    }} style={{...s.btnGreen,width:"100%",borderRadius:10,padding:"10px",marginTop:4}}>💾 Guardar perfil</button>
                  </div>
                )}

                {/* ── HORARIO ── */}
                {seccion==="horario"&&(
                  <div>
                    <div style={{display:"flex",gap:8,marginBottom:8}}>
                      <div style={{flex:1}}><label style={s.lbl}>Abre</label><input style={s.inp} type="time" value={perfilData.horario_desde||provData.horario_desde||"08:00"} onChange={e=>setPerfilData({...perfilData,horario_desde:e.target.value})}/></div>
                      <div style={{flex:1}}><label style={s.lbl}>Cierra</label><input style={s.inp} type="time" value={perfilData.horario_hasta||provData.horario_hasta||"18:00"} onChange={e=>setPerfilData({...perfilData,horario_hasta:e.target.value})}/></div>
                    </div>
                    <label style={s.lbl}>Nota de horario (opcional)</label>
                    <input style={s.inp} placeholder="Ej: Solo fines de semana" value={perfilData.horario_desc||provData.horario_desc||""} onChange={e=>setPerfilData({...perfilData,horario_desc:e.target.value})}/>
                    <button onClick={async()=>{
                      await supabase.from("proveedores").update({horario_desde:perfilData.horario_desde||provData.horario_desde,horario_hasta:perfilData.horario_hasta||provData.horario_hasta,horario_desc:perfilData.horario_desc||provData.horario_desc}).eq("id",provData.id);
                      setProvData({...provData,...perfilData});setPmsg("✅ Horario actualizado");
                    }} style={{...s.btnGreen,width:"100%",borderRadius:10,padding:"10px",marginTop:4}}>💾 Guardar horario</button>
                  </div>
                )}

                {/* ── DELIVERY ── */}
                {seccion==="delivery"&&(
                  <div>
                    <label style={{display:"flex",alignItems:"center",gap:10,marginBottom:12,cursor:"pointer"}}>
                      <input type="checkbox" checked={perfilData.delivery_propio??provData.delivery_propio??false} onChange={e=>setPerfilData({...perfilData,delivery_propio:e.target.checked})} style={{width:18,height:18,accentColor:"#25D366"}}/>
                      <span style={{fontSize:13,fontWeight:700}}>🛵 Ofrezco delivery a domicilio</span>
                    </label>
                    <label style={s.lbl}>Costo de delivery ($)</label>
                    <input style={s.inp} type="number" placeholder="1.00" value={perfilData.delivery_costo??provData.delivery_costo??0} onChange={e=>setPerfilData({...perfilData,delivery_costo:parseFloat(e.target.value)||0})}/>
                    <label style={s.lbl}>Delivery gratis desde ($)</label>
                    <input style={s.inp} type="number" placeholder="15.00" value={perfilData.delivery_gratis_desde??provData.delivery_gratis_desde??15} onChange={e=>setPerfilData({...perfilData,delivery_gratis_desde:parseFloat(e.target.value)||0})}/>
                    <label style={{display:"flex",alignItems:"center",gap:10,marginBottom:8,cursor:"pointer"}}>
                      <input type="checkbox" checked={perfilData.permite_retiro??provData.permite_retiro??false} onChange={e=>setPerfilData({...perfilData,permite_retiro:e.target.checked})} style={{width:18,height:18,accentColor:"#25D366"}}/>
                      <span style={{fontSize:13,fontWeight:700}}>🏃 Permito retiro en local</span>
                    </label>
                    <button onClick={async()=>{
                      await supabase.from("proveedores").update({delivery_propio:perfilData.delivery_propio??provData.delivery_propio,delivery_costo:perfilData.delivery_costo??provData.delivery_costo,delivery_gratis_desde:perfilData.delivery_gratis_desde??provData.delivery_gratis_desde,permite_retiro:perfilData.permite_retiro??provData.permite_retiro}).eq("id",provData.id);
                      setProvData({...provData,...perfilData});setPmsg("✅ Delivery actualizado");loadAll();
                    }} style={{...s.btnGreen,width:"100%",borderRadius:10,padding:"10px",marginTop:4}}>💾 Guardar delivery</button>
                  </div>
                )}

                {/* ── PAGOS ── */}
                {seccion==="pagos"&&(
                  <div>
                    <div style={{fontSize:12,fontWeight:700,color:"#1e40af",background:"#dbeafe",padding:"6px 10px",borderRadius:8,marginBottom:10}}>📱 Pago Móvil</div>
                    <label style={s.lbl}>Banco</label>
                    <input style={s.inp} placeholder="Ej: Banesco, BDV..." value={pagoData.pago_movil_banco||provData.pago_movil_banco||""} onChange={e=>setPagoData({...pagoData,pago_movil_banco:e.target.value})}/>
                    <label style={s.lbl}>Teléfono</label>
                    <input style={s.inp} placeholder="04XX-XXXXXXX" value={pagoData.pago_movil_telefono||provData.pago_movil_telefono||""} onChange={e=>setPagoData({...pagoData,pago_movil_telefono:e.target.value})}/>
                    <label style={s.lbl}>Cédula</label>
                    <input style={s.inp} placeholder="V-XXXXXXXX" value={pagoData.pago_movil_cedula||provData.pago_movil_cedula||""} onChange={e=>setPagoData({...pagoData,pago_movil_cedula:e.target.value})}/>
                    <label style={s.lbl}>Nombre del titular</label>
                    <input style={s.inp} placeholder="Nombre completo" value={pagoData.pago_movil_nombre||provData.pago_movil_nombre||""} onChange={e=>setPagoData({...pagoData,pago_movil_nombre:e.target.value})}/>
                    <div style={{fontSize:12,fontWeight:700,color:"#15803d",background:"#f0fdf4",padding:"6px 10px",borderRadius:8,marginBottom:10,marginTop:4}}>💵 Otros métodos</div>
                    <label style={{display:"flex",alignItems:"center",gap:10,marginBottom:8,cursor:"pointer"}}><input type="checkbox" checked={pagoData.acepta_efectivo??provData.acepta_efectivo??false} onChange={e=>setPagoData({...pagoData,acepta_efectivo:e.target.checked})} style={{width:16,height:16,accentColor:"#25D366"}}/><span style={{fontSize:12,fontWeight:600}}>Acepto efectivo USD</span></label>
                    <label style={{display:"flex",alignItems:"center",gap:10,marginBottom:8,cursor:"pointer"}}><input type="checkbox" checked={pagoData.acepta_divisas??provData.acepta_divisas??false} onChange={e=>setPagoData({...pagoData,acepta_divisas:e.target.checked})} style={{width:16,height:16,accentColor:"#25D366"}}/><span style={{fontSize:12,fontWeight:600}}>Acepto otras divisas</span></label>
                    <label style={{display:"flex",alignItems:"center",gap:10,marginBottom:8,cursor:"pointer"}}><input type="checkbox" checked={pagoData.acepta_zelle??provData.acepta_zelle??false} onChange={e=>setPagoData({...pagoData,acepta_zelle:e.target.checked})} style={{width:16,height:16,accentColor:"#25D366"}}/><span style={{fontSize:12,fontWeight:600}}>Acepto Zelle</span></label>
                    {(pagoData.acepta_zelle??provData.acepta_zelle)&&<input style={s.inp} placeholder="Email o teléfono Zelle" value={pagoData.zelle_cuenta||provData.zelle_cuenta||""} onChange={e=>setPagoData({...pagoData,zelle_cuenta:e.target.value})}/>}
                    <label style={{display:"flex",alignItems:"center",gap:10,marginBottom:8,cursor:"pointer"}}><input type="checkbox" checked={pagoData.acepta_binance??provData.acepta_binance??false} onChange={e=>setPagoData({...pagoData,acepta_binance:e.target.checked})} style={{width:16,height:16,accentColor:"#F0B90B"}}/><span style={{fontSize:12,fontWeight:600}}>Acepto Binance Pay</span></label>
                    {(pagoData.acepta_binance??provData.acepta_binance)&&<input style={s.inp} placeholder="ID o email Binance Pay" value={pagoData.binance_cuenta||provData.binance_cuenta||""} onChange={e=>setPagoData({...pagoData,binance_cuenta:e.target.value})}/>}
                    <button onClick={async()=>{
                      const nuevosPagos={pago_movil_banco:pagoData.pago_movil_banco||provData.pago_movil_banco||"",pago_movil_telefono:pagoData.pago_movil_telefono||provData.pago_movil_telefono||"",pago_movil_cedula:pagoData.pago_movil_cedula||provData.pago_movil_cedula||"",pago_movil_nombre:pagoData.pago_movil_nombre||provData.pago_movil_nombre||"",acepta_efectivo:pagoData.acepta_efectivo??provData.acepta_efectivo??false,acepta_zelle:pagoData.acepta_zelle??provData.acepta_zelle??false,zelle_cuenta:pagoData.zelle_cuenta||provData.zelle_cuenta||"",acepta_divisas:pagoData.acepta_divisas??provData.acepta_divisas??false,acepta_binance:pagoData.acepta_binance??provData.acepta_binance??false,binance_cuenta:pagoData.binance_cuenta||provData.binance_cuenta||""};
                      await supabase.from("proveedores").update(nuevosPagos).eq("id",provData.id);
                      setProvData({...provData,...nuevosPagos});setPmsg("✅ Métodos de pago actualizados");
                      // Notificar por WhatsApp
                      const resumen=[nuevosPagos.pago_movil_banco?`• Pago Móvil: ${nuevosPagos.pago_movil_banco} / ${nuevosPagos.pago_movil_telefono}`:"",nuevosPagos.acepta_zelle?`• Zelle: ${nuevosPagos.zelle_cuenta}`:"",nuevosPagos.acepta_binance?`• Binance Pay: ${nuevosPagos.binance_cuenta}`:"",nuevosPagos.acepta_efectivo?"• Efectivo USD: Sí":"",nuevosPagos.acepta_divisas?"• Otras divisas: Sí":""].filter(Boolean).join("\n");
                      notifPagoWa(`✅ Tus métodos de pago fueron actualizados:\n\n${resumen}`);
                    }} style={{...s.btnGreen,width:"100%",borderRadius:10,padding:"10px",marginTop:4}}>💾 Guardar y notificarme</button>
                  </div>
                )}

                {/* ── ETA ── */}
                {seccion==="eta"&&(
                  <div>
                    <div style={{fontSize:12,color:"#64748b",marginBottom:12,lineHeight:1.5}}>Define cuánto tiempo tarda tu negocio en preparar y entregar un pedido. Se mostrará a los clientes en tu tienda y en el carrito.</div>
                    <div style={{display:"flex",gap:8,marginBottom:8}}>
                      <div style={{flex:1}}><label style={s.lbl}>Tiempo mínimo (min)</label><input style={s.inp} type="number" placeholder="20" value={etaData.eta_minutos_min||provData.eta_minutos_min||""} onChange={e=>setEtaData({...etaData,eta_minutos_min:e.target.value})}/></div>
                      <div style={{flex:1}}><label style={s.lbl}>Tiempo máximo (min)</label><input style={s.inp} type="number" placeholder="40" value={etaData.eta_minutos_max||provData.eta_minutos_max||""} onChange={e=>setEtaData({...etaData,eta_minutos_max:e.target.value})}/></div>
                    </div>
                    <label style={s.lbl}>O escribe texto libre</label>
                    <input style={s.inp} placeholder="Ej: 25–35 min / A confirmar / Mismo día" value={etaData.eta_texto||provData.eta_texto||""} onChange={e=>setEtaData({...etaData,eta_texto:e.target.value})}/>
                    <div style={{fontSize:11,color:"#64748b",marginBottom:8}}>Vista previa: <strong>⏱️ {etaData.eta_texto||provData.eta_texto||(etaData.eta_minutos_min&&etaData.eta_minutos_max?`${etaData.eta_minutos_min}–${etaData.eta_minutos_max} min`:"No configurado")}</strong></div>
                    <button onClick={async()=>{
                      await supabase.from("proveedores").update({eta_minutos_min:etaData.eta_minutos_min||provData.eta_minutos_min||null,eta_minutos_max:etaData.eta_minutos_max||provData.eta_minutos_max||null,eta_texto:etaData.eta_texto||provData.eta_texto||null}).eq("id",provData.id);
                      setProvData({...provData,...etaData});setPmsg("✅ Tiempo de entrega actualizado");
                    }} style={{...s.btnGreen,width:"100%",borderRadius:10,padding:"10px",marginTop:4}}>💾 Guardar tiempo</button>
                  </div>
                )}

                {/* ── CLAVE ── */}
                {seccion==="clave"&&(
                  <div>
                    <label style={s.lbl}>Clave actual</label>
                    <input style={s.inp} type="password" placeholder="••••••••" value={claveForm.actual} onChange={e=>setClaveForm({...claveForm,actual:e.target.value})}/>
                    <label style={s.lbl}>Nueva clave</label>
                    <input style={s.inp} type="password" placeholder="••••••••" value={claveForm.nueva} onChange={e=>setClaveForm({...claveForm,nueva:e.target.value})}/>
                    <label style={s.lbl}>Confirmar nueva clave</label>
                    <input style={s.inp} type="password" placeholder="••••••••" value={claveForm.confirmar} onChange={e=>setClaveForm({...claveForm,confirmar:e.target.value})}/>
                    <button onClick={async()=>{
                      if(!claveForm.actual||!claveForm.nueva||!claveForm.confirmar)return setPmsg("Completa todos los campos");
                      if(claveForm.nueva!==claveForm.confirmar)return setPmsg("Las claves no coinciden");
                      if(claveForm.actual!==provData.password_plain)return setPmsg("La clave actual es incorrecta");
                      if(claveForm.nueva.length<6)return setPmsg("La nueva clave debe tener al menos 6 caracteres");
                      await supabase.from("proveedores").update({password_plain:claveForm.nueva}).eq("id",provData.id);
                      setPmsg("✅ Clave actualizada");setClaveForm({actual:"",nueva:"",confirmar:""});
                    }} style={{...s.btnGreen,width:"100%",borderRadius:10,padding:"10px",marginTop:4}}>🔑 Cambiar clave</button>
                  </div>
                )}

                <div style={{marginTop:16,paddingTop:12,borderTop:"1px solid #f1f5f9"}}>
                  <button style={{...s.btnG,width:"100%"}} onClick={()=>{setProvMode("login");setProvData(null);setMyProds([]);setMyPromos([]);setMyVentas([]);setPmsg("");setEditandoPerfil(false);setCambiandoClave(false);}}>🚪 Cerrar sesión</button>
                </div>
              </div>
            );
          })()}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </>)}

        {/* ADMIN */}
        {provMode==="admin"&&(<>
          <div style={{...s.pc,background:"#eff6ff",borderColor:"#bfdbfe"}}>
            <div style={{fontSize:14,fontWeight:700,color:"#1d4ed8",marginBottom:10}}>⚙️ Panel Admin — {APP_NAME}</div>
            <button style={s.toggleBtn(superProds.length>0)} onClick={async()=>{await supabase.from("productos_supermercado").update({disponible:superProds.length===0}).neq("id","00000000-0000-0000-0000-000000000000");loadAll();}}>
              <span style={{fontSize:20}}>{superProds.length>0?"🟢":"🔴"}</span>
              <div><div style={{fontSize:13,fontWeight:700,color:superProds.length>0?"#15803d":"#92400e"}}>Supermercado: {superProds.length>0?"ABIERTO":"CERRADO"}</div><div style={{fontSize:11,color:"#64748b"}}>Toca para {superProds.length>0?"cerrar":"abrir"}</div></div>
            </button>
          </div>

          <div style={{...s.sec,paddingTop:0}}>
            {[
              {key:"dashboard",label:"📊 Dashboard",n:0},
              {key:"pedidos",label:"📦 Pedidos",n:pedidos.filter(p=>p.estado==="nuevo").length},
              {key:"proveedores_lista",label:"🏪 Proveedores",n:0},
              {key:"pendientes",label:"⏳ Productos pendientes",n:pendProds.length},
              {key:"promos_pend",label:"🎉 Promos pendientes",n:pendPromos.filter(p=>!p.motivo_rechazo).length},
              {key:"resenas",label:"⭐ Reseñas",n:pendResenas.length},
              {key:"zonas",label:"🗺️ Zonas de delivery",n:0},
              {key:"combos",label:"🎁 Combos",n:0},
              {key:"super",label:"🛒 Supermercado",n:0},
              {key:"remates_pend",label:"🏷️ Remates pendientes",n:pendRemates.length},
              {key:"servicios_pend",label:"🛠️ Servicios pendientes",n:pendServiciosCom.length},
              {key:"clasificados_pend",label:"🚗 Clasificados pendientes",n:pendClasificados.length},
              {key:"suscripciones",label:"💳 Suscripciones",n:suscripciones.filter(s=>!s.suscripcion_pagada&&s.meses_gratis_restantes===0).length},
            ].map(x=>(<button key={x.key} style={s.admRow(adminSec===x.key)} onClick={()=>{setAdminSec(x.key);if(x.key==="pedidos")loadPedidos();}}><span>{x.label}</span>{x.n>0&&<span style={{background:"#ef4444",color:"#fff",borderRadius:20,padding:"2px 10px",fontSize:11,fontWeight:700}}>{x.n}</span>}</button>))}
          </div>

          {adminSec==="dashboard"&&(<>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,margin:"0 16px 12px"}}>
              <StatCard num={`$${ingresoHoy.toFixed(2)}`} lbl="Ingresos hoy" color="#22c55e"/>
              <StatCard num={`$${ingresoTotal.toFixed(2)}`} lbl="Total histórico"/>
              <StatCard num={ventasHoy.length} lbl="Ventas hoy" color="#6366f1"/>
              <StatCard num={allProveedores.filter(p=>p.activo&&!p.en_pausa).length} lbl="Proveedores activos" color="#f59e0b"/>
            </div>
            {topAdminProds.length>0&&(<div style={{margin:"0 16px"}}><div style={s.pc}><div style={s.pT}>🏆 Más vendidos del ecosistema</div><BarChart data={topAdminProds} max={topAdminProds[0]?.[1]||1}/></div></div>)}
            <div style={{margin:"0 16px"}}><div style={s.pc}><div style={s.pT}>🕐 Últimas ventas</div>{adminVentas.length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>Aún no hay ventas</div>}{adminVentas.slice(0,10).map(v=>(<div key={v.id} style={{padding:"7px 0",borderBottom:"1px solid #f1f5f9",fontSize:12}}><div style={{display:"flex",justifyContent:"space-between"}}><span style={{fontWeight:600}}>{v.producto_nombre}</span><span style={{fontWeight:700,color:"#22c55e"}}>${(v.total_item||0).toFixed(2)}</span></div><div style={{color:"#94a3b8"}}>{v.cliente_nombre} · {v.fecha?.slice(0,10)}</div></div>))}</div></div>
          </>)}

          {adminSec==="pedidos"&&(
            <div style={{margin:"0 16px"}}>
              <div style={s.cs}>
                {[
                  {k:"todos",l:"Todos"},
                  {k:"nuevo",l:`🟡 Nuevos (${pedidos.filter(p=>p.estado==="nuevo").length})`},
                  {k:"confirmado",l:"🔵 Pagados"},
                  {k:"en_camino",l:"🟠 En camino"},
                  {k:"entregado",l:"🟢 Entregados"},
                  {k:"anulado",l:"🔴 Anulados"},
                ].map(f=>(<button key={f.k} style={s.cb(pedidoFiltro===f.k)} onClick={()=>setPedidoFiltro(f.k)}>{f.l}</button>))}
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:12}}>
                <div style={s.statCard}><div style={{...s.statNum,fontSize:16,color:"#22c55e"}}>${pedidos.filter(p=>p.estado==="entregado").reduce((a,p)=>a+(p.ganancia||0),0).toFixed(2)}</div><div style={s.statLbl}>Ganancia real</div></div>
                <div style={s.statCard}><div style={{...s.statNum,fontSize:16,color:"#6366f1"}}>{pedidos.filter(p=>p.estado==="entregado").length}</div><div style={s.statLbl}>Entregados</div></div>
                <div style={s.statCard}><div style={{...s.statNum,fontSize:16,color:"#ef4444"}}>{pedidos.filter(p=>p.estado==="anulado").length}</div><div style={s.statLbl}>Anulados</div></div>
              </div>
              {(pedidoFiltro==="todos"?pedidos:pedidos.filter(p=>p.estado===pedidoFiltro)).length===0&&(
                <div style={{...s.pc,textAlign:"center",color:"#94a3b8"}}>No hay pedidos en esta categoría</div>
              )}
              {(pedidoFiltro==="todos"?pedidos:pedidos.filter(p=>p.estado===pedidoFiltro)).map(ped=>{
                const estadoConfig={
                  nuevo:{bg:"#fef9c3",color:"#854d0e",label:"🟡 Nuevo"},
                  confirmado:{bg:"#dbeafe",color:"#1d4ed8",label:"🔵 Pago confirmado"},
                  en_camino:{bg:"#fff7ed",color:"#c2410c",label:"🟠 En camino"},
                  entregado:{bg:"#dcfce7",color:"#15803d",label:"🟢 Entregado"},
                  anulado:{bg:"#fee2e2",color:"#be123c",label:"🔴 Anulado"},
                }[ped.estado]||{bg:"#f1f5f9",color:"#64748b",label:ped.estado};
                const itemsList=(ped.items||[]);
                return(
                  <div key={ped.id} style={{...s.pc,marginBottom:10}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
                      <div>
                        <div style={{fontSize:13,fontWeight:700,color:P}}>📋 {ped.ref}</div>
                        <div style={{fontSize:11,color:"#64748b"}}>{ped.created_at?.slice(0,16).replace("T"," ")}</div>
                      </div>
                      <span style={{fontSize:11,fontWeight:600,padding:"3px 8px",borderRadius:8,background:estadoConfig.bg,color:estadoConfig.color}}>{estadoConfig.label}</span>
                    </div>
                    <div style={{background:"#f8fafc",borderRadius:8,padding:"8px 10px",marginBottom:8}}>
                      {itemsList.map((it,i)=>(
                        <div key={i} style={{fontSize:12,padding:"2px 0",borderBottom:i<itemsList.length-1?"1px solid #f1f5f9":"none"}}>
                          <span style={{fontWeight:500}}>{it.nombre}</span> x{it.qty} — <span style={{color:"#22c55e",fontWeight:600}}>${((it.precio||0)*(it.qty||1)).toFixed(2)}</span>
                          {it.nota&&<div style={{fontSize:10,color:"#7e22ce"}}>📝 {it.nota}</div>}
                          {it.kitchen&&<span style={{fontSize:10,color:"#94a3b8"}}> ({it.kitchen})</span>}
                        </div>
                      ))}
                    </div>
                    <div style={{fontSize:12,color:"#64748b",marginBottom:8}}>
                      <div>👤 {ped.cliente_nombre} · 📱 {ped.cliente_telefono}</div>
                      <div>📍 {ped.cliente_direccion}</div>
                      <div>💳 {ped.metodo_pago}</div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:12,background:"#f0fdf4",padding:"6px 10px",borderRadius:8,marginBottom:8}}>
                      <span>Total: <strong>${(ped.total||0).toFixed(2)}</strong></span>
                      <span>Delivery: <strong>${(ped.delivery||0).toFixed(2)}</strong></span>
                      <span style={{color:"#22c55e"}}>Ganancia: <strong>${(ped.ganancia||0).toFixed(2)}</strong></span>
                    </div>
                    {ped.estado!=="entregado"&&ped.estado!=="anulado"&&(
                      <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                        {ped.estado==="nuevo"&&(<>
                          <button onClick={()=>actualizarEstadoPedido(ped.id,"confirmado")} style={{...s.btnGreen,flex:1,fontSize:11}}>✓ Confirmar pago</button>
                          <button onClick={()=>actualizarEstadoPedido(ped.id,"anulado")} style={{...s.btnRed,flex:1,fontSize:11}}>✗ Anular</button>
                        </>)}
                        {ped.estado==="confirmado"&&(
                          <button onClick={()=>actualizarEstadoPedido(ped.id,"en_camino")} style={{...s.btnAmber,flex:1,fontSize:11}}>🛵 Marcar en camino</button>
                        )}
                        {ped.estado==="en_camino"&&(
                          <button onClick={()=>actualizarEstadoPedido(ped.id,"entregado")} style={{...s.btnGreen,flex:1,fontSize:11}}>✅ Marcar entregado</button>
                        )}
                      </div>
                    )}
                    <button onClick={()=>{const _t=(ped.cliente_telefono||"").replace(/\D/g,"");window.location.href="https://wa.me/"+_t+"?text="+encodeURIComponent("Hola "+ped.cliente_nombre+" 👋 Tu pedido *"+ped.ref+"* está "+estadoConfig.label);}} style={{...s.btnWa,marginTop:6,padding:"8px",fontSize:12}}>
                      📲 Escribir al cliente
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {adminSec==="proveedores_lista"&&(<div style={{margin:"0 16px"}}>
            <div style={s.pc}>
              <div style={s.pT}>🏪 Proveedores ({allProveedores.length})</div>
              <div style={s.cs}>{["Todas",...PROV_CATS].map(c=>(<button key={c} style={s.cb(catFilter===c)} onClick={()=>setCatFilter(c)}>{c}</button>))}</div>
              {filteredProvs.length===0&&<div style={{fontSize:13,color:"#94a3b8",padding:"10px 0"}}>No hay proveedores en esta categoría</div>}
              {filteredProvs.map(p=>(<div key={p.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                  {p.logo_url?<img src={p.logo_url} alt="" style={{width:44,height:44,borderRadius:"50%",objectFit:"cover"}}/>:<div style={{width:44,height:44,borderRadius:"50%",background:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18}}>🏪</div>}
                  <div style={{flex:1}}>
                    <div style={{fontSize:13,fontWeight:700}}>{p.negocio}</div>
                    <div style={{fontSize:11,color:"#64748b"}}>@{p.usuario} · {p.telefono}</div>
                    {p.email&&<div style={{fontSize:11,color:"#94a3b8"}}>{p.email}</div>}
                    <div style={{display:"flex",gap:4,flexWrap:"wrap",marginTop:3}}>{(p.categorias||[]).map(c=>(<span key={c} style={{fontSize:10,background:"#f1f5f9",color:"#64748b",padding:"1px 6px",borderRadius:8}}>{c}</span>))}</div>
                  </div>
                  <span style={{fontSize:10,fontWeight:600,padding:"2px 6px",borderRadius:8,background:p.en_pausa?"#fef3c7":"#dcfce7",color:p.en_pausa?"#92400e":"#15803d"}}>{p.en_pausa?"⏸️ Pausado":"✓ Activo"}</span>
                </div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:8}}>
                  <button onClick={()=>togglePausa(p.id,p.en_pausa)} style={{...s.btnAmber,fontSize:11}}>{p.en_pausa?"▶️ Quitar pausa":"⏸️ Pausar"}</button>
                  <button onClick={()=>deleteProveedor(p.id)} style={{...s.btnRed,fontSize:11}}>🗑️ Eliminar</button>
                </div>
                <div style={{background:"#f8fafc",borderRadius:10,padding:"8px 10px",border:"1px solid #e2e8f0"}}>
                  <div style={{fontSize:11,color:"#64748b",marginBottom:6,fontWeight:600}}>🔑 Resetear contraseña</div>
                  <div style={{display:"flex",gap:6,alignItems:"center"}}>
                    <input style={{...s.inp,marginBottom:0,flex:1,fontSize:12,padding:"7px 10px"}} type="text" placeholder="Nueva clave temporal..." value={resetPass[p.id]||""} onChange={e=>setResetPass({...resetPass,[p.id]:e.target.value})}/>
                    <button onClick={()=>{if(!resetPass[p.id])return;cambiarClave(p.id,resetPass[p.id]);}} style={{...s.btnGreen,fontSize:11,flexShrink:0,padding:"7px 12px"}}>✓ Guardar</button>
                  </div>
                  {resetPass[p.id]&&<div style={{fontSize:10,color:"#15803d",marginTop:4}}>⚠️ Comunica esta clave al proveedor por WhatsApp</div>}
                </div>
              </div>))}
            </div>
          </div>)}

          {adminSec==="pendientes"&&(<div style={{margin:"0 16px"}}>
            <div style={s.pc}>
              <div style={s.pT}>🍽️ Productos por aprobar ({pendProds.length})</div>
              {pendProds.length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No hay pendientes ✓</div>}
              {pendProds.map(p=>(<div key={p.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}>
                <div style={{display:"flex",gap:8,marginBottom:8}}>
                  {p.foto_url?<img src={p.foto_url} alt="" style={{width:60,height:60,borderRadius:8,objectFit:"cover"}}/>:<div style={{width:60,height:60,borderRadius:8,background:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24}}>📷</div>}
                  <div>
                    <div style={{fontSize:13,fontWeight:700}}>{p.nombre}</div>
                    {(p.marca||p.presentacion)&&<div style={{fontSize:11,color:"#94a3b8"}}>{[p.marca,p.presentacion].filter(Boolean).join(" · ")}</div>}
                    <div style={{fontSize:11,color:"#64748b"}}>${p.precio} · {p.proveedores?.negocio}</div>
                    {p.descripcion&&<div style={{fontSize:11,color:"#94a3b8"}}>{p.descripcion}</div>}
                  </div>
                </div>
                <div style={{display:"flex",gap:8,marginBottom:6}}>
                  <button onClick={()=>approvePr(p.id)} style={{...s.apvBtn,background:"#22c55e",color:"#fff"}}>✓ Aprobar</button>
                </div>
                <div style={{display:"flex",gap:6}}>
                  <input style={{...s.inp,marginBottom:0,flex:1,fontSize:12,padding:"7px 10px"}} placeholder="Motivo del rechazo..." value={rejectMotivo[p.id]||""} onChange={e=>setRejectMotivo({...rejectMotivo,[p.id]:e.target.value})}/>
                  <button onClick={()=>rejectPr(p.id)} style={{...s.btnRed,fontSize:11,flexShrink:0}}>✗ Rechazar</button>
                </div>
              </div>))}
            </div>
          </div>)}

          {adminSec==="promos_pend"&&(
            <div style={{margin:"0 16px"}}>
              <div style={s.pc}>
                <div style={s.pT}>🎉 Promociones por aprobar ({pendPromos.length})</div>
                {pendPromos.filter(p=>!p.motivo_rechazo).length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No hay promociones pendientes ✓</div>}
                {pendPromos.filter(p=>!p.motivo_rechazo).map(p=>(
                  <div key={p.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}>
                    {p.foto_url
                      ?<img src={p.foto_url} alt="" style={{width:"100%",height:140,objectFit:"cover",borderRadius:10,marginBottom:8}}/>
                      :<div style={{background:"#fee2e2",borderRadius:10,padding:"10px 14px",marginBottom:8,display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:18}}>⚠️</span><div style={{fontSize:12,color:"#be123c",fontWeight:600}}>Esta promoción NO tiene foto — se recomienda rechazar</div></div>
                    }
                    <div style={{fontSize:13,fontWeight:700}}>{p.nombre}</div>
                    <div style={{fontSize:11,color:"#64748b",margin:"2px 0"}}>{p.proveedores?.negocio} · ${p.precio}</div>
                    <div style={{fontSize:11,color:"#94a3b8",marginBottom:4}}>{p.descripcion}</div>
                    <div style={{fontSize:11,color:"#64748b",marginBottom:10}}>📅 {p.fecha_inicio} → {p.fecha_fin}</div>
                    <button onClick={async()=>{
                      setPendPromos(prev=>prev.filter(x=>x.id!==p.id));
                      const{error}=await supabase.from("promociones_proveedor").update({aprobada:true,activa:true,motivo_rechazo:null}).eq("id",p.id);
                      if(error){alert("Error al aprobar: "+error.message);await loadAdmin();return;}
                      loadAll();
                      await loadAdmin();
                    }} style={{...s.btnGreen,width:"100%",marginBottom:10,borderRadius:10,padding:"9px",fontSize:13}}>✓ Aprobar promoción</button>
                    <label style={s.lbl}>Motivo del rechazo * (obligatorio para rechazar)</label>
                    <div style={{display:"flex",gap:6}}>
                      <input style={{...s.inp,marginBottom:0,flex:1,fontSize:12,padding:"8px 10px"}} placeholder="Ej: Falta foto, descripción incompleta..." value={rejectMotivo[`promo_${p.id}`]||""} onChange={e=>setRejectMotivo({...rejectMotivo,[`promo_${p.id}`]:e.target.value})}/>
                      <button onClick={async()=>{
                        const motivo=rejectMotivo[`promo_${p.id}`]||"";
                        if(!motivo.trim())return alert("Escribe el motivo del rechazo antes de continuar");
                        setPendPromos(prev=>prev.filter(x=>x.id!==p.id));
                        setRejectMotivo(prev=>({...prev,[`promo_${p.id}`]:""}));
                        const{error}=await supabase.from("promociones_proveedor").update({aprobada:false,activa:false,motivo_rechazo:motivo}).eq("id",p.id);
                        if(error)alert("Error al rechazar: "+error.message);
                        await loadAdmin();
                      }} style={{...s.btnRed,fontSize:11,flexShrink:0}}>✗ Rechazar</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {adminSec==="resenas"&&(<div style={{margin:"0 16px"}}><div style={s.pc}><div style={s.pT}>Reseñas ({pendResenas.length})</div>{pendResenas.length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No hay pendientes ✓</div>}{pendResenas.map(r=>(<div key={r.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}><div style={{fontSize:13,fontWeight:600}}>{r.cliente_nombre}</div><div style={{color:"#f59e0b",fontSize:14}}>{"★".repeat(r.estrellas)}{"☆".repeat(5-r.estrellas)}</div><div style={{fontSize:12,color:"#64748b",margin:"4px 0"}}>{r.comentario}</div><div style={{display:"flex",gap:8}}><button onClick={()=>approveRe(r.id)} style={{...s.apvBtn,background:"#22c55e",color:"#fff"}}>✓ Publicar</button><button onClick={()=>rejectRe(r.id)} style={{...s.apvBtn,background:"#ef4444",color:"#fff"}}>✗ Eliminar</button></div></div>))}</div></div>)}

          {adminSec==="zonas"&&(<div style={{margin:"0 16px"}}><div style={s.pc}><div style={s.pT}>🗺️ Zonas</div>{allZonas.map(z=>(<div key={z.id} style={{padding:"8px 0",borderBottom:"1px solid #f1f5f9",fontSize:12}}><div style={{fontWeight:600,color:P}}>{z.zona} <span style={{color:"#94a3b8"}}>({z.municipio})</span></div><div style={{color:"#64748b"}}>Delivery: ${z.costo_delivery} · Gratis super: ${z.delivery_gratis_super} · comida: ${z.delivery_gratis_comida}</div></div>))}<div style={{marginTop:14}}><input style={s.inp} placeholder="Nombre de zona" value={newZona.zona} onChange={e=>setNewZona({...newZona,zona:e.target.value})}/><input style={s.inp} placeholder="Municipio" value={newZona.municipio} onChange={e=>setNewZona({...newZona,municipio:e.target.value})}/><div style={{display:"flex",gap:8}}><div style={{flex:1}}><label style={s.lbl}>Delivery $</label><input style={s.inp} type="number" value={newZona.costo_delivery} onChange={e=>setNewZona({...newZona,costo_delivery:parseFloat(e.target.value)})}/></div><div style={{flex:1}}><label style={s.lbl}>Gratis super $</label><input style={s.inp} type="number" value={newZona.delivery_gratis_super} onChange={e=>setNewZona({...newZona,delivery_gratis_super:parseFloat(e.target.value)})}/></div></div><label style={s.lbl}>Gratis comida $</label><input style={s.inp} type="number" value={newZona.delivery_gratis_comida} onChange={e=>setNewZona({...newZona,delivery_gratis_comida:parseFloat(e.target.value)})}/><button style={s.btn} onClick={addZona}>Guardar zona</button></div></div></div>)}

          {adminSec==="combos"&&(<div style={{margin:"0 16px"}}><div style={s.pc}><div style={s.pT}>🎁 Combos</div>{combosAdmin.map(c=>(<div key={c.id} style={{padding:"8px 0",borderBottom:"1px solid #f1f5f9",fontSize:12}}><div style={{fontWeight:600}}>{c.nombre} — ${c.precio}</div><div style={{color:"#64748b"}}>{c.temporada}</div></div>))}<div style={{marginTop:14}}><input style={s.inp} placeholder="Nombre" value={newCombo.nombre} onChange={e=>setNewCombo({...newCombo,nombre:e.target.value})}/><input style={s.inp} placeholder="Descripción" value={newCombo.descripcion} onChange={e=>setNewCombo({...newCombo,descripcion:e.target.value})}/><input style={s.inp} type="number" placeholder="Precio $" value={newCombo.precio} onChange={e=>setNewCombo({...newCombo,precio:e.target.value})}/><input style={s.inp} placeholder="Temporada" value={newCombo.temporada} onChange={e=>setNewCombo({...newCombo,temporada:e.target.value})}/><div style={{display:"flex",gap:8}}><div style={{flex:1}}><label style={s.lbl}>Desde</label><input style={s.inp} type="date" value={newCombo.fecha_inicio} onChange={e=>setNewCombo({...newCombo,fecha_inicio:e.target.value})}/></div><div style={{flex:1}}><label style={s.lbl}>Hasta</label><input style={s.inp} type="date" value={newCombo.fecha_fin} onChange={e=>setNewCombo({...newCombo,fecha_fin:e.target.value})}/></div></div><button style={s.btn} onClick={addCombo}>Publicar combo</button></div></div></div>)}

          {adminSec==="remates_pend"&&(
            <div style={{margin:"0 16px"}}>
              <div style={s.pc}>
                <div style={s.pT}>🏷️ Remates por aprobar ({pendRemates.length})</div>
                {pendRemates.length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No hay remates pendientes ✓</div>}
                {pendRemates.map(r=>(
                  <div key={r.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}>
                    {r.foto_url?<img src={r.foto_url} alt="" style={{width:"100%",height:130,objectFit:"cover",borderRadius:10,marginBottom:8}}/>:<div style={{background:"#f1f5f9",borderRadius:10,height:60,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,marginBottom:8}}>🏷️</div>}
                    <div style={{fontSize:13,fontWeight:700}}>{r.titulo}</div>
                    <div style={{fontSize:11,color:"#64748b"}}>{r.categoria} · ${r.precio}</div>
                    <div style={{fontSize:11,color:"#94a3b8",marginBottom:4}}>{r.descripcion}</div>
                    <div style={{fontSize:11,color:"#64748b",marginBottom:10}}>👤 {r.vendedor_nombre} · 📱 {r.vendedor_telefono}</div>
                    <div style={{display:"flex",gap:8}}>
                      <button onClick={async()=>{setPendRemates(prev=>prev.filter(x=>x.id!==r.id));await supabase.from("remates").update({aprobado:true}).eq("id",r.id);loadRemates();await loadAdmin();}} style={{...s.apvBtn,background:"#22c55e",color:"#fff"}}>✓ Aprobar</button>
                      <button onClick={async()=>{if(!window.confirm("¿Rechazar este remate?"))return;setPendRemates(prev=>prev.filter(x=>x.id!==r.id));await supabase.from("remates").delete().eq("id",r.id);await loadAdmin();}} style={{...s.apvBtn,background:"#ef4444",color:"#fff"}}>✗ Rechazar</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {adminSec==="servicios_pend"&&(
            <div style={{margin:"0 16px"}}>
              <div style={s.pc}>
                <div style={s.pT}>🛠️ Servicios por aprobar ({pendServiciosCom.length})</div>
                {pendServiciosCom.length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No hay servicios pendientes ✓</div>}
                {pendServiciosCom.map(sv=>(
                  <div key={sv.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}>
                    {sv.foto_url&&<img src={sv.foto_url} alt="" style={{width:"100%",height:110,objectFit:"cover",borderRadius:10,marginBottom:8}}/>}
                    <div style={{fontSize:13,fontWeight:700}}>{sv.nombre_servicio}</div>
                    <div style={{fontSize:11,color:"#7e22ce",fontWeight:600}}>{sv.categoria}</div>
                    <div style={{fontSize:11,color:"#64748b",margin:"2px 0 4px"}}>{sv.descripcion}</div>
                    {sv.precio_referencial&&<div style={{fontSize:11,color:"#15803d"}}>💰 {sv.precio_referencial}</div>}
                    {sv.zona&&<div style={{fontSize:11,color:"#94a3b8"}}>📍 {sv.zona}</div>}
                    <div style={{fontSize:11,color:"#64748b",marginBottom:10}}>👤 {sv.proveedor_nombre} · 📱 {sv.proveedor_telefono}</div>
                    <div style={{display:"flex",gap:8}}>
                      <button onClick={async()=>{setPendServiciosCom(prev=>prev.filter(x=>x.id!==sv.id));await supabase.from("servicios_comunidad").update({aprobado:true}).eq("id",sv.id);loadServiciosCom();await loadAdmin();}} style={{...s.apvBtn,background:"#22c55e",color:"#fff"}}>✓ Aprobar</button>
                      <button onClick={async()=>{if(!window.confirm("¿Rechazar este servicio?"))return;setPendServiciosCom(prev=>prev.filter(x=>x.id!==sv.id));await supabase.from("servicios_comunidad").delete().eq("id",sv.id);await loadAdmin();}} style={{...s.apvBtn,background:"#ef4444",color:"#fff"}}>✗ Rechazar</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {adminSec==="super"&&(<div style={{margin:"0 16px"}}><div style={s.pc}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                <div style={s.pT}>🛒 Supermercado ({superProds.length})</div>
                <button onClick={()=>setShowBulkImport(!showBulkImport)} style={{background:"#f59e0b",color:"#fff",border:"none",borderRadius:8,padding:"6px 12px",fontSize:12,fontWeight:700,cursor:"pointer"}}>
                  {showBulkImport?"✕ Cerrar":"📥 Carga masiva CSV"}
                </button>
              </div>
              {showBulkImport&&(
                <div style={{background:"#f8fafc",borderRadius:12,padding:14,marginBottom:12,border:"1px solid #e2e8f0"}}>
                  <div style={{fontSize:13,fontWeight:700,color:"#1e293b",marginBottom:8}}>📥 Importar productos desde CSV</div>
                  {/* DESCARGAR PLANTILLA */}
                  <button onClick={()=>{
                    const h="nombre,descripcion,precio,unidad,supercategoria,marca,stock,foto_url";const ex=["Pollo entero,Fresco del dia,8.50,kg,Proteinas,Granja Local,50,","Arroz cristal,Arroz blanco,2.00,kg,Granos y cereales,Cristal,100,","Aceite vegetal,Botella 1 litro,3.50,litro,Aceites y condimentos,Mazeite,80,"].join("\n");const csv=h+"\n"+ex;
                    const blob=new Blob([csv],{type:"text/csv"});
                    const url=URL.createObjectURL(blob);
                    const a=document.createElement("a");
                    a.href=url;a.download="plantilla_supermercado.csv";a.click();
                  }} style={{background:"#16a34a",color:"#fff",border:"none",borderRadius:8,padding:"8px 14px",fontSize:12,fontWeight:600,cursor:"pointer",width:"100%",marginBottom:10}}>
                    ⬇️ Descargar plantilla CSV
                  </button>
                  {/* SUBIR CSV */}
                  <label style={{display:"block",fontSize:12,color:"#64748b",marginBottom:6}}>Selecciona tu archivo CSV:</label>
                  <input type="file" accept=".csv,.txt" style={{width:"100%",marginBottom:8,fontSize:13}} onChange={e=>{
                    const file=e.target.files[0];
                    if(!file)return;
                    const reader=new FileReader();
                    reader.onload=ev=>processBulkCsv(ev.target.result);
                    reader.readAsText(file);
                  }}/>
                  {bulkMsg&&<div style={{fontSize:12,color:bulkMsg.includes("✅")?"#15803d":"#be123c",marginBottom:8,fontWeight:600}}>{bulkMsg}</div>}
                  {/* PREVIEW */}
                  {bulkData.length>0&&(
                    <div style={{maxHeight:200,overflowY:"auto",marginBottom:10}}>
                      <div style={{fontSize:11,color:"#64748b",marginBottom:4}}>Vista previa ({bulkData.length} productos):</div>
                      {bulkData.slice(0,5).map((p,i)=>(
                        <div key={i} style={{fontSize:11,padding:"4px 8px",background:"#fff",borderRadius:6,marginBottom:3,border:"1px solid #e2e8f0"}}>
                          <strong>{p.nombre}</strong> · ${p.precio} · {p.unidad} · {p.super_cat||p.categoria}
                        </div>
                      ))}
                      {bulkData.length>5&&<div style={{fontSize:11,color:"#94a3b8"}}>...y {bulkData.length-5} más</div>}
                    </div>
                  )}
                  {bulkData.length>0&&(
                    <button onClick={importBulkProducts} disabled={bulkLoading} style={{background:"#16a34a",color:"#fff",border:"none",borderRadius:8,padding:"10px",fontSize:13,fontWeight:700,cursor:"pointer",width:"100%"}}>
                      {bulkLoading?`Importando...`:`🚀 Importar ${bulkData.length} productos`}
                    </button>
                  )}
                  <div style={{fontSize:10,color:"#94a3b8",marginTop:8,lineHeight:1.4}}>
                    Columnas requeridas: nombre, precio · Opcionales: descripcion, unidad, supercategoria, marca, stock, foto_url
                  </div>
                </div>
              )}{superProds.map(p=>(
                <div key={p.id} style={{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",padding:"10px 12px",marginBottom:8}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                    {p.foto_url?<img src={p.foto_url} alt="" style={{width:46,height:46,borderRadius:8,objectFit:"cover",flexShrink:0}}/>:<div style={{width:46,height:46,borderRadius:8,background:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{p.emoji||"🛒"}</div>}
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{fontSize:13,fontWeight:700,color:"#0f172a"}}>{p.nombre}</div>
                      <div style={{fontSize:11,color:"#64748b"}}>{p.categoria} · <span style={{fontWeight:700,color:"#15803d"}}>${p.precio}</span>/{p.unidad}</div>
                      <div style={{display:"flex",gap:4,marginTop:3,flexWrap:"wrap"}}>
                        <span style={{fontSize:9,fontWeight:700,padding:"1px 7px",borderRadius:20,background:p.disponible===false?"#fee2e2":"#dcfce7",color:p.disponible===false?"#be123c":"#15803d"}}>{p.disponible===false?"⏸ Pausado":"● Activo"}</span>
                        {p.es_oferta&&<span style={{fontSize:9,background:"#fff7ed",color:"#c2410c",fontWeight:700,padding:"1px 7px",borderRadius:20}}>🏷️ En oferta</span>}
                      </div>
                    </div>
                  </div>
                  <div style={{display:"flex",gap:6}}>
                    <button onClick={async()=>{await supabase.from("productos_supermercado").update({disponible:p.disponible===false}).eq("id",p.id);loadAll();}} style={{flex:1,padding:"7px 4px",borderRadius:8,border:"none",fontSize:11,fontWeight:700,cursor:"pointer",background:p.disponible===false?"#dcfce7":"#fff7ed",color:p.disponible===false?"#15803d":"#c2410c"}}>{p.disponible===false?"▶️ Activar":"⏸️ Pausar"}</button>
                    <button onClick={async()=>{await supabase.from("productos_supermercado").update({es_oferta:!p.es_oferta}).eq("id",p.id);loadAll();}} style={{flex:1,padding:"7px 4px",borderRadius:8,border:"none",fontSize:11,fontWeight:700,cursor:"pointer",background:p.es_oferta?"#fff7ed":"#f0fdf4",color:p.es_oferta?"#c2410c":"#15803d"}}>{p.es_oferta?"🏷️ Quitar oferta":"🏷️ Poner oferta"}</button>
                    <button onClick={()=>deleteSuperProd(`sp_${p.id}`)} style={{flex:1,padding:"7px 4px",borderRadius:8,border:"none",fontSize:11,fontWeight:700,cursor:"pointer",background:"#fee2e2",color:"#be123c"}}>🗑️ Eliminar</button>
                    <button onClick={()=>{setEditingSPId(editingSPId===p.id?null:p.id);setEditSPData({nombre:p.nombre,marca:p.marca||"",presentacion:p.presentacion||"",descripcion:p.descripcion||"",precio:String(p.precio),unidad:p.unidad,emoji:p.emoji||"🛒",categoria:p.categoria,es_oferta:p.es_oferta||false});}} style={{flex:1,padding:"7px 4px",borderRadius:8,border:"none",fontSize:11,fontWeight:700,cursor:"pointer",background:"#eff6ff",color:"#1d4ed8"}}>✏️ Modificar</button>
                  </div>
                  {editingSPId===p.id&&(
                    <div style={{marginTop:10,background:"#f8fafc",borderRadius:10,padding:"12px",border:"1px solid #e2e8f0"}}>
                      <div style={{fontSize:12,fontWeight:700,color:"#1d4ed8",marginBottom:8}}>✏️ Modificar producto</div>
                      <div style={{display:"flex",gap:6,marginBottom:6}}><input style={{...s.inp,marginBottom:0,width:44}} placeholder="🛒" value={editSPData.emoji} onChange={e=>setEditSPData({...editSPData,emoji:e.target.value})}/><input style={{...s.inp,marginBottom:0,flex:1}} placeholder="Nombre *" value={editSPData.nombre} onChange={e=>setEditSPData({...editSPData,nombre:e.target.value})}/></div>
                      <div style={{display:"flex",gap:6,marginBottom:6}}><input style={{...s.inp,marginBottom:0,flex:1}} placeholder="Marca" value={editSPData.marca} onChange={e=>setEditSPData({...editSPData,marca:e.target.value})}/><input style={{...s.inp,marginBottom:0,flex:1}} placeholder="Presentación" value={editSPData.presentacion} onChange={e=>setEditSPData({...editSPData,presentacion:e.target.value})}/></div>
                      <div style={{display:"flex",gap:6,marginBottom:6}}><input style={{...s.inp,marginBottom:0,flex:1}} type="number" placeholder="Precio $" value={editSPData.precio} onChange={e=>setEditSPData({...editSPData,precio:e.target.value})}/><input style={{...s.inp,marginBottom:0,width:70}} placeholder="kg/L" value={editSPData.unidad} onChange={e=>setEditSPData({...editSPData,unidad:e.target.value})}/></div>
                      <select style={{...s.inp,background:"#fff",marginBottom:6}} value={editSPData.categoria} onChange={e=>setEditSPData({...editSPData,categoria:e.target.value})}>{SUPER_CATS.map(c=><option key={c}>{c}</option>)}</select>
                      <input style={{...s.inp,marginBottom:6}} placeholder="Descripción (opcional)" value={editSPData.descripcion} onChange={e=>setEditSPData({...editSPData,descripcion:e.target.value})}/>
                      <div onClick={()=>setEditSPData({...editSPData,es_oferta:!editSPData.es_oferta})} style={{display:"flex",alignItems:"center",gap:10,background:editSPData.es_oferta?"#fff7ed":"#f8fafc",border:`2px solid ${editSPData.es_oferta?"#f97316":"#e2e8f0"}`,borderRadius:10,padding:"10px 12px",cursor:"pointer",marginBottom:8}}>
                        <div style={{width:20,height:20,borderRadius:5,background:editSPData.es_oferta?"#f97316":"#e2e8f0",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{editSPData.es_oferta&&<span style={{color:"#fff",fontSize:13,fontWeight:900}}>✓</span>}</div>
                        <div style={{fontSize:12,fontWeight:700,color:editSPData.es_oferta?"#c2410c":"#374151"}}>🏷️ Mostrar en Ofertas del Supermercado</div>
                      </div>
                      <div style={{display:"flex",gap:6}}>
                        <button onClick={async()=>{if(!editSPData.nombre||!editSPData.precio)return;await supabase.from("productos_supermercado").update({nombre:editSPData.nombre,marca:editSPData.marca||null,presentacion:editSPData.presentacion||null,descripcion:editSPData.descripcion||null,precio:parseFloat(editSPData.precio),unidad:editSPData.unidad,emoji:editSPData.emoji,categoria:editSPData.categoria,es_oferta:editSPData.es_oferta}).eq("id",p.id);setEditingSPId(null);loadAll();}} style={{flex:1,padding:"8px",borderRadius:8,border:"none",fontSize:12,fontWeight:700,cursor:"pointer",background:"#15803d",color:"#fff"}}>✅ Guardar</button>
                        <button onClick={()=>setEditingSPId(null)} style={{flex:1,padding:"8px",borderRadius:8,border:"none",fontSize:12,fontWeight:600,cursor:"pointer",background:"#f1f5f9",color:"#64748b"}}>Cancelar</button>
                      </div>
                    </div>
                  )}
                </div>
              ))}<div style={{marginTop:14}}><label style={s.lbl}>Categoría *</label><select style={{...s.inp,background:"#fff"}} value={newSP.categoria} onChange={e=>setNewSP({...newSP,categoria:e.target.value})}>{SUPER_CATS.map(c=><option key={c}>{c}</option>)}</select><div style={{display:"flex",gap:8,marginBottom:8}}><input style={{...s.inp,marginBottom:0,width:50}} placeholder="🛒" value={newSP.emoji} onChange={e=>setNewSP({...newSP,emoji:e.target.value})}/><input style={{...s.inp,marginBottom:0,flex:1}} placeholder="Nombre *" value={newSP.nombre} onChange={e=>setNewSP({...newSP,nombre:e.target.value})}/></div><div style={{display:"flex",gap:8,marginBottom:8}}><input style={{...s.inp,marginBottom:0,flex:1}} placeholder="Marca" value={newSP.marca} onChange={e=>setNewSP({...newSP,marca:e.target.value})}/><input style={{...s.inp,marginBottom:0,flex:1}} placeholder="Presentación" value={newSP.presentacion} onChange={e=>setNewSP({...newSP,presentacion:e.target.value})}/></div><div style={{display:"flex",gap:8,marginBottom:8}}><input style={{...s.inp,marginBottom:0,flex:1}} type="number" placeholder="Precio $" value={newSP.precio} onChange={e=>setNewSP({...newSP,precio:e.target.value})}/><input style={{...s.inp,marginBottom:0,width:80}} placeholder="kg/L" value={newSP.unidad} onChange={e=>setNewSP({...newSP,unidad:e.target.value})}/></div><input style={s.inp} placeholder="Descripción (opcional)" value={newSP.descripcion} onChange={e=>setNewSP({...newSP,descripcion:e.target.value})}/><label style={s.lbl}>Foto</label>{spFotoPreview&&<img src={spFotoPreview} alt="" style={{width:"100%",height:100,objectFit:"cover",borderRadius:10,marginBottom:8}}/>}<input type="file" accept="image/*" style={{marginBottom:10,fontSize:13}} onChange={e=>{const f=e.target.files[0];if(f){setSpFoto(f);setSpFotoPreview(URL.createObjectURL(f));}}}/><div style={{marginBottom:10}}>
  <div style={{fontSize:11,fontWeight:700,color:"#374151",marginBottom:6}}>¿Es una oferta o producto destacado?</div>
  <div onClick={()=>setNewSP({...newSP,es_oferta:!newSP.es_oferta})} style={{display:"flex",alignItems:"center",gap:12,background:newSP.es_oferta?"#fff7ed":"#f8fafc",border:`2px solid ${newSP.es_oferta?"#f97316":"#e2e8f0"}`,borderRadius:12,padding:"12px 14px",cursor:"pointer",transition:"all 0.15s"}}>
    <div style={{width:22,height:22,borderRadius:6,background:newSP.es_oferta?"#f97316":"#e2e8f0",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
      {newSP.es_oferta&&<span style={{color:"#fff",fontSize:14,fontWeight:900}}>✓</span>}
    </div>
    <div>
      <div style={{fontSize:13,fontWeight:700,color:newSP.es_oferta?"#c2410c":"#374151"}}>🏷️ Mostrar en "Ofertas del Supermercado"</div>
      <div style={{fontSize:11,color:"#94a3b8",marginTop:1}}>{newSP.es_oferta?"Aparecerá destacado en la pantalla de inicio":"Activa para que aparezca en la sección de ofertas"}</div>
    </div>
  </div>
</div><button style={s.btn} onClick={addSuperProd} disabled={loading}>{loading?"Guardando...":"Agregar"}</button></div></div></div>)}

          {adminSec==="clasificados_pend"&&(
            <div style={{margin:"0 16px"}}>
              <div style={s.pc}>
                <div style={s.pT}>🚗 Clasificados por aprobar ({pendClasificados.length})</div>
                {pendClasificados.length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No hay clasificados pendientes ✓</div>}
                {pendClasificados.map(c=>(
                  <div key={c.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}>
                    {c.foto1_url&&<img src={c.foto1_url} alt="" style={{width:"100%",height:140,objectFit:"cover",borderRadius:10,marginBottom:8}}/>}
                    <div style={{fontSize:11,color:"#7e22ce",fontWeight:700,marginBottom:2}}>{c.tipo}</div>
                    <div style={{fontSize:13,fontWeight:700}}>{c.titulo}</div>
                    <div style={{fontSize:12,color:"#22c55e",fontWeight:700}}>${parseFloat(c.precio).toLocaleString()}{c.negociable?" · Negociable":""}</div>
                    <div style={{display:"flex",flexWrap:"wrap",gap:4,margin:"4px 0 6px"}}>
                      {c.marca&&<span style={{fontSize:11,background:"#f1f5f9",padding:"2px 7px",borderRadius:20}}>{c.marca}</span>}
                      {c.anio&&<span style={{fontSize:11,background:"#f1f5f9",padding:"2px 7px",borderRadius:20}}>{c.anio}</span>}
                      {c.kilometraje&&<span style={{fontSize:11,background:"#f1f5f9",padding:"2px 7px",borderRadius:20}}>{c.kilometraje}</span>}
                      {c.sector&&<span style={{fontSize:11,background:"#f1f5f9",padding:"2px 7px",borderRadius:20}}>📍 {c.sector}</span>}
                    </div>
                    {c.descripcion&&<div style={{fontSize:11,color:"#94a3b8",marginBottom:6}}>{c.descripcion}</div>}
                    <div style={{fontSize:11,color:"#64748b",marginBottom:10}}>👤 {c.vendedor_nombre} · 📱 {c.vendedor_telefono}</div>
                    <div style={{display:"flex",gap:8}}>
                      <button onClick={async()=>{setPendClasificados(prev=>prev.filter(x=>x.id!==c.id));await supabase.from("clasificados").update({aprobado:true}).eq("id",c.id);loadClasificados();await loadAdmin();}} style={{...s.apvBtn,background:"#22c55e",color:"#fff"}}>✓ Aprobar</button>
                      <button onClick={async()=>{if(!window.confirm("¿Rechazar este clasificado?"))return;setPendClasificados(prev=>prev.filter(x=>x.id!==c.id));await supabase.from("clasificados").delete().eq("id",c.id);await loadAdmin();}} style={{...s.apvBtn,background:"#ef4444",color:"#fff"}}>✗ Rechazar</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {adminSec==="suscripciones"&&(
            <div style={{margin:"0 16px"}}>
              <div style={s.pc}>
                <div style={s.pT}>💳 Gestión de Suscripciones</div>
                <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"}}>
                  <div style={s.statCard}><div style={{...s.statNum,fontSize:18,color:"#22c55e"}}>{suscripciones.filter(s=>s.suscripcion_activa&&s.suscripcion_pagada).length}</div><div style={s.statLbl}>Al día</div></div>
                  <div style={s.statCard}><div style={{...s.statNum,fontSize:18,color:"#f59e0b"}}>{suscripciones.filter(s=>s.meses_gratis_restantes>0).length}</div><div style={s.statLbl}>En período gratis</div></div>
                  <div style={s.statCard}><div style={{...s.statNum,fontSize:18,color:"#ef4444"}}>{suscripciones.filter(s=>!s.suscripcion_pagada&&s.meses_gratis_restantes===0).length}</div><div style={s.statLbl}>Vencidas</div></div>
                </div>
                <div style={{fontSize:12,color:"#22c55e",fontWeight:600,marginBottom:8}}>💰 Ingreso mensual potencial: ${(suscripciones.filter(s=>s.suscripcion_activa&&s.meses_gratis_restantes===0).length*8).toFixed(0)}/mes</div>
                {suscripciones.map(s=>(
                  <div key={s.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                      {s.logo_url?<img src={s.logo_url} alt="" style={{width:36,height:36,borderRadius:"50%",objectFit:"cover"}}/>:<div style={{width:36,height:36,borderRadius:"50%",background:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center"}}>🏪</div>}
                      <div style={{flex:1}}>
                        <div style={{fontSize:13,fontWeight:700}}>{s.negocio}</div>
                        <div style={{fontSize:11,color:"#64748b"}}>@{s.usuario} · {s.tipo_negocio||"Restaurante"}</div>
                      </div>
                      <span style={{fontSize:11,fontWeight:700,padding:"3px 8px",borderRadius:8,
                        background:s.meses_gratis_restantes>0?"#fef9c3":s.suscripcion_pagada?"#dcfce7":"#fee2e2",
                        color:s.meses_gratis_restantes>0?"#854d0e":s.suscripcion_pagada?"#15803d":"#be123c"}}>
                        {s.meses_gratis_restantes>0?`🎁 ${s.meses_gratis_restantes}m gratis`:s.suscripcion_pagada?"✓ Pagada":"⚠️ Vencida"}
                      </span>
                    </div>
                    <div style={{fontSize:11,color:"#64748b",marginBottom:8}}>
                      Vence: {s.suscripcion_vence?.slice(0,10)} · Estado: {s.suscripcion_activa?"Activo":"Suspendido"}
                    </div>
                    <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                      {!s.suscripcion_pagada&&s.meses_gratis_restantes===0&&(
                        <button onClick={async()=>{
                          const nuevaFecha=new Date();nuevaFecha.setMonth(nuevaFecha.getMonth()+1);
                          await supabase.from("proveedores").update({suscripcion_pagada:true,suscripcion_activa:true,suscripcion_vence:nuevaFecha.toISOString().split("T")[0]}).eq("id",s.id);
                          loadSuscripciones();loadAll();
                        }} style={{...s.btnGreen,fontSize:11,borderRadius:8,padding:"6px 10px"}}>✓ Marcar pagada (+1 mes)</button>
                      )}
                      {s.suscripcion_activa&&s.meses_gratis_restantes===0&&s.suscripcion_pagada&&(
                        <button onClick={async()=>{await supabase.from("proveedores").update({suscripcion_pagada:false,suscripcion_activa:false}).eq("id",s.id);loadSuscripciones();loadAll();}} style={{...s.btnAmber,fontSize:11,borderRadius:8,padding:"6px 10px"}}>⏸️ Suspender</button>
                      )}
                      {!s.suscripcion_activa&&(
                        <button onClick={async()=>{await supabase.from("proveedores").update({suscripcion_activa:true,suscripcion_pagada:true}).eq("id",s.id);loadSuscripciones();loadAll();}} style={{...s.btnGreen,fontSize:11,borderRadius:8,padding:"6px 10px"}}>▶️ Reactivar</button>
                      )}
                      {s.meses_gratis_restantes>0&&(
                        <button onClick={async()=>{await supabase.from("proveedores").update({meses_gratis_restantes:s.meses_gratis_restantes-1,suscripcion_vence:new Date(new Date(s.suscripcion_vence)-30*24*60*60*1000).toISOString().split("T")[0]}).eq("id",s.id);loadSuscripciones();}} style={{...s.btnAmber,fontSize:11,borderRadius:8,padding:"6px 10px"}}>-1 mes gratis</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button style={{...s.btnG,margin:"8px 16px 16px"}} onClick={()=>{setProvMode("login");setPendProds([]);setPendResenas([]);setAllProveedores([]);setPedidos([]);}}>Cerrar sesión admin</button>
        </>)}
      </div>)}

      {/* BOTÓN FLOTANTE */}
      {count>0&&!sheet&&tab!=="Proveedores"&&(<div style={{position:"fixed",bottom:16,left:"50%",transform:"translateX(-50%)",zIndex:150,width:"calc(100% - 32px)",maxWidth:398}}><button style={{...s.btn,margin:0,display:"flex",justifyContent:"space-between",alignItems:"center"}} onClick={()=>setSheet("cart")}><span>🛒 Ver pedido ({count})</span><span>${total.toFixed(2)}</span></button></div>)}

      {/* FLOATING CART BUTTON */}
      {(()=>{
        const totalItems=Object.values(cart).reduce((a,i)=>a+i.qty,0)+Object.values(cartRest).reduce((a,i)=>a+i.qty,0)+Object.values(cartNegocio).reduce((a,i)=>a+i.qty,0);
        if(totalItems===0||["cart","cartRest","cartNegocio","cartGlobal","checkout"].includes(sheet))return null;
        // Contar proveedores activos
        const gruposRest={};Object.values(cartRest).forEach(i=>{const k=i.kitchen||"Sin proveedor";if(!gruposRest[k])gruposRest[k]=true;});
        const gruposNeg=cartNegocioNombre?{[cartNegocioNombre]:true}:{};
        const totalProveedores=Object.keys(gruposRest).length+Object.keys(gruposNeg).length+(Object.values(cart).length>0?1:0);
        return(
          <div style={{position:"fixed",bottom:24,right:16,zIndex:150}}>
            <button onClick={()=>setSheet("cartGlobal")} style={{background:P,color:"#fff",border:"none",borderRadius:totalProveedores>1?"28px":"50%",width:totalProveedores>1?"auto":"58px",height:58,fontSize:18,cursor:"pointer",boxShadow:"0 4px 16px rgba(22,163,74,0.4)",display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:totalProveedores>1?"0 18px":"0",position:"relative",fontWeight:800}}>
              🛒
              {totalProveedores>1&&<span style={{fontSize:12}}>{totalProveedores} tiendas</span>}
              <span style={{position:"absolute",top:-4,right:-4,background:"#f59e0b",color:"#fff",borderRadius:"50%",width:22,height:22,fontSize:11,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center"}}>
                {totalItems}
              </span>
            </button>
          </div>
        );
      })()}

      {/* ═══════════════════════════════════════════════ */}
      {/* SHEET CARRITO GLOBAL — TODOS LOS PROVEEDORES   */}
      {/* ═══════════════════════════════════════════════ */}
      {sheet==="cartGlobal"&&(()=>{
        // Construir grupos desde todos los carritos
        const grupos={};
        // — Supermercado (cart)
        const superItems=Object.values(cart);
        if(superItems.length>0){
          grupos["__super__"]={nombre:"Supermercado",tipo:"super",wa:null,items:superItems,delivery:true,costo:zonaSel?.costo_delivery||2,gratis:parseFloat(process?.env?.NEXT_PUBLIC_FREE_MIN||20),retiro:false};
        }
        // — Feria de comidas (cartRest)
        Object.values(cartRest).forEach(i=>{
          const k=i.kitchen||"Sin proveedor";
          if(!grupos[k])grupos[k]={nombre:k,tipo:"rest",wa:i.kitchenWa||"",items:[],delivery:i.kitchenDelivery,costo:i.kitchenDeliveryCosto||0,gratis:i.kitchenDeliveryGratis||15,retiro:i.kitchenRetiro};
          grupos[k].items.push(i);
        });
        // — Negocio local (cartNegocio)
        const negItems=Object.values(cartNegocio);
        if(negItems.length>0&&cartNegocioNombre){
          grupos[cartNegocioNombre]={nombre:cartNegocioNombre,tipo:"negocio",wa:cartNegocioWa||"",items:negItems,delivery:negocioActivo?.delivery_propio,costo:parseFloat(negocioActivo?.delivery_costo||0),gratis:parseFloat(negocioActivo?.delivery_gratis_desde||15),retiro:negocioActivo?.permite_retiro};
        }
        const proveedores=Object.values(grupos);
        const esMultiple=proveedores.length>1;
        const datosOk=form.nombre&&form.telefono;
        const dirCliente=[zonaSel?.zona,addr.calle,addr.referencia].filter(Boolean).join(", ");
        // Cargar historial y favoritos al abrir el carrito
        React.useEffect(()=>{
          if(form.telefono){loadClienteHistorial(form.telefono);loadFavoritos(form.telefono);}
        },[form.telefono]);
        if(proveedores.length===0&&clienteHistorial.length===0)return null;
        const enviarProveedor=async(prov,numPed)=>{
          if(!datosOk)return alert("Completa tu nombre y teléfono antes de enviar");
          if(prov.tipo==="super"){setSheet("cart");return;}
          if(!prov.wa){alert(`${prov.nombre} no tiene WhatsApp configurado.`);return;}
          const sub=prov.items.reduce((a,i)=>a+i.price*i.qty,0);
          const del=prov.delivery?(sub>=prov.gratis?0:prov.costo):0;
          const total=sub+del;
          const aceptaPromo=!!consentPromo[prov.nombre];
          const msg=buildGlobalWaMsg(prov.nombre,prov.items,total,del,numPed,form.nombre,form.telefono,dirCliente);
          const raw=prov.wa.replace(/\D/g,"");
          const num=raw.startsWith("0")?"58"+raw.slice(1):raw.startsWith("58")?raw:"58"+raw;
          const ref=`PED-${Date.now().toString().slice(-6)}`;
          // Guardar en DB
          if(prov.tipo==="rest"){
            const restObj=allRestaurantes?.find(r=>r.negocio===prov.nombre);
            await guardarPedidoRestaurante(restObj?.id||null,prov.items,sub,del,total,ref,aceptaPromo,prov.nombre);
            const nuevoCart={...cartRest};prov.items.forEach(i=>delete nuevoCart[i.id]);setCartRest(nuevoCart);
          } else if(prov.tipo==="negocio"){
            await guardarPedidoRestaurante(cartNegocioId,prov.items,sub,del,total,ref);
            setCartNegocio({});
          }
          setPedidoEnviadoA(prov.nombre);
          window.open("https://wa.me/"+num+"?text="+encodeURIComponent(msg),"_blank");
        };
        // Numeración secuencial por sesión
        return(
          <div style={s.ov} onClick={()=>setSheet(null)}>
            <div style={s.sh} onClick={e=>e.stopPropagation()}>
              <div style={s.hnd}/>
              {/* CONFIRMACIÓN POST-ENVÍO */}
              {pedidoEnviadoA&&(
                <div style={{background:"#f0fdf4",border:"1px solid #86efac",borderRadius:12,padding:"12px 14px",marginBottom:14,textAlign:"center"}}>
                  <div style={{fontSize:16,fontWeight:800,color:"#15803d",marginBottom:4}}>✅ Pedido enviado a {pedidoEnviadoA}</div>
                  {proveedores.filter(p=>p.nombre!==pedidoEnviadoA&&p.items.length>0).length>0&&(
                    <div style={{fontSize:12,color:"#64748b",marginTop:4}}>¿Deseas enviar el pedido a otro proveedor?</div>
                  )}
                  <button style={{marginTop:8,fontSize:11,color:"#64748b",background:"none",border:"none",cursor:"pointer",textDecoration:"underline"}} onClick={()=>setPedidoEnviadoA(null)}>Cerrar aviso</button>
                </div>
              )}
              {/* TÍTULO */}
              <div style={{fontSize:17,fontWeight:800,color:"#0f172a",marginBottom:4}}>
                {esMultiple?`🛒 Tu carrito — ${proveedores.length} tiendas`:"🛒 Tu pedido"}
              </div>
              {esMultiple&&(
                <div style={{fontSize:12,color:"#64748b",background:"#f8fafc",borderRadius:10,padding:"8px 12px",marginBottom:12,lineHeight:1.5}}>
                  Cada tienda recibirá su pedido de forma independiente.
                </div>
              )}
              {/* DATOS DEL CLIENTE */}
              <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:12,padding:"12px 14px",marginBottom:14}}>
                <div style={{fontSize:12,fontWeight:700,color:"#15803d",marginBottom:8}}>👤 Tus datos de contacto</div>
                <input style={{...s.inp,marginBottom:8}} placeholder="Nombre y apellido *" value={form.nombre} onChange={e=>setForm({...form,nombre:e.target.value})}/>
                <input style={{...s.inp,marginBottom:8}} placeholder="Tu WhatsApp * (Ej: 04XX-XXXXXXX)" value={form.telefono} onChange={e=>setForm({...form,telefono:e.target.value})}/>
                <div style={{fontSize:11,fontWeight:600,color:"#374151",marginBottom:4}}>📍 Zona de entrega</div>
                <select style={{...s.inp,marginBottom:8,background:"#fff",color:zonaSelId?"#0f172a":"#94a3b8"}} value={zonaSelId} onChange={e=>{setZonaSelId(e.target.value);setZonaSel(zonas.find(z=>z.id===e.target.value)||null);}}>
                  <option value="">Selecciona tu zona / barrio...</option>
                  {zonas.map(z=><option key={z.id} value={z.id}>{z.zona}{z.municipio&&z.municipio!=="San Fernando"?` — ${z.municipio}`:""}</option>)}
                </select>
                <div style={{fontSize:11,fontWeight:600,color:"#374151",marginBottom:4}}>🏠 Dirección exacta</div>
                <input style={{...s.inp,marginBottom:6}} placeholder="Calle, carrera, av. y número" value={addr.calle} onChange={e=>setAddr({...addr,calle:e.target.value})}/>
                <div style={{fontSize:11,fontWeight:600,color:"#374151",marginBottom:4}}>🗺️ Punto de referencia</div>
                <input style={{...s.inp,marginBottom:0}} placeholder="Ej: Casa azul, frente al CANTV..." value={addr.referencia} onChange={e=>setAddr({...addr,referencia:e.target.value})}/>
                {!datosOk&&<div style={{fontSize:11,color:"#dc2626",marginTop:6}}>⚠️ Nombre y teléfono son obligatorios</div>}
              </div>
              {/* BLOQUES POR PROVEEDOR */}
              {proveedores.map((prov,idx)=>{
                if(prov.items.length===0)return null;
                const sub=prov.items.reduce((a,i)=>a+i.price*i.qty,0);
                const del=prov.delivery?(sub>=prov.gratis?0:prov.costo):0;
                const total=sub+del;
                const falta=prov.delivery&&del>0?parseFloat((prov.gratis-sub).toFixed(2)):0;
                const numPed=idx+1;
                const yaEnviado=pedidoEnviadoA===prov.nombre;
                return(
                  <div key={prov.nombre} style={{background:yaEnviado?"#f0fdf4":"#fff",border:`1.5px solid ${yaEnviado?"#86efac":"#e2e8f0"}`,borderRadius:14,padding:"14px",marginBottom:12,boxShadow:"0 2px 8px rgba(0,0,0,0.04)",opacity:yaEnviado?0.7:1}}>
                    {/* Header */}
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                      <div style={{width:36,height:36,borderRadius:"50%",background:getAvatarColor(prov.nombre),display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:900,fontSize:15,flexShrink:0}}>
                        {prov.nombre[0]?.toUpperCase()}
                      </div>
                      <div style={{flex:1}}>
                        <div style={{fontWeight:800,fontSize:14,color:"#0f172a"}}>{prov.nombre}</div>
                        <div style={{fontSize:10,color:"#64748b"}}>
                          {prov.tipo==="super"?"🛒 Supermercado":prov.delivery?"🛵 Delivery":prov.retiro?"🏃 Retiro":"📦 Consultar"}
                          {prov.eta&&<span style={{marginLeft:4,background:"#fef3c7",color:"#92400e",padding:"1px 6px",borderRadius:6,fontSize:10,fontWeight:700}}>⏱️ {prov.eta}</span>}
                        </div>
                      </div>
                      <div style={{textAlign:"right"}}>
                        <div style={{fontWeight:900,fontSize:15,color:"#ef4444"}}>${total.toFixed(2)}</div>
                        <div style={{fontSize:10,color:"#94a3b8"}}>Pedido #{String(numPed).padStart(3,"0")}</div>
                      </div>
                    </div>
                    {/* Items */}
                    {prov.items.map(i=>(
                      <div key={i.id} style={{display:"flex",alignItems:"center",gap:8,padding:"5px 0",borderBottom:"1px solid #f8fafc"}}>
                        <span style={{fontSize:i.isPromo?11:16,background:i.isPromo?"#fdf4ff":undefined,color:i.isPromo?"#7e22ce":undefined,padding:i.isPromo?"2px 6px":undefined,borderRadius:i.isPromo?7:undefined,fontWeight:i.isPromo?700:undefined,flexShrink:0}}>
                          {i.isPromo?"🔥 PROMO":i.emoji||"🛍️"}
                        </span>
                        <div style={{flex:1}}>
                          <div style={{fontSize:12,fontWeight:600,color:"#0f172a"}}>{i.name}</div>
                          {i.nota&&<div style={{fontSize:10,color:"#7e22ce"}}>📝 {i.nota}</div>}
                        </div>
                        <div style={s.qR}>
                          <button style={s.qB} onClick={()=>{
                            if(prov.tipo==="rest"){const n={...cartRest};n[i.id].qty>1?n[i.id]={...n[i.id],qty:n[i.id].qty-1}:delete n[i.id];setCartRest(n);}
                            else if(prov.tipo==="negocio"){const n={...cartNegocio};n[i.id].qty>1?n[i.id]={...n[i.id],qty:n[i.id].qty-1}:delete n[i.id];setCartNegocio(n);}
                            else{rem(i.id);}
                          }}>−</button>
                          <span style={s.qN}>{i.qty}</span>
                          <button style={s.qB} onClick={()=>{
                            if(prov.tipo==="rest")setCartRest(c=>({...c,[i.id]:{...c[i.id],qty:c[i.id].qty+1}}));
                            else if(prov.tipo==="negocio")setCartNegocio(c=>({...c,[i.id]:{...c[i.id],qty:c[i.id].qty+1}}));
                            else add(i);
                          }}>+</button>
                        </div>
                        <span style={{fontSize:13,fontWeight:700,color:P,minWidth:46,textAlign:"right"}}>${(i.price*i.qty).toFixed(2)}</span>
                      </div>
                    ))}
                    {/* Delivery gratis */}
                    {prov.delivery&&prov.tipo!=="super"&&(
                      <div style={{marginTop:8,padding:"6px 10px",borderRadius:8,background:del===0?"#f0fdf4":"#fffbeb",border:`1px solid ${del===0?"#bbf7d0":"#fde68a"}`}}>
                        {del===0
                          ?<span style={{fontSize:12,fontWeight:700,color:"#15803d"}}>🚚 Delivery gratis</span>
                          :<span style={{fontSize:12,color:"#92400e"}}>🟡 Te faltan <strong>${falta.toFixed(2)}</strong> para delivery gratis</span>
                        }
                      </div>
                    )}
                    {/* Total fila */}
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:8,paddingTop:8,borderTop:"1px solid #f1f5f9",fontSize:12}}>
                      <span style={{color:"#64748b"}}>{del===0?(prov.delivery?"Delivery incluido":"Sin delivery"):`Delivery: $${del.toFixed(2)}`}</span>
                      <span style={{fontWeight:800,color:"#0f172a",fontSize:14}}>Total: <span style={{color:"#ef4444"}}>${total.toFixed(2)}</span></span>
                    </div>
                    {/* Consentimiento promos — solo para comida y negocios */}
                    {prov.tipo!=="super"&&(
                      <div style={{marginTop:10,padding:"8px 12px",background:"#f8fafc",borderRadius:10,border:"1px solid #e2e8f0"}}>
                        <label style={{display:"flex",alignItems:"flex-start",gap:10,cursor:"pointer"}}>
                          <input type="checkbox" checked={!!consentPromo[prov.nombre]} onChange={e=>setConsentPromo(c=>({...c,[prov.nombre]:e.target.checked}))} style={{marginTop:2,width:16,height:16,accentColor:"#25D366",flexShrink:0,cursor:"pointer"}}/>
                          <div style={{fontSize:11,color:"#0f172a",lineHeight:1.4}}>
                            ¿Recibir promociones de <strong>{prov.nombre}</strong>?
                            <span style={{color:"#64748b",display:"block",fontSize:10,marginTop:1}}>Responde BAJA para cancelar en cualquier momento.</span>
                          </div>
                        </label>
                      </div>
                    )}
                    {/* Botón enviar */}
                    {yaEnviado
                      ?<div style={{textAlign:"center",padding:"10px 0",fontSize:13,fontWeight:700,color:"#15803d"}}>✅ Pedido enviado</div>
                      :prov.tipo==="super"
                        ?<button style={{width:"100%",background:"#f1f5f9",color:"#0f172a",border:"1px solid #e2e8f0",borderRadius:12,padding:"11px",fontSize:13,fontWeight:700,cursor:"pointer",marginTop:10}} onClick={()=>setSheet("cart")}>🛒 Ver pedido supermercado →</button>
                        :!prov.wa
                          ?<div style={{...s.msg(false),marginTop:8}}>⚠️ {prov.nombre} no tiene WhatsApp configurado</div>
                          :<button style={{width:"100%",background:datosOk?"#25D366":"#94a3b8",color:"#fff",border:"none",borderRadius:12,padding:"12px",fontSize:13,fontWeight:800,cursor:datosOk?"pointer":"not-allowed",marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",gap:6}} onClick={()=>enviarProveedor(prov,numPed)}>
                            📲 Pedir a {prov.nombre}
                          </button>
                    }
                  </div>
                );
              })}
              {esMultiple&&(
                <div style={{fontSize:11,color:"#94a3b8",textAlign:"center",padding:"4px 0 8px",lineHeight:1.5}}>
                  Cada proveedor recibe <strong>solo su pedido</strong>. Envíalos en el orden que quieras.
                </div>
              )}
              {/* HISTORIAL DE PEDIDOS DEL CLIENTE */}
              {form.telefono&&clienteHistorial.length>0&&(
                <div style={{marginTop:8,borderTop:"1px solid #f1f5f9",paddingTop:12}}>
                  <div style={{fontSize:13,fontWeight:800,color:"#0f172a",marginBottom:10}}>🕐 Mis pedidos anteriores</div>
                  {clienteHistorial.slice(0,5).map(ped=>{
                    const est={nuevo:"🆕",recibido:"📥",esperando_pago:"💳",preparando:"👨‍🍳",enviado:"🚀",entregado:"✅",cancelado:"❌"}[ped.estado||"nuevo"]||"🆕";
                    return(
                      <div key={ped.id} style={{background:"#f8fafc",borderRadius:12,padding:"10px 12px",marginBottom:8,border:"1px solid #e2e8f0"}}>
                        <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                          <div style={{fontSize:12,fontWeight:700,color:"#0f172a"}}>{ped.proveedor_nombre||"Pedido"}</div>
                          <span style={{fontSize:11,color:"#64748b"}}>{est} {ped.ref}</span>
                        </div>
                        <div style={{fontSize:11,color:"#64748b",marginBottom:6}}>
                          {(ped.items||[]).map(i=>`${i.nombre} x${i.qty||1}`).join(" · ")}
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                          <span style={{fontSize:12,fontWeight:700,color:"#22c55e"}}>${(ped.total||0).toFixed(2)}</span>
                          <button onClick={()=>{
                            // Reagregar items al carrito según tipo
                            (ped.items||[]).forEach(it=>{
                              if(it.isPromo){
                                setCartRest(c=>({...c,[`promo_hist_${it.nombre}`]:{id:`promo_hist_${it.nombre}`,name:it.nombre,price:it.precio||0,qty:it.qty||1,kitchen:ped.proveedor_nombre,kitchenWa:"",isPromo:true,emoji:"🔥"}}));
                              } else {
                                setCartRest(c=>({...c,[`hist_${it.nombre}`]:{id:`hist_${it.nombre}`,name:it.nombre,price:it.precio||0,qty:it.qty||1,kitchen:ped.proveedor_nombre,kitchenWa:"",emoji:"🍽️"}}));
                              }
                            });
                            setPmsg("✅ Productos reagregados al carrito");
                          }} style={{fontSize:11,background:"#f0fdf4",color:"#15803d",border:"1px solid #bbf7d0",borderRadius:8,padding:"5px 10px",fontWeight:700,cursor:"pointer"}}>
                            🔄 Volver a pedir
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              <button style={s.btnG} onClick={()=>setSheet(null)}>← Seguir comprando</button>
            </div>
          </div>
        );
      })()}

      {/* SHEET CARRITO NEGOCIO LOCAL */}
      {sheet==="cartNegocio"&&(setSheet("cartGlobal"),null)}{false&&sheet==="cartNegocio_disabled"&&(<div style={s.ov} onClick={()=>setSheet(null)}><div style={s.sh} onClick={e=>e.stopPropagation()}>
        <div style={s.hnd}/>
        <div style={s.shT}>Pedido — {cartNegocioNombre}</div>
        <div style={s.ib}>
          <label style={s.lbl}>Zona de entrega</label>
          <select style={{...s.inp,marginBottom:8,background:"#fff"}} value={zonaSelId} onChange={e=>{setZonaSelId(e.target.value);setZonaSel(zonas.find(z=>z.id===e.target.value)||null);}}>
            <option value="">Selecciona tu zona...</option>
            {zonas.map(z=><option key={z.id} value={z.id}>{z.municipio} — {z.zona}</option>)}
          </select>
          <label style={s.lbl}>Calle y referencia</label>
          <input style={{...s.inp,marginBottom:0}} placeholder="Calle Principal #47..." value={addr.calle} onChange={e=>setAddr({...addr,calle:e.target.value})}/>
        </div>
        {Object.values(cartNegocio).map(i=>(<div key={i.id} style={s.ci}><span style={{fontSize:22,width:32,textAlign:"center"}}>🛍️</span><div style={{flex:1}}><div style={{fontSize:13,fontWeight:500}}>{i.name}</div>{i.marca&&<div style={{fontSize:10,color:"#94a3b8"}}>{i.marca}</div>}</div><div style={s.qR}><button style={s.qB} onClick={()=>{const n={...cartNegocio};n[i.id].qty>1?n[i.id]={...n[i.id],qty:n[i.id].qty-1}:delete n[i.id];setCartNegocio(n);}}>-</button><span style={s.qN}>{i.qty}</span><button style={s.qB} onClick={()=>setCartNegocio(c=>({...c,[i.id]:{...c[i.id],qty:c[i.id].qty+1}}))}>+</button></div><div style={{fontSize:13,fontWeight:700,color:P,marginLeft:8}}>${(i.price*i.qty).toFixed(2)}</div></div>))}
        {(()=>{
          const negItems=Object.values(cartNegocio);
          const negSub=negItems.reduce((a,i)=>a+i.price*i.qty,0);
          const negTieneDelivery=negocioActivo?.delivery_propio;
          const negCostoDelivery=parseFloat(negocioActivo?.delivery_costo||0);
          const negGratisDesde=parseFloat(negocioActivo?.delivery_gratis_desde||15);
          const negDelGratis=negSub>=negGratisDesde;
          const negDel=negTieneDelivery?(negDelGratis?0:negCostoDelivery):0;
          const negFaltaParaGratis=negTieneDelivery&&!negDelGratis?(negGratisDesde-negSub):0;
          const negTotal=negSub+negDel;
          const negRef=`NEG-${Date.now().toString().slice(-5)}`;
          const negWaRaw=(cartNegocioWa||"").replace(/\D/g,"");const negWaNum=negWaRaw.startsWith("0")?"58"+negWaRaw.slice(1):negWaRaw.startsWith("58")?negWaRaw:"58"+negWaRaw;
          return(<>
            <div style={{marginTop:10}}>
              <div style={s.sr}><span style={s.sL}>Subtotal</span><span style={s.sV}>${negSub.toFixed(2)}</span></div>
              <div style={s.sr}>
                <span style={s.sL}>Delivery</span>
                {!negTieneDelivery
                  ?<span style={{fontSize:12,color:"#64748b"}}>🏃 Solo retiro</span>
                  :negDelGratis
                  ?<span style={{fontSize:13,fontWeight:800,color:"#15803d"}}>🚚 GRATIS</span>
                  :<span style={s.sV}>${negDel.toFixed(2)}</span>
                }
              </div>
              {negFaltaParaGratis>0&&(
                <div style={{background:"#f0fdf4",borderRadius:8,padding:"6px 10px",fontSize:11,color:"#15803d",fontWeight:600,marginTop:4}}>
                  🎁 Agrega <strong>${negFaltaParaGratis.toFixed(2)}</strong> más y el delivery es GRATIS
                </div>
              )}
              <div style={s.tR}><span style={{fontWeight:700}}>Total</span><span style={{fontWeight:700,fontSize:17}}>${negTotal.toFixed(2)}</span></div>
            </div>
            <label style={{...s.lbl,marginTop:10}}>Tu nombre *</label>
            <input style={s.inp} placeholder="Juan Pérez" value={form.nombre} onChange={e=>setForm({...form,nombre:e.target.value})}/>
            <label style={s.lbl}>Tu WhatsApp *</label>
            <input style={s.inp} placeholder="+58 424-000-0000" value={form.telefono} onChange={e=>setForm({...form,telefono:e.target.value})}/>
            {negocioActivo&&!negocioActivo.activo&&(
              <div style={{background:"#fff7ed",border:"1px solid #fed7aa",borderRadius:10,padding:"8px 12px",marginBottom:8}}>
                <div style={{fontSize:12,fontWeight:700,color:"#c2410c"}}>🔴 Esta tienda está cerrada ahora</div>
                <div style={{fontSize:11,color:"#92400e",marginTop:2}}>Tu pedido será enviado y atendido cuando abran. ¡Gracias por tu preferencia!</div>
              </div>
            )}
            <div style={{...s.ib,background:"#fffbeb"}}><div style={{fontSize:12,color:"#92400e"}}>⚡ Tu pedido irá directo al WhatsApp de {cartNegocioNombre}</div></div>
            <button style={s.btnWa} onClick={async()=>{
              if(!form.nombre||!form.telefono)return alert("Completa nombre y teléfono");
              if(!negWaNum)return alert("Este negocio no tiene WhatsApp configurado. Contacta al administrador.");
              const deliveryTexto=!negTieneDelivery?"Solo retiro en tienda":negDelGratis?"GRATIS 🎉":"$"+negDel.toFixed(2);
              const msg=`🏪 *Nuevo pedido - ${APP_NAME}*\n📋 Ref: ${negRef}\n----------------------------\n${negItems.map(i=>`• ${i.name} x${i.qty} — $${(i.price*i.qty).toFixed(2)}`).join("\n")}\n----------------------------\nSubtotal: $${negSub.toFixed(2)}\nDelivery: ${deliveryTexto}\n*TOTAL: $${negTotal.toFixed(2)}*\n----------------------------\n👤 ${form.nombre}\n📱 ${form.telefono}\n📍 ${zonaSel?.zona||"San Fernando"}, ${addr.calle||"(sin dirección)"}`;
              window.location.href=`https://wa.me/${negWaNum}?text=${encodeURIComponent(msg)}`;
              guardarPedidoRestaurante(cartNegocioId,negItems,negSub,negDel,negTotal,negRef);
              setCartNegocio({});setSheet(null);
            }}>📲 Enviar pedido a {cartNegocioNombre}</button>
            <button style={s.btnG} onClick={()=>setSheet(null)}>← Seguir viendo</button>
          </>);
        })()}
      </div></div>)}

      {/* SHEET CARRITO RESTAURANTE — MULTI-PROVEEDOR v2 */}
      {sheet==="cartRest"&&(setSheet("cartGlobal"),null)}{false&&sheet==="cartRest_disabled"&&(()=>{
        const allRestItems=Object.values(cartRest);
        if(allRestItems.length===0)return null;
        // Agrupar por proveedor
        const grupos={};
        allRestItems.forEach(i=>{
          const k=i.kitchen||"Sin proveedor";
          if(!grupos[k])grupos[k]={nombre:k,wa:i.kitchenWa||"",items:[],delivery:i.kitchenDelivery,costo:i.kitchenDeliveryCosto||0,gratis:i.kitchenDeliveryGratis||15,retiro:i.kitchenRetiro,eta:i.kitchenEta||null};
          grupos[k].items.push(i);
        });
        const proveedores=Object.values(grupos);
        const esMultiple=proveedores.length>1;
        const datosOk=form.nombre&&form.telefono;
        const dirCliente=[zonaSel?.zona,addr.calle,addr.referencia].filter(Boolean).join(", ");
        // consentPromo está en el estado del componente principal
        const enviarAProveedor=(prov)=>{
          if(!datosOk)return alert("Completa tu nombre y teléfono antes de enviar");
          if(!prov.wa){alert(`${prov.nombre} no tiene WhatsApp configurado. Contacta al administrador.`);return;}
          const sub=prov.items.reduce((a,i)=>a+i.price*i.qty,0);
          const del=prov.delivery?(sub>=prov.gratis?0:prov.costo):0;
          const total=sub+del;
          const aceptaPromo=!!consentPromo[prov.nombre];
          const numPedido=Date.now()%900+100;
          const msg=buildGlobalWaMsg(prov.nombre,prov.items,total,del,numPedido,form.nombre,form.telefono,dirCliente);
          const raw=prov.wa.replace(/\D/g,"");
          const num=raw.startsWith("0")?"58"+raw.slice(1):raw.startsWith("58")?raw:"58"+raw;
          const ref=`PED-${String(numPedido).padStart(3,"0")}`;
          // Buscar id del proveedor desde allRestaurantes
          const restObj=allRestaurantes?.find(r=>r.negocio===prov.nombre);
          guardarPedidoRestaurante(restObj?.id||null,prov.items,sub,del,total,ref,aceptaPromo,prov.nombre);
          const nuevoCart={...cartRest};
          prov.items.forEach(i=>delete nuevoCart[i.id]);
          setCartRest(nuevoCart);
          window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`,"_blank");
          if(Object.keys(nuevoCart).length===0)setSheet(null);
        };
        return(
          <div style={s.ov} onClick={()=>setSheet(null)}>
            <div style={s.sh} onClick={e=>e.stopPropagation()}>
              <div style={s.hnd}/>
              {/* TÍTULO */}
              <div style={{fontSize:17,fontWeight:800,color:"#0f172a",marginBottom:4}}>
                {esMultiple?"🛒 Pedidos con varios proveedores":"🛒 Tu pedido"}
              </div>
              {esMultiple&&(
                <div style={{fontSize:12,color:"#64748b",background:"#f8fafc",borderRadius:10,padding:"8px 12px",marginBottom:12,lineHeight:1.5}}>
                  Tienes pedidos con <strong>{proveedores.length} proveedores</strong>. Cada uno recibirá su pedido de forma independiente.
                </div>
              )}
              {/* DATOS DEL CLIENTE — una sola vez para todos */}
              <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:12,padding:"12px 14px",marginBottom:14}}>
                <div style={{fontSize:12,fontWeight:700,color:"#15803d",marginBottom:8}}>👤 Tus datos de contacto</div>
                <input style={{...s.inp,marginBottom:8}} placeholder="Nombre y apellido *" value={form.nombre} onChange={e=>setForm({...form,nombre:e.target.value})}/>
                <input style={{...s.inp,marginBottom:8}} placeholder="Tu WhatsApp * (Ej: 04XX-XXXXXXX)" value={form.telefono} onChange={e=>setForm({...form,telefono:e.target.value})}/>
                {/* ZONA DEL SISTEMA */}
                <div style={{fontSize:11,fontWeight:600,color:"#374151",marginBottom:4}}>📍 Zona de entrega</div>
                <select style={{...s.inp,marginBottom:8,background:"#fff",color:zonaSelId?"#0f172a":"#94a3b8"}} value={zonaSelId} onChange={e=>{setZonaSelId(e.target.value);setZonaSel(zonas.find(z=>z.id===e.target.value)||null);}}>
                  <option value="">Selecciona tu zona / barrio...</option>
                  {zonas.map(z=><option key={z.id} value={z.id}>{z.zona}{z.municipio&&z.municipio!=="San Fernando"?` — ${z.municipio}`:""}</option>)}
                </select>
                {/* DIRECCIÓN EXACTA */}
                <div style={{fontSize:11,fontWeight:600,color:"#374151",marginBottom:4}}>🏠 Dirección exacta</div>
                <input style={{...s.inp,marginBottom:6}} placeholder="Calle, carrera, av. y número (Ej: Calle Bolívar #23)" value={addr.calle} onChange={e=>setAddr({...addr,calle:e.target.value})}/>
                {/* PUNTO DE REFERENCIA */}
                <div style={{fontSize:11,fontWeight:600,color:"#374151",marginBottom:4}}>🗺️ Punto de referencia</div>
                <input style={{...s.inp,marginBottom:0}} placeholder="Ej: Casa azul, frente al CANTV, al lado del parque..." value={addr.referencia} onChange={e=>setAddr({...addr,referencia:e.target.value})}/>
                {!datosOk&&<div style={{fontSize:11,color:"#dc2626",marginTop:6}}>⚠️ Nombre y teléfono son obligatorios para enviar pedidos</div>}
              </div>
              {/* BLOQUE POR PROVEEDOR */}
              {proveedores.map((prov,idx)=>{
                const sub=prov.items.reduce((a,i)=>a+i.price*i.qty,0);
                const del=prov.delivery?(sub>=prov.gratis?0:prov.costo):0;
                const total=sub+del;
                const falta=prov.delivery&&del>0?parseFloat((prov.gratis-sub).toFixed(2)):0;
                const promos=prov.items.filter(i=>i.isPromo);
                const platos=prov.items.filter(i=>!i.isPromo);
                const sinWa=!prov.wa;
                return(
                  <div key={idx} style={{background:"#fff",border:"1.5px solid #e2e8f0",borderRadius:14,padding:"14px",marginBottom:12,boxShadow:"0 2px 8px rgba(0,0,0,0.04)"}}>
                    {/* Header proveedor */}
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                      <div style={{width:36,height:36,borderRadius:"50%",background:getAvatarColor(prov.nombre),display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:900,fontSize:15,flexShrink:0}}>
                        {prov.nombre[0]?.toUpperCase()}
                      </div>
                      <div style={{flex:1}}>
                        <div style={{fontWeight:800,fontSize:14,color:"#0f172a"}}>{prov.nombre}</div>
                        <div style={{fontSize:11,color:prov.delivery?"#15803d":"#64748b"}}>
                          {prov.delivery?"🛵 Delivery disponible":prov.retiro?"🏃 Solo retiro":"📦 Consultar modalidad"}
                        </div>
                      </div>
                      <div style={{fontWeight:900,fontSize:16,color:"#ef4444"}}>${total.toFixed(2)}</div>
                    </div>
                    {/* Promos */}
                    {promos.map(i=>(
                      <div key={i.id} style={{display:"flex",alignItems:"center",gap:8,padding:"6px 0",borderBottom:"1px solid #f8fafc"}}>
                        <span style={{fontSize:11,background:"#fdf4ff",color:"#7e22ce",padding:"2px 7px",borderRadius:8,fontWeight:700,flexShrink:0}}>🔥 PROMO</span>
                        <span style={{flex:1,fontSize:12,fontWeight:600,color:"#0f172a"}}>{i.name}</span>
                        <div style={s.qR}>
                          <button style={s.qB} onClick={()=>{const n={...cartRest};n[i.id].qty>1?n[i.id]={...n[i.id],qty:n[i.id].qty-1}:delete n[i.id];setCartRest(n);}}>−</button>
                          <span style={s.qN}>{i.qty}</span>
                          <button style={s.qB} onClick={()=>setCartRest(c=>({...c,[i.id]:{...c[i.id],qty:c[i.id].qty+1}}))}>+</button>
                        </div>
                        <span style={{fontSize:13,fontWeight:700,color:P,minWidth:46,textAlign:"right"}}>${(i.price*i.qty).toFixed(2)}</span>
                      </div>
                    ))}
                    {/* Platos */}
                    {platos.map(i=>(
                      <div key={i.id} style={{display:"flex",alignItems:"center",gap:8,padding:"6px 0",borderBottom:"1px solid #f8fafc"}}>
                        <span style={{fontSize:18,flexShrink:0}}>🍽️</span>
                        <div style={{flex:1}}>
                          <div style={{fontSize:12,fontWeight:600,color:"#0f172a"}}>{i.name}</div>
                          {i.nota&&<div style={{fontSize:10,color:"#7e22ce"}}>📝 {i.nota}</div>}
                        </div>
                        <div style={s.qR}>
                          <button style={s.qB} onClick={()=>{const n={...cartRest};n[i.id].qty>1?n[i.id]={...n[i.id],qty:n[i.id].qty-1}:delete n[i.id];setCartRest(n);}}>−</button>
                          <span style={s.qN}>{i.qty}</span>
                          <button style={s.qB} onClick={()=>setCartRest(c=>({...c,[i.id]:{...c[i.id],qty:c[i.id].qty+1}}))}>+</button>
                        </div>
                        <span style={{fontSize:13,fontWeight:700,color:P,minWidth:46,textAlign:"right"}}>${(i.price*i.qty).toFixed(2)}</span>
                      </div>
                    ))}
                    {/* Delivery gratis / falta */}
                    {prov.delivery&&(
                      <div style={{marginTop:8,padding:"7px 10px",borderRadius:8,background:del===0?"#f0fdf4":"#fffbeb",border:`1px solid ${del===0?"#bbf7d0":"#fde68a"}`}}>
                        {del===0
                          ?<span style={{fontSize:12,fontWeight:700,color:"#15803d"}}>🚚 Delivery gratis</span>
                          :<span style={{fontSize:12,color:"#92400e"}}>🟡 Te faltan <strong>${falta.toFixed(2)}</strong> para delivery gratis</span>
                        }
                      </div>
                    )}
                    {/* Total del proveedor */}
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:8,paddingTop:8,borderTop:"1px solid #f1f5f9",fontSize:12}}>
                      <span style={{color:"#64748b"}}>
                        {del===0?(prov.delivery?"Delivery incluido":"Sin delivery"):`Delivery: $${del.toFixed(2)}`}
                      </span>
                      <span style={{fontWeight:800,color:"#0f172a",fontSize:14}}>Total: <span style={{color:"#ef4444"}}>${total.toFixed(2)}</span></span>
                    </div>
                    {/* Consentimiento promos — desmarcado por defecto */}
                    <div style={{marginTop:10,padding:"10px 12px",background:"#f8fafc",borderRadius:10,border:"1px solid #e2e8f0"}}>
                      <label style={{display:"flex",alignItems:"flex-start",gap:10,cursor:"pointer"}}>
                        <input
                          type="checkbox"
                          checked={!!consentPromo[prov.nombre]}
                          onChange={e=>setConsentPromo(c=>({...c,[prov.nombre]:e.target.checked}))}
                          style={{marginTop:2,width:16,height:16,accentColor:"#25D366",flexShrink:0,cursor:"pointer"}}
                        />
                        <div>
                          <div style={{fontSize:12,fontWeight:600,color:"#0f172a",lineHeight:1.4}}>
                            ¿Deseas recibir promociones de <strong>{prov.nombre}</strong> por WhatsApp?
                          </div>
                          <div style={{fontSize:10,color:"#64748b",marginTop:2,lineHeight:1.4}}>
                            Solo te contactarán cuando tengan nuevas promos. Puedes cancelar respondiendo BAJA.
                          </div>
                        </div>
                      </label>
                    </div>
                    {/* Botón */}
                    {sinWa
                      ?<div style={{...s.msg(false),marginTop:8}}>⚠️ {prov.nombre} no tiene WhatsApp configurado aún</div>
                      :<button
                        style={{width:"100%",background:datosOk?"#25D366":"#94a3b8",color:"#fff",border:"none",borderRadius:12,padding:"12px",fontSize:13,fontWeight:800,cursor:datosOk?"pointer":"not-allowed",marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",gap:6,transition:"background 0.2s"}}
                        onClick={()=>enviarAProveedor(prov)}>
                        📲 Pedir a {prov.nombre}
                      </button>
                    }
                  </div>
                );
              })}
              {esMultiple&&(
                <div style={{fontSize:11,color:"#94a3b8",textAlign:"center",padding:"4px 0 8px",lineHeight:1.5}}>
                  Cada proveedor recibe <strong>solo su pedido</strong>. Envíalos en el orden que quieras.
                </div>
              )}
              <button style={s.btnG} onClick={()=>setSheet(null)}>← Seguir agregando</button>
            </div>
          </div>
        );
      })()}

      {/* SHEET CARRITO */}
      {sheet==="cart"&&(<div style={s.ov} onClick={()=>setSheet(null)}><div style={s.sh} onClick={e=>e.stopPropagation()}><div style={s.hnd}/><div style={s.shT}>Tu pedido</div><div style={s.ib}><label style={s.lbl}>Zona de entrega *</label><select style={{...s.inp,marginBottom:8,background:"#fff"}} value={zonaSelId} onChange={e=>{setZonaSelId(e.target.value);setZonaSel(zonas.find(z=>z.id===e.target.value)||null);}}><option value="">Selecciona tu zona...</option>{zonas.map(z=><option key={z.id} value={z.id}>{z.municipio} — {z.zona} (${z.costo_delivery})</option>)}</select><label style={s.lbl}>Calle y número</label><input style={{...s.inp,marginBottom:8}} placeholder="Calle Principal #47" value={addr.calle} onChange={e=>setAddr({...addr,calle:e.target.value})}/><label style={s.lbl}>Referencia</label><input style={{...s.inp,marginBottom:0}} placeholder="Casa azul, frente al parque..." value={addr.referencia} onChange={e=>setAddr({...addr,referencia:e.target.value})}/></div>{items.map(i=>(<div key={i.id} style={s.ci}><span style={{fontSize:22,width:32,textAlign:"center"}}>{i.emoji}</span><div style={{flex:1}}><div style={{fontSize:13,fontWeight:500}}>{i.name}</div>{i.kitchen&&<div style={{fontSize:10,color:"#94a3b8"}}>{i.kitchen}</div>}</div><div style={s.qR}><button style={s.qB} onClick={()=>rem(i.id)}>−</button><span style={s.qN}>{i.qty}</span><button style={s.qB} onClick={()=>add(i)}>+</button></div><div style={{fontSize:13,fontWeight:700,color:P,marginLeft:8,minWidth:50,textAlign:"right"}}>${(i.price*i.qty).toFixed(2)}</div></div>))}
        {zonaSel&&(superItems.length>0&&superSub<freeMinSuper||foodItems.length>0&&foodSub<freeMinFood)&&(
          <div style={s.pw}>
            {superItems.length>0&&superSub<freeMinSuper&&(<div style={{fontSize:12,color:"#64748b",marginBottom:4}}>🛒 Supermercado: te faltan <strong style={{color:P}}>${(freeMinSuper-superSub).toFixed(2)}</strong> para delivery gratis</div>)}
            {foodItems.length>0&&foodSub<freeMinFood&&(<div style={{fontSize:12,color:"#64748b"}}>🍱 Comida: te faltan <strong style={{color:P}}>${(freeMinFood-foodSub).toFixed(2)}</strong> para delivery gratis</div>)}
          </div>
        )}
        {!zonaSel&&sub>0&&(<div style={{...s.ib,background:"#fff7ed"}}><div style={{fontSize:12,color:"#c2410c"}}>⚠️ Selecciona tu zona para calcular el delivery</div></div>)}
        <div style={{marginTop:10}}><div style={s.sr}><span style={s.sL}>Subtotal</span><span style={s.sV}>${sub.toFixed(2)}</span></div><div style={s.sr}><span style={s.sL}>Delivery</span>{del===0?<span style={s.fT}>GRATIS</span>:<span style={s.sV}>${del.toFixed(2)}</span>}</div><div style={s.tR}><span style={{fontWeight:700}}>Total</span><span style={{fontWeight:700,fontSize:17}}>${total.toFixed(2)}</span></div></div><button style={s.btn} onClick={()=>setSheet("checkout")}>Continuar →</button><button style={s.btnG} onClick={()=>setSheet(null)}>Seguir comprando</button></div></div>)}

      {/* SHEET CHECKOUT */}
      {/* LIGHTBOX IMAGEN AMPLIADA */}
      {imgZoom&&(
        <div onClick={()=>setImgZoom(null)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.92)",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",padding:16}}>
          <button onClick={()=>setImgZoom(null)} style={{position:"absolute",top:16,right:16,background:"rgba(255,255,255,0.15)",border:"none",borderRadius:"50%",width:36,height:36,color:"#fff",fontSize:20,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
          <img src={imgZoom} alt="" style={{maxWidth:"100%",maxHeight:"85vh",objectFit:"contain",borderRadius:12,boxShadow:"0 8px 32px rgba(0,0,0,0.5)"}}/>
        </div>
      )}
      {/* MODAL DETALLE PLATO */}
      {platoDetalle&&(
        <div style={s.ov} onClick={()=>setPlatoDetalle(null)}>
          <div style={{...s.sh,padding:0,overflow:"hidden"}} onClick={e=>e.stopPropagation()}>
            <div style={s.hnd}/>
            {/* IMAGEN GRANDE */}
            {platoDetalle.foto
              ?<img src={platoDetalle.foto} alt={platoDetalle.name} style={{width:"100%",height:220,objectFit:"cover",display:"block"}}/>
              :<div style={{height:160,background:"linear-gradient(135deg,#fef3c7,#fde68a)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:64}}>🍽️</div>
            }
            {/* INFO */}
            <div style={{padding:"16px 20px 20px"}}>
              {platoDetalle.tag&&<span style={{fontSize:11,fontWeight:800,background:"#f59e0b",color:"#fff",padding:"3px 10px",borderRadius:8,marginBottom:8,display:"inline-block"}}>{platoDetalle.tag}</span>}
              <div style={{fontSize:20,fontWeight:900,color:"#0f172a",marginBottom:6,letterSpacing:-0.3}}>{platoDetalle.name}</div>
              {platoDetalle.descripcion&&<div style={{fontSize:13,color:"#64748b",lineHeight:1.6,marginBottom:12}}>{platoDetalle.descripcion}</div>}
              {platoDetalle.marca&&<div style={{fontSize:12,color:"#94a3b8",marginBottom:10}}>🏷️ {platoDetalle.marca}</div>}
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:8}}>
                <div style={{fontSize:28,fontWeight:900,color:"#ef4444",letterSpacing:-0.5}}>${platoDetalle.price.toFixed(2)}</div>
                {(()=>{
                  const qty=cartRest[platoDetalle.id]?.qty||0;
                  return qty>0?(
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <button style={{...s.qB,width:34,height:34,fontSize:18}} onClick={()=>{const n={...cartRest};n[platoDetalle.id].qty>1?n[platoDetalle.id]={...n[platoDetalle.id],qty:n[platoDetalle.id].qty-1}:delete n[platoDetalle.id];setCartRest(n);}}>−</button>
                      <span style={{fontSize:16,fontWeight:800,minWidth:20,textAlign:"center"}}>{qty}</span>
                      <button style={{...s.qB,width:34,height:34,fontSize:18}} onClick={()=>setCartRest(c=>({...c,[platoDetalle.id]:{...platoDetalle,qty:qty+1}}))}>+</button>
                    </div>
                  ):(
                    <button style={{background:"#ef4444",color:"#fff",border:"none",borderRadius:12,padding:"12px 24px",fontSize:14,fontWeight:800,cursor:"pointer"}} onClick={()=>{setCartRest(c=>({...c,[platoDetalle.id]:{...platoDetalle,qty:1}}));setPlatoDetalle(null);}}>
                      + Agregar al pedido
                    </button>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
      {sheet==="checkout"&&(<div style={s.ov} onClick={()=>setSheet("cart")}><div style={s.sh} onClick={e=>e.stopPropagation()}><div style={s.hnd}/><div style={s.shT}>Datos de entrega</div><label style={s.lbl}>Tu nombre *</label><input style={s.inp} placeholder="María González" value={form.nombre} onChange={e=>setForm({...form,nombre:e.target.value})}/><label style={s.lbl}>WhatsApp *</label><input style={s.inp} placeholder="+58 424-000-0000" value={form.telefono} onChange={e=>setForm({...form,telefono:e.target.value})}/><label style={s.lbl}>Sexo (opcional)</label><select style={{...s.inp,background:"#fff"}} value={form.sexo} onChange={e=>setForm({...form,sexo:e.target.value})}><option value="">Prefiero no decir</option><option value="femenino">Femenino</option><option value="masculino">Masculino</option></select><label style={s.lbl}>Método de pago</label><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}}>{PAGOS.map(p=>(<button key={p} onClick={()=>setForm({...form,pago:p})} style={{padding:"10px 8px",borderRadius:12,border:form.pago===p?`2px solid ${P}`:"1px solid #e2e8f0",background:form.pago===p?"#f8fafc":"#fff",fontSize:12,fontWeight:form.pago===p?700:400,cursor:"pointer",color:form.pago===p?P:"#64748b"}}>{p==="Pago Móvil"?"📱":p==="Zelle"?"🏦":p==="Efectivo al recibir"?"💵":"₿"} {p}</button>))}</div><div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10,background:"#f0fdf4",padding:"10px 14px",borderRadius:10}}><input type="checkbox" id="promos" checked={form.recibirPromos} onChange={e=>setForm({...form,recibirPromos:e.target.checked})} style={{width:18,height:18}}/><label htmlFor="promos" style={{fontSize:13,color:"#15803d",cursor:"pointer"}}>📲 Quiero recibir promociones por WhatsApp</label></div><div style={s.ib}><div style={s.sr}><span style={s.sL}>Zona</span><span style={s.sV}>{zonaSel?.zona||"Sin seleccionar"}</span></div><div style={s.sr}><span style={s.sL}>Delivery</span>{del===0?<span style={s.fT}>GRATIS</span>:<span style={s.sV}>${del.toFixed(2)}</span>}</div><div style={s.sr}><span style={{fontWeight:700}}>Total</span><span style={{fontWeight:700,fontSize:16,color:P}}>${total.toFixed(2)}</span></div></div><button style={s.btn} onClick={confirm}>Revisar pedido →</button><button style={s.btnG} onClick={()=>setSheet("cart")}>← Volver</button></div></div>)}

      {/* SHEET RESUMEN */}
      {sheet==="resumen"&&(<div style={s.ov}><div style={s.sh}>
        <div style={s.hnd}/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
          <div style={s.shT}>✅ Resumen de tu pedido</div>
          <button onClick={()=>setSheet(null)} style={{background:"#f1f5f9",border:"none",borderRadius:20,width:30,height:30,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
        </div>
        <div style={{background:"#f0fdf4",borderRadius:12,padding:"10px 14px",marginBottom:12,fontSize:12,color:"#15803d",fontWeight:600}}>📋 Ref: {pedidoRef}</div>
        {items.map(i=>(<div key={i.id} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:"1px solid #f1f5f9",fontSize:13}}><span>{i.name} x{i.qty}</span><span style={{fontWeight:600}}>${(i.price*i.qty).toFixed(2)}</span></div>))}
        <div style={{margin:"10px 0"}}><div style={s.sr}><span style={s.sL}>Subtotal</span><span style={s.sV}>${sub.toFixed(2)}</span></div><div style={s.sr}><span style={s.sL}>Delivery</span>{del===0?<span style={s.fT}>GRATIS</span>:<span style={s.sV}>${del.toFixed(2)}</span>}</div><div style={s.tR}><span style={{fontWeight:700}}>TOTAL</span><span style={{fontWeight:700,fontSize:18,color:"#22c55e"}}>${total.toFixed(2)}</span></div></div>
        <div style={{...s.ib,marginTop:8}}><div style={s.sr}><span style={s.sL}>👤</span><span style={s.sV}>{form.nombre}</span></div><div style={s.sr}><span style={s.sL}>📱</span><span style={s.sV}>{form.telefono}</span></div><div style={s.sr}><span style={s.sL}>📍</span><span style={s.sV}>{zonaSel?.zona}</span></div><div style={s.sr}><span style={s.sL}>🏠</span><span style={s.sV}>{addr.calle}</span></div><div style={s.sr}><span style={s.sL}>💳</span><span style={s.sV}>{form.pago}</span></div></div>
        <div style={{background:"#fffbeb",borderRadius:12,padding:"10px 14px",marginBottom:4,fontSize:12,color:"#92400e"}}>⚡ Al tocar el botón se abrirá WhatsApp con tu pedido listo. Solo toca <strong>Enviar</strong>.</div>
        {/* -- BOTÓN CORREGIDO: guarda en DB antes de abrir WhatsApp -- */}
        <button style={s.btnWa} onClick={async()=>{
          await guardarPedidoEnDB();
          sendWa();
          setSheet("success");
        }}>📲 Enviar pedido por WhatsApp</button>
        <button style={s.btnG} onClick={()=>setSheet("checkout")}>← Modificar datos</button>
      </div></div>)}

      {/* SHEET ÉXITO */}
      {sheet==="success"&&(<div style={s.ov}><div style={s.sh}><div style={s.hnd}/><div style={{textAlign:"center",padding:"16px 0"}}><div style={{fontSize:52,marginBottom:10}}>🎉</div><div style={{fontSize:20,fontWeight:700,color:P,marginBottom:6}}>¡Pedido enviado!</div><div style={{fontSize:13,color:"#64748b",lineHeight:1.7,marginBottom:20}}>Tu pedido fue enviado por WhatsApp. Te confirmaremos a <strong>{form.telefono}</strong> para coordinar el pago.</div><button style={s.btnG} onClick={()=>{setCart({});setSheet(null);setForm({nombre:"",telefono:"",sexo:"",pago:"Pago Móvil",recibirPromos:false});setZonaSelId("");setZonaSel(null);setAddr({calle:"",referencia:""});setPedidoRef("");}}>Hacer otro pedido</button></div></div></div>)}

      {/* SHEET SERVICIO */}
      {sheet==="service"&&selSvc&&(<div style={s.ov} onClick={()=>setSheet(null)}><div style={s.sh} onClick={e=>e.stopPropagation()}><div style={s.hnd}/><div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}><span style={{fontSize:28}}>{selSvc.emoji}</span><div style={s.shT}>{selSvc.name}</div></div><label style={s.lbl}>Tu nombre</label><input style={s.inp} placeholder="María González" value={svcForm.nombre} onChange={e=>setSvcForm({...svcForm,nombre:e.target.value})}/><label style={s.lbl}>WhatsApp</label><input style={s.inp} placeholder="+58 424-000-0000" value={svcForm.telefono} onChange={e=>setSvcForm({...svcForm,telefono:e.target.value})}/><label style={s.lbl}>Dirección</label><input style={s.inp} placeholder="¿Dónde necesitas el servicio?" value={svcForm.direccion} onChange={e=>setSvcForm({...svcForm,direccion:e.target.value})}/><label style={s.lbl}>Detalle</label><input style={s.inp} placeholder="Cuéntanos lo que necesitas" value={svcForm.detalle} onChange={e=>setSvcForm({...svcForm,detalle:e.target.value})}/><div style={s.ib}><div style={{fontSize:12,color:"#64748b"}}>Te contactamos por WhatsApp para confirmar.</div></div><button style={s.btnWa} onClick={sendSvcWa}>Enviar solicitud</button><button style={s.btnG} onClick={()=>setSheet(null)}>Cancelar</button></div></div>)}

      {/* SHEET NOTA */}
      {notaSheet&&(
        <div style={s.ov} onClick={()=>setNotaSheet(null)}>
          <div style={s.sh} onClick={e=>e.stopPropagation()}>
            <div style={s.hnd}/>
            <div style={s.shT}>📝 Nota para este producto</div>
            <div style={{fontSize:13,color:"#64748b",marginBottom:10}}>¿Tienes alguna indicación especial? Ej: sin cebolla, extra salsa, solo chocolate negro...</div>
            <textarea style={{...s.inp,height:100,resize:"none",fontFamily:"'Segoe UI',sans-serif"}} placeholder="Escribe tu nota aquí..." value={notaTemp} onChange={e=>setNotaTemp(e.target.value)}/>
            <button style={s.btn} onClick={()=>{setCart(c=>({...c,[notaSheet]:{...c[notaSheet],nota:notaTemp}}));setNotaSheet(null);}}>Guardar nota</button>
            <button style={s.btnG} onClick={()=>{setCart(c=>({...c,[notaSheet]:{...c[notaSheet],nota:""}}));setNotaTemp("");setNotaSheet(null);}}>Quitar nota</button>
          </div>
        </div>
      )}

      {/* SHEET RESEÑA */}
      {sheet==="resena"&&(<div style={s.ov} onClick={()=>setSheet(null)}><div style={s.sh} onClick={e=>e.stopPropagation()}><div style={s.hnd}/><div style={s.shT}>⭐ Dejar reseña</div>{resenaMsj&&<div style={s.msg(resenaMsj.includes("✅"))}>{resenaMsj}</div>}<label style={s.lbl}>Tu nombre *</label><input style={s.inp} placeholder="María González" value={resena.nombre} onChange={e=>setResena({...resena,nombre:e.target.value})}/><label style={s.lbl}>Calificación *</label><div style={s.stars}>{[1,2,3,4,5].map(n=><span key={n} style={s.star(resena.estrellas>=n)} onClick={()=>setResena({...resena,estrellas:n})}>★</span>)}</div><label style={s.lbl}>Comentario (opcional)</label><input style={s.inp} placeholder="¿Cómo estuvo el producto?" value={resena.comentario} onChange={e=>setResena({...resena,comentario:e.target.value})}/><button style={s.btn} onClick={enviarResena}>Enviar reseña</button><button style={s.btnG} onClick={()=>setSheet(null)}>Cancelar</button></div></div>)}

      <div style={{height:80}}/>
    </div>
  );
}

