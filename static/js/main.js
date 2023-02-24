// FAQs
const toggleBtns = document.querySelectorAll('.toggle-btn');

toggleBtns.forEach(function (toggleBtn) {
  toggleBtn.addEventListener('click', function () {
    this.parentNode.parentNode.classList.toggle('active');
  });
});














