const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const userInput = document.getElementById("user-input");
const convertBtn = document.getElementById("conversion-btn");

userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    convertBtn.click(); // Simulates a button click
  }
});

convertBtn.addEventListener("click", function () {
  const input = parseFloat(userInput.value);
  if (isNaN(input)) {
    alert("Please enter a valid number");
    return;
  }

  const lengthOutput = document.getElementById("length-output");
  const volumeOutput = document.getElementById("volume-output");
  const massOutput = document.getElementById("mass-output");
  const tempOutput = document.getElementById("temp-output");
  const speedOutput = document.getElementById("speed-output");

  lengthOutput.textContent = `${input} meters = ${(input * 3.28084).toFixed(
    2
  )} feet | ${input} feet = ${(input / 0.3048).toFixed(2)} meters`;

  volumeOutput.textContent = `${input} liters = ${(input * 0.264172).toFixed(
    2
  )} gallons | ${input} gallons = ${(input / 3.78541).toFixed(2)} liters`;

  massOutput.textContent = `${input} kilos = ${(input * 2.20462).toFixed(
    2
  )} pounds | ${input} pounds = ${(input / 2.20462).toFixed(2)} kilos`;
  tempOutput.textContent = `${input}°C = ${((input * 9) / 5 + 32).toFixed(
    2
  )}°F | ${input}°F = ${(((input - 32) * 5) / 9).toFixed(2)}°C`;

  speedOutput.textContent = `${input} km/h = ${(input * 0.621371).toFixed(
    2
  )} mph | ${input} mph = ${(input / 0.621371).toFixed(2)} km/h`;
});
