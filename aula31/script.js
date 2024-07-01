const hamburguer = document.getElementById('hamburguer')

hamburguer.addEventListener('click', function(){
    // alert('Clicou')
    const menu = document.getElementById('navItems')
    menu.classList.toggle('vertical')

    const thirdNavItem = menu.querySelector('.navLinks:nth-child(3)');
    if (menu.classList.contains('vertical')) {
        thirdNavItem.style.borderRight = 'none';
    } else {
        thirdNavItem.style.borderRight = '1px solid white';
    }
});
