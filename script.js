let myLibrary = [];
let newBooks = [];

// The Constructor Function used to create new book object(s).
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read + '.';
}

// Function which adds new book objects to myLibrary array.
function addBookToLibrary() {

    let title = prompt('What is the book\'s title?', '');
    let author = prompt('Who is the author of the book?', '');
    let pages = prompt('How many pages is the book?', '');
    let read = prompt('Have you read the book?', '');

    // Since I don't actually need a variable name the following function is obsolete. 
    function objectName() {
        let someArr;
        let variableObj;
        someArr = title.split(' ');
        variableObj = someArr[0][0].toLowerCase() + someArr[0].slice(1);

        for (let i = 1; i < someArr.length; i++) {
            variableObj = variableObj += (someArr[i][0].toUpperCase() + someArr[i].slice(1));
        } return variableObj;
    } 
return myLibrary.push(myLibrary[objectName()] = new Book(title, author, pages, read));
//return myLibrary[objectName()] = new Book(title, author, pages, read);

}

myLibrary.push(new Book('Hello Kitty', 'Yuko Shimizu', '12', 'No'));
myLibrary.push(new Book('Atomic Habits', 'James Clear', '500', 'Yes'));

// Function that ITERATES through myLibrary array and displays each index's properties. 
// E.g. myLibrary[0].title will display in Title section of table.

const tableBody = document.querySelector('tbody');
const tableDisplay = document.getElementById('#table-display');


const bookDisplay = function() {
    tableBody.innerText = ''

    myLibrary.forEach(book => {
        
        const newTableRow = document.createElement('tr');
        tableBody.appendChild(newTableRow);
            for (let property in book) {
                if (property == 'info') {break} else {
                const newTableDataCell = document.createElement('td');
                const information = document.createTextNode(book[property] + '');
                newTableDataCell.appendChild(information);
                newTableRow.appendChild(newTableDataCell);
                }
            }
    })
    
}