var c, temp-out;
c = Math.floor((Math.random()*10)+1);
temp-out = document.getElementById("temp-out");
temp-out.innerHTML = c;

function f1(){
   var d, p;

   d=document.getElementById("num1").value;
   d= parseInt(d);
   p=document.getElementById("out")

   if (d==c) {
      p.innerHTML = "Угадал число";
   }
   else if (d<c) {
      p.innerHTML="Число меньше, чем нужно";
   }
   else {
      p.innerHTML="Число больше, чем нужно";
   }

}
