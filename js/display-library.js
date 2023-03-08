function displayLibrary() {
  removeChildren(booksContainer);
  myLibrary.forEach((book) => displayBook(book));
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function displayBook(book) {
  booksContainer.appendChild(createRow(book));
}

function createRow(book) {
  let row = document.createElement('tr');
  bookData = book.data();
  bookData.forEach((datum) => row.appendChild(tableDatum(datum)));
  row.appendChild(createDeleteButton());
  row.appendChild(createChangeStatusButton());
  return row;
}

function createDeleteButton() {
  let button = document.createElement('button');
  button.textContent = 'Delete Book';
  button.dataset.index = booksContainer.children.length;
  button.addEventListener('click', deleteBook);
  return button;
}

function deleteBook(e) {
  e.preventDefault();
  let bookIndex = e.target.dataset.index;
  myLibrary.splice(bookIndex, 1);
  displayLibrary();
}

function createChangeStatusButton() {
  let button = document.createElement('button');
  button.textContent = 'Change Status';
  button.dataset.index = booksContainer.children.length;
  button.addEventListener('click', changeStatus);
  return button;
}

function changeStatus(e) {
  e.preventDefault();
  e.target.style.display = 'none';
  let index = e.target.dataset.index;
  let status = e.target.parentNode.children[3];
  status.textContent = '';
  status.appendChild(createStatusInput(index));
}

function createStatusInput(index) {
  let input = document.createElement('input');
  input.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') updateStatus(e, index);
  });
  return input;
}

function updateStatus(e, index) {
  let book = myLibrary[index];
  book.status = e.target.value;
  displayLibrary();
  console.log(e);
}

function tableDatum(datum) {
  let tableDatum = document.createElement('td');
  tableDatum.textContent = datum;
  return tableDatum;
}
