let myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        pages: 295,
        read: "Read"
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function viewAllBooks() {
    let container = document.querySelector('#container');
    container.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div');
        let bookTitle = document.createElement('H2');
        let bookDescription = document.createElement('p');
        let readButton = document.createElement('button');
        let delButton = document.createElement('button');    
        book.classList.add("bookContainer");
        bookTitle.innerHTML = myLibrary[i].title;
        bookDescription.innerHTML = `By: ${myLibrary[i].author} \nNumber of pages: ${myLibrary[i].pages}`;
        readButton.innerHTML = myLibrary[i].read;
        readButton.addEventListener('click', changeStatus)
        readButton.classList.add("readBook");
        delButton.id = "book" + i;
        delButton.innerHTML = "Delete";
        delButton.addEventListener('click', deleteBook)
        delButton.classList.add("del");
        container.appendChild(book);
        book.appendChild(bookTitle);
        book.appendChild(bookDescription);
        book.appendChild(readButton);
        book.appendChild(delButton);
    }
}

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBook();
});

function addBook() {
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    viewAllBooks();
}

function deleteBook() {
    myLibrary.pop(this.id);
    viewAllBooks();

}

function changeStatus() {
    if (this.innerHTML == "Read") { 
        this.read = "Not Read";
        this.innerHTML = "Not Read";
        this.classList.add("active");
    }
    else {
        this.innerHTML = "Read";
        this.classList.remove("active");
        this.read = "Read";
    }
}

viewAllBooks();