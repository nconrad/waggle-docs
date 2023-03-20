"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4195],{3446:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var l=a(7294),n=a(2263),r=a(5742),s=a(6427),c=a(3727),i=a(186),o=a(3151),m=a(9937),d=a(4267);i.ZP.div`
  position: relative;
  margin: 20px 1px; // 1px left/right for sticky header
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 0px 1px 1px #f8f8f8;
  color: initial;

  :hover {
    text-decoration: none;
    border: 1px solid rgb(28, 140, 201);
  }

  .actions {
    position: absolute;
    display: none;
    background: #fff; // overlay on text if needed
    bottom: .5rem;
    right: .6rem;
  }

  :hover .actions {
    display: block;
  }
`,i.ZP.h2`
  margin: 0;
`,i.ZP.div`
  position: sticky;
  top: ${e=>e.top||"60px"};
  z-index: 100;
`,i.ZP.div`
  background-color: #fff;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  .checkboxes {
    margin-top: 17px;
  }
`,i.ZP.div`
  position: sticky;
  top: 60px;
  height: calc(100vh);
  padding-top: 10px;
  width: ${e=>e.width||"250px"};
  min-width: ${e=>e.width||"250px"};
  border-right: 1px solid #f1f1f1;
  background: #f8f8f8;
  overflow-y: scroll;

  .MuiInputBase-root,
  .MuiButtonBase-root:not(.Mui-selected, .MuiCheckbox-root) {
    background: #fff;
  }
`,i.ZP.h2`
  margin-left: 20px;
`;const u=i.vJ`
  body {
    background: rgb(231, 235, 240);
  }
`,p=e=>{const{children:t,noPad:a,...n}=e;return l.createElement(m.Z,n,l.createElement(d.Z,{style:a?{padding:0}:{paddingBottom:20}},t))};var g=a(7462),f=a(3746);function E(e){const{title:t,code:a,showUrlBar:n}=e;return l.createElement(h,null,l.createElement("div",{className:"code-window"},l.createElement("div",{className:"bg-gray-200 dark:bg-gray-800 flex flex-row justify-center p-2 relative rounded-t-md"},l.createElement("div",{className:"absolute flex flex-row left-2 top-2"},l.createElement("div",{className:"bg-red-500 h-3 mr-2 rounded-full w-3"},l.createElement("div",{id:"hmrUnsaved",className:"bg-gray-900 h-1 m-1 rounded-full w-1"})),l.createElement("div",{className:"bg-yellow-500 h-3 mr-2 rounded-full w-3"}),l.createElement("div",{className:"bg-green-500 h-3 rounded-full w-3"})),n?l.createElement("div",{className:"bg-slate-100 pd-2 lg:ml-0 md:ml-5 ml-0 text-gray-500 text-xs"},t):l.createElement("div",{className:"lg:ml-0 md:ml-5 ml-0 text-gray-500 text-xs"},t)),l.createElement(f.ZP,(0,g.Z)({},f.lG,{language:"python",code:a}),(e=>{let{className:t,style:a,tokens:n,getLineProps:r,getTokenProps:s}=e;return l.createElement("pre",{className:t,style:a},n.map(((e,t)=>l.createElement("div",r({line:e,key:t}),e.map(((e,t)=>l.createElement("span",s({token:e,key:t}))))))))}))))}const h=i.ZP.div`

`;function b(e){const[t,a]=(0,l.useState)();return(0,l.useEffect)((()=>{fetch("/blog/blog-archive-80c.json").then((e=>e.json())).then((e=>a(e.blogPosts)))}),[]),l.createElement(x,null,(t||[]).map((e=>{const{title:t,description:a,permalink:n}=e.metadata;return l.createElement("div",{key:t},l.createElement("h3",null,l.createElement(c.rU,{to:n},t)),l.createElement("p",null,a," ",l.createElement(c.rU,{to:n},"Read more...")))})))}const x=i.ZP.div`

