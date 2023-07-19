const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    
    function updateCounter() {
        const target = parseInt(counter.getAttribute('data-target'))
        const increment = target / 100
        let c = parseInt(counter.innerText)

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 10)
        }
    }

    updateCounter()
})