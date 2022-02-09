var input = document.querySelector('input');

var add_btn = document.querySelector('button');

var todos = document.querySelector('div.todos');

var count = 0;

add_btn.addEventListener('click', (e) => {
    console.log(input.value);

    if (input.value){
        var new_todo = document.createElement('p');
        new_todo.innerHTML = input.value;

        new_todo.setAttribute('key', count++);

        todos.appendChild(new_todo);
        console.log(new_todo);

        new_todo.addEventListener('click', function (e){
            todos.removeChild(e.target);
        });
    }
    input.value ='';
});