function display(event) {
  event.preventDefault();
  const target = event.target;
  const value = target.innerText.trim();
  const screen = document.getElementById("data");
  if (screen.innerText === "0") screen.innerText = "";
  screen.innerText = screen.innerText + value;
}
