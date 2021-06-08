const todos = [
    {
        thing: 'gym',
        completed: false
    }, {
        thing: 'code',
        completed: true
    }, {
        thing: 'sleep',
        completed: false
    }
]

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.thing
    document.querySelector('body').appendChild(p)
})


// Print Summmary - you have 2 todos left (p element)
// Add a p for each to do above (use text value)

// Listen for new todo creation

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Did this work?')
    console.log(e)
})

document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
})