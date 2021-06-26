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
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todo, thing) {
        const filteredTodos = todo.filter( function (todo) {
            const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
            const hideCompletedmatch = !filters.hideCompleted || !todo.completed     
            return searchTextMatch && hideCompletedmatch
    })

    // filteredTodos = filteredTodos.filter(function (todo) {
    //     return !filters.hideCompleted || !todo.completed
         // if (filters.hideCompleted) {
        //     return !todo.completed
        // } else {
        //     return true
        // }
    // })

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

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todo, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todo.push({
        thing: e.target.elements.thing.value,
        completed:false
    })
    renderTodos(todos, filters)
    e.target.elements.thing.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})