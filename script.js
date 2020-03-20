const headerMenu = document.getElementById("nav");
const headerLinks = headerMenu.querySelectorAll("a");
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
//var changeScroll = 0;

arrowLeft[0].addEventListener("click", showSecondSlide);
arrowRight[0].addEventListener("click", showSecondSlide);
leftButton.addEventListener("click", blackScreenLeft);
rightButton.addEventListener("click", blackScreenRight);
document.addEventListener("scroll", onScroll);

headerMenu.addEventListener("click", (event) => {
	headerLinks.forEach(el => el.classList.remove("active"))
	//changeScrollY();
	event.target.classList.add("active");
	window.scrollY -= 95;
	//window.scrollY -= 95;
	//changeScroll += 95;
	//event.target.g etAttribute("href").substr(1);
	//document.querySelectorAll("section, footer").forEach((el) => {
	//	if (el.getAttribute("id") === event.target.getAttribute("href").substr(1)) {
	//		el.offsetHeight == el.offsetHeight + "95px";
	//		el.classList.add("anchor");
	//	}
	//})
});

//function changeScrollY() {
//	window.scrollY -= 95;
//	changeScroll += 95;
//}

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
	form.reset();
	document.getElementById("message-block").classList.add("hidden");
});

function onScroll(event) {
	const curPosition = window.scrollY;
	document.querySelectorAll("header, section, footer").forEach((el) => {

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








