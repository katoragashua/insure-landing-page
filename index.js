const svgLeft = document.getElementById("svg-left");
const svgRight = document.getElementById("svg-right");
const svgLeftMobile = document.getElementById("svg-left-mobile");
const svgRightMobile = document.getElementById("svg-right-mobile");
const workAboutSvg = document.getElementById("svg-work-about");
const workAboutSvgMobile = document.getElementById("svg-work-about-mobile");
const svgFooter = document.getElementById("svg-footer");
const svgFooterMobile = document.getElementById("svg-footer-mobile");
workAboutSvg.classList.add("svg-work-about");
const hamburger = document.getElementById("hamburger");

const menu = document.getElementById("menu");
console.log(svgLeft, svgRight);
const mobile = 450;
const desktop = 451;
let viewPort = document.body.clientWidth;
console.log(viewPort);

window.addEventListener("resize", resize)

function resize() {
    if (viewPort <= mobile) {
      svgRight.style.display = "none";
      svgLeft.style.display = "none";
      workAboutSvg.style.display = "none";
      svgFooter.style.display = "none";
    } else if (viewPort >= desktop) {
      svgRightMobile.style.display = "none";
      svgLeftMobile.style.display = "none";
      workAboutSvgMobile.style.display = "none";
      svgFooterMobile.style.display = "none";
    }
}

resize()

hamburger.addEventListener("click", (e) => {
    menu.classList.toggle("slide-in");
    console.log(menu)
});