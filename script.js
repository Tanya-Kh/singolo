const headerMenu = document.getElementById("nav");
const arrowLeft = document.getElementsByClassName("arrow-left");
const arrowRight = document.getElementsByClassName("arrow-right");
const secondSlide = document.getElementById("second-slide");
const slider = document.getElementById("slider");
const leftScreen = document.getElementById("left-screen");
const rightScreen = document.getElementById("right-screen");
const leftButton = document.getElementById("left-phone-button");
const rightButton = document.getElementById("right-phone-button");

arrowLeft[0].addEventListener("click", showSecondSlide);
arrowRight[0].addEventListener("click", showSecondSlide);
leftButton.addEventListener("click", blackScreenLeft);
rightButton.addEventListener("click", blackScreenRight);

headerMenu.addEventListener("click", (event) => {
	headerMenu.querySelectorAll("a").forEach(el => el.classList.remove("active"))
	event.target.classList.add("active")
});


function showSecondSlide() {

	if (secondSlide.style.zIndex != "2") {
		secondSlide.style.zIndex = "2";
		slider.className = "slider extra";
	} else {
		secondSlide.style.zIndex = "-2";
		slider.className = "slider";
	}
}

function blackScreenLeft() {

	if (leftScreen.style.zIndex != "1") {
		leftScreen.style.zIndex = "1";
	} else {
		leftScreen.style.zIndex = "-1";
	}
	
}

function blackScreenRight() {

	if (rightScreen.style.zIndex != "1") {
		rightScreen.style.zIndex = "1";
	} else {
		rightScreen.style.zIndex = "-1";
	}

}
	




