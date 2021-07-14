const callbackForm = document.querySelector('.callback-form-container');
callbackForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let hasError = false;

    if (!userName.value.trim()) {
        userName.classList.add('callback-input-form-error');
      hasError=true;
    } else {
       userName.classList.remove('callback-input-form-error'); 
   }

    if (!userEmail.value.trim() || !isEmailValid(userEmail.value)) {
        userEmail.classList.add('callback-input-form-error');
         hasError=true;
    } else {
       userEmail.classList.remove('callback-input-form-error'); 
   }