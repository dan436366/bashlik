$(document).ready(function(){
    $('.line-menu').click(function(event){
        $('.line-menu,.header__menu,.item_menu,.close_menu,.header,main,body').toggleClass('active');
        $('body').toggleClass('lock');

        
    });
});


$(window).on("load",function(){
    $(".loader-container").fadeOut(1000);
});


// $(document).ready(function(){
//     $('.link').click(function(event){
//         if($('.header__menu').toggleClass('active')){
//             $('').toggleClass('');
//         }
//         if($('.header__menu').toggleClass('')){
//             $('.header__menu').toggleClass('active');
//         }
        
//     });
// });


// $(document).mouseup(function (e) {
//     var container = $(".phones-popup");
//     if (container.has(e.target).length === 0){
//         container.hide();
//     }
// });