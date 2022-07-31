
$("#landing .hidden").animate({opacity: 1}, 1500).removeClass("hidden");
$(".landing-photo").animate({right: 0}, 1000).removeClass("hidden");

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 1870 ){
        $('.menu').removeClass('hidden');
    } 
    if ($(window).scrollTop() < 1870){
        $('.menu').addClass('hidden');
    } 

    if ($(window).scrollTop() > 6371.2) {
        $('.menu').addClass('red-colored').removeClass('dark-colored');
    } 
    if ($(window).scrollTop() < 6371.2) {
        $('.menu').addClass('dark-colored').removeClass('red-colored');
    } 

    if ($(window).scrollTop() > 10361.83) {
        $('.menu').addClass('hidden');
    } 
    if ($(window).scrollTop() > 1870  && $(window).scrollTop() < 10361.83) {
        $('.menu').removeClass('hidden');
    } 


    if ($(window).scrollTop() > 11192.22) {
        $('.menu').removeClass('hidden');
    } 
    if ($(window).scrollTop() > 10361.83  && $(window).scrollTop() < 11192.22) {
        $('.menu').addClass('hidden');
    } 

    if ($(window).scrollTop() > 12456.02) {
        $('.menu').addClass('red-colored').removeClass('dark-colored');
    } 
    if ($(window).scrollTop() > 10361.83  && $(window).scrollTop() < 12456.02) {
        $('.menu').addClass('dark-colored').removeClass('red-colored');
    } 

});

$(".instagram-media-rendered").ready(function () {
    frames[0].document;

});

// 12,456.02
// 6,371.2 11192.22
// 3990.63
// 10,361.83