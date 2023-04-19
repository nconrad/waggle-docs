"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_label:"sesctl",sidebar_position:2},a="sesctl: a tool to schedule jobs in Waggle edge computing",i={unversionedId:"reference-guides/sesctl",id:"reference-guides/sesctl",title:"sesctl: a tool to schedule jobs in Waggle edge computing",description:"The tool sesctl is a command-line tool that communicates with an Edge scheduler in the cloud to manage user jobs. Users can create, edit, submit, suspend, and remove jobs via the tool.",source:"@site/docs/reference-guides/sesctl.md",sourceDirName:"reference-guides",slug:"/reference-guides/sesctl",permalink:"/sage-website/docs/reference-guides/sesctl",draft:!1,editUrl:"https://github.com/waggle-sensor/sage-website/edit/main/docs/reference-guides/sesctl.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"sesctl",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"pluginctl",permalink:"/sage-website/docs/reference-guides/pluginctl"},next:{title:"Contact us",permalink:"/sage-website/docs/contact-us"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Submit a job",id:"submit-a-job",level:2},{value:"For more tutorials",id:"for-more-tutorials",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sesctl-a-tool-to-schedule-jobs-in-waggle-edge-computing"},"sesctl: a tool to schedule jobs in Waggle edge computing"),(0,o.kt)("p",null,"The tool ",(0,o.kt)("inlineCode",{parentName:"p"},"sesctl")," is a command-line tool that communicates with an ",(0,o.kt)("a",{parentName:"p",href:"/sage-website/docs/about/architecture#edge-scheduler-es"},"Edge scheduler")," in the cloud to manage user jobs. Users can create, edit, submit, suspend, and remove jobs via the tool. "),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The tool can be downloaded from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/edge-scheduler/releases"},"edge scheduler repository")," and be run on person's desktop or laptop."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please make sure to download the correct version of the tool based on the system architecture. For example, if you run it on a Mac download ",(0,o.kt)("inlineCode",{parentName:"p"},"sesctl-darwin-amd64"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x sesctl-<system>-<arch>\nln sesctl-<system>-<arch> sesctl\nsesctl\n")),(0,o.kt)("h2",{id:"submit-a-job"},"Submit a job"),(0,o.kt)("p",null,"You can follow the ",(0,o.kt)("a",{parentName:"p",href:"/sage-website/docs/tutorials/schedule-jobs"},"tutorial")," to submit an example job to understand how to design your own job."),(0,o.kt)("h2",{id:"for-more-tutorials"},"For more tutorials"),(0,o.kt)("p",null,"The in-depth tutorials on the functionalities that ",(0,o.kt)("inlineCode",{parentName:"p"},"sesctl")," offers can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/edge-scheduler/tree/main/docs/sesctl#readme"},"README"),"."))}p.isMDXComponent=!0}}]);