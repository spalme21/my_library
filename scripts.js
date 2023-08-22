const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.toggleRead = () => {
        this.read = !this.read;
    };
};

function addBookToLibrary(title, author, pages, read) {

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
};

addBookToLibrary("Cat's Cradle", "Kurt Vonnegut", 294);
addBookToLibrary("Catch-22", "Joseph Heller", 300);

function display() {
    const bookshelf = document.querySelector(".bookshelf");
    bookshelf.replaceChildren();
    myLibrary.forEach ((book, index) => {
        const newBook = document.createElement("div");
        newBook.classList.add("book");
        newBook.setAttribute("id", index);
        const title = document.createElement("h2");
        title.textContent = book.title;
        const author = document.createElement("p");
        author.textContent = book.author;
        const pages = document.createElement("p");
        pages.textContent = book.pages;
        const read = document.createElement("p");
        read.textContent = book.read ? "Read" : "Not Read";
        const readButton = document.createElement("button");
        readButton.textContent = book.read? "Mark as Unread" : "Mark as Read";
        readButton.classList.add("read");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove");
        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(pages);
        newBook.appendChild(read);
        newBook.appendChild(readButton);
        newBook.appendChild(removeButton);
        bookshelf.appendChild(newBook);
    });
    const removeBtns = document.querySelectorAll("button.remove");
    removeBtns.forEach(btn => {
        btn.addEventListener('click', removeBook);
    });
    const readBtns = document.querySelectorAll("button.read");
    readBtns.forEach(btn => {
        btn.addEventListener('click', toggleRead);
    });
};

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
    pages.value = "";
    dialog.showModal();
});

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(title.value, author.value, pages.value);
    display();
    dialog.close();
});

function removeBook(e) {
    const index = e.target.parentElement.id;
    myLibrary.splice(index, 1);
    display();
};

function toggleRead(e) {
    const index = e.target.parentElement.id;
    myLibrary[index].toggleRead();
    display();
}