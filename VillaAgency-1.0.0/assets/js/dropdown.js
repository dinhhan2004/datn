document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function (event) {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});
window.onscroll = function() {
    var header = document.querySelector('.header-area');
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add('header-sticky');
    } else {
        header.classList.remove('header-sticky');
    }
};
