function f3() {
   var a, b, c;
   a = document.getElementById("out");
   c = document.getElementById("out1");

   b = 0;
   while (b<50){
      a.innerHTML+=b+" ";
      b++;
   }

   var k = 0;
   do {
      c.innerHTML+=k+" "
      k++;
   } while (k<30);

}
