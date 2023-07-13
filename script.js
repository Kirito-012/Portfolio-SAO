// DARK MODE
function myFunction() {
	document.body.classList.toggle("light-mode");
}

const myButton = document.getElementById("theme-toggle");
myButton.onclick = myFunction;

function toggleMobileNav() {
	const mobileNav = document.querySelector(".mobile-nav");
	const mobileLinks = document.querySelectorAll(".mobile-nav__link");

	let isMobileNavOpen = false;

	return function () {
		isMobileNavOpen = !isMobileNavOpen;
		if (isMobileNavOpen) {
			mobileNav.style.display = "flex";
			document.body.style.overflowY = "hidden";
		} else {
			mobileNav.style.display = "none";
			document.body.style.overflowY = "auto";
		}
	};
}

const headerBtn = document.querySelector(".header__bars");
headerBtn.onclick = toggleMobileNav();

const mobileLinks = document.querySelectorAll(".mobile-nav__link");
mobileLinks.forEach((link) => {
	link.onclick = () => {
		toggleMobileNav()();
	};
});
