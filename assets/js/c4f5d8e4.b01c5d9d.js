"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4195],{5682:(e,t,a)=>{a.r(t),a.d(t,{default:()=>V});var l=a(7294),n=a(2263),r=a(5742),c=a(7329),s=a(3727),i=a(66),o=a(3151),m=a(9937),d=a(4267);i.ZP.div.withConfig({displayName:"Layout__Item",componentId:"sc-1098mz9-0"})(["position:relative;margin:20px 1px;padding:10px 15px;border:1px solid #ddd;border-radius:5px;box-shadow:0px 0px 1px 1px #f8f8f8;color:initial;:hover{text-decoration:none;border:1px solid rgb(28,140,201);}.actions{position:absolute;display:none;background:#fff;bottom:.5rem;right:.6rem;}:hover .actions{display:block;}"]),i.ZP.h2.withConfig({displayName:"Layout__Title",componentId:"sc-1098mz9-1"})(["margin:0;"]),i.ZP.div.withConfig({displayName:"Layout__Top",componentId:"sc-1098mz9-2"})(["position:sticky;top:",";z-index:100;"],(e=>e.top||"60px")),i.ZP.div.withConfig({displayName:"Layout__Controls",componentId:"sc-1098mz9-3"})(["background-color:#fff;padding:10px 0;border-bottom:1px solid #ddd;.checkboxes{margin-top:17px;}"]),i.ZP.div.withConfig({displayName:"Layout__Sidebar",componentId:"sc-1098mz9-4"})(["position:sticky;top:60px;height:calc(100vh);padding-top:10px;width:",";min-width:",";border-right:1px solid #f1f1f1;background:#f8f8f8;overflow-y:scroll;.MuiInputBase-root,.MuiButtonBase-root:not(.Mui-selected,.MuiCheckbox-root){background:#fff;}"],(e=>e.width||"250px"),(e=>e.width||"250px")),i.ZP.h2.withConfig({displayName:"Layout__FilterTitle",componentId:"sc-1098mz9-5"})(["margin-left:20px;"]);const p=(0,i.vJ)(["body{background:rgb(231,235,240);}"]),u=e=>{const{children:t,noPad:a,...n}=e;return l.createElement(m.Z,n,l.createElement(d.Z,{style:a?{padding:0}:{paddingBottom:20}},t))};var g=a(7462),h=a(3746);function f(e){const{title:t,code:a,src:n,showUrlBar:r,language:c="python"}=e;return l.createElement(E,null,l.createElement("div",{className:"code-window shadow-2xl"},l.createElement("div",{className:"bg-gray-200 dark:bg-gray-800 flex flex-row justify-start items-center p-2 rounded-t-md gap-2"},l.createElement("div",{className:"flex flex-row left-2 top-2"},l.createElement("div",{className:"bg-red-500 h-3 mr-2 rounded-full w-3"},l.createElement("div",{id:"hmrUnsaved",className:"bg-gray-900 h-1 m-1 rounded-full w-1"})),l.createElement("div",{className:"bg-yellow-500 h-3 mr-2 rounded-full w-3"}),l.createElement("div",{className:"bg-green-500 h-3 rounded-full w-3"})),!r&&l.createElement("div",{className:"lg:ml-0 md:ml-5 ml-0 text-center text-gray-500 text-xs"},t),r&&l.createElement("div",{className:"flex grow bg-slate-100 p-1 px-4 rounded-xl lg:ml-0 md:ml-5 ml-0 text-gray-500 text-xs"},t),r&&l.createElement("div",{className:"flex flex-col"},l.createElement("div",{className:"w-[18px] h-[3px] my-[1px] bg-[#aaa]"}),l.createElement("div",{className:"w-[18px] h-[3px] my-[1px] bg-[#aaa]"}),l.createElement("div",{className:"w-[18px] h-[3px] my-[1px] bg-[#aaa]"}))),a&&l.createElement(h.ZP,(0,g.Z)({},h.lG,{language:c,code:a}),(e=>{let{className:t,style:a,tokens:n,getLineProps:r,getTokenProps:c}=e;return l.createElement("pre",{className:t,style:a},n.map(((e,t)=>l.createElement("div",r({line:e,key:t}),e.map(((e,t)=>l.createElement("span",c({token:e,key:t}))))))))})),n&&l.createElement("div",{className:"rounded-b-xl"},l.createElement("img",{src:n}))))}const E=i.ZP.div.withConfig({displayName:"CodeWindow__Root",componentId:"sc-1dyoqts-0"})([".code-window{.prism-code{border-radius:0px 0px 0.75rem 0.75rem;}}"]);function v(){const[e,t]=(0,l.useState)(),{siteConfig:a}=(0,n.Z)();return(0,l.useEffect)((()=>{const{url:e,baseUrl:l}=a;fetch(e+l+"blog").then((e=>e.text())).then((a=>{const l=(new DOMParser).parseFromString(a,"text/html").getElementsByTagName("article");let n;try{n=[...l].map((e=>{const t=e.querySelectorAll("[itemprop=url")[0].href;return{headline:e.querySelectorAll("[itemprop=headline")[0].innerText,articleBody:e.querySelectorAll("[itemprop=articleBody")[0].innerText,url:t.slice(t.indexOf("/",8))}}))}catch(r){console.log(`Could not parse ${e}`,r)}t(n)}))}),[]),l.createElement(x,null,(e||[]).map((e=>{const{headline:t,articleBody:a,url:n}=e;return l.createElement("div",{key:t},l.createElement("h3",null,l.createElement(s.rU,{to:n},t)),l.createElement("p",null,a," ",l.createElement(s.rU,{to:n},"Read more...")))})))}const x=i.ZP.div.withConfig({displayName:"BlogPreview__Root",componentId:"sc-tfotpg-0"})([""]);function b(e){const[t,a]=(0,l.useState)(""),[n,r]=(0,l.useState)(0),[c,s]=(0,l.useState)(0),[i,o]=(0,l.useState)(e.texts[c]||"");return(0,l.useEffect)((()=>{if(n>=i.length)return;const e=setTimeout((()=>{a(`${t}${i[n]}`),r(n+1)}),25);return()=>clearTimeout(e)}),[n,i,t]),(0,l.useEffect)((()=>{const t=function t(){return setTimeout((()=>{s((t=>(t+1)%e.texts.length)),t()}),3e3)}();return()=>clearTimeout(t)}),[]),(0,l.useEffect)((()=>{r(0),a(""),o(e.texts[c])}),[c]),l.createElement("span",{className:"text-emerald-200"},t||l.createElement(l.Fragment,null,"\xa0"))}var w,N=a(3946),y=a(5449),k=a(5084);function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},Z.apply(this,arguments)}const z=e=>{let{title:t,titleId:a,...n}=e;return l.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1346.1 414.3",xmlSpace:"preserve","aria-labelledby":a},n),t?l.createElement("title",{id:a},t):null,w||(w=l.createElement("g",{fill:"#e5eae9"},l.createElement("path",{d:"M490.8 302.6c0 31.6 18 44.8 38.4 44.8 12.7 0 27.9-5.2 27.9-5.2l2.3 4.3c-5.5 5.4-20.7 17-39.8 17-25.9 0-49.1-19.3-49.1-54.8 0-32.3 22.3-55.7 50-55.7 21.6 0 38.4 12.9 38.4 37.5 0 6.4-1.1 12-1.1 12h-67zm33.4-8.6c10.9-.5 14.8-2.5 14.8-13.6 0-9.5-6.8-16.8-21.4-16.8-15.2 0-26.8 13.4-26.8 31.6l33.4-1.2zM329.7 344.7l4.4 5.5 14.7 5.1-.4 5.8h-51.6v-5.9l15-5.7v-51.6c0-20.9-4.1-28-16.4-28v-5.5l33.2-12h1.8s-.7 15.7-.7 32v60.3zM403.6 255.8v5.9l-15.2 5 25.2 68.9 26.1-68.4-15.9-5.5v-5.9h40.4v6.4c-5.9 0-13.2 3-21.1 22.3l-28.8 77.8h-10.9l-31.7-83.4c-5-12-10.7-16.6-18-16.6v-6.4h49.9zM679.2 359.4c-1.6-.7-5.7-2.9-5.9-7.7l-1.4-21.6h10c2.7 14.8 12.7 24.3 25.7 24.3 13.2 0 18.4-6.8 18.4-15.9 0-8.6-7-13.2-15.7-17.7l-11.6-5.9c-16.6-8.4-24.8-15.2-24.8-31.6 0-20.5 14.8-30.2 37.7-30.2 16.1 0 28.6 6.1 28.6 6.1l-3 26.6H728c0-16.6-6.8-22.7-20.7-22.7-9.3 0-18 3.6-18 12.7 0 7.3 3 10.5 20.9 19.8l10.2 5.2c18.6 9.5 23.9 17.5 23.9 33 0 18.6-18.6 29.8-36.8 29.8-11.5-.1-21.7-1.4-28.3-4.2zM267.6 350.2l-4.3-5.5.2-57.5c0-26.6-17.3-34.1-35-34.1-15 0-36.1 17.5-36.1 17.5 0-9.5.4-18.2.4-18.2H191l-33.2 12v5.5c12.7 0 16.1 11.4 16.1 31.8v47.7l-15 5.7v5.9h52.2l.4-5.8-14.7-5.1-4.3-5.5v-65.2s8-10.7 22.3-10.7c14.8 0 30 5.2 30 30.5l-.7 50.4-14.5 5.5v5.9h52.2l.4-5.8-14.6-5zM655 254.5c-.1 0-4-1.4-11.4-1.4-15.9 0-32.5 25-32.5 25 0-13.9.5-25.7.5-25.7h-1.8l-32.5 12v5.5c12.3 0 16.1 11.1 16.1 30v49.5l-15 5.7v5.9h52.2v-5.8l-14.7-5.1-4.3-5.5V296c0-15 11.8-23.4 24.5-23.4 2.6 0 5.3.6 7.6 1.4l3.6 5.3 4.4.4 3.3-25.2zM799.3 344.7l4.3 5.5 14.7 5.1-.4 5.8h-51.6v-5.9l15-5.7v-51.6c0-20.9-4.1-28-16.4-28v-5.5l33.2-12h1.8s-.7 15.7-.7 32l.1 60.3zM132.1 310.5c0 39.3-28 52.3-54.8 52.3-40.3 0-56.8-18.9-56.8-53.9v-66.2c0-19.3-5.2-23.6-20.5-24.3v-7.5h62.1v6.8L41 224.3v74.6c0 45 18.2 51.6 38.9 51.6 21.6 0 38-10 38-46.6v-79.6l-20.5-6.2v-7.2H152v8.1l-15.5 2.5-4.3 5.4v29.2l-.1 54.4zM859 256.7v-27l-13.2 2.3-5.7 25.7-18.6 1.8v8.9c10.2 0 18.6.9 18.6 10.7 0 9.8-.9 40.5-.9 52.7 0 23.2 8.9 31.8 23.6 31.8 12.7 0 23.2-5.2 32.7-12.9l-2.5-5.2s-6.4 4.1-15.9 4.1c-10.2 0-19.5-5.7-19.3-19.8l.9-59.5h51c1.6 2.3 3.1 5.1 4.6 8.6l30.4 82.3c-5.4 17.4-18.2 30.7-31.4 31.6-11.4.8-17.5-.7-17.5-.7l2.7 22.3c27.3 1.6 45.1-18.9 59.9-57.5l26.5-72.3c7.3-19.3 15.7-22.3 21.6-22.3v-6.4h-42.3v5.9l15.9 5.5-23.9 68.4-26.1-68.9 15.2-5v-5l-86.3-.1zM320.3 235c-2.6 0-14.2-12.8-14.2-15.3 0-2.4 11.4-15.5 14.2-15.5 3 0 14.2 13.1 14.2 15.5 0 2.3-11.6 15.3-14.2 15.3zM789.9 235c-2.6 0-14.2-12.8-14.2-15.3 0-2.4 11.4-15.5 14.2-15.5 3 0 14.2 13.1 14.2 15.5 0 2.3-11.6 15.3-14.2 15.3zM5.2 11.2v6l15 16.8v115.5L0 155.2v6.7h54.8v-6.8l-17.3-4.6-4.4-5.4V48.8l96 114.3h8.5V25.7l20.3-6.1v-7.2h-55.6v8.1l17.7 4.4 4.3 5.4v91.3l-.1-.1h-1.1L29.9 11.2zM213.8 164.4c-27.1 0-53.1-17.4-53.1-54.4 0-36.8 27.5-55.3 53.1-55.3 26.6 0 53.5 16.7 53.5 53.5 0 35.4-28.4 56.2-53.5 56.2zm32.5-53.1c0-25.3-13.8-46.8-35.5-46.8-19.4 0-29.1 16.9-29.1 42.2 0 25.3 12.2 47.4 35 47.4 19.5.2 29.6-17.5 29.6-42.8zM548.9 100.5c0-25.3-14.2-30.3-30.7-30.3-14 0-23 10.4-23 10.4v65l4.3 5.4 14.6 5.1v5.7h-52.6v-5.9l14.9-5.6V41.4c0-19.7-5-25.1-15.8-25.1v-5.2L494.1 0h2.3s-1.1 23.3-1.1 40.7v31.4s21.7-17.4 36.6-17.4c18.5 0 35.7 7.7 35.7 35v56l4.3 5.4 14.6 5.1v5.7h-52.6V156l14.5-5.5.5-50zM768.3 103.9c0 31.4 17.8 44.5 38.2 44.5 12.6 0 27.8-5.2 27.8-5.2l2.3 4.3c-5.4 5.4-20.5 16.9-39.5 16.9-25.7 0-48.8-19.2-48.8-54.4 0-32.1 22.1-55.3 49.7-55.3 21.5 0 38.2 12.9 38.2 37.3 0 6.3-1.1 12-1.1 12h-66.8zm33.2-8.6c10.8-.5 14.7-2.5 14.7-13.6 0-9.5-6.8-16.7-21.2-16.7-15.1 0-26.6 13.3-26.6 31.4l33.1-1.1zM863.8 160.3c-1.6-.7-5.6-2.9-5.9-7.7l-1.4-21.5h9.9c2.7 14.7 12.6 24.2 25.5 24.2 13.1 0 18.3-6.8 18.3-15.8 0-8.6-7-13.1-15.6-17.6l-11.5-5.9c-16.5-8.3-24.6-15.1-24.6-31.4 0-20.3 14.7-30 37.5-30 16 0 28.5 6.1 28.5 6.1l-2.9 26.4h-9.3c0-16.5-6.8-22.6-20.6-22.6-9.3 0-17.8 3.6-17.8 12.6 0 7.2 2.9 10.4 20.8 19.7l10.2 5.2c18.5 9.5 23.7 17.4 23.7 32.7 0 18.5-18.5 29.6-36.6 29.6-11.4.1-21.6-1.2-28.2-4zM1047.4 103.9c0 31.4 17.8 44.5 38.2 44.5 12.6 0 27.8-5.2 27.8-5.2l2.3 4.3c-5.4 5.4-20.5 16.9-39.5 16.9-25.7 0-48.8-19.2-48.8-54.4 0-32.1 22.1-55.3 49.7-55.3 21.5 0 38.2 12.9 38.2 37.3 0 6.3-1.1 12-1.1 12h-66.8zm33.2-8.6c10.8-.5 14.7-2.5 14.7-13.6 0-9.5-6.8-16.7-21.2-16.7-15.1 0-26.6 13.3-26.6 31.4l33.1-1.1zM1331.5 151.1l-4.3-5.4.2-57.2c0-26.4-17.2-33.9-34.8-33.9-14.9 0-35.9 17.4-35.9 17.4 0-9.5.5-18.1.5-18.1h-1.8l-33 12v5.4c12.6 0 16 11.3 16 31.6v47.4l-14.9 5.6v5.9h51.9l.4-5.7-14.6-5.1-4.3-5.4V80.8s7.9-10.6 22.1-10.6c14.7 0 29.8 5.2 29.8 30.3l-.7 50.1-14.4 5.4v5.9h51.9l.4-5.7-14.5-5.1zM686.6 163.1 662.4 96l-27.7 67.1h-9.5L598 80.2c-3.8-10.4-6-16.5-13.3-16.5v-6.3h44.6v6.4l-13.6 4.5L636 137l17.9-43 4.1-10.9-6.1-17.5-7.7-1.9v-6.3h43.1v6.8l-13.6 4.1 22.9 68.7 23.8-68.2-15.4-5.6v-5.9h40.4v6.3c-9.3 1.1-13.8 3.6-21 22.1l-27.2 77.2h-10.6zM446 146.4s-6.3 4.1-15.8 4.1c-10.2 0-19.4-5.6-19.2-19.7l.9-59.2H445.6l.5-3.7 2.3-18.6-4.3-.8-3.2 7.1-1.8 1.6-26.6 1h-.3V31.4l-13.1 2.3-5.6 25.5-18.6 1.8v8.8c10.2 0 18.5.9 18.5 10.6s-.9 40.2-.9 52.4c0 23 8.8 31.6 23.5 31.6 12.6 0 23-5.2 32.5-12.9l-2.5-5.1zM1014 146.4s-6.3 4.1-15.8 4.1c-10.2 0-19.4-5.6-19.2-19.7l.9-59.2h33.5l.5-3.7 2.3-18.6-4.3-.8-3.2 7.1-1.8 1.6-26.6 1V31.4L967 33.6l-5.6 25.5-18.6 1.9v8.8c10.2 0 18.5.9 18.5 10.6s-.9 40.2-.9 52.4c0 23 8.8 31.6 23.5 31.6 12.6 0 23-5.2 32.5-12.9l-2.4-5.1zM359 56c-.1 0-3.9-1.4-11.3-1.4-15.8 0-32.3 24.8-32.3 24.8 0-13.8.5-25.5.5-25.5H314l-32.3 12v5.4c12.2 0 16 11.1 16 29.8v49.2l-14.9 5.6v5.9h51.9v-5.7l-14.6-5.1-4.3-5.4V97.3c0-14.9 11.7-23.3 24.4-23.3 2.6 0 5.2.6 7.5 1.4l3.5 5.2 4.3.4 3.5-25zM1209 56c-.1 0-3.9-1.4-11.3-1.4-15.8 0-32.3 24.8-32.3 24.8 0-13.8.5-25.5.5-25.5h-1.8l-32.3 12v5.4c12.2 0 16 11.1 16 29.8v49.2l-14.9 5.6v5.9h51.9v-5.7l-14.6-5.1-4.3-5.4V97.3c0-14.9 11.7-23.3 24.4-23.3 2.6 0 5.2.6 7.5 1.4l3.5 5.2 4.4.4 3.3-25z"}))))},_=a.p+"assets/images/anl-logo-a6533434469e186b9218ed2addfcac6f.png",M={docs:"/docs",portal:"https://portal.sagecontinuum.org",waggleOrg:"https://github.com/waggle-sensor"},{portal:C}=M;function P(){return l.createElement(S,{className:"bg-neutral-900"},l.createElement("div",{className:"section"},l.createElement("div",{className:"flex flex-col md:flex-row justify-between pt-8 pb-16 text-neutral-200"},l.createElement("div",null,l.createElement("div",{className:"flex items-center text-neutral-400"},l.createElement("img",{src:"https://www.nsf.gov/policies/images/NSF_Official_logo.svg",className:"w-[100px] xmd:w-[150px]"}),l.createElement("div",null,"Sage is supported by",l.createElement("br",null)," NSF Mid-Scale RI-1 grant #1935984"))),l.createElement("div",{className:"mt-12 md:m-0"},l.createElement("h4",{className:"text-neutral-200"},"About"),l.createElement("ul",null,l.createElement("li",null,l.createElement(s.rU,{to:"about"},"Science")),l.createElement("li",null,l.createElement(s.rU,{to:"blog"},"News")),l.createElement("li",null,l.createElement(s.rU,{to:"about"},"Publications")),l.createElement("li",null,l.createElement(s.rU,{to:"docs"},"Docs")))),l.createElement("div",null,l.createElement("h4",{className:"text-neutral-200"},"Browse"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:`${C}/apps`},"Apps")),l.createElement("li",null,l.createElement("a",{href:`${C}/data`},"Data")),l.createElement("li",null,l.createElement("a",{href:`${C}/query-browser`},"Query Browser")),l.createElement("li",null,l.createElement("a",{href:`${C}/nodes`},"Nodes")))),l.createElement("div",null,l.createElement("h4",{className:"text-neutral-200"},"Contact"),l.createElement("ul",null,l.createElement("li",null,l.createElement(s.rU,{to:"docs/contact-us"},"Contact Us"))),l.createElement("div",{className:"flex"},l.createElement(N.Z,{href:"https://github.com/waggle-sensor",target:"_blank"},l.createElement(y.Z,{className:"text-neutral-200"})),l.createElement(N.Z,{href:"https://twitter.com/sagecontinuum",target:"_blank"},l.createElement(k.Z,{className:"text-neutral-200"}))))),l.createElement("div",{className:"flex items-center justify-between text-neutral-400"},l.createElement("div",{className:"mx-2 mb-2"},"Copyright \xa9 ",(new Date).getFullYear()," Sage"),l.createElement("div",{className:"flex gap-6 justify-end"},l.createElement("a",{href:"https://naise.northwestern.edu"},l.createElement("span",null,l.createElement(z,{className:"h-[45px]"}))),l.createElement("a",{href:"https://www.anl.gov"},l.createElement("img",{src:_,className:"h-[45px] pb-1"}))))))}const S=i.ZP.footer.withConfig({displayName:"Footer__Root",componentId:"sc-ilxphg-0"})(["ul{padding:0;list-style:none;a{color:#999999;}}"]);var j=a(8276);const{docs:T,portal:A,waggleOrg:I}=M,U='import sage_data_client\n\ndf = sage_data_client.query(\n    start="2023-02-24T01:15:30.550Z",\n    end="2023-02-24T02:15:30.550Z",\n    filter={\n        "plugin": ".*plugin-iio.*"\n    }\n)\n',q='curl -H \'Content-Type: application/json\' \\\nhttps://data.sagecontinuum.org/api/v1/query -d \'\n{\n    "start": "-10s",\n    "filter": {\n        "sensor": "bme680"\n    }\n}\n\'\n',B="pip3 install cookiecutter\ncookiecutter gh:waggle-sensor/cookiecutter-sage-app\n\n...\nname [My Amazing App]: image_classification\nrepo: https://github.com/geeklair/img_class.git\nauthor [My name]: geeklair\nversion [0.1.0]: 0.2.0\nSelect template:\n1 - vision\n2 - usbserial_sensor\n3 - minimal\nChoose from 1, 2, 3 [1]: 1\n",L="https://sagecontinuum.org/wp-content/uploads/2019/11/LofT-Wrigley-Jose-Osorio-Chicago-Tribune-.jpg",$=["Climate Research","Wildfire Detection","Health & Saftey","Weather Prediction","Scientific Research","Discovery"];function D(){const[e,t]=(0,l.useState)("client");return l.createElement(R,null,l.createElement(H,{className:"flex flex-col md:flex-row justify-between items-center"},l.createElement("div",{className:"text-[#f9f9f9] text-4xl md:text-6xl md:mx-10 self-start md:self-center"},"AI @ the Edge",l.createElement("br",null),"for ",l.createElement(b,{texts:$}," ")),l.createElement("div",{className:"flex flex-col md:ml-20 md:mr-40 self-start md:self-center"},l.createElement("h3",{className:"text-slate-300"},"Getting Started"),l.createElement("a",{href:"docs/about/overview",className:"focused-link gap-1"},"Documentation ",l.createElement(o.Z,{className:"shadow"})),l.createElement("a",{href:`${A}/data`,className:"focused-link gap-1"},"Browse Data ",l.createElement(o.Z,null)))),l.createElement("div",{className:"bg-white"},l.createElement("div",{className:"section"},l.createElement("div",{className:"text-[2em] leading-relaxed m-auto pb-12 md:text-center text-purple md:w-1/2"},"A new kind of national-scale cyberinfrastructure to enable AI at the Edge for science."),l.createElement("div",{className:"flex flex-col md:flex-row gap-10"},l.createElement(s.rU,{to:"science",className:"card"},l.createElement("img",{src:L}),l.createElement("h3",null,"Learn"),l.createElement("p",null,"Explore some of the ",l.createElement(s.rU,{to:"science"},"science")," made possible with Sage")),l.createElement("a",{href:`${A}/apps`,className:"card"},l.createElement("img",{src:a(2883).Z}),l.createElement("h3",null,"Contribute"),l.createElement("p",null,"Upload, build, and share ",l.createElement("a",{href:`${A}/apps`},"apps")," for AI at the edge")),l.createElement("a",{className:"card",href:`${A}/jobs`},l.createElement("img",{src:"https://sagecontinuum.org/wp-content/uploads/2019/11/Wagman-v4.jpg"}),l.createElement("h3",null,"Run jobs"),l.createElement("p",null,"Create ",l.createElement("a",{href:`${A}/create-job?tab=editor&start_with_sample=true`},"science goals")," to run apps on nodes.",l.createElement("br",null))),l.createElement("a",{href:`${A}/data`,className:"card"},l.createElement("img",{src:a(539).Z}),l.createElement("h3",null,"Browse"),l.createElement("p",null,"Browse ",l.createElement("a",{href:`${A}/data`},"data")," from sensors and edge apps")),l.createElement(s.rU,{to:"docs/tutorials/accessing-data",className:"card"},l.createElement("img",{src:"https://sagecontinuum.org/wp-content/uploads/2019/11/1820-1024-tweak.jpg"}),l.createElement("h3",null,"Analyze"),l.createElement("p",null,"Use Sage APIs to fetch, analyze, or integrate data."))))),l.createElement("div",{className:"section flex flex-col md:flex-row gap-2"},l.createElement(p,null),l.createElement(u,{className:"match-twitter-card md:w-2/3 h-[600px]"},l.createElement("h2",null,"News"),l.createElement("hr",{className:"mt-8"}),l.createElement("div",{className:"news-list"},l.createElement(v,null))),l.createElement("a",{className:"twitter-timeline md:w-1/3",href:"https://twitter.com/sagecontinuum?ref_src=twsrc%5Etfw","data-height":"600"},"tweets from @sagecontinuum...")),l.createElement("div",{className:"bg-emerald-50 border-solid border-t-2 border-b-4 border-slate-200"},l.createElement("div",{className:"section gap-2"},l.createElement("h2",{className:"text-purple font-bold mb-10"},"Developer Friendly Tools for Research and Analysis"),l.createElement("div",{className:"flex flex-col md:flex-row text-slate-200 gap-10"},l.createElement("div",{className:"sci-items flex flex-col gap-4 md:w-7/12 "},l.createElement("a",{className:"sci-item group",onMouseOver:()=>t("client"),href:"https://pypi.org/project/sage-data-client",target:"_blank"},l.createElement("div",{className:"flex justify-between [&>*]:text-slate-200"},l.createElement("h3",null,"Python Data Client"),l.createElement("div",{className:"hidden group-hover:block"},l.createElement(j.Z,null))),l.createElement("span",{className:"text-slate-200"},"Easily analyze data in Pandas with the Sage Data Client")),l.createElement(s.rU,{className:"sci-item group",onMouseOver:()=>t("api"),to:"docs/tutorials/accessing-data#http-api"},l.createElement("div",{className:"flex justify-between [&>*]:text-slate-200"},l.createElement("h3",null,"HTTP APIs")),l.createElement("span",{className:"text-slate-200"},"Access and update data via web APIs")),l.createElement("a",{className:"sci-item group",onMouseOver:()=>t("ui"),href:`${A}/query-browser`,target:"_blank"},l.createElement("div",{className:"flex justify-between [&>*]:text-slate-200"},l.createElement("h3",null,"Web Tools"),l.createElement("div",{className:"hidden group-hover:block"},l.createElement(j.Z,null))),l.createElement("span",{className:"text-slate-200"},"Navigating job results and data is as easy as a few clicks")),l.createElement("a",{className:"sci-item group",onMouseOver:()=>t("template"),href:"https://github.com/waggle-sensor/cookiecutter-sage-app",target:"_blank"},l.createElement("div",{className:"flex justify-between [&>*]:text-slate-200"},l.createElement("h3",null,"Developer Templates"),l.createElement("div",{className:"hidden group-hover:block"},l.createElement(j.Z,null))),l.createElement("span",{className:"text-slate-200"},"Get started quickly with templates and snippets")),l.createElement("div",{className:"hidden md:flex justify-between mx-5 text-slate-200"},l.createElement(s.rU,{className:"focused-link purple gap-1",to:"docs/tutorials/edge-apps/intro-to-edge-apps"},"Tutorials ",l.createElement(o.Z,null)),l.createElement(s.rU,{className:"focused-link purple gap-1",to:"docs/reference-guides/pluginctl"},"Reference Guides ",l.createElement(o.Z,null)),l.createElement("a",{className:"focused-link purple gap-1",href:`${A}/query-browser`},"Query Browser ",l.createElement(o.Z,null)))),l.createElement("div",{className:"md:w-5/12"},"client"==e&&l.createElement(f,{title:"Python Data Client",code:U}),"api"==e&&l.createElement(f,{title:"Web API",code:q}),l.createElement("div",{className:"ui"==e?"block":"hidden"},l.createElement(f,{title:"portal.sagecontinuum.org",src:a(37).Z,showUrlBar:!0})),"template"==e&&l.createElement(f,{title:"Templates",code:B,lanuage:"bash"}))))),l.createElement("div",{className:"bg-purple"},l.createElement("div",{className:"section items-center gap-2"},l.createElement("h2",{className:"text-slate-200 font-bold mb-10"},"Featured Science"),l.createElement("div",{className:"flex flex-col md:flex-row text-slate-200"},l.createElement("div",{className:"md:w-1/3 hidden md:block mr-5"},l.createElement("img",{src:"https://ecr.sagecontinuum.org/api/meta-files/dariodematties1/avian-diversity-monitoring/0.2.4/ecr-icon.jpg"})),l.createElement("div",{className:"flex flex-col gap-y-4 md:w-2/3 sci-items"},l.createElement("div",{className:"sci-item"},l.createElement("h3",{className:"text-slate-200"},"Optimizing cloud motion estimation on the edge with phase correlation and optical flow"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),l.createElement("div",{className:"sci-item"},l.createElement("h3",{className:"text-slate-200"},"A Self-Supervised Approach for Cloud Image Analysis"),"Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Posuere ac ut consequat semper viverra nam."),l.createElement("div",{className:"sci-item"},l.createElement("h3",{className:"text-slate-200"},"Designing Edge Computing-Capable ML Algorithms to Target ARM Dopler Lidar Processing"),"Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Pretium nibh ipsum consequat nisl vel pretium lectus quam id."),l.createElement("div",{className:"sci-item"},l.createElement("h3",{className:"text-slate-200"},"Prediction of Solar Irradiance and Photovoltaic Solar Energy Based on Cloud Coverage..."),"dipiscing diam donec adipiscing tristique ac turpis egestas integer eget aliquet. Morbi tristique senectus et netus et malesuada fames"),l.createElement("div",{className:"hidden md:flex justify-between mx-5"},l.createElement(s.rU,{to:"publications",className:"focused-link gap-1"},"Publications ",l.createElement(o.Z,{className:"shadow"})),l.createElement(s.rU,{to:"science",className:"focused-link gap-1"},"Science",l.createElement(o.Z,{className:"shadow"})),l.createElement("a",{href:`${A}/apps`,className:"focused-link gap-1"},"Apps ",l.createElement(o.Z,{className:"shadow"}))))))),l.createElement("div",{className:"user-stories section justify-center gap-2"},l.createElement(p,null),l.createElement("div",null,l.createElement("h2",null,"User Stories")),l.createElement("br",null),"[logos with links go here?]"),l.createElement(P,null))}const O="rgb(78, 42, 132)",R=i.ZP.div.withConfig({displayName:"Home__Root",componentId:"sc-7ec7c2-0"})(["a{color:#0080c7;cursor:pointer;text-decoration:none;}a:hover{text-decoration:underline;}.card{color:initial;padding:0;background:#fff;border:1px solid #ddd;img{border-radius:5px 5px 0 0;}p,h3{padding:15px;}border-bottom:3px solid #7a6bac;:hover{text-decoration:none;border:1px solid #7a6bac;border-bottom:3px solid ",";}}a.focused-link{color:#f2f2f2;font-size:2em;display:flex;align-items:center;}a.focused-link.purple{color:",";}.shadow{filter:drop-shadow( 0px 0px 2px #414141);}.bg-purple{background:",";}.text-purple{color:",";}.bg-sage{background:",";}.section{margin:0 auto;padding:4em 0;height:100%;width:90%;}.match-twitter-card{border-radius:12px;.MuiCardContent-root{h2{padding:0 16px;}padding-left:0px;padding-right:0px;.news-list{padding:0 16px;}}}.sci-items{.sci-item{background:#63509c;padding:10px;border-radius:10px;h3{font:bold;}}.sci-item:hover{text-decoration:none;background:#70619f;}.focused-link{font-size:1.5em;}}"],O,O,O,O,"rgb(135, 186, 166)"),H=i.ZP.div.withConfig({displayName:"Home__Banner",componentId:"sc-7ec7c2-1"})(["padding:40px;height:400px;background:radial-gradient(farthest-side ellipse at 0% 0,#87baa6 20%,#382d64);text-shadow:0px 0px 6px #666;"]);function V(){const{siteConfig:e}=(0,n.Z)();return l.createElement(c.Z,{title:`${e.title}`,description:"Sage website"},l.createElement(r.Z,null,l.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"})),l.createElement("main",null,l.createElement(D,null)))}},539:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/browse-35a1779de0b34b9efbe9f9d219587f41.png"},2883:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/create-app-99f93ef560980cdfeb53732d9a2cba9a.png"},37:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/query-browser-148000b196844fc91aa5e6c3ef0b2cf2.png"}}]);