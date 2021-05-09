async function login(uname, pass) {
    try {
        let res = await fetch(`https://webschoolfirstdb-47c819.appdrag.site/api/login?uname=${uname}&pass=${pass}`);

        if (!res.ok) throw res.status;
        
        let {Table, errorMSG} = await res.json();

       if(errorMSG) throw new Error(errorMSG);


        if (Table.length == 1) {
            return Table[0];
        } else {
            return "WORNG!";
        }
    } catch (e) {
        console.log(e);
    }



}

//Promise
//.then
//async - await

export { login };