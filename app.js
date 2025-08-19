let submitbutton = document.querySelector(".submitbutton");
let input = document.querySelector(".inputtext");
let ul = document.querySelector(".unorderedlist");

submitbutton.addEventListener("click", () => {

    //removing extra spaces from task
    let task = input.value.trim();
    if (task != "") {

        //creating a list and span for task
        console.log("button Clicked");
        let list = document.createElement("li");
        let span = document.createElement("span");
        span.innerText = task;
        list.appendChild(span);
        ul.appendChild(list);

        //creating delete button
        let deletebutton = document.createElement("button");
        deletebutton.classList.add("deletebutton");
        deletebutton.innerHTML = "X";
        list.appendChild(deletebutton);

        deletebutton.addEventListener("click", () => {
            ul.removeChild(list);
        })

        //for completed task
        list.addEventListener("click", () => {
            span.classList.add("completed");

        })

        //for emptying the input field after adding task
        input.value = "";

    }
})