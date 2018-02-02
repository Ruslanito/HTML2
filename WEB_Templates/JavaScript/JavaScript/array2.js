var m1 = [23, 56, "hi"];
//вывод массива
console.log(m1, [2]);
console.log(m1);
// длина массива length
alert(m1.length);
//добавление элемента
m1[3] = "Hello";
console.log(m1);

function masOut() {
   var p = document.getElementById("out");
   var str = '';
   for (var i = 0; i < m1.length; i++) {
      str += i + '---' + m1[i] + '<br>';
   }
   p.innerHTML = str;

}

//запуск функции при старте
masOut();

function p1() {
   var i1 = document.getElementById('i1').value;
   m1.push(i1);
   masOut();
}

function p2() {
   m1.pop();
   masOut();
}
