let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let task = JSON.parse(localStorage.getItem("@listTask")) || [];

function renderTask(){
    listElement.innerHTML = "";

    task.map((todoList) => {
        let liElement = document.createElement("li");
        let taskText = document.createTextNode(todoList);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode('Delete');
        linkElement.appendChild(linkText);

        let position = task.indexOf(todoList);
        linkElement.setAttribute("onclick", `deleteTask(${position})`);

        // add task
        liElement.appendChild(taskText);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}

function addTask(){
    if(inputElement.value === ""){
        alert("Enter some Task");
        return false;
    } else{
        let newTask = inputElement.value;

        task.push(newTask);
        inputElement.value = "";

        renderTask();
        saveDates();
    }
}

buttonElement.onclick = addTask;

function deleteTask(position){
    alert("Delete task ? " + position);
    task.splice(position, 1);
    renderTask();
}

function saveDates(){
    localStorage.setItem("@listTask", JSON.stringify(task));
}