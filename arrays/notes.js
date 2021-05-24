const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    }, {
        title: 'Habits to work on',
        body: 'Exercise.'
    }, {
        title: 'Office mods',
        body: 'Get a new seat'
    }
]
const findNote = function (notes, noteTitle) {
    
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
    })
    
}

console.log(findNotes(notes, 'work'))
// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return note[index]
// }

const note = findNote(notes, 'Office mods')
console.log(note)

// const index = notes.findIndex(function (note, index) {
//     return note.title === 'Habits to work on'
// })
// console.log(index)




// At the end
// notes.pop() // remove
// notes.push('My new note')

// At the beginning
// notes.shift() // remove
// notes.unshift('My first note')

// In the middle
//notes.splice(1, 1)
//notes.splice(1, 0, 'This is the new item')

// notes[2] = 'This is now the new note 3'

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

// notes.splice(1, 1, 'This is the new item')
// console.log(notes.length)
// console.log(notes)

// // Counting ... 1, 2, 3
// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])
// }

// console.log(notes.length - 1)

// console.log(notes.indexOf({}))
