function login() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var url = `https://webschoolintro-38b9c7.appdrag.site/api/client/login?email=&password=${email.value}&password=${password.value}`;
    fetch(url, { method: "get" })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            var result = data.Table;
            if (result.length == 1) {
                createUserCard(result[0]);
            } else {
                alert("Wrong Credentials!");
                email.value = "";
                password.value = "";
            }
        });
}

export {login};