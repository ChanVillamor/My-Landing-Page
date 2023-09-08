// ******** menuBar

const menuBar = document.querySelector('.menu-bar');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('click', function(e) {
   if (e.target === menuBar || e.target === navLinks) {
     navLinks.classList.toggle('show-links');
   } else {
     navLinks.classList.remove('show-links');
   }
 });



//  ***** color theme 

const switchBtn = document.getElementById('switch');

switchBtn.addEventListener('click', function() {
   document.body.classList.toggle('light-theme');
});