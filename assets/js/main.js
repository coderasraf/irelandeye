
$(document).ready(function(){
	$('.featured-section-inner-2').owlCarousel({
		items:4,
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots:false,
		navText:["<img src='assets/img/arrow-right.png'>","<img src='assets/img/arrow-right.png'>"],
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:4,
	            nav:true,
	            loop:false
	        }
	    }
	})

})

$(document).ready(function(){
	$('.reviews-carousel-right').owlCarousel({
		items:3,
		margin:40,
		loop:true,
		autoplay:true,
		nav:true,
		dots:false,
		navText:["<img src='assets/img/arrow-right.png'>","<img src='assets/img/arrow-right.png'>"],
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:true,
	            loop:true
	        }
	    }

	})
})
$(document).ready(function(){
	$('.featrued-inner').owlCarousel({
		items:3,
		margin:40,
		loop:true,
		autoplay:false,
		nav:false,
		dots:true,
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:true,
	            loop:true
	        }
	    }

	})
})

$(document).ready(function(){
	$('.showcase-carousel-1').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true,
		navText:["<img src='assets/img/angle-left.png'>","<img src='assets/img/angle-right.png'>"],

	})

})

$(document).ready(function(){
	$('.showcase-carousel-2').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true,
		navText:["<img src='assets/img/angle-left.png'>","<img src='assets/img/angle-right.png'>"],

	})
})

$(document).ready(function(){
	$('.showcase-carousel-3').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true,
		navText:["<img src='assets/img/angle-left.png'>","<img src='assets/img/angle-right.png'>"],

	})
})
