height = window.screen.height;
width = window.screen.width;

$(".contact-").attr("href","https://forms.gle/ufqG3QhyAVF7wjSZ7");

if (width < 600){
  $(".header-img-1").attr("src","images/header pic @.png");
  $(".title-section-image-1").attr("src","images/title section image @.jpg");
  $(".about-img-1").attr("src","images/me @.png");
  $(".py").attr("src","images/python logo @.png");
  $(".web").attr("src","images/web development logo @.png");
  $(".app").attr("src","images/app logo @.png");
  $(".chain").attr("src","images/blockchain development logo @.png");
  $("i").removeClass("fa-5x");
  $("i").addClass("fa-3x");
}
