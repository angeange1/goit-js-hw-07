const loginForm = document.querySelector(".login-form")
loginForm.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const emailValue = form.elements.email.value.trim()
    const passwordValue = form.elements.password.value.trim()
    if (emailValue === "" || passwordValue === "") { alert('All form fields must be filled in') }
    else {
        console.log({ email: emailValue, password: passwordValue });
        form.reset()
    }
}