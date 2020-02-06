var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function player1() {
	for (var i = 0; i < 6; i++) {
		document
			.querySelector(".img1")
			.setAttribute("src", "images/dice" + randomNumber1 + ".png");
		document
			.querySelector(".img2")
			.setAttribute("src", "images/dice" + randomNumber2 + ".png");
	}
}
player1();
document.querySelector(".ref").classList.remove("ref-hide");
if (randomNumber1 > randomNumber2) {
	document.querySelector(".p1").classList.toggle("p1w");
	document.querySelector(".ref").classList.add("ref-hide");
} else if (randomNumber2 > randomNumber1) {
	document.querySelector(".p2").classList.toggle("p2w");
	document.querySelector(".ref").classList.add("ref-hide");
} else {
	document.querySelector(".draw").classList.toggle("draw-h1");
	document.querySelector(".ref").classList.add("ref-hide");
}
/* function p1(i) {
	var image = document.querySelectorAll(".img1");
	for (i = 0; i < image.length; i++) {
		image[i].classList.remove("img1");
	}
}
 */
