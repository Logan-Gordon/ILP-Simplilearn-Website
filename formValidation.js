function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}

function validateForm() {


    var name = document.contact.name.value;
    var email = document.contact.email.value;
    var mobile = document.contact.mobile.value;


    var nameErr = emailErr = mobileErr = false;

    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "")
            nameErr = false;
        }
    }

    if (email == "") {
        printError("emailErr", "Please enter your email");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email");
        } else {
            printError("emailErr", "")
            emailErr = false;
        }
    }


    if (nameErr || emailErr == true) {
        return false;
    } else {
        alert('you have submitted the form...')
    }

}