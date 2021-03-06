// Read existing notes from localstorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
    } else {
        return []
    }
}
// Save the notes to localstorage
const saveNotes = function (notes) {
        localStorage.setItem('notes', JSON.stringify(notes))
}

// Generate the DOM Structure
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('p')

        if (note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unnamed Note'
        }
    return noteEl
}

// Render app notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}