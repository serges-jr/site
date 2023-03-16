var ancre = document.querySelector(".ancre");
var lien = document.querySelector(".lien");

var liens = document.querySelector(".liens");
var produits = document.querySelector(".produits");
var nav = document.querySelector(".navbar");
var posi = nav.offsetTop;
var sect = document.querySelectorAll(".sect1");
var posi2 = sect.offsetTop;

var loader = document.querySelector('.loader');

window.addEventListener('load', ()=>{
    loader.style.visibility =  "hidden";
})

window.addEventListener('scroll', () => {
    if (window.scrollY >= posi) {
        nav.classList.add('fixed');
    }else{
        nav.classList.remove('fixed');
    }
})

produits.addEventListener("mouseover", () => {
    ancre.classList.add('see');
})
liens.addEventListener("mouseover", () => {
    lien.classList.add('see');
})
ancre.addEventListener("mouseover", () => {
    ancre.classList.add('see');
})
lien.addEventListener("mouseover", () => {
    lien.classList.add('see');
})


nav.addEventListener("mouseout", () => {
    ancre.classList.remove('see');
    lien.classList.remove('see');
})




