// Single element electors
// const form = document.getElementById('my-form');
//console.log(form);
// console.log(document.querySelector('h1'));

// Multiple element selectors
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// Manipulate the dom
// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// const btn = document.querySelector('.btn');

// Events
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').
//     style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').
//     lastElementChild.innerHTML = '<h1>Hello</h1>'
// });


// SIMPLE FORM VALIDATION
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit (e) {
    e.preventDefault();

    const emptyFields = nameInput.value === '' || emailInput.value === '';

    if(emptyFields){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 2000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode
            (`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}