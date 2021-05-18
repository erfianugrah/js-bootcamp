let name = 'Erfi'

// Length Property
console.log(name.length)

// Uppecase
console.log(name.toUpperCase())

// lowercase
console.log(name.toLowerCase())

// includes method
let password = 'abc'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// Challenge Area
// isValidPassword

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}