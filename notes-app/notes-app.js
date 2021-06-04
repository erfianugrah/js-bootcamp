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

// Query all and remove
const ps =  document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '******'
    // console.log(p.textContent)
    // p.remove()
})

// Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)