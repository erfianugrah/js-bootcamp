

let convertFahrenheitToCelsius = function (x) {
    let result = (x - 32) * (5/9)
    return result
}

let celsius = convertFahrenheitToCelsius(32)
console.log(celsius)