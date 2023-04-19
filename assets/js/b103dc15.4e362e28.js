"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(n),g=o,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=g;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"pluginctl",sidebar_position:1},l="pluginctl: a tool to develop and test plugins on a node",a={unversionedId:"reference-guides/pluginctl",id:"reference-guides/pluginctl",title:"pluginctl: a tool to develop and test plugins on a node",description:"We developed the tool pluginctl to help end users develop and test their edge application (i.e., plugin) on a node before registering the plugin in Edge code repository. The tool helps on simplifying the process of testing the edge code and making changes as needed for development, by buildig the code into a container, running the container inside the node, and checking the result from the container.",source:"@site/docs/reference-guides/pluginctl.md",sourceDirName:"reference-guides",slug:"/reference-guides/pluginctl",permalink:"/waggle-docs/docs/reference-guides/pluginctl",draft:!1,editUrl:"https://github.com/waggle-sensor/waggle-docs/edit/main/docs/reference-guides/pluginctl.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"pluginctl",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Reference guides",permalink:"/waggle-docs/docs/category/reference-guides"},next:{title:"sesctl",permalink:"/waggle-docs/docs/reference-guides/sesctl"}},c={},s=[],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pluginctl-a-tool-to-develop-and-test-plugins-on-a-node"},"pluginctl: a tool to develop and test plugins on a node"),(0,o.kt)("p",null,"We developed the tool ",(0,o.kt)("inlineCode",{parentName:"p"},"pluginctl")," to help end users develop and test their edge application (i.e., plugin) on a node before registering the plugin in ",(0,o.kt)("a",{parentName:"p",href:"/waggle-docs/docs/about/architecture#edge-code-repository-ecr"},"Edge code repository"),". The tool helps on simplifying the process of testing the edge code and making changes as needed for development, by buildig the code into a container, running the container inside the node, and checking the result from the container."),(0,o.kt)("p",null,"All of Waggle nodes have the tool already installed. For plugin developers who have access to nodes, they can simply type the following to start with once they are logged into a node,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pluginctl\n")),(0,o.kt)("p",null,"The in-depth tutorials on the functionalities that ",(0,o.kt)("inlineCode",{parentName:"p"},"pluginctl")," offers can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/edge-scheduler/tree/main/docs/pluginctl#readme"},"README"),"."))}u.isMDXComponent=!0}}]);