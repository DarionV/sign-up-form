const submitButton = document.querySelector('.create-account-button');
const form = document.querySelector('#form');
const inputs = document.querySelectorAll('input');

inputs.forEach((input)=>{
    input.addEventListener('invalid', validate);
});

function validate(){
   form.classList.add('submitted');
}