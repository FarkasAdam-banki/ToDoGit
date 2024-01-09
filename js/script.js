function clear() {
    var sections = document.getElementsByClassName("cont");
    /*var sections = document.querySelectorAll("cont");*/
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
start();


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
    document.querySelector(".title").innerHTML = "TEENDŐK";
    appear();
})

var subTaskIndex = 0;
subtasks.addEventListener("click", function () {

    let placesToAdd = document.querySelector(".toDoAddSubtask")
    placesToAdd.innerHTML += '<div class="toDoAddSubTaskName subTask'+subTaskIndex+'">' +
        '<div class="highlight"><img src="images/trash.png" alt="törlés" title="törlés" class="subTaskDelete'+subTaskIndex+'"></div>' +
        '<input type="text" class="toDoAddName" placeholder="Az alfeladat neve...">' +
        '<form class="toDoAddState">' +
        '<input type="range" class="form-range custom-range" min="1" max="3" value="1" class="stateSlider" />' +
        '</form>' +
        '<div></div>' +
        '<div></div>' +
        '<div class="toDoAddStateText">' +
        '<div class="leftState">Várakozo</div>' +
        '<div class="centerState">folyamatban</div>' +
        '<div class="rightState">elkészült</div>' +
        '</div>' +
        '</div>';
        subTaskIndex++;


})



document.querySelector(".create-btn").addEventListener("click", function () {
    // Adatok lekérése a HTML-ből
    const todoNameInput = document.querySelector(".toDoAddName");
    const todoStateInput = document.querySelector(".stateSlider");
    const deadlineInput = document.querySelector(".toDoAddRightCenter input[type='date']");
    const colorInput = document.querySelector(".colorPicker");

    const todoName = todoNameInput ? todoNameInput.value : "";
    const todoState = todoStateInput ? todoStateInput.value : "";
    const deadline = deadlineInput ? deadlineInput.value : "";
    const color = colorInput ? colorInput.value : "";
    
    const subtaskElements = document.querySelectorAll(".toDoAddSubtask .toDoAddSubTaskName");
    const subtasks = [];
    
    subtaskElements.forEach(function (subtaskElement) {
        const subtaskNameInput = subtaskElement.querySelector(".toDoAddName");
        const subtaskStateInput = subtaskElement.querySelector(".stateSlider");
    
        const subtaskName = subtaskNameInput ? subtaskNameInput.value : "";
        const subtaskState = subtaskStateInput ? subtaskStateInput.value : "";
    
        subtasks.push({ name: subtaskName, state: subtaskState });
    });

    // Objektumok létrehozása és a teendok tömbbe rakása
    const todoObject = {
        name: todoName,
        state: todoState,
        deadline: deadline,
        color: color,
        subtasks: subtasks
    };

    teendok.push(todoObject);
    console.log("Elkészült objektumok:", teendok);
    // Inputok nullázása
    document.querySelector(".toDoAddName").value = "";
 
    document.querySelector(".toDoAddRightCenter input[type='date']").value = "";
    

    // Alfeladat inputok törlése
    const subtaskContainer = document.querySelector(".toDoAddSubtask");
    subtaskContainer.innerHTML = "";

    // Üres alfeladat hozzáadása a frissítéshez
    addEmptySubtask();
});

// Segédfüggvény az üres alfeladat hozzáadásához
function addEmptySubtask() {
    const subtaskContainer = document.querySelector(".toDoAddSubtask");
    subtaskContainer.innerHTML += '<div class="toDoAddSubTaskName">' +
        '<div class="highlight"><img src="images/trash.png" alt="törlés" title="törlés" class="subTaskDelete"></div>' +
        '<input type="text" class="toDoAddName" placeholder="Az alfeladat neve...">' +
        '<form class="toDoAddState">' +
        '<input type="range" class="form-range custom-range" min="1" max="3" value="1" class="stateSlider" />' +
        '</form>' +
        '<div></div>' +
        '<div></div>' +
        '<div class="toDoAddStateText">' +
        '<div class="leftState">Várakozó</div>' +
        '<div class="centerState">folyamatban</div>' +
        '<div class="rightState">elkészült</div>' +
        '</div>' +
        '</div>';
}

// Kezdeti üres alfeladat hozzáadása
addEmptySubtask();

// A teendők tömb, ahol az elkészült objektumokat tároljuk
const teendok = [];




