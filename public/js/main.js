// HEADER
// CONNEXION
let btnConnexion = document.querySelector('.btnConnexion')
let modalbg = document.querySelector('.modal-bg')
let closeModal = document.querySelector('.closeModal')
let modalContenu = document.querySelector('.modal-contenu')

btnConnexion.addEventListener('click', function () {
    modalbg.classList.add('bg-active')
})

closeModal.addEventListener('click', function(){
    modalbg.classList.remove('bg-active')
})

// console.log(modalContenu.children)
// modalbg.addEventListener('click', (e)=> {
//     let item = e.target
//     if (item == modalContenu && item == modalContenu.children) {
//     } else {
//         modalbg.classList.remove('bg-active')
//     }
// })
// INSCRIPTION 
let btnConnexion2 = document.querySelector('.btnConnexion2')
let btnInscription = document.querySelector('.btnInscription')
let cbFemme = document.querySelector('.checkBoxFemme')
let cbHomme = document.querySelector('.checkBoxHomme')
let lab1supp = document.querySelector("#lab1supp")
let inp1supp = document.querySelector('#inp1supp')

btnInscription.addEventListener('click', () => {
    lab1supp.style.display = 'block'
    inp1supp.style.display = 'block'
})

btnConnexion2.addEventListener('click', ()=> {
    lab1supp.style.display = 'none'
    inp1supp.style.display = 'none'
})

// btnConnexion.addEventListener('click')



// modalbg.addEventListener('click', function(e){
//     let item = e.target
//     if (item == modalContenu) {
//         modalbg.classList.add('bg-active')
//     } else {
//     modalbg.classList.remove('bg-active')
//     }
// })

// SCROLL NAVBAR 

// Fonction ONSCROLL
window.onscroll = function () {myFunction()}

// Navbar et titre
let navbar = document.querySelector(".divnav")
let titreNav = document.querySelector(".logonav")

// Position NavBar
let stickyNav = navbar.offsetTop

// Ajouter/Retirer classes
function myFunction() {
    if (window.pageYOffset >= stickyNav) {
        navbar.classList.add("sticky")
        titreNav.classList.add("stickyLogo")
    } else {
        navbar.classList.remove("sticky")
        titreNav.classList.remove("stickyLogo")
    }
}


