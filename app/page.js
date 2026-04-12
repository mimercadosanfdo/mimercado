"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://cdiuboyklymirssxperd.supabase.co",
  "sb_publishable_WkUnC5ElLD9xRbhzG_OKFw_13gOTwGk"
);

const CITY = "San Fernando";
const APP_NAME = "MiMercado";
const WA = "584243232671";
const ADMIN_USER = "admin";
const ADMIN_PASS = "mimercado2024";
const P = "#0f172a";
const A = "#f59e0b";

const MAIN_TABS = ["Inicio","Productos","Servicios","Proveedores"];
const SUPER_CATS = ["🥩 Proteínas","🌾 Granos y cereales","🛢️ Aceites y condimentos","🥛 Lácteos","🧴 Aseo personal","🧹 Limpieza del hogar","🥦 Frutas y verduras","🧃 Bebidas"];
const PROV_CATS = ["Comida preparada","Postres","Jugos y bebidas","Pan y repostería"];
const ALL_CATS = ["Todo","Supermercado",...PROV_CATS];
const PAGOS = ["Pago Móvil","Zelle","Efectivo al recibir","Binance/USDT"];

const SVCS = [
  {id:"s1",name:"Mototaxi",emoji:"🛵",desc:"Te llevamos a donde necesites",price:"Desde $1.00",bg:"#fef3c7",tc:"#92400e"},
  {id:"s2",name:"Taxi",emoji:"🚗",desc:"Viajes cómodos y seguros en SF",price:"Desde $2.00",bg:"#e0f2fe",tc:"#0369a1"},
  {id:"s3",name:"Lavandería",emoji:"👕",desc:"Recogemos y entregamos limpia",price:"Desde $3.00/kg",bg:"#f0fdf4",tc:"#15803d"},
  {id:"s4",name:"Limpieza del hogar",emoji:"🧹",desc:"Personal de confianza para tu casa",price:"Desde $10.00/día",bg:"#fdf4ff",tc:"#7e22ce"},
  {id:"s5",name:"Enfermería a domicilio",emoji:"💉",desc:"Atención profesional en tu hogar",price:"Desde $5.00",bg:"#fff1f2",tc:"#be123c"},
  {id:"s6",name:"Encomiendas locales",emoji:"📦",desc:"Enviamos lo que necesites",price:"$1.00 – $2.00",bg:"#fff7ed",tc:"#c2410c"},
];

