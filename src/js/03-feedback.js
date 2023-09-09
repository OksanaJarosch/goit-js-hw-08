import throttle  from "lodash.throttle";


// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.



const DATA_KEY = "feedback-form-state";

const formEl = document.querySelector('.feedback-form');
const inputEL = document.querySelector('.js-input');
const messageEL = document.querySelector('.js-message');

//*** Make Object from user data and save to LS

formEl.addEventListener('input', throttle(handleSaveToLS, 500));
const userDate = {};

function handleSaveToLS(evt) {
if (evt.target.classList.contains("js-input")) {
    userDate.email = evt.target.value;
}
if (evt.target.classList.contains("js-message")) {
    userDate.message = evt.target.value;
}

localStorage.setItem(DATA_KEY, JSON.stringify(userDate));
}


//*** Take LS data, parse and fill input fields

const parsedLocalData = JSON.parse(localStorage.getItem(DATA_KEY));
// console.log(parsedLocalData);

if (parsedLocalData) {
    inputEL.value = parsedLocalData.email || "";
    messageEL.value = parsedLocalData.message || "";
}

//*** Submit: show data object and clear fields+LS

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();

    console.log(userDate);
    inputEL.value = "";
    messageEL.value = "";
    localStorage.clear();
}
