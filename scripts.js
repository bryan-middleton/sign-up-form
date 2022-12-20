const createButton = document.querySelector('#create');
const form = document.querySelector('form');
const password = document.getElementById('#password');
const confPassword = document.getElementById('#conf-password');
const passwordError = document.querySelector('#password + span.error');

confPassword.addEventListener('input', (event)=>{
    if(confPassword.textContent!== password.textContent){
        passwordError.textContent="passwords do not match";
    }
});