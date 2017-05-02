var gallerymodal = document.getElementById('galleryModal');
var gallerybtn = document.getElementById("galleryBtn");
var galleryclose = document.getElementsByClassName("galleryClose")[0];
gallerybtn.onclick = function() {
    gallerymodal.style.display = "block";
}
galleryclose.onclick = function() {
    gallerymodal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == gallerymodal) {
        gallerymodal.style.display = "none";
    }
}
