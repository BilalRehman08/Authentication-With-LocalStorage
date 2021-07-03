function signup() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var contact = document.getElementById("phone");
    var address = document.getElementById("address");
    var message = document.getElementById("message");

    var user = {
        name: name.value,
        email: email.value,
        password: password.value,
        contact: contact.value,
        address: address.value
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    var userIndex = users.findIndex(val => val.email.toLowerCase() === user.email.toLowerCase());

    if (userIndex === -1) {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        message.innerHTML = "SignUp Successful";

        setTimeout(() => {
            location.href = "login.html";
        }, 1000);
    }
    else {
        message.innerHTML = user.email + " use in another account";
    }


}

function login() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById("message");
    var user = {
        email: email.value,
        password: password.value,
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var currentUser = users.find(val =>
        val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password
    );

    if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
        // user login
        location.href = "dashboard.html";
    } else {
        message.innerHTML = "Invalid credentials";
        setTimeout(() => {
            message.innerHTML = "";
        }, 2000);
    }



}


function logout() {
    var message = document.getElementById("message");
    localStorage.removeItem("user");
    message.innerHTML = "Good Bye.!";
    // clear state
    setTimeout(() => {
        location.href = "login.html";
    }, 1000);
}


function getUser() {
    var detial = document.getElementById("username");
    var user = JSON.parse(localStorage.getItem("user"));
    detial.innerHTML = "Hello " + user.name;
}