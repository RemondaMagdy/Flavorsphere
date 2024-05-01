
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
    window.location.href='#order';
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
