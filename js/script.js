const mandalinho = document.querySelector('.mandalinho');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.getElementById('score');
const misterCleiImage = document.getElementById('misterCleiImage');
let score = 0;
let scored = false; 

const jump = () => {
    mandalinho.classList.add('jump');

    setTimeout(() => {
        mandalinho.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const mandalinhoPosition = +window.getComputedStyle(mandalinho).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && mandalinhoPosition < 80) {
        // Colisão
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;   
        mandalinho.style.animation = 'none';
        mandalinho.style.bottom = `${mandalinhoPosition}px`;   
        mandalinho.src = 'images/game-over.png';
        mandalinho.style.width = '210px';
        mandalinho.style.marginLeft = '50px';
        mandalinho.style.zIndex = '10';

        clearInterval(loop);
    } else if (pipePosition < 0 && !scored) {
        score++;
        scoreDisplay.textContent = score;
        scored = true; 

        if (score === 10) {
            misterCleiImage.classList.remove('hidden');
            setTimeout(() => {
                misterCleiImage.classList.add('hidden');
            }, 2000); // Exibir por 2 segundos
        }
    } else if (pipePosition >= 120) {
        scored = false;
    }
}, 10);

document.addEventListener('keydown', jump);
