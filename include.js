/**
This document looks pretty stupid. We wanted to achieve modularity by not repeating
the same navbar and footer in every html page, and we said in P2_design that we would use JavaScript to achieve this.
Would have been easier using jQuery, but here we are.
It's not ideal, but it gets the job done.

**/
window.onload = function() {
  document.getElementById('header').innerHTML =
    '<ul class="nav-bar left">' +
    '<li class="nav-link"><a href="index.html">HOME</a></li>' +
    '<li class="nav-link"><a href="work.html">WORK</a></li>' +
    '<li class="nav-link"><a href="about.html">ABOUT</a></li>' +
    '</ul>' +
    '<a class="logo" href="index.html">' +
    '<img src="img/logo.png"/>' +
    '</a>' +
    '<ul class="nav-bar right">' +
    '<li class="nav-link"><a href="prices.html">PRICES</a></li>' +
    '<li class="nav-link"><a href="faq.html">FAQ</a></li>' +
    '<li class="nav-link"><a href="contact.html">CONTACT</a></li>' +
    '</ul>';

  document.getElementById('footer').innerHTML =
    '<div class="footer-content">' +
    '<div class="social-icons">' +
    '<a href="http://www.facebook.com/">' +
    '<img src="img/social-icons/facebook.png" alt="Facebook logo" class="social-icon"/>' +
    '</a>' +
    '<a href="http://www.instagram.com">' +
    '<img src="img/social-icons/instagram.png" alt="instagramlogo" class="social-icon"/>' +
    '</a>' +
    '<a href="http://www.twitter.com">' +
    '<img src="img/social-icons/twitter.png" alt="twitter logo" class="social-icon"/>' +
    '</a>' +
    '<a href="http://www.snapchat.com">' +
    '<img src="img/social-icons/snapchat.png" alt="snapchat logo" class="social-icon"/>' +
    '</a>' +
    '<a href="http://www.youtube.com">' +
    '<img src="img/social-icons/youtube.png" alt="youtube logo" class="social-icon"/>' +
    '</a>' +
    '</div>' +
    '<div class="contact">' +
    '<p><b>Tinc.: </b>SomeStreet 21, 7040, Trondheim</p>' +
    '<p><b>E-mail: </b>contact@tinc.com   , <b>Phone: </b>99 88 77 66</p>' +
    '</div>' +
    '</div>' +
    '<p class="copyright">&copy; 2017 WEBBY</p>';
};
