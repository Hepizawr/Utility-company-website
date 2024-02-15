const payButton = document.querySelector("#pay-button");
const testimonyButton = document.querySelector("#testimony-button");

const closePopUpTestimony = document.querySelector("#pop_up_testimony_close");
const popUpTestimony = document.querySelector("#pop_up_testimony");
const formTestimony = document.querySelector("#form_testimony");

const closePopUpBill = document.querySelector("#pop_up_bill_close");
const popUpBill = document.querySelector("#pop_up_bill");
const formBill = document.querySelector("#form_bill");


testimonyButton.addEventListener('click', function (e) {
    e.preventDefault();
    popUpTestimony.classList.add("active");
})

closePopUpTestimony.addEventListener('click', () => {
    popUpTestimony.classList.remove('active');
})

formTestimony.addEventListener("submit", (e) => {
    e.preventDefault();
    popUpTestimony.classList.remove('active');
})

payButton.addEventListener('click', function (e) {
    e.preventDefault();
    popUpBill.classList.add("active");
})

closePopUpBill.addEventListener('click', () => {
    popUpBill.classList.remove('active');
})

formBill.addEventListener("submit", (e) => {
    e.preventDefault();
    popUpBill.classList.remove('active');
})
