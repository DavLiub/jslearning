const library = [];
let inputData = document.getElementById('inputData');
let submitButton = document.getElementById('submitButton');
let printButton = document.getElementById('printButton');
let libraryBooks = document.getElementById('libraryBooks');

submitButton.addEventListener('click', addBook);

function addBook() {
    let inputValue = inputData.value;
    errorMessage.innerHTML = '';

    if (inputValue) {
        const params = inputValue.split(';');
        if(params.length >=4) {
            const isbn = params[0];
            if (findBook(library, isbn) === -1) {
                const book = new Book(params[0], params[1], params[2], params[3]);
                library.push(book);
            } else {
                //stop and on screen exception
                const h5 = document.createElement('h5');
                const text = document.createTextNode(`Book with isbn: ${params[0]} is exist`);
                h5.appendChild(text);
                h5.style.color = 'red';
                errorMessage.appendChild(h5);
            }
        }
        else {
            const h5 = document.createElement('h5');
            const text = document.createTextNode(`Invalid data (correct format [isbn;bookName;author;year])`);
            h5.appendChild(text);
            h5.style.color = 'red';
            errorMessage.appendChild(h5);
        }
        inputData.value = '';

    }
}

printButton.addEventListener('click', function () {
    printLibrary(library);
});

function findBook(library, isbn) {
    return library.findIndex((b, i) => b.isbn === isbn);
}

function printLibrary(library) {
    //TODO change console log on h3
    let bookList = document.getElementById('libraryBooks');
    bookList.innerHTML = '';
    const h2 = document.createElement('h2');
    if(library.length) {
        const text = document.createTextNode('Now in library:');
        h2.appendChild(text);
        bookList.appendChild(h2);
        console.log(library);
        library.forEach(b => {
            const h3 = document.createElement('h3');
            const text = document.createTextNode(b.toString());
            h3.appendChild(text);
            bookList.appendChild(h3);
        })
    }
    else {
        const text = document.createTextNode('Now library is empty');
        h2.appendChild(text);
        bookList.appendChild(h2);

    }
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, 
        Year of publishing: ${this.year}`;
    }
}
