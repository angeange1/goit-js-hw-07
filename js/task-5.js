const colorBtn = document.querySelector(".change-color")
const textAboutColor = document.querySelector(".color")

colorBtn.addEventListener("click", handleClick)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleClick() {
    const randomColor = getRandomHexColor()
    document.body.style.backgroundColor = randomColor
    textAboutColor.textContent = randomColor
}
