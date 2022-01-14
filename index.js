const filter = document.getElementById("filterBtn");
const dataBase = document.getElementsByClassName("items");

filter.addEventListener("click", Start);

function Start() {
  filter.removeEventListener("click", Start);
  filter.addEventListener("click", Stop);
  dataBase[0].style.visibility = "hidden";
  dataBase[1].style.visibility = "hidden";
}

function Stop() {
  filter.removeEventListener("click", Stop);
  filter.addEventListener("click", Start);
  dataBase[0].style.visibility = "visible";
  dataBase[1].style.visibility = "visible";
}

var responsiveButton = document.getElementById("responsiveButton");

responsiveButton.addEventListener("click", () => {
  gsap.fromTo("#responsiveMenu", { x: 0 }, {x: '100%', scale: 1 });
  document.getElementById("responsiveMenu").style.display = "flex";
  rightPanel.style.display = 'none'
});

var goBack = document.getElementById("goBack");

goBack.addEventListener("click", () => {
  gsap.fromTo("#responsiveMenu", { x: '100%' }, {x: 0, onComplite: hideMenu});
  rightPanel.style.display = 'inline'
});


var leftPanel = document.getElementsByClassName('left-panel')[0];
var rightPanel = document.getElementsByClassName('right-panel')[0];


function hideMenu() {
  document.getElementById("responsiveMenu").style.display = "none";
}