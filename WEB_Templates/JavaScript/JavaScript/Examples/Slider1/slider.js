document.getElementById('slider-left').onclick = sliderLeft;

function sliderLeft() {
    var lines;
    lines = document.getElementById('lines');
    lines.style.left = -128 + 'px';
}