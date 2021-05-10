async function login(uname, pass) {
    try {
        let res = await fetch(`https://webschoolfirstdb-47c819.appdrag.site/api/login?uname=${uname}&pass=${pass}`);

        if (!res.ok) throw res.status;

        let { Table, errorMSG } = await res.json();

        if (errorMSG) throw new Error(errorMSG);


        if (Table.length == 1) {
            return Table[0];
        } else {
            return "WORNG!";
        }
    } catch (e) {
        console.log(e);
    }



}

async function createAccount(form) {
    var result = {};
    result.success = false;
    var formData = new FormData(form);
    var formObj = {};
    for (const item of formData.entries()) {
        formObj[item[0]] = item[1];
    }
    var jsonObj = JSON.stringify(formObj)
    console.log(jsonObj)
    result.fname = formObj.fname;
    result.lname = formObj.lname;

    var settings = {
        method: "POST",
        url: "https://webschoolfirstdb-47c819.appdrag.site/api/createUser",
        data: formObj,
        processData: false,
        contentType: false,
    }
    console.log(settings)
    await $.ajax(settings).done((res => {
        var response = JSON.parse(res);
        if (response.status = "OK" && response.affectedRows > 0) {
            result.success = true;
        };
        return result;

    })).fail((res => {
        console.log(res);
        return res
    }))
}


//Promise
//.then
//async - await*/

export { login, createAccount };