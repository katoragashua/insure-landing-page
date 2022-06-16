const svgLeft = document.getElementById("svg-left");
const svgRight = document.getElementById("svg-right");
const svgLeftMobile = document.getElementById("svg-left-mobile");
const svgRightMobile = document.getElementById("svg-right-mobile");
const workAboutSvg = document.getElementById("svg-work-about");
const workAboutSvgMobile = document.getElementById("svg-work-about-mobile");
workAboutSvg.classList.add("svg-work-about");

console.log(svgLeft, svgRight);

const viewPort = window.innerWidth;
console.log(viewPort);

if(viewPort <= 450) {
    svgRight.style.display = "none";
    svgLeft.style.display = "none";
    workAboutSvg.style.display = 'none';
} else if(viewPort > 450) {
    svgRightMobile.style.display = "none";
    svgLeftMobile.style.display = "none";
    workAboutSvgMobile.style.display = 'none'
}
