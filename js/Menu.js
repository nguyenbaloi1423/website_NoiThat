document.addEventListener('DOMContentLoaded', function() {
    var toggleMenu = document.getElementById('toggle-menu');
    var menuItems = document.querySelectorAll('.menu li a');

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function() {
            toggleMenu.checked = false;
        });
    }
});