// Variables de referencia al DOM
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const searchInput = document.getElementById('search-input');
const taskList = document.getElementById('task-list');

// Array para almacenar las tareas
let tasks = [];

// Función para agregar una nueva tarea
function addTask(task) {
    if (task) {
        const newTask = {
            id: Date.now(),
            name: task,
            completed: false
        };
        tasks.push(newTask);
        renderTasks(tasks);
        taskInput.value = '';
    }
}

// Función para eliminar una tarea por id
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks(tasks);
}

// Función para renderizar las tareas en el DOM
function renderTasks(tasksToRender) {
    taskList.innerHTML = '';
    tasksToRender.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <span>${task.name}</span>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(taskElement);
    });
}

// Función para buscar tareas
function searchTasks(query) {
    const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(query.toLowerCase()));
    renderTasks(filteredTasks);
}

// Evento para agregar una tarea
addTaskBtn.addEventListener('click', () => addTask(taskInput.value));

// Evento para buscar tareas
searchInput.addEventListener('input', (e) => searchTasks(e.target.value));
