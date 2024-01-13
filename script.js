let pass=document.querySelector('#password');
let conPass=document.querySelector('#confirm-password');
let passSpan=document.querySelector('.pass-match');
let btn=document.querySelector('button');

conPass.addEventListener('keyup', ()=>{
    pass.value === conPass.value ? passSpan.textContent='' : passSpan.textContent='password doesn\'t match';
})

console.log(pass);
console.log(conPass);
console.log(passSpan);
// btn.addEventListener('invalid',()=>{

// })