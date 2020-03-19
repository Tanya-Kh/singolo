const headerMenu = document.getElementById("nav");
const arrowLeft = document.getElementsByClassName("arrow-left");
const arrowRight = document.getElementsByClassName("arrow-right");
const secondSlide = document.getElementById("second-slide");
const slider = document.getElementById("slider");
const leftScreen = document.getElementById("left-screen");
const rightScreen = document.getElementById("right-screen");
const leftButton = document.getElementById("left-phone-button");
const rightButton = document.getElementById("right-phone-button");
const imagesContainer = document.getElementsByClassName("images-container")[0];
const images = document.querySelectorAll(".portfolio-image");
const portfolioTabs = document.getElementById("buttons-container");
const portfolioButtons = portfolioTabs.querySelectorAll("button");
const button = document.getElementById("btn");
const closeButton = document.getElementById("close-button");
const form = document.getElementById("form");

console.log(imagesContainer)
arrowLeft[0].addEventListener("click", showSecondSlide);
arrowRight[0].addEventListener("click", showSecondSlide);
leftButton.addEventListener("click", blackScreenLeft);
rightButton.addEventListener("click", blackScreenRight);

headerMenu.addEventListener("click", (event) => {
	headerMenu.querySelectorAll("a").forEach(el => el.classList.remove("active"))
	event.target.classList.add("active")
});

for (let i = 0; i < images.length; i++) {
	images[i].addEventListener("click", activeImage, false);
}

portfolioTabs.addEventListener("click", activeButton)

for (var i = 0; i < portfolioButtons.length; i++) {
	portfolioButtons[i].addEventListener("click", shuffleImages, false);
}

button.addEventListener("click", () => {
	
	form.addEventListener("submit", (evt) => {
		evt.preventDefault();
	})

	const subject = document.getElementById("subject").value.toString();
	const details = document.getElementById("details").value.toString();
	let subjectMessage = document.getElementById("subjectMessage");
	let detailsMessage = document.getElementById("detailsMessage");

	if (document.getElementById("name").value.toString() != "" &&
		document.getElementById("email").value.toString() != "") {
		subject == "" ?
			subjectMessage.innerText = "Без темы" :
			subjectMessage.innerText = "Тема: " + document.getElementById("subject").value.toString();

		details == "" ?
			detailsMessage.innerText = "Без описания" :
			detailsMessage.innerText = "Описание: " + document.getElementById("details").value.toString();

		document.getElementById("message-block").classList.remove("hidden");
	}
});

closeButton.addEventListener("click", () => {
	//document.getElementById("subject").innerText = "";
	//document.getElementById("details").innerText = "";
	form.reset();
	document.getElementById("message-block").classList.add("hidden");
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

function activeImage(event) {
	images.forEach(el => el.classList.remove("active"))
	event.target.classList.add("active")
}

function activeButton() {
	portfolioButtons.forEach(el => el.classList.remove("active"))
	event.target.classList.add("active");
}	

function shuffleImages() {
	const shuffledImages = [...images];

	shuffledImages.forEach((_, i) => {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
	})

	shuffledImages.forEach((image) => {
		image.remove();
		imagesContainer.appendChild(image);
	})
}








