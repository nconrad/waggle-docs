"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8840],{3905:(e,t,o)=>{o.d(t,{Zo:()=>g,kt:()=>h});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},g=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=u(o),p=a,h=d["".concat(l,".").concat(p)]||d[p]||c[p]||n;return o?r.createElement(h,i(i({ref:t},g),{},{components:o})):r.createElement(h,i({ref:t},g))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7629:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=o(7462),a=(o(7294),o(3905));const n={sidebar_position:6},i="Building your own Waggle device",s={unversionedId:"tutorials/create-waggle",id:"tutorials/create-waggle",title:"Building your own Waggle device",description:"Are you a professor that wants to use affordable Waggle devices to teach students interested in AI? Are you someone interested in developing a new edge app using a local development platform? Are you a Waggle user interested in using a new sensor (i.e. a new camera, a bat signal detector, a custom sensor they built)? If you would like to build, design and deploy software that could answer your questions above, then Waggle is the right choice for you.",source:"@site/docs/tutorials/create-waggle.md",sourceDirName:"tutorials",slug:"/tutorials/create-waggle",permalink:"/waggle-docs/docs/tutorials/create-waggle",draft:!1,editUrl:"https://github.com/waggle-sensor/waggle-docs/edit/main/docs/tutorials/create-waggle.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Cloud compute & HPC on edge data",permalink:"/waggle-docs/docs/tutorials/cloud-compute"},next:{title:"Reference guides",permalink:"/waggle-docs/docs/category/reference-guides"}},l={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Registering your Waggle device",id:"registering-your-waggle-device",level:3}],g={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-your-own-waggle-device"},"Building your own Waggle device"),(0,a.kt)("p",null,"Are you a professor that wants to use affordable Waggle devices to teach students interested in AI? Are you someone interested in developing a new ",(0,a.kt)("a",{parentName:"p",href:"/waggle-docs/docs/tutorials/edge-apps/intro-to-edge-apps"},"edge app")," using a local development platform? Are you a Waggle user interested in using a new sensor (i.e. a new camera, a bat signal detector, a custom sensor they built)? If you would like to build, design and deploy software that could answer your questions above, then Waggle is the right choice for you."),(0,a.kt)("p",null,"This tutorial will guide you in preparing your own Waggle device and (optionally) registering it to upload data to a shared ",(0,a.kt)("a",{parentName:"p",href:"/waggle-docs/docs/about/architecture#beehive"},"development Beehive"),". This Waggle device is a fully unlocked development platform running the same ",(0,a.kt)("a",{parentName:"p",href:"/waggle-docs/docs/about/architecture#waggle-edge-stack-wes"},"WES infrastructure")," that runs in production Waggle edge devices (ex. the ",(0,a.kt)("a",{parentName:"p",href:"/waggle-docs/docs/about/architecture#wild-waggle-node"},"Wild Waggle Node"),"). This is an ideal platform for users interested in developing a new ",(0,a.kt)("a",{parentName:"p",href:"/waggle-docs/docs/tutorials/edge-apps/intro-to-edge-apps"},"edge app")," and/or experimenting with a ",(0,a.kt)("a",{parentName:"p",href:"/waggle-docs/docs/tutorials/access-waggle-sensors#bring-your-own-sensor-to-waggle"},"new sensor"),"."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"To get started in boot-strapping your Waggle Edge Computing kit you can follow the instructions for the various supported platforms on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/node-platforms"},"node-platforms")," GitHub page."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We currently support a limited set of hardware platform because making edge devices into Waggle requires some hardware specific instructions. Check out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/node-platforms#supported-platforms"},"the platforms")," we support as of now. More platforms will be added in the future. However, if you would like to add support for other platforms go ahead and submit a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"},"pull request")," to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/node-platforms"},"node-platforms"),".")),(0,a.kt)("h3",{id:"registering-your-waggle-device"},"Registering your Waggle device"),(0,a.kt)("p",null,"During the bootstrapping process you will have the option to register your device within the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"web portal"),". It is highly recommended to register your device, as this enables all the core ",(0,a.kt)("a",{parentName:"p",href:"/waggle-docs/docs/about/architecture#waggle-edge-stack-wes"},"WES tools")," to be automatically downloaded, enabling the edge app development and run-time environment. Additionally, this enables your edge apps to publish data to the development ",(0,a.kt)("a",{parentName:"p",href:"/waggle-docs/docs/about/architecture#beehive"},"Beehive"),", accessible to cloud-based analysis tools and workflow frameworks."),(0,a.kt)("p",null,'To register your device, navigate to "Account" > ',(0,a.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org/account/my-nodes"},'"My Nodes"'),'. Enter your device ID (which you will obtain through the hardware boot-strapping process) then click "Get Keys" button. A "registration zip" file will be generated and available for download. Then follow the instructions for ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/node-platforms"},"your device")," to load the registration keys."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Figure 1: Registering my devices",src:o(1569).Z,width:"2372",height:"1222"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You may register as many times as you want. But note that each registration key has a short expiration time and should be used shortly after generation.")),(0,a.kt)("p",null,"Now you are ready to develop your edge apps and/or introduce new sensors to the Waggle platform. Head over to the ",(0,a.kt)("a",{parentName:"p",href:"/waggle-docs/docs/about/overview"},"overview")," to find the instructions you need for development."))}c.isMDXComponent=!0},1569:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/sage-my-devices-6fdfb03880191cee229d402cfd389665.png"}}]);