const submitButton = document.querySelector('.create-account-button');
const form = document.querySelector('#form');
const inputs = document.querySelectorAll('input');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const passwordErrorMessage = document.querySelector('.password-error-message');

confirmPassword.addEventListener('keyup', checkPass);
passwordErrorMessage.style.display = 'none';

inputs.forEach((input)=>{
    input.addEventListener('invalid', validate);
});

function validate(){
   form.classList.add('submitted');
}

function checkPass(){
    if(password.value !== confirmPassword.value) {
        passwordErrorMessage.style.display = 'block';
    } else {
        passwordErrorMessage.style.display = 'none';
    }
}
