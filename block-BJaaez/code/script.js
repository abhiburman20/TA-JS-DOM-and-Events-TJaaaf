  
let inputText = document.querySelector("#text");
let root = document.querySelector(".root");
let button = document.querySelector("button");

var allTodo = JSON.parse(localStorage.getItem("todos")) || [];

function handleEvents(events) {
    let value = events.target.value;
    if(events.keyCode === 13 && value !== ""){
        console.log(events);
        var todo = {
            name: value,
            isDone: false,
        };
        allTodo.push(todo);
        events.target.value = "";

        createDynamicUi(allTodo, root);
    }
    localStorage.setItem("todo",JSON.stringify(allTodo));
}
function close(events) {
    let id = events.target.dataset.id;
    allTodo.splice(id,1);
    localStorage.setItem("todo",JSON.stringify(allTodo));
    createDynamicUi(allTodo, root);
    
}

function isdone (events) {
    let id = events.target.dataset.id;
    allTodo[id].isDone = !allTodo[id].isDone;
    localStorage.setItem("todo",JSON.stringify(allTodo));
    createDynamicUi(allTodo, root);
}

function filter(allTodo) {
    console.log(allTodo.target);
}

function createDynamicUi(data, ele) {
    ele.innerHTML = "";
    data.forEach((todo, index) =>{
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("input",isdone);
    input.setAttribute("data-id",index);
    input.checked = todo.isDone;
    let p = document.createElement("p");
    p.textContent = todo.name;
    let span = document.createElement("span");
    span.textContent = "X";
    span.setAttribute("data-id", index);
    span.addEventListener("click",close);
    button.addEventListener("click", filter);

    li.append(input, p, span);
    ele.append(li);
    });
}
createDynamicUi(allTodo, root);
inputText.addEventListener("keyup", handleEvents);