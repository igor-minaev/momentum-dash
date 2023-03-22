const form = document.querySelector('.js-form')
const input = form.querySelector('input')
const greetings = document.querySelector('.js-greetings')
const USER_LS = 'currentUserName'
const SHOWING_CN = 'showing'

const saveUserName = (text) => {
    localStorage.setItem(USER_LS, text)
}

const showGreetings = (text) => {
    greetings.innerText = `Hello, ${text}`
    greetings.classList.add(SHOWING_CN)
    form.classList.remove(SHOWING_CN)
}

const submitHandler = (e) => {
    e.preventDefault()
    const currentValue = input.value
    showGreetings(currentValue)
    saveUserName(currentValue)
}

const askForUserName = () => {
    form.classList.add(SHOWING_CN)
    form.addEventListener('submit', submitHandler)
}

const loadUserName = () => {
    const currentUserName = localStorage.getItem(USER_LS)
    if (currentUserName === null) {
        askForUserName()
    } else {
        showGreetings(currentUserName)
    }
}

const initFn = () => {
    loadUserName()
}

initFn()