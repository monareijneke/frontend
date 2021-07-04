//variable aanmaken
const alertButton = document.querySelector(".btn-alert");
const colorButton = document.querySelector(".btn-color");

const bodyColor = document.querySelector(".blue-background");
const toggleColor = document.querySelector(".blue-background");

//event toevoegen aan variable: Alert
alertButton.addEventListener("click", function () {
  alert("Button clicked");
});

//Event toevoegen: change bgColor
colorButton.addEventListener("click", function () {
  bodyColor.classList.add("red-background");
});

//Event toevoegen: toggle bgColor
colorButton.addEventListener("click", function () {
  toggleColor.classList.toggle("red-background");
});
