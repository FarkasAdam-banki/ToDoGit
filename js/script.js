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
