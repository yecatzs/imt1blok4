var video;
var k4klik = 0;
var room = 0;
var SC = 0;
var RandomK3 = 8;
var endvid = 0;
var keer = 0;




$(document).ready(function () {

	//GET VIDO
	video = document.getElementById("video_kamer4");


	//FrontPage
	document.getElementById("Kamer 1").onclick = function () { K1() };
	function K1() {
		$("#StartPage").fadeOut(500);
		$('#OverlayKamer1').fadeIn(500);
		$('#Kamer1').show();
		room = 1;
	}

	document.getElementById("Kamer 2").onclick = function () { K2() };
	function K2() {
		$("#StartPage").fadeOut(500);
		$('#OverlayKamer2').fadeIn(500);
		$('#Kamer2').show();
		room = 2;

	}

	document.getElementById("Kamer 3").onclick = function () { K3() };
	function K3() {
		$("#StartPage").fadeOut(500);
		$('#OverlayKamer3').fadeIn(500);
		$('#Kamer3').show();
		room = 3;
	}

	document.getElementById("Kamer 4").onclick = function () { K4() };
	function K4() {
		$("#StartPage").fadeOut(500);
		$('#OverlayKamer4').fadeIn(500);
		$('#Kamer4').show();

		$("#KnopLinks").hide();
		$("#KnopMidden").hide();
		$("#KnopRechts").hide();
		$('#ButtonKnopLinks').show();
		$('#ButtonKnopMidden').show();
		$('#ButtonKnopRechts').show();
		room = 4;

	}




	document.getElementById("EC").onmousemove = function (event) { keer1(event) };
	function keer1() {
		if (keer == 0) {
			alert("Use your mouse, press some keys, press enter and have some fun!");
			keer = 1;
		}
	}


	//check function
	var update = setInterval(check, 100);
	// inside check function we need confitions

	//set interval function // to call check
	function check() {
		//round down the time to get a whole number
		var time = video.currentTime.toFixed(1);
		time = Number(time);
		console.log(video.currentTime, time);
		console.log(room);


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

		if (room === 1) { }
		//terug van kamer 1 naar hoofdmenu
		$("#1naarterug").bind("click", function () {
			$("#OverlayKamer1").fadeOut(500);
			$("#Kamer1").fadeOut(500);
			room = 0;
			$("#StartPage").fadeIn(500);
		});


		if (room === 2) {
			//terug van kamer 2 naar hoofdmenu
			$("#2naarterug").bind("click", function () {
				$("#OverlayKamer2").fadeOut(500);
				$("#Kamer2").fadeOut(500);
				room = 0;
				$("#StartPage").fadeIn(500);
			});
		}

		$('#Phone').hide();
		$('#Mail').hide();
		$('#Facebook1').hide();
		$('#McDonalds').hide();
		$('#Facebook2').hide();
		$('#Whatsapp').hide();
		$('#News').hide();
		$('#Comment').hide();
		$('#Like').hide();


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

			document.getElementById("ButtonKnopLinks").onclick = function () { KnopLinks(); playvid() };
			function KnopLinks() {
				$("#KnopNiks").hide();
				$("#KnopLinks").show();
				$('#ButtonKnopLinks').hide();
				$('#ButtonKnopMidden').hide();
				$('#ButtonKnopRechts').hide();
				k4klik = k4klik + 1;
				console.log("geklikt links");
				setTimeout(SL, 1000);
				function SL() {
					$('#ButtonKnopLinks').show();
					$('#ButtonKnopMidden').show();
					$('#ButtonKnopRechts').show();
					$("#KnopNiks").show();
					$("#KnopLinks").hide();

				}
			}

			document.getElementById("ButtonKnopMidden").onclick = function () { KnopMidden(); playvid() };
			function KnopMidden() {
				$("#KnopNiks").hide();
				$("#KnopMidden").show();
				$('#ButtonKnopLinks').hide();
				$('#ButtonKnopMidden').hide();
				$('#ButtonKnopRechts').hide();
				k4klik = k4klik + 1;
				console.log("geklikt midden");
				setTimeout(SM, 1000);
				function SM() {
					$("#KnopMidden").hide();
					$("#KnopNiks").show();
					$('#ButtonKnopLinks').show();
					$('#ButtonKnopMidden').show();
					$('#ButtonKnopRechts').show();
				}
			}

			document.getElementById("ButtonKnopRechts").onclick = function () { KnopRechts(); playvid() };
			function KnopRechts() {
				$("#KnopNiks").hide();
				$("#KnopRechts").show();
				$('#ButtonKnopLinks').hide();
				$('#ButtonKnopMidden').hide();
				$('#ButtonKnopRechts').hide();
				k4klik = k4klik + 1;
				console.log("geklikt rechts");
				setTimeout(SR, 1000);
				function SR() {
					$('#ButtonKnopLinks').show();
					$('#ButtonKnopMidden').show();
					$('#ButtonKnopRechts').show();
					$("#KnopRechts").hide();
					$("#KnopNiks").show();
				}
			}


			//document.getElementById("Stopcontact").style.display = "hidden";
			document.getElementById("Stopcontact").onclick = function () { Stopcontact(); playvid() };
			function Stopcontact() {
				SC = SC + 1;
			}




			//terug van kamer 4 naar hoofdmenu
			$("#4naarterug").bind("click", function () {
				$("#OverlayKamer4").fadeOut(500);
				$("#Kamer4").fadeOut(500);
				video.style.display = "hidden";
				room = 0;
				k4klik = 0;
				SC = 0;
				endvid = 0;
				video.currentTime = 0;
				$("#StartPage").fadeIn(500);
				video.pause();
			});
		}








		//Kamer 3
		function Kamer3() {
			//RandomK3 = Math.floor(Math.random() * 9);
			console.log("random:" + RandomK3);

			if (RandomK3 === 0) {
				$("#Comment").show();
				document.getElementById("CommentBOX").onmouseover = function () { mouseOver0() };

				function mouseOver0() {
					if (RandomK3 === 0) {
						RandomK3 = Math.floor(Math.random() * 9);
						if (RandomK3 == 0) {
							RandomK3 = Math.floor(Math.random() * 9);
						}
						else {
							$("#Comment").hide();
						}
					}
				}
			}

			if (RandomK3 === 1) {
				$("#Facebook1").show();
				document.getElementById("Facebook1BOX").onmouseover = function () { mouseOver1() };

				function mouseOver1() {
					if (RandomK3 === 1) {

						RandomK3 = Math.floor(Math.random() * 9);
						if (RandomK3 == 1) {
							RandomK3 = Math.floor(Math.random() * 9);
						}
						else {
							$("#Facebook1").hide();
						}
					}
				}
			}

			if (RandomK3 === 2) {
				$("#Facebook2").show();
				document.getElementById("Facebook2BOX").onmouseover = function () { mouseOver2() };

				function mouseOver2() {
					if (RandomK3 === 2) {

						RandomK3 = Math.floor(Math.random() * 9);
						if (RandomK3 == 2) {
							RandomK3 = Math.floor(Math.random() * 9);
						}
						else {
							$("#Facebook2").hide();
						}
					}
				}
			}

			if (RandomK3 === 3) {
				$("#Like").show();
				document.getElementById("LikeBOX").onmouseover = function () { mouseOver3() };

				function mouseOver3() {
					if (RandomK3 === 3) {

						RandomK3 = Math.floor(Math.random() * 9);
						if (RandomK3 == 3) {
							RandomK3 = Math.floor(Math.random() * 9);
						}
						else {
							$("#Like").hide();
						}
					}
				}
			}

			if (RandomK3 === 4) {
				$("#Mail").show();
				document.getElementById("MailBOX").onmouseover = function () { mouseOver4() };

				function mouseOver4() {
					if (RandomK3 === 4) {

						RandomK3 = Math.floor(Math.random() * 9);
						if (RandomK3 == 4) {
							RandomK3 = Math.floor(Math.random() * 9);
						}
						else {
							$("#Mail").hide();
						}
					}
				}
			}

			if (RandomK3 === 5) {
				$("#McDonalds").show();
				document.getElementById("McDonaldsBOX").onmouseover = function () { mouseOver5() };

				function mouseOver5() {
					if (RandomK3 === 5) {

						RandomK3 = Math.floor(Math.random() * 9);
						if (RandomK3 == 5) {
							RandomK3 = Math.floor(Math.random() * 9);
						}
						else {
							$("#McDonalds").hide();
						}
					}
				}
			}

			if (RandomK3 === 6) {
				$("#News").show();
				document.getElementById("NewsBOX").onmouseover = function () { mouseOver6() };

				function mouseOver6() {
					if (RandomK3 === 6) {

						RandomK3 = Math.floor(Math.random() * 9);
						if (RandomK3 == 6) {
							RandomK3 = Math.floor(Math.random() * 9);
						}
						else {
							$("#News").hide();
						}
					}
				}
			}

			if (RandomK3 === 7) {
				$("#Phone").show();
				document.getElementById("PhoneBOX").onmouseover = function () { mouseOver7() };

				function mouseOver7() {
					if (RandomK3 === 7) {

						RandomK3 = Math.floor(Math.random() * 9);
						if (RandomK3 == 7) {
							RandomK3 = Math.floor(Math.random() * 9);
						}
						else {
							$("#Phone").hide();
						}
					}
				}
			}

			if (RandomK3 === 8) {
				$("#Whatsapp").show();
				document.getElementById("WhatsappBOX").onmouseover = function () { mouseOver8() };

				function mouseOver8() {
					if (RandomK3 === 8) {

						RandomK3 = Math.floor(Math.random() * 9);
						if (RandomK3 == 8) {
							RandomK3 = Math.floor(Math.random() * 9);
						}
						else {
							$("#Whatsapp").hide();
						}
					}
				}
			}


		}



		//Kamer 4
		function Kamer4() {

			console.log(k4klik);
			console.log(SC);
			console.log(time);
			video.style.display = "show";
			$('#Stopcontact').hide();
			//video.currentTime = 0;
			if (endvid == 0) {
				video.play();

			}

			//stap 1

			if (time >= 4.9 && time < 5) {
				console.log("terug");
				video.currentTime = 0;
			}
			//stap 2

			if (time >= 9.9 && time < 10) {
				console.log("terug");
				video.currentTime = 5;
			}
			//stap 3

			if (time >= 14.9 && time < 15) {
				console.log("terug");
				video.currentTime = 10;
			}
			//stap 4

			if (time >= 19.9 && time < 20) {
				console.log("terug");
				video.currentTime = 15;
			}
			//stap 5

			if (video.currentTime >= 24.8 && video.currentTime < 25) {
				console.log("terug");
				video.currentTime = 20;
			}
			//stap 6

			if (video.currentTime >= 26.8 && video.currentTime < 27) {
				console.log("terug");
				video.currentTime = 25;
			}
			//stap 7

			if (video.currentTime >= 28.8 && video.currentTime < 29) {
				console.log("terug");
				video.currentTime = 27;
			}
			//stap 8

			if (video.currentTime >= 30.8 && video.currentTime < 31) {
				console.log("terug");
				video.currentTime = 29;
			}
			//stap 9

			if (video.currentTime >= 32.8 && video.currentTime < 33) {
				console.log("terug");
				video.currentTime = 31;
			}
			//stap 10

			if (video.currentTime >= 34.8 && video.currentTime < 35) {
				console.log("terug");
				video.currentTime = 33;
			}
			//stap 11

			if (video.currentTime >= 36.8 && video.currentTime < 37) {
				console.log("terug");
				video.currentTime = 35;
			}
			//stap 12

			if (video.currentTime >= 38.8 && video.currentTime < 39) {
				console.log("terug");
				video.currentTime = 37;
			}
			//stap 13

			if (video.currentTime >= 40.8 && video.currentTime < 41) {
				console.log("terug");
				video.currentTime = 39;
			}
			//stap 14

			if (video.currentTime >= 42.8 && video.currentTime < 43) {
				console.log("terug");
				video.currentTime = 41;
			}
			//stap 15

			if (video.currentTime >= 44.8 && video.currentTime < 45) {
				video.currentTime = 43;
			}
			//stap 16
			if (k4klik >= 15) {
				$('#Stopcontact').show();
				$('#OverlayKamer4').hide();

			}
			if (video.currentTime >= 45.8 && video.currentTime < 46) {
				console.log("terug");
				video.currentTime = 45;
			}
			if (video.currentTime >= 48) {
				console.log("stop");
				video.pause();
			}
			if (SC == 1) {
				$('#Stopcontact').hide();
				$('#ButtonKnopLinks').hide();
				$('#ButtonKnopMidden').hide();
				$('#ButtonKnopRechts').hide();
				$('#OverlayKamer4').show();
				endvid = 1;

			}
		}

		function playvid() {
			if (k4klik == 0) {
				video.play();
				video.currentTime = 0;

			}

			//stap 2
			if (k4klik == 1) {
				video.currentTime = 5;
			}

			//stap 3
			if (k4klik == 2) {
				video.currentTime = 10;
			}

			//stap 4
			if (k4klik === 3) {
				video.play();
				video.currentTime = 15;
			}

			//stap 5
			if (k4klik === 4) {
				video.play();
				video.currentTime = 20;
			}

			//stap 6
			if (k4klik === 5) {
				video.play();
				video.currentTime = 25;
			}

			//stap 7
			if (k4klik === 6) {
				video.play();
				video.currentTime = 27;
			}

			//stap 8
			if (k4klik === 7) {
				video.play();
				video.currentTime = 29;
			}

			//stap 9
			if (k4klik === 8) {
				video.play();
				video.currentTime = 31;
			}

			//stap 10
			if (k4klik === 9) {
				video.play();
				video.currentTime = 33;
			}

			//stap 11
			if (k4klik === 10) {
				video.play();
				video.currentTime = 35;
			}

			//stap 12
			if (k4klik === 11) {
				video.play();
				video.currentTime = 37;
			}

			//stap 13
			if (k4klik === 12) {
				video.play();
				video.currentTime = 39;
			}

			//stap 14
			if (k4klik === 13) {
				video.play();
				video.currentTime = 41;
			}

			//stap 15
			if (k4klik === 14) {
				video.play();
				video.currentTime = 43;
			}

			//stap 16
			if (k4klik >= 15) {
				$('#Stopcontact').show();
				if (SC >= 1) {
					video.currentTime = 46;
				}
				else {
					video.currentTime = 45;
				}
			}
		}
	}

});// end ready func