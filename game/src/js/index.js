const turnAlert = document.querySelector('.alert')
const board = document.querySelector('.game-board')

window.addEventListener('load', () => {
    if (screen.height > screen.width) {
        board.style.display = 'none'
        turnAlert.style.display = 'flex'
    } else {
        board.style.display = 'block'
        turnAlert.style.display = 'none'
    }
})


const character = document.querySelector('.character')
const pipe = document.querySelector('.pipe')
const cloud = document.querySelector('.clouds')

const idCharacter = localStorage.getItem('idCharacter')
character.src = `src/images/${idCharacter}.gif`

document.addEventListener('keydown', jump)
document.addEventListener('mousedown', jump)

function jump() {
    character.classList.add('jump')

    setTimeout(() => {
        character.classList.remove('jump')
    }, 600);
}

const buttonReset = document.querySelector('.btn-reset')

buttonReset.addEventListener('click', () => {
    location.reload();
});

const loop = setInterval(() => {
    const characterPosition = +window.getComputedStyle(character).bottom.replace('px', '');
    const pipePosition = pipe.offsetLeft;
    const cloudPosition = cloud.offsetLeft;
    const gameOver = document.querySelector('.game-over')

    if (pipePosition < 70 && pipePosition > -16 && characterPosition < 70) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        character.style.animation = 'none';
        character.style.bottom = `${characterPosition}px`

        character.src = `src/images/${idCharacter}-gameover.png`
        character.style.height = '60px'

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`

        buttonReset.style.display = 'block';
        gameOver.style.display = 'block';
        counter.classList.add('counter-final');

        clearInterval(loop)
        clearInterval(loopCounter)
    }
}, 10);


const counter = document.querySelector('.counter')
let count = 0

const loopCounter = setInterval(() => {
    counter.style.display = 'block';

    count++;
    counter.textContent = count;
}, 2000)
