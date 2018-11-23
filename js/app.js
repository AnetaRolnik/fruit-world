document.addEventListener("DOMContentLoaded", function(){

    //change menu if scroll
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('header-fixed');
        } else {
            header.classList.remove('header-fixed');
        }
    });

    //hamburger menu
    const btn = document.querySelector('.main-nav-toggle');
    const list = document.querySelector('.main-nav-list');

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        list.classList.toggle('show');
        btn.classList.toggle('anim');
    })

});