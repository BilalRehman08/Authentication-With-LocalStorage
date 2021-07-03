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

function setDetails() {
    var title = document.getElementById("title")
    var description = document.getElementById("description");

    var detail = {
        title: title.value,
        description: description.value
    }

    localStorage.setItem("detail", JSON.stringify(detail));
    var getTitle = document.getElementById("getTitle");
    var getdescription = document.getElementById("getDescription");
    var getdetail = JSON.parse(localStorage.getItem("detail"));


    getTitle.innerHTML = "Title: " + getdetail.title;
    getdescription.innerHTML = "Description: " + getdetail.description;

}





function getUser() {
    var getname = document.getElementById("getname");
    var user = JSON.parse(localStorage.getItem("user"));
    getname.innerHTML = "Name: " + user.name;

    var getemail = document.getElementById("getemail");
    var user = JSON.parse(localStorage.getItem("user"));
    getemail.innerHTML = "Email: " + user.email;

    var getphone = document.getElementById("getphone");
    var user = JSON.parse(localStorage.getItem("user"));
    getphone.innerHTML = "Phone: " + user.contact;

    var getaddress = document.getElementById("getaddress");
    var user = JSON.parse(localStorage.getItem("user"));
    getaddress.innerHTML = "address: " + user.address;





}