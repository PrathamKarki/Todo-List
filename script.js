/* Targeting our input form datas */
const taskNameEl = document.getElementById("todo-input");
const taskDescriptionEl = document.getElementById("todo-description");
const statusEl = document.querySelector(".select-status");

const addTaskBtn = document.querySelector(".todo-button");

const form = document.querySelector(".to-do");

    /* we now need array  store our todo list datas */
const tasks = [];


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(taskNameEl.value);

    /* validation for input fields*/

    if(!taskNameEl.value || !taskDescriptionEl.value || statusEl.value === " "){
        alert("Please fill out all the details properly!");
        return;
    }


    /* we now need  object to store data */
    const taskObj = {
        taskName: taskNameEl.value,
        taskDescription : taskDescriptionEl.value,
        status:  statusEl.value,
    
    }

    tasks.push(taskObj);

    taskNameEl.value ='';
    taskDescriptionEl.value ='';
    statusEl.value = '';

})
