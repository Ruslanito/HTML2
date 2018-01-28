function change(){
   var p =document.getElementById('out');
   p.innerHTML = "Hello! Text#2";
}

function change2(){
   var r = document.getElementById('out2');
   r.innerHTML = r.innerHTML+" + Text#3";
   //r.innerHTML+= " + Text#3";
}

function change3(){
   var s = document.getElementById('out3');
   s.innerHTML = s.innerHTML+" + <b> Text#3</b>";
}

function change4(){
   var z = document.getElementById('out4');
   z.innerText = z.innerText+" + <b> Text#4</b>";
}

function change5(){
   var a = document.getElementById('out5');
   a.insertAdjacentHTML("beforeEnd","Text#5");
}
