let myLibrary = [];
let newBooks = [];
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let genre = document.querySelector('#genre');
let read = document.querySelector('#read-status');
// The Constructor Function used to create new book object(s).
function Book(title, author, pages, genre, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
}

// Book.prototype.readToggle = function() {
//     if (this.read == 'Yes') {
//         this.read = 'No'
//     } else if (this.read == 'No') {
//         this.read = 'Yes'
//     }
// }

// Function which adds new book objects to myLibrary array.
function addBookToLibrary() {

    if (read.checked == true) {
        return myLibrary.push(new Book(title.value, author.value, pages.value, genre.value, 'Yes'))
    } else if(read.checked == false) {
        return myLibrary.push(new Book(title.value, author.value, pages.value, genre.value, 'No'))
    }
//return myLibrary.push(myLibrary[objectName()] = new Book(title, author, pages, genre, read));

}

// myLibrary.push(new Book('Hello Kitty', 'Yuko Shimizu', '12', 'No', 'Horror'));
// myLibrary.push(new Book('Atomic Habits', 'James Clear', '500', 'Yes', 'Self Help'));

// Function that ITERATES through myLibrary array and displays each index's properties. 
// E.g. myLibrary[0].title will display in Title section of table.

const tableBody = document.querySelector('tbody');
const tableDisplay = document.getElementById('#table-display');
const rowToRemove = document.querySelector('tbody tr');

const displayBook = function() {
    tableBody.innerText = ''
    let i = 0;
    let j = 0;

    myLibrary.forEach(book => {
    
        const newTableRow = document.createElement('tr');
        tableBody.appendChild(newTableRow);
        
            for (let property in book) {
                if (property == 'readToggle') {continue} else {
                const newTableDataCell = document.createElement('td');
                const information = document.createTextNode(book[property] + '');
                newTableDataCell.appendChild(information);
                newTableRow.appendChild(newTableDataCell);
                if (property == 'read') {
                    newTableDataCell.setAttribute('data-test', `${i}`)
                }
                }
            }
            const removerColumn = document.createElement('td');
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Remove?'
            removeButton.dataset.remove = j++;
            removerColumn.appendChild(removeButton);
            newTableRow.appendChild(removerColumn);
            removeButton.addEventListener('click', function() {
                myLibrary.splice(removeButton.dataset.remove, 1)
                displayBook();
            })

            const readToggleColumn = document.createElement('td');
            const readToggleButton = document.createElement('button');
            readToggleButton.innerText = 'Read Toggle';
            readToggleButton.dataset.toggle = i++;
            readToggleColumn.appendChild(readToggleButton);
            newTableRow.appendChild(readToggleColumn);
            readToggleButton.addEventListener('click', function() {
                if (myLibrary[readToggleButton.dataset.toggle].read == 'Yes') {
                    myLibrary[readToggleButton.dataset.toggle].read = 'No'
                    displayBook();
                } else if (myLibrary[readToggleButton.dataset.toggle].read == 'No') {
                    myLibrary[readToggleButton.dataset.toggle].read = 'Yes'
                    displayBook();
                }
            });
            // readToggleButton.addEventListener('click', displayBook)
    })
    
}

const formContainer = document.querySelector('.form-container')
const popupButton = document.getElementById('popup-button');
const formButton = document.getElementById('form-button')
const form = document.querySelector('#form')

window.onload = function() {
    formContainer.style.visibility = 'hidden';
}

const formVisible = function() {
    if (formContainer.style.visibility == 'hidden') {
        formContainer.style.visibility = 'visible';
    } else formContainer.style.visibility = 'hidden' 
}

const formHidden = function() {
    formContainer.style.visibility = 'hidden';
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

}
popupButton.addEventListener('click', formVisible);
form.addEventListener('submit', addNewBook);


