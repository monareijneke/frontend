//Variable voor menu tonen
const openMenu = document.querySelector(".menuIcon");
const kleurList = document.querySelector(".menuKleur");
// const hiddenMenu = document.querySelector(".menuKleur");
// const showMenu = document.querySelector(".showMenuKleur");

//function om menu te tonen
const show = () => {
  kleurList.classList.add(".showMenuKleur");
  //   kleurList.classList.remove(".menuKleur");
};
//Event toevoegen
openMenu.addEventListener("click", show);

// kleuren wijzigen

// const bodyBgcolor = document.querySelector(".bgColor");
// const btnBlauw = document.querySelector(".blauw");
// const btnGroen = document.querySelector(".groen");
// const btnRood = document.querySelector(".rood");
// const btnOranje = document.querySelector(".oranje");
// const btnGeel = document.querySelector(".geel");

// btnBlauw.addEventListener("click", function () {
//   bodyBgcolor.classList.remove(".bgColor");
//   bodyBgcolor.classList.add(".blauw");
// });

// Array.from(btns).forEach(function changeColor(btn) {
//   btn.addEventListener("click", function selectColor(e) {
//     if (((e = btnBlauw), bodyBgcolor.add(".blauw")));
//   });
// });
