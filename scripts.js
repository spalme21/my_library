const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read yet" : "not read yet"}`;
    };
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary("Cat's Cradle", "Kurt Vonnegut", 294, true);
addBookToLibrary("Catch-22", "Joseph Heller", 300, true);

function display() {
    const bookshelf = document.querySelector(".bookshelf");
    for (book of myLibrary) {
        const newBook = document.createElement("div");
        newBook.classList.add("book");
        const title = document.createElement("h2");
        title.textContent = book.title;
        const author = document.createElement("p");
        author.textContent = book.author;
        const pages = document.createElement("p");
        pages.textContent = book.pages;
        const read = document.createElement("p");
        read.textContent = book.read ? "Read" : "Not Read";
        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(pages);
        newBook.appendChild(read);
        console.log(newBook);
        bookshelf.appendChild(newBook);
    }
}

display();