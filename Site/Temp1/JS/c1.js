 /*alert("js is running"); */
 var n = document.getElementById('q1').value;
 var d = document.getElementById('d1').value;
 var res = document.getElementById('c1');

 function count() {
     var res1 = (113 * n * d) / 10000;
     res.innerHTML = res1;
     /* alert(n + d); */
     /* res.insertAdjacentHTML("afterBegin", res1); */

 }