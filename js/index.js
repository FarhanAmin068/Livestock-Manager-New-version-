
const loginButton = document.getElementById("loginButton");
const signupButton = document.getElementById("signupButton");
const loginPageURL = "login.html";
const signupPageURL = "signup.html";

loginButton.addEventListener("click", () => {
  window.location.href = loginPageURL;
});
signupButton.addEventListener("click", () => {
  window.location.href = signupPageURL;
});
