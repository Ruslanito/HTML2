var p = document.getElementsByTagName('p');
console.log(p);
// p.onclick = f1; ошибка вызова функции
p[0].onclick = f1;

function f1() {
    alert('Hello');
}