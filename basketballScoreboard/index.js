let home = document.querySelector(".home")
let guest = document.querySelector(".guest")

function plusOne(el) {
    el.textContent = parseInt(el.textContent) + 1
}

function plusTwo(el) {
    el.textContent = parseInt(el.textContent) + 2
}

function plusThree(el) {
    el.textContent = parseInt(el.textContent) + 3
}

function newGame() {
    home.textContent = '0'
    guest.textContent = '0'
}

