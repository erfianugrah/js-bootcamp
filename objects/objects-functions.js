let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A People\'s History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge Area
// Create function - take fahrenheit in - return object with all three
let fahrenheit = 32
let celsius = (fahrenheit - 32) * (5/9)
console.log(celsius)
let kelvin = (((fahrenheit - 32) * 5) / 9) + 273.15
console.log(kelvin)

let getTemp = function (temp) {
    return {
        fahrenheit: temp,
        celsius: (temp - 32) * (5/9),
        kelvin: (((temp - 32) * 5) / 9) + 273.15    
    }
}

let getTemps = getTemp(90)
console.log(getTemps)