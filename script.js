const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".character");
const specialChars = ["=", "+", "%", "/", "*", "-"];
let output = "";

const calculate = (value) => {
  result.focus();
  if (value === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (value === "AC") {
    output = "";
  } else if (value === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(value)) return;
    output += value;
  }
  result.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