const s = {
  app:{fontFamily:"'Segoe UI',sans-serif",background:"#f8fafc",minHeight:"100vh",maxWidth:430,margin:"0 auto"},
  hdr:{background:P,padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100},
  logo:{color:"#fff",fontWeight:700,fontSize:18},
  city:{background:A,color:P,fontSize:10,fontWeight:700,padding:"2px 8px",borderRadius:20,marginLeft:6},
  cBtn:{background:"rgba(255,255,255,0.12)",border:"none",borderRadius:20,padding:"6px 12px",color:"#fff",display:"flex",alignItems:"center",gap:6,cursor:"pointer",fontSize:13},
  cN:{background:A,color:P,borderRadius:"50%",width:18,height:18,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700},
  tabs:{display:"flex",background:P,borderTop:"1px solid rgba(255,255,255,0.1)"},
  tab:(a)=>({flex:1,padding:"9px 0",border:"none",background:"transparent",color:a?"#fff":"rgba(255,255,255,0.45)",fontWeight:a?700:400,fontSize:12,cursor:"pointer",borderBottom:a?`2px solid ${A}`:"2px solid transparent"}),
  banner:{background:"linear-gradient(135deg,#0f172a,#1e3a5f)",padding:"16px",color:"#fff"},
  bT:{fontSize:19,fontWeight:700,margin:"0 0 2px"},
  bS:{fontSize:12,color:"rgba(255,255,255,0.7)",margin:"0 0 10px"},
  bdg:(bg,c)=>({fontSize:10,fontWeight:600,background:bg,color:c,padding:"3px 9px",borderRadius:12,display:"inline-block",marginRight:6,marginBottom:4}),
  sw:{padding:"12px 16px 0"},
  si:{width:"100%",padding:"10px 14px",borderRadius:12,border:"1px solid #e2e8f0",fontSize:14,background:"#fff",boxSizing:"border-box",outline:"none"},
  cs:{display:"flex",gap:8,padding:"12px 16px",overflowX:"auto"},
  cb:(a)=>({background:a?P:"#fff",color:a?"#fff":"#64748b",border:a?"none":"1px solid #e2e8f0",borderRadius:20,padding:"6px 14px",fontSize:13,fontWeight:500,cursor:"pointer",whiteSpace:"nowrap",flexShrink:0}),
  sec:{padding:"0 16px 16px"},
  sT:{fontSize:12,fontWeight:700,color:"#94a3b8",letterSpacing:1,margin:"14px 0 8px",textTransform:"uppercase"},
  grid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},
  card:{background:"#fff",borderRadius:14,padding:12,border:"1px solid #f1f5f9",display:"flex",flexDirection:"column",gap:5},
  cEm:{fontSize:32,textAlign:"center",padding:"4px 0"},
  cImg:{width:"100%",height:90,objectFit:"cover",borderRadius:8,marginBottom:4},
  cLogo:{width:24,height:24,borderRadius:"50%",objectFit:"cover",border:"2px solid #f1f5f9"},
  cNm:{fontSize:13,fontWeight:600,color:"#1e293b",lineHeight:1.3},
  cMeta:{fontSize:10,color:"#94a3b8"},
  cKt:{fontSize:10,color:"#94a3b8",display:"flex",alignItems:"center",gap:4},
  cBt:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"auto"},
  cPr:{fontSize:15,fontWeight:700,color:P},
  cUn:{fontSize:10,color:"#94a3b8"},
  aBtn:{background:P,color:"#fff",border:"none",borderRadius:20,width:30,height:30,fontSize:20,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},
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
  btnWa:{background:"#25d366",color:"#fff",border:"none",borderRadius:14,padding:"14px",fontSize:15,fontWeight:700,width:"100%",cursor:"pointer",marginTop:10},
  btnPurple:{background:"#7e22ce",color:"#fff",border:"none",borderRadius:14,padding:"13px",fontSize:14,fontWeight:700,width:"100%",cursor:"pointer",marginTop:8},
  btnRed:{background:"#ef4444",color:"#fff",border:"none",borderRadius:10,padding:"7px 12px",fontSize:12,fontWeight:600,cursor:"pointer"},
  btnAmber:{background:"#f59e0b",color:P,border:"none",borderRadius:10,padding:"7px 12px",fontSize:12,fontWeight:600,cursor:"pointer"},
  btnGreen:{background:"#22c55e",color:"#fff",border:"none",borderRadius:10,padding:"7px 12px",fontSize:12,fontWeight:600,cursor:"pointer"},
  inp:{width:"100%",padding:"11px 14px",borderRadius:12,border:"1px solid #e2e8f0",fontSize:14,marginBottom:10,boxSizing:"border-box",outline:"none"},
  lbl:{fontSize:12,fontWeight:600,color:"#64748b",marginBottom:4,display:"block"},
  ib:{background:"#f1f5f9",borderRadius:12,padding:"10px 14px",marginBottom:8},
  pc:{background:"#fff",borderRadius:14,padding:16,border:"1px solid #f1f5f9",marginBottom:10},
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
  const [search,setSearch]=useState("");
  const [cart,setCart]=useState({});
  const [sheet,setSheet]=useState(null);
  const [zonas,setZonas]=useState([]);
  const [zonaSelId,setZonaSelId]=useState("");
  const [zonaSel,setZonaSel]=useState(null);
  const [addr,setAddr]=useState({calle:"",referencia:""});
  const [form,setForm]=useState({nombre:"",telefono:"",sexo:"",pago:"Pago Móvil",recibirPromos:false});
  const [selSvc,setSelSvc]=useState(null);
  const [svcForm,setSvcForm]=useState({nombre:"",telefono:"",direccion:"",detalle:""});
  const [superProds,setSuperProds]=useState([]);
  const [provProds,setProvProds]=useState([]);
  const [provPromos,setProvPromos]=useState([]);
  const [combos,setCombos]=useState([]);
  const [resenaSheet,setResenaSheet]=useState(null);
  const [resena,setResena]=useState({estrellas:0,comentario:"",nombre:"",telefono:""});
  const [resenaMsj,setResenaMsj]=useState("");
  const [pedidoRef,setPedidoRef]=useState("");

  // ── PEDIDOS (NUEVO) ──────────────────────────────────────
  const [pedidos,setPedidos]=useState([]);
  const [pedidoFiltro,setPedidoFiltro]=useState("todos");
  // ─────────────────────────────────────────────────────────

  const [provMode,setProvMode]=useState("login");
  const [provForm,setProvForm]=useState({usuario:"",nombre:"",negocio:"",telefono:"",email:"",categorias:[],pass:""});
  const [provData,setProvData]=useState(null);
  const [myProds,setMyProds]=useState([]);
  const [myPromos,setMyPromos]=useState([]);
  const [myVentas,setMyVentas]=useState([]);
  const [pendProds,setPendProds]=useState([]);
  const [pendPromos,setPendPromos]=useState([]);
  const [pendResenas,setPendResenas]=useState([]);
  const [allZonas,setAllZonas]=useState([]);
  const [allProveedores,setAllProveedores]=useState([]);
  const [adminVentas,setAdminVentas]=useState([]);
  const [catFilter,setCatFilter]=useState("Todas");
  const [combosAdmin,setCombosAdmin]=useState([]);
  const [rejectMotivo,setRejectMotivo]=useState({});
  const [resetPass,setResetPass]=useState({});

  const [newProd,setNewProd]=useState({nombre:"",descripcion:"",marca:"",presentacion:"",precio:"",unidad:"porción",categoria:"Comida preparada",stock:1,hi:"08:00",hf:"18:00",permanente:false});
  const [editandoHorario,setEditandoHorario]=useState(false);
  const [horarioNegocio,setHorarioNegocio]=useState({desde:"08:00",hasta:"20:00",descripcion:""});
  const [editingProdId,setEditingProdId]=useState(null);
  const [newPromo,setNewPromo]=useState({nombre:"",descripcion:"",precio:"",fecha_inicio:"",fecha_fin:""});
  const [promoFotoFile,setPromoFotoFile]=useState(null);
  const [promoFotoPreview,setPromoFotoPreview]=useState(null);
  const [logoFile,setLogoFile]=useState(null);
  const [fotoFile,setFotoFile]=useState(null);
  const [logoPreview,setLogoPreview]=useState(null);
  const [fotoPreview,setFotoPreview]=useState(null);
  const [loading,setLoading]=useState(false);
  const [pmsg,setPmsg]=useState("");
  const [provTab,setProvTab]=useState("estado");
  const [adminSec,setAdminSec]=useState("dashboard");
  const [newSP,setNewSP]=useState({nombre:"",marca:"",presentacion:"",descripcion:"",precio:"",unidad:"kg",emoji:"🛒",categoria:SUPER_CATS[0]});
  const [spFoto,setSpFoto]=useState(null);
  const [spFotoPreview,setSpFotoPreview]=useState(null);
  const [newZona,setNewZona]=useState({municipio:"San Fernando",zona:"",tipo:"barrio",costo_delivery:1.50,delivery_gratis_super:18.00,delivery_gratis_comida:12.00});
  const [newCombo,setNewCombo]=useState({nombre:"",descripcion:"",precio:"",temporada:"",fecha_inicio:"",fecha_fin:""});
  const [notaSheet,setNotaSheet]=useState(null);
  const [notaTemp,setNotaTemp]=useState("");
  const [prodResenas,setProdResenas]=useState({});

  useEffect(()=>{loadAll();},[]);

  useEffect(()=>{
    const interval=setInterval(()=>{
      loadAll();
      if(provData){loadMyProds(provData.id);loadMyPromos(provData.id);}
      if(provMode==="admin"){loadAdmin();loadPedidos();}
    },30000);
    return ()=>clearInterval(interval);
  },[provData,provMode]);

  const loadAll=async()=>{
    const hoy=new Date().toISOString().split("T")[0];
    const [z,sp,pp,pr,cb]=await Promise.all([
      supabase.from("zonas_delivery").select("*").eq("activa",true).order("municipio"),
      supabase.from("productos_supermercado").select("*").eq("disponible",true).order("categoria"),
      supabase.from("productos_proveedor").select("*,proveedores(negocio,logo_url,en_pausa,activo,horario_desde,horario_hasta,horario_desc)").eq("aprobado",true).eq("disponible",true).eq("rechazado",false),
      supabase.from("promociones_proveedor").select("*,proveedores(negocio,logo_url,en_pausa,activo,horario_desde,horario_hasta,horario_desc)").eq("aprobada",true).eq("activa",true),
      supabase.from("combos").select("*").eq("activa",true),
    ]);
    if(z.data)setZonas(z.data);
    if(sp.data)setSuperProds(sp.data);
    if(pp.data)setProvProds(pp.data.filter(p=>!p.proveedores?.en_pausa&&p.proveedores?.activo!==false&&(p.permanente||(p.fecha===hoy&&p.stock>0))));
    if(pr.data)setProvPromos(pr.data.filter(p=>!p.proveedores?.en_pausa&&p.proveedores?.activo!==false));
    if(cb.data)setCombos(cb.data);
  };

  // ── FUNCIONES DE PEDIDOS (NUEVO) ─────────────────────────
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
      const margen=i.cat==="Supermercado"?0.10:0.20;
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
  // ─────────────────────────────────────────────────────────

  const allProds=[
    ...superProds.map(p=>({id:`sp_${p.id}`,name:p.nombre,cat:"Supermercado",superCat:p.categoria,price:p.precio,unit:p.unidad,emoji:p.emoji||"🛒",margin:0.10,foto:p.foto_url,marca:p.marca,presentacion:p.presentacion,descripcion:p.descripcion,abierto:true})),
    ...provProds.map(p=>({id:`pv_${p.id}`,name:p.nombre,cat:p.categoria,price:p.precio,unit:p.unidad,emoji:"🍽️",margin:0.20,kitchen:p.proveedores?.negocio,logo:p.proveedores?.logo_url,foto:p.foto_url,marca:p.marca,presentacion:p.presentacion,descripcion:p.descripcion,stock:p.stock,horario:p.permanente?"Siempre disponible":`${p.horario_inicio}–${p.horario_fin}`,tag:p.stock<=3?`Solo ${p.stock} disp.`:null,dbId:p.id,abierto:p.proveedores?.activo!==false&&!p.proveedores?.en_pausa,horarioNeg:p.proveedores?.horario_desde&&p.proveedores?.horario_hasta?`${p.proveedores.horario_desde}–${p.proveedores.horario_hasta}${p.proveedores.horario_desc?" ("+p.proveedores.horario_desc+")":""}`:null})),
    ...provPromos.map(pr=>({id:`promo_${pr.id}`,name:pr.nombre,cat:"Comida preparada",price:pr.precio,unit:"promo",emoji:"🎁",margin:0.20,kitchen:pr.proveedores?.negocio,logo:pr.proveedores?.logo_url,foto:pr.foto_url,descripcion:pr.descripcion,isPromo:true,tag:"🎉 Promo",horario:`Hasta ${pr.fecha_fin}`,abierto:pr.proveedores?.activo!==false&&!pr.proveedores?.en_pausa,horarioNeg:pr.proveedores?.horario_desde&&pr.proveedores?.horario_hasta?`${pr.proveedores.horario_desde}–${pr.proveedores.horario_hasta}${pr.proveedores.horario_desc?" ("+pr.proveedores.horario_desc+")":""}`:null})),
  ];

  const allProdsConMargen=allProds.map(p=>({...p,priceOriginal:p.price,price:p.cat==="Supermercado"?p.price:parseFloat((p.price*1.20).toFixed(2))}));

  const filteredProds=allProdsConMargen.filter(p=>{
    const matchCat=cat==="Todo"||(cat==="Supermercado"?p.cat==="Supermercado":p.cat===cat);
    const matchSearch=p.name.toLowerCase().includes(search.toLowerCase());
    const matchSuperCat=cat!=="Supermercado"||superCat==="Todas"||p.superCat===superCat;
    return matchCat&&matchSearch&&matchSuperCat;
  });
  const superGroups=(cat==="Todo"||cat==="Supermercado")?SUPER_CATS.map(sc=>({cat:sc,items:filteredProds.filter(p=>p.cat==="Supermercado"&&p.superCat===sc)})).filter(g=>g.items.length>0):[];
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
    if(p.cat==="Supermercado")return p.price;
    return parseFloat((p.price*1.20).toFixed(2));
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
    const lineas=items.map(i=>`  • ${i.name} x${i.qty} — ${(i.price*i.qty).toFixed(2)}`).join("\n");
    const dir=`${zonaSel?.zona||""}, ${addr.calle}${addr.referencia?`, ${addr.referencia}`:""}`;
    const hora=new Date().toLocaleTimeString("es-VE",{hour:"2-digit",minute:"2-digit"});
    const delDetalle=del===0?"GRATIS 🎉":`${del.toFixed(2)}${delSuper>0&&delFood>0?` (super ${delSuper.toFixed(2)} + comida ${delFood.toFixed(2)})`:""}`;
    return `🛒 *Nuevo pedido ${APP_NAME} ${CITY}*\n📋 Ref: ${pedidoRef}\n${"─".repeat(28)}\n${lineas}\n${"─".repeat(28)}\nSubtotal: ${sub.toFixed(2)}\nDelivery: ${delDetalle}\n*TOTAL: ${total.toFixed(2)}*\n${"─".repeat(28)}\n👤 ${form.nombre}\n📱 ${form.telefono}\n📍 ${zonaSel?.zona||""}\n🏠 ${dir}\n💳 ${form.pago}\n⏰ ${hora}`;
  };

  const sendWa=()=>{window.open(`https://wa.me/${WA}?text=${encodeURIComponent(buildWaMsg())}`);};
  const sendSvcWa=()=>{const m=`*Solicitud: ${selSvc.name}* — ${APP_NAME}\n\nNombre: ${svcForm.nombre}\nTeléfono: ${svcForm.telefono}\nDirección: ${svcForm.direccion}\nDetalle: ${svcForm.detalle}`;window.open(`https://wa.me/${WA}?text=${encodeURIComponent(m)}`);setSheet(null);setSelSvc(null);};
  const enviarResena=async()=>{if(!resena.estrellas||!resena.nombre)return setResenaMsj("Pon tu nombre y calificación");await supabase.from("resenas").insert({producto_id:resenaSheet,cliente_nombre:resena.nombre,cliente_telefono:resena.telefono,estrellas:resena.estrellas,comentario:resena.comentario,aprobada:false});setResenaMsj("✅ Gracias por tu reseña.");setTimeout(()=>{setSheet(null);setResenaSheet(null);setResena({estrellas:0,comentario:"",nombre:"",telefono:""});setResenaMsj("");},2000);};

  const upload=async(file,bucket,path)=>{await supabase.storage.from(bucket).upload(path,file,{upsert:true});return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;};

  const handleLogin=async()=>{
    if(!provForm.usuario||!provForm.pass)return setPmsg("Completa usuario y contraseña");
    if(provForm.usuario===ADMIN_USER&&provForm.pass===ADMIN_PASS){setProvMode("admin");loadAdmin();loadPedidos();return;}
    setLoading(true);
    const{data,error}=await supabase.from("proveedores").select("*").eq("usuario",provForm.usuario).single();
    setLoading(false);
    if(error||!data)return setPmsg("Usuario no encontrado");
    if(data.en_pausa)return setPmsg("Tu cuenta está pausada. Contacta al administrador.");
    if(data.password_plain&&data.password_plain!==provForm.pass)return setPmsg("Contraseña incorrecta");
    setProvData(data);setProvMode("dash");setProvTab("prod_aprobados");setPmsg("");
    loadMyProds(data.id);loadMyPromos(data.id);loadMyVentas(data.id);
  };

  const handleRegister=async()=>{
    if(!provForm.usuario||!provForm.nombre||!provForm.negocio||!provForm.telefono||!provForm.pass)return setPmsg("Completa todos los campos obligatorios");
    setLoading(true);
    let logo_url=null;
    if(logoFile)logo_url=await upload(logoFile,"logos",`${provForm.usuario}_logo`);
    const{error}=await supabase.from("proveedores").insert({
      usuario:provForm.usuario,nombre:provForm.nombre,negocio:provForm.negocio,
      telefono:provForm.telefono,email:provForm.email,categorias:provForm.categorias,
      logo_url,aprobado:true,activo:false,en_pausa:false,password_plain:provForm.pass
    });
    setLoading(false);
    if(error)return setPmsg(error.message.includes("unique")?"Ese usuario ya existe":"Error al registrarse: "+error.message);
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

  const loadAdmin=async()=>{
    const[pr,re,zo,av,todos,cb,ped,promo]=await Promise.all([
      supabase.from("productos_proveedor").select("*,proveedores(negocio,id)").eq("aprobado",false).eq("rechazado",false),
      supabase.from("resenas").select("*").eq("aprobada",false),
      supabase.from("zonas_delivery").select("*").order("municipio"),
      supabase.from("ventas").select("*").order("fecha",{ascending:false}).limit(100),
      supabase.from("proveedores").select("*").eq("aprobado",true).order("negocio"),
      supabase.from("combos").select("*").order("created_at",{ascending:false}),
      supabase.from("pedidos").select("*").order("created_at",{ascending:false}).limit(200),
      supabase.from("promociones_proveedor").select("*,proveedores(negocio)").eq("aprobada",false).eq("activa",true),
    ]);
    if(pr.data)setPendProds(pr.data);
    if(re.data)setPendResenas(re.data);
    if(zo.data)setAllZonas(zo.data);
    if(av.data)setAdminVentas(av.data);
    if(todos.data)setAllProveedores(todos.data);
    if(cb.data)setCombosAdmin(cb.data);
    if(ped.data)setPedidos(ped.data);
    if(promo.data)setPendPromos(promo.data);
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
      primera_aprobacion:auto,
      rechazado:false,
      fecha:new Date().toISOString().split("T")[0],
    });
    setLoading(false);
    if(error){setPmsg("Error: "+error.message);return;}
    setPmsg(auto?"✅ Producto publicado directamente":"✅ Enviado al admin para aprobación");
    setNewProd({nombre:"",descripcion:"",marca:"",presentacion:"",precio:"",unidad:"porción",categoria:"Comida preparada",stock:1,hi:"08:00",hf:"18:00",permanente:false});
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
  const notifyClientes=async(promo)=>{const{data:c}=await supabase.from("ventas").select("cliente_telefono").eq("proveedor_id",provData.id);const nums=[...new Set((c||[]).filter(x=>x.cliente_telefono).map(x=>x.cliente_telefono))];if(nums.length===0)return alert("Aún no tienes compradores registrados");const msg=`🎉 *${provData.negocio}* tiene una nueva promo!\n\n*${promo.nombre}*\n${promo.descripcion}\n💰 $${promo.precio}\n📅 Hasta ${promo.fecha_fin}\n\n👉 mimercado-mu5k.vercel.app`;window.open(`https://wa.me/${nums[0]}?text=${encodeURIComponent(msg)}`);};

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
    await supabase.from("productos_supermercado").insert({nombre:newSP.nombre,categoria:newSP.categoria,marca:newSP.marca||null,presentacion:newSP.presentacion||null,descripcion:newSP.descripcion||null,precio:parseFloat(newSP.precio),unidad:newSP.unidad,emoji:newSP.emoji,foto_url,disponible:true});
    setLoading(false);
    setNewSP({nombre:"",marca:"",presentacion:"",descripcion:"",precio:"",unidad:"kg",emoji:"🛒",categoria:SUPER_CATS[0]});
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
        <div style={{display:"flex",alignItems:"center"}}><span style={s.logo}>{APP_NAME}</span><span style={s.city}>{CITY}</span></div>
        {count>0&&<button style={s.cBtn} onClick={()=>setSheet("cart")}>🛒 <span style={s.cN}>{count}</span><span style={{fontSize:12}}>${total.toFixed(2)}</span></button>}
      </div>
      <div style={s.tabs}>{MAIN_TABS.map(t=><button key={t} style={s.tab(tab===t)} onClick={()=>setTab(t)}>{t}</button>)}</div>

      {/* INICIO */}
      {tab==="Inicio"&&(<>
        <div style={s.banner}><p style={s.bT}>Bienvenido a {APP_NAME} {CITY} 👋</p><p style={s.bS}>Todo lo que necesitas sin salir de casa</p><span style={s.bdg("#22c55e","#fff")}>✓ Delivery desde $1</span><span style={s.bdg(A,P)}>Gratis desde $10</span></div>
        <div style={s.promoCard}><div style={{fontSize:18,fontWeight:700,marginBottom:4}}>{horario.label}</div><div style={{fontSize:13,color:"rgba(255,255,255,0.8)"}}>{horario.sub}</div><button onClick={()=>{setTab("Productos");setCat("Comida preparada");}} style={{marginTop:10,background:"rgba(255,255,255,0.2)",border:"none",borderRadius:10,padding:"7px 14px",color:"#fff",fontSize:12,fontWeight:600,cursor:"pointer"}}>Ver opciones →</button></div>
        {combos.length>0&&(<div style={{padding:"0 16px"}}><div style={s.sT}>🎁 Combos especiales</div>{combos.map(c=>(<div key={c.id} style={s.comboCard}>{c.imagen_url&&<img src={c.imagen_url} alt="" style={{width:"100%",height:100,objectFit:"cover",borderRadius:8,marginBottom:8}}/>}<div style={{fontSize:14,fontWeight:700,color:P}}>{c.nombre}</div><div style={{fontSize:12,color:"#64748b",margin:"2px 0 6px"}}>{c.descripcion}</div><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontSize:16,fontWeight:700,color:P}}>${parseFloat(c.precio).toFixed(2)}</span>{c.temporada&&<span style={{fontSize:11,background:"#fef3c7",color:"#92400e",padding:"2px 8px",borderRadius:8,fontWeight:600}}>{c.temporada}</span>}</div></div>))}</div>)}
        {provPromos.length>0&&(
          <div style={{padding:"0 16px 4px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"14px 0 8px"}}>
              <div style={s.sT}>🎉 Promociones activas</div>
              <button onClick={()=>{setTab("Productos");setCat("Comida preparada");}} style={{fontSize:11,color:P,background:"none",border:"none",cursor:"pointer",fontWeight:600}}>Ver todo →</button>
            </div>
            <div style={{display:"flex",gap:10,overflowX:"auto",paddingBottom:4}}>
              {provPromos.slice(0,6).map(p=>(
                <div key={p.id} onClick={()=>{setTab("Productos");setCat("Comida preparada");}} style={{flexShrink:0,width:150,background:"#fff",borderRadius:12,border:"2px solid #f59e0b",overflow:"hidden",cursor:"pointer"}}>
                  {p.foto_url?<img src={p.foto_url} alt={p.nombre} style={{width:"100%",height:80,objectFit:"cover"}}/>:<div style={{height:80,background:"#fef3c7",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28}}>🎁</div>}
                  <div style={{padding:"6px 8px"}}>
                    <div style={{fontSize:11,color:"#7e22ce",fontWeight:700,marginBottom:2}}>🎉 Promo</div>
                    <div style={{fontSize:12,fontWeight:600,color:P,lineHeight:1.2}}>{p.nombre}</div>
                    {p.proveedores?.negocio&&<div style={{fontSize:10,color:"#94a3b8",marginTop:2}}>{p.proveedores.negocio}</div>}
                    <div style={{fontSize:13,fontWeight:700,color:P,marginTop:4}}>${parseFloat(p.precio||0).toFixed(2)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div style={{padding:"0 16px 16px"}}><div style={s.sT}>Explorar</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>{[{e:"🛒",l:"Supermercado",c:"Supermercado"},{e:"🍱",l:"Comida preparada",c:"Comida preparada"},{e:"🍰",l:"Postres",c:"Postres"},{e:"⚡",l:"Servicios",c:null}].map(x=>(<button key={x.l} onClick={()=>{if(x.c){setTab("Productos");setCat(x.c);}else setTab("Servicios");}} style={{background:"#fff",border:"1px solid #f1f5f9",borderRadius:14,padding:"16px 12px",display:"flex",flexDirection:"column",alignItems:"center",gap:6,cursor:"pointer"}}><span style={{fontSize:28}}>{x.e}</span><span style={{fontSize:13,fontWeight:600,color:P}}>{x.l}</span></button>))}</div></div>
      </>)}

      {/* PRODUCTOS */}
      {tab==="Productos"&&(<>
        <div style={s.banner}><p style={s.bT}>Tienda {CITY} 🛒</p><p style={s.bS}>Supermercado · Comida · Postres · Más</p><span style={s.bdg("#22c55e","#fff")}>Gratis desde $10 comida · $15 super</span></div>
        <div style={s.sw}><input style={s.si} placeholder="🔍  Buscar..." value={search} onChange={e=>setSearch(e.target.value)}/></div>
        <div style={s.cs}>{ALL_CATS.map(c=><button key={c} style={s.cb(cat===c)} onClick={()=>{setCat(c);setSuperCat("Todas");}}>{c}</button>)}</div>
        {cat==="Supermercado"&&(<div style={{padding:"0 16px 8px"}}><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>{[{l:"Todas",e:"🛒"},...SUPER_CATS.map(sc=>({l:sc,e:sc.split(" ")[0]}))].map(x=>(<button key={x.l} onClick={()=>setSuperCat(x.l==="Todas"?"Todas":x.l)} style={{background:superCat===(x.l==="Todas"?"Todas":x.l)?P:"#fff",border:superCat===(x.l==="Todas"?"Todas":x.l)?"none":"1px solid #f1f5f9",borderRadius:12,padding:"10px 6px",display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer"}}><span style={{fontSize:20}}>{x.e}</span><span style={{fontSize:10,fontWeight:600,color:superCat===(x.l==="Todas"?"Todas":x.l)?"#fff":"#64748b",textAlign:"center",lineHeight:1.2}}>{x.l==="Todas"?"Todas":x.l.replace(/^[^\s]+\s/,"")}</span></button>))}</div></div>)}
        <div style={s.sec}>
          {(cat==="Todo"||cat==="Supermercado")&&superGroups.map(g=>(<div key={g.cat}><div style={s.sT}>{g.cat}</div><div style={s.grid}>{g.items.map(p=><Card key={p.id} p={p}/>)}</div></div>))}
          {provGroups.map(g=>(<div key={g.cat}><div style={s.sT}>{g.cat==="Comida preparada"?"🍱":g.cat==="Postres"?"🍰":g.cat==="Jugos y bebidas"?"🥤":"🍞"} {g.cat}</div><div style={s.grid}>{g.items.map(p=><Card key={p.id} p={p}/>)}</div></div>))}
          {filteredProds.length===0&&<div style={{textAlign:"center",padding:"40px 0",color:"#94a3b8"}}><div style={{fontSize:40}}>🔍</div><p>No encontramos ese producto</p></div>}
        </div>
      </>)}

      {/* SERVICIOS */}
      {tab==="Servicios"&&(<>
        <div style={{...s.banner,paddingBottom:14}}><p style={s.bT}>Servicios en {CITY} ⚡</p><p style={{fontSize:12,color:"rgba(255,255,255,0.7)",margin:0}}>Todo sin salir de casa</p></div>
        <div style={{...s.sec,marginTop:14}}>{SVCS.map(sv=>(<div key={sv.id} style={{background:"#fff",borderRadius:14,padding:14,border:"1px solid #f1f5f9",display:"flex",gap:12,alignItems:"flex-start",marginBottom:10}}><div style={{fontSize:28,width:44,height:44,background:sv.bg,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{sv.emoji}</div><div style={{flex:1}}><div style={{fontSize:14,fontWeight:700}}>{sv.name}</div><div style={{fontSize:12,color:"#64748b",margin:"2px 0 6px"}}>{sv.desc}</div><span style={{fontSize:11,fontWeight:600,color:sv.tc,background:sv.bg,padding:"2px 8px",borderRadius:8}}>{sv.price}</span></div><button style={{background:P,color:"#fff",border:"none",borderRadius:10,padding:"7px 14px",fontSize:12,fontWeight:600,cursor:"pointer"}} onClick={()=>{setSelSvc(sv);setSheet("service");}}>Solicitar</button></div>))}</div>
      </>)}

      {/* PROVEEDORES */}
      {tab==="Proveedores"&&(<div style={{...s.sec,marginTop:16}}>

        {(provMode==="login"||provMode==="register")&&(<div style={s.pc}>
          <div style={s.pT}>{provMode==="login"?"🏪 Acceso proveedores":"📝 Registro de proveedor"}</div>
          {pmsg&&<div style={s.msg(pmsg.includes("✅"))}>{pmsg}</div>}
          {provMode==="register"&&(<>
            <label style={s.lbl}>Usuario * (sin espacios)</label>
            <input style={s.inp} placeholder="cocina_maria" value={provForm.usuario} onChange={e=>setProvForm({...provForm,usuario:e.target.value.toLowerCase().replace(/\s/g,"")})}/>
            <label style={s.lbl}>Nombre completo *</label>
            <input style={s.inp} placeholder="María González" value={provForm.nombre} onChange={e=>setProvForm({...provForm,nombre:e.target.value})}/>
            <label style={s.lbl}>Nombre del negocio *</label>
            <input style={s.inp} placeholder="Cocina de María" value={provForm.negocio} onChange={e=>setProvForm({...provForm,negocio:e.target.value})}/>
            <label style={s.lbl}>WhatsApp *</label>
            <input style={s.inp} placeholder="+58 424-000-0000" value={provForm.telefono} onChange={e=>setProvForm({...provForm,telefono:e.target.value})}/>
            <label style={s.lbl}>Correo electrónico (opcional)</label>
            <input style={s.inp} placeholder="correo@ejemplo.com" type="email" value={provForm.email} onChange={e=>setProvForm({...provForm,email:e.target.value})}/>
            <label style={s.lbl}>Categorías</label>
            <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:10}}>{PROV_CATS.map(c=>(<button key={c} onClick={()=>setProvForm(f=>({...f,categorias:f.categorias.includes(c)?f.categorias.filter(x=>x!==c):[...f.categorias,c]}))} style={{padding:"5px 10px",borderRadius:20,fontSize:12,cursor:"pointer",background:provForm.categorias.includes(c)?P:"#f1f5f9",color:provForm.categorias.includes(c)?"#fff":"#64748b",border:"none",fontWeight:500}}>{c}</button>))}</div>
            <label style={s.lbl}>Logo del negocio</label>
            {logoPreview&&<img src={logoPreview} alt="" style={{width:60,height:60,borderRadius:"50%",objectFit:"cover",marginBottom:8}}/>}
            <input type="file" accept="image/*" style={{marginBottom:10,fontSize:13}} onChange={e=>{const f=e.target.files[0];if(f){setLogoFile(f);setLogoPreview(URL.createObjectURL(f));}}}/>
          </>)}
          {provMode==="login"&&<><label style={s.lbl}>Usuario</label><input style={s.inp} placeholder="tu_usuario" value={provForm.usuario} onChange={e=>setProvForm({...provForm,usuario:e.target.value})}/></>}
          <label style={s.lbl}>Contraseña *</label>
          <input style={s.inp} type="password" placeholder="••••••••" value={provForm.pass} onChange={e=>setProvForm({...provForm,pass:e.target.value})}/>
          <button style={s.btn} onClick={provMode==="login"?handleLogin:handleRegister} disabled={loading}>{loading?"Procesando...":(provMode==="login"?"Entrar":"Registrarme")}</button>
          <button style={s.btnG} onClick={()=>{setProvMode(provMode==="login"?"register":"login");setPmsg("");}}>{provMode==="login"?"¿Nuevo? Regístrate aquí":"¿Ya tienes cuenta? Inicia sesión"}</button>
        </div>)}

        {/* DASHBOARD PROVEEDOR */}
        {provMode==="dash"&&provData&&(<>
          <div style={{...s.pc,background:"#f0fdf4",borderColor:"#bbf7d0"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
              {provData.logo_url&&<img src={provData.logo_url} alt="" style={{width:48,height:48,borderRadius:"50%",objectFit:"cover"}}/>}
              <div><div style={{fontSize:14,fontWeight:700,color:"#15803d"}}>{provData.negocio}</div><div style={{fontSize:12,color:"#64748b"}}>@{provData.usuario}</div></div>
            </div>
            <button style={s.toggleBtn(provData.activo)} onClick={toggleMiEstado}>
              <span style={{fontSize:20}}>{provData.activo?"🟢":"🔴"}</span>
              <div><div style={{fontSize:14,fontWeight:700,color:provData.activo?"#15803d":"#92400e"}}>{provData.activo?"ABIERTO — Recibiendo pedidos":"CERRADO — No recibo pedidos"}</div><div style={{fontSize:11,color:"#64748b"}}>Toca para {provData.activo?"cerrar":"abrir"} tu negocio</div></div>
            </button>
            {!editandoHorario?(
              <div style={{marginTop:10,background:"#f8fafc",borderRadius:12,padding:"10px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{flex:1}}>
                  <div style={{fontSize:11,fontWeight:700,color:"#64748b",marginBottom:2}}>🕐 Horario de atención</div>
                  {provData.horario_desde&&provData.horario_hasta
                    ?<div style={{fontSize:13,color:P,fontWeight:600}}>{provData.horario_desde} – {provData.horario_hasta}{provData.horario_desc?<span style={{fontSize:11,color:"#64748b",fontWeight:400}}> · {provData.horario_desc}</span>:null}</div>
                    :<div style={{fontSize:12,color:"#94a3b8"}}>Sin horario — tus clientes no saben cuándo estás</div>
                  }
                </div>
                <button onClick={()=>{setHorarioNegocio({desde:provData.horario_desde||"08:00",hasta:provData.horario_hasta||"20:00",descripcion:provData.horario_desc||""});setEditandoHorario(true);}} style={{background:P,color:"#fff",border:"none",borderRadius:8,padding:"5px 10px",fontSize:11,fontWeight:600,cursor:"pointer",flexShrink:0,marginLeft:8}}>✏️ Editar</button>
              </div>
            ):(
              <div style={{marginTop:10,background:"#f0fdf4",borderRadius:12,padding:"12px 14px",border:"1px solid #bbf7d0"}}>
                <div style={{fontSize:12,fontWeight:700,color:"#15803d",marginBottom:10}}>🕐 Configura tu horario</div>
                <div style={{display:"flex",gap:10,marginBottom:8}}>
                  <div style={{flex:1}}><label style={s.lbl}>Abre a las</label><input style={s.inp} type="time" value={horarioNegocio.desde} onChange={e=>setHorarioNegocio({...horarioNegocio,desde:e.target.value})}/></div>
                  <div style={{flex:1}}><label style={s.lbl}>Cierra a las</label><input style={s.inp} type="time" value={horarioNegocio.hasta} onChange={e=>setHorarioNegocio({...horarioNegocio,hasta:e.target.value})}/></div>
                </div>
                <label style={s.lbl}>Nota (opcional)</label>
                <input style={s.inp} placeholder="Ej: Solo cenas, Desayunos y almuerzos..." value={horarioNegocio.descripcion} onChange={e=>setHorarioNegocio({...horarioNegocio,descripcion:e.target.value})}/>
                <div style={{display:"flex",gap:8}}>
                  <button onClick={async()=>{await supabase.from("proveedores").update({horario_desde:horarioNegocio.desde,horario_hasta:horarioNegocio.hasta,horario_desc:horarioNegocio.descripcion}).eq("id",provData.id);setProvData({...provData,horario_desde:horarioNegocio.desde,horario_hasta:horarioNegocio.hasta,horario_desc:horarioNegocio.descripcion});setEditandoHorario(false);setPmsg("✅ Horario actualizado");}} style={{...s.btnGreen,flex:1,borderRadius:10,padding:"9px",fontSize:12}}>Guardar</button>
                  <button onClick={()=>setEditandoHorario(false)} style={{...s.btnG,flex:1,marginTop:0,borderRadius:10,padding:"9px",fontSize:12}}>Cancelar</button>
                </div>
              </div>
            )}
          </div>

          <div style={{display:"flex",gap:6,marginBottom:12,overflowX:"auto"}}>
            {["estado","productos","promos","ventas"].map(t=>(<button key={t} onClick={()=>setProvTab(t)} style={{flexShrink:0,padding:"8px 12px",borderRadius:10,border:"none",background:provTab===t?P:"#f1f5f9",color:provTab===t?"#fff":"#64748b",fontSize:12,fontWeight:600,cursor:"pointer"}}>{t==="estado"?"📊 Stats":t==="productos"?"📦 Productos":t==="promos"?(myPromos.filter(pr=>!pr.aprobada&&pr.motivo_rechazo).length>0?`🎉 Promos ⚠️${myPromos.filter(pr=>!pr.aprobada&&pr.motivo_rechazo).length}`:"🎉 Promos"):"💰 Ventas"}</button>))}
          </div>
          {pmsg&&<div style={s.msg(pmsg.includes("✅"))}>{pmsg}</div>}

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
                <select style={{...s.inp,background:"#fff"}} value={newProd.categoria} onChange={e=>setNewProd({...newProd,categoria:e.target.value})}>{(provData.categorias?.length>0?provData.categorias:PROV_CATS).map(c=><option key={c}>{c}</option>)}</select>
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
                <button style={s.btn} onClick={publishProd} disabled={loading}>{loading?"Subiendo...":"Publicar producto"}</button>
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
                    <div style={{display:"flex",gap:6}}>
                      <button onClick={()=>toggleDisp(p.id,p.disponible)} style={{flex:1,padding:"7px",borderRadius:10,border:"none",fontSize:12,fontWeight:600,cursor:"pointer",background:p.disponible?"#fff7ed":"#f0fdf4",color:p.disponible?"#c2410c":"#15803d"}}>
                        {p.disponible?"⏸️ Pausar":"▶️ Activar"}
                      </button>
                      <button onClick={async()=>{if(window.confirm("¿Eliminar este producto?"))await supabase.from("productos_proveedor").delete().eq("id",p.id);loadMyProds(provData.id);loadAll();}} style={{flex:1,padding:"7px",borderRadius:10,border:"none",fontSize:12,fontWeight:600,cursor:"pointer",background:"#fee2e2",color:"#be123c"}}>
                        🗑️ Eliminar
                      </button>
                    </div>
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
                        <select style={{...s.inp,background:"#fff"}} value={newProd.categoria} onChange={e=>setNewProd({...newProd,categoria:e.target.value})}>{(provData.categorias?.length>0?provData.categorias:PROV_CATS).map(c=><option key={c}>{c}</option>)}</select>
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

          {provTab==="promos"&&(<>
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
            {myPromos.length>0&&(
              <div style={s.pc}>
                <div style={s.pT}>Mis promociones ({myPromos.length})</div>
                {myPromos.filter(pr=>!pr.aprobada&&pr.motivo_rechazo).length>0&&(
                  <div style={{marginBottom:12}}>
                    <div style={{fontSize:11,fontWeight:700,color:"#be123c",marginBottom:8,letterSpacing:0.5}}>✗ RECHAZADAS</div>
                    {myPromos.filter(pr=>!pr.aprobada&&pr.motivo_rechazo).map(pr=>(
                      <div key={pr.id} style={{background:"#fff1f2",borderRadius:10,padding:"10px 12px",marginBottom:8,border:"1px solid #fecdd3"}}>
                        {pr.foto_url&&<img src={pr.foto_url} alt="" style={{width:"100%",height:80,objectFit:"cover",borderRadius:8,marginBottom:6}}/>}
                        <div style={{fontSize:13,fontWeight:700,color:"#be123c"}}>{pr.nombre}</div>
                        <div style={{fontSize:11,color:"#64748b"}}>${pr.precio} · {pr.descripcion}</div>
                        {pr.motivo_rechazo&&<div style={{background:"#fee2e2",borderRadius:6,padding:"6px 8px",fontSize:11,color:"#be123c",marginTop:6}}>💬 Motivo: {pr.motivo_rechazo}</div>}
                      </div>
                    ))}
                  </div>
                )}
                {myPromos.filter(pr=>!pr.aprobada&&!pr.motivo_rechazo).length>0&&(
                  <div style={{marginBottom:12}}>
                    <div style={{fontSize:11,fontWeight:700,color:"#854d0e",marginBottom:8,letterSpacing:0.5}}>⏳ PENDIENTES</div>
                    {myPromos.filter(pr=>!pr.aprobada&&!pr.motivo_rechazo).map(pr=>(
                      <div key={pr.id} style={{background:"#fef9c3",borderRadius:10,padding:"10px 12px",marginBottom:8,border:"1px solid #fde68a"}}>
                        {pr.foto_url&&<img src={pr.foto_url} alt="" style={{width:"100%",height:80,objectFit:"cover",borderRadius:8,marginBottom:6}}/>}
                        <div style={{fontSize:13,fontWeight:700}}>{pr.nombre}</div>
                        <div style={{fontSize:11,color:"#64748b"}}>${pr.precio} · {pr.descripcion}</div>
                        <div style={{fontSize:11,color:"#92400e",marginTop:4}}>⏳ En revisión por el admin</div>
                      </div>
                    ))}
                  </div>
                )}
                {myPromos.filter(pr=>pr.aprobada).map(pr=>(
                  <div key={pr.id} style={{padding:"10px 0",borderBottom:"1px solid #f1f5f9"}}>
                    {pr.foto_url&&<img src={pr.foto_url} alt="" style={{width:"100%",height:100,objectFit:"cover",borderRadius:8,marginBottom:6}}/>}
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                      <div><div style={{fontSize:13,fontWeight:700}}>{pr.nombre}</div><div style={{fontSize:11,color:"#64748b"}}>${pr.precio} · {pr.fecha_inicio} → {pr.fecha_fin}</div><div style={{fontSize:11,color:"#94a3b8"}}>{pr.descripcion}</div></div>
                      <span style={{fontSize:11,fontWeight:600,padding:"2px 8px",borderRadius:8,background:"#dcfce7",color:"#15803d",flexShrink:0,marginLeft:8}}>✓ Activa</span>
                    </div>
                    <button onClick={()=>notifyClientes(pr)} style={{marginTop:8,background:"#25d366",color:"#fff",border:"none",borderRadius:10,padding:"7px 14px",fontSize:12,fontWeight:600,cursor:"pointer",width:"100%"}}>📲 Notificar compradores</button>
                  </div>
                ))}
              </div>
            )}
          </>)}

          {provTab==="ventas"&&(<div style={s.pc}><div style={s.pT}>💰 Mis ventas recientes</div>{myVentas.length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>Aún no tienes ventas registradas</div>}{myVentas.slice(0,20).map(v=>(<div key={v.id} style={{padding:"8px 0",borderBottom:"1px solid #f1f5f9",fontSize:12}}><div style={{display:"flex",justifyContent:"space-between"}}><span style={{fontWeight:600}}>{v.producto_nombre}</span><span style={{fontWeight:700,color:"#22c55e"}}>${(v.total_item||0).toFixed(2)}</span></div><div style={{color:"#94a3b8"}}>{v.cliente_nombre} · x{v.cantidad} · {v.fecha?.slice(0,10)}</div></div>))}</div>)}

          <button style={{...s.btnG,marginTop:8}} onClick={()=>{setProvMode("login");setProvData(null);setMyProds([]);setMyPromos([]);setMyVentas([]);setPmsg("");}}>Cerrar sesión</button>
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
                    <button onClick={()=>window.open(`https://wa.me/${ped.cliente_telefono?.replace(/\D/g,"")}?text=${encodeURIComponent(`Hola ${ped.cliente_nombre} 👋 Tu pedido *${ped.ref}* está ${estadoConfig.label}`)}`)} style={{...s.btnWa,marginTop:6,padding:"8px",fontSize:12}}>
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
                <div style={{display:"flex",gap:6,alignItems:"center"}}>
                  <input style={{...s.inp,marginBottom:0,flex:1,fontSize:12,padding:"7px 10px"}} type="password" placeholder="Nueva clave..." value={resetPass[p.id]||""} onChange={e=>setResetPass({...resetPass,[p.id]:e.target.value})}/>
                  <button onClick={()=>cambiarClave(p.id,resetPass[p.id]||"")} style={{...s.btnGreen,fontSize:11,flexShrink:0}}>🔑 Cambiar</button>
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
                    <button onClick={async()=>{await supabase.from("promociones_proveedor").update({aprobada:true,activa:true,motivo_rechazo:null}).eq("id",p.id);await loadAdmin();loadAll();}} style={{...s.btnGreen,width:"100%",marginBottom:10,borderRadius:10,padding:"9px",fontSize:13}}>✓ Aprobar promoción</button>
                    <label style={s.lbl}>Motivo del rechazo * (obligatorio para rechazar)</label>
                    <div style={{display:"flex",gap:6}}>
                      <input style={{...s.inp,marginBottom:0,flex:1,fontSize:12,padding:"8px 10px"}} placeholder="Ej: Falta foto, descripción incompleta..." value={rejectMotivo[`promo_${p.id}`]||""} onChange={e=>setRejectMotivo({...rejectMotivo,[`promo_${p.id}`]:e.target.value})}/>
                      <button onClick={async()=>{const motivo=rejectMotivo[`promo_${p.id}`]||"";if(!motivo.trim())return alert("Escribe el motivo del rechazo antes de continuar");await supabase.from("promociones_proveedor").update({aprobada:false,activa:false,motivo_rechazo:motivo}).eq("id",p.id);setRejectMotivo(prev=>({...prev,[`promo_${p.id}`]:""}));await loadAdmin();}} style={{...s.btnRed,fontSize:11,flexShrink:0}}>✗ Rechazar</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {adminSec==="resenas"&&(<div style={{margin:"0 16px"}}><div style={s.pc}><div style={s.pT}>Reseñas ({pendResenas.length})</div>{pendResenas.length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No hay pendientes ✓</div>}{pendResenas.map(r=>(<div key={r.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}><div style={{fontSize:13,fontWeight:600}}>{r.cliente_nombre}</div><div style={{color:"#f59e0b",fontSize:14}}>{"★".repeat(r.estrellas)}{"☆".repeat(5-r.estrellas)}</div><div style={{fontSize:12,color:"#64748b",margin:"4px 0"}}>{r.comentario}</div><div style={{display:"flex",gap:8}}><button onClick={()=>approveRe(r.id)} style={{...s.apvBtn,background:"#22c55e",color:"#fff"}}>✓ Publicar</button><button onClick={()=>rejectRe(r.id)} style={{...s.apvBtn,background:"#ef4444",color:"#fff"}}>✗ Eliminar</button></div></div>))}</div></div>)}

          {adminSec==="zonas"&&(<div style={{margin:"0 16px"}}><div style={s.pc}><div style={s.pT}>🗺️ Zonas</div>{allZonas.map(z=>(<div key={z.id} style={{padding:"8px 0",borderBottom:"1px solid #f1f5f9",fontSize:12}}><div style={{fontWeight:600,color:P}}>{z.zona} <span style={{color:"#94a3b8"}}>({z.municipio})</span></div><div style={{color:"#64748b"}}>Delivery: ${z.costo_delivery} · Gratis super: ${z.delivery_gratis_super} · comida: ${z.delivery_gratis_comida}</div></div>))}<div style={{marginTop:14}}><input style={s.inp} placeholder="Nombre de zona" value={newZona.zona} onChange={e=>setNewZona({...newZona,zona:e.target.value})}/><input style={s.inp} placeholder="Municipio" value={newZona.municipio} onChange={e=>setNewZona({...newZona,municipio:e.target.value})}/><div style={{display:"flex",gap:8}}><div style={{flex:1}}><label style={s.lbl}>Delivery $</label><input style={s.inp} type="number" value={newZona.costo_delivery} onChange={e=>setNewZona({...newZona,costo_delivery:parseFloat(e.target.value)})}/></div><div style={{flex:1}}><label style={s.lbl}>Gratis super $</label><input style={s.inp} type="number" value={newZona.delivery_gratis_super} onChange={e=>setNewZona({...newZona,delivery_gratis_super:parseFloat(e.target.value)})}/></div></div><label style={s.lbl}>Gratis comida $</label><input style={s.inp} type="number" value={newZona.delivery_gratis_comida} onChange={e=>setNewZona({...newZona,delivery_gratis_comida:parseFloat(e.target.value)})}/><button style={s.btn} onClick={addZona}>Guardar zona</button></div></div></div>)}

          {adminSec==="combos"&&(<div style={{margin:"0 16px"}}><div style={s.pc}><div style={s.pT}>🎁 Combos</div>{combosAdmin.map(c=>(<div key={c.id} style={{padding:"8px 0",borderBottom:"1px solid #f1f5f9",fontSize:12}}><div style={{fontWeight:600}}>{c.nombre} — ${c.precio}</div><div style={{color:"#64748b"}}>{c.temporada}</div></div>))}<div style={{marginTop:14}}><input style={s.inp} placeholder="Nombre" value={newCombo.nombre} onChange={e=>setNewCombo({...newCombo,nombre:e.target.value})}/><input style={s.inp} placeholder="Descripción" value={newCombo.descripcion} onChange={e=>setNewCombo({...newCombo,descripcion:e.target.value})}/><input style={s.inp} type="number" placeholder="Precio $" value={newCombo.precio} onChange={e=>setNewCombo({...newCombo,precio:e.target.value})}/><input style={s.inp} placeholder="Temporada" value={newCombo.temporada} onChange={e=>setNewCombo({...newCombo,temporada:e.target.value})}/><div style={{display:"flex",gap:8}}><div style={{flex:1}}><label style={s.lbl}>Desde</label><input style={s.inp} type="date" value={newCombo.fecha_inicio} onChange={e=>setNewCombo({...newCombo,fecha_inicio:e.target.value})}/></div><div style={{flex:1}}><label style={s.lbl}>Hasta</label><input style={s.inp} type="date" value={newCombo.fecha_fin} onChange={e=>setNewCombo({...newCombo,fecha_fin:e.target.value})}/></div></div><button style={s.btn} onClick={addCombo}>Publicar combo</button></div></div></div>)}

          {adminSec==="super"&&(<div style={{margin:"0 16px"}}><div style={s.pc}><div style={s.pT}>🛒 Supermercado ({superProds.length})</div>{superProds.map(p=>(<div key={p.id} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid #f1f5f9"}}>{p.foto_url?<img src={p.foto_url} alt="" style={{width:40,height:40,borderRadius:8,objectFit:"cover"}}/>:<span style={{fontSize:20}}>{p.emoji}</span>}<div style={{flex:1}}><div style={{fontSize:13,fontWeight:600}}>{p.nombre}</div><div style={{fontSize:11,color:"#64748b"}}>{p.categoria} · ${p.precio}/{p.unidad}</div></div><button onClick={()=>deleteSuperProd(`sp_${p.id}`)} style={{...s.btnRed,fontSize:11}}>Quitar</button></div>))}<div style={{marginTop:14}}><label style={s.lbl}>Categoría *</label><select style={{...s.inp,background:"#fff"}} value={newSP.categoria} onChange={e=>setNewSP({...newSP,categoria:e.target.value})}>{SUPER_CATS.map(c=><option key={c}>{c}</option>)}</select><div style={{display:"flex",gap:8,marginBottom:8}}><input style={{...s.inp,marginBottom:0,width:50}} placeholder="🛒" value={newSP.emoji} onChange={e=>setNewSP({...newSP,emoji:e.target.value})}/><input style={{...s.inp,marginBottom:0,flex:1}} placeholder="Nombre *" value={newSP.nombre} onChange={e=>setNewSP({...newSP,nombre:e.target.value})}/></div><div style={{display:"flex",gap:8,marginBottom:8}}><input style={{...s.inp,marginBottom:0,flex:1}} placeholder="Marca" value={newSP.marca} onChange={e=>setNewSP({...newSP,marca:e.target.value})}/><input style={{...s.inp,marginBottom:0,flex:1}} placeholder="Presentación" value={newSP.presentacion} onChange={e=>setNewSP({...newSP,presentacion:e.target.value})}/></div><div style={{display:"flex",gap:8,marginBottom:8}}><input style={{...s.inp,marginBottom:0,flex:1}} type="number" placeholder="Precio $" value={newSP.precio} onChange={e=>setNewSP({...newSP,precio:e.target.value})}/><input style={{...s.inp,marginBottom:0,width:80}} placeholder="kg/L" value={newSP.unidad} onChange={e=>setNewSP({...newSP,unidad:e.target.value})}/></div><input style={s.inp} placeholder="Descripción (opcional)" value={newSP.descripcion} onChange={e=>setNewSP({...newSP,descripcion:e.target.value})}/><label style={s.lbl}>Foto</label>{spFotoPreview&&<img src={spFotoPreview} alt="" style={{width:"100%",height:100,objectFit:"cover",borderRadius:10,marginBottom:8}}/>}<input type="file" accept="image/*" style={{marginBottom:10,fontSize:13}} onChange={e=>{const f=e.target.files[0];if(f){setSpFoto(f);setSpFotoPreview(URL.createObjectURL(f));}}}/><button style={s.btn} onClick={addSuperProd} disabled={loading}>{loading?"Guardando...":"Agregar"}</button></div></div></div>)}

          <button style={{...s.btnG,margin:"8px 16px 16px"}} onClick={()=>{setProvMode("login");setPendProds([]);setPendResenas([]);setAllProveedores([]);setPedidos([]);}}>Cerrar sesión admin</button>
        </>)}
      </div>)}

      {/* BOTÓN FLOTANTE */}
      {count>0&&!sheet&&tab!=="Proveedores"&&(<div style={{position:"fixed",bottom:16,left:"50%",transform:"translateX(-50%)",zIndex:150,width:"calc(100% - 32px)",maxWidth:398}}><button style={{...s.btn,margin:0,display:"flex",justifyContent:"space-between",alignItems:"center"}} onClick={()=>setSheet("cart")}><span>🛒 Ver pedido ({count})</span><span>${total.toFixed(2)}</span></button></div>)}

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
        {/* ── BOTÓN CORREGIDO: guarda en DB antes de abrir WhatsApp ── */}
        <button style={s.btnWa} onClick={async()=>{
          await guardarPedidoEnDB();
          sendWa();
          setSheet("success");
        }}>📲 Enviar pedido por WhatsApp</button>
        <button style={s.btnG} onClick={()=>setSheet("checkout")}>← Modificar datos</button>
      </div></div>)}

      {/* SHEET ÉXITO */}
      {sheet==="success"&&(<div style={s.ov}><div style={s.sh}><div style={s.hnd}/><div style={{textAlign:"center",padding:"16px 0"}}><div style={{fontSize:52,marginBottom:10}}>🎉</div><div style={{fontSize:20,fontWeight:700,color:P,marginBottom:6}}>¡Pedido enviado!</div><div style={{fontSize:13,color:"#64748b",lineHeight:1.7,marginBottom:20}}>Tu pedido <strong>{pedidoRef}</strong> fue enviado por WhatsApp.<br/>Te responderemos a <strong>{form.telefono}</strong> para coordinar el pago.<br/><br/>💳 Prepara tu pago por <strong>{form.pago}</strong>{form.recibirPromos&&<><br/><span style={{color:"#15803d",fontWeight:600}}>✓ Recibirás promociones</span></>}</div><button style={s.btnG} onClick={()=>{setCart({});setSheet(null);setForm({nombre:"",telefono:"",sexo:"",pago:"Pago Móvil",recibirPromos:false});setZonaSelId("");setZonaSel(null);setAddr({calle:"",referencia:""});setPedidoRef("");}}>Hacer otro pedido</button></div></div></div>)}

      {/* SHEET SERVICIO */}
      {sheet==="service"&&selSvc&&(<div style={s.ov} onClick={()=>setSheet(null)}><div style={s.sh} onClick={e=>e.stopPropagation()}><div style={s.hnd}/><div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}><span style={{fontSize:28}}>{selSvc.emoji}</span><div style={s.shT}>{selSvc.name}</div></div><label style={s.lbl}>Tu nombre</label><input style={s.inp} placeholder="María González" value={svcForm.nombre} onChange={e=>setSvcForm({...svcForm,nombre:e.target.value})}/><label style={s.lbl}>WhatsApp</label><input style={s.inp} placeholder="+58 424-000-0000" value={svcForm.telefono} onChange={e=>setSvcForm({...svcForm,telefono:e.target.value})}/><label style={s.lbl}>Dirección</label><input style={s.inp} placeholder="¿Dónde necesitas el servicio?" value={svcForm.direccion} onChange={e=>setSvcForm({...svcForm,direccion:e.target.value})}/><label style={s.lbl}>Detalle</label><input style={s.inp} placeholder="Cuéntanos lo que necesitas" value={svcForm.detalle} onChange={e=>setSvcForm({...svcForm,detalle:e.target.value})}/><div style={s.ib}><div style={{fontSize:12,color:"#64748b"}}>💬 Te contactamos por WhatsApp para confirmar.</div></div><button style={s.btnWa} onClick={sendSvcWa}>📲 Enviar solicitud</button><button style={s.btnG} onClick={()=>setSheet(null)}>Cancelar</button></div></div>)}

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
