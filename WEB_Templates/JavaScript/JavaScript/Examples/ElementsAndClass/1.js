var p = document.getElementsByTagName('p');
var one = document.getElementsByClassName('one');
console.log(p);
// p.onclick = f1; ошибка вызова функции

for (i = 0; i < p.length; i++) {
    p[i].onclick = f1;
}


function f1() {
    // alert('Hello');
    console.log(this);
    // в переменной this лежит вызываемый элемент массива p
    // изменение (свойства) цвета выбранного элемента
    this.style.background = 'grey';

}

for (i = 0; i < one.length; i++) {
    one[i].onclick = f2;
}

function f2() {
    this.style.fontWeight = 'bold';
}