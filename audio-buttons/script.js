const sounds = document.querySelectorAll('audio')
const btns = document.querySelectorAll('figure')

btns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        sounds.forEach((sound, idx) => {
            sounds[idx].pause()
            sounds[idx].currentTime = 0
        })
        sounds[idx].play()
    })
})
