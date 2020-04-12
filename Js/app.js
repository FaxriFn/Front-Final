$(function () {





    $('.dropdown').hover(function () {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');


    }, function () {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show')

    })


 
    // Aos 
    AOS.init({
        delay: 1000
    });

    // Count Plugin
    $('.count_nums').counterUp({
        delay: 20,
        time: 3000
    });
});