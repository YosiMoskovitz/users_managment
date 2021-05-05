
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
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" />
                </div>
                <button id="login" type="submit" class="btn btn-primary btn-block">Login</button>
                <div style="margin-top: 10px">
                    <span id="forgot" class="badge badge-light smallBtn">Forgot Your Password?</span>
                    <span id="register"class="badge badge-light smallBtn">Not Registered Yet?</span>
                </div>
            </div>

            <div class="col-sm"></div>
        </div>
    </div>
  `
   main = document.getElementById("main");
}

function registerView() {
    main = document.getElementById("main");
    main.innerHTML = `
                       <h2>Please Register</h2>
    <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp" />
    </div>
    <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" aria-describedby="emailHelp" />
    </div>
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" />
    </div>
    <button type="submit" class="btn btn-primary btn-block">
        Register
    </button>
    <div style="margin-top: 10px; text-align: center">
        <span id="loginBtn" class="badge badge-light">Already Have an Account?</span>
    </div>
`;
}

function loginView() {
    
    main.innerHTML = `
    <div class="col-sm" id="main">
  <h2>Please Login</h2>
  <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
  </div>
  <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" />
  </div>
  <button type="submit" class="btn btn-primary btn-block">Login</button>
  <div style="margin-top: 10px">
      <span id="forgot" class="badge badge-light smallBtn">Forgot Your Password?</span>
      <span id="loginBtn" class="badge badge-light">Not Registered Yet?</span>
  </div>
</div>
  `;
}

function passwordView() {
    main.innerHTML = `
    <div class="col-sm" id="main">
    <h2>Password Reset</h2>
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
    </div>
    <button type="submit" class="btn btn-primary btn-block">Reset</button>
    <div class="backToHome">
        <span id="loginBtn" class="badge badge-light">Back to Login</span>
    </div>
</div>`;
}

function createUserCard(data) {
    var html = `
              <h1>Welcome, ${data.first_name}</h1>
              <div class="card" style="width: 18rem">
                <img
                  class="card-img-top"
                  src="${data.image}"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">${data.first_name} ${data.last_name}</h5>
                  <p class="card-text">${data.email}</p>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" value="${data.password}" class="form-control" id="newPassword" />
                  </div>
                  <button class="btn btn-primary">Edit Password</button>
                </div>
              </div>`;
    main.innerHTML = html;
}

export {init, registerView, loginView, passwordView, createUserCard};