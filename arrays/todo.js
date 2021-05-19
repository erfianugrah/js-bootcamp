const todo = [
    'gym',
    'code',
    'eat',
    'sleep',
    'drink'
]

// Delete the third item
// Add a new item onto the end
// Remove the first item
todo.splice(2,1)
todo.push('sex')
todo.unshift('sex again')
console.log(todo)