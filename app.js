let myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        pages: 295,
        read: false
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
    for (let i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div');
        let bookTitle = document.createElement('H2');
        let bookDescription = document.createElement('p');
        book.classList.add("bookContainer");
        bookTitle.innerHTML = myLibrary[i].title;
        bookDescription.innerHTML = `By: ${myLibrary[i].author} \nNumber of pages: ${myLibrary[i].pages} \nRead: ${myLibrary[i].read}`;
        container.appendChild(book);
        book.appendChild(bookTitle);
        book.appendChild(bookDescription);
    }
}