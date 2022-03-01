// DOM ELEMENTS
const formContainer = document.querySelector('.form-container')
const popupButton = document.getElementById('popup-button');
const formButton = document.getElementById('form-button')
const form = document.querySelector('#form')
const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const tableDisplay = document.getElementById('#table-display');
const rowToRemove = document.querySelector('tbody tr');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const genre = document.querySelector('#genre');
const read = document.querySelector('#read-status');

// FUNCTIONS
let myLibrary = [];

// function Book(title, author, pages, genre, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.genre = genre;
//     this.read = read;
// }

class Book {
    constructor(title, author, pages, genre, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
    }
    readToggle(read) {
        const readToggleButton = document.createElement('button');
        const red = (e) => {
            readToggleButton.innerText = 'Yes, finished!';
            readToggleButton.style.backgroundColor = 'red';
            readToggleButton.style.color = 'white';
        }
        const black = (e) => {
            readToggleButton.innerText = 'Not yet!';
            readToggleButton.style.backgroundColor = 'black';
            readToggleButton.style.color = 'wheat';
        }
        if (read == 'Yes') {
            red();
        } else if (read == 'No') {
            black();
        }
        readToggleButton.addEventListener('click', function(e) {
            if (this.innerText == 'Yes, finished!') {
                black();
            } else red();
        })
        return readToggleButton;
    }
}

function addBookToLibrary() {

    if (read.checked == true) {
        return myLibrary.push(new Book(title.value, author.value, pages.value, genre.value, 'Yes'));
    } else if(read.checked == false) {
        return myLibrary.push(new Book(title.value, author.value, pages.value, genre.value, 'No'));
    }
}

const displayBook = function() {
    tableBody.innerText = ''
    let i = 0;
    let j = 0;

    myLibrary.forEach(book => {
    
        const newTableRow = document.createElement('tr');
        tableBody.appendChild(newTableRow);
        
            for (let property in book) {
                const newTableDataCell = document.createElement('td');
                if (property == 'read') {
                    newTableDataCell.appendChild(book.readToggle(book.read));
                    newTableRow.appendChild(newTableDataCell);
                } else {
                const information = document.createTextNode(book[property] + '');
                newTableDataCell.appendChild(information);
                newTableRow.appendChild(newTableDataCell);
                }
            }
            
            const removerColumn = document.createElement('td');
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Remove'
            removeButton.dataset.remove = j++;
            removerColumn.appendChild(removeButton);
            newTableRow.appendChild(removerColumn);
            removeButton.addEventListener('click', function() {
                myLibrary.splice(removeButton.dataset.remove, 1)
                displayBook();
                if (myLibrary.length == 0) {
                    table.style.visibility = 'hidden';
                }
            })
    })
}

window.onload = function() {
    formContainer.style.visibility = 'hidden';
    table.style.visibility = 'hidden';
}

const formVisible = function() {
    if (formContainer.style.visibility == 'hidden') {
        formContainer.style.visibility = 'visible';
    } else formContainer.style.visibility = 'hidden' 
}

const formHidden = function() {
    formContainer.style.visibility = 'hidden';
}

const tableVisible = function () {
    table.style.visibility = 'visible';
}

function addNewBook(e) {

    e.preventDefault();
    addBookToLibrary();
    displayBook();
    title.value = '';
    author.value = '';
    pages.value = '';
    genre.value = '';
    read.checked = false;
    formHidden();
    tableVisible();
}

// EVENT LISTENERS
popupButton.addEventListener('click', formVisible);
form.addEventListener('submit', addNewBook);


