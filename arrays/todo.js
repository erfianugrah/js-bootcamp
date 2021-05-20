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

// 1. The first item
// 2. The second item

todo.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`)
})

for (let i = 0; i <= todo.length; i++) {
    const num = i + 1
    const todos = todo[i]
    console.log(`${num}. ${todos}`)

}