`;var v=a(3946),w=a(5449),N=a(5084);const y={docs:"/docs",portal:"https://portal.sagecontinuum.org",waggleOrg:"https://github.com/waggle-sensor"},{docs:k}=y;function P(){return l.createElement(S,{className:"bg-neutral-900"},l.createElement("div",{className:"section flex flex-col md:flex-row justify-between py-10 text-neutral-200"},l.createElement("div",null,l.createElement("div",{className:"flex muted items-center"},l.createElement("img",{src:"https://www.nsf.gov/policies/images/NSF_Official_logo.svg",width:"150"}),l.createElement("div",null,"SAGE is supported by",l.createElement("br",null)," NSF Mid-Scale RI-1 grant #1935984"))),l.createElement("div",null,l.createElement("h4",{className:"text-neutral-200"},"About"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://sagecontinuum.org/news/",target:"_blank",rel:"noreferrer"},"News")),l.createElement("li",null,l.createElement(c.rU,{to:"/about"},"About")),l.createElement("li",null,l.createElement(c.rU,{to:"/about"},"Docs")))),l.createElement("div",null,l.createElement("h4",{className:"text-neutral-200"},"Browse"),l.createElement("ul",null,l.createElement("li",null,l.createElement(c.rU,{to:"/"},"browse 1")),l.createElement("li",null,l.createElement(c.rU,{to:"/"},"browse 2")),l.createElement("li",null,l.createElement(c.rU,{to:"/"},"foo bar")),l.createElement("li",null,l.createElement(c.rU,{to:"/"},"some link")))),l.createElement("div",null,l.createElement("h4",{className:"text-neutral-200"},"Contact"),l.createElement("ul",null,l.createElement("li",null,l.createElement(c.rU,{to:`${k}/contact-us`},"Contact us"))),l.createElement("div",{className:"flex"},l.createElement(v.Z,{href:"https://github.com/waggle-sensor",target:"_blank"},l.createElement(w.Z,{sx:{color:"#aaa"}})),l.createElement(v.Z,null,l.createElement(N.Z,{sx:{color:"#aaa"}}))))))}const S=i.ZP.footer`
  height: 400px;

  ul {
    padding:0;
    list-style: none;
    a {
      color: #999999;
    }
  }
