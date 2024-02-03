var toDoList = [];
var toDoListHelper = [];
var names = [];

function clear() {
    var sections = document.getElementsByClassName("cont");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
}
function start() {
    clear();
    displayTodos();
    displayTodosRemove()
    updateHelpList();
    document.querySelector(".toDoList").style.display = "block";
    document.querySelector(".title").innerHTML = "TEENDŐK";

}

function disappear() {
    document.querySelector(".search-container").style.display = "none";
    for (let i = 0; i < bottombtns.length; i++) {
        bottombtns[i].style.display = "none";
    }
    if (!doneBtnPressed) {
        document.querySelector(".done-btn-div").style.borderColor = "";
        document.querySelector(".done-check").style.display = "none";
    }

    backbtn.style.display = "block";
}

function appear() {
    document.querySelector(".search-container").style.display = "block";
    for (let i = 0; i < bottombtns.length; i++) {
        bottombtns[i].style.display = "block";
    }
    backbtn.style.display = "none";
}
function addDel() {
    document.querySelector(".toDoAddName").value = null;
    document.querySelector(".stateSlider").value = 1;
    document.querySelector('input[type="date"]').value = null;
    document.querySelector(".colorPicker").value = "#0000FF";
}
function isEmpty(str) {
    return !str.trim().length;
}

var add = document.querySelectorAll(".newbtn");
var edit = document.querySelectorAll(".editbtn");
var del = document.querySelectorAll(".deletebtn");
var bottombtns = document.querySelectorAll(".bottomdiv");
var subtasks = document.querySelector(".addSubTask");
var sortDateDown = document.querySelectorAll(".sortByDateDown-btn");
var sortDateUp = document.querySelectorAll(".sortByDateUp-btn");
var sortStateDown = document.querySelectorAll(".sortByStateDown-btn")
var sortStateUp = document.querySelectorAll(".sortByStateUp-btn")
var doneBtn = document.querySelectorAll(".doneToDo-btn");
var doneBtnPressed = false;
var searchbarValue = document.querySelector(".search-input").value;
var searchbar = document.querySelector(".search-input");
var backbtn = document.querySelector(".back-icon");

add.forEach(function (button) {
    button.addEventListener("click", function () {
        document.querySelector(".create").style.display = "block";
        document.querySelector(".edit").style.display = "none";
        let placesToAdd = document.querySelector(".toDoAddSubtask")
        placesToAdd.innerHTML = ""
        addDel();
        clear();
        document.querySelector(".toDoAdd").style.display = "block";
        document.querySelector(".title").innerHTML = "Új feladat létrehozása";
        doneBtnPressed = false;
        disappear();
        updateSubTaskStates();
        toDoList = [...toDoListHelper];
        displayTodos();
        displayTodosRemove();
    })
})
edit.forEach(function (button) {
    button.addEventListener("click", function () {
        clear();
        document.querySelector(".toDoList").style.display = "block";
        document.querySelector(".title").innerHTML = "TEENDŐK";
        appear();
        updateSubTaskStates();

    })
})
del.forEach(function (button) {
    button.addEventListener("click", function () {
        clear();
        document.querySelector(".toDoDel").style.display = "block";
        document.querySelector(".title").innerHTML = "TEENDŐK-TÖRLÉSE";
        doneBtnPressed = false;
        disappear();
        updateSubTaskStates();
        toDoList = [...toDoListHelper];
        displayTodos();
        displayTodosRemove();


    })

})


function updateHelpList() {
    toDoListHelper = [...toDoList];
}

sortDateDown.forEach(function (button) {
    button.addEventListener("click", function () {
        toDoList = [...toDoListHelper];
        displayTodos();
        displayTodosRemove();

    })
})

sortDateUp.forEach(function (button) {
    button.addEventListener("click", function () {
        toDoList = [...toDoListHelper];
        toDoList = toDoList.reverse();
        displayTodos();
        displayTodosRemove();

    })
})

