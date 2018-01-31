function f1(){
   var c, d, p;
   c = 131;
   d=document.getElementById("num1").value;
   d= parseInt(d);
   p=document.getElementById("out")

   if (d==c) {
      p.innerHTML = "Угадал число";
   }
   else if (d<100) {
      p.innerHTML="Число меньше, чем нужно";
   }
   else {
      p.innerHTML="Число больше, чем нужно";
   }

}
