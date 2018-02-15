document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
var left = 0;
var timer;

function autoSlider() {
    timer = setTimeout(sliderLeft, 1000); /* переметры запуска для просмотра */
}

function sliderLeft() {
    var lines;
    lines = document.getElementById('lines');
    left = left - 128;
    if (left < -512) {
        left = 0;
        clearTimeout(timer);
    }
    lines.style.left = left + 'px';
    autoSlider(); /* зацикливание просмотра таймера */
}