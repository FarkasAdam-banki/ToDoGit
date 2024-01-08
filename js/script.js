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
        '<div class="highlight"><img src="images/trash.png" alt="törlés" title="törlés" class"subTaskDelete'+subTaskIndex+'"></div>' +
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