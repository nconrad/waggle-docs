"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,u=p["".concat(c,".").concat(d)]||p[d]||g[d]||a;return n?r.createElement(u,o(o({ref:t},h),{},{components:n})):r.createElement(u,o({ref:t},h))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5774:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},o="Lightning Science",s={type:"mdx",permalink:"/waggle-docs/science/lightning-science",source:"@site/src/pages/science/lightning-science.md",title:"Lightning Science",description:"Overview",frontMatter:{}},c=[{value:"Overview",id:"overview",level:2},{value:"Sage deployment",id:"sage-deployment",level:2}],l={toc:c},h="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lightning-science"},"Lightning Science"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Atmospheric driven electrical discharges (lightning) occur when vigorous vertical motions in thunderstorms (updrafts) produce larger ice particles (graupel) which, through the thermoelectric effect, can promote the charging of cloud systems. When the electric field is so large that electrons can be liberated from air molecules (approximately 10000 Volts over a centimeter) the resulting current channel formed dissipates energy in the form of light, heat and sound (thunder). As it is linked to fundamental cloud physics, lightning provides what atmospheric scientists term a \u201cMicrophysical Fingerprint\u201d of the underlying storm structure. Lightning can be detected by optical means (like on the GOES16/17 ",(0,i.kt)("a",{parentName:"p",href:"https://ghrc.nsstc.nasa.gov/lightning/overview_glm.html"},"Global Lightning Mapper"),"), acoustic means (although subject to error given complications in how sound propagates) but the detection technique that yields the best underlying structure is detection via electromagnetic emissions (EM) in radio bands."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"antenna and HLMA hardware",src:n(5632).Z,width:"1844",height:"994"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Used with permission, this image shows the antenna and HLMA hardware used to detect lightning using VHF radio waves.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"antenna and HLMA hardware",src:n(6123).Z,width:"768",height:"576"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Image courtesy of Eric Pershey shows an example of custom lightning detection circuitry.")),(0,i.kt)("p",null,"One of the best instruments for doing this is the ",(0,i.kt)("a",{parentName:"p",href:"https://atmo.tamu.edu/facilities-resources/lightning/index.html#:~:text=The%20Houston%20Lightning%20Mapping%20Array,%2C%2060%2D66%20MHz"},"Houston Lightning Mapping Array")," (HLMA) which uses sophisticated antennas and amplifiers and can even detect electron motions pre-break-down. There are also a slew of commercial solutions on the market. Since EM techniques use time of flight for geolocation more than one detector is needed (HLMA uses 12). This presents a logistical hurdle to testing of new (perhaps more affordable) lightning detection technologies. Enter Sage! By providing edge compute and network cyberinfrastructure across geospatially diverse regions scientists can  bring their own technologies. A fun and very affordable technology are Software Defined Radios (",(0,i.kt)("a",{parentName:"p",href:"https://www.rtl-sdr.com/"},"for example the RTL-SDR"),"). A cheap SDR can tune to frequencies from 30MHz to 3GHz and even lower frequencies with upconverters. While digitization rates are less than ideal at ~2.5Ms/s (HLMA operates at 25Ms/s) this gives a spatial accuracy (basically divide by the speed of light) of 100m which is not bad for a $35 device. ",(0,i.kt)("b",null,"Sage plans to outfit a number of notes with SDRs allowing code to be simply dropped in to look for EM events.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"antenna and HLMA hardware",src:n(847).Z,width:"924",height:"575"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Radio emissions from a nearby lightning strike detected at 30MHz using a Software Defined Radio connected to a Raspberry Pi.")),(0,i.kt)("h2",{id:"sage-deployment"},"Sage deployment"),(0,i.kt)("p",null,"The Sage team will be deploying several nodes to Houston in 2021 to coincide with the ",(0,i.kt)("a",{parentName:"p",href:"https://www.arm.gov/research/campaigns/amf2021tracer"},"DOE ARM TRACER field campaign"),". Not only will this place edge enabled cameras (visual, acoustic and EM detection of lightning I hear you say? or using pedestrian counters to see if people go indoors during a lightning storm?) in Houston but will allow the team and Sage users to compare what we can see with SDRs to what we can see with other custom hardware and what can be seen with the state-of-the-art HLMA."))}p.isMDXComponent=!0},5632:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lightning-science-1-7bb5fa1187412a3bdf28fd6f8c71b556.png"},6123:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lightning-science-2-f78e1a146c2324c699d550f551a793fa.jpg"},847:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lightning-science-3-e530ff67dd52a929e142258e7a63c443.png"}}]);