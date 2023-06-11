class Book {
  constructor(title, author, numPages, status) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.status = status;
  }

  data() {
    return [this.title, this.author, this.numPages, this.status];
  }
}
