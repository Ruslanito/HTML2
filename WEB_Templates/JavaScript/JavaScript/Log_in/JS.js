// Created by Yasser Linux

var usedName = "usedName For STW"

function signUp() {
    name = document.getElementById("name").value;
    pass1 = document.getElementById("pass1").value;
    pass2 = document.getElementById("pass2").value;
    your = document.getElementById("list").value;

    if (name === "" || pass1 === "" || pass2 === "" || your === "") {
        alert("Please, Check Your Information!!");
    } else if (pass1 !== pass2){
        alert("The first and second password must be same!");
    }else if (name === usedName){
        alert("Name for other account, please use other name!");
    }else {
        document.getElementById("form").className = "form-off";
        document.getElementById("log_form").className = "log_form";
    }

}

function logIn() {
    var checkName = document.getElementById("name_l").value;
    var checkPass = document.getElementById("pass").value;

    if (checkName !== name || checkPass !== pass1) {
        alert("The Name or Password not corect!!");
    } else {
        document.getElementById("log_form").className = "log_form-off";
        document.getElementById("Home").className = "home"
        document.getElementById("face").innerHTML = name;
        document.getElementById("faceType").innerHTML = your;
    }
}

function create(){
    alert("If you create a new account, the last account will delete")
    document.getElementById("old").className = "old"
    usedName = name;
    document.getElementById("log_form").className = "log_form-off";
    document.getElementById("form").className = "form";
}

function setting(){
    alert("I'm taked a long time for this work");
    alert("If I saw people likes this work, i'll develope this part in second version");
    alert("Please, Like and commente :)")
}

function logOut(){
    document.getElementById("Home").className = "home-off"
    document.getElementById("log_form").className = "log_form";
}

function old(){
    document.getElementById("form").className = "form-off";
    document.getElementById("log_form").className = "log_form";
}
