// afficher le menu

let menuButton = document.getElementById("menuButton");
let menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("showMenu");
});

// case vacance

let btnVacance = document.getElementById("buttonVacance");
let vacanceDays = document.querySelectorAll(".special");

btnVacance.addEventListener("change", () => {
  let vacanceDays = document.querySelectorAll(".special");
  vacanceDays.forEach((vd) => {
    vd.classList.toggle("active", btnVacance.checked);
  });
});

// dark mode

let btnTheme = document.getElementById("buttonTheme");
let root = document.documentElement;

btnTheme.addEventListener("change", () => {
  if (btnTheme.checked) {
    root.style.setProperty("--bgc-principal", "#111111ff");
    root.style.setProperty("--bgc-border", "#ffffffff");
    root.style.setProperty("--bgc-special", "#3b3b3bff");
    root.style.setProperty("--bgc-checked", "#4CAF50");
    root.style.setProperty("--bgc-not-checked", "#cccccc");
    root.style.setProperty("--bgc-text-color", "#ffffffff");
    root.style.setProperty("--bgc-text-color-data", "#7b7bffff");
    root.style.setProperty("--menu-icon-path", "url(../content/parametres.png)");
  } else {
    root.style.setProperty("--bgc-principal", "#FFFAFA");
    root.style.setProperty("--bgc-border", "#000000");
    root.style.setProperty("--bgc-special", "#b8b8b8");
    root.style.setProperty("--bgc-checked", "#4CAF50");
    root.style.setProperty("--bgc-not-checked", "#cccccc");
    root.style.setProperty("--bgc-text-color", "#000000");
    root.style.setProperty("--bgc-text-color-data", "#0000FF");
    root.style.setProperty("--menu-icon-path", "url(../content/parametres.png)");
  }
});

// afficheur des mois

let btnTimer = document.getElementById("buttonTimer");
let timer = document.getElementById("timer");
let timerDay = document.getElementById("timerDay");

btnTimer.addEventListener("change", () => {
  if (btnTimer.checked) {
    timer.style.display = "block";
    timerDay.style.display = "none";
  } else {
    timer.style.display = "none";
    timerDay.style.display = "block";
  }
});

// Fermer menu quand clique ailleur

document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.classList.remove("showMenu");
  }
});
