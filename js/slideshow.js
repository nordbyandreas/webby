var slideIndex = 0;
const slides  = document.getElementsByClassName('referalText');
const dots    = document.getElementsByClassName('dot');
const allDots = document.querySelector('.referalDots');
var slideTime = 8000;
var timeVar; // needed to reset the slideshow once a dot is clicked

showSlides();
function showSlides() {
  deactivateAll();
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  timeVar = setTimeout(showSlides, slideTime);
}

// Clicking a dot will change to that referal
allDots.addEventListener('click', changeReferal)

function changeReferal(e){
  if (e.target && e.target.className==='dot'){
    clearTimeout(timeVar) // stop the setTimeout running
    let index = e.target.id.replace('dot',''); // which dot was clicked (1,2,3,4,5)
    console.log('Changing to referal #'+index);
    deactivateAll(); // Turn all off
    slides[index-1].style.display = 'block'; // Turn on the one corresponding to the click
    dots[index-1].className += ' active';
    slideIndex = index-1;
    showSlides(); // start slideshow
  }
}

// Turns all the slides off (before turning one on)
function deactivateAll(){
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
}
