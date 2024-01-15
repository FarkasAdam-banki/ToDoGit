var toDoList = [];

function clear() {
    var sections = document.getElementsByClassName("cont");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
}
function start() {
    clear();

    document.querySelector(".toDoList").style.display = "block";
    
}

function disappear() {
    document.querySelector(".search-container").style.display = "none";
    for (let i = 0; i < bottombtns.length; i++) {
        bottombtns[i].style.display = "none";
    }
}

function appear() {
    document.querySelector(".search-container").style.display = "block";
    for (let i = 0; i < bottombtns.length; i++) {
        bottombtns[i].style.display = "block";
    }
}
function addDel(name, state, deadline, color) {
    name = document.querySelector(".toDoAddName").value = null;
    state = document.querySelector(".stateSlider").value = 1;
    deadline = document.querySelector('input[type="date"]').value = null;
    color = document.querySelector(".colorPicker").value = "#ff0000";
}



var add = document.querySelector(".newbtn");
var edit = document.querySelector(".editbtn");
var del = document.querySelector(".deletebtn");
var bottombtns = document.querySelectorAll(".bottombtn");
var subtasks = document.querySelector(".addSubTask");

add.addEventListener("click", function () {
    clear();
    document.querySelector(".toDoAdd").style.display = "block";
    document.querySelector(".title").innerHTML = "Új feladat létrehozása";
    disappear();

})
edit.addEventListener("click", function () {
    clear();
    document.querySelector(".toDoList").style.display = "block";
    document.querySelector(".title").innerHTML = "TEENDŐK";
    appear();

})
del.addEventListener("click", function () {
    clear();
    document.querySelector(".toDoDel").style.display = "block";
    document.querySelector(".title").innerHTML = "TEENDŐK-TÖRLÉSE";
    appear();
})


var subTaskIndex = 0;

function addSubTaskElement() {
    let placesToAdd = document.querySelector(".toDoAddSubtask");
    let subTaskElement = document.createElement("div");
    subTaskElement.classList.add("toDoAddSubTaskName", "subTask" + subTaskIndex);

    subTaskElement.innerHTML =
        '<div class="highlight2"><img src="images/trash.png" alt="törlés" title="törlés" class="subTaskDelete"></div>' +
        '<input type="text" class="toDoAddName" placeholder="Az alfeladat neve...">' +
        '<form class="toDoAddState">' +
        '<input type="range" class="form-range custom-range stateSlider stateSliderSub" min="1" max="3" value="1"/>' +
        '</form>' +
        '<div></div>' +
        '<div></div>' +
        '<div class="toDoAddStateText">' +
        '<div class="leftState">Várakozó</div>' +
        '<div class="centerState">folyamatban</div>' +
        '<div class="rightState">elkészült</div>' +
        '</div>';

    
    subTaskElement.querySelector(".subTaskDelete").addEventListener("click", function () {
        subTaskElement.remove();
    });

    placesToAdd.appendChild(subTaskElement);
    subTaskIndex++;
}

subtasks.addEventListener("click", addSubTaskElement);

const todo1 = new Todo('Házimunka', 2, '2024-02-05', '#9b59b6');
todo1.addSubtask(new Subtask('Porszívózás', 1));
todo1.addSubtask(new Subtask('Mosogatás', 2));

const todo2 = new Todo('Könyv olvasás', 3, '2024-03-01', '#e74c3c');

const todo3 = new Todo('Bevásárlás', 1, '2024-02-01', '#3498db');
todo3.addSubtask(new Subtask('Tejet venni', 1));
todo3.addSubtask(new Subtask('Kenyér venni', 2));

const todo4 = new Todo('Főzés', 2, '2024-02-10', '#f39c12');
todo4.addSubtask(new Subtask('Recept kiválasztása', 1));
todo4.addSubtask(new Subtask('Hozzávalók beszerzése', 2));

const todo5 = new Todo('Sportolás', 1, '2024-02-15', '#2ecc71');


toDoList.push(todo1, todo2, todo3, todo4, todo5);


start();


document.querySelector(".create-btn").addEventListener("click", function () {
    const name = document.querySelector(".toDoAddName").value;
    const state = document.querySelector(".stateSlider").value;
    const deadline = document.querySelector('input[type="date"]').value;
    const color = document.querySelector(".colorPicker").value;

    if (name == "") {
        document.querySelector(".alertDiv").innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert">' +
            '<strong>Kérjük A létrehozáshoz adjon meg egy nevet!</strong><br> You should check in on some of those fields below.' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
            '</div>';

    } else {
        const todo = new Todo(name, state, deadline, color);

        const subtaskContainers = document.querySelectorAll('.toDoAddSubTaskName');
        subtaskContainers.forEach(subtaskContainer => {
            const subtaskName = subtaskContainer.querySelector('.toDoAddName').value;
            const subtaskState = subtaskContainer.querySelector('.stateSliderSub').value;
            const subtask = new Subtask(subtaskName, subtaskState);
            todo.addSubtask(subtask);
        });

        toDoList.push(todo);

        console.log(toDoList);
        
    }
});

