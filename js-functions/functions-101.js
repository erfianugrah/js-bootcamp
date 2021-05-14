// functions - input, code, output

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
console.log(value)

// Challenge Area

/*
let fahrenheit = 32
let celsius = (fahrenheit - 32) * (5/9)
console.log(celsius)
let kelvin = (((fahrenheit - 32) * 5) / 9) + 273.15
console.log(kelvin)
*/

let convertFahrenheitToCelsius = function (x) {
    let result = (x - 32) * (5/9)
    return result
}

let celsius = convertFahrenheitToCelsius(32)
console.log(celsius)