const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read yet" : "not read yet"}`;
    };
}

function addBookToLibrary(title, author, pages, read) {

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBookToLibrary("Cat's Cradle", "Kurt Vonnegut", 294);
addBookToLibrary("Catch-22", "Joseph Heller", 300);

function display() {
    const bookshelf = document.querySelector(".bookshelf");
    bookshelf.replaceChildren();
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
        bookshelf.appendChild(newBook);
    }
}

display();

const newBtn = document.getElementById("new-btn");
const dialog = document.getElementById("dialog");
const addBtn = document.getElementById("add-btn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

newBtn.addEventListener("click", () => {
    title.value = "";
    author.value = "";
    pages.value = 0;
    dialog.showModal();
});

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value);
    display();
    dialog.close();
});