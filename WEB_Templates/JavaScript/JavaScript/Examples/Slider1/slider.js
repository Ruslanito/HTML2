document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft() {
    var lines;
    lines = document.getElementById('lines');
    left = left - 128;
    if (left < -512) {
        left = 0;
    }
    lines.style.left = left + 'px';
}