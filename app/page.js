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
  btnWa:{background:"#25d366",color:"#fff",border:"none",borderRadius:14,padding:"13px",fontSize:14,fontWeight:700,width:"100%",cursor:"pointer",marginBottom:10},
  btnPurple:{background:"#7e22ce",color:"#fff",border:"none",borderRadius:14,padding:"13px",fontSize:14,fontWeight:700,width:"100%",cursor:"pointer",marginTop:8},
  inp:{width:"100%",padding:"11px 14px",borderRadius:12,border:"1px solid #e2e8f0",fontSize:14,marginBottom:10,boxSizing:"border-box",outline:"none"},
  lbl:{fontSize:12,fontWeight:600,color:"#64748b",marginBottom:4,display:"block"},
  ib:{background:"#f1f5f9",borderRadius:12,padding:"10px 14px",marginBottom:8},
  pc:{background:"#fff",borderRadius:14,padding:16,border:"1px solid #f1f5f9",marginBottom:10},
  pT:{fontSize:15,fontWeight:700,color:P,marginBottom:12},
  msg:(ok)=>({fontSize:13,color:ok?"#15803d":"#be123c",background:ok?"#f0fdf4":"#fff1f2",padding:"8px 12px",borderRadius:8,marginBottom:10}),
  apvBtn:{flex:1,padding:"8px",borderRadius:10,border:"none",fontSize:13,fontWeight:600,cursor:"pointer"},
  promoCard:{background:"linear-gradient(135deg,#7c3aed,#4f46e5)",borderRadius:16,padding:16,margin:"0 16px 12px",color:"#fff"},
  comboCard:{background:"#fff",borderRadius:14,padding:12,border:"2px solid #f59e0b",marginBottom:10},
  admRow:(a)=>({width:"100%",padding:"10px 14px",background:a?"#0f172a":"#f8fafc",color:a?"#fff":"#1e293b",border:"1px solid #e2e8f0",borderRadius:10,fontSize:13,fontWeight:500,cursor:"pointer",textAlign:"left",marginBottom:6,display:"flex",justifyContent:"space-between"}),
};

const getHorario = () => {
  const h = new Date().getHours();
  if(h>=6&&h<11) return {label:"🌅 Desayunos del día",sub:"Lo mejor para empezar tu mañana"};
  if(h>=11&&h<15) return {label:"☀️ Almuerzos del día",sub:"El menú perfecto para el mediodía"};
  if(h>=15&&h<18) return {label:"🍪 Meriendas",sub:"Algo rico para la tarde"};
  return {label:"🌙 Cenas",sub:"Termina el día con buen sabor"};
};

