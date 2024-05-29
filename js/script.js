const Country = ['Select a country', 'India', 'Australia']

const state = [
    { country: "", state: 'Select a state' },
    { country: "India", state: 'Gujarat' },
    { country: "India", state: 'Maharashtra' },
    { country: "India", state: 'MP' },

    { country: "Australia", state: 'Tasmania' },
    { country: "Australia", state: 'Queensland' },
]


const city = [
    { state: "", city: "Select a city" },
    { state: "Gujarat", city: "Surat" },
    { state: "Gujarat", city: "Vadodara" },
    { state: "Maharashtra", city: "Mumbai" },
    { state: "Maharashtra", city: "Pune" },
    { state: "MP", city: "Indore" },
    { state: "MP", city: "Bhopal" },

    { state: "Tasmania", city: "Hobart" },
    { state: "Tasmania", city: "Burnie" },
    { state: "Queensland", city: "Brisbane" },
    { state: "Queensland", city: "Sunshine Coast" },

]


var focus1 = document.getElementById("onf1");
var focus2 = document.getElementById("onf2");
var focus3 = document.getElementById("onf3");
var focus4 = document.getElementById("onf4");
var focus5 = document.getElementById("onf5");
var focus6 = document.getElementById("onf6");
var focus7 = document.getElementById("onf7");

var fnamevalid = document.getElementById('FirstnameValid');
var lnamevalid = document.getElementById('LastnameValid');
var unamevalid = document.getElementById('UsernameValid');
var cvalid = document.getElementById('CityValid');
var zvalid = document.getElementById('ZipValid');
var idvalid = document.getElementById('IdValid')

var check = document.getElementById('Valid');
var lbl = document.getElementById('lbl')

const countryInput = document.getElementById("onf8");
const stateInput = document.getElementById("onf7");
const cityInput = document.getElementById("onf9");

var t1 = document.getElementById('t1')
var table = document.getElementById('tbl')
var bt = document.getElementById('bt')
var myid = document.getElementById('myid')

var fromdata = JSON.parse(localStorage.getItem('data')) || [];

var deletedrop = document.getElementById("Ddrop")

const onloadPage = () => {


    var store = localStorage.getItem('data');
    const user = JSON.parse(store)

    let renderOption = '';
    Country.forEach(cou => {
        renderOption += `<option value="${cou}">${cou}</option>`
    });
    countryInput.innerHTML = renderOption
    stateInput.disabled = true;
    cityInput.disabled = true;

    table.innerHTML = `
        <div>
            ${createTable(user)}
        </div>
    `

}

const onchnageCountry = () => {
    var selectedCountry = countryInput.value;

    state[0].country = selectedCountry;
    if (selectedCountry === "Select a country") {
        stateInput.disabled = true;
        cityInput.disabled = true
    } else {

        stateInput.disabled = false;
    }

    renderOption = '';
    state.filter((country) => {
        if (country.country == selectedCountry) {
            renderOption += `<option value="${country.state}">${country.state}</option>`
        }
    })
    stateInput.innerHTML = renderOption

    const countryValid = document.getElementById("countryValid");

    if (countryInput.value === "Select a country") {

        countryValid.textContent = "Please select a country";
        countryValid.style.visibility = "visible";
        stateValid.style.visibility = "hidden";
        countryInput.style.border = "1px solid red";
        console.log(countryInput.value);
        stateInput.style = null
        cityInput.style =  null
    }
    else if (countryInput.value === "") {
        console.log('$%^^&');
        countryValid.textContent = "Please select a country";
        countryValid.style.visibility = "visible";
        countryInput.style.border = "1px solid red";
    }
    else {
        countryValid.textContent = "";
        countryValid.style.visibility = "hidden";
        countryInput.style.border = "1px solid green";
        countryInput.style.outline = "none";
    }
}

const onchnageState = () => {
    var selectedState = stateInput.value;
    console.log("State change");

    city[0].state = selectedState;
    console.log(selectedState);
    if (selectedState === "Select a state") {
        cityInput.disabled = true;

    } else {

        cityInput.disabled = false;
    }



    if (selectedState !== "") {
        renderOption = '';
        city.filter((country) => {
            if (country.state == selectedState) {
                renderOption += `<option value="${country.city}">${country.city}</option>`
                console.log(country.city);
            }

        })

        console.log(renderOption);
        cityInput.innerHTML = renderOption
    }

    const stateValid = document.getElementById("stateValid");

    if (stateInput.value === "Select a state") {
        stateValid.textContent = "Please select a state";
        stateValid.style.visibility = "visible";
        cityValid.style.visibility = "hidden";
        stateInput.style.border = "1px solid red";
        cityInput.style.border = 'none'
    }
    else if (stateInput.value === "") {
        stateValid.textContent = "Please select a state";
        stateValid.style.visibility = "visible";
        stateInput.style.border = "1px solid red";
    }
    else {
        stateValid.textContent = "";
        stateValid.style.visibility = "hidden";
        stateInput.style.border = "1px solid green";
        stateInput.style.outline = "none";
    }
}

