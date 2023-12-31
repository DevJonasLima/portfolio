let menu = document.querySelector('.menu');
let NavMenu = document.querySelector('.nav-menu');
let NavItems = document.querySelectorAll('.nav-item a');

menu.addEventListener('click', function () {
    menu.classList.toggle('active');
    NavMenu.classList.toggle('active');
});

NavMenu.addEventListener('click', function () {
    menu.classList.remove('active');
    NavMenu.classList.remove('active');
});


NavItems.forEach(function (item) {
    item.addEventListener('click', function () {
    });
});