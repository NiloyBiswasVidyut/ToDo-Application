let todoInput = document.querySelector('#todoInput');
let addBtn = document.querySelector('#addBtn');
let todoList = document.querySelector('#todoList');

function createList(text) {
    let li = document.createElement('li');
    li.className = 'todo-item';

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-check';
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed');
    })

    let textSpan = document.createElement('span');
    textSpan.className = 'todo-text';
    textSpan.textContent = text;

    let delBtn = document.createElement('button');
    delBtn.className = 'del-btn';
    delBtn.textContent = 'delete';


    delBtn.addEventListener('click', function() {
        li.remove();
    })

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(delBtn);


    return li;
}

function todoAdd() {
    let inputValue = todoInput.value;
    if (!inputValue) return;

   let li = createList(inputValue);
   todoList.appendChild(li);
   todoInput.value = '';
}

addBtn.addEventListener('click', todoAdd);