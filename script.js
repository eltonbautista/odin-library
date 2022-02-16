let myLibrary = [];
let book = {};

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read + '.';
}




function addBookToLibrary() {

    let title = prompt('What is the book\'s title?', '');
    let author = prompt('Who is the author of the book?', '');
    let pages = prompt('How many pages is the book?', '');
    let read = prompt('Have you read the book?', '');

    
    function objectName() {
        let someArr;
        let variableObj;
        someArr = title.split(' ');
        variableObj = someArr[0][0].toLowerCase() + someArr[0].slice(1);

        for (let i = 1; i < someArr.length; i++) {
            variableObj = variableObj += (someArr[i][0].toUpperCase() + someArr[i].slice(1));
        } return variableObj;
    } 
return myLibrary[objectName()] = new Book(title, author, pages, read);

}