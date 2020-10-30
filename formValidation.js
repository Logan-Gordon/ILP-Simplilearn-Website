function validateForm() {


    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;



    var nameErr = emailErr = mobileErr = true;

    if (name == "") {
        alert("Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            alert("Please enter a valid name");
        } else {
            nameErr = false;
        }
    }

    if (email == "") {
        alert("Please enter your email");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            alert("Please enter a valid email");
        } else {
            emailErr = false;
        }
    }


    if (nameErr || emailErr == true) {
        return false;
    } else {
        alert('you have submitted the form...');
    }

}