// FAQs
const toggleBtns = document.querySelectorAll('.toggle-btn');

toggleBtns.forEach(function (toggleBtn) {
  toggleBtn.addEventListener('click', function () {
    this.parentNode.parentNode.classList.toggle('active');
  });
});



// NAVBAR
const nav = document.getElementById('nav')
const navToggle = document.querySelector('.nav-toggle')
const closeBtn = document.querySelector('.close-btn')
const menuItems = document.querySelector('.menu-items')

navToggle.addEventListener('click', () => {
  nav.classList.add('fixed-nav')
  menuItems.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
  nav.classList.remove('fixed-nav')
  menuItems.style.display = 'none'
})















