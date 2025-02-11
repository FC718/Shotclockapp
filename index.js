let homescore = 0
let guestscore = 0

function incrementHomeScore(points) {
    homescore += points
    document.getElementById("homescore-el").innerText = homescore
    // console.log(homescore)

}

// incrementHomeScore()

function incrementGuestScore(points) {
    guestscore += points
    document.getElementById("guestscore-el").innerText = guestscore
    // console.log(guestscore)

}

// incrementGuestScore()