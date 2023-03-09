const libraryTable = document.querySelector('.library-table');
const booksContainer = document.querySelector('.books-container');
const newBookButton = document.querySelector('.new-book');
const bookForm = document.querySelector('.book-form');
const addBookButton = document.querySelector('.add-book');
const inputs = document.querySelectorAll('input');

newBookButton.addEventListener('click', displayBookForm, false);

inputs.forEach((input) =>
  input.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
      addBookToLibrary(e);
    }
  })
);

function displayBookForm(e) {
  e.preventDefault();
  bookForm.style.display = 'table-row';
  newBookButton.style.display = 'none';
  addBookButton.style.display = 'block';
  document.querySelector('.title').focus();
}

addBookButton.addEventListener('click', addBookToLibrary, false);

let myLibrary = [new Book(1, 1, 1, 1)];
displayLibrary();
