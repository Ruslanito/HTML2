function out() {
   var p;
   p= document.getElementById("out1");
   //p.innerHTML = "Hello!";
   //дописать информацию
   p.innerHTML +=" <b> Hello</b> ";
   //p.innerHTML=p.innerHTML+" Hello"
}

function outnew(){
   var p =document.getElementById("out1");

   p.innerHTML = "Hello! Here I am !";
}

function outnothing() {
   var p =document.getElementById("out1");

   p.innerHTML = "";

}
