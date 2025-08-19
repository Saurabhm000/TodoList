// Get your buttons and elements from the page
let submitButton = document.querySelector(".submitbutton");
let input = document.querySelector(".inputtext");
let ul = document.querySelector(".unorderedlist");

// Load tasks when the page opens
window.addEventListener("load", () => {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach(task => {
        createTask(task.text, task.completed);
    });
});

// When the button is clicked
submitButton.addEventListener("click", () => {
    let taskText = input.value.trim();

    if (taskText !== "") {
        createTask(taskText, false); // show it on screen
        saveToLocalStorage(taskText, false); // save it in memory
        input.value = ""; // clear input box
    }
});

// ✅ Function to show a task on the screen
function createTask(text, isCompleted) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerText = text;

    if (isCompleted) {
        span.classList.add("completed");
    }

    li.appendChild(span);
    ul.appendChild(li);

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("deletebutton");
    li.appendChild(deleteBtn);

    // When delete button is clicked
    deleteBtn.addEventListener("click", () => {
        ul.removeChild(li);
        removeFromLocalStorage(text);
    });

    // When task is clicked (to mark completed)
    li.addEventListener("click", () => {
        span.classList.toggle("completed");
        toggleCompleteInStorage(text);
    });
}

// 💾 Save task to localStorage
function saveToLocalStorage(text, completed) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: text, completed: completed });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ❌ Remove task from localStorage
function removeFromLocalStorage(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.text !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ✅ Toggle completed in localStorage
function toggleCompleteInStorage(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(task => {
        if (task.text === text) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
