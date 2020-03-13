const headerMenu = document.getElementById("nav");
const arrowLeft = document.getElementsByClassName("arrow-left");
const arrowRight = document.getElementsByClassName("arrow-right");
const secondSlide = document.getElementById("second-slide");
const slider = document.getElementById("slider");

arrowLeft[0].addEventListener("click", showSecondSlide);
arrowRight[0].addEventListener("click", showSecondSlide);

headerMenu.addEventListener("click", (event) => {
	headerMenu.querySelectorAll("a").forEach(el => el.classList.remove("active"))
	event.target.classList.add("active")
});


function showSecondSlide() {

	if (secondSlide.style.display == "none" || secondSlide.style.display == "") {
		secondSlide.style.display = "block";
		slider.className = "slider extra";
	} else {
		secondSlide.style.display = "none";
		slider.className = "slider";
	}
}
	




