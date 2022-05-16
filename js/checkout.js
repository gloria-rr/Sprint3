// window.onload = iniciar();
//   document.getElementById("btn").addEventListenet('click', validar, false);


// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var name = document.querySelector(".name");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");
var errorEmail = document.getElementById("errorEmail");
// var form_correcto = true

const expresionEmail = /\w+@\w+\.+[a-z]/;
const numerico = /^[0-9]+$/;
const texto = /^[a-zA-Z]+$/;
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
// Exercise 6
function validate() {
 
    'use strict'
   
    var forms = document.querySelectorAll('.needs-validation')
    
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
 
          form.classList.add('was-validated')
        }, false)
      })
  }












