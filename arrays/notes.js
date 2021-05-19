const notes = [
    'Note 1',
    'Note 2',
    'Note 3'
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

notes.splice(1, 1, 'This is the new item')
console.log(notes.length)
console.log(notes)