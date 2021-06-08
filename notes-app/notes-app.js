// DOM - Document Object Model
// const p = document.querySelector('p')
// p.remove()

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

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})

 // Query all and remove
// const ps =  document.querySelectorAll('p')

// ps.forEach(function (p) {
//     p.textContent = '******'
     // console.log(p.textContent)
     // p.remove()
// })

 // Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)