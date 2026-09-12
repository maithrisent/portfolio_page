let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch')

const disableDarkmode = () => {
    document.body.classList.remove('dark-mode')
    localStorage.setItem('darkmode', null)
}

const enableDarkmode = () => {
    document.body.classList.add('dark-mode')
    localStorage.setItem('darkmode', 'active')
}

if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})