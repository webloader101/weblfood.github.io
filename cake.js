$(document).ready(() => {
    $('#menu-bar').click(() => {
        $(this).toggleClass('fa-times');
        $('.narbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function() {
        $('#menu-bar').removeClass('fa-times');
        $('.narbar').removeClass('nav-toggle');

        // scroll spy

        $('section').each(function() {

            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 200;
            let height = $(this).height();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.narbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        })


    });

    $('.menu .list .btn').click(function() {
        $(this).addClass('active').siblings().removeClass('active');

        let src = $(this).attr('data-src');

        $('#menu-img').attr('src', src);
    })
});



// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('fa-moon-o')) {
        darkmode.classList.replace('fa-moon-o', 'fa-sun-o');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('fa-sun-o', 'fa-moon-o');
        document.body.classList.remove('active');
    }
};