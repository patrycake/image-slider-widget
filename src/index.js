import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";

import "./style.css"
import bananaImg from "./img/charles-deluvio-0v_1TPz1uXw-unsplash.jpg"
import cactusLeanImg from "./img/charles-deluvio-iylxQ1e6sOA-unsplash.jpg"
import cactusFluffyImg from "./img/charles-deluvio-O7dVHK8_tjg-unsplash.jpg"
import papayaImg from "./img/charles-deluvio-yPI38imbQSI-unsplash.jpg"
import limeImg from "./img/lewis-fagg-Nl7eLS8E2Ss-unsplash.jpg"
import orangeImg from "./img/mae-mu-U1iYwZ8Dx7k-unsplash.jpg"
import avocadoImg from "./img/thought-catalog-9aOswReDKPo-unsplash.jpg"

let imgSrcArr = [
    bananaImg,
    cactusLeanImg,
    cactusFluffyImg,
    papayaImg,
    limeImg,
    orangeImg,
    avocadoImg
]

let index = 0;
let imgCont = document.getElementById("main-image");
const mainIcon = new Image();
mainIcon.src = imgSrcArr[index];
imgCont.appendChild(mainIcon)

document.getElementById("next-image").addEventListener("click", function () {
    index++
    mainIcon.src = imgSrcArr[index];
    if(index >= imgSrcArr.length) index = 0
})
document.getElementById("previous-image").addEventListener("click", function () {
    index--
    if(index < 0) index = imgSrcArr.length - 1
    console.log(index)
    mainIcon.src = imgSrcArr[index];
    
})