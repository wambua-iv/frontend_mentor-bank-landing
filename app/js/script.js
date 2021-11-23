const btnHambuger = document.querySelector('#btnHambuger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade')
const body = document.querySelector('body');

console.log('shit');
btnHambuger.addEventListener("click", function(){

    console.log('open menu')
    if(header.classList.contains('open')){
        header.classList.remove('open');
        body.classList.remove('no-scroll')
        fadeElems.forEach(element =>{
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });        
        }   else{
       header.classList.add('open');
       body.classList.add('no-scroll')
       fadeElems.forEach(element => {
            element.classList.add('fade-in');
           element.classList.remove('fade-out')
        });
    }
}); 