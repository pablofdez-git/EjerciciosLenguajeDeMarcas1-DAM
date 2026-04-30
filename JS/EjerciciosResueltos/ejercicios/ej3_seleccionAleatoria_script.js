const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const randomBtn = document.getElementById('randomBtn');
const taskList = document.getElementById('taskList');

const array = [];

function addTask(){
    const taskText = newTaskInput.value;

    if(taskText){
        //Añadir tarea
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        array.push(taskText);

        taskList.appendChild(taskItem);
        newTaskInput.value = '';

        //Añadir boton borrar dentro de la tarea
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';

        //Darle uso al boton delete
        deleteButton.addEventListener('click', () => {
            taskItem.remove();
        });

        // Agregar el botón al elemento de lista
        deleteButton.classList.add('deleteBtn');
        taskItem.appendChild(deleteButton);
    }
}

function selectTask(){

}
addTaskBtn.addEventListener('click', addTask);
randomBtn.addEventListener('click', selectTask);
