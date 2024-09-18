//get form element by id

const registerForm = document.querySelector("#register");
console.log(registerForm);

//Handle form submit event
registerForm.addEventListener("submit", function (event) {
event.preventDefault();

  // collect form data
  const formData = new FormData(registerForm);

  // send data to backend
  

  // Display success message to user.
  const messageH1 = document.querySelector("#message");
  messageH1.textContent = "Account registered successfully";

  // console.log(
  //   formData.get("username"),
  //   formData.get("email"),
  //   formData.get("password")
  // );
});
// registerForm.onsubmit = function (event) {
//     event.preventDefault();
//   console.log(event);
// };



// function charlotte (age) {
//   let result= age * 2;
//   return result;
// }

// charlotte(10);

// console.log(charlotte(10))

// Declare variable age
let age;

// Define square age function

function squareAge(age) {
  result = age * age;
  return result;
}

let answer = squareAge(20);
console.log(answer);
