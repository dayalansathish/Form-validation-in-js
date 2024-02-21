const form = document.querySelector('#form')
const firstName = document.querySelector('#fName')
const lastName = document.querySelector('#lName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')

form.addEventListener('submit', (e) => {

    if (!validateInputs()) {
        e.preventDefault();

    } else {
        console.log(userData)
        addData();
        document.querySelector('#form').reset()
    
    }
})

function validateInputs() {
    const firstnameValue = firstName.value.trim()
    const lastnameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()
    let success = true

    if (firstnameValue === '') {
        success = false
        setError(firstName, 'FirstName Required')
    } else if (firstnameValue.length < 3) {
        success = false
        setError(firstName, 'FirstName along 3 characters')
    }
    else {
        setSuccess(firstName)
    }

    if (lastnameValue === '') {
        success = false
        setError(lastName, 'LastName Required')
    } else {
        setSuccess(lastName)
    }

    if (emailValue === '') {
        success = false
        setError(email, 'Email Required')
    } else if (!checkEmail(emailValue)) {
        success = false
        setError(email, 'Invalid Email')
    } else {
        setSuccess(email)
    }

    if (passwordValue === '') {
        success = false
        setError(password, 'Password Required')
    } else if (passwordValue.length < 8) {
        success = false
        setError(password, 'Password must be atleast 8 characters')
    } else {
        setSuccess(password)
    }

    if (confirmPasswordValue === '') {
        success = false
        setError(confirmPassword, 'ConfirmPassword Required')
    } else if (confirmPasswordValue != passwordValue) {
        success = false
        setError(confirmPassword, 'confirmPassword not match')
    } else {
        setSuccess(confirmPassword)
    }

    return success;


}

function setError(element, message) {
    const inputAll = element.parentElement;
    const errorElement = inputAll.querySelector('.error')

    errorElement.innerText = message;
    inputAll.classList.add('error')
    inputAll.classList.remove('success')
}

function setSuccess(element) {
    const inputAll = element.parentElement;
    const errorElement = inputAll.querySelector('.error')

    errorElement.innerText = "";
    inputAll.classList.add('success')
    inputAll.classList.remove('error')
}


// function AvoidSpace(event) {
//     var k = event ? event.which : window.event.keycode
//     if (k == 32)
//         return false;
// }

form.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        e.preventDefault();
    }
})

firstName.addEventListener('keydown', function (e) {
    var charCode = e.which
    if (charCode >= 48 && charCode <= 57) {
        e.preventDefault()
    }
})
firstName.addEventListener('keydown', function (e) {
    var charCode = e.which
    if (charCode >= 96 && charCode <= 105) {
        e.preventDefault()
    }
})

const checkEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}


//-------------------------handle change---------------------------

const userData = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const handleChange = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.name)
    userData[e.target.name] = e.target.value
    // console.log(userData)
}
const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData)
}


form.addEventListener('change', handleChange);
form.addEventListener('submit', handleSubmit);

// Add form data in table
function addData() {

    //get input values
    var firstName = document.getElementById('fName').value
    var lastName = document.getElementById('lName').value
    var Email = document.getElementById('email').value
    var Pwd = document.getElementById('password').value
    var cPwd = document.getElementById('confirmPassword').value

    //create a row
    var newRow = document.createElement('tr')

    //create cells for table
    var firstNameCell = document.createElement('td')
    var lastNameCell = document.createElement('td')
    var EmailCell = document.createElement('td')
    var PwdCell = document.createElement('td')
    var cPwdCell = document.createElement('td')

    // Populate cells with input values
    firstNameCell.textContent = firstName;
    lastNameCell.textContent = lastName;
    EmailCell.textContent = Email;
    PwdCell.textContent = Pwd;
    cPwdCell.textContent = cPwd;

    // Append cells to the row
    newRow.appendChild(firstNameCell);
    newRow.appendChild(lastNameCell);
    newRow.appendChild(EmailCell);
    newRow.appendChild(PwdCell);
    newRow.appendChild(cPwdCell);

    //append row to the table
    document.getElementById('tableData').getElementsByTagName('tbody')[0].appendChild(newRow);
}






// const tableBody = document.querySelector('#tableData tbody');

// // Add submit event listener to the form
// form.addEventListener('submit', function (event) {
//     // Prevent form submission
//     event.preventDefault();

//     // Get input values
//     const firstName = document.getElementById("fName").value;
//     const lastName = document.getElementById("lName").value;
//     const Email = document.getElementById('email').value;
//     const Pwd = document.getElementById('password').value;
//     const cPwd = document.getElementById('confirmPassword').value;
//     // Create a new row
//     const newRow = document.createElement("tr");

//     // Create cells for the row
//     const firstNameCell = document.createElement("td");
//     const lastNameCell = document.createElement("td");
//     const EmailCell = document.createElement('td')
//     const PwdCell = document.createElement('td')
//     const cPwdCell = document.createElement('td')

//     // Populate cells with input values
//     firstNameCell.textContent = firstName;
//     lastNameCell.textContent = lastName;
//     EmailCell.textContent = Email;
//     PwdCell.textContent = Pwd;
//     cPwdCell.textContent = cPwd;

//     // Append cells to the row
//     newRow.appendChild(firstNameCell);
//     newRow.appendChild(lastNameCell);
//     newRow.appendChild(EmailCell);
//     newRow.appendChild(PwdCell);
//     newRow.appendChild(cPwdCell);

//     // Append row to the table
//     tableBody.appendChild(newRow);

//     // Clear input fields after adding data
//     //   document.getElementById("name").value = "";
//     //   document.getElementById("age").value = "";
// });