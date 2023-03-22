const form = document.querySelector('.js-form')
const input = form.querySelector('input')
const greetings = document.querySelector('.js-greetings')
const USER_LS = 'currentUserName'
const SHOWING_CN = 'showing'

const showGreetings = (text) => {
    greetings.innerText = `Hello, ${text}`
    greetings.classList.add(SHOWING_CN)
    form.classList.remove(SHOWING_CN)
}

const submitHandler = (e) => {
    e.preventDefault()
}

const askForUserName = () => {
    form.classList.add(SHOWING_CN)
    form.addEventListener('submit', submitHandler)
}

const loadUserName = () => {
    const currentUserName = localStorage.getItem(USER_LS)
    if (currentUserName === null) {

    } else {
        showGreetings(currentUserName)
    }
}

const init = () => {
    loadUserName()
}

init()