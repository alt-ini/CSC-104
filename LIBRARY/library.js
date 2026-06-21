class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.available = true;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Added: "${book.title}" by ${book.author}`);
  }

  borrowBook(title) {
    const book = this.books.find(b => b.title === title && b.available);

    if (book) {
      book.available = false;
      console.log(`You borrowed "${book.title}".`);
    } else {
      console.log(`Sorry, "${title}" is not available to borrow.`);
    }
  }

  returnBook(title) {
    const book = this.books.find(b => b.title === title && !b.available);

    if (book) {
      book.available = true;
      console.log(`"${book.title}" has been returned.`);
    } else {
      console.log(`"${title}" wasn't currently borrowed from this library.`);
    }
  }

  listAvailableBooks() {
    const available = this.books.filter(b => b.available);

    if (available.length === 0) {
      console.log("No books currently available.");
      return;
    }

    console.log("Available books:");
    available.forEach(b => {
      console.log(`- "${b.title}" by ${b.author} (${b.year})`);
    });
  }
}

const library = new Library();

library.addBook(new Book("Animal Farm", "George Orwell", 1945));
library.addBook(new Book("Introduction to Calculus", "Michael Reynolds", 2021));
library.addBook(new Book("Fundamentals of Physics", "David Mitchell", 2019));

console.log("\n--- Initial state ---");
library.listAvailableBooks();

console.log("\n--- Borrowing 'Animal Farm' ---");
library.borrowBook("Animal Farm");
library.listAvailableBooks();

console.log("\n--- Returning 'Animal Farm' ---");
library.returnBook("Animal Farm");
library.listAvailableBooks();