const onchnageCity = () => {
    const cityValid = document.getElementById("cityValid");


    if (cityInput.value === "Select a city") {
        cityValid.textContent = "Please select a city";
        cityValid.style.visibility = "visible";
        cityInput.style.border = "1px solid red";
    }
    else if (cityInput.value === "") {
        cityValid.textContent = "Please select a city";
        cityValid.style.visibility = "visible";
        cityInput.style.border = "1px solid red";
    }
    else {

        cityValid.textContent = "";
        cityValid.style.visibility = "hidden";
        cityInput.style.border = "1px solid green";
        cityInput.style.outline = "none";
    }
}

const validateInput = (input, validationMessageElement) => {
    if (input.value === "") {
        validationMessageElement.style.visibility = "visible";
        input.style.border = "1px solid red";
    } else {
        validationMessageElement.style.visibility = "hidden";
        input.style.border = "1px solid green";
        input.style.outline = "none";
    }
}

const data1 = () => validateInput(focus1, fnamevalid);
const data4 = () => validateInput(focus4, idvalid);
const data2 = () => {

    var v1 = focus2.value
    var r1 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!v1.match(r1)) {

        lnamevalid.style.visibility = "visible";

        focus2.style.border = "1px solid red";
    }
    else if (focus2.value == '') {
        lnamevalid.style.visibility = "visible";
        focus2.style.border = "1px solid red";
    } else {
        lnamevalid.style.visibility = "hidden";
        focus2.style.border = "1px solid green";
        focus2.style.outline = "none";
    }
}
const data3 = () => {

    var v1 = focus3.value
    var r1 = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    if (!v1.match(r1)) {

        unamevalid.style.visibility = "visible";

        focus3.style.border = "1px solid red";
    }
    else if (focus3.value == '') {
        unamevalid.style.visibility = "visible";
        focus3.style.border = "1px solid red";
    } else {
        unamevalid.style.visibility = "hidden";
        focus3.style.border = "1px solid green";
        focus3.style.outline = "none";
    }
}



const data6 = () => {

    if (!focus6.checked) {
        check.style.visibility = "visible";
        lbl.style.color = 'red';
        focus6.style.color = "red";
    } else {
        console.log('un');
        check.style.visibility = "hidden";
        focus6.style.color = "green";
        focus6.style.outline = "none";
        lbl.style.color = 'black';
    }
    console.log(focus6.checked);
    console.log(!focus.checked);

}


// const data1 = () => {
//     if (focus1.value == "") {
//         fnamevalid.style.visibility = "visible";
//         focus1.style.border = "2px solid red";
//     } else {
//         console.log("DDD");
//         fnamevalid.style.visibility = "hidden";
//         focus1.style.border = "2px solid green";
//         focus1.style.outline = "none";

//     }

// }

// const data2 = () => {
//     if (focus2.value == "") {
//         lnamevalid.style.visibility = "visible";
//         focus2.style.border = "2px solid red";
//     } else {
//         console.log("DDD");
//         lnamevalid.style.visibility = "hidden";
//         focus2.style.border = "2px solid green";
//         focus2.style.outline = "none";

//     }

// }

// const data3 = () => {
//     if (focus3.value == "") {
//         unamevalid.style.visibility = "visible";
//         focus3.style.border = "2px solid red";
//     } else {
//         unamevalid.style.visibility = "hidden";
//         focus3.style.border = "2px solid green";
//         focus3.style.outline = "none";
//     }

// }

// const data4 = () => {
//     if (focus4.value == "") {
//         cvalid.style.visibility = "visible";
//         focus4.style.border = "2px solid red";
//     } else {
//         cvalid.style.visibility = "hidden";
//         focus4.style.border = "2px solid green";
//         focus4.style.outline = "none";
//     }

// }

// const data5 = () => {
//     if (focus5.value == "") {
//         zvalid.style.visibility = "visible";
//         focus5.style.border = "2px solid red";
//     } else {
//         zvalid.style.visibility = "hidden";
//         focus5.style.border = "2px solid green";
//         focus5.style.outline = "none";
//     }

// }

// const data6 = () => {

//     if (focus6.checked == false) {
//         check.style.visibility = "visible";
//         // focus6.style.border = "2px solid red";
//     } else {
//         check.style.visibility = "hidden";
//         focus6.style.border = "2px solid green";
//         focus6.style.outline = "none";

//     }
// }

