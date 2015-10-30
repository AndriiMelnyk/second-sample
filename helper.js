$(document).ready(function(){
	$(".navabar-sidebar").click(function(event){
		$(".navbar-default").addClass("scrolled");
	});
	if($(this).scrollTop() > 0){
		$('.navbar-default').addClass("scrolled");
	} else {
		$('.navbar-default').removeClass("scrolled");
	}


	$(this).scroll(function(){
		if($(this).scrollTop() > 0){
			$('.navbar-default').addClass("scrolled");
		} else {
			$('.navbar-default').removeClass("scrolled");
		}
	});
});


$(window).scroll(function() {
    $('.mov').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
      	$(this).addClass("flipInX");
      }
  });
});

