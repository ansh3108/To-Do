document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    function addTask() {
        if (!inputBox || !listContainer) {
            console.error("Input box or list container not found!");
            return;
        }

        if (inputBox.value.trim() === '') {
            alert("You must write something!");
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            li.addEventListener('click', function() {
                li.classList.toggle('checked');
            });
            listContainer.appendChild(li);
            inputBox.value = ''; 
            saveData();
            let span = document.createElement('span');
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
    }

    const addButton = document.querySelector('button');
    if (addButton) {
        addButton.addEventListener('click', addTask);
    } else {
        console.error("Add button not found!");
    }
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagname == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagname == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);  

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();