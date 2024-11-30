/* Targeting our input form datas */
const taskNameEl = document.getElementById("todo-input");
const taskDescriptionEl = document.getElementById("todo-description");
const statusEl = document.querySelector(".select-status");

const addTaskBtn = document.querySelector(".todo-button");

const form = document.querySelector(".to-do");

    /* we now need array  store our todo list datas */
const tasks = [];

const taskList = document.querySelector(".todo-list");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(taskNameEl.value, taskDescriptionEl.value, statusEl.value);

    /* validation for input fields*/

    if(!taskNameEl.value || !taskDescriptionEl.value || statusEl.value === ""){
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

    displayTasks();

})

function displayTasks(){
    taskList.innerHTML = "";

    tasks.forEach((task, index)=>{
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <div class="task--items">
        <p class="task-name">${task.taskName}</p>
        <p class="task-description">${task.taskDescription}<p>
        <p class="task-status">${task.status}</p>
        <div class="delete-btn">
             <button class="remove-btn"><i class="fas fa-trash"></i> Delete</button>
        </div>
        </div>
     `;

     /* styling for the task status */
     const task_status = listItem.querySelector(".task-status");
     task_status.style.fontWeight ="bold";
     

    const removeBtn = listItem.querySelector(".remove-btn");
     removeBtn.addEventListener("click", () => {
        removeTask(index)
    });
        taskList.appendChild(listItem);
    })
}

function removeTask(index){
    tasks.splice(index, 1);
    displayTasks();
  
}


