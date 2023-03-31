let formSignUp = document.forms.signUp;
let formLogIn = document.forms.logIn;
let formRemindPassword = document.forms.remindPassword;
let signUpBtn = document.querySelector('#signUpBtn');
let logInBtn = document.querySelector('#logInBtn');
let forgetPasswordBtn = document.querySelector('#forgetPassword');
let backToLogInBtn = document.querySelector('#backToLogIn');


signUpBtn.addEventListener('click', function () {
  formLogIn.style.display = 'none';
  formSignUp.style.display = 'block';
  formRemindPassword.style.display = 'none';
})

logInBtn.addEventListener('click', function () {
  formLogIn.style.display = 'block';
  formSignUp.style.display = 'none';
  formRemindPassword.style.display = 'none';
})

forgetPasswordBtn.addEventListener('click', function () {
  formLogIn.style.display = 'none';
  formSignUp.style.display = 'none';
  formRemindPassword.style.display = 'block';
})

backToLogInBtn.addEventListener('click', function () {
  formLogIn.style.display = 'block';
  formSignUp.style.display = 'none';
  formRemindPassword.style.display = 'none';
})


let requiredInputs = document.querySelectorAll('.required');
requiredInputs.forEach(item => item.addEventListener('blur', function () {
  if (item.value.length == 0) {
    item.classList.add('error');  
  } else {
    item.classList.remove('error')
  }
  
}))

formSignUp.email.addEventListener('input', checkEmailValidity(formSignUp))
formLogIn.email.addEventListener('input', checkEmailValidity(formLogIn))
formRemindPassword.email.addEventListener('input', checkEmailValidity(formRemindPassword))

function checkEmailValidity(form) {
  let value = form.email.value;
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailPattern.test(value)) {
    form.email.setCustomValidity('Вы ввели некорректный адрес');
  } else {
    form.email.setCustomValidity('');

  }
}

formSignUp.passwordConfirmInput.addEventListener('input', checkPasswordValidity(formSignUp));


function checkPasswordValidity(form) {
    if (form.passwordConfirmInput.value != form.password.value) {
        form.passwordConfirmInput.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
        form.password.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
    }
    else {
        form.passwordConfirmInput.setCustomValidity(""); 
        form.password.setCustomValidity("");
    }
}

