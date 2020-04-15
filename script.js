let input=document.querySelectorAll("input");
let label=document.querySelectorAll('label');
let invalidEmail=document.querySelector('.invalid');
// let password=document.querySelector('');


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


input[1].addEventListener('focus', function(){
    label[1].className='shrink';
});

// on focus out
input[1].addEventListener('focusout', function(){
    label[1].classList.remove('shrink');
});
// change warning a/c to situation 


