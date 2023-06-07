const generateBtn = document.getElementById("generateBtn");
const container = document.querySelector(".container");
const backgroundEffects = document.querySelector(".background-effects");
const colorText = document.getElementById("colorText");

generateBtn.addEventListener("click", generateRandomBackground);

function generateRandomBackground() {
  const randomColor1 = getRandomColor();
  const randomColor2 = getRandomColor();
  const gradient = `linear-gradient(to bottom right, ${randomColor1}, ${randomColor2})`;
  container.style.background = gradient;
  backgroundEffects.style.background = gradient;
  const rgbColor1 = hexToRgb(randomColor1);
  const rgbColor2 = hexToRgb(randomColor2);
  colorText.innerHTML = `Generated Colors: 
    <span class="rgb-text">rgb(${rgbColor1.r}, ${rgbColor1.g}, ${rgbColor1.b})</span> - 
    <span class="rgb-text">rgb(${rgbColor2.r}, ${rgbColor2.g}, ${rgbColor2.b})</span>`;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}