sortStateDown.forEach(function (button) {
    button.addEventListener("click", function () {
        toDoList = [...toDoListHelper];
        toDoList.sort((a, b) => b.getState() - a.getState());
        displayTodos();
        displayTodosRemove();

    })
})

sortStateUp.forEach(function (button) {
    button.addEventListener("click", function () {
        toDoList = [...toDoListHelper];
        toDoList.sort((a, b) => a.getState() - b.getState());
        displayTodos();
        displayTodosRemove();

    })
})

doneBtn.forEach(function (button) {
    button.addEventListener("click", function () {
        if (doneBtnPressed) {
            doneBtnPressed = false;
            document.querySelector(".done-btn-div").style.borderColor = "";
            document.querySelector(".done-check").style.display = "none";
        } else {
            doneBtnPressed = true;
            document.querySelector(".done-btn-div").style.borderColor = "#00ff00";
            document.querySelector(".done-check").style.display = "inline";
        }
        displayTodos();
    })
})


var mainTaskStatus = 1;

function updateSubTaskStates() {
    mainTaskStatus = 1;
    const subtaskContainers = document.querySelectorAll('.toDoAddSubTaskName');
    if (subtaskContainers.length === 0) {
        document.querySelector(".stateSlider").disabled = false;
        return;
    }
    let allSubtasksComplete = true;


    for (let i = 0; i < subtaskContainers.length; i++) {
        const subtaskContainer = subtaskContainers[i];
        const subtaskStateInput = subtaskContainer.querySelector('.stateSliderSub');
        const subtaskState = parseInt(subtaskStateInput.value);

        if (subtaskState == 2 || subtaskState == 3 && mainTaskStatus == 1) {
            mainTaskStatus = 2;
        }
        if (subtaskState !== 3) {
            allSubtasksComplete = false;
        }
    }
    document.querySelector(".stateSlider").disabled = true;
    document.querySelector(".stateSlider").value = mainTaskStatus;
    if (allSubtasksComplete) {
        document.querySelector(".stateSlider").value = 3;
    }
}


var subTaskIndex = 1;

function addSubTaskElement() {
    let placesToAdd = document.querySelector(".toDoAddSubtask");
    let subTaskElement = document.createElement("div");
    subTaskElement.classList.add("toDoAddSubTaskName", "subTask" + subTaskIndex);


    subTaskElement.innerHTML =
        '<div class="highlight2"><img src="images/trash.png" alt="törlés" title="törlés" class="subTaskDelete"></div>' +
        '<input type="text" class="toDoAddName" placeholder="' + subTaskIndex + '. Alfeladat">' +
        '<form class="toDoAddState">' +
        '<input type="range" class="form-range custom-range  stateSliderSub" min="1" max="3" value="1"/>' +
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
        updateSubTaskStates();
    });
    subTaskElement.querySelector(".stateSliderSub").addEventListener("change", function () {
        updateSubTaskStates();
    });

    placesToAdd.appendChild(subTaskElement);
    updateSubTaskStates();
    subTaskIndex++;
}

subtasks.addEventListener("click", addSubTaskElement);


const todo1 = new Todo('Házimunka', 2, '2024-02-05', '#FFF15C');
todo1.addSubtask(new Subtask('Porszívózás', 1));
todo1.addSubtask(new Subtask('Mosogatás', 2));

const todo2 = new Todo('Könyv olvasás', 3, '', '#5F70F2');

const todo3 = new Todo('Bevásárlás', 1, '', '#C20054');
todo3.addSubtask(new Subtask('Tejet venni', 1));
todo3.addSubtask(new Subtask('Kenyér venni', 1));

const todo4 = new Todo('Főzés', 2, '2024-02-10', '#FFF15C');
todo4.addSubtask(new Subtask('Recept kiválasztása', 1));
todo4.addSubtask(new Subtask('Hozzávalók beszerzése', 2));

