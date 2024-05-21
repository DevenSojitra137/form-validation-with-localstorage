const Country = ['Select a country', 'country1', 'country2']

const state = [
    { country: "", state: 'Select a state' },
    { country: "country1", state: 'state1' },
    { country: "country1", state: 'state2' },
    { country: "country1", state: 'state3' },
    { country: "country2", state: 'state4' },
    { country: "country2", state: 'state5' },
    { country: "country2", state: 'state6' },
]


const city = [
    { state: "", city: "Select a city" },
    { state: "state1", city: "city1" },
    { state: "state1", city: "city2" },
    { state: "state2", city: "city3" },
    { state: "state2", city: "city4" },
    { state: "state3", city: "city5" },
    { state: "state3", city: "city6" },
    { state: "state4", city: "city7" },
    { state: "state4", city: "city8" },
    { state: "state5", city: "city9" },
    { state: "state5", city: "city10" },
    { state: "state6", city: "city11" },
    { state: "state6", city: "city12" },

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
        countryInput.style.border = "1px solid red";

        stateInput.style.border = 'none'
        cityInput.style.border = 'none'
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

    city[0].state = selectedState;
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
            }
        })
        cityInput.innerHTML = renderOption
    }

    const stateValid = document.getElementById("stateValid");

    if (stateInput.value === "Select a state") {
        stateValid.textContent = "Please select a state";
        stateValid.style.visibility = "visible";
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

// const focusOn1 = () => {


//         focus1.style.boxShadow = "0 0 0 .25rem rgba(13,110,253,.25)";
//         focus1.style.bordercolor = "#86b7fe";




// }

// const focusOn2 = () => {

//     if (focus2.focus) {
//         focus2.style.boxShadow = "0 0 0 .25rem rgba(13,110,253,.25)";
//         focus2.style.bordercolor = "#86b7fe";
//     }
// }

// const focusOn3 = () => {

//     if (focus3.focus) {
//         focus3.style.boxShadow = "0 0 0 .25rem rgba(13,110,253,.25)";
//         focus3.style.bordercolor = "#86b7fe";
//     }
// }

// const focusOn4 = () => {

//     if (focus4.focus) {
//         focus4.style.boxShadow = "0 0 0 .25rem rgba(13,110,253,.25)";
//         focus4.style.bordercolor = "#86b7fe";
//     }
// }

// const focusOn5 = () => {

//     if (focus5.focus) {
//         focus5.style.boxShadow = "0 0 0 .25rem rgba(13,110,253,.25)";
//         focus5.style.bordercolor = "#86b7fe";
//     }
// }

// const focusOn6 = () => {

//     if (focus6.focus) {
//         focus6.style.boxShadow = "0 0 0 .25rem rgba(13,110,253,.25)";
//         focus6.style.bordercolor = "#86b7fe";
//     }
// }

const focusOn = (element) => {
    console.log(element);
    var focus = document.getElementById(element);

    focus.style.boxShadow = "0 0 0 .25rem rgba(13,110,253,.25)";
    focus.style.borderColor = "#86b7fe";
}





const focusOut = (element) => {

    console.log(element);
    var focus = document.getElementById(element);

    focus.style.boxShadow = "none";
    focus.style.borderColor = "none";
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
    var r1 = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
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
                <button type="button" onclick = "Ddrop(${user.id})">Delete</button>
                <button type="button" onclick = "loadData(${user.id})">Update</button>
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
    onloadPage();
}

const cancle = () => {
    deletedrop.style.visibility = "hidden";
}

const loadData = (id) => {
    event.preventDefault();
    var lt = JSON.parse(localStorage.getItem('data')) || [];
    console.log(lt);  
    let indexToUpdate = lt.findIndex(obj => obj.id == id);
    focus1.value = lt[indexToUpdate].name;
    focus2.value = lt[indexToUpdate].email;
    focus3.value = lt[indexToUpdate].mobilenumber;
    focus4.value = lt[indexToUpdate].id;
    countryInput.value = lt[indexToUpdate].country;
    stateInput.value = lt[indexToUpdate].state;
    cityInput.value = lt[indexToUpdate].city;

    
    var inner = `<button id="btt" onclick="update(${id})">update</button>`
    myid.innerHTML = inner;

    stateInput.disabled = false;
    cityInput.disabled = false;

    
}

const update = (id) => {
    
    var lt = JSON.parse(localStorage.getItem('data')) || [];
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

    let indexToRemove = lt.findIndex(obj => obj.id == id);
    if (indexToRemove !== -1) {
        lt.splice(indexToRemove, 1,arr);
    }

    localStorage.setItem('data', JSON.stringify(lt));
    onloadPage();
}

const incid = () => {
    return Math.random().toString(36).substr(2, 18);
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
        document.getElementById('myform').reset();
        myobj.f1 = false
        myobj.f2 = false
        myobj.f3 = false
        // myobj.f4 = false
        myobj.f6 = false
        myobj.countryf = false
        myobj.statef = false
        myobj.cityf = false

        focus1.style = null;
        focus2.style = null;
        focus3.style = null;
        focus6.style = null;
        focus4.style = null;
        countryInput.style = null;
        stateInput.style = null;
        cityInput.style = null;
    }









}










