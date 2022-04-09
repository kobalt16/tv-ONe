let checkbox = document.querySelector('.checkbox');
let check = document.querySelector('.check');
let bodyColor = document.querySelector('body');

checkbox.addEventListener('click', function (){
    checkbox.classList.toggle('onActive');
    check.classList.toggle('onActive');
    bodyColor.classList.toggle('onActive');
})