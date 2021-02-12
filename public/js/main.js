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
    lab1supp.style.display = 'none'
    inp1supp.style.display = 'none'
})

// console.log(modalContenu.children)
// modalbg.addEventListener('click', (e)=> {
//     let item = e.target
//     if (item == modalbg && item == modalbg.children) {
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
let logonavGhost = document.querySelector('.logonavGhost')

function myFunction() {
    if (window.pageYOffset >= stickyNav) {
        navbar.classList.add("sticky")
        titreNav.classList.add("stickyLogo")
        logonavGhost.classList.add("showGhost")
    } else {
        navbar.classList.remove("sticky")
        titreNav.classList.remove("stickyLogo")
        logonavGhost.classList.remove("showGhost")
    }
}

// // DARK MODE
let btnNoir = document.querySelector('.btnBlack')
let body = document.querySelector('body')

btnNoir.addEventListener('click',()=> {
    body.classList.toggle('dark')
    navbar.classList.toggle('dark')
    if (body.classList[0] == 'dark') {
        btnNoir.style.color = 'white'
        btnNoir.classList.remove('fa-moon')
        btnNoir.classList.add('fa-sun')
    } else {
        btnNoir.classList.remove('fa-sun')
        btnNoir.classList.add('fa-moon')
    }
})

// CARROUSEL
let piti = document.querySelectorAll('.piti')
let styleCol = document.querySelectorAll('.styleCol')

piti[0].onclick = () => {
    // piti.forEach(el => {
    //     el.
    // })
    styleCol.forEach(el => {
        el.style.left = '0'
    });
}

piti[1].onclick = () => {
    styleCol.forEach(el => {
        el.style.left = '-27%'
    });
}

piti[2].onclick = () => {
    styleCol.forEach(el => {
        el.style.left = '-52%'
    });
}

piti[3].onclick = () => {
    styleCol.forEach(el => {
        el.style.left = '-78%'
    });
}

// FADE IN BOXES
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
});

faders.forEach(el => {
    appearOnScroll.observe(el);
});