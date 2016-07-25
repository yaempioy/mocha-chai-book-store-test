import Book from '../models/book.model'

/**
 * GET: /api/book to retrieve all the books.
 */
function getBooks(req, res) {
  let query = Book.find({})
  query.exec((err, books) => {
    if (err) res.send(err)
    res.json(books)
  })
}

/**
 * POST: /api/book to save a new book.
 */
function postBook(req, res, next) {
  let newBook = new Book(req.body)
  //Save it into the DB.
  newBook.saveAsync()
    .then((saveBook) =>  res.json(saveBook))
    .error((e) => next(e))
}

export default { getBooks, postBook }
