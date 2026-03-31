// USER STORAGE 
// Get all users
function getUsers() {
    let users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}
// Save users
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}
//SIGN IN
function signIn() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user === "" || pass === "") {
        document.getElementById("msg").innerHTML = "Please fill all fields!";
        return;
    }
    let users = getUsers();
    let exists = users.find(u => u.username === user);

    if (exists) {
        document.getElementById("msg").innerHTML = "User already exists! Please login.";
    } else {
        users.push({ username: user, password: pass });
        saveUsers(users);

        localStorage.setItem("isLoggedIn", "true");

        document.getElementById("msg").innerHTML = "Successfully signed in!";

        // Redirect to jobs page
        setTimeout(() => {
            window.location.href = "jobsOvrvw.html";
        }, 1000);
    }
}
//  LOGIN 
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let users = getUsers();
    let validUser = users.find(u => u.username === user && u.password === pass);
    if (validUser) {
        localStorage.setItem("isLoggedIn", "true");
        document.getElementById("msg").innerHTML = "Successfully logged in!";
        // Redirect
        setTimeout(() => {
            window.location.href = "jobsOvrvw.html";
        }, 1000);
    } else {
        document.getElementById("msg").innerHTML = "Invalid credentials!";
    }
}
// HOME CHECK 
function checkLogin() {
    let status = localStorage.getItem("isLoggedIn");
    if (status === "true") {
        window.location.href = "jobsOvrvw.html";
    } else {
        document.getElementById("msg").innerHTML = "Please login first!";
    }
}
// PAGE PROTECTION
function checkAuth() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        alert("Please login first!");
        window.location.href = "login.html";
    }
}
//  LOGOUT
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "FWDprojHmPg.html";
}