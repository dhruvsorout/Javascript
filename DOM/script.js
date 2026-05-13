let todos = [];
let ctr = 1;

function addTodo(){
    todos.push({
        title: document.querySelector("input").value
    });
    render(); 
}

function deleteTodo(index){
    const delElement = document.getElementById('todo-' + index);
    document.getElementById("todo").removeChild(delElement)
}

function createTodoComponent(todo){
    const div = document.createElement("div");
    div.setAttribute("id", 'todo-' + ctr)

    const h1 = document.createElement("h1");
    const button = document.createElement("button");

    const currentId = ctr;
    button.onclick = function(){
        deleteTodo(currentId);
    }

    ctr = ctr + 1;


    button.innerHTML = "Delete";
    h1.innerHTML = todo.title;

    div.appendChild(h1);
    div.appendChild(button);

    return div;
}

function render(){
    ctr = 1;
    document.getElementById("todo").innerHTML = "";
    
    for(let i = 0; i < todos.length; i++){
        const element = createTodoComponent(todos[i]);
        document.getElementById("todo").appendChild(element)
    }
}