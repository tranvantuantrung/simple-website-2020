var navbarHeader = document.getElementById('navbar-header');

window.addEventListener('scroll', function() {
    if(document.documentElement.scrollTop) 
        navbarHeader.classList.add('navbar-header-scrolled');
    else
        navbarHeader.classList.remove('navbar-header-scrolled');
});