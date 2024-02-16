const library = [];
//isbn;title;author;year
library[0] = new Book(1234, "War and peace", "L. Tolstoy", 1822);
library[1] = new Book(2345, "Gold fish", "A. Pushkin", 1830);
library[2] = new Book(3456, "The Idiot", "F. Dostoevsky", 1822);


let i = 2;
let inputData = prompt('Enter book data separate by ";"\nformat: isbn;title;author;year\n' +
    'example:' +
    '1111;Book1;Author1;1999');
while(inputData) {
    //TODO add to library only unique book
    let b = inputData.split(";");
    let book = new Book(+(b[0]), b[1], b[2], +(b[3]));
    library.push(book);
    inputData = prompt('Enter book data separate by ";"\nformat: isbn;title;author;year\n' +
        'example:' +
        `111${i};Book${i};Author${i};1999`);
    i++;
}
console.log(library);
printLibrary(library);

function findBook(library,isbn) {
    //TODO return index if book with isbn exists or -1
    let index = library.findIndex((book, i) => book.isbn == isbn)
    return index
}

function printLibrary(library) {
    //TODO print all books to console
    library.forEach((book, i)  => console.log(`${i+1}) ${book.toString()}`));
}

function Book(isbn,title,author,year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = year;
    this.toString = function () {
        return `ISBN : ${this.isbn}, Title: ${this.title},
                Author : ${this.author}, Year: ${this.year}`;
    }
}

console.log("=======================================")
function printBook(library, index) {
    if(index >= 0 && index < library.length) {
        console.log(library[index].toString());
    }
    else console.log("Error! Invalid index!");
}

printBook(library, findBook(library, 1234));
printBook(library, findBook(library, 0));