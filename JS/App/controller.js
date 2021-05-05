import * as Model from "./model.js"; 
import * as View from "./view.js";

function init() {
    View.init();
    document.getElementById("login").addEventListener("click", login);
    document.getElementById("forgot").addEventListener("click", resetPass);
    document.getElementById("register").addEventListener("click", register);
}

function login() {
    var email = document.getElementById("email"); 
    var password = document.getElementById("password");
}

function resetPass(){
    View.passwordView();
    document.getElementById("loginBtn").addEventListener("click", init);
}
function register(){
    View.registerView();
    document.getElementById("loginBtn").addEventListener("click", init);
}



export {init}