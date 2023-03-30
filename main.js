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
})

logInBtn.addEventListener('click', function () {
  formLogIn.style.display = 'block';
  formSignUp.style.display = 'none';
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

formSignUp.email.addEventListener('input', checkEmailValidity)

function checkEmailValidity(e) {
  let value = formSignUp.email.value;
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailPattern.test(value)) {
    formSignUp.email.setCustomValidity('Вы ввели некорректный адрес');
  } else {
    formSignUp.email.setCustomValidity('');

  }
}

formSignUp.passwordConfirmInput.addEventListener('input', checkPasswordValidity);

function checkPasswordValidity() {
    if (formSignUp.passwordConfirmInput.value != formSignUp.password.value) {
        formSignUp.passwordConfirmInput.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
        formSignUp.password.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
    }
    else {
        formSignUp.passwordConfirmInput.setCustomValidity(""); 
        formSignUp.password.setCustomValidity("");
    }
}


