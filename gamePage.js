var slideIndex = 0;
var slidesObj = document.getElementsByClassName("slide");

function showSlide(changeBy) {
    slideIndex = (slideIndex+changeBy+slidesObj.length)% slidesObj.length;
    for(var i = 0; i <slidesObj.length;i++) {
        slidesObj[i].style.display = "none";
    }
    slidesObj[slideIndex].style.display = "block";
}