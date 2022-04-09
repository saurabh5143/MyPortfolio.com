$(document).ready(function(){
	$(".saurabh").waypoint(function(direction){
		$(".navbar-brand").addClass("animate__animated animate__rotateIn")
		// $("#navbar").addClass("animate__animated animate__bounceInDown")
		$("#ani-home").addClass("animate__animated animate__tada animate__delay-1s")
		$("#user-info").addClass("animate__animated animate__backInRight animate__delay-2s")
		$("#photo").addClass("animate__animated animate__backInLeft animate__delay-2s")
		$("#myname").addClass("animate__animated animate__backInLeft animate__delay-2s")
		
	})

	// -----------------About---------//
	$("#aboutme").waypoint(function(direction){
		$("#ani-about").addClass("animate__animated animate__tada")
	},{
		offset:"70%"
	})	

	$("#aboutme").waypoint(function(direction){
		$(".ani-about").addClass("animate__animated animate__backInLeft")
		$(".animate-img").addClass("animate__animated animate__backInRight")
	},{
		offset:"50%"
	})


	// $("#services").waypoint(function(direction){
	// 	$("#ani-services").addClass("animate__animated animate__tada")
	// 	$(".ani-servicses").addClass("animate__animated animate__backInLeft animate__delay-1s")
	// 	$(".ani-servicses2").addClass("animate__animated animate__backInLeft")
	// 	$(".ani-servicses3").addClass("animate__animated animate__backInRight")
	// 	$(".ani-servicses4").addClass("animate__animated animate__backInRight animate__delay-1s")


	// },{
	// 	offset:"50%"
	// })

	// --------------Services-----------------//

	$("#services").waypoint(function(direction){
		$("#ani-services").addClass("animate__animated animate__tada")
	},{
		offset:"70%"
	})	

	$("#services").waypoint(function(direction){
		$(".ani-servicses").addClass("animate__animated animate__backInLeft animate__delay-1s")
		$(".ani-servicses2").addClass("animate__animated animate__backInLeft")
		$(".ani-servicses3").addClass("animate__animated animate__backInRight")
		$(".ani-servicses4").addClass("animate__animated animate__backInRight animate__delay-1s")


	},{
		offset:"50%"
	})

	// --------------Work---------------------//

	$("#work").waypoint(function(direction){
		$("#ani-work").addClass("animate__animated animate__tada")
	},{
		offset:"70%"
	})	

	// --------------Contect me---------------------//

	$("#contect").waypoint(function(direction){
		$("#ani-contect").addClass("animate__animated animate__tada")
	},{
		offset:"70%"
	})	
	$("#contect").waypoint(function(direction){
		$("#ani-contect1").addClass("animate__animated animate__zoomInUp animate__tada")

		},{
		offset:"50%"
	})	
})



