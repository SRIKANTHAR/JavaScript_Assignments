

var input = document.querySelector('input');

var add_btn = document.querySelector('button');

var todosDiv = document.querySelector('div.todos');
var todos = [];


async function main(){
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/todos');
        const json = await response.json();
        todos = json.slice(0, 10);
        console.log(todos);

        todos.forEach((todo, index) => {
            const newTodo = document.createElement('p');
            newTodo.setAttribute('key', index);
            newTodo.innerHTML = todo.title;
            todosDiv.appendChild(newTodo);
        });
    }

    catch(e) {
        console.log(e);
    }
}

add_btn.addEventListener('click', function () {
    todosDiv.innerHTML = '';
    todos.filter(todo => todo.completed).forEach((todo, index) => {
        const newTodo = document.createElement('p');
        newTodo.setAttribute('key', index);
        todos.appendChild(newTodo);
    })
})

main();