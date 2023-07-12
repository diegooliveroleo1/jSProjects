const body = document.querySelector('body')
const boxContainers = document.querySelectorAll('.box-container')
const boxes = document.querySelectorAll('.box')
const inst = document.querySelector('.inst')
const key = document.getElementById('key')
const kCode = document.getElementById('kCode')
const code = document.getElementById('code')

body.addEventListener('keydown', (e) => {
    inst.style.display = 'none'

    boxContainers.forEach(box => {
        box.style.display = 'flex'
    })
    
    key.innerText = e.key
    kCode.innerText = e.keyCode
    code.innerText = e.code
})