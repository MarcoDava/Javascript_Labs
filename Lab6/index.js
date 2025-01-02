const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {//this event listens to every key press of the user
  output.textContent = `You pressed "${event.key}".`;
});
