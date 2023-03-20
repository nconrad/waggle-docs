"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6475],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,u=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(u,o(o({ref:t},h),{},{components:a})):n.createElement(u,o({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7544:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={},o="Water Level Detection",l={type:"mdx",permalink:"/science/water-level-detection",source:"@site/src/pages/science/water-level-detection.md",title:"Water Level Detection",description:"by Priyanjani Chandra",frontMatter:{}},s=[{value:"Importance of water level detection",id:"importance-of-water-level-detection",level:2},{value:"About the data",id:"about-the-data",level:2},{value:"Approach",id:"approach",level:2},{value:"References",id:"references",level:2}],c={toc:s};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"water-level-detection"},"Water Level Detection"),(0,r.kt)("p",null,"by Priyanjani Chandra"),(0,r.kt)("p",null,"Hello!"),(0,r.kt)("p",null,"My name is Priyanjani Chandra, and I am a graduate student in the Department of Computer Science at Northern Illinois University. As a research intern at Argonne National Laboratory this summer, I worked on a \u2018Water Level Detection\u2019 project that employs Computer Vision and Machine Learning based solution to detect the change in the water level of a waterbody. The ultimate goal of this project is to deploy the algorithm on the Array of Things node and detect the water level in real-time."),(0,r.kt)("h2",{id:"importance-of-water-level-detection"},"Importance of water level detection"),(0,r.kt)("p",null,"Detecting real-time water level in rivers or creeks located in urban areas is crucial, as floods are being a constant threat to the human community living. Floods cause death, damages crop, and properties. With the rise in global warming, many parts of the world are suffering from recurrent floods and excessive rainfall. Deaths due to flooding are often associated with excessive rainfall, which leads to flash flooding. Due to the devastating nature of floods and flash floods, there is a clear need for constant observation of the water level in the rivers and streams. An adequate solution would be the one that is cost-effective, automated, and requires low maintenance. With the advances in computer vision, machine learning, artificial intelligence, and edge computing there is a necessity of algorithms that can be deployed on low-cost powerful computers at data generation locations. In this project, I leveraged the image of the creek to automatically detect the change in water level in the stream with minimal error. I also correlated my results against the data provided by the United States Geographical Survey (USGS)",(0,r.kt)("sup",null,"[",(0,r.kt)("a",{parentName:"p",href:"#references"},"1"),"]")," for the South Kishwaukee River in DeKalb."),(0,r.kt)("h2",{id:"about-the-data"},"About the data"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sample image",src:a(6505).Z,width:"936",height:"702"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Figure 1- Sample image taken using the AoT node at Northern Illinois University")),(0,r.kt)("p",null,"The images are collected using the downward-facing camera in the Array of Things (AoT)",(0,r.kt)("sup",null,"[",(0,r.kt)("a",{parentName:"p",href:"#references"},"2"),"]")," node installed on a light pole in front of the Computer Science building at Northern Illinois University (NIU).  The AoT node collect images with a resolution of 96dpi at a frequency of every second. There are a total of 2,580,468 images collected every second during October and November 2019. In 2020, the data is collected from June 29, 2020, to date for every second. Figure 1 shows a sample image from the dataset of the collected images."),(0,r.kt)("h2",{id:"approach"},"Approach"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"water level detection",src:a(5316).Z,width:"936",height:"702"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Figure 2 \u2013 Water Level Detection Algorithm")),(0,r.kt)("p",null,"The algorithm\u2019s detailed approach is shown in the flow chart of Figure 2 and described as follows. One image with a clear view at the bottom part of the bridge becomes the reference image. Images collected from the node are initially processed to identify whether it is a day or night image. Further, I employed a template matching algorithm to find the bridge in the image. The template matching algorithm helps to find an object in a new image based on a pre-defined template.  It works best when the template image and new image looks very similar. Since RGB/color image changes drastically under different light and weather conditions, we converted them into grayscale edge-detection images. The edges are extracted by applying the Holistically-Nested Edge Detection (HED)",(0,r.kt)("sup",null,"[",(0,r.kt)("a",{parentName:"p",href:"#references"},"3"),"]")," algorithm to the image. A template of the bottom part of the bridge is obtained from the reference image (water level information is pre-determined). This template is further used to find the location of the bridge in the images. By matching the template, the water coordinates are obtained based on the pixel values\u2019 variations within the image. This whole process is applied to the reference image. Linear Regression is applied to the coordinates to obtain the waterline of the template to derive a reference waterline. Waterline for the new images is obtained by utilizing Linear Regression combined with a sliding window concept. The water level change is the difference between the reference water line and the water line detected in the image. Figure 3 shows the images obtained at each step in the algorithm."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"water level detection",src:a(1494).Z,width:"960",height:"720"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Figure 3 \u2013 The transformation from the original image to the detection of water level change for each stage at the algorithm.")),(0,r.kt)("p",null,"I am applying the algorithm to all the images available at this location and comparing the results to data by the United States Geological Survey",(0,r.kt)("sup",null,"[",(0,r.kt)("a",{parentName:"p",href:"#references"},"1"),"]"),"."),(0,r.kt)("p",null,"Next Steps\nThe existing algorithm I developed is novel and unsupervised, as it is not relying on any training on the images. I am looking at using Detectron2",(0,r.kt)("sup",null,"[",(0,r.kt)("a",{parentName:"p",href:"#references"},"4"),"]"),", an object-detection algorithm, to identify the bottom part of the bridge\u2019s location. The idea is to observe the changes in the location identified by the model."),(0,r.kt)("p",null,"I am thankful to my mentors for their constant support. I welcome feedback and comments via LinkedIn."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"USGS, \u201cUnited States Geographical Survey,\u201d ","[Online]",". Available: ",(0,r.kt)("a",{parentName:"li",href:"https://waterdata.usgs.gov/nwis/uv"},"https://waterdata.usgs.gov/nwis/uv"),"?. ","[Accessed 2020]","."),(0,r.kt)("li",{parentName:"ol"},"P. Beckman, R. Sankaran, C. Catlett, N. Ferrier, and M. Papka, \u201cWaggle: An open sensor platform for edge computing,\u201d in 2016 IEEE SENSORS, 2016, pp. 1-3."),(0,r.kt)("li",{parentName:"ol"},"S. Xie and Z. Tu, \u201cHolistically-Nested Edge Detection,\u201d in 2015 IEEE International Conference on Computer Vision (ICCV), 2015."),(0,r.kt)("li",{parentName:"ol"},"Y. Wu, A. Kirillov, F. Massa, W. Lo, and R. Girshick, \u201cGithub,\u201d Facebook Research, 2019. ","[Online]",". Available: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/detectron2"},"https://github.com/facebookresearch/detectron2"),". ","[Accessed 2020]",".")))}h.isMDXComponent=!0},6505:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/water-level-1-6ce27b19361bdae35130779976acc767.jpg"},5316:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/water-level-2-669ed827c5c6c3285485742da4c6b332.jpg"},1494:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/water-level-3-e92bee452ac4685a206583b49d9c3310.jpg"}}]);