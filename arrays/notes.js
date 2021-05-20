const notes = [
    'Note 1',
    'Note 2',
    'Note 3',
    'Note 4'
]
// At the end
// notes.pop() // remove
// notes.push('My new note')

// At the beginning
// notes.shift() // remove
// notes.unshift('My first note')

// In the middle
//notes.splice(1, 1)
//notes.splice(1, 0, 'This is the new item')

notes[2] = 'This is now the new note 3'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
})

notes.splice(1, 1, 'This is the new item')
console.log(notes.length)
console.log(notes)

// Counting ... 1, 2, 3
for (let count = 0; count <= 2; count++) {
    console.log(count)
}

for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}

for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count])
}

console.log(notes.length - 1)