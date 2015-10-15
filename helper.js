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