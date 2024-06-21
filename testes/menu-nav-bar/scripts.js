function classToggle () {
    const navs = document.querySelectorAll('.navbarItems')

    navs.forEach(nav => nav.classList.toggle('navbarToggleShow'))

}
    

document.querySelector('.navbarLinkToggle').addEventListener('click', classToggle)