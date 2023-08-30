class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
    }

    toggleRead = () => {
        this.read = !this.read;
    }
}

class Library {
    constructor() {
        this.shelf = [];
    }

    addBookToLibrary(title, author, pages, read) {
        const newBook = new Book(title, author, pages, read);
        this.shelf.push(newBook);
    }

    getBook(index) {
        return this.shelf[index];
    }
}

class Display {
    bookshelf = document.querySelector(".bookshelf");
    newBtn = document.getElementById("new-btn");
    dialog = document.getElementById("dialog");
    addBtn = document.getElementById("add-btn");
    title = document.getElementById("title");
    author = document.getElementById("author");
    pages = document.getElementById("pages");

    constructor() {
        this.library = new Library();

        this.newBtn.addEventListener("click", () => {
            this.title.value = "";
            this.author.value = "";
            this.pages.value = "";
            this.dialog.showModal();
        });

        this.addBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.library.addBookToLibrary(this.title.value, this.author.value, this.pages.value);
            this.update();
            this.dialog.close();
        });
    }

    createBookDiv(book, index) {
        const newBook = document.createElement("div");
        newBook.classList.add("book");
        newBook.setAttribute("id", index);
        const title = document.createElement("h2");
        title.textContent = book.title;
        const author = document.createElement("p");
        author.textContent = book.author;
        const pages = document.createElement("p");
        pages.textContent = `${book.pages} pages`;
        const read = document.createElement("p");
        read.textContent = book.read ? "Read" : "Not Read";
        const readButton = document.createElement("button");
        readButton.textContent = book.read? "Mark as Unread" : "Mark as Read";
        readButton.classList.add("read");
        readButton.classList.add("btn");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove");
        removeButton.classList.add("btn");
        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(pages);
        newBook.appendChild(read);
        newBook.appendChild(readButton);
        newBook.appendChild(removeButton);
        this.bookshelf.appendChild(newBook);
    }

    removeBook(e) {
        const index = e.target.parentElement.id;
        display.library.shelf.splice(index, 1);
        display.update();
    };

    update() {
        this.bookshelf.replaceChildren();
        this.library.shelf.forEach((book, index) => this.createBookDiv(book, index));
        const removeBtns = document.querySelectorAll("button.remove");
        removeBtns.forEach(btn => {
            btn.addEventListener('click', this.removeBook);
        });
        const readBtns = document.querySelectorAll("button.read");
        readBtns.forEach(btn => {
            btn.addEventListener('click', this.toggleRead);
        });
    }

    toggleRead(e) {
        const index = e.target.parentElement.id;
        console.log(index); 
        console.log(this.library);
        display.library.getBook(index).toggleRead();
        display.update();
    }
}

const display = new Display();

// const myLibrary = [];

// function addBookToLibrary(title, author, pages, read) {

//     const newBook = new Book(title, author, pages, read);
//     myLibrary.push(newBook);
// };

display.library.addBookToLibrary("Cat's Cradle", "Kurt Vonnegut", 294);
display.library.addBookToLibrary("Catch-22", "Joseph Heller", 300);
display.update();
// function display() {
//     const bookshelf = document.querySelector(".bookshelf");
//     bookshelf.replaceChildren();
//     myLibrary.forEach((book, index) => {
//         const newBook = document.createElement("div");
//         newBook.classList.add("book");
//         newBook.setAttribute("id", index);
//         const title = document.createElement("h2");
//         title.textContent = book.title;
//         const author = document.createElement("p");
//         author.textContent = book.author;
//         const pages = document.createElement("p");
//         pages.textContent = `${book.pages} pages`;
//         const read = document.createElement("p");
//         read.textContent = book.read ? "Read" : "Not Read";
//         const readButton = document.createElement("button");
//         readButton.textContent = book.read? "Mark as Unread" : "Mark as Read";
//         readButton.classList.add("read");
//         readButton.classList.add("btn");
//         const removeButton = document.createElement("button");
//         removeButton.textContent = "Remove";
//         removeButton.classList.add("remove");
//         removeButton.classList.add("btn");
//         newBook.appendChild(title);
//         newBook.appendChild(author);
//         newBook.appendChild(pages);
//         newBook.appendChild(read);
//         newBook.appendChild(readButton);
//         newBook.appendChild(removeButton);
//         bookshelf.appendChild(newBook);
//     });
//     const removeBtns = document.querySelectorAll("button.remove");
//     removeBtns.forEach(btn => {
//         btn.addEventListener('click', removeBook);
//     });
//     const readBtns = document.querySelectorAll("button.read");
//     readBtns.forEach(btn => {
//         btn.addEventListener('click', toggleRead);
//     });
// };

// display();

// const newBtn = document.getElementById("new-btn");
// const dialog = document.getElementById("dialog");
// const addBtn = document.getElementById("add-btn");
// const title = document.getElementById("title");
// const author = document.getElementById("author");
// const pages = document.getElementById("pages");


// newBtn.addEventListener("click", () => {
//     title.value = "";
//     author.value = "";
//     pages.value = "";
//     dialog.showModal();
// });

// addBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     addBookToLibrary(title.value, author.value, pages.value);
//     display();
//     dialog.close();
// });

// function removeBook(e) {
//     const index = e.target.parentElement.id;
//     myLibrary.splice(index, 1);
//     display();
// };

// function toggleRead(e) {
//     const index = e.target.parentElement.id;
//     myLibrary[index].toggleRead();
//     display();
// }