const todo = [
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

// 1. Convert to array of objects with two properties -> text, completed
// 2. Create functione to remove a todo by text value
const deleteTodo = function (todo, thing) {
    
    const index = todo.findIndex(function (todos, index) {
        return todos.thing.toLowerCase() === thing.toLowerCase()
    })
    if (index > -1)
    {todo.splice(index, 1)}
}

deleteTodo(todo, 'Code')
console.log(todo)


// Delete the third item
// Add a new item onto the end
// Remove the first item
// todo.splice(2,1)
// todo.push('sex')
// todo.unshift('sex again')

// // 1. The first item
// // 2. The second item

// todo.forEach(function (item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

// for (let i = 0; i <= todo.length; i++) {
//     const num = i + 1
//     const todos = todo[i]
//     console.log(`${num}. ${todos}`)

// }