let todoUpperContainer = document.getElementById("input");
let input = todoUpperContainer.children[0];
let addButton = todoUpperContainer.children[1];
let searchInput = todoUpperContainer.children[2];
let todoItemContainer = document.getElementById('todo');

addButton.addEventListener('click',addItem);

todoItemContainer.addEventListener('click', deleteItem);

searchInput.addEventListener('keyup',filter);

function addItem(){
    let inputText = input.value;
    // <div class="todo-item"><p>item</p><button>delete</button></div>
    let div=document.createElement('div');
    div.className='todo-item';
    let p = document.createElement('p');
    p.innerText=inputText;
    let deletebtn = document.createElement('button');
    deletebtn.innerText='delete';
    deletebtn.className="deletbtn";
    div.appendChild(p);
    div.appendChild(deletebtn);
    if(inputText){
        todoItemContainer.appendChild(div);
    }
}

function deleteItem(event){
    let deletbtn = event.target;
    if(deletbtn.className.includes("deletbtn")){
        let parentElement = deletbtn.parentElement;
        parentElement.remove();

    }
}

function filter(event){
let text = event.target.value;
let todoItems = document.querySelectorAll(".todo-item");
todoItems.forEach((todo)=>{
    if(todo.children[0].innerText.startsWith(text)){
        todo.style.display='block';
    }else{
        todo.style.display='none';
    }
})
}