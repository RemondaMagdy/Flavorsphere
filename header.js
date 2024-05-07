
let navbar  =  document.querySelector('.navbar');
document.querySelector('#menu-bars').onclick = () =>{
        navbar.classList.toggle('active');
        cartItem.classList.remove('active');
        heartItem.classList.remove('active');
}

let cartItem =  document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    heartItem.classList.remove('active');
    let errorIcon = document.querySelectorAll('.cart-item .fa-times');
    errorIcon.forEach(errorIcon => {
        errorIcon.onclick = () =>{
            errorIcon.parentElement.remove();
        }
    });
}


let heartItem =  document.querySelector('.heart-items-container');
document.querySelector('#heart-btn').onclick = () =>{
    heartItem.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    let errorIcon = document.querySelectorAll('.heart-item  .fa-times');
    errorIcon.forEach(errorIcon => {
        errorIcon.onclick = () =>{
            errorIcon.parentElement.remove();
        }
    });
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    heartItem.classList.remove('active');
}

const checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn.addEventListener('click',function(event){
    event.preventDefault();
    window.location.href='./order section.html';
    const cartItem = document.querySelector('.cart-items-container');
    cartItem.classList.remove('active');

});


const addtocartBtn = document.querySelector('.heart-btn');
addtocartBtn.addEventListener('click',function(event){
    event.preventDefault();
    window.location.href='#cart';
    const heartItem = document.querySelector('.heart-items-container');
    heartItem.classList.remove('active');
    const cartItem = document.querySelector('.cart-items-container');
    cartItem.classList.add('active');


});

const AddToCart = document.querySelector('.cart-btn');
addtocartBtn.addEventListener('click',function(event){
    event.preventDefault();
    window.location.href='#cart';
    const cartItem = document.querySelector('.cart-items-container');
    cartItem.classList.add('active');

});



// const toggle = document .getElementById('white-mood');
// const body =document.querySelector('body');
// white.addEventListener('click',function() {
// this.classList.toggle('bi-dark');
// if(this.classList.toggle('fas fa-sun')){
//     body.style.background = 'white';
// body.style.color = 'black';
// body.style.transition = '2s'
// }
// else{
//     body.style.background = 'black';
//     body.style.color = 'white';
//     body.style.transition = '2s'
// }
// })

const toggle = document.getElementById('white-mood');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    toggle.classList.toggle('bi-dark');
    if (toggle.classList.contains('bi-dark')) {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    } else {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }
});




