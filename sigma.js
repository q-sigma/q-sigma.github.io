var gallerymodal = document.getElementById('galleryModal');
var gallerybtn = document.getElementById("gallerybtn");
var close = document.getElementsByClassName("close")[0];
gallerybtn.onclick = function() {
    gallerymodal.style.display = "block";
}
close.onclick = function() {
    gallerymodal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == gallerymodal) {
        gallerymodal.style.display = "none";
    }
}
