let input=document.querySelectorAll("input");
let label=document.querySelectorAll('label');
let invalidEmail=document.querySelector('.invalid');
// let password=document.querySelector('');
let box=document.querySelector('.password');


let eye=document.querySelector('.eye');

let hiddenEye='<svg id="eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="grey" width="24px" height="24px"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"/></svg>';
let showEye='<svg id="eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="grey" width="24px" height="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/></svg>';

eye.innerHTML=hiddenEye;

// for auto focus on webpage load after 10ms
setTimeout(function(){
    input[0].focus();
},10)

input[0].addEventListener('focus', function(){
    label[0].className='shrink';
});

// on focus out
input[0].addEventListener('focusout', function(){
    label[0].classList.remove('shrink');
});


// input[1].addEventListener('focus', function(){
//     label[1].className='shrink';
//     box.style.border='2px solid #1a73e8';
    
// });

// // on focus out
// input[1].addEventListener('focusout', function(){
//     label[1].classList.remove('shrink');
//     box.style.border='1px solid lightgrey';
// });

box.addEventListener('click', function(e){
    console.log('box')
    input[1].focus();
    box.style.border='2px solid #1a73e8';
    label[1].className='shrink';

});
// change warning a/c to situation 
box.addEventListener('focusout', function(){
    box.style.border='1px solid lightgray';
    label[1].classList.remove('shrink');
}
)

let count=0;
let svg=document.querySelector('#eye');
svg.addEventListener('click',function(){
    console.log('click')
    input[1].focus();
    eye.innerHTML='';
    if (count==1){
        input[1].setAttribute('type', 'password');
        eye.innerHTML=hiddenEye;
        console.log('not show');
        count=0;
    }
    else if (count==0){
        input[1].setAttribute('type', 'text');
        console.log('show');
        eye.innerHTML=showEye;
        count=1;
    }

});


