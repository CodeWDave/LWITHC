
$("#landing .hidden").animate({opacity: 1}, 1500).removeClass("hidden");
$(".landing-photo").animate({right: 0}, 1500).removeClass("hidden");

/*
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


// 12,456.02
// 6,371.2 11192.22
// 3990.63
// 10,361.83



var topofLanding = $("#landing").offset().top; //gets offset of header
var heightLanding = $("#landing").outerHeight(); //gets height of header



$(window).scroll(function(){
    if($(window).scrollTop() > (topofDiv + height)){
       $("#header-2").show();
    }
    else{
       $("#header-2").hide();
    }
});*/


$(window).bind('scroll', function () {
    if ($(window).scrollTop() > ($("#landing").offset().top + $("#landing").outerHeight()) ){
        $('.menu').removeClass('hidden');
    } 
    if ($(window).scrollTop() < ($("#landing").offset().top + $("#landing").outerHeight())){
        $('.menu').addClass('hidden');
    } 

    if ($(window).scrollTop() > $("#reviews").offset().top) {
        $('.menu').addClass('red-colored').removeClass('dark-colored');
    } 
    if ($(window).scrollTop() < $("#reviews").offset().top) {
        $('.menu').addClass('dark-colored').removeClass('red-colored');
    } 

    if ($(window).scrollTop() > $("#cta").offset().top && $(window).scrollTop() < $("#scroll-stop").offset().top) {
        $('.menu').addClass('hidden');
    } 
    if ($(window).scrollTop() > $("#reviews").offset().top  && $(window).scrollTop() < $("#cta").offset().top) {
        $('.menu').removeClass('hidden');
    } 


    if ($(window).scrollTop() > $("#scroll-stop").offset().top) {
        $('.menu').removeClass('hidden');
    } 
    if ($(window).scrollTop() > $("#cta").offset().top  && $(window).scrollTop() < $("#scroll-stop").offset().top) {
        $('.menu').addClass('hidden');
    } 

    if ($(window).scrollTop() > ($("#about").offset().top - $( window ).height() * .5)) {
        $('.menu').addClass('red-colored').removeClass('dark-colored');
    } 
    if ($(window).scrollTop() > $("#scroll-stop").offset().top  && $(window).scrollTop() < $("#about").offset().top) {
        $('.menu').addClass('dark-colored').removeClass('red-colored');
    } 

});