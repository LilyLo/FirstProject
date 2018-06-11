var img = document.getElementsByClassName('column');

var open = document.getElementById('popup');

var close = document.getElementsByClassName("close")[0];

for (var i = 0; i < img.length; i++) {
    img[i].onclick = function() {
        open.style.display = "block";
    }
}

close.onclick = function() {
	open.style.display = "none";
}