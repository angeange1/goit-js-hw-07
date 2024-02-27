const input = document.querySelector("input")
const createBtn = document.querySelector("button[data-create]")
const destroyBtn = document.querySelector("button[data-destroy]")
const parentBox = document.getElementById("boxes")

createBtn.addEventListener("click", handleCreate)
destroyBtn.addEventListener("click", handleDestroy)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  parentBox.innerHTML = ""
  const array = []
  let boxSize = 30
  for (let i = 1; i <= amount; i += 1) {
    const randomColor = getRandomHexColor()
    const newBox = document.createElement("div")
    newBox.style.backgroundColor = randomColor
    newBox.style.width = `${boxSize}px`
    newBox.style.height = `${boxSize}px`
    array.push(newBox);
    boxSize += 10
  }
    parentBox.append(...array)
}

function handleCreate(event) {
    if ((input.value >= 1) && (input.value <= 100)) {
    createBoxes(input.value)
    input.value = ""
  }
}

function handleDestroy(event) {
  parentBox.innerHTML = ""
}

