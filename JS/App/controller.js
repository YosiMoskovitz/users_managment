import * as Model from "./model.js";
import * as View from "./view.js";
import * as PinCode from "../Sevrices/pincode.js";

function init() {
    View.init();
    $("#login").click(login);

    $("#forgot").click(() => {
        View.passwordView();
        $("#loginBtn").click(init);
    });

    $("#register").click(register);
}

function login() {
    var user_name = document.getElementById("uname");
    View.pinCodeView();
    PinCode.init(user_name.value).then(View.userView);
}


function register() {
    View.registerView();
    $("#loginBtn").click(init);
    $("#register").submit(async function (e) {
        e.preventDefault();
        //check if any input has a red border - wich means there is a problem with the input and should not continue.
        var InputHelpers = document.querySelectorAll('input');
        var checkInput =  Object.keys(InputHelpers).some((input) =>{
            return InputHelpers[input].style.border === "2px solid red";
        });
        //creating the account with the model func.
        if (!checkInput) {
            var res = await Model.createAccount(this);
            if (res.success) {
                View.userView(res)
            }
            else {
                View.ErrorMessages(res.message);
                $("input").change(() => {
                    $("#errormsg").remove();
                })
            }
        }
        else{
            View.ErrorMessages("Something is WRONG.");
            $("input").change(() => {
                $("#errormsg").remove();
            })
        }

        
    });
    $(".toCheck").change(async function () {
        var InputObj = { bool: false, input: this, type: this.id }
        if (this.id == "email") {
            InputObj.message = infoMessages.emailmessages.emailInUse;
        }
        else InputObj.message = infoMessages.usernamemessages.usernameInUse;
        var result = await Model.existingUserCheck(this.id, this.value);
        if (result) {
            InputObj.bool = true;
            if (this.id == "email") {
                InputObj.message = infoMessages.emailmessages.emailNOTInUse;
            }
            else InputObj.message = infoMessages.usernamemessages.usernameNOTInUse;
        }

        View.userVeri(InputObj);
        //if email exist listen for login click on email Helper
        $("#loginBtn").click(init);
    });
}

var infoMessages = {
    emailmessages: {
        emailInUse: `Email address linked to an existin account. want to <span id="loginBtn" style="cursor: pointer"><u>Login</u></span>?`,
        emailNOTInUse: "Email not in use.",
    },
    usernamemessages: {

        usernameInUse: "This user name is alerdy taken. Please try somthing else.",
        usernameNOTInUse: "Looks Good."
    }
}





export { init }