let topics = [];
const add = (ev) =>{
    ev.preventDefault();
    let topic = {
        title: document.getElementById('createTaskInput').value
    }
    topics.push(topic);
    localStorage.setItem('TodoList', JSON.stringify(topics));
    createTask();
    
}
    document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('addBtn').addEventListener('click', add);
    });



    var deleteTask = function() {
        var parentEl = this.parentNode;
        parentEl.parentNode.removeChild(parentEl);   //remove ul >> li
        localStorage.clear(parentEl);
    }
    var MaskAddDone = function () {
        var parentEl = this.parentNode;
        var pEl = parentEl.getElementsByClassName('todoName')[0];
        // console.log(pEl);
        if (this.checked) {
            pEl.classList.add('done');
        } else {
            pEl.classList.remove('done');
        }
    }
    var switchToEditMode = function () {
        var parentEl = this.parentNode;
        var pEl = parentEl.getElementsByClassName('todoName')[0];
        var inputEl = parentEl.getElementsByClassName('editInput')[0];
        inputEl.value = pEl.innerHTML;
        parentEl.classList.add('edit-mode');  
    }
    var saveTask = function () {
        var parentEl = this.parentNode;
        var pEl = parentEl.getElementsByClassName('todoName')[0];
        var inputEl = parentEl.getElementsByClassName('editInput')[0];
    
        parentEl.classList.remove('edit-mode');
        if (inputEl.value.trim() == '') {
            return;
        }
        
        pEl.innerHTML = inputEl.value.trim();
        //parentEl.classList.remove('edit-mode');
    
    }
    

function createTask(){
    var inputEl = document.getElementById('createTaskInput');
    var todoName = inputEl.value.trim(); 

    if(todoName == ''){
        return;
    }
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkBox');
    checkbox.onchange = MaskAddDone;
     

    var p = document.createElement('p');
    p.classList.add('todoName');
    p.innerHTML = todoName;

    var editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.classList.add('editInput');


    var editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.innerHTML = 'Edit';
    editBtn.onclick = switchToEditMode;
    

    var saveBtn = document.createElement('button');
    saveBtn.classList.add('saveBtn');
    saveBtn.innerHTML = 'Save';
    saveBtn.onclick = saveTask;

    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.onclick = deleteTask;
   


    var itemEl = document.createElement('li');
    itemEl.classList.add('todoItem');

    itemEl.appendChild(checkbox);
    itemEl.appendChild(p);
    itemEl.appendChild(editInput);
    itemEl.appendChild(editBtn);
    itemEl.appendChild(saveBtn);
    itemEl.appendChild(deleteBtn);


    var parentListEl = document.getElementById('List');
    parentListEl.appendChild(itemEl);

    inputEl.value = '';


}






