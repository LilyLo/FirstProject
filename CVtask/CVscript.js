

var popup = document.getElementsByClassName('popup-open');

var button = document.getElementById('PopupButton');

var close = document.getElementsByClassName('close')[0];

button.onclick = function() {
    popup.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    popup.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}

