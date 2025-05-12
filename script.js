const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const userInput = document.getElementById("user-input");
const convertBtn = document.getElementById("conversion-btn");

convertBtn.addEventListener("click", function () {
  const input = parseFloat(userInput.value);
  if (isNaN(input)) {
    alert("Please enter a valid number");
    return;
  }

  const lengthOutput = document.getElementById("length-output");
  const volumeOutput = document.getElementById("volume-output");
  const massOutput = document.getElementById("mass-output");

  lengthOutput.textContent = `${input} meters = ${(input * 3.28084).toFixed(
    2
  )} feet | ${input} feet = ${(input / 0.3048).toFixed(2)} meters`;

  volumeOutput.textContent = `${input} liters = ${(input * 0.264172).toFixed(
    2
  )} gallons | ${input} gallons = ${(input / 3.78541).toFixed(2)} liters`;

  massOutput.textContent = `${input} kilos = ${(input * 2.20462).toFixed(
    2
  )} pounds | ${input} pounds = ${(input / 2.20462).toFixed(2)} kilos`;
});
