function check() {
    var JSname = "EcmaScript";
    alert("script 'check' is running...");
    var name = prompt('Enter oficial JS name', "");

    if (name != JSname) {
        alert("Sorry, try again")
    } else {
        alert("You are right")
    }
}

function checkLog() {
    var Login = "Admin";
    alert("script 'checkLog' is running...");

    if (userName = Login) {
        var pass = prompt('Password', '')
        if (pass == 'Black') {
            alert('Welcome!');
        } else if (pass == null) {
            alert('No enter');
        } else {
            alert('Wrong Password');
        } else if (userName = null) {
            alert('No enter');
        } else {
            alert('Who are you?')
        }

    }
}