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

const filters = {
    searchText: ''
}

const renderTodos = function (todo, thing) {
        const filteredTodos = todo.filter( function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
        const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })
        document.querySelector('#todos').innerHTML = ''

        const summary = document.createElement('h2')
        summary.textContent = `You have ${incompleteTodos.length} todos left`
        document.querySelector('#todos').appendChild(summary)

        filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.thing
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todo, filters)

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Did this work?')
    console.log(e)
})

document.querySelector('#new-todo').addEventListener('input', function (e) {
    console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todo, filters)
})