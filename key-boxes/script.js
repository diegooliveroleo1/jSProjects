const container = document.querySelector('.container')

window.addEventListener('keydown', (ev) => {
    container.innerHTML = `
    <div class="box">${ev.key === ' ' ? 'Space' : ev.key}
    <small>key</small>
    </div>
    <div class="box">${ev.keyCode}
    <small>keyCode</small>
    </div>
    <div class="box">${ev.code}
    <small>code</small>
    </div>
    `
})