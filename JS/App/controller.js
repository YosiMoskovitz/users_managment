import * as Model from "./model.js";
import * as View from "./view.js";

function init() {
    View.init();
    $("#login").click(login);
    $("#forgot").click(resetPass);
    $("#register").click(register);
}

async function login() {
    var user_name = document.getElementById("uname");
    var password = document.getElementById("password");
    var res = await Model.login(user_name.value, password.value);
    if (!res) {
        View.ErrorMessages(res);
        email.value = "";
        password.value = "";
    }
    else{
        View.userView(res);
    }
}

function resetPass() {
    View.passwordView();
    document.getElementById("loginBtn").addEventListener("click", init);
}


function register() {
    View.registerView();
    document.getElementById("loginBtn").addEventListener("click", init);
    document.getElementById("register").addEventListener("submit", async function (e){
        e.preventDefault();
        var res = await Model.createAccount(this);
       if (res.success) {
           View.userView(res)
       }
        else{
            View.ErrorMessages(res.message);
            $("input").change(()=>{
                $("#errormsg").remove()
            })
        }
    });
    $("#email").change(async function () {
        var result = await Model.isEmailFree(this.value);
        var emailInputObj = {bool: false, input: this, message:"Email alerdy exist."}
        if (result) {
            emailInputObj.bool = true;
            emailInputObj.message = "Email not in use."
        }
        View.emailVeri(emailInputObj);
    });
}





export { init }