const myLibrary = [];

function Book(title, author, pages, has_read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.has_read = has_read;
    this.info = function(){
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.has_read
    }
}

function addBookToLibrary(Book) {
    myLibrary.push(Book);
    
    const libraryBooks = document.querySelector(".libraryBooks");
    
    currBook = document.createElement("div");
    currBook.classList.add("book");

    bookTitle = document.createElement("div");
    bookTitle.textContent = Book.title;

    bookAuthor = document.createElement("div");
    bookAuthor.textContent = "By " + Book.author;

    bookLength = document.createElement("div");
    bookLength.textContent = "Pages: " + Book.pages;

    bookReadStatus = document.createElement("div");
    if (Book.has_read){
        bookReadStatus.textContent = "This book has been read";
    } else {
        bookReadStatus.textContent = "This book has not been read";
    }

    bookRemove = document.createElement("button");
    bookRemove.textContent = "Remove book";
    bookRemove.classList.add("removeBook");

    currBook.appendChild(bookTitle);
    currBook.appendChild(bookAuthor);
    currBook.appendChild(bookLength);
    currBook.appendChild(bookReadStatus);
    currBook.appendChild(bookRemove);

    libraryBooks.appendChild(currBook);

    const removeBookbutton = document.querySelectorAll(".removeBook");
    removeBookbutton.forEach((removeButton) => {
        removeButton.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(removeButton.parentElement),1);
            removeButton.parentElement.remove(removeButton);
  });
  });
  }

// Sample books to populate the library first
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const tkam = new Book("To Kill a Mockingbird", "George Orwell", 2321, false)
const tgg = new Book("The Great Gatsby", "Scott Fitzgerald", 593, false)
const pap = new Book("Pride and Prejudice", "Jane Austen", 674, true)

addBookToLibrary(theHobbit);
addBookToLibrary(tkam);
addBookToLibrary(tgg);
addBookToLibrary(pap);

const addBook = document.querySelector(".addBookButton");
addBook.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.getElementById("readStatus").checked;
    addBookToLibrary(new Book(title, author, pages, readStatus)) 
});