const loginForm = document.querySelector("#login");
console.log(loginForm);

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // collect form data
  const formData = new FormData(loginForm);

  //   Display success message to user
  const successMsg = document.querySelector("#msg");
  successMsg.textContent = "Login successful";
});

// Write Full name function.

// let fname = "";
// let lname = "";

// function fullname(fname, lname) {
//   //   let bothNames = fname + " " + lname;
//   return `${fname} ${lname}`;
// }

// let result = fullname("james", "apedoe");

// console.log(fullname(result));
