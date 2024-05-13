// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const snowContainer = document.querySelector(".snow");


menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

snowContainer.innerHTML = "";

function generarNieve() {
    Array.from({ length: 51 }).forEach((_, i) => {
        const num = generarNumero(11, 26)
        snowContainer.innerHTML += `<span style="--i:${num}"></span>`
    })

}
function generarNumero(inicio, final) {
    return Math.floor(Math.random() * (final - inicio + 1) + inicio)
}

// scroll sections active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href* =" + id + "]").classList.add("active");
            });
        };
    });


    // sticky navbar

    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);


    // remove toggle icon and navbar when click navbar link (scroll), o sea que cuando haga scroll se desaparezca el menú

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");


}


// sticky reveal
ScrollReveal({ 

     distance: "80px",
     duration: 2000,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-img, .services-container, portfolio-box, contact form', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });
ScrollReveal().reveal('.home-content p, .about-content', { origin: "right" });



// typed js

const typed = new Typed(".multiple-text", {
    strings: ["Junior", "Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
