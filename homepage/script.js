const next = document.getElementById('next');
const y = next.getBoundingClientRect().top + window.pageYOffset;

var start = document.getElementById('start')
var ne = document.getElementById('next')

var tile = document.getElementsByClassName('tile')

start.onclick = function () {
    window.scrollTo({ top: y, behavior: 'smooth' });
    for (var i = 0; i < tile.length; i++){
        tile[i].style.opacity = "0";
    }
    setTimeout(function () {
        var i;
        for (i = 0; i < tile.length; i++) {
            tile[i].style.animation = "appear 1s";
            tile[i].style.opacity = "1";
        }
    }, 300)

}

var image = document.getElementsByTagName('img');
for (var i = 0; i < image.length; i++) {
    image[i].draggable = false;
}