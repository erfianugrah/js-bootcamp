// === - equality
// !== - no equal
// < less than
// > more than
// >= more than or equal to
// <= less than or equal to

let temp = 31
let isFreezing = temp < 32
// console.log(isFreezing)

if (temp <= 32) {
    console.log('It is freezing outside!')
} else if (temp >= 110) {
    console.log('It is way too hot outside!')
} else console.log('Seems fine')
// Challenge 3
let age = 27
/*let isChild = age <= 7
let isSenior = age >= 65
console.log(isChild)
console.log(isSenior)*/
if (age <= 7) {
    console.log('Child Pricing!')
} else if (age >= 65) {
    console.log('Senior discoung')
} else {
    console.log('You\'re SOL')
 }