var JSname = "EcmaScript";


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
    prompt('Enter login', "");
}