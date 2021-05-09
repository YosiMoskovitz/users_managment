import * as Model from "./model.js";
import * as View from "./view.js";

function init() {
    View.init();
    document.getElementById("login").addEventListener("click", login);
    document.getElementById("forgot").addEventListener("click", resetPass);
}

async function login() {
    var user_name = document.getElementById("uname");
    var password = document.getElementById("password");
    var res = await Model.login(user_name.value, password.value);
    if (!res) {
        View.myalert(res);
        email.value = "";
        password.value = "";
    }
    else{
        View.createUserCard(res);
    }
}

function resetPass() {
    View.passwordView();
    document.getElementById("loginBtn").addEventListener("click", init);
}
function register() {
    View.registerView();
    document.getElementById("loginBtn").addEventListener("click", init);

}



export { init }