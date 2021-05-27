
var start = document.getElementById("start");
var main = null;

function init() {
    start.innerHTML = `
  <div class="container">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Salesman managment website! </h1>
                <p class="lead">This project will use everything we larend so far with Mr. Meir Sabbah on JS.
                </p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm" id="main">
                <h2>Please Login</h2>
                <div class="form-group">
                    <label for="uname">User name</label>
                    <input type="text" class="form-control" id="uname" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                </div>
                <button id="login" type="submit" class="btn btn-primary btn-block">Login</button>
                <div style="margin-top: 10px">
                    <span id="forgot" class="badge badge-light smallBtn">Forgot Your Password?</span>
                    <span id="register" class="badge badge-light smallBtn">Register</span>
                </div>
            </div>

            <div class="col-sm"></div>
        </div>
    </div>
  `
    main = document.getElementById("main");
}

/* //this is a func for registerig */

function registerView() {
    main = document.getElementById("main");
    main.innerHTML = `
    <form id="register" method="post">
             <h2>Please Register</h2>
        <div class="form-group">
            <label for="username">User name</label>
            <input type="text" class="form-control toCheck" id="uname" aria-describedby="emailHelp" name="uname"  />
            <div id="unameInfo" class="form-text inputlInfo"></div>
        </div>
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp" name="fname"  />
        </div>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" aria-describedby="emailHelp" name="lname"  />
        </div>
        <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control toCheck" id="email" aria-describedby="emailHelp" name="email" >
        <div id="emailInfo" class="form-text inputlInfo" inputHelp></div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="pass"  />
        </div>
        <button type="submit" class="btn btn-primary btn-block">
            Register
        </button>
        <div style="margin-top: 10px; text-align: center">
            <span id="loginBtn" class="badge badge-light">Already Have an Account?</span>
        </div>
    </form>
`;
}
/**/

function loginView() {

    main.innerHTML = `
    <div class="col-sm" id="main">
  <h2>Please Login</h2>
  <div class="form-group">
      <label for="email">Email address</label>
      <input type="text" class="form-control" id="uname" aria-describedby="emailHelp" />
  </div>
  <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" />
  </div>
  <button type="submit" class="btn btn-primary btn-block">Login</button>
  <div style="margin-top: 10px">
      <span id="forgot" class="badge badge-light">Forgot Your Password?</span>
  </div>
</div>
  `;
}

function pinCodeView() {
    $('link[href="css/style.css"]').attr('href', 'css/pin_style.css');
    start.innerHTML = `<div class="main">
    <div id="pin">
      <div class="dots">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <p>Enter the password</p>
      <div class="numbers">
        <div class="number" id="1">1</div>
        <div class="number" id="2">2</div>
        <div class="number" id="3">3</div>
        <div class="number" id="4">4</div>
        <div class="number" id="5">5</div>
        <div class="number" id="6">6</div>
        <div class="number" id="7">7</div>
        <div class="number" id="8">8</div>
        <div class="number" id="9">9</div>
        <div class="key" >*</div>
        <div class="number" id="0">0</div>
        <div class="key">#</div>
      </div>
    </div>
  </div>
    `;
}

function passwordView() {
    main.innerHTML = `
    <div class="col-sm" id="main">
    <h2>Password Reset</h2>
    <div class="form-group">
        <label for="email">User name</label>
        <input type="text" class="form-control" id="uname" aria-describedby="emailHelp" />
    </div>
    <button type="submit" class="btn btn-primary btn-block">Reset</button>
    <div class="backToHome">
        <span id="loginBtn" class="badge badge-light">Back to Login</span>
    </div>
</div>`
}
/*there is a diffrent func for that now
function createUserCard(data) {
    var html = `
              <h1>Welcome, ${data.fname} " " ${data.lname}!</h1>
              <div class="card" style="width: 18rem">
                <img
                  class="card-img-top"
                  src="${data.img}"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">${data.fname} ${data.lname}</h5>
                  <p class="card-text">${data.uname}</p>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" value="${data.pass}" class="form-control" id="newPassword" />
                  </div>
                  <button class="btn btn-primary">Edit Password</button>
                </div>
              </div>`;
    main.innerHTML = html;
}
*/
function userView(userdetails) {
    $('link[href="css/pin_style.css"]').attr('href', 'css/style.css');
    //init();
    var html = `
    <div class="container">
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Salesman managment website! </h1>
            <p class="lead">This project will use everything we larend so far with Mr. Meir Sabbah on JS.
            </p>
        </div>
    </div>
    <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm" id="main">
        <h1>Welcome!,</br> ${userdetails.fname}  ${userdetails.lname}.</h1>
        <div class="card" style="width: 18rem">
            <button class="btn btn-primary">Edit Password</button>
          </div>
        </div>
        <div class="col-sm"></div>
    </div>
</div>`;
    start.innerHTML = html;
}

function userVeri(veriObj) {
    $(`#${veriObj.type}Info`).html(veriObj.message);
    if (veriObj.bool) {
        veriObj.input.style.border = "2px green solid";
    }
    else {
        veriObj.input.style.border = "2px red solid";
        //veriObj.input.value = "";
    }
}
function ErrorMessages(message) {
    var errorDiv = `<div id="errormsg" class="form-text">${message}</div>`
    $("#main").append(errorDiv);
}


export { init, loginView, passwordView, registerView, userView, userVeri, ErrorMessages, pinCodeView };