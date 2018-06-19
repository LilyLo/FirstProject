var imageContainer = document.querySelectorAll('.column');

var popupImage = document.querySelector("#popup-image");

var popup = document.querySelector('#popup');

var rightArrow = document.querySelector('#right-arrow');

var leftArrow = document.querySelector('#left-arrow');

var close = document.querySelector(".close");

var originId;

function openPopup() {
	popup.classList.replace('closepopup', 'openpopup');
}

function hidePopup() {
	popup.classList.replace('openpopup', 'closepopup');
}

for (var i = 0; i < imageContainer.length; i++) {

	imageContainer[i].onclick = function() {
     	var imgsrc = this.querySelector("img").getAttribute("src");
     	
     	originId = this.querySelector("img").id;
     	popupImage.src = imgsrc;
     	openPopup();   
    }  
}

rightArrow.onclick = function() {

	var currentContainer = document.getElementById(originId).parentElement;

	var nextContainer = currentContainer.nextElementSibling;

	var nextSrc = nextContainer.querySelector("img").getAttribute("src");

       	popupImage.src = nextSrc;
     	openPopup();
}			

close.onclick = function() {
	hidePopup();
}

