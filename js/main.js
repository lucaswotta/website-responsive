let menuBtn = document.querySelector('.menu-principal__btn')
let menuPrincipal = document.querySelector('.menu-principal')
menuBtn.addEventListener("click", abreFechaMenu)

function abreFechaMenu(evento) {
    console.log("ae")
    menuPrincipal.classList.toggle("menu-principal--fechado")
}