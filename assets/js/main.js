// Ho provato ad utilizzare la soluzione vista oggi a lezione ma è più intuitivo anziché generare una linea di testo
// a cui non posso assegnare una classe, usare createElement per poi aggiungere textContent e infine assegnare una classe custom

/* let backgroundColorBody = document.body
backgroundColorBody.style.backgroundColor = "#083B4C"

const gridContainer = document.querySelector('.row')


for (let i = 1; i <= 100; i++) {

    const element = `<div class="bg-primary col-2 text-center"> ${i} </div>`

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz")

    } else if (i % 3 === 0) {
        console.log(i + " Fizz")

    } else if (i % 5 === 0) {
        console.log(i + " Buzz")

    } else {
        console.log(i + " Normale")
    }

    gridContainer.innerHTML += element
} */

let backgroundColorBody = document.body;
backgroundColorBody.style.backgroundColor = "#083B4C";

const gridContainer = document.querySelector('.griglia');
let element;

for (let i = 1; i <= 100; i++) {
    element = document.createElement('div');
    element.classList.add("quadrato", "text-center", "fs-3", "fw-bold", "d-flex", "justify-content-center", "align-items-center");
    gridContainer.appendChild(element);

    if (i % 3 === 0 && i % 5 === 0) {
        element.textContent = "fizzbuzz";
        element.classList.add("fizzbuzz");
        console.log(i + " FizzBuzz");

    } else if (i % 3 === 0) {
        element.textContent = "fizz";
        element.classList.add("fizz");
        console.log(i + " Fizz");

    } else if (i % 5 === 0) {
        element.textContent = "buzz";
        element.classList.add("buzz");
        console.log(i + " Buzz");

    } else {
        element.textContent = i;
        element.classList.add("normal");
        console.log(i + " Normale");
    }
}
