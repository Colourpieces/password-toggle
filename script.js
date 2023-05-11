"use strict"; /* Prüfung von Java Script */

const myButton = document.querySelector("button");
const inputfield = document.querySelector("input");

myButton.addEventListener("click", () => {
  console.log(inputfield.value);
  if (inputfield.type === "text") {
    inputfield.type = "password";
    myButton.innerText = "Show password";
  } else {
    inputfield.type = "text";
    myButton.innerText = "Hide password";
  }
});
