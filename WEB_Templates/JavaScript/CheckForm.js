function CheckForm(form){
   var login = form.login.value;
   var password = form.password.value;
   //alert(login);
   var bad = "";
   if (login == "") {bad +="You must enter login \n";
   }
   else if (login.length <3) { bad += "Your login is short \n";
   }
   if (password == "") {bad +="You must enter password \n";
   }
   else if (password.length <6) { bad += "Your password is short \n";
   }
   if (bad !="") {
      alert(bad);
      return false;
   }  return true;

}
