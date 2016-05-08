$(window).scroll(scrolled);
$(document).ready(position);
$(window).resize(position);

function scrolled(){
	var content_pos = $(".absolute_container.main").offset();

	if($(window).scrollTop() >= (content_pos.top - 120) || window.innerWidth < 600){
		$("#nav_container").addClass("scrolled");
		$(".hamburger_stick").addClass("scrolled");
		$(".nav_bar_item").addClass((window.innerWidth >= 600) ? "scrolled" : "small_screen");
	}

	else{
		$("#nav_container").removeClass("scrolled").addClass("top");
		$(".hamburger_stick").removeClass("scrolled");
		$(".nav_bar_item").removeClass("scrolled").removeClass("small_screen");
	}
}

function position(){
	var width, height, margin_left, margin_top, padding;

	$(".content_title.first_title").css("padding-top", "200px");
	$(".content_container.intro, .content_title.first_title").css("margin-left", 0);
	$(".absolute_container.sub, .content_title.first_title").css("margin-top", 0);

	if(window.innerWidth > 960){
		//centers intro content container
		width = $(".content_container.intro").width() + (strip(".content_container.intro", "padding-left", "px") * 2);
		margin_left = (window.innerWidth - width) / 2;
		$(".content_container.intro").css("margin-left", margin_left);

		//adds padding to first title to make it overlap intro container
		padding = $(".content_container.intro").height() + 100;
		$(".content_title.first_title").css("padding-top", padding);
	}

	if(window.innerWidth >= 1155){
		//centers first content title
		width =  $(".content_title.first_title").width();
		margin_left = (window.innerWidth - width) / 2;
		margin_top = window.innerWidth * 0.05;
		$(".content_title.first_title").css("margin-top", margin_top)
		$(".content_title.first_title").css("margin-left", margin_left);

		//positions content after first title
		margin_top = margin_top + $(".content_title.first_title").height();
		margin_top = margin_top + 200 + strip(".content_title.first_title", "padding-top", "px");
		$(".absolute_container.sub").css("margin-top", margin_top);
	}

	scrolled();
}

function strip(element, property, measurement){
	return parseInt($(element).css(property).replace(measurement, ""));
}