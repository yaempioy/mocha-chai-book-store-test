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
function postBook(req, res) {
  let newBook = new Book(req.body)
  //Save it into the DB.
  newBook.save((err,book) => {
     if(err) {
         res.send(err)
     }
     else { //If no errors, send it back to the client
         res.json({message: "Book successfully added!", book })
     }
  })
}

export default { getBooks, postBook }
