// HEADER
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

// modalbg.addEventListener('click', function(e){
//     let item = e.target
//     if (item == modalContenu) {
//         modalbg.classList.add('bg-active')
//     } else {
//     modalbg.classList.remove('bg-active')
//     }
// })