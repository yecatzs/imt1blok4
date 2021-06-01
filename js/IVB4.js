var video;
var k4klik = 0;
var room = 0;
var SC = 0;



$(document).ready(function () {

	//GET VIDO
	video = document.getElementById("video_kamer4");




	//check function
	var update = setInterval(check, 100);
	// inside check function we need confitions

	//set interval function // to call check
	function check() {
		//round down the time to get a whole number
		var time = video.currentTime.toFixed(1);
		time = Number(time);
		console.log(video.currentTime, time);



		//FrontPage
		document.getElementById("Kamer 1").onclick = function () { K1() };
		function K1() {
			$("#StartPage").fadeOut(500);
			$('#OverlayKamer1').fadeIn(500);
			$('#Kamer1').show();
			room = 1;
			Kamer1();
		}

		document.getElementById("Kamer 2").onclick = function () { K2() };
		function K2() {
			$("#StartPage").fadeOut(500);
			$('#OverlayKamer2').fadeIn(500);
			$('#Kamer2').show();
			room = 2;
			Kamer2();
		}

		document.getElementById("Kamer 3").onclick = function () { K3() };
		function K3() {
			$("#StartPage").fadeOut(500);
			$('#OverlayKamer3').fadeIn(500);
			$('#Kamer3').show();
			room = 3;
			Kamer3();
		}

		document.getElementById("Kamer 4").onclick = function () { K4() };
		function K4() {
			$("#StartPage").fadeOut(500);
			$('#OverlayKamer4').fadeIn(500);
			$('#Kamer4').show();
			room = 4;
			Kamer4();
		}


		if (room === 0) {
			$("#OverlayKamer1").hide();
			$("#OverlayKamer2").hide();
			$("#OverlayKamer3").hide();
			$("#OverlayKamer4").hide();
			$('#Kamer1').hide();
			$('#Kamer2').hide();
			$('#Kamer3').hide();
			$('#Kamer4').hide();
		}

		if (room === 1) {
			Kamer1();


			//terug van kamer 1 naar hoofdmenu
			$("#1naarterug").bind("click", function () {
				$("#OverlayKamer1").fadeOut(500);
				$("#Kamer1").fadeOut(500);
				room = 0;
				$("#StartPage").fadeIn(500);
			});
		}

		if (room === 2) {
			Kamer2();


			//terug van kamer 2 naar hoofdmenu
			$("#2naarterug").bind("click", function () {
				$("#OverlayKamer2").fadeOut(500);
				$("#Kamer2").fadeOut(500);
				room = 0;
				$("#StartPage").fadeIn(500);
			});
		}

		if (room === 3) {
			Kamer3();


			//terug van kamer 3 naar hoofdmenu
			$("#3naarterug").bind("click", function () {
				$("#OverlayKamer3").fadeOut(500);
				$("#Kamer3").fadeOut(500);
				room = 0;
				$("#StartPage").fadeIn(500);
			});
		}




		if (room === 4) {
			Kamer4();

			video.style.display = "inline";
			$('#KnopLinks').hide();
			$('#KnopMidden').hide();
			$('#KnopRechts').hide();


			document.getElementById("ButtonKnopLinks").onclick = function () { KnopLinks() };
			function KnopLinks() {
				$('#KnopNiks').hide();
				$('#KnopLinks').show();
				k4klik = k4klik + 1;
				console.log("geklikt links");
				setTimeout(1000);
				$('#KnopNiks').show();
				$('#KnopLinks').hide();

			}

			document.getElementById("ButtonKnopMidden").onclick = function () { KnopMidden() };
			function KnopMidden() {
				$('#KnopNiks').hide();
				$('#KnopMidden').show();
				k4klik = k4klik + 1;
				console.log("geklikt midden");
				setTimeout(1000);
				$('#KnopMidden').hide();
				$('#KnopNiks').show();
			}

			document.getElementById("ButtonKnopRechts").onclick = function () { KnopRechts() };
			function KnopRechts() {
				$('#KnopNiks').hide();
				$('#KnopRechts').show();
				k4klik = k4klik + 1;
				console.log("geklikt rechts");
				setTimeout(1000);
				$('#KnopRechts').hide();
				$('#KnopNiks').show();
			}

			
			//document.getElementById("Stopcontact").style.display = "hidden";
			document.getElementById("Stopcontact").onclick = function () { Stopcontact() };
			function Stopcontact() {
				SC = SC + 1;
			}


			console.log(k4klik);
			console.log(SC);

			//terug van kamer 4 naar hoofdmenu
			$("#4naarterug").bind("click", function () {
				$("#OverlayKamer4").fadeOut(500);
				$("#Kamer4").fadeOut(500);
				video.style.display = "hidden";
				room = 0;
				k4klik = 0;
				$("#StartPage").fadeIn(500);
				video.pause();
			});
		}

		//Kamer 1
		function Kamer1() {




		}




		//Kamer 2
		function Kamer2() {




		}



		//Kamer 3
		function Kamer3() {




		}



		//Kamer 4
		function Kamer4() {


			video.style.display = "show";
			$('#Stopcontact').hide();
			video.currentTime = 0;
			video.play();

			//stap 1
			if (k4klik == 0) {
				video.currentTime = 0;
			}
			if (time === 4.9) {
				video.currentTime = 0;
			}
			//stap 2
			if (k4klik == 1) {
				video.currentTime = 5;
			}
			if (time === 9.9) {
				video.currentTime = 5;
			}
			//stap 3
			if (k4klik == 2) {
				video.currentTime = 10;
			}
			if (time === 14.9) {
				video.currentTime = 10;
			}
			//stap 4
			if (k4klik === 3) {
				video.play();
				video.currentTime = 15;
			}
			if (time === 19.9) {
				video.currentTime = 15;
			}
			//stap 5
			if (k4klik === 4) {
				video.play();
				video.currentTime = 20;
			}
			if (time === 24.9) {
				video.currentTime = 20;
			}
			//stap 6
			if (k4klik === 5) {
				video.play();
				video.currentTime = 25;
			}
			if (time === 26.9) {
				video.currentTime = 25;
			}
			//stap 7
			if (k4klik === 6) {
				video.play();
				video.currentTime = 27;
			}
			if (time === 28.9) {
				video.currentTime = 27;
			}
			//stap 8
			if (k4klik === 7) {
				video.play();
				video.currentTime = 29;
			}
			if (time === 30.9) {
				video.currentTime = 29;
			}
			//stap 9
			if (k4klik === 8) {
				video.play();
				video.currentTime = 31;
			}
			if (time === 32.9) {
				video.currentTime = 31;
			}
			//stap 10
			if (k4klik === 9) {
				video.play();
				video.currentTime = 33;
			}
			if (time === 34.9) {
				video.currentTime = 33;
			}
			//stap 11
			if (k4klik === 10) {
				video.play();
				video.currentTime = 35;
			}
			if (time === 36.9) {
				video.currentTime = 35;
			}
			//stap 12
			if (k4klik === 11) {
				video.play();
				video.currentTime = 37;
			}
			if (time === 38.9) {
				video.currentTime = 37;
			}
			//stap 13
			if (k4klik === 12) {
				video.play();
				video.currentTime = 39;
			}
			if (time === 40.9) {
				video.currentTime = 39;
			}
			//stap 14
			if (k4klik === 13) {
				video.play();
				video.currentTime = 41;
			}
			if (time === 42.9) {
				video.currentTime = 41;
			}
			//stap 15
			if (k4klik === 14) {
				video.play();
				video.currentTime = 43;
			}
			if (time === 44.9) {
				video.currentTime = 43;
			}
			//stap 16
			if (k4klik >= 15) {
				$('#Stopcontact').show();
				if (SC >= 1) {
					video.currentTime = 46;
				}
				else{
					video.currentTime = 45;
				}
				
			}
			if (time === 45.9) {
				video.currentTime = 45;
			}
			if (time = 48) {
				video.pause;
			}




		}


	}

});// end ready func