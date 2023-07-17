const textarea = document.querySelector('#textarea')
const tagContainer = document.querySelector('.tag-container')

textarea.addEventListener('keyup', (e) => {

    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagContainer.innerHTML = ''

    tags.forEach(element => {
        let tag = document.createElement('span')
        tag.classList.add('tag')
        tag.innerText = element
        tagContainer.appendChild(tag)
    });
}

function randomSelect() {
    const times = 30
    textarea.setAttribute('readonly', '')

    setTimeout(() => {
        textarea.removeAttribute('readonly')
    }, times * 100)

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        })

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('selected')
}

function unHighlightTag(tag) {
    tag.classList.remove('selected')
}







