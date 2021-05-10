import * as Model from "./model.js";
import * as View from "./view.js";

function init() {
    View.init();
    $("#login").click(login);
    $("#forgot").click(resetPass);
    $("#register").click(registration);
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


function registration() {
    View.registerView();
    document.getElementById("loginBtn").addEventListener("click", init);
    document.getElementById("register").addEventListener("submit", async function (e){
        e.preventDefault();
        var res = await Model.createAccount(this);
        console.log(res)
       if (res.success) {
           View.userView(res)
       }
        else{
            console.log("somthing happend!")
        }
    });
}

async function register(){
    
}



export { init }