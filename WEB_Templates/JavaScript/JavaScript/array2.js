var m = [];
var m1 = [23,56,"hi"];
//вывод массива
console.log (m1,[2]);
console.log(m1);
// длина массива length
alert (m1.length);
//добавление элемента
m1[3] = "Hello";
console.log(m1);
alert (m1.length);

var t = document.getElementById("out");

for (var i = 0; i < m1.length; i++) {
   t.innerHTML+=[m1[i]]+' <br> ';
}
