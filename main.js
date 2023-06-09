let formSignUp = document.forms.signUp;
let formLogIn = document.forms.logIn;
let formRemindPassword = document.forms.remindPassword;
let signUpBtn = document.querySelector('#signUpBtn');
let logInBtn = document.querySelector('#logInBtn');
let forgetPasswordBtn = document.querySelector('#forgetPassword');
let backToLogInBtn = document.querySelector('#backToLogIn');

// show and hide forms

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

// mark not filled areas


let requiredInputs = document.querySelectorAll('.required');
requiredInputs.forEach(item => item.addEventListener('blur', function () {
  const targetId = item.getAttribute('data-target');
  const targetParagraph = document.getElementById(targetId)
  if (item.value.length == 0) {
    item.classList.add('error'); 
    targetParagraph.style.display = 'block';
  } else {
    item.classList.remove('error');
    targetParagraph.style.display = 'none;'
  }  
}))



formSignUp.email.addEventListener('input', function() {
  checkEmailValidity(formSignUp);
});
formLogIn.email.addEventListener('input', function() {
  checkEmailValidity(formLogIn);
});
formRemindPassword.email.addEventListener('input', function() {
  checkEmailValidity(formRemindPassword);
});

function checkEmailValidity(form) {
  let value = form.email.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(value)) {
    form.email.setCustomValidity('Вы ввели некорректный адрес');
  } else {
    form.email.setCustomValidity('');
  }
}

formSignUp.passwordConfirmInput.addEventListener('input', function(){
  checkPasswordValidity(formSignUp)
})


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