`,{docs:Z,portal:C,waggleOrg:A}=y,U=["Climate Research","Wildfire Detection","Health & Saftey","Weather Prediction","Scientific Research","Discovery"];function $(){const[e,t]=(0,l.useState)("client");return(0,l.useEffect)((()=>{setTimeout((()=>{twttr.widgets.load()}))}),[]),l.createElement(T,null,l.createElement(q,{className:"flex flex-col md:flex-row justify-between items-center"},l.createElement("div",{className:"text-[#f9f9f9] text-6xl ml-10"},"AI @ the Edge",l.createElement("br",null),"for ",l.createElement(I,{texts:U}," ")),l.createElement("div",{className:"flex flex-col mr-40"},l.createElement("h3",{className:"text-slate-300"},"Getting Started"),l.createElement("a",{href:"/docs/about/overview",className:"focused-link gap-1"},"Documentation ",l.createElement(o.Z,{className:"shadow"})),l.createElement("a",{href:`${C}/data`,className:"focused-link gap-1"},"Browse Data ",l.createElement(o.Z,null)))),l.createElement("div",{className:"bg-white"},l.createElement("div",{className:"section"},l.createElement(_,null,"A new kind of national-scale cyberinfrastructure to enable AI at the Edge for science."),l.createElement("div",{className:"flex flex-col md:flex-row gap-10"},l.createElement("div",{className:"card flex flex-col"},l.createElement("img",{src:"https://sagecontinuum.org/wp-content/uploads/2019/11/LofT-Wrigley-Jose-Osorio-Chicago-Tribune-.jpg"}),l.createElement("h3",null,"Learn"),l.createElement("p",null,"Explore some of the science made possible with Sage")),l.createElement("div",{className:"card"},l.createElement("img",{src:"/img/home/create-app.png"}),l.createElement("h3",null,"Contribute"),l.createElement("p",null,"Upload, build, and share ",l.createElement("a",{href:`${C}/apps`},"apps")," for AI at the edge")),l.createElement("a",{className:"card",href:`${C}/jobs`},l.createElement("img",{src:"https://sagecontinuum.org/wp-content/uploads/2019/11/Wagman-v4.jpg"}),l.createElement("h3",null,"Run jobs"),l.createElement("p",null,"Create ",l.createElement("a",{href:`${C}/create-job?tab=editor&start_with_sample=true`},"science goals")," to run apps on nodes.",l.createElement("br",null))),l.createElement("div",{className:"card"},l.createElement("img",{src:"/img/home/browse.png"}),l.createElement("h3",null,"Browse"),l.createElement("p",null,"Browse ",l.createElement("a",{href:`${C}/data`},"data")," from sensors and edge apps")),l.createElement("div",{className:"card"},l.createElement("img",{src:"https://sagecontinuum.org/wp-content/uploads/2019/11/1820-1024-tweak.jpg"}),l.createElement("h3",null,"Analyze"),l.createElement("p",null,"Use Sage APIs to fetch, analyze, or integrate data."))))),l.createElement("div",{className:"section flex flex-col md:flex-row gap-2"},l.createElement(u,null),l.createElement(p,{className:"match-twitter-card md:w-3/4"},l.createElement("h2",null,"News"),l.createElement("hr",{className:"mt-8"}),l.createElement("div",{className:"news-list"},l.createElement(b,null))),l.createElement("a",{className:"twitter-timeline",href:"https://twitter.com/sagecontinuum?ref_src=twsrc%5Etfw","data-width":"400","data-height":"600"},"Tweets by sagecontinuum")),l.createElement("div",{className:"bg-emerald-50 border-solid border-t-2 border-b-4 border-slate-200"},l.createElement("div",{className:"section gap-2"},l.createElement("h2",{className:"text-purple font-bold mb-10"},"Developer Friendly Tools for Research and Analysis"),l.createElement("div",{className:"flex flex-col md:flex-row text-slate-200 gap-10"},l.createElement("div",{className:"sci-items flex flex-col gap-4 md:w-7/12"},l.createElement("div",{className:"sci-item",onMouseOver:()=>t("client")},l.createElement("h3",{className:"text-slate-200 font-bold"},"Python Data Client"),"Easily analyze data in Pandas with the Sage Data Client"),l.createElement("div",{className:"sci-item",onMouseOver:()=>t("api")},l.createElement("h3",{className:"text-slate-200 font-bold"},"HTTP APIs"),"Access and update data via web APIs"),l.createElement("div",{className:"sci-item",onMouseOver:()=>t("ui")},l.createElement("h3",{className:"text-slate-200 font-bold"},"Web UI tools"),"Navigating job results and data is as easily as a few clicks"),l.createElement("div",{className:"sci-item"},l.createElement("h3",{className:"text-slate-200 font-bold"},"Open Source"),"All code related to Sage Project is publicly accessible available via on Github: ",l.createElement("br",null),l.createElement("a",{href:A,target:"_blank",className:"font-bold"},"Waggle GitHub")," | ",l.createElement("a",{href:"https://github.com/sagecontinuum",target:"_blank",className:"font-bold"},"Sage GitHub")),l.createElement("div",{className:"hidden md:flex justify-between mx-5 text-slate-200"},l.createElement("a",{className:"focused-link purple gap-1",href:Z},"Documentation ",l.createElement(o.Z,null)),l.createElement("a",{className:"focused-link purple gap-1",href:Z},"Examples ",l.createElement(o.Z,null)),l.createElement("a",{className:"focused-link purple gap-1",href:`${C}/query-browser`},"Query Browser ",l.createElement(o.Z,null)))),l.createElement("div",{className:"md:w-5/12"},"client"==e&&l.createElement(E,{title:"Sage Data Client",code:'\nimport sage_data_client\n\ndf = sage_data_client.query(\n    start="2023-02-24T01:15:30.550Z",\n    end="2023-02-24T02:15:30.550Z",\n    filter={\n        "plugin": ".*plugin-iio.*"\n    }\n)\n'}),"api"==e&&l.createElement(E,{title:"Web API",code:'\ncurl -H \'Content-Type: application/json\' \\\nhttps://data.sagecontinuum.org/api/v1/query -d \'\n{\n    "start": "-10s",\n    "filter": {\n        "sensor": "bme680"\n    }\n}\n\'\n'}),"ui"==e&&l.createElement(E,{title:"portal.sagecontinuum.org",code:"",showUrlBar:!0}))))),l.createElement("div",{className:"bg-purple"},l.createElement("div",{className:"section items-center gap-2"},l.createElement("h2",{className:"text-slate-200 font-bold"},"Featured Science"),l.createElement("div",{className:"flex flex-col md:flex-row text-slate-200"},l.createElement("div",{className:"md:w-1/3 hidden md:block"},l.createElement("img",{src:"https://ecr.sagecontinuum.org/api/meta-files/dariodematties1/avian-diversity-monitoring/0.2.4/ecr-icon.jpg"})),l.createElement("div",{className:"flex flex-col gap-4 mx-5 md:w-2/3 sci-items"},l.createElement("div",{className:"sci-item"},l.createElement("h3",{className:"text-slate-200 font-bold"},"Optimizing cloud motion estimation on the edge with phase correlation and optical flow"),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),l.createElement("div",{className:"sci-item"},l.createElement("h3",{className:"text-slate-200 font-bold"},"A Self-Supervised Approach for Cloud Image Analysis"),"Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Posuere ac ut consequat semper viverra nam."),l.createElement("div",{className:"sci-item"},l.createElement("h3",{className:"text-slate-200 font-bold"},"Designing Edge Computing-Capable ML Algorithms to Target ARM Dopler Lidar Processing"),"Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Pretium nibh ipsum consequat nisl vel pretium lectus quam id."),l.createElement("div",{className:"sci-item"},l.createElement("h3",{className:"text-slate-200 font-bold"},"Prediction of Solar Irradiance and Photovoltaic Solar Energy Based on Cloud Coverage..."),"dipiscing diam donec adipiscing tristique ac turpis egestas integer eget aliquet. Morbi tristique senectus et netus et malesuada fames"),l.createElement("div",{className:"hidden md:flex justify-between mx-5"},l.createElement(c.rU,{to:"publications",className:"focused-link gap-1"},"Publications ",l.createElement(o.Z,{className:"shadow"})),l.createElement("a",{href:`${C}/apps`,className:"focused-link gap-1"},"Apps ",l.createElement(o.Z,{className:"shadow"})),l.createElement(c.rU,{to:"science",className:"focused-link gap-1"},"Sage Science",l.createElement(o.Z,{className:"shadow"}))))))),l.createElement("div",{className:"user-stories section justify-center gap-2"},l.createElement(u,null),l.createElement("div",null,l.createElement("h2",null,"User Stories")),l.createElement("br",null),"[logos with links go here?]"),l.createElement(P,null))}const j="rgb(78, 42, 132)",T=i.ZP.div`
  /**
  * Resets; back to MUI Global and Sage Portals CSS
  */

  a {
    color: #0080c7;
    cursor: pointer;
    text-decoration: none;
  }

  a:hover { text-decoration: underline; }

  /**
  * home page
  */

  .card {
    color: initial;
    padding: 0;
    background: #fff;
    border: 1px solid #ddd;

    img {
      border-radius: 5px 5px 0 0;
    }

    p, h3 {
      padding: 15px;
    }

    border-bottom: 3px solid #7a6bac;
    :hover {
      text-decoration: none;
      border: 1px solid #7a6bac;
      border-bottom: 3px solid ${j};
    }
  }

  a.focused-link {
    color: #f2f2f2;
    font-size: 2em;
    display: flex;
    align-items: center;
  }

  a.focused-link.purple {
    color: ${j};
  }

  .sci-items .focused-link {
    font-size: 1.5em;
  }

  .shadow {
    filter: drop-shadow( 0px 0px 2px #414141);
  }

  .bg-purple { background: ${j}; }
  .text-purple { color: ${j}; }

  .bg-sage { background: ${"rgb(135, 186, 166)"}; }

  .section {
    margin: 0 auto;
    padding: 4em 0;
    height: 100%;
    width: 90%;
  }

  .match-twitter-card {
    border-radius: 12px;
    .MuiCardContent-root {
      h2 {
        padding: 0 16px;
      }

      padding-left: 0px;
      padding-right: 0px;
      .news-list {
        padding: 0 16px;
      }
    }
  }

  .sci-items {
    .sci-item {
      background: #63509c;
      padding: 10px;
      border-radius: 10px;
    }

    .sci-item:hover {
      background: #70619f;
    }

    .sci-item a {
      color: #f2f2f2;
    }
  }

  .code-window {
    .prism-code {
      border-radius: 0px 0px 10px 10px;
    }
  }
`,q=i.ZP.div`
  padding: 40px;
  height: 400px;
  background: radial-gradient(farthest-side ellipse at 0% 0,#87baa6 20%,#382d64);
  text-shadow: 0px 0px 6px #666;
`,_=i.ZP.div`
  font-size: 2em;
  margin: auto;
  width: 50%;
  padding-bottom: 2em;
  text-align: center;
  color: ${j};
`;function I(e){const[t,a]=(0,l.useState)(""),[n,r]=(0,l.useState)(0),[s,c]=(0,l.useState)(0),[i,o]=(0,l.useState)(e.texts[s]||"");return(0,l.useEffect)((()=>{if(n>=i.length)return;const e=setTimeout((()=>{a(`${t}${i[n]}`),r(n+1)}),25);return()=>clearTimeout(e)}),[n,i,t]),(0,l.useEffect)((()=>{const t=function t(){return setTimeout((()=>{c((t=>(t+1)%e.texts.length)),t()}),3e3)}();return()=>clearTimeout(t)}),[]),(0,l.useEffect)((()=>{r(0),a(""),o(e.texts[s])}),[s]),l.createElement("span",{className:"text-emerald-200"},t||l.createElement(l.Fragment,null,"\xa0"))}function M(){const{siteConfig:e}=(0,n.Z)();return l.createElement(s.Z,{title:`${e.title}`,description:"Sage website"},l.createElement(r.Z,null,l.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"})),l.createElement("main",null,l.createElement($,null)))}}}]);