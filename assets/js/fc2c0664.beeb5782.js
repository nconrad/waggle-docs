"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||h[d]||o;return n?i.createElement(g,s(s({ref:t},p),{},{components:n})):i.createElement(g,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var l=2;l<o;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},688:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const o={},s="Social Distancing",r={type:"mdx",permalink:"/science/social-distancing",source:"@site/src/pages/science/social-distancing.md",title:"Social Distancing",description:"My name is Ori Zur and I am a rising junior at Northwestern University studying computer science and music composition. This summer at Argonne, I sought to answer the following question: how well are people following social distancing guidelines in outdoor urban environments?",frontMatter:{}},c=[{value:"How it works",id:"how-it-works",level:2},{value:"The setup",id:"the-setup",level:2},{value:"The operation",id:"the-operation",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"References",id:"references",level:2}],l={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"social-distancing"},"Social Distancing"),(0,a.kt)("p",null,"My name is Ori Zur and I am a rising junior at Northwestern University studying computer science and music composition. This summer at Argonne, I sought to answer the following question: how well are people following social distancing guidelines in outdoor urban environments?"),(0,a.kt)("p",null,"For the past six months, the world has been enduring a historic pandemic due to the COVID-19 virus. As society attempts to adjust to the new lifestyle of mask wearing, virtual education, and working from home, one phrase that constantly gets brought up is \u201csocial distancing guidelines.\u201d Social distancing is the action of keeping a distance of at least six feet from others in order to reduce the spread of the Coronavirus disease. For the past two months, I\u2019ve been designing and coding a social distancing detector using Python and OpenCV as a means to answer the question of what percentage of people are properly following these social distancing guidelines."),(0,a.kt)("p",null,"The program takes a video of pedestrians, typically from surveillance camera footage, and analyzes each frame by detecting the people, calculating the distance between each pair of people, and indicating if any two people are standing less than six feet apart. OpenCV, a computer vision function library, was used because it greatly simplifies the process of loading in a video, separating it into individual frames for analysis and editing, and outputting the final results."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"original image",src:n(4783).Z,width:"1490",height:"834"})),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"There are two main components to the program: the setup, which only occurs once in the beginning, and the operation, which is a loop that occurs once for each frame of the input video."),(0,a.kt)("h2",{id:"the-setup"},"The setup"),(0,a.kt)("p",null,"When the program begins running, the first frame of the input video is shown to the user. The user then inputs six points with their mouse. The first four points make up a rectangle on the ground plane, which will be referred to as the \u201cregion of interest\u201d or ROI. The last two points are an approximation of a six-foot distance on the ground."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"original image",src:n(6605).Z,width:"2048",height:"1264"})),(0,a.kt)("p",null,"Six mouse points inputed by the user on the first frame of the input video. The four blue points make up the region of interest and the two green points are the six-foot approximation. Here, the height of the person was used to approximate six feet, but ideally there would be markers on the ground to help guide the user in plotting these points.\nThe purpose of creating a region of interest with the first four mouse points is to solve the issue of camera distortion. Because the camera is filming from an angle, the conversion rate between physical distance on the ground and pixel distance in the image is not constant. In order to solve this problem, the four mouse points are used to warp the region of interest to create a bird\u2019s-eye-view image. This new image, shown below, looks distorted and unclear, but its appearance is irrelevant as it won\u2019t be shown to the user. What\u2019s important is that in the warped image, the conversion rate between physical distance and pixel distance is now constant."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"original image",src:n(737).Z,width:"750",height:"570"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Original Image")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"warped view of image",src:n(2690).Z,width:"267",height:"518"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warped Bird\u2019s Eye View Image")),(0,a.kt)("p",null,"In order to prove that this works, I created a small-scale experiment using LEGOs and ran the image through the same warping function. On the left, the tick marks on the sides of the paper are not evenly spaced in terms of pixel distance due to the camera angle. On the right image, however, the tick marks on the side of the paper are evenly spaced, indicating that the physical distance to pixel distance conversion rate is now constant."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"original vs transformation",src:n(5339).Z,width:"1316",height:"568"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Left: original image, four blue points are inputed by the user via mouse clicks. Right: result of image transformation.")),(0,a.kt)("p",null,"The last part of setup is to use the last two inputted mouse points to calculate the number of pixels that make up six feet. The coordinates of these two points are warped using the same function used to warp the image, and the distance formula is used to calculate the number of pixels between them. This distance is the number of pixels that make up six feet, which I call the minimum safe distance, and since the points and image were warped using the same function, this pixel distance is the same throughout the entire bird\u2019s-eye-view image."),(0,a.kt)("h2",{id:"the-operation"},"The operation"),(0,a.kt)("p",null,"The first step of the operation loop is person detection, which is accomplished using a real-time object detection program called You Only Look Once, or YOLO. This program recognizes a wide variety of objects, but my program includes a filter that only keeps the person recognitions. Once detection occurs, each person is represented by what\u2019s called a \u201cbounding box,\u201d which is a rectangle whose coordinates surround the person."),(0,a.kt)("p",null,"The next step is to take a single point from each bounding box, warp it using the same function used in the setup, and map the coordinates of the warped box points onto the bird\u2019s-eye-view image. Because everything is now mapped onto the bird\u2019s-eye-view image, the distance formula can be used to calculate the distances between each pair of points. These distances are then compared to the minimum safe distance which was also calculated in the setup."),(0,a.kt)("p",null,"The final step is to create and display the outputs for the current frame. The first output is the street view, where red and green rectangles are drawn on the bounding boxes of the detected people. The second output is a representation of the bird\u2019s-eye-view image using a white window and green and red circles to represent the warped box coordinates that were mapped in the previous step. Once the outputs are displayed, the loop moves onto the next frame of the input video."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of program",src:n(5625).Z,width:"2048",height:"1011"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Screenshot of the program in action.  Left: bird\u2019s-eye-view output.  Right: street view output")),(0,a.kt)("p",null,"Here is a flowchart that summarizes the steps of the setup and operation components of the program."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"steps of algorithm",src:n(6292).Z,width:"1318",height:"630"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Setup steps are in orange and operation steps are in green.")),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"One feature that I plan to add to the program in my remaining time at Argonne is the ability to detect groups of people walking together. For example, a couple or family walking together may be less than six feet apart, but that should not be considered a violation of social distancing guidelines. This will be done by adding in an algorithm that can associate objects across multiple frames and assign unique IDs to each person detected. Using this algorithm, my program will be able to recognize groups of people walking together by tracking their specific object IDs, and disregard them as violators even if they are standing too close together."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/deepak112/Social-Distancing-AI"},"https://github.com/deepak112/Social-Distancing-AI")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/aqeelanwar/SocialDistancingAI"},"https://github.com/aqeelanwar/SocialDistancingAI")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.pyimagesearch.com/2020/06/01/opencv-social-distancing-detector/"},"https://www.pyimagesearch.com/2020/06/01/opencv-social-distancing-detector/")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.pyimagesearch.com/2014/08/25/4-point-opencv-getperspective-transform-example/"},"https://www.pyimagesearch.com/2014/08/25/4-point-opencv-getperspective-transform-example/")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.pyimagesearch.com/2018/11/12/yolo-object-detection-with-opencv/"},"https://www.pyimagesearch.com/2018/11/12/yolo-object-detection-with-opencv/"))))}p.isMDXComponent=!0},4783:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/social-distancing-1-e09bcb65c31d9faa5e8bb6858e7ea0d0.png"},6605:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/social-distancing-2-86bec21de75829c18c7ab2a30569f990.png"},737:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/social-distancing-3-f6de48e4ac2ce4a0553701ac88445ae1.png"},2690:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/social-distancing-4-f8851d5722d1462cb7fb19c42df579ab.png"},5339:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/social-distancing-5-b8654fab330ac55f043e7b27b5c19002.png"},5625:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/social-distancing-6-e2180ce9472a8fb62764b89c16c0587e.png"},6292:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/social-distancing-7-ac9c3ce8e28971f85b22ccd478e9bd1e.png"}}]);