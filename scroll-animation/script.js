const boxes = document.querySelectorAll('.box')


addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        if (box.getBoundingClientRect().top < triggerPoint) {
            box.classList.add('positioned')
        } else {
            box.classList.remove('positioned')
        }
    })
})