const todo5 = new Todo('Sportolás', 1, '', '#2ecc71');

toDoList.push(todo1, todo2, todo3, todo4, todo5);

for (var i = 0; i < toDoList.length; i++) {
    lowerName = toDoList[i].getName().toLowerCase().trimStart().trimEnd();
    names.push(lowerName);

}

start();
var currentDate = new Date();
var formattedCurrentDate = currentDate.toISOString().split('T')[0];


document.querySelector(".create-btn").addEventListener("click", function () {
    const name = document.querySelector(".toDoAddName").value.trimEnd().trimStart();
    const state = document.querySelector(".stateSlider").value;
    const deadline = document.querySelector('input[type="date"]').value;
    var color = document.querySelector(".colorPicker").value;

    if (isEmpty(name)) {
        document.querySelector(".alertDiv").innerHTML = '<div class="auto-close alert alert-danger alert-dismissible fade show" role="alert">' +
            '<strong>Kérjük A létrehozáshoz adjon meg egy nevet!</strong><br> Érdemes a feladathoz egyértelmű nevet adni.' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
            '</div>';
    } else if (names.includes(name.toLowerCase())) {
        document.querySelector(".alertDiv").innerHTML = '<div class="auto-close alert alert-danger alert-dismissible fade show" role="alert">' +
            '<strong>Ez a név már létezik egy másik teendőnél!</strong><br> Kérlek adj meg egy olyan nevet ami nem létezik még.' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
            '</div>';
    } else if (deadline != "" && deadline < formattedCurrentDate) {

        document.querySelector(".alertDiv").innerHTML = '<div class="auto-close alert alert-danger alert-dismissible fade show" role="alert">' +
            '<strong>Az általad megadott határidő már nem érvényes</strong><br> Kérlek adj meg egy érvényes határidőt.' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
            '</div>';

    } else if (color == "#fff15c" && deadline == "") {
        document.querySelector(".alertDiv").innerHTML = '<div class="auto-close alert alert-danger alert-dismissible fade show" role="alert">' +
            '<strong>Az általad megadott háttérszin a határidővel ellátott Teendők háttérszine</strong><br> Kérlek adj meg egy másik háttérszint.' +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
            '</div>';
    } else {
        if (deadline != "") {
            color = "#FFF15C"
        }
        const todo = new Todo(name, state, deadline, color);

        let counter = 1;
        const subtaskContainers = document.querySelectorAll('.toDoAddSubTaskName');
        subtaskContainers.forEach(subtaskContainer => {

            var subtaskName = subtaskContainer.querySelector('.toDoAddName').value;
            const subtaskState = subtaskContainer.querySelector('.stateSliderSub').value;
            if (isEmpty(subtaskName)) {
                subtaskName = counter + ". Alfeladat";
            }
            const subtask = new Subtask(subtaskName, subtaskState);
            todo.addSubtask(subtask);
            counter++;
        });

        toDoList.push(todo);
        names.push(todo.getName().toLowerCase());

        if (deadline != "") {
            document.querySelector(".alertDiv").innerHTML = '<div class="auto-close alert alert-success alert-dismissible fade show" role="alert">' +
                '<strong>A Teendő létrehozása sikeres volt!</strong><br>Mivel határidőt állitottál be a feladathoz igy a háttérszint sárgára állitottuk.' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                '</div>';
        } else {
            document.querySelector(".alertDiv").innerHTML = '<div class="auto-close alert alert-success alert-dismissible fade show" role="alert">' +
                '<strong>A Teendő létrehozása sikeres volt!</strong><br> A Teendőidet megtekintheted a Teendők-listája menüben' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                '</div>';
        }

        let placesToAdd = document.querySelector(".toDoAddSubtask")
        placesToAdd.innerHTML = ""
        addDel();
        updateHelpList();
        displayTodos();
        displayTodosRemove();
        updateSubTaskStates();
    }
});

