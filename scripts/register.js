//get form element by id

const registerForm = document.getElementById("register");

// function registerUser() {}

//Handle form submit event
registerForm.onsubmit = function (event) {
    event.preventDefault();
  console.log(event);
};