export default function App() {
  const [tab,setTab] = useState("Inicio");
  const [cat,setCat] = useState("Todo");
  const [superCat,setSuperCat] = useState("Todas");
  const [search,setSearch] = useState("");
  const [cart,setCart] = useState({});
  const [sheet,setSheet] = useState(null);
  const [zonas,setZonas] = useState([]);
  const [zonaSelId,setZonaSelId] = useState("");
  const [zonaSel,setZonaSel] = useState(null);
  const [addr,setAddr] = useState({calle:"",referencia:""});
  const [form,setForm] = useState({nombre:"",telefono:"",sexo:"",pago:"pago_movil",recibirPromos:false});
  const [selSvc,setSelSvc] = useState(null);
  const [svcForm,setSvcForm] = useState({nombre:"",telefono:"",direccion:"",detalle:""});
  const [superProds,setSuperProds] = useState([]);
  const [provProds,setProvProds] = useState([]);
  const [provPromos,setProvPromos] = useState([]);
  const [combos,setCombos] = useState([]);
  const [resenaSheet,setResenaSheet] = useState(null);
  const [resena,setResena] = useState({estrellas:0,comentario:"",nombre:"",telefono:""});
  const [resenaMsj,setResenaMsj] = useState("");

  // Proveedor
  const [provMode,setProvMode] = useState("login");
  const [provForm,setProvForm] = useState({usuario:"",nombre:"",negocio:"",telefono:"",categorias:[],pass:""});
  const [provData,setProvData] = useState(null);
  const [myProds,setMyProds] = useState([]);
  const [myPromos,setMyPromos] = useState([]);
  const [pendProvs,setPendProvs] = useState([]);
  const [pendProds,setPendProds] = useState([]);
  const [pendResenas,setPendResenas] = useState([]);
  const [allZonas,setAllZonas] = useState([]);
  const [topProds,setTopProds] = useState([]);

  const [newProd,setNewProd] = useState({nombre:"",descripcion:"",marca:"",presentacion:"",precio:"",unidad:"porción",categoria:"Comida preparada",stock:1,hi:"08:00",hf:"18:00",permanente:false});
  const [newPromo,setNewPromo] = useState({nombre:"",descripcion:"",precio:"",fecha_inicio:"",fecha_fin:""});
  const [logoFile,setLogoFile] = useState(null);
  const [fotoFile,setFotoFile] = useState(null);
  const [logoPreview,setLogoPreview] = useState(null);
  const [fotoPreview,setFotoPreview] = useState(null);
  const [loading,setLoading] = useState(false);
  const [pmsg,setPmsg] = useState("");
  const [provTab,setProvTab] = useState("productos");
  const [adminSec,setAdminSec] = useState("proveedores");

  // Admin super
  const [newSP,setNewSP] = useState({nombre:"",marca:"",presentacion:"",descripcion:"",precio:"",unidad:"kg",emoji:"🛒",categoria:SUPER_CATS[0]});
  const [spFoto,setSpFoto] = useState(null);
  const [spFotoPreview,setSpFotoPreview] = useState(null);
  const [newZona,setNewZona] = useState({municipio:"San Fernando",zona:"",tipo:"barrio",costo_delivery:1.50,delivery_gratis_super:18.00,delivery_gratis_comida:12.00});
  const [newCombo,setNewCombo] = useState({nombre:"",descripcion:"",precio:"",temporada:"",fecha_inicio:"",fecha_fin:""});

  useEffect(()=>{loadAll();},[]);

  const loadAll = async () => {
    const hoy = new Date().toISOString().split("T")[0];
    const [z,sp,pp,pr,cb] = await Promise.all([
      supabase.from("zonas_delivery").select("*").eq("activa",true).order("municipio"),
      supabase.from("productos_supermercado").select("*").eq("disponible",true).order("categoria"),
      supabase.from("productos_proveedor").select("*,proveedores(negocio,logo_url)").eq("aprobado",true).eq("disponible",true),
      supabase.from("promociones_proveedor").select("*,proveedores(negocio,logo_url)").eq("aprobada",true).eq("activa",true).gte("fecha_fin",hoy),
      supabase.from("combos").select("*").eq("activa",true),
    ]);
    if(z.data) setZonas(z.data);
    if(sp.data) setSuperProds(sp.data);
    if(pp.data) setProvProds(pp.data.filter(p=>p.permanente||(p.fecha===hoy&&p.stock>0)));
    if(pr.data) setProvPromos(pr.data);
    if(cb.data) setCombos(cb.data);
  };

  const allProds = [
    ...superProds.map(p=>({
      id:`sp_${p.id}`,name:p.nombre,cat:"Supermercado",superCat:p.categoria,
      price:p.precio,unit:p.unidad,emoji:p.emoji||"🛒",margin:0.10,
      foto:p.foto_url,marca:p.marca,presentacion:p.presentacion,descripcion:p.descripcion,
      tag:null,
    })),
    ...provProds.map(p=>({
      id:`pv_${p.id}`,name:p.nombre,cat:p.categoria,price:p.precio,unit:p.unidad,
      emoji:"🍽️",margin:0.20,kitchen:p.proveedores?.negocio,logo:p.proveedores?.logo_url,
      foto:p.foto_url,marca:p.marca,presentacion:p.presentacion,descripcion:p.descripcion,
      stock:p.stock,horario:p.permanente?"Siempre disponible":`${p.horario_inicio}–${p.horario_fin}`,
      tag:p.stock<=3?`Solo ${p.stock} disp.`:null,dbId:p.id,
    })),
    ...provPromos.map(pr=>({
      id:`promo_${pr.id}`,name:pr.nombre,cat:"Comida preparada",price:pr.precio,unit:"promo",
      emoji:"🎁",margin:0.20,kitchen:pr.proveedores?.negocio,logo:pr.proveedores?.logo_url,
      descripcion:pr.descripcion,isPromo:true,tag:"🎉 Promo",horario:`Hasta ${pr.fecha_fin}`,
    })),
  ];

  const filteredProds = allProds.filter(p=>{
    const matchCat = cat==="Todo"||(cat==="Supermercado"?p.cat==="Supermercado":p.cat===cat);
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchSuperCat = cat!=="Supermercado"||superCat==="Todas"||p.superCat===superCat;
    return matchCat&&matchSearch&&matchSuperCat;
  });

  const superGroups = cat==="Todo"||cat==="Supermercado" ? SUPER_CATS.map(sc=>({
    cat:sc,
    items:filteredProds.filter(p=>p.cat==="Supermercado"&&(superCat==="Todas"||p.superCat===sc)&&p.superCat===sc)
  })).filter(g=>g.items.length>0) : [];

  const provGroups = PROV_CATS.filter(c=>cat==="Todo"||cat===c).map(c=>({
    cat:c,items:filteredProds.filter(p=>p.cat===c)
  })).filter(g=>g.items.length>0);

  const add = (p)=>setCart(c=>({...c,[p.id]:{...p,qty:(c[p.id]?.qty||0)+1}}));
  const rem = (id)=>setCart(c=>{const n={...c};n[id].qty>1?n[id]={...n[id],qty:n[id].qty-1}:delete n[id];return n;});

  const items = Object.values(cart);
  const count = items.reduce((a,i)=>a+i.qty,0);
  const sub = items.reduce((a,i)=>a+i.price*i.qty,0);
  const hasSuperOnly = items.length>0&&items.every(i=>i.cat==="Supermercado");
  const freeMin = zonaSel?(hasSuperOnly?zonaSel.delivery_gratis_super:zonaSel.delivery_gratis_comida):(hasSuperOnly?15:10);
  const delCost = zonaSel?.costo_delivery||1.00;
  const del = sub>=freeMin?0:delCost;
  const total = sub+del;
  const pct = (sub/freeMin)*100;

  const saveCliente = async () => {
    if(!form.telefono||!form.nombre) return;
    const {data:ex} = await supabase.from("clientes").select("id").eq("telefono",form.telefono).single();
    if(!ex) await supabase.from("clientes").insert({nombre:form.nombre,telefono:form.telefono,direccion:`${zonaSel?.zona||""} ${addr.calle} ${addr.referencia}`.trim(),sexo:form.sexo,recibir_promos:form.recibirPromos});
  };

  const confirm = async () => {
    if(!form.nombre||!form.telefono||!zonaSelId) return alert("Completa nombre, teléfono y zona");
    await saveCliente();
    setSheet("success");
  };

  const sendWa = () => {
    const lines = items.map(i=>`• ${i.name} x${i.qty} — $${(i.price*i.qty).toFixed(2)}`).join("\n");
    const dir = `${zonaSel?.zona||""}, ${addr.calle}, ${addr.referencia}`;
    const m = `*Pedido ${APP_NAME} ${CITY}*\n\n${lines}\n\nSubtotal: $${sub.toFixed(2)}\nDelivery: ${del===0?"GRATIS":"$"+del.toFixed(2)}\n*Total: $${total.toFixed(2)}*\n\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nDirección: ${dir}\nPago: ${form.pago}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(m)}`);
  };

  const sendSvcWa = () => {
    const m = `*Solicitud: ${selSvc.name}* — ${APP_NAME}\n\nNombre: ${svcForm.nombre}\nTeléfono: ${svcForm.telefono}\nDirección: ${svcForm.direccion}\nDetalle: ${svcForm.detalle}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(m)}`);
    setSheet(null);setSelSvc(null);
  };

  const enviarResena = async () => {
    if(!resena.estrellas||!resena.nombre) return setResenaMsj("Pon tu nombre y calificación");
    await supabase.from("resenas").insert({producto_id:resenaSheet,cliente_nombre:resena.nombre,cliente_telefono:resena.telefono,estrellas:resena.estrellas,comentario:resena.comentario,aprobada:false});
    setResenaMsj("✅ Gracias por tu reseña.");
    setTimeout(()=>{setSheet(null);setResenaSheet(null);setResena({estrellas:0,comentario:"",nombre:"",telefono:""});setResenaMsj("");},2000);
  };

  const upload = async(file,bucket,path)=>{
    await supabase.storage.from(bucket).upload(path,file,{upsert:true});
    return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
  };

  const handleLogin = async () => {
    if(!provForm.usuario||!provForm.pass) return setPmsg("Completa usuario y contraseña");
    if(provForm.usuario===ADMIN_USER&&provForm.pass===ADMIN_PASS){setProvMode("admin");loadAdmin();return;}
    setLoading(true);
    const {data,error} = await supabase.from("proveedores").select("*").eq("usuario",provForm.usuario).single();
    setLoading(false);
    if(error||!data) return setPmsg("Usuario no encontrado");
    if(!data.aprobado) return setPmsg("Tu cuenta está pendiente de aprobación");
    setProvData(data);setProvMode("dash");loadMyProds(data.id);loadMyPromos(data.id);
  };

  const handleRegister = async () => {
    if(!provForm.usuario||!provForm.nombre||!provForm.negocio||!provForm.telefono||!provForm.pass) return setPmsg("Completa todos los campos");
    setLoading(true);
    let logo_url=null;
    if(logoFile) logo_url=await upload(logoFile,"logos",`${provForm.usuario}_logo`);
    const {error} = await supabase.from("proveedores").insert({usuario:provForm.usuario,nombre:provForm.nombre,negocio:provForm.negocio,telefono:provForm.telefono,categorias:provForm.categorias,logo_url,aprobado:true});
    setLoading(false);
    if(error) return setPmsg(error.message.includes("unique")?"Ese usuario ya existe":"Error al registrarse");
    setPmsg("✅ Registro exitoso. Ya puedes iniciar sesión.");
    setProvMode("login");
  };

  const loadMyProds = async(pid)=>{
    const hoy=new Date().toISOString().split("T")[0];
    const {data}=await supabase.from("productos_proveedor").select("*").eq("proveedor_id",pid).or(`permanente.eq.true,fecha.eq.${hoy}`);
    if(data) setMyProds(data);
  };

  const loadMyPromos = async(pid)=>{
    const {data}=await supabase.from("promociones_proveedor").select("*").eq("proveedor_id",pid).order("created_at",{ascending:false});
    if(data) setMyPromos(data);
  };

  const loadAdmin = async()=>{
    const [pv,pr,re,zo,top]=await Promise.all([
      supabase.from("proveedores").select("*").eq("aprobado",false),
      supabase.from("productos_proveedor").select("*,proveedores(negocio)").eq("aprobado",false),
      supabase.from("resenas").select("*").eq("aprobada",false),
      supabase.from("zonas_delivery").select("*").order("municipio"),
      supabase.from("compras_clientes").select("producto_id,cantidad").order("cantidad",{ascending:false}).limit(10),
    ]);
    if(pv.data) setPendProvs(pv.data);
    if(pr.data) setPendProds(pr.data);
    if(re.data) setPendResenas(re.data);
    if(zo.data) setAllZonas(zo.data);
    if(top.data) setTopProds(top.data);
  };

  const publishProd = async()=>{
    if(!newProd.nombre||!newProd.precio) return setPmsg("Completa nombre y precio");
    setLoading(true);
    let foto_url=null;
    if(fotoFile) foto_url=await upload(fotoFile,"productos",`${provData.id}_${Date.now()}`);
    const {data:existing}=await supabase.from("productos_proveedor").select("id").eq("proveedor_id",provData.id).eq("nombre",newProd.nombre).eq("primera_aprobacion",true).limit(1);
    const auto=existing&&existing.length>0;
    await supabase.from("productos_proveedor").insert({
      proveedor_id:provData.id,nombre:newProd.nombre,descripcion:newProd.descripcion,
      marca:newProd.marca,presentacion:newProd.presentacion,precio:parseFloat(newProd.precio),
      unidad:newProd.unidad,categoria:newProd.categoria,foto_url,stock:parseInt(newProd.stock),
      horario_inicio:newProd.hi,horario_fin:newProd.hf,aprobado:auto,disponible:true,
      permanente:newProd.permanente,primera_aprobacion:auto,fecha:new Date().toISOString().split("T")[0],
    });
    setLoading(false);
    setPmsg(auto?"✅ Producto publicado directamente":"✅ Enviado al admin para aprobación");
    setNewProd({nombre:"",descripcion:"",marca:"",presentacion:"",precio:"",unidad:"porción",categoria:"Comida preparada",stock:1,hi:"08:00",hf:"18:00",permanente:false});
    setFotoFile(null);setFotoPreview(null);
    loadMyProds(provData.id);loadAll();
  };

  const publishPromo = async()=>{
    if(!newPromo.nombre||!newPromo.precio||!newPromo.fecha_inicio||!newPromo.fecha_fin) return setPmsg("Completa todos los campos");
    setLoading(true);
    await supabase.from("promociones_proveedor").insert({proveedor_id:provData.id,...newPromo,precio:parseFloat(newPromo.precio),aprobada:false,activa:true});
    setLoading(false);
    setPmsg("✅ Promoción enviada para aprobación");
    setNewPromo({nombre:"",descripcion:"",precio:"",fecha_inicio:"",fecha_fin:""});
    loadMyPromos(provData.id);
  };

  const toggleDisp = async(id,val)=>{
    await supabase.from("productos_proveedor").update({disponible:!val}).eq("id",id);
    loadMyProds(provData.id);loadAll();
  };

  const notifyClientes = async(promo)=>{
    const {data:compradores}=await supabase.from("compras_clientes").select("clientes(nombre,telefono)").eq("proveedor_id",provData.id);
    const nums=[...new Set((compradores||[]).filter(c=>c.clientes?.telefono).map(c=>c.clientes.telefono))];
    if(nums.length===0) return alert("Aún no tienes compradores registrados");
    const msg=`🎉 *${provData.negocio}* tiene una nueva promo en *${APP_NAME} ${CITY}*!\n\n*${promo.nombre}*\n${promo.descripcion}\n💰 Precio especial: $${promo.precio}\n📅 Válida hasta: ${promo.fecha_fin}\n\n👉 ${typeof window!=="undefined"?window.location.href:"mimercado-mu5k.vercel.app"}`;
    window.open(`https://wa.me/${nums[0]}?text=${encodeURIComponent(msg)}`);
  };

  const addSuperProd = async()=>{
    if(!newSP.nombre||!newSP.precio) return;
    setLoading(true);
    let foto_url=null;
    if(spFoto) foto_url=await upload(spFoto,"productos",`super_${Date.now()}`);
    await supabase.from("productos_supermercado").insert({nombre:newSP.nombre,categoria:newSP.categoria,marca:newSP.marca,presentacion:newSP.presentacion,descripcion:newSP.descripcion,precio:parseFloat(newSP.precio),unidad:newSP.unidad,emoji:newSP.emoji,foto_url,disponible:true});
    setLoading(false);
    setNewSP({nombre:"",marca:"",presentacion:"",descripcion:"",precio:"",unidad:"kg",emoji:"🛒",categoria:SUPER_CATS[0]});
    setSpFoto(null);setSpFotoPreview(null);
    loadAll();
  };

  const deleteSuperProd = async(id)=>{
    await supabase.from("productos_supermercado").update({disponible:false}).eq("id",id.replace("sp_",""));
    loadAll();
  };

  const approveP=async(id)=>{await supabase.from("proveedores").update({aprobado:true}).eq("id",id);loadAdmin();};
  const rejectP=async(id)=>{await supabase.from("proveedores").delete().eq("id",id);loadAdmin();};
  const approvePr=async(id)=>{await supabase.from("productos_proveedor").update({aprobado:true,primera_aprobacion:true}).eq("id",id);loadAdmin();loadAll();};
  const rejectPr=async(id)=>{await supabase.from("productos_proveedor").delete().eq("id",id);loadAdmin();};
  const approveRe=async(id)=>{await supabase.from("resenas").update({aprobada:true}).eq("id",id);loadAdmin();};
  const rejectRe=async(id)=>{await supabase.from("resenas").delete().eq("id",id);loadAdmin();};
  const addZona=async()=>{if(!newZona.zona)return;await supabase.from("zonas_delivery").insert(newZona);setNewZona({municipio:"San Fernando",zona:"",tipo:"barrio",costo_delivery:1.50,delivery_gratis_super:18.00,delivery_gratis_comida:12.00});loadAdmin();loadAll();};
  const addCombo=async()=>{if(!newCombo.nombre||!newCombo.precio)return;await supabase.from("combos").insert({...newCombo,precio:parseFloat(newCombo.precio),activa:true});setNewCombo({nombre:"",descripcion:"",precio:"",temporada:"",fecha_inicio:"",fecha_fin:""});loadAll();};

  const horario=getHorario();

  const QtyCtrl=({p})=>cart[p.id]?(
    <div style={s.qR}>
      <button style={s.qB} onClick={()=>rem(p.id)}>−</button>
      <span style={s.qN}>{cart[p.id].qty}</span>
      <button style={s.qB} onClick={()=>add(p)}>+</button>
    </div>
  ):<button style={s.aBtn} onClick={()=>add(p)}>+</button>;

  const Card=({p})=>(
    <div style={s.card}>
      {p.foto?<img src={p.foto} alt={p.name} style={s.cImg}/>:<div style={s.cEm}>{p.emoji}</div>}
      {p.isPromo&&<div style={s.promoTag}>🎉 Promoción</div>}
      {p.tag&&!p.isPromo&&<div style={s.tag}>{p.tag}</div>}
      <div style={s.cNm}>{p.name}</div>
      {(p.marca||p.presentacion)&&<div style={s.cMeta}>{[p.marca,p.presentacion].filter(Boolean).join(" · ")}</div>}
      {p.descripcion&&<div style={{fontSize:10,color:"#94a3b8",lineHeight:1.3}}>{p.descripcion}</div>}
      {p.kitchen&&<div style={s.cKt}>{p.logo&&<img src={p.logo} alt="" style={s.cLogo}/>}<span>{p.kitchen}</span></div>}
      {p.horario&&<div style={{fontSize:10,color:"#94a3b8"}}>🕐 {p.horario}</div>}
      <div style={s.cBt}>
        <div><div style={s.cPr}>${p.price.toFixed(2)}</div><div style={s.cUn}>/ {p.unit}</div></div>
        <QtyCtrl p={p}/>
      </div>
      {p.dbId&&<button onClick={()=>{setResenaSheet(p.dbId);setSheet("resena");}} style={{fontSize:10,color:"#94a3b8",background:"none",border:"none",cursor:"pointer",textAlign:"left",padding:0,marginTop:2}}>⭐ Dejar reseña</button>}
    </div>
  );

  return (
    <div style={s.app}>
      <div style={s.hdr}>
        <div style={{display:"flex",alignItems:"center"}}>
          <span style={s.logo}>{APP_NAME}</span>
          <span style={s.city}>{CITY}</span>
        </div>
        {count>0&&<button style={s.cBtn} onClick={()=>setSheet("cart")}>🛒 <span style={s.cN}>{count}</span><span style={{fontSize:12}}>${total.toFixed(2)}</span></button>}
      </div>

      <div style={s.tabs}>
        {MAIN_TABS.map(t=><button key={t} style={s.tab(tab===t)} onClick={()=>setTab(t)}>{t}</button>)}
      </div>

      {/* INICIO */}
      {tab==="Inicio"&&(
        <>
          <div style={s.banner}>
            <p style={s.bT}>Bienvenido a {APP_NAME} {CITY} 👋</p>
            <p style={s.bS}>Todo lo que necesitas sin salir de casa</p>
            <span style={s.bdg("#22c55e","#fff")}>✓ Delivery desde $1</span>
            <span style={s.bdg(A,P)}>Gratis desde $10</span>
          </div>
          <div style={s.promoCard}>
            <div style={{fontSize:18,fontWeight:700,marginBottom:4}}>{horario.label}</div>
            <div style={{fontSize:13,color:"rgba(255,255,255,0.8)"}}>{horario.sub}</div>
            <button onClick={()=>{setTab("Productos");setCat("Comida preparada");}} style={{marginTop:10,background:"rgba(255,255,255,0.2)",border:"none",borderRadius:10,padding:"7px 14px",color:"#fff",fontSize:12,fontWeight:600,cursor:"pointer"}}>Ver opciones →</button>
          </div>
          {combos.length>0&&(
            <div style={{padding:"0 16px"}}>
              <div style={s.sT}>🎁 Combos especiales</div>
              {combos.map(c=>(
                <div key={c.id} style={s.comboCard}>
                  {c.imagen_url&&<img src={c.imagen_url} alt="" style={{width:"100%",height:100,objectFit:"cover",borderRadius:8,marginBottom:8}}/>}
                  <div style={{fontSize:14,fontWeight:700,color:P}}>{c.nombre}</div>
                  <div style={{fontSize:12,color:"#64748b",margin:"2px 0 6px"}}>{c.descripcion}</div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:16,fontWeight:700,color:P}}>${parseFloat(c.precio).toFixed(2)}</span>
                    {c.temporada&&<span style={{fontSize:11,background:"#fef3c7",color:"#92400e",padding:"2px 8px",borderRadius:8,fontWeight:600}}>{c.temporada}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div style={{padding:"0 16px 16px"}}>
            <div style={s.sT}>Explorar</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {[{e:"🛒",l:"Supermercado",c:"Supermercado"},{e:"🍱",l:"Comida preparada",c:"Comida preparada"},{e:"🍰",l:"Postres",c:"Postres"},{e:"⚡",l:"Servicios",c:null}].map(x=>(
                <button key={x.l} onClick={()=>{if(x.c){setTab("Productos");setCat(x.c);}else setTab("Servicios");}} style={{background:"#fff",border:"1px solid #f1f5f9",borderRadius:14,padding:"16px 12px",display:"flex",flexDirection:"column",alignItems:"center",gap:6,cursor:"pointer"}}>
                  <span style={{fontSize:28}}>{x.e}</span>
                  <span style={{fontSize:13,fontWeight:600,color:P}}>{x.l}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* PRODUCTOS */}
      {tab==="Productos"&&(
        <>
          <div style={s.banner}>
            <p style={s.bT}>Tienda {CITY} 🛒</p>
            <p style={s.bS}>Supermercado · Comida · Postres · Más</p>
            <span style={s.bdg("#22c55e","#fff")}>Gratis desde $10 comida · $15 super</span>
          </div>
          <div style={s.sw}><input style={s.si} placeholder="🔍  Buscar..." value={search} onChange={e=>setSearch(e.target.value)}/></div>
          <div style={s.cs}>
            {ALL_CATS.map(c=><button key={c} style={s.cb(cat===c)} onClick={()=>{setCat(c);setSuperCat("Todas");}}>{c}</button>)}
          </div>
          {/* Sub-categorías del supermercado como tarjetas */}
          {cat==="Supermercado"&&(
            <div style={{padding:"0 16px 8px"}}>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginBottom:4}}>
                {[{l:"Todas",e:"🛒"},...SUPER_CATS.map(sc=>({l:sc,e:sc.split(" ")[0]}))].map(x=>(
                  <button key={x.l} onClick={()=>setSuperCat(x.l===("Todas")?"Todas":x.l)}
                    style={{background:superCat===(x.l==="Todas"?"Todas":x.l)?P:"#fff",border:superCat===(x.l==="Todas"?"Todas":x.l)?"none":"1px solid #f1f5f9",borderRadius:12,padding:"10px 6px",display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer"}}>
                    <span style={{fontSize:20}}>{x.e}</span>
                    <span style={{fontSize:10,fontWeight:600,color:superCat===(x.l==="Todas"?"Todas":x.l)?"#fff":"#64748b",textAlign:"center",lineHeight:1.2}}>{x.l==="Todas"?"Todas":x.l.replace(/^[^\s]+\s/,"")}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          <div style={s.sec}>
            {/* Supermercado por categorías */}
            {(cat==="Todo"||cat==="Supermercado")&&superGroups.map(g=>(
              <div key={g.cat}>
                <div style={s.sT}>{g.cat}</div>
                <div style={s.grid}>{g.items.map(p=><Card key={p.id} p={p}/>)}</div>
              </div>
            ))}
            {/* Proveedores */}
            {provGroups.map(g=>(
              <div key={g.cat}>
                <div style={s.sT}>{g.cat==="Comida preparada"?"🍱":g.cat==="Postres"?"🍰":g.cat==="Jugos y bebidas"?"🥤":"🍞"} {g.cat}</div>
                <div style={s.grid}>{g.items.map(p=><Card key={p.id} p={p}/>)}</div>
              </div>
            ))}
            {filteredProds.length===0&&<div style={{textAlign:"center",padding:"40px 0",color:"#94a3b8"}}><div style={{fontSize:40}}>🔍</div><p>No encontramos ese producto</p></div>}
          </div>
        </>
      )}

      {/* SERVICIOS */}
      {tab==="Servicios"&&(
        <>
          <div style={{...s.banner,paddingBottom:14}}>
            <p style={s.bT}>Servicios en {CITY} ⚡</p>
            <p style={{fontSize:12,color:"rgba(255,255,255,0.7)",margin:0}}>Todo sin salir de casa</p>
          </div>
          <div style={{...s.sec,marginTop:14}}>
            {SVCS.map(sv=>(
              <div key={sv.id} style={{background:"#fff",borderRadius:14,padding:14,border:"1px solid #f1f5f9",display:"flex",gap:12,alignItems:"flex-start",marginBottom:10}}>
                <div style={{fontSize:28,width:44,height:44,background:sv.bg,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{sv.emoji}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:14,fontWeight:700,color:"#1e293b"}}>{sv.name}</div>
                  <div style={{fontSize:12,color:"#64748b",margin:"2px 0 6px",lineHeight:1.4}}>{sv.desc}</div>
                  <span style={{fontSize:11,fontWeight:600,color:sv.tc,background:sv.bg,padding:"2px 8px",borderRadius:8}}>{sv.price}</span>
                </div>
                <button style={{background:P,color:"#fff",border:"none",borderRadius:10,padding:"7px 14px",fontSize:12,fontWeight:600,cursor:"pointer",flexShrink:0}} onClick={()=>{setSelSvc(sv);setSheet("service");}}>Solicitar</button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* PROVEEDORES */}
      {tab==="Proveedores"&&(
        <div style={{...s.sec,marginTop:16}}>
          {(provMode==="login"||provMode==="register")&&(
            <div style={s.pc}>
              <div style={s.pT}>{provMode==="login"?"🏪 Acceso proveedores":"📝 Registro"}</div>
              {pmsg&&<div style={s.msg(pmsg.includes("✅"))}>{pmsg}</div>}
              {provMode==="register"&&(
                <>
                  <label style={s.lbl}>Usuario (sin espacios)</label>
                  <input style={s.inp} placeholder="cocina_maria" value={provForm.usuario} onChange={e=>setProvForm({...provForm,usuario:e.target.value.toLowerCase().replace(/\s/g,"")})}/>
                  <label style={s.lbl}>Nombre completo</label>
                  <input style={s.inp} placeholder="María González" value={provForm.nombre} onChange={e=>setProvForm({...provForm,nombre:e.target.value})}/>
                  <label style={s.lbl}>Nombre de tu negocio</label>
                  <input style={s.inp} placeholder="Cocina de María" value={provForm.negocio} onChange={e=>setProvForm({...provForm,negocio:e.target.value})}/>
                  <label style={s.lbl}>WhatsApp</label>
                  <input style={s.inp} placeholder="+58 424-000-0000" value={provForm.telefono} onChange={e=>setProvForm({...provForm,telefono:e.target.value})}/>
                  <label style={s.lbl}>Categorías</label>
                  <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:10}}>
                    {PROV_CATS.map(c=>(
                      <button key={c} onClick={()=>setProvForm(f=>({...f,categorias:f.categorias.includes(c)?f.categorias.filter(x=>x!==c):[...f.categorias,c]}))}
                        style={{padding:"5px 10px",borderRadius:20,fontSize:12,cursor:"pointer",background:provForm.categorias.includes(c)?P:"#f1f5f9",color:provForm.categorias.includes(c)?"#fff":"#64748b",border:"none",fontWeight:500}}>
                        {c}
                      </button>
                    ))}
                  </div>
                  <label style={s.lbl}>Logo de tu negocio</label>
                  {logoPreview&&<img src={logoPreview} alt="" style={{width:60,height:60,borderRadius:"50%",objectFit:"cover",marginBottom:8}}/>}
                  <input type="file" accept="image/*" style={{marginBottom:10,fontSize:13}} onChange={e=>{const f=e.target.files[0];if(f){setLogoFile(f);setLogoPreview(URL.createObjectURL(f));}}}/>
                </>
              )}
              {provMode==="login"&&<><label style={s.lbl}>Usuario</label><input style={s.inp} placeholder="tu_usuario" value={provForm.usuario} onChange={e=>setProvForm({...provForm,usuario:e.target.value})}/></>}
              <label style={s.lbl}>Contraseña</label>
              <input style={s.inp} type="password" placeholder="••••••••" value={provForm.pass} onChange={e=>setProvForm({...provForm,pass:e.target.value})}/>
              <button style={s.btn} onClick={provMode==="login"?handleLogin:handleRegister} disabled={loading}>{loading?"Procesando...":(provMode==="login"?"Entrar":"Registrarme")}</button>
              <button style={s.btnG} onClick={()=>{setProvMode(provMode==="login"?"register":"login");setPmsg("");}}>
                {provMode==="login"?"¿Nuevo? Regístrate aquí":"¿Ya tienes cuenta? Inicia sesión"}
              </button>
            </div>
          )}

          {/* DASHBOARD PROVEEDOR */}
          {provMode==="dash"&&provData&&(
            <>
              <div style={{...s.pc,background:"#f0fdf4",borderColor:"#bbf7d0"}}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  {provData.logo_url&&<img src={provData.logo_url} alt="" style={{width:48,height:48,borderRadius:"50%",objectFit:"cover"}}/>}
                  <div>
                    <div style={{fontSize:14,fontWeight:700,color:"#15803d"}}>✓ {provData.negocio}</div>
                    <div style={{fontSize:12,color:"#64748b"}}>@{provData.usuario}</div>
                  </div>
                </div>
              </div>
              <div style={{display:"flex",gap:8,marginBottom:12}}>
                {["productos","promos"].map(t=>(
                  <button key={t} onClick={()=>setProvTab(t)} style={{flex:1,padding:"9px",borderRadius:10,border:"none",background:provTab===t?P:"#f1f5f9",color:provTab===t?"#fff":"#64748b",fontSize:13,fontWeight:600,cursor:"pointer"}}>
                    {t==="productos"?"📦 Productos":"🎉 Promociones"}
                  </button>
                ))}
              </div>
              {pmsg&&<div style={s.msg(pmsg.includes("✅"))}>{pmsg}</div>}

              {provTab==="productos"&&(
                <>
                  <div style={s.pc}>
                    <div style={s.pT}>➕ Publicar producto</div>
                    <label style={s.lbl}>Nombre *</label>
                    <input style={s.inp} placeholder="Torta de zanahoria" value={newProd.nombre} onChange={e=>setNewProd({...newProd,nombre:e.target.value})}/>
                    <label style={s.lbl}>Marca (opcional)</label>
                    <input style={s.inp} placeholder="Casero, artesanal..." value={newProd.marca} onChange={e=>setNewProd({...newProd,marca:e.target.value})}/>
                    <label style={s.lbl}>Presentación (opcional)</label>
                    <input style={s.inp} placeholder="500g, 1L, 6 unidades..." value={newProd.presentacion} onChange={e=>setNewProd({...newProd,presentacion:e.target.value})}/>
                    <label style={s.lbl}>Descripción (opcional)</label>
                    <input style={s.inp} placeholder="Ingredientes, sabor, tamaño..." value={newProd.descripcion} onChange={e=>setNewProd({...newProd,descripcion:e.target.value})}/>
                    <label style={s.lbl}>Categoría *</label>
                    <select style={{...s.inp,background:"#fff"}} value={newProd.categoria} onChange={e=>setNewProd({...newProd,categoria:e.target.value})}>
                      {(provData.categorias?.length>0?provData.categorias:PROV_CATS).map(c=><option key={c}>{c}</option>)}
                    </select>
                    <label style={s.lbl}>Precio ($) *</label>
                    <input style={s.inp} type="number" placeholder="3.50" value={newProd.precio} onChange={e=>setNewProd({...newProd,precio:e.target.value})}/>
                    <label style={s.lbl}>Unidad *</label>
                    <input style={s.inp} placeholder="porción, kg, unidad..." value={newProd.unidad} onChange={e=>setNewProd({...newProd,unidad:e.target.value})}/>
                    <label style={s.lbl}>Cantidad disponible *</label>
                    <input style={s.inp} type="number" value={newProd.stock} onChange={e=>setNewProd({...newProd,stock:e.target.value})}/>
                    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10,background:"#f1f5f9",padding:"10px 14px",borderRadius:10}}>
                      <input type="checkbox" id="perm" checked={newProd.permanente} onChange={e=>setNewProd({...newProd,permanente:e.target.checked})} style={{width:18,height:18}}/>
                      <label htmlFor="perm" style={{fontSize:13,color:"#1e293b",cursor:"pointer"}}>🔁 Disponible hasta agotar stock</label>
                    </div>
                    {!newProd.permanente&&(
                      <div style={{display:"flex",gap:10}}>
                        <div style={{flex:1}}><label style={s.lbl}>Desde</label><input style={s.inp} type="time" value={newProd.hi} onChange={e=>setNewProd({...newProd,hi:e.target.value})}/></div>
                        <div style={{flex:1}}><label style={s.lbl}>Hasta</label><input style={s.inp} type="time" value={newProd.hf} onChange={e=>setNewProd({...newProd,hf:e.target.value})}/></div>
                      </div>
                    )}
                    <label style={s.lbl}>Foto del producto</label>
                    {fotoPreview&&<img src={fotoPreview} alt="" style={{width:"100%",height:110,objectFit:"cover",borderRadius:10,marginBottom:8}}/>}
                    <input type="file" accept="image/*" style={{marginBottom:10,fontSize:13}} onChange={e=>{const f=e.target.files[0];if(f){setFotoFile(f);setFotoPreview(URL.createObjectURL(f));}}}/>
                    <div style={{...s.ib,background:"#fef9c3"}}><div style={{fontSize:12,color:"#854d0e"}}>ℹ️ Primera publicación de cada producto requiere aprobación del admin.</div></div>
                    <button style={s.btn} onClick={publishProd} disabled={loading}>{loading?"Subiendo...":"Publicar producto"}</button>
                  </div>
                  {myProds.length>0&&(
                    <div style={s.pc}>
                      <div style={s.pT}>📋 Mis productos ({myProds.length})</div>
                      {myProds.map(p=>(
                        <div key={p.id} style={{display:"flex",alignItems:"center",gap:8,padding:"8px 0",borderBottom:"1px solid #f1f5f9"}}>
                          {p.foto_url?<img src={p.foto_url} alt="" style={{width:40,height:40,borderRadius:8,objectFit:"cover"}}/>:<span style={{fontSize:22,width:40,textAlign:"center"}}>🍽️</span>}
                          <div style={{flex:1}}>
                            <div style={{fontSize:13,fontWeight:600}}>{p.nombre}</div>
                            <div style={{fontSize:11,color:"#64748b"}}>${p.precio} · Stock: {p.stock}</div>
                          </div>
                          <div style={{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-end"}}>
                            <span style={{fontSize:11,fontWeight:600,padding:"2px 8px",borderRadius:8,background:p.aprobado?"#dcfce7":"#fef9c3",color:p.aprobado?"#15803d":"#854d0e"}}>{p.aprobado?"✓":"⏳"}</span>
                            {p.aprobado&&<button onClick={()=>toggleDisp(p.id,p.disponible)} style={{fontSize:10,padding:"2px 8px",borderRadius:8,border:"none",cursor:"pointer",background:p.disponible?"#dcfce7":"#fee2e2",color:p.disponible?"#15803d":"#be123c",fontWeight:600}}>{p.disponible?"Disp.":"Agotado"}</button>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {provTab==="promos"&&(
                <>
                  <div style={s.pc}>
                    <div style={s.pT}>🎉 Nueva promoción</div>
                    <label style={s.lbl}>Nombre de la promo *</label>
                    <input style={s.inp} placeholder="Combo familiar del día" value={newPromo.nombre} onChange={e=>setNewPromo({...newPromo,nombre:e.target.value})}/>
                    <label style={s.lbl}>Descripción * (qué incluye)</label>
                    <input style={s.inp} placeholder="2 almuerzos + 2 jugos + postre..." value={newPromo.descripcion} onChange={e=>setNewPromo({...newPromo,descripcion:e.target.value})}/>
                    <label style={s.lbl}>Precio especial ($) *</label>
                    <input style={s.inp} type="number" placeholder="12.00" value={newPromo.precio} onChange={e=>setNewPromo({...newPromo,precio:e.target.value})}/>
                    <div style={{display:"flex",gap:10}}>
                      <div style={{flex:1}}><label style={s.lbl}>Fecha inicio *</label><input style={s.inp} type="date" value={newPromo.fecha_inicio} onChange={e=>setNewPromo({...newPromo,fecha_inicio:e.target.value})}/></div>
                      <div style={{flex:1}}><label style={s.lbl}>Fecha fin *</label><input style={s.inp} type="date" value={newPromo.fecha_fin} onChange={e=>setNewPromo({...newPromo,fecha_fin:e.target.value})}/></div>
                    </div>
                    <button style={s.btnPurple} onClick={publishPromo} disabled={loading}>{loading?"Enviando...":"Enviar para aprobación"}</button>
                  </div>
                  {myPromos.length>0&&(
                    <div style={s.pc}>
                      <div style={s.pT}>📋 Mis promociones</div>
                      {myPromos.map(pr=>(
                        <div key={pr.id} style={{padding:"10px 0",borderBottom:"1px solid #f1f5f9"}}>
                          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                            <div>
                              <div style={{fontSize:13,fontWeight:700}}>{pr.nombre}</div>
                              <div style={{fontSize:11,color:"#64748b"}}>${pr.precio} · {pr.fecha_inicio} → {pr.fecha_fin}</div>
                              <div style={{fontSize:11,color:"#94a3b8",marginTop:2}}>{pr.descripcion}</div>
                            </div>
                            <span style={{fontSize:11,fontWeight:600,padding:"2px 8px",borderRadius:8,background:pr.aprobada?"#dcfce7":"#fef9c3",color:pr.aprobada?"#15803d":"#854d0e",flexShrink:0,marginLeft:8}}>{pr.aprobada?"✓ Activa":"⏳"}</span>
                          </div>
                          {pr.aprobada&&<button onClick={()=>notifyClientes(pr)} style={{marginTop:8,background:"#25d366",color:"#fff",border:"none",borderRadius:10,padding:"7px 14px",fontSize:12,fontWeight:600,cursor:"pointer",width:"100%"}}>📲 Notificar compradores</button>}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
              <button style={s.btnG} onClick={()=>{setProvMode("login");setProvData(null);setMyProds([]);setMyPromos([]);setPmsg("");}}>Cerrar sesión</button>
            </>
          )}

          {/* ADMIN */}
          {provMode==="admin"&&(
            <>
              <div style={{...s.pc,background:"#eff6ff",borderColor:"#bfdbfe"}}>
                <div style={{fontSize:14,fontWeight:700,color:"#1d4ed8"}}>⚙️ Panel Admin — {APP_NAME}</div>
              </div>
              <div style={{...s.sec,paddingTop:0}}>
                {[
                  {key:"proveedores",label:"👤 Proveedores pendientes",n:pendProvs.length},
                  {key:"productos",label:"🍽️ Productos pendientes",n:pendProds.length},
                  {key:"resenas",label:"⭐ Reseñas pendientes",n:pendResenas.length},
                  {key:"zonas",label:"🗺️ Gestionar zonas",n:0},
                  {key:"combos",label:"🎁 Combos y temporadas",n:0},
                  {key:"super",label:"🛒 Supermercado",n:0},
                  {key:"reportes",label:"📊 Reportes",n:0},
                ].map(x=>(
                  <button key={x.key} style={s.admRow(adminSec===x.key)} onClick={()=>setAdminSec(x.key)}>
                    <span>{x.label}</span>
                    {x.n>0&&<span style={{background:"#ef4444",color:"#fff",borderRadius:20,padding:"0 8px",fontSize:11,fontWeight:700}}>{x.n}</span>}
                  </button>
                ))}
              </div>

              {adminSec==="proveedores"&&(
                <div style={s.pc}>
                  <div style={s.pT}>Proveedores por aprobar ({pendProvs.length})</div>
                  {pendProvs.length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No hay pendientes ✓</div>}
                  {pendProvs.map(p=>(
                    <div key={p.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}>
                      <div style={{display:"flex",gap:8,marginBottom:8}}>
                        {p.logo_url&&<img src={p.logo_url} alt="" style={{width:44,height:44,borderRadius:"50%",objectFit:"cover"}}/>}
                        <div><div style={{fontSize:13,fontWeight:700}}>{p.negocio}</div><div style={{fontSize:11,color:"#64748b"}}>@{p.usuario} · {p.telefono}</div><div style={{fontSize:11,color:"#94a3b8"}}>{(p.categorias||[]).join(", ")}</div></div>
                      </div>
                      <div style={{display:"flex",gap:8}}>
                        <button onClick={()=>approveP(p.id)} style={{...s.apvBtn,background:"#22c55e",color:"#fff"}}>✓ Aprobar</button>
                        <button onClick={()=>rejectP(p.id)} style={{...s.apvBtn,background:"#ef4444",color:"#fff"}}>✗ Rechazar</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {adminSec==="productos"&&(
                <div style={s.pc}>
                  <div style={s.pT}>Productos por aprobar ({pendProds.length})</div>
                  {pendProds.length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No hay pendientes ✓</div>}
                  {pendProds.map(p=>(
                    <div key={p.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}>
                      <div style={{display:"flex",gap:8,marginBottom:8}}>
                        {p.foto_url&&<img src={p.foto_url} alt="" style={{width:50,height:50,borderRadius:8,objectFit:"cover"}}/>}
                        <div>
                          <div style={{fontSize:13,fontWeight:700}}>{p.nombre}</div>
                          {(p.marca||p.presentacion)&&<div style={{fontSize:11,color:"#94a3b8"}}>{[p.marca,p.presentacion].filter(Boolean).join(" · ")}</div>}
                          <div style={{fontSize:11,color:"#64748b"}}>${p.precio} · {p.proveedores?.negocio}</div>
                          {p.descripcion&&<div style={{fontSize:11,color:"#94a3b8"}}>{p.descripcion}</div>}
                        </div>
                      </div>
                      <div style={{display:"flex",gap:8}}>
                        <button onClick={()=>approvePr(p.id)} style={{...s.apvBtn,background:"#22c55e",color:"#fff"}}>✓ Aprobar</button>
                        <button onClick={()=>rejectPr(p.id)} style={{...s.apvBtn,background:"#ef4444",color:"#fff"}}>✗ Rechazar</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {adminSec==="resenas"&&(
                <div style={s.pc}>
                  <div style={s.pT}>Reseñas por aprobar ({pendResenas.length})</div>
                  {pendResenas.length===0&&<div style={{fontSize:13,color:"#94a3b8"}}>No hay pendientes ✓</div>}
                  {pendResenas.map(r=>(
                    <div key={r.id} style={{padding:"12px 0",borderBottom:"1px solid #f1f5f9"}}>
                      <div style={{fontSize:13,fontWeight:600}}>{r.cliente_nombre}</div>
                      <div style={{color:"#f59e0b",fontSize:14}}>{"★".repeat(r.estrellas)}{"☆".repeat(5-r.estrellas)}</div>
                      <div style={{fontSize:12,color:"#64748b",margin:"4px 0"}}>{r.comentario}</div>
                      <div style={{display:"flex",gap:8}}>
                        <button onClick={()=>approveRe(r.id)} style={{...s.apvBtn,background:"#22c55e",color:"#fff"}}>✓ Publicar</button>
                        <button onClick={()=>rejectRe(r.id)} style={{...s.apvBtn,background:"#ef4444",color:"#fff"}}>✗ Eliminar</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {adminSec==="zonas"&&(
                <div style={s.pc}>
                  <div style={s.pT}>🗺️ Zonas de delivery</div>
                  {allZonas.map(z=>(
                    <div key={z.id} style={{padding:"8px 0",borderBottom:"1px solid #f1f5f9",fontSize:12}}>
                      <div style={{fontWeight:600,color:P}}>{z.zona} <span style={{color:"#94a3b8"}}>({z.municipio})</span></div>
                      <div style={{color:"#64748b"}}>Delivery: ${z.costo_delivery} · Gratis super: ${z.delivery_gratis_super} · Gratis comida: ${z.delivery_gratis_comida}</div>
                    </div>
                  ))}
                  <div style={{marginTop:14}}>
                    <div style={{fontSize:13,fontWeight:600,color:P,marginBottom:8}}>➕ Agregar zona</div>
                    <input style={s.inp} placeholder="Nombre de zona o barrio" value={newZona.zona} onChange={e=>setNewZona({...newZona,zona:e.target.value})}/>
                    <input style={s.inp} placeholder="Municipio" value={newZona.municipio} onChange={e=>setNewZona({...newZona,municipio:e.target.value})}/>
                    <div style={{display:"flex",gap:8}}>
                      <div style={{flex:1}}><label style={s.lbl}>Delivery $</label><input style={s.inp} type="number" value={newZona.costo_delivery} onChange={e=>setNewZona({...newZona,costo_delivery:parseFloat(e.target.value)})}/></div>
                      <div style={{flex:1}}><label style={s.lbl}>Gratis super $</label><input style={s.inp} type="number" value={newZona.delivery_gratis_super} onChange={e=>setNewZona({...newZona,delivery_gratis_super:parseFloat(e.target.value)})}/></div>
                    </div>
                    <label style={s.lbl}>Gratis comida $</label>
                    <input style={s.inp} type="number" value={newZona.delivery_gratis_comida} onChange={e=>setNewZona({...newZona,delivery_gratis_comida:parseFloat(e.target.value)})}/>
                    <button style={s.btn} onClick={addZona}>Guardar zona</button>
                  </div>
                </div>
              )}

              {adminSec==="combos"&&(
                <div style={s.pc}>
                  <div style={s.pT}>🎁 Combos y temporadas</div>
                  {combos.map(c=>(
                    <div key={c.id} style={{padding:"8px 0",borderBottom:"1px solid #f1f5f9",fontSize:12}}>
                      <div style={{fontWeight:600}}>{c.nombre} — ${c.precio}</div>
                      <div style={{color:"#64748b"}}>{c.temporada} · {c.fecha_inicio} al {c.fecha_fin}</div>
                    </div>
                  ))}
                  <div style={{marginTop:14}}>
                    <div style={{fontSize:13,fontWeight:600,color:P,marginBottom:8}}>➕ Nuevo combo</div>
                    <input style={s.inp} placeholder="Nombre del combo" value={newCombo.nombre} onChange={e=>setNewCombo({...newCombo,nombre:e.target.value})}/>
                    <input style={s.inp} placeholder="Descripción" value={newCombo.descripcion} onChange={e=>setNewCombo({...newCombo,descripcion:e.target.value})}/>
                    <input style={s.inp} type="number" placeholder="Precio $" value={newCombo.precio} onChange={e=>setNewCombo({...newCombo,precio:e.target.value})}/>
                    <input style={s.inp} placeholder="Temporada (Día de las Madres...)" value={newCombo.temporada} onChange={e=>setNewCombo({...newCombo,temporada:e.target.value})}/>
                    <div style={{display:"flex",gap:8}}>
                      <div style={{flex:1}}><label style={s.lbl}>Desde</label><input style={s.inp} type="date" value={newCombo.fecha_inicio} onChange={e=>setNewCombo({...newCombo,fecha_inicio:e.target.value})}/></div>
                      <div style={{flex:1}}><label style={s.lbl}>Hasta</label><input style={s.inp} type="date" value={newCombo.fecha_fin} onChange={e=>setNewCombo({...newCombo,fecha_fin:e.target.value})}/></div>
                    </div>
                    <button style={s.btn} onClick={addCombo}>Publicar combo</button>
                  </div>
                </div>
              )}

              {adminSec==="super"&&(
                <div style={s.pc}>
                  <div style={s.pT}>🛒 Supermercado ({superProds.length} productos)</div>
                  {superProds.map(p=>(
                    <div key={p.id} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 0",borderBottom:"1px solid #f1f5f9"}}>
                      {p.foto_url?<img src={p.foto_url} alt="" style={{width:40,height:40,borderRadius:8,objectFit:"cover"}}/>:<span style={{fontSize:20}}>{p.emoji}</span>}
                      <div style={{flex:1}}>
                        <div style={{fontSize:13,fontWeight:600}}>{p.nombre}</div>
                        <div style={{fontSize:11,color:"#64748b"}}>{p.categoria} · {[p.marca,p.presentacion].filter(Boolean).join(" · ")} · ${p.precio}/{p.unidad}</div>
                      </div>
                      <button onClick={()=>deleteSuperProd(`sp_${p.id}`)} style={{fontSize:11,padding:"3px 8px",borderRadius:8,border:"none",background:"#fee2e2",color:"#be123c",cursor:"pointer"}}>Quitar</button>
                    </div>
                  ))}
                  <div style={{marginTop:14}}>
                    <div style={{fontSize:13,fontWeight:600,color:P,marginBottom:8}}>➕ Agregar producto</div>
                    <label style={s.lbl}>Categoría *</label>
                    <select style={{...s.inp,background:"#fff"}} value={newSP.categoria} onChange={e=>setNewSP({...newSP,categoria:e.target.value})}>
                      {SUPER_CATS.map(c=><option key={c}>{c}</option>)}
                    </select>
                    <div style={{display:"flex",gap:8,marginBottom:8}}>
                      <input style={{...s.inp,marginBottom:0,width:50}} placeholder="🛒" value={newSP.emoji} onChange={e=>setNewSP({...newSP,emoji:e.target.value})}/>
                      <input style={{...s.inp,marginBottom:0,flex:1}} placeholder="Nombre *" value={newSP.nombre} onChange={e=>setNewSP({...newSP,nombre:e.target.value})}/>
                    </div>
                    <div style={{display:"flex",gap:8,marginBottom:8}}>
                      <input style={{...s.inp,marginBottom:0,flex:1}} placeholder="Marca" value={newSP.marca} onChange={e=>setNewSP({...newSP,marca:e.target.value})}/>
                      <input style={{...s.inp,marginBottom:0,flex:1}} placeholder="Presentación" value={newSP.presentacion} onChange={e=>setNewSP({...newSP,presentacion:e.target.value})}/>
                    </div>
                    <div style={{display:"flex",gap:8,marginBottom:8}}>
                      <input style={{...s.inp,marginBottom:0,flex:1}} type="number" placeholder="Precio $ *" value={newSP.precio} onChange={e=>setNewSP({...newSP,precio:e.target.value})}/>
                      <input style={{...s.inp,marginBottom:0,width:80}} placeholder="kg/L/und" value={newSP.unidad} onChange={e=>setNewSP({...newSP,unidad:e.target.value})}/>
                    </div>
                    <input style={s.inp} placeholder="Descripción (opcional)" value={newSP.descripcion} onChange={e=>setNewSP({...newSP,descripcion:e.target.value})}/>
                    <label style={s.lbl}>Foto del producto</label>
                    {spFotoPreview&&<img src={spFotoPreview} alt="" style={{width:"100%",height:100,objectFit:"cover",borderRadius:10,marginBottom:8}}/>}
                    <input type="file" accept="image/*" style={{marginBottom:10,fontSize:13}} onChange={e=>{const f=e.target.files[0];if(f){setSpFoto(f);setSpFotoPreview(URL.createObjectURL(f));}}}/>
                    <button style={s.btn} onClick={addSuperProd} disabled={loading}>{loading?"Guardando...":"Agregar al supermercado"}</button>
                  </div>
                </div>
              )}

              {adminSec==="reportes"&&(
                <div style={s.pc}>
                  <div style={s.pT}>📊 Reportes del ecosistema</div>
                  <div style={s.ib}>
                    <div style={{fontSize:13,fontWeight:600,color:P,marginBottom:8}}>🏆 Productos más vendidos</div>
                    {topProds.length===0&&<div style={{fontSize:12,color:"#94a3b8"}}>Aún no hay ventas registradas</div>}
                    {topProds.map((p,i)=>(
                      <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:"1px solid #e2e8f0",fontSize:12}}>
                        <span>{i+1}. {p.producto_id}</span>
                        <span style={{fontWeight:700,color:P}}>{p.cantidad} vendidos</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button style={{...s.btnG,margin:"0 0 16px"}} onClick={()=>{setProvMode("login");setPendProvs([]);setPendProds([]);setPendResenas([]);}}>Cerrar sesión admin</button>
            </>
          )}
        </div>
      )}

      {/* BOTÓN FLOTANTE */}
      {count>0&&!sheet&&tab!=="Proveedores"&&(
        <div style={{position:"fixed",bottom:16,left:"50%",transform:"translateX(-50%)",zIndex:150,width:"calc(100% - 32px)",maxWidth:398}}>
          <button style={{...s.btn,margin:0,display:"flex",justifyContent:"space-between",alignItems:"center"}} onClick={()=>setSheet("cart")}>
            <span>🛒 Ver pedido ({count})</span><span>${total.toFixed(2)}</span>
          </button>
        </div>
      )}

      {/* SHEET CARRITO */}
      {sheet==="cart"&&(
        <div style={s.ov} onClick={()=>setSheet(null)}>
          <div style={s.sh} onClick={e=>e.stopPropagation()}>
            <div style={s.hnd}/>
            <div style={s.shT}>Tu pedido</div>
            <div style={s.ib}>
              <label style={s.lbl}>Zona de entrega *</label>
              <select style={{...s.inp,marginBottom:8,background:"#fff"}} value={zonaSelId} onChange={e=>{setZonaSelId(e.target.value);setZonaSel(zonas.find(z=>z.id===e.target.value)||null);}}>
                <option value="">Selecciona tu zona...</option>
                {zonas.map(z=><option key={z.id} value={z.id}>{z.municipio} — {z.zona} (${z.costo_delivery})</option>)}
              </select>
              <label style={s.lbl}>Calle y número</label>
              <input style={{...s.inp,marginBottom:8}} placeholder="Calle Principal #47" value={addr.calle} onChange={e=>setAddr({...addr,calle:e.target.value})}/>
              <label style={s.lbl}>Referencia</label>
              <input style={{...s.inp,marginBottom:0}} placeholder="Casa azul, frente al parque..." value={addr.referencia} onChange={e=>setAddr({...addr,referencia:e.target.value})}/>
            </div>
            {items.map(i=>(
              <div key={i.id} style={s.ci}>
                <span style={{fontSize:22,width:32,textAlign:"center"}}>{i.emoji}</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,fontWeight:500}}>{i.name}</div>
                  {i.kitchen&&<div style={{fontSize:10,color:"#94a3b8"}}>{i.kitchen}</div>}
                </div>
                <div style={s.qR}>
                  <button style={s.qB} onClick={()=>rem(i.id)}>−</button>
                  <span style={s.qN}>{i.qty}</span>
                  <button style={s.qB} onClick={()=>add(i)}>+</button>
                </div>
                <div style={{fontSize:13,fontWeight:700,color:P,marginLeft:8,minWidth:50,textAlign:"right"}}>${(i.price*i.qty).toFixed(2)}</div>
              </div>
            ))}
            {sub<freeMin&&(
              <div style={s.pw}>
                <div style={{fontSize:12,color:"#64748b"}}>Te faltan <strong style={{color:P}}>${(freeMin-sub).toFixed(2)}</strong> para delivery gratis</div>
                <div style={s.pt}><div style={s.pf(pct)}/></div>
              </div>
            )}
            <div style={{marginTop:10}}>
              <div style={s.sr}><span style={s.sL}>Subtotal</span><span style={s.sV}>${sub.toFixed(2)}</span></div>
              <div style={s.sr}><span style={s.sL}>Delivery</span>{del===0?<span style={s.fT}>GRATIS</span>:<span style={s.sV}>${del.toFixed(2)}</span>}</div>
              <div style={s.tR}><span style={{fontWeight:700}}>Total</span><span style={{fontWeight:700,fontSize:17}}>${total.toFixed(2)}</span></div>
            </div>
            <button style={s.btn} onClick={()=>setSheet("checkout")}>Continuar →</button>
            <button style={s.btnG} onClick={()=>setSheet(null)}>Seguir comprando</button>
          </div>
        </div>
      )}

      {/* SHEET CHECKOUT */}
      {sheet==="checkout"&&(
        <div style={s.ov} onClick={()=>setSheet("cart")}>
          <div style={s.sh} onClick={e=>e.stopPropagation()}>
            <div style={s.hnd}/>
            <div style={s.shT}>Datos de entrega</div>
            <label style={s.lbl}>Tu nombre *</label>
            <input style={s.inp} placeholder="María González" value={form.nombre} onChange={e=>setForm({...form,nombre:e.target.value})}/>
            <label style={s.lbl}>WhatsApp *</label>
            <input style={s.inp} placeholder="+58 424-000-0000" value={form.telefono} onChange={e=>setForm({...form,telefono:e.target.value})}/>
            <label style={s.lbl}>Sexo (opcional)</label>
            <select style={{...s.inp,background:"#fff"}} value={form.sexo} onChange={e=>setForm({...form,sexo:e.target.value})}>
              <option value="">Prefiero no decir</option>
              <option value="femenino">Femenino</option>
              <option value="masculino">Masculino</option>
            </select>
            <label style={s.lbl}>Método de pago</label>
            <select style={{...s.inp,background:"#fff"}} value={form.pago} onChange={e=>setForm({...form,pago:e.target.value})}>
              <option value="pago_movil">Pago Móvil</option>
              <option value="zelle">Zelle</option>
              <option value="efectivo">Efectivo al recibir</option>
            </select>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10,background:"#f0fdf4",padding:"10px 14px",borderRadius:10}}>
              <input type="checkbox" id="promos" checked={form.recibirPromos} onChange={e=>setForm({...form,recibirPromos:e.target.checked})} style={{width:18,height:18}}/>
              <label htmlFor="promos" style={{fontSize:13,color:"#15803d",cursor:"pointer"}}>📲 Quiero recibir promociones por WhatsApp</label>
            </div>
            <div style={s.ib}>
              <div style={s.sr}><span style={s.sL}>Zona</span><span style={s.sV}>{zonaSel?.zona||"Sin seleccionar"}</span></div>
              <div style={s.sr}><span style={s.sL}>Delivery</span>{del===0?<span style={s.fT}>GRATIS</span>:<span style={s.sV}>${del.toFixed(2)}</span>}</div>
              <div style={s.sr}><span style={{fontWeight:700}}>Total</span><span style={{fontWeight:700,fontSize:16,color:P}}>${total.toFixed(2)}</span></div>
              <div style={{fontSize:11,color:"#94a3b8",marginTop:2}}>Entrega estimada: 40–60 min</div>
            </div>
            <button style={s.btn} onClick={confirm}>✓ Confirmar — ${total.toFixed(2)}</button>
            <button style={s.btnG} onClick={()=>setSheet("cart")}>← Volver</button>
          </div>
        </div>
      )}

      {/* SHEET ÉXITO */}
      {sheet==="success"&&(
        <div style={s.ov}>
          <div style={s.sh}>
            <div style={s.hnd}/>
            <div style={{textAlign:"center",padding:"16px 0"}}>
              <div style={{fontSize:52,marginBottom:10}}>🎉</div>
              <div style={{fontSize:20,fontWeight:700,color:P,marginBottom:6}}>¡Pedido confirmado!</div>
              <div style={{fontSize:13,color:"#64748b",lineHeight:1.6,marginBottom:20}}>
                Hola <strong>{form.nombre}</strong>, tu pedido está confirmado.<br/>
                Te escribimos al <strong>{form.telefono}</strong>.<br/>
                Tiempo estimado: <strong>40–60 min</strong>
                {form.recibirPromos&&<><br/><span style={{color:"#15803d",fontWeight:600}}>✓ Recibirás promociones de tus proveedores</span></>}
              </div>
              <button style={s.btnWa} onClick={sendWa}>📲 Recibir confirmación por WhatsApp</button>
              <button style={s.btnG} onClick={()=>{setCart({});setSheet(null);setForm({nombre:"",telefono:"",sexo:"",pago:"pago_movil",recibirPromos:false});setZonaSelId("");setZonaSel(null);setAddr({calle:"",referencia:""});}}>Hacer otro pedido</button>
            </div>
          </div>
        </div>
      )}

      {/* SHEET SERVICIO */}
      {sheet==="service"&&selSvc&&(
        <div style={s.ov} onClick={()=>setSheet(null)}>
          <div style={s.sh} onClick={e=>e.stopPropagation()}>
            <div style={s.hnd}/>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
              <span style={{fontSize:28}}>{selSvc.emoji}</span>
              <div style={s.shT}>{selSvc.name}</div>
            </div>
            <label style={s.lbl}>Tu nombre</label>
            <input style={s.inp} placeholder="María González" value={svcForm.nombre} onChange={e=>setSvcForm({...svcForm,nombre:e.target.value})}/>
            <label style={s.lbl}>WhatsApp</label>
            <input style={s.inp} placeholder="+58 424-000-0000" value={svcForm.telefono} onChange={e=>setSvcForm({...svcForm,telefono:e.target.value})}/>
            <label style={s.lbl}>Dirección</label>
            <input style={s.inp} placeholder="¿Dónde necesitas el servicio?" value={svcForm.direccion} onChange={e=>setSvcForm({...svcForm,direccion:e.target.value})}/>
            <label style={s.lbl}>Detalle</label>
            <input style={s.inp} placeholder="Cuéntanos lo que necesitas" value={svcForm.detalle} onChange={e=>setSvcForm({...svcForm,detalle:e.target.value})}/>
            <div style={s.ib}><div style={{fontSize:12,color:"#64748b"}}>💬 Te contactamos por WhatsApp para confirmar.</div></div>
            <button style={s.btnWa} onClick={sendSvcWa}>📲 Enviar solicitud por WhatsApp</button>
            <button style={s.btnG} onClick={()=>setSheet(null)}>Cancelar</button>
          </div>
        </div>
      )}

      {/* SHEET RESEÑA */}
      {sheet==="resena"&&(
        <div style={s.ov} onClick={()=>setSheet(null)}>
          <div style={s.sh} onClick={e=>e.stopPropagation()}>
            <div style={s.hnd}/>
            <div style={s.shT}>⭐ Dejar reseña</div>
            {resenaMsj&&<div style={s.msg(resenaMsj.includes("✅"))}>{resenaMsj}</div>}
            <label style={s.lbl}>Tu nombre *</label>
            <input style={s.inp} placeholder="María González" value={resena.nombre} onChange={e=>setResena({...resena,nombre:e.target.value})}/>
            <label style={s.lbl}>Calificación *</label>
            <div style={s.stars}>
              {[1,2,3,4,5].map(n=><span key={n} style={s.star(resena.estrellas>=n)} onClick={()=>setResena({...resena,estrellas:n})}>★</span>)}
            </div>
            <label style={s.lbl}>Comentario (opcional)</label>
            <input style={s.inp} placeholder="¿Cómo estuvo el producto?" value={resena.comentario} onChange={e=>setResena({...resena,comentario:e.target.value})}/>
            <button style={s.btn} onClick={enviarResena}>Enviar reseña</button>
            <button style={s.btnG} onClick={()=>setSheet(null)}>Cancelar</button>
          </div>
        </div>
      )}

      <div style={{height:80}}/>
    </div>
  );
}
