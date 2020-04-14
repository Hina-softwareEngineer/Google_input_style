let input=document.querySelector("input");
let label=document.querySelector('label');

// for auto focus on webpage load after 10ms
setTimeout(function(){
    input.focus();
},10)

// on focus
input.addEventListener('focus', function(){
    label.className='shrink';
});

// on focus out
input.addEventListener('focusout', function(){
    label.classList.remove('shrink');
});