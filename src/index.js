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

const imgSliderController = (() => {
    let index = 0;
    const mainIcon = new Image();
    let dotArr = []

    function imgSetUp() {
        let imgContainer = document.getElementById("main-image");
        mainIcon.src = imgSrcArr[index];
        imgContainer.appendChild(mainIcon)
    }

    function dotSetUp() {
        imgSrcArr.forEach((img, index) => {
            console.log(index)
            let dotDiv = document.createElement("div")
            let dot = document.createElement("i")
            dot.classList.add("fas")
            dot.classList.add("fa-circle")
            dotDiv.appendChild(dot)
            dotDiv.addEventListener("click", function () {
                imgIndexUpdate(index)
            })
            dotArr.push(dotDiv)
            document.getElementById("dots").appendChild(dotDiv)
        })
    }

    function imgIndexUpdate(newIndex) {
        dotArr[index].classList.remove("active-dot")
        if (newIndex >= imgSrcArr.length) index = 0
        else if (newIndex < 0) index = imgSrcArr.length - 1
        else index = newIndex;
        mainIcon.src = imgSrcArr[index];
        dotArr[index].classList.add("active-dot")
    }

    function getIndex() {
        return index;
    }
    return {
        imgSetUp,
        dotSetUp,
        getIndex,
        imgIndexUpdate
    }
})()

imgSliderController.imgSetUp();
imgSliderController.dotSetUp()

function setNextImg() {
    let nextIndex = imgSliderController.getIndex()
    imgSliderController.imgIndexUpdate(++nextIndex)
}

setInterval(setNextImg, 3000)

document.getElementById("next-image").addEventListener("click", setNextImg)
document.getElementById("previous-image").addEventListener("click", function () {
    let nextIndex = imgSliderController.getIndex()
    imgSliderController.imgIndexUpdate(--nextIndex)
})