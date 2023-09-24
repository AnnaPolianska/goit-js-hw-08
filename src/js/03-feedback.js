//const throttle = require('lodash.throttle')
import throttle from 'lodash.throttle';

const refs = {
    form : document.querySelector('.feedback-form'),
    email : document.querySelector('input[name="email"]'),
    message : document.querySelector('textarea[name="message"]')

}

refs.form.addEventListener('input' , throttle(onFornInput , 500))
refs.form.addEventListener('submit' , formOnSubmit)
const KEY_FOR_STORAGE = "feedback-form-state";

let savedMessage = JSON.parse(localStorage.getItem(KEY_FOR_STORAGE));

fillText()


function formOnSubmit(event){
   event.preventDefault()
   const submitValues = {
    email: refs.email.value,
    Message: refs.message.value}


    if (refs.email.value === '' || refs.message.value === '') {
        return alert(`Fill the form`)
    } else {
    console.log(submitValues);
    }

    event.currentTarget.reset()
    localStorage.removeItem(KEY_FOR_STORAGE)
}

function onFornInput(event){
    const inputValues ={
        email: refs.email.value,
       Message: refs.message.value
       }
    localStorage.setItem(KEY_FOR_STORAGE , JSON.stringify(inputValues))
}
function fillText() {
    if (savedMessage) { 
        refs.message.value = savedMessage.Message;
        refs.email.value = savedMessage.email;
    };
}
