(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2242:function(e,t,r){"use strict";r.d(t,{Z:function(){return A}});var s=r(5893),a=r(7294),i=r(9008),n=r(6156),l=r(6010),c=r(5675),o=r(1664),m=r(1163),d=r(35),x=r.n(d);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){var t=e.href,r=e.active,i=e.children,n=e.className,c=e.isExternal,m=c?a.Fragment:o.default;return(0,s.jsx)(m,u(u({},c?{}:{href:t}),{},{children:(0,s.jsxs)("a",u(u({className:(0,l.Z)("py-5 sm:py-7 text-blue-deep px-3 text-sm font-bold border-b-2 border-white hover:underline nav:hover:no-underline nav:hover:border-blue-deep",{"nav:border-blue-deep":r},n)},c?{href:t}:{}),{},{children:[r&&(0,s.jsx)("span",{className:"mr-2 nav:hidden",children:"\u2192"}),i,r&&(0,s.jsx)("span",{className:"ml-2 nav:hidden",children:"\u2190"})]}))}))},p=[{text:"Fabricants",path:"/manufacturers"},{text:"R\xe9parateurs",path:"/repairers"},{text:"Consommateurs",path:"/consumers"}],f=function(e){var t=e.registerUrl,r=void 0===t?"/register":t,i=e.loginUrl,d=void 0===i?"/login":i,h=(0,m.useRouter)(),u=(0,a.useState)(!1),f=u[0],j=u[1],b=!1,v=!1;return(0,s.jsx)("div",{className:(0,l.Z)("fixed z-50 w-full bg-white shadow-xl",{"h-full nav:h-auto":!0===f}),children:(0,s.jsxs)("div",{className:"container max-w-5xl px-3 mx-auto lg:px-0",children:[(0,s.jsxs)("div",{className:"flex flex-row items-center",children:[(0,s.jsx)("div",{className:"mr-4",children:(0,s.jsx)(o.default,{href:"/",children:(0,s.jsx)("a",{children:(0,s.jsx)("img",{src:"https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg",alt:"Logo Repair",width:40,height:25})})})}),(0,s.jsx)("div",{className:"hidden mr-auto md:flex flex-row ",children:p.map((function(e){var t=e.text,r=e.path;return(0,s.jsx)(g,{href:r,active:h.pathname===r,children:t},r)}))}),(0,s.jsxs)("div",{className:"hidden md:flex md:flex-row",children:[v,(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{href:d,active:"/login"===h.pathname,children:"Se connecter"}),(0,s.jsx)(o.default,{href:r,children:(0,s.jsx)("a",{className:"my-auto ml-5",children:(0,s.jsxs)("button",{type:"button",className:"text-white flex flex-row items-center text-md px-3 py-3 font-bold rounded-md outline-none focus:outline-none bg-purple-700",children:[(0,s.jsx)("img",{src:"".concat("/next-js-reparability-landing","/icons/user-account.svg"),alt:""}),(0,s.jsx)("span",{className:"pl-3",children:"Cr\xe9er mon compte"})]})})})]})]}),(0,s.jsxs)("div",{className:"flex items-center ml-auto md:hidden",children:[(0,s.jsx)(g,{href:d,active:"/login"===h.pathname,children:(0,s.jsx)("span",{className:"text-blue-dark",children:"Se connecter"})}),(0,s.jsx)("div",{className:"ml-2 mr-3",children:(0,s.jsxs)("button",{className:(0,l.Z)("focus:outline-none",x().hamburger,x().hamburgerSlider,(0,n.Z)({},x().isActive,f)),type:"button",onClick:function(){j((function(e){return!e}))},"aria-controls":"mobile-menu","aria-expanded":"false",children:[(0,s.jsx)("span",{className:"sr-only",children:"Ouvre le menu principal"}),(0,s.jsx)("span",{className:x().hamburgerBox,children:(0,s.jsx)("span",{className:x().hamburgerInner})})]})})]})]}),(0,s.jsx)("div",{className:(0,l.Z)({hidden:!1===f}),children:(0,s.jsxs)("div",{className:"flex flex-col text-center nav:hidden",children:[p.map((function(e){var t=e.text,r=e.path;return(0,s.jsx)(g,{href:r,active:h.pathname===r,className:"border-b-0",children:t},r)})),(0,s.jsx)("div",{className:"w-full mx-auto my-2 rounded-lg bg-purple-600 opacity-20 h-[1px] max-w-[160px]"}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{href:d,active:"/login"===h.pathname,className:"border-b-0",children:"Se connecter"}),(0,s.jsx)(o.default,{href:r,children:(0,s.jsx)("a",{className:"my-auto ",children:(0,s.jsxs)("button",{type:"button",className:"flex flex-row items-center pl-3 mx-auto text-sm",children:[(0,s.jsx)(c.default,{src:"".concat("/next-js-reparability-landing","/icons/user-account.svg"),width:135,height:43,alt:""}),(0,s.jsx)("span",{className:"inline-block ml-3",children:"Cr\xe9er mon compte"})]})})})]}),b]})})]})})},j=function(e){var t=e.title,r=e.links;return(0,s.jsxs)("section",{className:"w-full mb-5 text-center md:text-left",children:[(0,s.jsxs)("h4",{className:"mb-3 text-sm lg:mb-5 text-gray-dark text-bold",children:[t," "]}),(0,s.jsx)("ul",{className:"text-sm text-bold",children:r.map((function(e,t){var r=e.href,a=e.text,i=e.isExternal;return(0,s.jsxs)("li",{className:"mb-2",children:[i&&(0,s.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:a}),!i&&(0,s.jsx)(o.default,{href:r,children:(0,s.jsx)("a",{children:a})})]},t)}))})]})},b={appName:"Repair"},v=function(){return(0,s.jsxs)("section",{className:"w-full text-center md=text-left mb-5 sw-8/12",children:[(0,s.jsx)("h4",{className:"mb-5 text-sm text-gray-dark text-bold",children:"Suivez-nous"}),(0,s.jsxs)("div",{className:"md:flex md:flex-wrap",children:[(0,s.jsx)("a",{href:"#",rel:"noreferrer",target:"_blank",className:"mr-2",children:(0,s.jsx)(c.default,{src:"/images/footer-youtube.svg",width:30,height:30,alt:"".concat(b.appName," sur Youtube"),title:"".concat(b.appName," sur Youtube")})}),(0,s.jsx)("a",{href:"https://www.linkedin.com/company/nicolashedoire",rel:"noreferrer",target:"_blank",className:"mr-2",children:(0,s.jsx)(c.default,{src:"/images/footer-linkedin.svg",width:30,height:30,alt:"".concat(b.appName," sur LinkedIn"),title:"".concat(b.appName," sur LinkedIn")})}),(0,s.jsx)("a",{href:"#",rel:"noreferrer",target:"_blank",className:"mr-2",children:(0,s.jsx)(c.default,{src:"/images/footer-facebook.svg",width:30,height:30,alt:"".concat(b.appName," sur Facebook"),title:"".concat(b.appName," sur Facebook")})}),(0,s.jsx)("a",{href:"https://twitter.com/hnhack",rel:"noreferrer",target:"_blank",className:"mr-2",children:(0,s.jsx)(c.default,{src:"/images/footer-twitter.svg",width:30,height:30,alt:"".concat(b.appName," sur Twitter"),title:"".concat(b.appName," sur Twitter")})})]})]})},N=function(){return(0,s.jsxs)("section",{className:"w-full mb-5 mt-6 text-center md:text-left",children:[(0,s.jsx)("a",{href:"/coming-soon",className:"block mb-2",children:(0,s.jsx)(c.default,{src:"/images/app-store.svg",width:135,height:43,alt:"App Apple Store"})}),(0,s.jsx)("a",{href:"/coming-soon",className:"block mb-2",children:(0,s.jsx)(c.default,{src:"/images/google-play.svg",width:135,height:43,alt:"App Google Play"})})]})},w=[{text:"Consommateurs",href:"/consumers"},{text:"R\xe9parateurs",href:"/repairers"},{text:"Constructeurs",href:"/manufacturers"},{text:"Tarifs",href:"/pricing"}],y=[{text:"Notre ambition",href:"/coming-soon"},{text:"Contact",href:"/contact"}],k=[{text:"Aide",href:"/coming-soon"},{text:"FAQ",href:"/coming-soon"},{text:"Blog",href:"https://blog.brik.com",isExternal:!0},{text:"Kit presse",href:"/coming-soon"}],_=function(){return(0,s.jsx)("footer",{className:"text-white shadow-xl bg-purple-700 pt-12",children:(0,s.jsxs)("div",{className:"container max-w-5xl px-4 mx-auto",children:[(0,s.jsxs)("div",{className:"flex flex-col w-8/12 mx-auto sm:flex-row sm:w-full",children:[(0,s.jsx)(N,{}),(0,s.jsx)(j,{title:"Domaines",links:w}),(0,s.jsx)(j,{title:"Soci\xe9t\xe9",links:y}),(0,s.jsx)(j,{title:"Ressources",links:k}),(0,s.jsx)(v,{})]}),(0,s.jsx)("div",{className:"h-5 border-t border-white opacity-20"}),(0,s.jsxs)("p",{className:"pb-5 text-xs text-gray-100",children:["\xa9 ",(new Date).getFullYear()," Repair Tous droits r\xe9serv\xe9s \xb7"," ",(0,s.jsx)(o.default,{href:"/terms",children:(0,s.jsx)("a",{className:"transition ease-in-out hover:text-white",children:"Conditions g\xe9n\xe9rales d'utilisation et de ventes"})}),"\xb7"," ",(0,s.jsx)(o.default,{href:"/cookies",children:(0,s.jsx)("a",{className:"transition ease-in-out hover:text-white",children:"Cookies"})})," ","\xb7"," ",(0,s.jsx)(o.default,{href:"/legals",children:(0,s.jsx)("a",{className:"transition ease-in-out hover:text-white",children:"Mentions l\xe9gales"})})]})]})})},A=function(e){var t=e.children,r=e.title,a=void 0===r?"Titre par defaut":r;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("title",{children:a}),(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,s.jsx)("header",{className:"h-auto",children:(0,s.jsx)(f,{})}),t,(0,s.jsx)(_,{})]})}},7772:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var s=r(5893),a=r(2242),i=r(5675),n=r(7294),l=function(){(0,n.useRef)();return(0,s.jsx)("div",{className:"container pt-40 relative max-w-5xl mx-auto sm:py-36 md:pb-48",children:(0,s.jsxs)("div",{className:"flex flex-col px-4 sm:flex-row",children:[(0,s.jsxs)("div",{className:"relative z-10 w-full md:w-8/12 text-blue-900",children:[(0,s.jsxs)("div",{className:"w-full sm:w-full md:w-11/12",children:[(0,s.jsx)("h1",{className:"mb-6 text-4xl text-center sm:text-center md:text-left",children:(0,s.jsxs)("strong",{children:["R\xe9parer votre mat\xe9riel",(0,s.jsx)("br",{}),"en toute simplicit\xe9."]})}),(0,s.jsxs)("h4",{className:"w-full mb-6 text-center font-light md:text-left md:w-5/6",children:[(0,s.jsx)("strong",{children:"La r\xe9paration de mat\xe9riel"})," \xe0 votre service"," ",(0,s.jsx)("strong",{children:"Dans votre ville"})]})]}),(0,s.jsx)("div",{className:"flex flex-col items-center mb-4 sm:flex-row",children:(0,s.jsx)("button",{type:"button",className:"w-5/6 sm:w-auto bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-3 px-6 border border-purple-500 hover:border-transparent rounded",onClick:function(){},children:"Rechercher"})})]}),(0,s.jsx)("div",{className:"hidden sm:hidden md:block md:relative md:top-0 md:-right-0",children:(0,s.jsx)(i.default,{width:400,height:362,src:"/images/index/header.png",alt:""})})]})})},c=r(6010),o=function(e){var t=e.title,r=e.subtitle,a=e.imageUrl,n=e.imageWidth,l=e.imageHeight,o=e.imageAlt,m=e.lg;return(0,s.jsxs)("div",{className:"container p-4",children:[(0,s.jsx)("div",{className:(0,c.Z)("py-4 flex justify-center",{"md:justify-start":"center"!==m}),style:{minHeight:50},children:(0,s.jsx)(i.default,{width:n,height:l,src:a,alt:o,title:o})}),(0,s.jsx)("h4",{className:(0,c.Z)("mb-1 text-lg font-bold text-blue-800 text-center",{"md:text-left":"center"!==m}),children:t}),(0,s.jsx)("p",{className:(0,c.Z)("text-sm text-gray-600 text-center",{"md:text-left":"center"!==m}),children:r})]})},m=function(){return(0,s.jsx)("section",{className:"py-8 sm:py-40 md:py-16 bg-gray-ultraLight container relative max-w-5xl mx-auto",children:(0,s.jsx)("div",{className:"relative sm:pt-64 md:pt-32 flex justify-center",children:(0,s.jsx)("div",{className:"w-11/12 px-4 mx-auto mb-12 bg-white rounded-lg shadow-2xl sm:w-10/12 sm:absolute sm:left-0 sm:right-0 lg:w-full py-9 -top-36 sm:mb-0",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-3",children:[(0,s.jsx)(o,{title:"Acc\xe9der \xe0 l'information",subtitle:"Nos mettons \xe0 disposition les informations sur chaque constructeur",imageUrl:"/images/index/picto-cadenas.svg",imageWidth:36,imageHeight:40,imageAlt:"Acc\xe8s \xe0 l'information"}),(0,s.jsx)(o,{title:"Acc\xe9der \xe0 l'information",subtitle:"Nos mettons \xe0 disposition la bar\xe8mes en toute transparence",imageUrl:"/images/index/picto-cadenas.svg",imageWidth:36,imageHeight:40,imageAlt:"Acc\xe8s \xe0 l'information"}),(0,s.jsx)(o,{title:"D\xe9penser moins cher",subtitle:"Achetez des objets durables dans le temps",imageUrl:"/images/index/picto-chart.svg",imageWidth:36,imageHeight:40,imageAlt:"G\xe9rer moins cher"})]})})})})},d=r(1664),x=function(){return(0,s.jsxs)("section",{className:"bg-gray-ultraLight container relative max-w-5xl mx-auto",children:[(0,s.jsxs)("h2",{className:"mb-8 text-4xl text-center text-blue-900",children:[(0,s.jsx)("strong",{children:"La transparence"})," sur toute la chaine"]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-4 mb-10 gap-x-6 sm:grid-cols-2 justify-center",children:[(0,s.jsx)(o,{title:"Indice de r\xe9paration",subtitle:"Le mat\xe9riel est not\xe9 en fonction des certains crit\xe8res afin de vous conseilller la meilleure solution",imageUrl:"/images/index/indice.png",imageWidth:90,imageHeight:90,imageAlt:"Indice de confiance",lg:"center"}),(0,s.jsx)(o,{title:"Avis r\xe9parateurs",subtitle:"Quand votre mat\xe9riel est en panne, il passe dans les mains de r\xe9parateurs avis\xe9s",imageUrl:"/images/index/indice.png",imageWidth:90,imageHeight:90,imageAlt:"Donner la difficult\xe9 des r\xe9parations",lg:"center"}),(0,s.jsx)(o,{title:"Avis consommateurs",subtitle:"Parce que votre avis compte \xe9norm\xe9ment sur toute la chaine",imageUrl:"/images/index/indice.png",imageWidth:90,imageHeight:90,imageAlt:"Valoriser un objet avec votre avis",lg:"center"}),(0,s.jsx)(o,{title:"\xc9volution",subtitle:"Pour rester connect\xe9 avec le march\xe9",imageUrl:"/images/index/indice.png",imageWidth:90,imageHeight:90,imageAlt:"\xc9volution de la qualit\xe9",lg:"center"})]}),(0,s.jsx)("div",{className:"mb-5 flex justify-center text-center",children:(0,s.jsx)(d.default,{href:"/evaluate/",children:(0,s.jsx)("button",{type:"button",className:"w-5/6 sm:w-auto bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-3 px-6 border border-purple-500 hover:border-transparent rounded",children:"Je recherche des informations"})})})]})},h=function(){return(0,s.jsx)("section",{className:"py-14 bg-purple-900 mt-12",children:(0,s.jsxs)("div",{className:"container relative max-w-5xl mx-auto",children:[(0,s.jsxs)("h2",{className:"mb-12 text-4xl text-center text-white",children:["Rejoignez ",(0,s.jsx)("strong",{children:"le mouvement"})]}),(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)(d.default,{href:"/register",children:(0,s.jsx)("a",{children:(0,s.jsxs)("button",{type:"button",className:"flex flex-row justify-center items-center mx-auto text-black bg-white text-md px-3 py-3 font-bold rounded-md outline-none focus:outline-none",children:[(0,s.jsx)("img",{src:"".concat("/next-js-reparability-landing","/icons/user-account-black.svg"),alt:""}),(0,s.jsx)("span",{className:"pl-3",children:"Cr\xe9er mon compte"})]})})})})]})})},u=function(){return(0,s.jsxs)(a.Z,{title:"Home",children:[(0,s.jsx)(l,{}),(0,s.jsx)(m,{}),(0,s.jsx)(x,{}),(0,s.jsx)(h,{})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7772)}])},35:function(e){e.exports={hamburger:"NavBar_hamburger__1IRj-",isActive:"NavBar_isActive__1X90g",hamburgerInner:"NavBar_hamburgerInner__1xnsc",hamburgerBox:"NavBar_hamburgerBox__3BH8V",hamburgerSlider:"NavBar_hamburgerSlider__3OS2j"}}},function(e){e.O(0,[291,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);