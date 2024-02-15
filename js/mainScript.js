const taskButton = document.querySelector("#dropdown-content-1");
const closePopUpTask = document.querySelector("#pop_up_task_close");
const popUpTask = document.querySelector("#pop_up_task");

const formTask = document.querySelector("#form_task");

taskButton.addEventListener('click', function (e) {
    e.preventDefault();
    popUpTask.classList.add("active");
})

closePopUpTask.addEventListener('click', () => {
    popUpTask.classList.remove('active');
})

formTask.addEventListener("submit", (e) => {
    e.preventDefault();

    let arrString = document.querySelector("#task_arr");
    let resultField = document.querySelector("#result_task");

    let arr = arrString.value.split(' ').map(Number);

    resultField.value = arr.sort(function (a, b) {  return a - b;  })
})