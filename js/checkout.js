window.onload = iniciar();
  document.getElementById("btn").addEventListenet('click', validar, false);



// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var name = document.querySelector(".name");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");
var errorEmail = document.getElementById("errorEmail");
var form_correcto = true
// Exercise 6
function validate() {
  const expresionEmail = /\w+@\w+\.+[a-z]/;
  const numerico = /^[0-9]+$/;
  const texto = /^[a-zA-Z]+$/;
  // Validate fields entered by the user: name, phone, password, and email
  if (fName === "" || fLastN === "" || fPhone === "" || fPassword === "" || fEmail == "") {
    form_correcto = false;
  } else if (fName.value == null || fName.value.length < 3) {
    form_correcto = false;
    alert(errorName);
  } else if (fLastN.value == null || fLastN.value.length < 3) {
    form_correcto = false;
    alert(errorName);
  } else if (isNan(fPhone)) {
    form_correcto = false;
    alert(errorPhone);
  } else if (!expresionEmail.test(fEmail)) {
    form_correcto = false;
    alert(errorEmail);
  } else if (!(numerico.test(fPassword) && texto.test(fPassword))) {
    form_correcto = false;
    alert(errorPassword);
  } else {
    return true;
  }
}