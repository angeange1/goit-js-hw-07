const nameInput = document.getElementById("name-input")
const nameOutput = document.getElementById("name-output")

nameInput.addEventListener("input", setOutput)

function setOutput(event) {
    const trimmedValue = event.currentTarget.value.trim()
    nameOutput.textContent = trimmedValue
    if (trimmedValue === "")
    { nameOutput.textContent = "Anonymous" }
    
}

