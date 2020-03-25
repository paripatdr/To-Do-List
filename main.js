var deleteTask = function() {
    var parentEl = this.parentNode;
    parentEl.parentNode.removeChild(parentEl);   //remove ul >> li
    localStorage.clear(parentEl);
}
var MaskAddDone = function () {
    var parentEl = this.parentNode;
    var pEl = parentEl.getElementsByClassName('todo-name')[0];
    // console.log(pEl);
    if (this.checked) {
        pEl.classList.add('done');
    } else {
        pEl.classList.remove('done');
    }
}
var switchToEditMode = function () {
    var parentEl = this.parentNode;
    var pEl = parentEl.getElementsByClassName('todo-name')[0];
    var inputEl = parentEl.getElementsByClassName('edit-input')[0];
    inputEl.value = pEl.innerHTML;
    parentEl.classList.add('edit-mode');  
}
var saveTask = function () {
    var parentEl = this.parentNode;
    var pEl = parentEl.getElementsByClassName('todo-name')[0];
    var inputEl = parentEl.getElementsByClassName('edit-input')[0];

    parentEl.classList.remove('edit-mode');
    if (inputEl.value.trim() == '') {
        return;
    }
    
    pEl.innerHTML = inputEl.value.trim();
    //parentEl.classList.remove('edit-mode');

}

function createTask() {
    var inputEl = document.getElementById('createTaskInput');
    var todoName = inputEl.value.trim();  //cut spacebar

    let topics = [];    
    topics.push(todoName);
    localStorage.setItem('TodoList',JSON.stringify(topics));
     
    if (todoName == '') {
        return;     //return out
    }

    
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.onchange = MaskAddDone;
     

    var p = document.createElement('p');
    p.classList.add('todo-name');
    p.innerHTML = todoName;

    var editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.classList.add('edit-input');


    var editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerHTML = 'Edit';
    editBtn.onclick = switchToEditMode;
    

    var saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.innerHTML = 'Save';
    saveBtn.onclick = saveTask;

    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.onclick = deleteTask;
   


    var itemEl = document.createElement('li');
    itemEl.classList.add('todo-item');

    itemEl.appendChild(checkbox);
    itemEl.appendChild(p);
    itemEl.appendChild(editInput);
    itemEl.appendChild(editBtn);
    itemEl.appendChild(saveBtn);
    itemEl.appendChild(deleteBtn);


    var parentListEl = document.getElementById('todoList');
    parentListEl.appendChild(itemEl);

    inputEl.value = '';


}
