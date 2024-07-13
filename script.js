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
    displayLibrary();
    
  }

function displayLibrary(){
    resetLibrary();
    for (i=0; i< myLibrary.length; i++){
        //
    }

}

function resetLibrary(){
    // Shows no books on display for library

}

function readBook(){
    // Changes status of book
}


// Sample books to populate the library first
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const tkam = new Book("To Kill a Mockingbird", "George Orwell", 2321, false)
const tgg = new Book("The Great Gatsby", "Scott Fitzgerald", 593, false)
const pap = new Book("Pride and Prejudice", "Jane Austen", 674, true)

console.log(theHobbit.info());