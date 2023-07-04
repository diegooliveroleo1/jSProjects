const btn = document.querySelector('.btn');
const search = document.querySelector('.search')
const container = document.querySelector('.container')

btn.addEventListener('click', () => {
    container.classList.toggle('active')
    search.focus();
})


