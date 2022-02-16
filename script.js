let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read + '.';
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet'); 

function addBookToLibrary() {
    let title = prompt('What is the book\'s title?', '');
    let author = prompt('Who is the author of the book?', '');
    let pages = prompt('How many pages is the book?', '');
    let read = prompt('Have you read the book?', '');

let variableArr = [];
    function objectName() {
        
    } 
}