const mandalinha = document.querySelector('.mandalinha');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.getElementById('score');
let score = 0;
let scored = false; 

const jump = () => {
    mandalinha.classList.add('jump');

    setTimeout(() => {
        mandalinha.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const mandalinhaPosition = +window.getComputedStyle(mandalinha).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && mandalinhaPosition < 80) {
        // Colisão
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;   
        mandalinha.style.animation = 'none';
        mandalinha.style.bottom = `${mandalinhaPosition}px`;   
        mandalinha.src = 'images/game-over.png';
        mandalinha.style.width = '210px';
        mandalinha.style.marginLeft = '50px';
        mandalinha.style.zIndex = '10';

        clearInterval(loop);
    } else if (pipePosition < 0 && !scored) {
        score++;
        scoreDisplay.textContent = score;
        scored = true; 
    } else if (pipePosition >= 120) {
        
        scored = false;
    }
}, 10);

document.addEventListener('keydown', jump);
