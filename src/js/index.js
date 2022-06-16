const turnAlert = document.querySelector('.alert')
const board = document.querySelector('.game-board')

window.addEventListener('load', () => {
    if (screen.height > screen.width) {
        board.style.display = 'none'
        turnAlert.style.display = 'flex'
    }
})


const characters = document.querySelectorAll('.character')
var idCharacterSelected = ''

characters.forEach(character => {
    character.addEventListener('click', selectCharacter)
});

const playBtn = document.querySelector('.play-button button')

function selectCharacter(getId) {
    idCharacterSelected = this.id

    let arrow = document.querySelector(`.arrow-${idCharacterSelected}`)

    let arrowActived = document.querySelector('.actived')
    if (arrowActived != null) {
        arrowActived.classList.remove('actived')
    }
    arrow.classList.add('actived')

    let characterActived = document.querySelector('.selected')
    if (characterActived != null) {
        characterActived.classList.remove('selected')
    }
    this.classList.add('selected')

    if (idCharacterSelected != '') {
        playBtn.removeAttribute('disabled')
    }   
}

const marioSmall = document.querySelector('.mario-small')
const marioBig = document.querySelector('.mario-big')
const luigiSmall = document.querySelector('.luigi-small')
const luigiBig = document.querySelector('.luigi-big')

const playButton = document.querySelector('.play-button')

function play() {
    window.location.href = "game/game.html"
}

playButton.addEventListener('click', playGame) 
playButton.addEventListener('touchstart', playGame)

function playGame (e) {
    if (idCharacterSelected == '') {
        e.preventDefault()

        console.log('vazio');
    } else {
        console.log(idCharacterSelected);
        
        localStorage.setItem('idCharacter', idCharacterSelected)

        play()
    }
} 