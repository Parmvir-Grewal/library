let myLibrary = [
    {
      title: "The Hobbit",
      author: "J.R.R Tolkien",
      pages: 295,
      read: false
    }
  ];
  
  function Book(title, author, numPages, read) {
      this.title = title;
      this.author = author;
      this.numPages = numPages;
      this.read = read;
      this.info = function() {
        return `${title} by ${author}, ${numPages}, ${read}`;
      }
    }
  
  function addBookToLibrary(title, author, numPages, read) {
      const newBook = new Book(title, author, numPages, read);
      myLibrary.push(newBook);
  }
  
  function viewAllBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
      console.log(myLibrary[i].title);
    }
  }