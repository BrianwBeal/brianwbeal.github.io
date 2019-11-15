// add copyright year
document.querySelector('#currentDate').innerHTML = (new Date).getFullYear();

// mobile navigation toggle
const navButton = document.querySelector('.navigation__button');
const navLinks = document.querySelector('.navigation__links');
navButton.addEventListener('click', function() {
    this.classList.toggle('crossed');
    navLinks.classList.toggle('fullwidth');
});