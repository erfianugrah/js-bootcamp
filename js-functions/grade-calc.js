// students score, total possible score
// 15/20 - you got a C (75%)!
// A 90-100, B 80-89, C 70-79, F 0-59

const totalPossibleScore = function(score, totalScore) {
    const percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    } 
        return `You got an ${lettergrade} (${percent}%)!`
}

const grade = totalPossibleScore(80, 100)
console.log(grade)