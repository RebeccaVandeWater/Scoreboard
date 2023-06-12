// TODO: Add Player to the screen with score manipulation

let homeClick = 0
let awayClick = 0
let totalClick = 0

function resetScore() {
    awayClick = 0
    homeClick = 0

    drawAway()
    drawHome()
}

function homeScoreTotal(num) {
    homeClick += num

    drawHome()
}

function awayScoreTotal(num) {
    awayClick += num

    drawAway()
}

function addTotal() {
    totalClick = awayClick + homeClick

    console.log("Total score is:", totalClick)
}

function drawAway() {
    let awayTotal = document.getElementById('awayScoreDisplay')

    awayTotal.innerText = awayClick

    drawTotal()
}

function drawHome() {
    let homeTotal = document.getElementById('homeScoreDisplay')

    homeTotal.innerText = homeClick

    drawTotal()
}

function drawTotal() {
    addTotal()

    let scoreTotal = document.getElementById('totalScoreDisplay')

    scoreTotal.innerText = totalClick
}

// SECTION - Reference/Old Code

// function homeOne() {
//     homeClick += 1

//     console.log("Home score is:", homeClick)

//     drawHome()
// }

// function homeThree() {
//     homeClick += 3

//     console.log("Home score is:", homeClick)

//     drawHome()
// }

// function homeSix() {
//     homeClick += 6

//     console.log("Home score is:", homeClick)

//     drawHome()
// }

// function homeMinus() {
//     homeClick -= 1

//     console.log("Home score is:", homeClick)

//     drawHome()
// }

// function awayOne() {
//     awayClick += 1

//     console.log("Away score is:", awayClick)

//     drawAway()
// }

// function awayThree() {
//     awayClick += 3

//     console.log("Away score is:", awayClick)

//     drawAway()
// }

// function awaySix() {
//     awayClick += 6

//     console.log("Away score is:", awayClick)

//     drawAway()
// }

// function awayMinus() {
//     awayClick -= 1

//     console.log("Away score is:", awayClick)

//     drawAway()
// }

// TODO: Add Player to the screen with score manipulation

// let players = [
//     { score: 0, name: 'Jeremy' },
//     { score: 1 },
//     { score: 0 },
//     { score: 0 },
//     { score: 7 },
//     { score: 0 },
//     { score: 0 },
//     { score: 0 },
//     { score: 100 },
//     { score: 0 },
//     { score: 0 },
// ]

// let template = ''

// for (let i = 0; i < players.length; i++) {
//     const player = players[i];
//     template += `<p>Player score: ${player.score}</p>`
// }

// document.body.innerHTML = template

// const name = window.prompt('Enter your name')

// console.log(name)