


// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.


const DATA_KEY = "feedback-form-state";

const formEl = document.querySelector('.feedback-form');
const inputEL = document.querySelector('.js-input');
const messageEL = document.querySelector('.js-message');

formEl.addEventListener('input', handleSaveToLS);

const userDate = {};

//Make Object from user data and save to LS

function handleSaveToLS(evt) {
if (evt.target.classList.contains("js-input")) {
    userDate.email = evt.target.value;
    console.log(evt.target.value);
}
if (evt.target.classList.contains("js-message")) {
    userDate.message = evt.target.value;
    console.log(evt.target.value);
}
// console.log(userDate);
localStorage.setItem(DATA_KEY, JSON.stringify(userDate));
}

//Take LS data, parse and fill input

const parsedLocalData = JSON.parse(localStorage.getItem(DATA_KEY));
console.log(parsedLocalData);

if (parsedLocalData) {
    inputEL.value = parsedLocalData.email || "";
    messageEL.value = parsedLocalData.message || "";
}
