/*
    Манипуляции с объектом:

  Создайте объект, который описывает книгу (с полями: название, автор, год издания).
  Создайте копию этого объекта с дополнительным полем "ISBN номер".
  Измените в копии год издания и добавьте новое поле - количество страниц.
*/


function homeWorkWithObjects() {
    const book1 = {
        name: "Idiot",
        author: "Dostoevsky",
        year: 1868,
        toString: function () {
            return `Book name: '${this.name}', Author: ${this.author}, ${this.year}year`;
        }
    }
    console.log(book1.toString())
    let book2 = {
        ...book1, isbn: 19274682, toString: function () {
            return `Book name: '${this.name}', Author: ${this.author}, ${this.year}year, ISBN: ${this.isbn}`;
        }
    };
    console.log(book2.toString());
    book2 = {
        ...book2, year: 2022, pageCount: 367, toString: function () {
            return `Book name: '${this.name}', Author: ${this.author}, ${this.year}year, ${this.pageCount}pages, ISBN: ${this.isbn}`
        }
    };
    console.log(book2.toString());
    console.log(book2);
}
