const headerMenu = document.getElementById("nav");
const headerLinks = headerMenu.querySelectorAll("a");
const arrowLeft = document.getElementsByClassName("arrow-left");
const arrowRight = document.getElementsByClassName("arrow-right");
const firstSlide = document.getElementById("first-slide");
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
const anchors = document.querySelectorAll("header, section");

arrowLeft[0].addEventListener("click", slideLeft);
arrowRight[0].addEventListener("click", slideRight);
leftButton.addEventListener("click", blackScreenLeft);
rightButton.addEventListener("click", blackScreenRight);
document.addEventListener("scroll", onScroll);

images.forEach((image)=> {
	image.addEventListener("click", activeImage);
});

portfolioTabs.addEventListener("click", activeButton);

portfolioButtons.forEach((portfolioButton)=> {
	portfolioButton.addEventListener("click", shuffleImages);
});

button.addEventListener("click", () => {

	form.addEventListener("submit", (e) => {
		e.preventDefault();
	});

	const subject = document.getElementById("subject").value.toString();
	const details = document.getElementById("details").value.toString();
	const subjectMessage = document.getElementById("subjectMessage");
	const detailsMessage = document.getElementById("detailsMessage");

	if (document.getElementById("name").value.toString() !== "" &&
		document.getElementById("email").value.toString() !== "") {
		subject === "" ?
			subjectMessage.innerText = "Без темы" :
			subjectMessage.innerText = "Тема: " + document.getElementById("subject").value.toString();

		details === "" ?
			detailsMessage.innerText = "Без описания" :
			detailsMessage.innerText = "Описание: " + document.getElementById("details").value.toString();

		document.getElementById("message-block").classList.remove("hidden");
	}
});

closeButton.addEventListener("click", () => {
	form.reset();
	document.getElementById("message-block").classList.add("hidden");
});

function onScroll() {
	const curPosition = window.scrollY + 100;

	anchors.forEach((el) => {

		if (el.offsetTop <= curPosition && (el.offsetTop + el.offsetHeight) > curPosition) {
			headerLinks.forEach((a) => {
				a.classList.remove("active");

				if ((el.getAttribute("id") === a.getAttribute("href").substr(1)) ||
					(el.getAttribute("id") === "header" && a.getAttribute("href") === "#slider")
					) {
					a.classList.add("active");
				}
			});
		}
	});
}

function slideLeft() {
	if (secondSlide.style.zIndex !== "2") {
		firstSlide.classList.add("to-right");
		firstSlide.addEventListener("animationend", () => {
			firstSlide.classList.remove("to-right");
		});
		secondSlide.style.zIndex = "2";
		secondSlide.classList.add("from-left");
		secondSlide.addEventListener("animationend", () => {
			secondSlide.classList.remove("from-left");
		});
	}
	else {
		secondSlide.classList.add("to-right");
		secondSlide.addEventListener("animationend", () => {
			secondSlide.classList.remove("to-right");
		});
		secondSlide.style.zIndex = "-2";
		firstSlide.classList.add("from-left");
		firstSlide.addEventListener("animationend", () => {
			firstSlide.classList.remove("from-left");
		});
	}
}

function slideRight() {
	if (secondSlide.style.zIndex !== "2") {
		firstSlide.classList.add("to-left");
		firstSlide.addEventListener("animationend", () => {
			firstSlide.classList.remove("to-left");
		});
		secondSlide.style.zIndex = "2";
		secondSlide.classList.add("from-right");
		secondSlide.addEventListener("animationend", () => {
			secondSlide.classList.remove("from-right");
		});
	}
	else {
		secondSlide.classList.add("to-left");
		secondSlide.addEventListener("animationend", () => {
			secondSlide.classList.remove("to-left");
		});
		secondSlide.style.zIndex = "-2";
		firstSlide.classList.add("from-right");
		firstSlide.addEventListener("animationend", () => {
			firstSlide.classList.remove("from-right");
		});
	}
}

function blackScreenLeft() {
	blackScreen(leftScreen);
}

function blackScreenRight() {
	blackScreen(rightScreen);
}

function blackScreen(screen) {
	if (screen.style.zIndex !== "1") {
		screen.style.zIndex = "1";
	} else {
		screen.style.zIndex = "-1";
	}
}

function activeImage(event) {
	images.forEach(el => el.classList.remove("active"));
	event.target.classList.add("active");
}

function activeButton(event) {
	portfolioButtons.forEach(el => el.classList.remove("active"));
	event.target.classList.add("active");
}

function shuffleImages() {
	const shuffledImages = [...images];

	shuffledImages.forEach((_, i) => {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
	});

	shuffledImages.forEach((image) => {
		image.remove();
		imagesContainer.appendChild(image);
	});
}