const local = () => {
    const arr =
    {
        id: focus4.value,
        name: focus1.value,
        email: focus2.value,
        mobilenumber: focus3.value,
        country: countryInput.value,
        state: stateInput.value,
        city: cityInput.value
    }

    console.log(arr);


    storeData(arr)


    var store = localStorage.getItem('data');

    const user = JSON.parse(store)

    table.innerHTML = `
        <div>
            ${createTable(user)}
        </div>
    `
}

const storeData = (arr) => {

    console.log(fromdata);

    fromdata.push(arr)

    console.log(fromdata);

    localStorage.setItem('data', JSON.stringify(fromdata));
}

const createTable = (user) => {
    return `
    <table border="" id="table">
    <div class="row">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Country</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </div>
                    <div class="col">
                        ${createTableData(user)}
                    </div>
    
</table>
    `;
};

const createTableData = (user) => {
    let html = '';
    user.forEach((user) => {
        html += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.mobilenumber}</td>
            <td>${user.country}</td>
            <td>${user.state}</td>
            <td>${user.city}</td>
            <td>
                <button type="button" onclick = "loadData(${user.id})" class= "update">Update</button>
                <button type="button" onclick = "Ddrop(${user.id})" class= "delete">Delete</button>
            </td>
        </tr>
        `;
    })
    return html;
};


const Ddrop = (id) => {
    event.preventDefault();
    deletedrop.style.visibility = "visible";
    deletedrop.style.transform = "scale(1)";
    console.log(bt);
    bt.innerHTML = `
    <button class="bt1" type="button" onclick="cancle()">Cancle</button>
    <button class="bt2" type="button" onclick="removeData(${id})">Delete</button>`
    console.log(bt);
}

const removeData = (id) => {


    var lt = JSON.parse(localStorage.getItem('data')) || [];
    event.preventDefault();
    // console.log(fromdata);
    // lt.splice(id,0);
    // var it = id.indexof()
    // console.log(it);

    let indexToRemove = lt.findIndex(obj => obj.id == id);
    if (indexToRemove !== -1) {
        lt.splice(indexToRemove, 1);
    }

    localStorage.setItem('data', JSON.stringify(lt));
    deletedrop.style.visibility = "hidden"

    console.log(lt);
    location.reload()
}

const cancle = () => {
    deletedrop.style.visibility = "hidden";
}

const loadData = (id) => {
    event.preventDefault();
    var lt = JSON.parse(localStorage.getItem('data')) || [];
    console.log(lt);
    let indexToUpdate = lt.findIndex(obj => obj.id == id);
    console.log(lt[indexToUpdate]);
    focus1.value = lt[indexToUpdate].name;
    data1()
    focus2.value = lt[indexToUpdate].email;
    data2()
    focus3.value = lt[indexToUpdate].mobilenumber;
    data3();
    focus4.value = lt[indexToUpdate].id;
    data4()
    countryInput.value = lt[indexToUpdate].country;
    onchnageCountry()
    stateInput.value = lt[indexToUpdate].state;
    onchnageState()
    console.log(stateInput.value);
    cityInput.value = lt[indexToUpdate].city;
    onchnageCity()
    focus6.checked = true
    data6()
    focus4.disabled = true

    console.log(myobj)


    var inner = `<button id="btt" onclick="update(${id})  ">update</button>`
    myid.innerHTML = inner;

    console.log(myid);






}

const update = (id) => {

    var lt = JSON.parse(localStorage.getItem('data')) || [];
    event.preventDefault();
    const arr =
    {
        id: focus4.value,
        name: focus1.value,
        email: focus2.value,
        mobilenumber: focus3.value,
        country: countryInput.value,
        state: stateInput.value,
        city: cityInput.value
    }



    console.log(lt);

    const condition = () => {

        var v1 = focus2.value
        var r1 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        var v2 = focus3.value
        var r2 = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

        if (focus1.value == "") {
            myobj.f1 = false;
            data1();
        } else {
            myobj.f1 = true;
        }

        if (focus2.value == "") {
            myobj.f2 = false;
            data2();
        }
        else if (!v1.match(r1)) {
            myobj.f2 = false;
            data2();
        }
        else {
            myobj.f2 = true;
        }

        if (focus3.value == "") {
            myobj.f3 = false;
            data3();
        }
        else if (!v2.match(r2)) {
            myobj.f3 = false;
            data3();
        }
        else {
            myobj.f3 = true;
        }

        if (focus4.value == "") {
            myobj.f4 = false;
            data4();
        } else {
            myobj.f4 = true;
        }

        // if (focus5.value == "") {
        //     data5();
        // }

        if (!focus6.checked) {
            myobj.f6 = false;
            data6();
        }
        else {
            myobj.f6 = true;
        }
        if (countryInput.value === "Select a country") {
            myobj.countryf = false;
            onchnageCountry();

        } else {
            myobj.countryf = true;
        }

        if (stateInput.value === "Select a state") {
            myobj.statef = false;

            onchnageState();
        } else {
            myobj.statef = true;
        }

        if (cityInput.value === "Select a city") {
            myobj.cityf = false;
            onchnageCity();
            console.log(myobj.cityf);

        } else {
            myobj.cityf = true;
        }

    }

    const keys = Object.values(myobj)
    console.log(myobj.cityf);

    keys.forEach((k) => {
        if (k == false) {
            condition()
        }
    })

    if (myobj.f1 == true && myobj.f2 == true && myobj.f3 == true && myobj.f4 == true && myobj.f6 == true && myobj.countryf == true && myobj.statef == true && myobj.cityf == true) {
        // local()
        // location.reload();
        myobj.f1 = false;
        myobj.f2 = false;
        myobj.f3 = false;
        myobj.f4 = false;
        myobj.f6 = false;
        myobj.countryf = false;
        myobj.statef = false;
        myobj.cityf = false;


        focus1.style = null;
        focus2.style = null;
        focus3.style = null;
        focus6.style = null;
        focus4.style = null;
        countryInput.style = null;
        stateInput.style = null;
        cityInput.style = null;

        let indexToRemove = lt.findIndex(obj => obj.id == id);
        if (indexToRemove !== -1) {
            lt.splice(indexToRemove, 1, arr);
        }

        localStorage.setItem('data', JSON.stringify(lt));
        location.reload();

    }
}

const incid = () => {
    var id = Math.floor(Math.random() * 100);
    console.log(id);
    event.preventDefault()
}

const myobj = {
    f1: false,
    f2: false,
    f3: false,
    f4: false,
    f6: false,
    countryf: false,
    statef: false,
    cityf: false
}

const sub = () => {

    event.preventDefault();

    const condition = () => {

        var v1 = focus2.value
        var r1 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        var v2 = focus3.value
        var r2 = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

        if (focus1.value == "") {
            myobj.f1 = false;
            data1();
        } else {
            myobj.f1 = true;
        }

        if (focus2.value == "") {
            myobj.f2 = false;
            data2();
        }
        else if (!v1.match(r1)) {
            myobj.f2 = false;
            data2();
        }
        else {
            myobj.f2 = true;
        }

        if (focus3.value == "") {
            myobj.f3 = false;
            data3();
        }
        else if (!v2.match(r2)) {
            myobj.f3 = false;
            data3();
        }
        else {
            myobj.f3 = true;
        }

        if (focus4.value == "") {
            myobj.f4 = false;
            data4();
        } else {
            myobj.f4 = true;
        }

        // if (focus5.value == "") {
        //     data5();
        // }

        if (!focus6.checked) {
            myobj.f6 = false;
            data6();
        }
        else {
            myobj.f6 = true;
        }
        if (countryInput.value === "") {
            myobj.countryf = false;
            onchnageCountry();
        }
        else {
            myobj.countryf = true;
        }
        if (countryInput.value === "Select a country") {
            myobj.countryf = false;
            onchnageCountry();

        } else {
            myobj.countryf = true;
        }

        if (stateInput.value === "Select a state") {
            myobj.statef = false;

            onchnageState();
        } else {
            myobj.statef = true;
        }
        if (stateInput.value === "") {
            myobj.statef = false;
            onchnageState();

        }
        else {
            myobj.statef = true;
        }

        if (cityInput.value === "Select a city") {
            myobj.cityf = false;

            onchnageCity();
        } else {
            myobj.cityf = true;
        }
        if (cityInput.value === "") {
            myobj.cityf = false;
            onchnageCity()
        }
        else {
            myobj.cityf = true;
        }
    }

    const keys = Object.values(myobj)
    console.log(keys);

    keys.forEach((k) => {
        if (k == false) {
            condition()
        }
    })


    if (myobj.f1 == true && myobj.f2 == true && myobj.f3 == true && myobj.f4 == true && myobj.f6 == true && myobj.countryf == true && myobj.statef == true && myobj.cityf == true) {
        local()
        location.reload();
        myobj.f1 = false
        myobj.f2 = false
        myobj.f3 = false
        myobj.f4 = false
        myobj.f6 = false
        myobj.countryf = false
        myobj.statef = false
        myobj.cityf = false

        console.log(myobj.f1);

        focus1.style = null;
        focus2.style = null;
        focus3.style = null;
        focus6.style = null;
        focus4.style = null;
        countryInput.style = null;
        stateInput.style = null;
        cityInput.style = null;
    }

    console.log(stateInput.value);
    console.log(cityInput.value);
}

const search = () => {

    event.preventDefault()
    var searchval = document.getElementById('searchval');
    var filter = searchval.value.toLowerCase();
    var table = document.getElementById('table');

    var tr = table.getElementsByTagName('tr');



    for (let i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName('td')[1];

        if (td) {
            let textval = td.textContent || td.innerHTML;
            if (textval.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }

    }
}