function editTodo(todoIndex) {
    addDel();
    clear();
    disappear();

    document.querySelector(".create").style.display = "none";
    document.querySelector(".edit").style.display = "block";
    const todo = toDoList[todoIndex];
    document.querySelector(".toDoAdd").style.display = "block";
    let truncatedName = todo.getName().substring(0, 20);
    document.querySelector(".title").innerHTML = "A(z) " + (truncatedName.length < todo.getName().length ? truncatedName + "..." : truncatedName) + " Feladat módosítása";
    document.querySelector(".toDoAddName").value = todo.getName();
    document.querySelector(".stateSlider").value = todo.getState();
    document.querySelector('input[type="date"]').value = todo.getDeadline();
    document.querySelector(".colorPicker").value = todo.getColor();

    let subtaskContainer = document.querySelector(".toDoAddSubtask");
    subtaskContainer.innerHTML = "";
    updateSubTaskStates();
    for (let i = 0; todo.getSubtasks().length > i; i++) {

        let subTaskElement = document.createElement("div");

        subTaskElement.classList.add("toDoAddSubTaskName", "subTask" + i);

        subTaskElement.innerHTML =
            '<div class="highlight2"><img src="images/trash.png" alt="törlés" title="törlés" class="subTaskDelete"></div>' +
            '<input type="text" class="toDoAddName" placeholder="' + i + '". Alfeladat" value="' + todo.getSubtasks()[i].getSName() + '">' +
            '<form class="toDoAddState">' +
            '<input type="range" class="form-range custom-range stateSliderSub" min="1" max="3" value="' + todo.getSubtasks()[i].getSState() + '"/>' +
            '</form>' +
            '<div></div>' +
            '<div></div>' +
            '<div class="toDoAddStateText">' +
            '<div class="leftState">Várakozó</div>' +
            '<div class="centerState">folyamatban</div>' +
            '<div class="rightState">elkészült</div>' +
            '</div>';

        subtaskContainer.appendChild(subTaskElement);

        subTaskElement.querySelector(".subTaskDelete").addEventListener("click", function () {
            subTaskElement.remove();
            updateSubTaskStates();
        });
        subTaskElement.querySelector(".stateSliderSub").addEventListener("change", function () {
            updateSubTaskStates();
        });
        updateSubTaskStates();
    }
    document.querySelector(".editToDo-btn").removeAllEventListeners();
    document.querySelector(".editToDo-btn").addEventListener("click", function () {
        const name = document.querySelector(".toDoAddName").value.trimEnd().trimStart();
        const state = document.querySelector(".stateSlider").value;
        const deadline = document.querySelector('input[type="date"]').value;
        var color = document.querySelector(".colorPicker").value;

        if (isEmpty(name)) {
            document.querySelector(".alertDiv").innerHTML = '<div class="auto-close alert alert-danger alert-dismissible fade show" role="alert">' +
                '<strong>Kérjük A létrehozáshoz adjon meg egy nevet!</strong><br> Érdemes a feladathoz egyértelmű nevet adni.' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                '</div>';
        } else if (name != todo.getName() && names.includes(name.toLowerCase())) {
            document.querySelector(".alertDiv").innerHTML = '<div class="auto-close alert alert-danger alert-dismissible fade show" role="alert">' +
                '<strong>Ez a név már létezik egy másik teendőnél!</strong><br> Kérlek adj meg egy olyan nevet ami nem létezik még.' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                '</div>';
        } else if (deadline != "" && deadline < formattedCurrentDate) {
            document.querySelector(".alertDiv").innerHTML = '<div class="auto-close alert alert-danger alert-dismissible fade show" role="alert">' +
                '<strong>Az általad megadott határidő már nem érvényes</strong><br> Kérlek adj meg egy érvényes határidőt.' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                '</div>';

        } else if (color == "#fff15c" && deadline == "") {
            document.querySelector(".alertDiv").innerHTML = '<div class="auto-close alert alert-danger alert-dismissible fade show" role="alert">' +
                '<strong>Az általad megadott háttérszin a határidővel ellátott Teendők háttérszine</strong><br> Kérlek adj meg egy másik háttérszint.' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                '</div>';
        } else {
            if (deadline != "") {
                color = "#FFF15C"
            }
            names.splice(todoIndex, 1, name.toLowerCase());

            todo.setName(name);
            todo.setState(state);
            todo.setDeadline(deadline);
            todo.setColor(color);

            let counter = 1;
            const subtaskContainers = document.querySelectorAll('.toDoAddSubTaskName');
            todo.getSubtasks().length = 0;
            subtaskContainers.forEach(subtaskContainer => {

                var subtaskName = subtaskContainer.querySelector('.toDoAddName').value;
                const subtaskState = subtaskContainer.querySelector('.stateSliderSub').value;
                if (isEmpty(subtaskName)) {
                    subtaskName = counter + ". Alfeladat";
                }
                const subtask = new Subtask(subtaskName, subtaskState);
                todo.addSubtask(subtask);
                counter++;
            });

            if (deadline != "") {
                document.querySelector(".alertDiv").innerHTML = '<div class="auto-close alert alert-success alert-dismissible fade show" role="alert">' +
                    '<strong>A Teendő módositása sikeres volt!</strong><br>Mivel határidőt állitottál be a feladathoz igy a háttérszint sárgára állitottuk.' +
                    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                    '</div>';
            } else {
                document.querySelector(".alertDiv").innerHTML = '<div class="auto-close alert alert-success alert-dismissible fade show" role="alert">' +
                    '<strong>A Teendő módositása sikeres volt!</strong>' +
                    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                    '</div>';
            }

            let placesToAdd = document.querySelector(".toDoAddSubtask")
            placesToAdd.innerHTML = ""
            addDel();
            updateHelpList();
            clear();
            document.querySelector(".toDoList").style.display = "block";
            document.querySelector(".title").innerHTML = "TEENDŐK";
            appear();
            updateSubTaskStates();
            toDoList = [...toDoListHelper];
            displayTodos();
            displayTodosRemove();
        }
    });

}

