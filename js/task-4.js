const loginForm = document.querySelector(".login-form")
loginForm.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const emailValue = form.elements.email.value
    const passwordValue = form.elements.password.value
    if (emailValue === "" || passwordValue === "") { alert('All form fields must be filled in') }
    console.log({email: emailValue.trim(), password: passwordValue.trim()});
    form.reset()
}