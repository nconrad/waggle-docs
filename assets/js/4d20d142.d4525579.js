"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2436],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(t),m=s,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return t?n.createElement(g,i(i({ref:a},p),{},{components:t})):n.createElement(g,i({ref:a},p))}));function m(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var d=2;d<r;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6640:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=t(7462),s=(t(7294),t(3905));const r={sidebar_position:3},i="Access and use data",o={unversionedId:"tutorials/accessing-data",id:"tutorials/accessing-data",title:"Access and use data",description:"Data Movement",source:"@site/docs/tutorials/accessing-data.md",sourceDirName:"tutorials",slug:"/tutorials/accessing-data",permalink:"/docs/tutorials/accessing-data",draft:!1,editUrl:"https://github.com/waggle-sensor/waggle-docs/edit/main/docs/tutorials/accessing-data.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Submit your job",permalink:"/docs/tutorials/schedule-jobs"},next:{title:"Access Waggle sensors",permalink:"/docs/tutorials/access-waggle-sensors"}},l={},d=[{value:"Restricted access files",id:"restricted-access-files",level:2},{value:"Data Bundles",id:"data-bundles",level:2},{value:"Data API",id:"data-api",level:2},{value:"Using the Data API",id:"using-the-data-api",level:3},{value:"Sage Data Client",id:"sage-data-client",level:4},{value:"HTTP API",id:"http-api",level:4},{value:"Data model",id:"data-model",level:2},{value:"Accessing large files (i.e. training data)",id:"accessing-large-files-ie-training-data",level:2}],p={toc:d};function u(e){let{components:a,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"access-and-use-data"},"Access and use data"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Data Movement",src:t(1900).Z,width:"735",height:"300"})),(0,s.kt)("p",null,"Raw sensor data is collected by edge code. This edge code can either talk to sensor hardware directly or may obtain data from an abstraction layer (not show in image above). Edge code may forward unprocessed sensor data, do light processing to convert raw sensor values into final data products, or may use CPU/GPU-intensive workloads (e.g. AI application) to extract information from data-intensive sensors such as cameras, microphone or LIDAR.  "),(0,s.kt)("p",null,"Sensor data from nodes that comes in numerical or textual form (e.g. temperature) is stored natively in our time series database. Sensor data in form of large files (images, audio, movies..) is stored in the Waggle object store, but is referenced in the time series data (thus the dashed arrow in the figure above). Thus, the primary way to find all data (sensor and large files) is via the Waggle sensor query API described below."),(0,s.kt)("p",null,"Currently the Waggle sensor database contains data such as:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"relative humidity, barometric pressure, ambient temperature and gas (VOC) ",(0,s.kt)("a",{parentName:"li",href:"https://www.bosch-sensortec.com/products/environmental-sensors/gas-sensors/bme680/"},"BME680")),(0,s.kt)("li",{parentName:"ul"},"rainfall measurements ",(0,s.kt)("a",{parentName:"li",href:"https://sage-commons.sdsc.edu/dataset/rg-15"},"(Hydreon RG-15)")," "),(0,s.kt)("li",{parentName:"ul"},"AI-based cloud coverage estimation from camera images"),(0,s.kt)("li",{parentName:"ul"},"AI-based object counts from camera images"),(0,s.kt)("li",{parentName:"ul"},"(system data of the nodes, free disk space etc.)")),(0,s.kt)("p",null,'Data can be accessed via "data bundles"  or the query API.'),(0,s.kt)("h2",{id:"restricted-access-files"},"Restricted access files"),(0,s.kt)("p",null,"While almost all Waggle data is open, some types of data requires a written Data Use Agreement for access.  This includes raw image and audio data taken from certain locations. Please ",(0,s.kt)("a",{parentName:"p",href:"/docs/contact-us"},"contact us")," if you are interested in access. The sensor log (see Query API) contains references to both restricted and unrestricted files. Downloading restricted files without authorization will return a ",(0,s.kt)("inlineCode",{parentName:"p"},"401 Unauthorized"),"."),(0,s.kt)("h2",{id:"data-bundles"},"Data Bundles"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Data Bundles")," provide sensor data and associated metadata in a single, large, downloadable file.  Soon, each Data Bundle available for download will have a DOI that can be used for publication citations."),(0,s.kt)("p",null,"Data Bundles are compiled nightly and may be downloaded in ",(0,s.kt)("a",{parentName:"p",href:"https://web.lcrc.anl.gov/public/waggle/sagedata/SAGE-Data.tar"},"this archive"),"."),(0,s.kt)("h2",{id:"data-api"},"Data API"),(0,s.kt)("p",null,"The Waggle ",(0,s.kt)("strong",{parentName:"p"},"data API")," provides immediate and flexible access to sensor data via search over time and metadata tags. It is primarily intended to support exploratory and near real time use cases."),(0,s.kt)("p",null,"Due to the wide variety of possible queries, we do not attempt to provide DOIs for results from the data API. Instead, we leave it up to users to organize and curate datasets for their own applications. Long term, curated data is instead provided via ",(0,s.kt)("strong",{parentName:"p"},"Data Bundles"),"."),(0,s.kt)("h3",{id:"using-the-data-api"},"Using the Data API"),(0,s.kt)("p",null,"There are two recommended approaches to working with the Data API:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Use the ",(0,s.kt)("a",{parentName:"li",href:"https://pypi.org/project/sage-data-client/"},"Python Sage Data Client"),"."),(0,s.kt)("li",{parentName:"ol"},"Use the HTTP API.")),(0,s.kt)("p",null,"Each is appropriate for different use cases and integrations, but generally the following rule applies:"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"If you just want to get data into a Pandas dataframe for analysis and plotting, use the sage-data-client, otherwise use the HTTP API.")),(0,s.kt)("h4",{id:"sage-data-client"},"Sage Data Client"),(0,s.kt)("p",null,"The Sage Data Client is a Python library which streamlines querying the data API and getting the results into a Pandas dataframe. For details on installation and usage, please see the ",(0,s.kt)("a",{parentName:"p",href:"https://pypi.org/project/sage-data-client/"},"Python package"),"."),(0,s.kt)("h4",{id:"http-api"},"HTTP API"),(0,s.kt)("p",null,"This example shows how to retrieve data the latest data from a specific sensor (you can adjust the ",(0,s.kt)("inlineCode",{parentName:"p"},"start")," field if you do not get any recent data):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'curl -H \'Content-Type: application/json\' https://data.sagecontinuum.org/api/v1/query -d \'\n{\n    "start": "-10s",\n    "filter": {\n        "sensor": "bme680"\n    }\n}\n\'\n\n')),(0,s.kt)("p",null,"Example results:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{"timestamp":"2021-08-09T19:26:03.880781217Z","name":"iio.in_humidityrelative_input","value":70.905,"meta":{"node":"000048b02d15bdcd","plugin":"plugin-metsense:0.1.1","sensor":"bme680"}}\n{"timestamp":"2021-08-09T19:26:03.878659392Z","name":"iio.in_pressure_input","value":975.78,"meta":{"node":"000048b02d15bdcd","plugin":"plugin-metsense:0.1.1","sensor":"bme680"}}\n{"timestamp":"2021-08-09T19:26:03.872652127Z","name":"iio.in_resistance_input","value":93952,"meta":{"node":"000048b02d15bdcd","plugin":"plugin-metsense:0.1.1","sensor":"bme680"}}\n{"timestamp":"2021-08-09T19:26:03.874998057Z","name":"iio.in_temp_input","value":27330,"meta":{"node":"000048b02d15bdcd","plugin":"plugin-metsense:0.1.1","sensor":"bme680"}}\n')),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"More details on how to use the query API can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/waggle-beehive-v2/blob/main/docs/querying-measurements.md#query-api"},"here"))),(0,s.kt)("h2",{id:"data-model"},"Data model"),(0,s.kt)("p",null,"A detailed description of the data model can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/waggle-sensor/waggle-beehive-v2/blob/main/docs/querying-measurements.md#data-model"},"here"),"."),(0,s.kt)("h2",{id:"accessing-large-files-ie-training-data"},"Accessing large files (i.e. training data)"),(0,s.kt)("p",null,"Waggle collects large files for AI training purposes. These files stored in an S3 bucket hosted by the ",(0,s.kt)("a",{parentName:"p",href:"https://www.openstoragenetwork.org/"},"Open Storage Network"),"."),(0,s.kt)("p",null,"To find these files use the filter ",(0,s.kt)("inlineCode",{parentName:"p"},'"name":"upload"')," and specify additional filters to limit search results, for example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'curl -s -H \'Content-Type: application/json\' https://data.sagecontinuum.org/api/v1/query -d \'{\n  "start": "2021-09-10T12:51:36.246454082Z",\n  "end":"2021-09-10T13:51:36.246454082Z",\n  "filter": {\n    "name":"upload",\n    "plugin":"imagesampler-left:0.2.3"\n    }\n  }\'\n')),(0,s.kt)("p",null,"Output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{"timestamp":"2021-09-10T13:19:27.237651354Z","name":"upload","value":"https://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d05a0a4/1631279967237651354-2021-09-10T13:19:26+0000.jpg","meta":{"job":"sage","node":"000048b02d05a0a4","plugin":"imagesampler-left:0.2.3","task":"imagesampler-left:0.2.3"}}\n{"timestamp":"2021-09-10T13:50:32.29028603Z","name":"upload","value":"https://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d15bc3d/1631281832290286030-2021-09-10T13:50:32+0000.jpg","meta":{"job":"sage","node":"000048b02d15bc3d","plugin":"imagesampler-left:0.2.3","task":"imagesampler-left:0.2.3"}}\n{"timestamp":"2021-09-10T12:52:59.782262376Z","name":"upload","value":"https://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d15bdc2/1631278379782262376-2021-09-10T12:52:59+0000.jpg","meta":{"job":"sage","node":"000048b02d15bdc2","plugin":"imagesampler-left:0.2.3","task":"imagesampler-left:0.2.3"}}\n{"timestamp":"2021-09-10T13:49:49.084350086Z","name":"upload","value":"https://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d15bdd2/1631281789084350086-2021-09-10T13:49:48+0000.jpg","meta":{"job":"sage","node":"000048b02d15bdd2","plugin":"imagesampler-left:0.2.3","task":"imagesampler-left:0.2.3"}}\n')),(0,s.kt)("p",null,"For a quick way to only extract the urls from the json objects above, a tool like ",(0,s.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," can be used:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},'curl -s -H \'Content-Type: application/json\' https://data.sagecontinuum.org/api/v1/query -d \'{\n  "start": "2021-09-10T12:51:36.246454082Z",\n  "end":"2021-09-10T13:51:36.246454082Z",\n  "filter": {\n    "name":"upload",\n    "plugin":"imagesampler-left:0.2.3"\n    }\n  }\' | jq -r .value > urls.txt\n')),(0,s.kt)("p",null,"The resulting file ",(0,s.kt)("inlineCode",{parentName:"p"},"urls.txt")," will look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"https://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d05a0a4/1631279967237651354-2021-09-10T13:19:26+0000.jpg\nhttps://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d15bc3d/1631281832290286030-2021-09-10T13:50:32+0000.jpg\nhttps://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d15bdc2/1631278379782262376-2021-09-10T12:52:59+0000.jpg\nhttps://storage.sagecontinuum.org/api/v1/data/sage/sage-imagesampler-left-0.2.3/000048b02d15bdd2/1631281789084350086-2021-09-10T13:49:48+0000.jpg\n")),(0,s.kt)("p",null,"To download the files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"wget -i urls.txt\n")),(0,s.kt)("p",null,"If many files are downloaded, it is better to preserve the directory tree structure to prevent filename collision:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"wget -r -i urls.txt\n")),(0,s.kt)("p",null,"For access to restricted files see Section ",(0,s.kt)("a",{parentName:"p",href:"#restricted-access-files"},"Restricted access files"),". Username and password can be specified via  ",(0,s.kt)("inlineCode",{parentName:"p"},"--user=<user> --password=<password>")," when using ",(0,s.kt)("inlineCode",{parentName:"p"},"wget"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"-u <user>:<password>")," when using curl."))}u.isMDXComponent=!0},1900:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/data_movement-6a77fe43e06dc0c6870b80de8eb513e6.svg"}}]);