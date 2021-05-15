let add = function (x, y, z) {
    return x + y + z
}

let result = add(11, 12, 14)
console.log(result)

// Default Arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
  //  return 'Name ' + name + ' - Score: ' + score
}

let scoreText = getScoreText()
console.log(scoreText)

// Challenge
let getTip = function(total, tipPercent = 0.2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    
    return `Total: ${total} * ${percent}`
}

let bill = getTip(300, 0.1)
console.log(bill)