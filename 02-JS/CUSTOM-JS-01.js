$('body').scrollspy({ target: '#navbar-example' })

$(".navbar-collapse ul li a[href^='#']").on('click',function(e){

  target = this.hash;
  e.preventDefault();

  $('html,body').animate({
    scrollTop : $(this.hash).offset().top
  }, 800, function(){
    window.location.hash = target;
  });

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
