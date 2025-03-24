const container = document.querySelector(".container");
const manualButton = document.querySelector(".manualButton");
const blastButton = document.querySelector(".blastButton");

const message = "Set your bomb blast time: ";
let countdown = Number(prompt(message, 15));
function countDownClicked() {
  if (countdown == 0) {
    manualButton.setAttribute("disabled", "");
    blastButton.setAttribute("disabled", "");
  }
  if (countdown == 10) {
    const tenSec = document.createElement("p");
    tenSec.textContent = "Bomb 10 sec remaining! Escape now!";
    container.appendChild(tenSec);
  } else if (countdown == 0) {
    const blasting = document.createElement("p");
    blasting.textContent = "BOOOOOOOMMMMMM!";
    container.appendChild(blasting);
  } else {
    const warning = document.createElement("p");
    warning.textContent = `Bomb Read: ${countdown} seconds`;
    container.appendChild(warning);
  }
  countdown -= 1;
}
manualButton.addEventListener("click", countDownClicked);
blastButton.addEventListener("click", () => {
  while (countdown >= 0) {
    countDownClicked();
  }
});
