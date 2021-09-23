const button = document.querySelector(".container");
const toggle = document.querySelector(".toggle-btn");

button.addEventListener("click", function () {
	toggle.classList.toggle('active');
});


// onclick="this.classList.toggle('active')