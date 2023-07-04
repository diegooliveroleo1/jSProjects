const btn = document.querySelector('.btn');
const container = document.querySelector('.container')

btn.addEventListener('click', () => {
    
    if (!container.classList.contains('active')) {
        container.classList.add('active')
    } else {
        container.classList.remove('active')
    }
})

