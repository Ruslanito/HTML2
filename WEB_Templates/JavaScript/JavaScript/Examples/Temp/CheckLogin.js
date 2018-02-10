var JSname = "EcmaScript";
var Login = "Admin";

function check() {
    alert("script 'check' is running...");
    var name = prompt('Enter oficial JS name', "");

    if (name != JSname) {
        alert("Sorry, try again")
    } else {
        alert("You are right")
    }
}

function checkLog() {
    alert("script 'checkLog' is running...");
    var userName = prompt('Enter user name', '');
    if (userName = Login) {
        var pass = prompt('Enter password', '')
        if (pass == 'Black') {
            alert('Welcome!');
        } else if (pass == null) {
            alert('No enter');
        } else {
            alert('Wrong Password');
        }
    } else if (userName = null) {
        alert('No enter');
    } else {
        alert('Who are you?')
    }
}