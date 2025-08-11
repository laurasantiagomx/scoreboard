let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let num1 = 12
let num2 = 5

function home1() {
    let result = num1 += 1
    homeScore.textContent = result
    console.log(result)
}

function home2() {
    let result = num1 += 2
    homeScore.textContent = result
    console.log(result)
}

function home3() {
    let result = num1 += 3 
    homeScore.textContent = result
    console.log(result)
}

function guest1() {
    let result = num2 += 1
    guestScore.textContent = result
    console.log(result)
}

function guest2() {
    let result = num2 += 2
    guestScore.textContent = result
    console.log(result)
}

function guest3() {
    let result = num2 += 3
    guestScore.textContent = result
    console.log(result)
}

