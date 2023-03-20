"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),g=a,h=c["".concat(l,".").concat(g)]||c[g]||d[g]||n;return r?o.createElement(h,i(i({ref:t},p),{},{components:r})):o.createElement(h,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:6},i="Building your own Waggle device",s={unversionedId:"tutorials/create-waggle",id:"tutorials/create-waggle",title:"Building your own Waggle device",description:"Are you a professor that wants to use affordable Waggle devices to teach students interested in AI? Are you someone interested in developing a new edge app using a local development platform? Are you a Waggle user interested in using a new sensor (i.e. a new camera, a bat signal detector, a custom sensor they built)? If you would like to build, design and deploy software that could answer your questions above, then Waggle is the right choice for you.",source:"@site/docs/tutorials/create-waggle.md",sourceDirName:"tutorials",slug:"/tutorials/create-waggle",permalink:"/docs/tutorials/create-waggle",draft:!1,editUrl:"https://github.com/waggle-sensor/waggle-docs/edit/main/docs/tutorials/create-waggle.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Cloud compute & HPC on edge data",permalink:"/docs/tutorials/cloud-compute"},next:{title:"Reference guides",permalink:"/docs/category/reference-guides"}},l={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Registering your Waggle device",id:"registering-your-waggle-device",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-your-own-waggle-device"},"Building your own Waggle device"),(0,a.kt)("p",null,"Are you a professor that wants to use affordable Waggle devices to teach students interested in AI? Are you someone interested in developing a new ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorials/edge-apps/intro-to-edge-apps"},"edge app")," using a local development platform? Are you a Waggle user interested in using a new sensor (i.e. a new camera, a bat signal detector, a custom sensor they built)? If you would like to build, design and deploy software that could answer your questions above, then Waggle is the right choice for you."),(0,a.kt)("p",null,"This tutorial will guide you in preparing your own Waggle device and (optionally) registering it to upload data to a shared ",(0,a.kt)("a",{parentName:"p",href:"/docs/about/architecture#beehive"},"development Beehive"),". This Waggle device is a fully unlocked development platform running the same ",(0,a.kt)("a",{parentName:"p",href:"/docs/about/architecture#waggle-edge-stack-wes"},"WES infrastructure")," that runs in production Waggle edge devices (ex. the ",(0,a.kt)("a",{parentName:"p",href:"/docs/about/architecture#wild-waggle-node"},"Wild Waggle Node"),"). This is an ideal platform for users interested in developing a new ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorials/edge-apps/intro-to-edge-apps"},"edge app")," and/or experimenting with a ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorials/access-waggle-sensors#bring-your-own-sensor-to-waggle"},"new sensor"),"."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"To get started in boot-strapping your Waggle Edge Computing kit you can follow the instructions for the various supported platforms on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/node-platforms"},"node-platforms")," GitHub page."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We currently support a limited set of hardware platform because making edge devices into Waggle requires some hardware specific instructions. Check out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/node-platforms#supported-platforms"},"the platforms")," we support as of now. More platforms will be added in the future. However, if you would like to add support for other platforms go ahead and submit a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"},"pull request")," to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/node-platforms"},"node-platforms"),".")),(0,a.kt)("h3",{id:"registering-your-waggle-device"},"Registering your Waggle device"),(0,a.kt)("p",null,"During the bootstrapping process you will have the option to register your device within the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"web portal"),". It is highly recommended to register your device, as this enables all the core ",(0,a.kt)("a",{parentName:"p",href:"/docs/about/architecture#waggle-edge-stack-wes"},"WES tools")," to be automatically downloaded, enabling the edge app development and run-time environment. Additionally, this enables your edge apps to publish data to the development ",(0,a.kt)("a",{parentName:"p",href:"/docs/about/architecture#beehive"},"Beehive"),", accessible to cloud-based analysis tools and workflow frameworks."),(0,a.kt)("p",null,'To register your device, navigate to "Account" > ',(0,a.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org/account/my-nodes"},'"My Nodes"'),'. Enter your device ID (which you will obtain through the hardware boot-strapping process) then click "Get Keys" button. A "registration zip" file will be generated and available for download. Then follow the instructions for ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/node-platforms"},"your device")," to load the registration keys."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Figure 1: Registering my devices",src:r(1569).Z,width:"2372",height:"1222"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You may register as many times as you want. But note that each registration key has a short expiration time and should be used shortly after generation.")),(0,a.kt)("p",null,"Now you are ready to develop your edge apps and/or introduce new sensors to the Waggle platform. Head over to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/about/overview"},"overview")," to find the instructions you need for development."))}d.isMDXComponent=!0},1569:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/sage-my-devices-6fdfb03880191cee229d402cfd389665.png"}}]);