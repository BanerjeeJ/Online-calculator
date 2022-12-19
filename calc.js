function display(event) {
  event.preventDefault();
  const target = event.target;
  const value = target.innerText.trim();
  const screen = document.getElementById("data");
  if (screen.innerText === "0") screen.innerText = "";
  screen.innerText = screen.innerText + value;
}

/*document.getElementById("data");

switch (value) {
  case "AC":
    display.innerText = "";
    break;

  case "DEL":
    display.innerText.slice(0, -1);
    break;

  case "=":
    display.innerText = eval(display.innerText);
    break;

  default:
    display.innertext += value;
}*/

function myFunction() {
  document.getElementById("data"), (innerHTML = "");
}
const value1= parseFloat;
const value2= parseFloat;

let result;
if(operator=="+"){
  result= value1+ value2;

}
else if(operator=="-"){
  result= value1-value2;
}
else if(operator=="*"){
  result= value1*value2;

}
else{
  result= value1/value2;
}
