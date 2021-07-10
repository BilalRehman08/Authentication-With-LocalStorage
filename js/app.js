const signup = _ => {
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

const login = _ => {
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
        location.href = "home.html";
    } else {
        message.innerHTML = "Invalid credentials";
        setTimeout(() => {
            message.innerHTML = "";
        }, 2000);
    }



}


const logout = _ => {
    var message = document.getElementById("message");
    localStorage.removeItem("user");
    message.innerHTML = "Good Bye.!";
    // clear state
    setTimeout(() => {
        location.href = "login.html";
    }, 1000);
}

const setDetails = _ => {
    var posts = document.getElementById("posts")
    var title = document.getElementById("title")
    var description = document.getElementById("description");


    if (title.value === "" && description.value === "") {
        alert("Tile or Description must be entered")
    }
    else {
        var post = document.createElement("li");
        post.id = "post";
        post.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://image.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${title.value}</h5>
    <p class="card-text">${description.value}</p>
  </div>
</div>
    `
        posts.appendChild(post);
        title.value = ''
        description.value = ''
        console.log("a");
    }

}


const getUser = _ => {
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