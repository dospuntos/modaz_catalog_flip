(this["webpackJsonpmodaz-flip"]=this["webpackJsonpmodaz-flip"]||[]).push([[0],{173:function(e,t,a){"use strict";a.r(t);var r=a(2),c=a(58),n=a(0),s=a(12),i=a.n(s),o=a(39),j=a(71),l=a(220),d=a(59),b=a(221),h=a(33),u=a(32),O=a(209),x=a(210),p=a(213),m=a(211),g=a(212),y=a(214),v=[{primaryText:"Cat\xe1logo",icon:"menu_book",view:"flip"},{primaryText:"Rejilla",icon:"view_module",view:"grid"},{primaryText:"Lista",icon:"list",view:"list"}],f=function(e){var t=e.layout,a=e.setLayout;return Object(r.jsxs)(O.a,{children:[v.map((function(e,c){var n=e.primaryText,s=e.icon,i=e.view;return Object(r.jsxs)(x.a,{selected:i===t,button:!0,onClick:function(){return a(i)},children:[Object(r.jsx)(m.a,{children:Object(r.jsx)(g.a,{children:s})}),Object(r.jsx)(p.a,{primary:n,primaryTypographyProps:{noWrap:!0}})]},n)})),Object(r.jsx)(y.a,{style:{margin:"12px 0"}}),Object(r.jsxs)(x.a,{button:!0,children:[Object(r.jsx)(m.a,{children:Object(r.jsx)(g.a,{children:"settings"})}),Object(r.jsx)(p.a,{primary:"Mi Cuenta",primaryTypographyProps:{noWrap:!0}})]}),Object(r.jsxs)(x.a,{button:!0,children:[Object(r.jsx)(m.a,{children:Object(r.jsx)(g.a,{children:"email"})}),Object(r.jsx)(p.a,{primary:"Contacto",primaryTypographyProps:{noWrap:!0}})]}),Object(r.jsxs)(x.a,{button:!0,children:[Object(r.jsx)(m.a,{children:Object(r.jsx)(g.a,{children:"help_outline"})}),Object(r.jsx)(p.a,{primary:"Ayuda",primaryTypographyProps:{noWrap:!0}})]})]})};f.defaultProps={};var w=f,L=a(224),I=function(e){var t=e.collapsed;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{style:{padding:t?8:16,transition:"0.3s"},children:[Object(r.jsx)(L.a,{style:{width:t?48:60,height:t?48:60,transition:"0.3s"}}),Object(r.jsx)("div",{style:{paddingBottom:16}}),Object(r.jsx)(d.a,{variant:"h6",noWrap:!0,children:"Joanne Maidana"}),Object(r.jsx)(d.a,{color:"textSecondary",noWrap:!0,gutterBottom:!0,children:"joanne.tatiana@gmail.com"})]}),Object(r.jsx)(y.a,{})]})};I.defaultProps={collapsed:!1};var S=I,B=a(13),W=a(7),C=a(226),P=a(225),k=a(208),R=function(e){var t=e.classes,a=e.screen;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.a,{noWrap:!0,color:"textSecondary",className:t.header,children:"Zumba Wear - Moda Z"}),Object(r.jsx)("div",{className:t.grow}),Object(r.jsxs)("div",{className:t.search,children:[Object(r.jsx)("div",{className:t.searchIcon,children:Object(r.jsx)(g.a,{children:"search"})}),Object(r.jsx)(P.a,{placeholder:"Buscar...",classes:{root:t.inputRoot,input:t.inputInput}})]}),"xs"===a&&Object(r.jsx)(k.a,{children:Object(r.jsx)(g.a,{children:"more_vert"})}),"sm"===a&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k.a,{children:Object(r.jsx)(g.a,{children:"favorite"})}),Object(r.jsx)(k.a,{children:Object(r.jsx)(g.a,{children:"more_vert"})})]}),Object(C.a)("md",a)&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k.a,{children:Object(r.jsx)(g.a,{children:"favorite"})}),Object(r.jsx)(k.a,{children:Object(r.jsx)(g.a,{children:"phone"})}),Object(r.jsx)(k.a,{children:Object(r.jsx)(g.a,{children:"camera"})})]})]})};R.defaultProps={screen:null};var M=Object(W.a)((function(e){var t=e.spacing,a=e.transitions,r=e.breakpoints,c=e.palette,n=e.shape;return{header:{fontWeight:900,minWidth:0,fontSize:18},grow:{flexGrow:1},search:Object(B.a)({position:"relative",marginRight:8,borderRadius:n.borderRadius,background:c.grey[200],"&:hover":{background:c.grey[300]},marginLeft:0,width:"100%"},r.up("sm"),{marginLeft:t(1),width:"auto"}),searchIcon:{width:t(9),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(B.a)({borderRadius:4,paddingTop:t(1),paddingRight:t(1),paddingBottom:t(1),paddingLeft:t(10),transition:a.create("width"),width:"100%"},r.up("sm"),{width:120,"&:focus":{width:200}})}}))(R),T=(a(95),a(111)),N=a(223),F=a(222),z=a(215),A=a(216),D=a(217),_=a(218),E=function(e){var t=e.classes,a=e.preset,c=e.onChangePreset;e.data,e.onChangeData;return Object(r.jsx)("div",{className:t.root,children:Object(r.jsx)(T.a,{elevation:1,square:!0,className:t.paper,children:Object(r.jsxs)(z.a,{container:!0,children:[Object(r.jsx)(z.a,{item:!0,xs:6,children:Object(r.jsxs)(A.a,{component:"fieldset",children:[Object(r.jsx)(D.a,{component:"legend",children:"Presets"}),Object(r.jsxs)(N.a,{"aria-label":"Preset",name:"preset",value:a,onChange:function(e){return c(e.target.value)},children:[Object(r.jsx)(_.a,{value:"createDefaultLayout",control:Object(r.jsx)(F.a,{}),label:"Default"}),Object(r.jsx)(_.a,{value:"createStandardLayout",control:Object(r.jsx)(F.a,{}),label:"Standard"}),Object(r.jsx)(_.a,{value:"createFixedLayout",control:Object(r.jsx)(F.a,{}),label:"Fixed"}),Object(r.jsx)(_.a,{value:"createContentBasedLayout",control:Object(r.jsx)(F.a,{}),label:"Content-based"}),Object(r.jsx)(_.a,{value:"createCozyLayout",control:Object(r.jsx)(F.a,{}),label:"Cozy"}),Object(r.jsx)(_.a,{value:"createMuiTreasuryLayout",control:Object(r.jsx)(F.a,{}),label:"Mui Treasury"})]})]})}),Object(r.jsx)(z.a,{item:!0,xs:6})]})})})};E.defaultProps={};Object(W.a)((function(e){var t,a=e.breakpoints;return{root:(t={padding:16},Object(B.a)(t,a.up("sm"),{padding:24,maxWidth:500,margin:"auto"}),Object(B.a)(t,a.up("md"),{maxWidth:700}),t),paper:{padding:16}}}))(E);var G=a(219),U=function(e){var t=e.classes;return Object(r.jsxs)("div",{className:t.root,children:[Object(r.jsx)(d.a,{variant:"overline",children:"INTRODUCING"}),Object(r.jsxs)(d.a,{weight:"bold",variant:"h4",gutterBottom:!0,children:["Material UI ",Object(r.jsx)(G.a,{underline:"none",children:"Layout"})]}),Object(r.jsx)(d.a,{gutterBottom:!0,children:Object(r.jsx)("b",{children:"Version 4 (updated 1 May 2020)"})}),Object(r.jsx)(d.a,{indent:"small",children:"Layout is a group of Material-UI components that are enhanced and combined to create dynamic, easy-to-maintain and easy-to-code as much as possible."}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(d.a,{weight:"bold",variant:"h5",gutterBottom:!0,children:"Let's start with Why?"}),Object(r.jsxs)(d.a,{gutterBottom:!0,children:["I created this because",Object(r.jsx)("br",{})]}),Object(r.jsx)(d.a,{component:"div",children:Object(r.jsxs)("ol",{children:[Object(r.jsx)("li",{children:"It took me a lot of time to initialize dashboard layout when I have new projects and I\u2019m sure that a lot of you guys agree with me."}),Object(r.jsx)("li",{children:"Sometimes it is hard to refactor because the structure is so poor because someone isn\u2019t deeply understand what he/she was doing, as a result, rewrite the whole layout (it actually happened, at least in my experience)."}),Object(r.jsx)("li",{children:"Because we need to be fast to let others continue our work, we frequently write poor and a lot of code. However, we say we don\u2019t have time to fix them. Eventually, spend all day paying technical debts."})]})}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(d.a,{weight:"bold",variant:"h5",gutterBottom:!0,children:"Objectives"}),Object(r.jsxs)(d.a,{children:["It must be easy enough to use, however still be able to adjust to compat with real word examples and usages. More importantly, it need to follow"," ",Object(r.jsx)(G.a,{target:"_blank",rel:"noopener",href:"https://material.io/design/components/navigation-drawer.html#",underline:"none",children:"Material specs"})," ","since we are 100% based on Material-UI with no other styling libraries. Last but not least, responsive is a must."]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(d.a,{weight:"bold",variant:"h5",gutterBottom:!0,children:"Solution"}),Object(r.jsx)(d.a,{children:"Separate layout into 5 components"}),Object(r.jsx)(d.a,{component:"div",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Root"}),Object(r.jsx)("li",{children:"Header (AppBar)"}),Object(r.jsx)("li",{children:"Nav (Drawer)"}),Object(r.jsx)("li",{children:"Content"}),Object(r.jsx)("li",{children:"Footer"})]})}),Object(r.jsxs)(d.a,{children:[Object(r.jsx)("b",{children:"Root"})," will provide context to other components to sync states across them."]}),Object(r.jsxs)(d.a,{children:[Object(r.jsx)("b",{children:"Behavior"})," of your layout will be controlled by using config (just a plain object) that will be injected to the Root."]}),Object(r.jsxs)(d.a,{children:[Object(r.jsx)("b",{children:"Presets"})," is a set of predefined config that I can come up with after researching a lot of the real world websites and also the"," ",Object(r.jsx)(G.a,{href:"https://material.io/design/components/navigation-drawer.html#usage",children:"official Material specs"})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]})};U.defaultProps={};Object(W.a)((function(e){var t,a=e.breakpoints;return{root:(t={padding:16},Object(B.a)(t,a.up("sm"),{padding:24,maxWidth:500,margin:"auto"}),Object(B.a)(t,a.up("md"),{maxWidth:700}),t)}}))(U);var J=function(){return Object(r.jsxs)("div",{style:{maxWidth:700,margin:"auto",textAlign:"center"},children:[Object(r.jsxs)(d.a,{variant:"caption",align:"center",children:["\xa9 Copyright Moda Z - ",(new Date).getFullYear()]}),Object(r.jsx)(y.a,{style:{margin:"24px auto",width:60}}),Object(r.jsxs)(z.a,{container:!0,justify:"center",spacing:2,children:[Object(r.jsx)(z.a,{item:!0,xs:12,sm:6,md:3,children:Object(r.jsx)(d.a,{align:"center",gutterBottom:!0,color:"textSecondary",children:"About"})}),Object(r.jsx)(z.a,{item:!0,xs:12,sm:6,md:3,children:Object(r.jsx)(d.a,{align:"center",gutterBottom:!0,color:"textSecondary",children:"Blog"})}),Object(r.jsx)(z.a,{item:!0,xs:12,sm:6,md:3,children:Object(r.jsx)(d.a,{align:"center",gutterBottom:!0,color:"textSecondary",children:"Terms & Conditions"})}),Object(r.jsx)(z.a,{item:!0,xs:12,sm:6,md:3,children:Object(r.jsx)(d.a,{align:"center",gutterBottom:!0,color:"textSecondary",children:"Contact us"})})]})]})};J.defaultProps={};var V=J,Z=function(e){var t=e.classes,a=e.products;return Object(r.jsxs)("div",{className:t.root,children:[Object(r.jsx)(d.a,{variant:"title",children:"FLIPBOOK"}),Object(r.jsx)(d.a,{variant:"body1",children:"Lorem ipsum dolor sit amet."}),a.map((function(e){return Object(r.jsx)("p",{children:e.name})}))]})};Z.defaultProps={};var q=Object(W.a)((function(e){var t,a=e.breakpoints;return{root:(t={padding:16},Object(B.a)(t,a.up("sm"),{padding:24,maxWidth:500,margin:"auto"}),Object(B.a)(t,a.up("md"),{maxWidth:700}),t)}}))(Z),H=function(e){var t=e.classes;return Object(r.jsxs)("div",{className:t.root,children:[Object(r.jsx)(d.a,{variant:"title",children:"Grid View"}),Object(r.jsx)(d.a,{variant:"body1",children:"Lorem ipsum dolor sit amet."})]})};H.defaultProps={};var K=Object(W.a)((function(e){var t,a=e.breakpoints;return{root:(t={padding:16},Object(B.a)(t,a.up("sm"),{padding:24,maxWidth:500,margin:"auto"}),Object(B.a)(t,a.up("md"),{maxWidth:700}),t)}}))(H),Y=function(e){var t=e.classes;e.products;return Object(r.jsxs)("div",{className:t.root,children:[Object(r.jsx)(d.a,{variant:"title",children:"List View"}),Object(r.jsx)(d.a,{variant:"body1",children:"Lorem ipsum dolor sit amet."})]})};Y.defaultProps={};var Q=Object(W.a)((function(e){var t,a=e.breakpoints;return{root:(t={padding:16},Object(B.a)(t,a.up("sm"),{padding:24,maxWidth:500,margin:"auto"}),Object(B.a)(t,a.up("md"),{maxWidth:700}),t)}}))(Y),X=a(96),$=a.n(X),ee=a(125);function te(e){return ae.apply(this,arguments)}function ae(){return(ae=Object(ee.a)($.a.mark((function e(t){var a;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=2;break}return e.abrupt("return",t.json());case 2:if(401===t.status&&(localStorage.removeItem("token"),window.location.reload()),400!==t.status){e.next=8;break}return e.next=6,t.text();case 6:a=e.sent,console.log("API ERROR: ",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(e){console.error("API call failed. "+e)}var ce=Object(h.f)(o.a),ne=Object(h.d)(o.a),se=Object(h.h)(o.a),ie=Object(h.g)(o.a),oe=Object(h.b)(o.a),je=Object(h.c)(o.a),le=Object(h.e)(o.a),de={createDefaultLayout:Object(u.c)(),createStandardLayout:Object(u.f)(),createFixedLayout:Object(u.d)(),createContentBasedLayout:Object(u.a)(),createCozyLayout:Object(u.b)(),createMuiTreasuryLayout:Object(u.e)()};function be(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)("createStandardLayout"),o=Object(c.a)(i,2),u=o[0],O=(o[1],Object(n.useState)({header:!0,nav:!0,content:!0,footer:!0})),x=Object(c.a)(O,2),p=(x[0],x[1],Object(n.useState)("flip")),m=Object(c.a)(p,2),g=m[0],y=m[1],v=Object(n.useState)([]),f=Object(c.a)(v,2),L=f[0],I=f[1];return Object(n.useEffect)((function(){(console.log("Getting products from API"),fetch("https://modaz.net/api/products").then(te).catch(re)).then((function(e){I(e),console.log(e),s(!1)}))})),a?Object(r.jsx)("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(r.jsx)(d.a,{variant:"h2",children:"Cargando..."})}):Object(r.jsxs)(j.b,{injectFirst:!0,children:[Object(r.jsx)(l.a,{}),Object(r.jsx)(h.a,{scheme:de[u],children:function(e){var t=e.state.sidebar;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ce,{children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(se,{sidebarId:"primarySidebar"}),Object(r.jsx)(M,{})]})}),Object(r.jsxs)(ne,{sidebarId:"primarySidebar",children:[Object(r.jsxs)(ie,{children:[Object(r.jsx)(S,{collapsed:t.primarySidebar.collapsed}),Object(r.jsx)(w,{setLayout:y,layout:g})]}),Object(r.jsx)(oe,{})]}),Object(r.jsxs)(je,{children:["flip"===g&&Object(r.jsx)(q,{products:L.data.products}),"grid"===g&&Object(r.jsx)(K,{}),"list"===g&&Object(r.jsx)(Q,{})]}),Object(r.jsx)(le,{children:Object(r.jsx)(V,{})})]})}})]})}var he=document.getElementById("root");i.a.render(Object(r.jsx)(be,{}),he)}},[[173,1,2]]]);
//# sourceMappingURL=main.45f6e133.chunk.js.map