searchbar.addEventListener("input", function () {
    searchbarValue = document.querySelector(".search-input").value;
    displayTodos();
})

function displayTodos() {
    let Lplace = document.querySelector("#toDoS");
    Lplace.innerHTML = "";

    for (let i = 0; i < toDoList.length; i++) {
        let todoElement = document.createElement('div');
        todoElement.classList.add('toDo');

        if (toDoList[i].getState() == 3 && doneBtnPressed) {
            todoElement.style.display = "grid";

        } else if (toDoList[i].getState() != 3 && doneBtnPressed) {
            todoElement.style.display = "none";

        } else if (toDoList[i].getState() == 3 && !doneBtnPressed) {
            todoElement.style.display = "none";

        } else {
            todoElement.style.display = "grid";

        }
        if (!isEmpty(searchbarValue) && !(toDoList[i].getName().toLowerCase().includes(searchbarValue.toLowerCase()))) {
            todoElement.style.display = "none";
        }

        let nameContainer = document.createElement('div');
        nameContainer.classList.add('nameContainer');
        nameContainer.style.backgroundColor = toDoList[i].getColor();

        let nameSpan = document.createElement('span');
        nameSpan.classList.add('name');
        
        let truncatedName = toDoList[i].getName().substring(0, 10);
        nameSpan.textContent = truncatedName.length < toDoList[i].getName().length ? truncatedName + "..." : truncatedName;
        

        if (toDoList[i].getSubtasks().length > 0) {
            let subtaskIcon = document.createElement('img');
            subtaskIcon.src = 'images/subtask.png';
            subtaskIcon.alt = 'Alfeladatok vannak';
            subtaskIcon.title = 'Alfeladatok vannak';
            nameSpan.appendChild(subtaskIcon);
        }
        if (toDoList[i].getDeadline() != "") {
            let deadlineIcon = document.createElement('img');
            deadlineIcon.src = 'images/hourglass.png';
            deadlineIcon.alt = 'Határideje van';
            deadlineIcon.title = 'Határideje van';
            nameSpan.appendChild(deadlineIcon);
        }

        let gapDiv = document.createElement('div');
        gapDiv.classList.add('gap');

        let iconImg = document.createElement('img');
        iconImg.alt = '';
        iconImg.title = '';

        switch (parseInt(toDoList[i].getState())) {
            case 1:
                iconImg.src = 'images/close.png';
                iconImg.alt = 'Várakozó feladat';
                iconImg.title = 'Várakozó feladat';
                break;
            case 2:
                iconImg.src = 'images/ong.png';
                iconImg.alt = 'Folyamatban lévő feladat';
                iconImg.title = 'Folyamatban lévő feladat';
                break;
            case 3:
                iconImg.src = 'images/check.png';
                iconImg.alt = 'Kész feladat';
                iconImg.title = 'Kész feladat';
                break;
        }
        todoElement.addEventListener("click", function () {
            editTodo(i);
        });

        nameContainer.appendChild(nameSpan);
        todoElement.appendChild(nameContainer);
        todoElement.appendChild(gapDiv);
        todoElement.appendChild(iconImg);
        Lplace.appendChild(todoElement);
    }
}

