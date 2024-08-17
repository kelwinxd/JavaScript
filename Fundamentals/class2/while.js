let loggedIn = false;
let username;
let password;

while (!loggedIn) {
    username = window.prompt("Your Username: ");
    password = window.prompt("Password: ");

    if (username === "kelwin" && password === "123") {
        loggedIn = true;
        console.log('You logged in');
    } else {
        console.log('Invalid data');
    }
}
