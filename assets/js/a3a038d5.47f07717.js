"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4097],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,g=u["".concat(l,".").concat(m)]||u[m]||h[m]||r;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1312:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={},i="Characterizing Clouds",s={type:"mdx",permalink:"/waggle-docs/science/characterizing-clouds",source:"@site/src/pages/science/characterizing-clouds.md",title:"Characterizing Clouds",description:"Clouds have been widely studied in a variety of fields. The shape and distribution of clouds are not only important to modeling climate and weather, but also to understand interactions between aerosol and cloud for weather research, and to develop environment forecasting models including radiation and cloud properties. Additionally, detecting and understanding cloud cover over the sky have been studied to estimate and forecast solar irradiance and performance of renewable solar photovoltaic energy generation. For this reason, examining solar irradiance in photovoltaic power grids has been investigated in many ways. Even though the purpose of each study is diverse, it is common that they have approached to analyze the magnitude of cloud coverage. In this context, answering how much cloud covers the sky is a striking problem along with other factors such as wind direction, speed, temperature, and other meteorological factors.",frontMatter:{}},l=[],d={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"characterizing-clouds"},"Characterizing Clouds"),(0,o.kt)("p",null,"Clouds have been widely studied in a variety of fields. The shape and distribution of clouds are not only important to modeling climate and weather, but also to understand interactions between aerosol and cloud for weather research, and to develop environment forecasting models including radiation and cloud properties. Additionally, detecting and understanding cloud cover over the sky have been studied to estimate and forecast solar irradiance and performance of renewable solar photovoltaic energy generation. For this reason, examining solar irradiance in photovoltaic power grids has been investigated in many ways. Even though the purpose of each study is diverse, it is common that they have approached to analyze the magnitude of cloud coverage. In this context, answering how much cloud covers the sky is a striking problem along with other factors such as wind direction, speed, temperature, and other meteorological factors."),(0,o.kt)("p",null,"Many of the cloud images used in the studies have been collected from satellites. Those image data are then used to analyze cloud types and solar irradiance. The images captured from satellites are advantageous to study large areas with regard to the resolution of the image to understand the overall environment of the area. However, to analyze local cloud environment, which is a much smaller area and changing rapidly, using the images from the satellite are unrealistic, costly, and slow. Instead, ground-based images have been used predominantly for analyzing local cloud status which can affect on estimation and prediction of solar irradiance. Because local weather conditions and solar irradiance are affected significantly by the cloud coverage of local sky, the ground-based images are more suitable to represent local sky conditions."),(0,o.kt)("p",null,"As a method to estimate cloud cover and solar irradiance based on the cloud cover, we propose a method using machine learning models. we ensembled cloud segmentation result from four machine learning methods for cloud segmentation and entropy of image: color-based cloud segmentation using partial lease squares regression (PLS), fully convolutional network (FCN), U-net, and DeepLab. To train each of machine learning models with various sky conditions, we created a cloud dataset that can reinforce dark sky conditions and overcast on Singapore whole Sky imaging segmentation (SWIMSEG) dataset using a Waggle node deployed in Argonne National Laboratory. With the cloud cover estimation, we examine correlation between cloud cover, solar irradiance, and solar power generation."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"raw images",src:a(875).Z,width:"1536",height:"518"})),(0,o.kt)("p",null,"Above image is examples of raw images and labels from Waggle cloud dataset. The original image resolution is 2304\xd71536. However the images were resized as 300\xd7300 because of lack of memory issue on training process. We utilized OpenCV to label pixels based on saturation, red, and blue value first. By adjusting the threshold of the three color channels, we roughly separated cloud and sky pixels. Then we manually labeled the pixels that were difficult to separate through the threshold adjustment."),(0,o.kt)("p",null,"Below is the flowchart of image processing to estimate cloud cover and solar irradiance. We first estimate cloud cover using four machine learning models, and calculate entropy of the image. The results from the five are ensembled to improve accuracy of the segmentation. And lastly the segmentation result, which is the ratio of cloud over sky, is used to calculate solar irradiance with max solar irradiance calculated from pysolar, a python library that calculates max solar irradiance based on the measure from 2007 to 2018."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"algorithm flow",src:a(9887).Z,width:"1024",height:"995"})),(0,o.kt)("p",null,"Below is the segmentation results from the machine learning models. ",(0,o.kt)("strong",{parentName:"p"},"It is showing raw input, ground truth, segmentation result from FCN, U-Net, PLS, DeepLab, ensemble trained with class name, ensemble trained with normalized cloud probability, ensemble trained with class name excluding entropy, from left to right.")," Ensemble models are trained with three inputs. First one was using class number. Which means sky pixels were masked as 0, and cloud pixels were masked as 1, that are their class number. Second one was using normalized cloud probability distribution, and last was using class number and exclude entropy. Entropy is excluded because when you see the 3rd, and last two bottom results, the results from the model trained with class number very mis-segmented while the model more accurately segmented in other cases. And as a result of excluding entropy, the model with entropy segments best among the three ensemble models."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"segmentation of clouds",src:a(9444).Z,width:"736",height:"1064"})),(0,o.kt)("p",null,"And mean segmentation accuracy and mean intersection over union for each model were calculated. In this category, U-Net absolutely superior then other methods. However, when you see the mean error ratio FCN is the lowest. We are working on to process segmentation results from ensemble models. This means that the mIoU and mAP can be increased when the model over-segment cloud, but the solar irradiance estimation can become worse. Also, we did not separate thin, think, medium cloud, the solar irradiance estimation can be significantly under-estimated when there were only thin clouds. And for mostly cloudy sky, the models estimated zero solar irradiance so the error ratio goes high."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"accuracy table",src:a(1130).Z,width:"768",height:"425"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Below graphs are the results of global solar irradiance measured from ANL met tower colored with dark orange (top), estimated max solar irradiance using pysolar python library colored with green (second top), and below, IRR estimation using cloud cover ratio from FCN, U-Net, PLS, and DeepLab, and IRR estimation error ratio using FCN, U-Net, PLS, and DeepLab on June 1st and 2nd, 2020.")," We did not collect images late night and early morning, the straight lines between around from 9 pm to 8 am means \u2018No Data\u2019. The results show it seems that the error rates are high in the morning and evening. It can be because of sky condition as other papers describe, but I think in our case, the max solar irradiance is over-estimated in the morning and evening. You can see the second hill in the first two graphs. On June 2nd, the day was whole clear and sunny, so the 2nd hill in the first graph could be the max solar irradiance on June, at 484 site. Compare to the max IRR from pysolar that is plotted very below of that, the IRR values in the morning and evening were over-estimated in the morning and evening. It seems that the model can estimate the trend of solar irradiance with cloud cover, even the models over-estimate cloud cover so that under-estimate solar irradiance."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"solar irradiance charts",src:a(9249).Z,width:"1650",height:"828"})),(0,o.kt)("p",null,"[More results to be updated at a later time]"))}c.isMDXComponent=!0},875:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/characterizing-clouds-1-708930c6ae12cdcb97140059fdf417f0.png"},9887:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/characterizing-clouds-2-9be5b1ee022dafbe87e69e1e32bc6209.png"},9444:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/characterizing-clouds-3-0f60c5e506a78ba2e20e25713f324207.png"},1130:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/characterizing-clouds-4-f1b8fca03c11d4817895e8267d3f8cf0.png"},9249:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/characterizing-clouds-5-b45b70dbe4719025b9a56d7bda26dc99.png"}}]);