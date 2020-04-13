$(function () {


 
    $(document).on('mouseenter','.cardDoctor',function(){
        $(this).css('background', 'rgba(0, 125, 242, 1)');
        $(this).children('.doctorName>h4>a').css('color','white');
         $(this).children('.doctorContent ').children('.doctorName').children('h4').children('a').css('color','white');
         $(this).children('.doctorContent ').children('.doctorName').children('span').css('color','white');
         $(this).children('.doctorContent ').children('.socialIconDoctor').children('i').css('color','white');
         $(this).css('transform','translateY(-20px)')
    })
 
    $(document).on('mouseleave','.cardDoctor',function(){
        $(this).css('background', '#fff');
        $(this).css('transform','translateY(0px)')
         $(this).children('.doctorContent ').children('.doctorName').children('h4').children('a').css('color','black');
         $(this).children('.doctorContent ').children('.doctorName').children('span').css('color','#777');
         $(this).children('.doctorContent ').children('.socialIconDoctor').children('i').css('color','rgba(0, 125, 242, 1)');
    })

    $(document).on('mouseenter','.cardTestimonials',function(){
        $(this).css('background', 'rgba(0, 125, 242, 1)');
     
         $(this).children('p').css('color','white');
         $(this).children('.doctorContent ').children('.doctorName').children('span').css('color','white');
         $(this).children('.testimonialsContent').children('.testimonialsText').children('h5').css('color','white');
         $(this).children('.testimonialsContent').children('.testimonialsText').children('p').css('color','white');
         $(this).children('i').css('color','white');
         $(this).css('transform','translateY(-10px)')
    })
 
    $(document).on('mouseleave','.cardTestimonials',function(){
        $(this).css('background', '#fff');
        $(this).css('transform','translateY(0px)')
        $(this).children('p').css('color','#777');
         $(this).children('.doctorContent ').children('.doctorName').children('span').css('color','black');
         $(this).children('.testimonialsContent').children('.testimonialsText').children('h5').css('color','black');
         $(this).children('.testimonialsContent').children('.testimonialsText').children('p').css('color','#777');
         $(this).children('i').css('color','rgba(0, 125, 242, 1)');
    });
    // Aos 
    $('.variable-width').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
        });

    // Count Plugin
    $('.count_nums').counterUp({
        delay: 20,
        time: 2000
    });
    AOS.init({
        delay: 1000,

    });
});