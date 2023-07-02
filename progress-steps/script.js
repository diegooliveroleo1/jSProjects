const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let currentActive = 1;

next.addEventListener('click', () => {
    if (currentActive < circles.length) {
        currentActive++;
    }
    update();
})

prev.addEventListener('click', () => {
    if (currentActive > 1) {
        currentActive--;
    }
    update();
})


function update() {
    circles.forEach((circle, index) => {
        if (index == currentActive) {
            circle.classList.remove('active');
        } else if (index < currentActive) {
            circle.classList.add('active');
        }
    })
    progress.style.width = ((currentActive - 1) / (circles.length - 1)) * 100 + '%';
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
