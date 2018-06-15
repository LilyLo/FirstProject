var imageContainer = document.querySelectorAll('.column');

var popupImage = document.querySelector("#popup-image");

var popup = document.querySelector('#popup');

var rightArrow = document.querySelector('#right-arrow');

var leftArrow = document.querySelector('#left-arrow');

var close = document.querySelectorAll(".close")[0];

function openPopup() {
	popup.classList.replace('closepopup', 'openpopup');
}

function hidePopup() {
	popup.classList.replace('openpopup', 'closepopup');
}

for (var i = 0; i < imageContainer.length; i++) {
	imageContainer[i].onclick = function() {
     	var imgsrc = this.querySelectorAll("img")[0].getAttribute("src");
     	popupImage.src = imgsrc;
     	openPopup();   
    }

    rightArrow.onclick = function () {

    	var currentImageContainer = popup.querySelector("img").parentElement;

    	var containerNumber =  imageContainer.indexOf(currentImageContainer);
	}
}



close.onclick = function() {
	hidePopup();
}

