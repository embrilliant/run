$(function() {

	$(window).on("click", startP);
	var sPlay;

	$(window).on("keydown", function() { clearInterval(sPlay); })

	var thPoint = ($(window).width()) * 0.66;
	var charPost;
	var sound = document.getElementById("sound");

	function startP() {
		sound.currentTime = 0;
		sPlay = setInterval(sthMove, 30);
	}

	function sthMove() {
		
		charPost = $("#character").position().left;
		
		if (charPost < thPoint) {

			var cSPost = $("#charAnime").position().left;		
				
			var imgsF = [-875, 0, -125, -250, -375, -500, -625, -750];
			var imgsB = [-1875, -1000, -1125, -1250, -1375, -1500, -1625, -1750];
			var numOfImgs = imgsF.length;
			var charSpeed = 2;
			var distance = numOfImgs * charSpeed;
			var changeMod = cSPost % distance;

			function characterFaceForward() {		
				$("#charAnime").css({"left":"+=1"});
				var i;
				for (i = 0; i < numOfImgs; i++) {
					var remainN = charSpeed * i;
					if (changeMod == remainN) {
						$("#character").css({"background-position":imgsF[i]+"px"});
					}
				}
			}

			$("#character").css({"left":"+=6"});
			characterFaceForward();
			
			sound.play();

		} else {
			clearInterval(sPlay);
			sPlay = 0;
			$("#door").css({"left":thPoint+"px"}).show();
		}

		console.log(changeMod, charPost, thPoint);

	}


});