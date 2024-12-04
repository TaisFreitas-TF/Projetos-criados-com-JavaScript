const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const task = document.querySelector('.task');

function getLi(){
    const li = document.createElement('li');
    return li;
};

function getDeleteButton(li) {
    li.innerText += ' ';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Apagar';
    
    deleteButton.setAttribute('class', 'delete')
    deleteButton.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(deleteButton);
};


inputTask.addEventListener('keypress', function(e){
    if (e.keyCode === 13 ) {
        if(!inputTask.value) return;
        getTask(inputTask.value);
    }    
});

function clearInput(){
    inputTask.value = '';
    inputTask.focus();
}

function getTask(textInput){
    const li = getLi();
    li.innerText = textInput;
    task.appendChild(li);
    clearInput();
    getDeleteButton(li)
    saveTasks()
};

btnTask.addEventListener('click', function(){
    if(!inputTask.value) return;
    getTask(inputTask.value);
});

document.addEventListener('click', function(e){
    const element = e.target;

    if (element.classList.contains('delete')){
        element.parentElement.remove();
        saveTasks()
    }
});

function saveTasks(){
    const liTasks = task.querySelectorAll('li');
    
    const listTask = [];
    
    for (let tasks of liTasks) {
        let taskText = tasks.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        listTask.push(taskText);
    }

    const tasksJSON = JSON.stringify(listTask);
    localStorage.setItem('tasks', tasksJSON);
}

function addTasksSaved(){
    const tasks = localStorage.getItem('tasks');
    const listTasks = JSON.parse(tasks)
    
    for(let tasks of listTasks){
        getTask(tasks);
    } 
}

addTasksSaved()


