let ckickMe = document.querySelector('.ckickMe');
let retsept = document.querySelector('.retsept__container');
let tavsiv = document.querySelector('.sir__tavsiv');
let popular = document.querySelector('.mashxur__retseptlar');

ckickMe.addEventListener('click', () => {
    retsept.classList.toggle('d-block')
    popular.classList.toggle('d-none')
    tavsiv.classList.toggle('d-none')
})
 
let btnModal = document.querySelectorAll('.retsept__korzinka button') 
let modal = document.querySelector('.modal__container') 
let clos = document.querySelector('.modal__title') 

btnModal.forEach(element => {
    modalMenu(element, modal) 
});

modalMenu(clos, modal) 

function modalMenu(btn, togl) {
    btn.addEventListener('click', () =>{
        togl.classList.toggle('d-none')
    })
}

modal.addEventListener('click', (e) =>{
    if(e.target == modal){
        modal.classList.toggle('d-none')
    }
})