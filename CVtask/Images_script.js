var imgCont = document.getElementsByClassName('column');

var popupImage = document.getElementById("popup-image");

var open = document.getElementById('popup');

var close = document.getElementsByClassName("close")[0];

function openPopup() {
	open.style.display = "block";
}

function hidePopup() {
	open.style.display = "none";
}

for (var i = 0; i < imgCont.length; i++) {
	imgCont[i].onclick = function() {
     	var imgsrc = this.getElementsByTagName("img")[0].getAttribute("src");
     	popupImage.src = imgsrc;
     	openPopup();   
    }
}

close.onclick = function() {
	hidePopup();
}

