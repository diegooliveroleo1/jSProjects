const loadingText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let counter = 0

setInterval(blurring, 30)

function blurring() {
    counter += 1
    if (counter > 99) {
        clearInterval()
    }
    loadingText.style.opacity = 1 - (counter / 100)
    loadingText.innerHTML = `${counter}`

    bg.style.filter = `blur(${scale(counter, 0, 100, 30, 0)}px)`
}

/* number: to scale, in: range of number, out: the target range. */

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

/* This time you used just JS to achive the effect, in image-loading you used CSS and JS */