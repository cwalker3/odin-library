function Book(title, author, numPages, status) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.status = status;
}

Book.prototype.data = function () {
  return [this.title, this.author, this.numPages, this.status];
};
