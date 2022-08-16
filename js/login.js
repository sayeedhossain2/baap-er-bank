// step-1: add click even handeler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step-2: get the email address inside the email input field
  // always remember to use .value to get to text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  // step-3: get password
  //  3.a: set id on the html element
  // 3.b: get the element
  // 3.c: get the value from the element
  const userPassword = document.getElementById("user-password");
  const password = userPassword.value;

  // Danger: do not verify email password on the clint side
  // step-4: verify email and password and check whether valid user or not
  if (email === "sayeed@gmail.com" && password === "sayeed") {
    // for go to another html page
    window.location.href = "bank.html";
  } else {
    alert("Tmi password vulo geco, tomare sudhu pitanor dorkar");
  }
});