function displayTodosRemove() {
    let Dplace = document.querySelector("#toDoS-Remove");
    Dplace.innerHTML = "";

    toDoList.forEach((todo, i) => {
        let todoElement = document.createElement('div');
        todoElement.classList.add('toDo');

        let nameContainer = document.createElement('div');
        nameContainer.classList.add('nameContainer');
        nameContainer.style.backgroundColor = todo.getColor();

        let nameSpan = document.createElement('span');
        nameSpan.classList.add('name');
        nameSpan.textContent = todo.getName();

        let gapDiv = document.createElement('div');
        gapDiv.classList.add('gap');

        let iconImg = document.createElement('img');
        iconImg.src = 'images/trash.png';
        iconImg.alt = 'Törlés';
        iconImg.title = 'Törlés';

        iconImg.addEventListener('click', function () {

            document.getElementById('deletedTodoName').innerHTML = todo.getName();
            var deleteConfirmationModal = new bootstrap.Modal(document.getElementById('deleteConfirmationModal'));
            deleteConfirmationModal.show();
            document.getElementById('confirmDeleteBtn').removeAllEventListeners();
            document.getElementById('confirmDeleteBtn').addEventListener('click', function () {
                toDoList.splice(i, 1);
                names.splice(i, 1);
                updateHelpList();
                displayTodosRemove();
                displayTodos();
                deleteConfirmationModal.hide();
                document.querySelector(".alertDiv").innerHTML = '<div class="auto-close alert alert-success alert-dismissible fade show" role="alert">' +
                    '<strong>A Teendő Törlése sikeres volt!</strong><br> A törölt Teendő nem fog megjelenni a listában!' +
                    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                    '</div>';
            });

        });

        iconImg.addEventListener('mouseover', function () {
            iconImg.classList.add('highlight');
        });

        iconImg.addEventListener('mouseout', function () {
            iconImg.classList.remove('highlight');
        });

        nameContainer.appendChild(nameSpan);
        todoElement.appendChild(nameContainer);
        todoElement.appendChild(gapDiv);
        todoElement.appendChild(iconImg);
        Dplace.appendChild(todoElement);
    });
}



EventTarget.prototype.removeAllEventListeners = function () {
    var elClone = this.cloneNode(true);
    var elParent = this.parentNode;
    elParent.replaceChild(elClone, this);
}

