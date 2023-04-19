"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1960],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),g=o,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},i="Part 4: Publishing to ECR",p={unversionedId:"tutorials/edge-apps/publishing-to-ecr",id:"tutorials/edge-apps/publishing-to-ecr",title:"Part 4: Publishing to ECR",description:"Now that we've finished preparing our code and testing it, we're almost ready to publish it to the Edge Code Repository!",source:"@site/docs/tutorials/edge-apps/4-publishing-to-ecr.md",sourceDirName:"tutorials/edge-apps",slug:"/tutorials/edge-apps/publishing-to-ecr",permalink:"/waggle-docs/docs/tutorials/edge-apps/publishing-to-ecr",draft:!1,editUrl:"https://github.com/waggle-sensor/sage-website/edit/main/docs/tutorials/edge-apps/4-publishing-to-ecr.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Part 3: Testing an edge app",permalink:"/waggle-docs/docs/tutorials/edge-apps/testing-an-edge-app"},next:{title:"Submit your job",permalink:"/waggle-docs/docs/tutorials/schedule-jobs"}},l={},s=[{value:"Preparing our app",id:"preparing-our-app",level:2},{value:"Publishing our app",id:"publishing-our-app",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"part-4-publishing-to-ecr"},"Part 4: Publishing to ECR"),(0,o.kt)("p",null,"Now that we've finished ",(0,o.kt)("a",{parentName:"p",href:"creating-an-edge-app"},"preparing our code")," and ",(0,o.kt)("a",{parentName:"p",href:"testing-an-edge-app"},"testing it"),", we're almost ready to publish it to the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"Edge Code Repository"),"!"),(0,o.kt)("h2",{id:"preparing-our-app"},"Preparing our app"),(0,o.kt)("p",null,"Before publishing an app to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/about/architecture#edge-code-repository-ecr"},"Edge Code Repository"),", we need to add a few packaging items to it."),(0,o.kt)("p",null,"First, add the following ",(0,o.kt)("inlineCode",{parentName:"p"},"sage.yaml")," file to your repo and fill in your own app details:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: ""\ndescription: ""\nkeywords: ""\nauthors: "Your Name <your.email@somewhere.org>"\ncollaborators: ""\nfunding: ""\nlicense: ""\nhomepage: "https://github.com/waggle-sensor/edge-app-template"\nsource:\n  architectures:\n    - "linux/amd64"\n    - "linux/arm64"\n')),(0,o.kt)("p",null,"Next, create an ",(0,o.kt)("inlineCode",{parentName:"p"},"ecr-meta")," directory in your repo and populate it with the following text and media:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ecr-science-description.md")," - Markdown with in depth description of the science being done here (1 page of text)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ecr-icon.jpg")," - An icon for the project/work 512x512px."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ecr-science-image.jpg")," - A science image for the project with a minimum size of 1920x1080px.")),(0,o.kt)("p",null,"Once we've commited and pushed those files to your repo, we're ready to publish our app!"),(0,o.kt)("h2",{id:"publishing-our-app"},"Publishing our app"),(0,o.kt)("p",null,"Please visit the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"Edge Code Repository")," and complete the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Go to "Sign In" and follow the instructions.'),(0,o.kt)("li",{parentName:"ol"},'Go to "My Apps".'),(0,o.kt)("li",{parentName:"ol"},'Go to "Create app" and follow the instructions.')),(0,o.kt)("p",null,'If everything is successful, your plugin will appeared and be marked as "Built".'),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Congratulation! You've successfully written, tested and published an app to ECR!"),(0,o.kt)("p",null,"We encourage you to check out other apps in the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.sagecontinuum.org"},"ECR")," and explore additional functionality provided by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/pywaggle"},"pywaggle"),"."))}d.isMDXComponent=!0}}]);