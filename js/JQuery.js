const taskButton = jQuery("#dropdown-content-1")
const closePopUpTask = jQuery("#pop_up_task_close");
const popUpTask = jQuery("#pop_up_task");

const formTask = jQuery("#form_task");

taskButton.on('click', function (e) {
    e.preventDefault()
    popUpTask.addClass('active')
})

closePopUpTask.on('click', function () {
    popUpTask.removeClass('active')
})

formTask.submit(function (e) {
    e.preventDefault()

    let arrString = jQuery("#task_arr");
    let resultField = jQuery("#result_task");

    let arr = arrString.val().split(' ').map(Number);

    resultField.val( arr.sort(function (a, b) {  return a - b;  }))
})