function f1(){
   var c, d, p, t;
   c = 131;
   d=document.getElementById("num1").value;
   d= parseInt(d);
   p=document.getElementById("out");
   //t = document.getElementById("out2");
   //t.innerHTML = c;

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
