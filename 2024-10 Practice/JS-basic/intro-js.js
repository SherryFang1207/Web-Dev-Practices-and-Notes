let count = 0;
function createParagragh() {
  const para = document.createElement("p");
  count++;
  para.textContent = `You clicked the button for a ${count} time!`;
  document.body.appendChild(para);
}
const buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", createParagragh);
}
