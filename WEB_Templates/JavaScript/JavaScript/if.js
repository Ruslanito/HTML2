var a, b;
a=8;
b=8;
if (a>b) {
   alert("a>b");
}  else if (a==b) {
   alert("a=b");
} else {
   alert("a<b");
}

function f1(){
   var c, d, p;
   c = 100;
   d=document.getElementById("num1").value;
   d= parseInt(d);
   p=document.getElementById("out")

   if (d==c) {
      p.innerHTML = "Число равно 100";
   }
   else if (d<100) {
      p.innerHTML="Число меньше 100";
   }
   else {
      p.innerHTML="Число больше 100";
   }

}
