// Lexical Scoping (Static Scope)
// Global Scope - Defined outsiede of all code block
// Local Scope - Defined inside a code block

// In a scope you can access variables defined in that scope. or in any parent/ancestor scope

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varOne'
}

console.log(varTwo)