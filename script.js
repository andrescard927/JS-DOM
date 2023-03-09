const btn = document.querySelector("[data-form-btn]");
const createTask = (event) => {
    event.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    const lista = document.querySelector("[data-list]")
    const task = document.createElement("li");
    task.classList.add("card")
    input.value = "";
    const taskContent = document.createElement("div")
    taskContent.appendChild(checkComplete());
    const titulo = document.createElement("span");
    titulo.classList.add("task")
    titulo.innerText = valor;
    taskContent.appendChild(titulo);
    taskContent.appendChild(borrarIcon());
    // Solo agrega el icono al div de contenido
    // task.appendChild(borrarIcon());
    task.appendChild(taskContent);
    lista.appendChild(task);
};
const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click", completeTask);
    return i;
}

const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}

const borrarIcon = () => {
    const a = document.createElement("i");
    a.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    a.addEventListener("click",deleteTask);
    return a;
}

const deleteTask = (event) => {
    const tarea = event.target.parentNode.parentNode;
    tarea.remove();
}

btn.addEventListener("click", createTask);






