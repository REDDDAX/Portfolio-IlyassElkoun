




const hamburger = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const html = document.querySelector("html");
const nav = document.querySelector("nav")
const contactMeBtn = document.querySelector(".contact-me");
const links = document.querySelectorAll("li a");


hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-active")
    nav.classList.toggle("background-color-change");
    nav.classList.toggle("black-background");
    html.classList.toggle("overflow-hidden")
    console.log(links)
})

function closeMenu() {
    menu.classList.remove("menu-active");
    html.classList.remove("overflow-hidden")
    nav.classList.remove("black-background");
}

document.onclick = function (e) {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("menu-active");
        html.classList.remove("overflow-hidden")
        nav.classList.remove("black-background");
    }




}



const section = document.querySelectorAll("section")


window.addEventListener("scroll", () => {
    // (window.scrollY)
    const scrollchange = scrollY;

    if (scrollchange > 5) {
        nav.style.backgroundColor = "black";
        nav.style.boxShadow = "10px 0 10px rgb(55, 55, 55)";
        nav.style.transition = ".3s";
        document.documentElement.style.cssText = "--bottom-border-color: #C5264C";
        document.documentElement.style.cssText = "--box-shadow-changed: #C5264C";

        // document.querySelector(":root").style.setProperty('--bottom-border-color','white')

    }

    if (scrollchange < 5) {
        nav.style.backgroundColor = "transparent"
        document.documentElement.style.cssText = "--bottom-border-color: white";
        document.documentElement.style.cssText = "--box-shadow-changed: black"
        nav.style.boxShadow = "none";
    }


})

