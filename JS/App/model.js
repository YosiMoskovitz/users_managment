async function regularlogin(uname, pass) {
    try {
        let res = await fetch(`https://webschoolfirstdb-47c819.appdrag.site/api/login?uname=${uname}&pass=${pass}`);

        if (!res.ok) throw res.status;

        let { Table, errorMSG } = await res.json();

        if (errorMSG) throw new Error(errorMSG);


        if (Table.length == 1) {
            return Table[0];
        } else {
            let result = false
            return result;
        }
    } catch (e) {
        console.log(e);
    }
}

async function login(uname, pass) {
    var result = false;
    await $.get(`https://webschoolfirstdb-47c819.appdrag.site/api/login?uname=${uname}&pass=${pass}`)
        .done(res => {
            if (res.Table.length == 1) {
                result = res.Table[0];
            }
        })
        .fail(res =>
            result = res
        )
    return result;
}

async function createAccount(form) {
    var result = {};
    result.success = false;
    var formData = new FormData(form);
    var formObj = {};
    for (const item of formData.entries()) {
        formObj[item[0]] = item[1];
    }
    var emptyInputCheck = Object.keys(formObj).some((key) => {
        return formObj[key] === "";
    });
    if (!emptyInputCheck) {
        result.fname = formObj.fname;
        result.lname = formObj.lname;

        var settings = {
            method: "POST",
            url: "https://webschoolfirstdb-47c819.appdrag.site/api/createUser",
            data: formObj,
        }
        await $.ajax(settings).done((res) => {
            //var response = JSON.parse(res);
            if (res.status = "OK" && res.affectedRows > 0) {
                result.success = true;
            }
            else {
                result.success = false;
                console.log(res)
            }
        })
            .fail((res) => {
                console.log(res);
                result = res
            });
    }
    else {
        result.message = "Some of the filed are empty! Please try again."
    }
    return result;
}

async function existingUserCheck(type, user) {
    var result = false;
    await $.get(`https://webschoolfirstdb-47c819.appdrag.site/api/getUserBy${type}?${type}=${user}`)
        .done(res => {
            if (res.Table.length == 0) {
                result = true;
            }
        })
        .fail(res =>
            result = res
        )
    return result;
}


//Promise
//.then
//async - await*/

export { regularlogin, createAccount, existingUserCheck, login };