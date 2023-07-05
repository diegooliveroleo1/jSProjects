const count = document.querySelector('.content')
const loading = document.querySelector('.main-img > img')
const timer = document.querySelector('.timer')

let counter = 0

window.addEventListener('load', () => {
    loading.classList.remove('loading')
    setInterval(counting, 20)
    function counting() {
        if (counter < 100) {
            counter += 1
            count.innerHTML = `${counter}%`
        } else {
            clearInterval()
            timer.classList.add('remove')
        }
    }
})


