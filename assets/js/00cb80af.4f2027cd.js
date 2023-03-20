"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(g,s(s({ref:t},u),{},{components:r})):o.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_label:"sesctl",sidebar_position:2},s="sesctl: a tool to schedule jobs in Waggle edge computing",l={unversionedId:"reference-guides/sesctl",id:"reference-guides/sesctl",title:"sesctl: a tool to schedule jobs in Waggle edge computing",description:"The tool sesctl is a command-line tool that communicates with an Edge scheduler in the cloud to manage user jobs. Users can create, edit, submit, suspend, and remove jobs via the tool.",source:"@site/docs/reference-guides/sesctl.md",sourceDirName:"reference-guides",slug:"/reference-guides/sesctl",permalink:"/waggle-docs/docs/reference-guides/sesctl",draft:!1,editUrl:"https://github.com/waggle-sensor/waggle-docs/edit/main/docs/reference-guides/sesctl.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"sesctl",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"pluginctl",permalink:"/waggle-docs/docs/reference-guides/pluginctl"},next:{title:"Contact us",permalink:"/waggle-docs/docs/contact-us"}},i={},c=[{value:"Installation",id:"installation",level:2},{value:"Submit a job",id:"submit-a-job",level:2},{value:"For more tutorials",id:"for-more-tutorials",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sesctl-a-tool-to-schedule-jobs-in-waggle-edge-computing"},"sesctl: a tool to schedule jobs in Waggle edge computing"),(0,n.kt)("p",null,"The tool ",(0,n.kt)("inlineCode",{parentName:"p"},"sesctl")," is a command-line tool that communicates with an ",(0,n.kt)("a",{parentName:"p",href:"/waggle-docs/docs/about/architecture#edge-scheduler-es"},"Edge scheduler")," in the cloud to manage user jobs. Users can create, edit, submit, suspend, and remove jobs via the tool. "),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"The tool can be downloaded from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/edge-scheduler/releases"},"edge scheduler repository")," and be run on person's desktop or laptop."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please make sure to download the correct version of the tool based on the system architecture. For example, if you run it on a Mac download ",(0,n.kt)("inlineCode",{parentName:"p"},"sesctl-darwin-amd64"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x sesctl-<system>-<arch>\nln sesctl-<system>-<arch> sesctl\nsesctl\n")),(0,n.kt)("h2",{id:"submit-a-job"},"Submit a job"),(0,n.kt)("p",null,"You can follow the ",(0,n.kt)("a",{parentName:"p",href:"/waggle-docs/docs/tutorials/schedule-jobs"},"tutorial")," to submit an example job to understand how to design your own job."),(0,n.kt)("h2",{id:"for-more-tutorials"},"For more tutorials"),(0,n.kt)("p",null,"The in-depth tutorials on the functionalities that ",(0,n.kt)("inlineCode",{parentName:"p"},"sesctl")," offers can be found in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/edge-scheduler/tree/main/docs/sesctl#readme"},"README"),"."))}p.isMDXComponent=!0}}]);