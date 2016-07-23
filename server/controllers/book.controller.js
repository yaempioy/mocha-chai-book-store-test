import Book from '../models/book.model'


function getBooks(req, res) {
  let query = Book.find({})
  query.exec((err, books) => {
    if (err) res.send(err)
    res.json(books)
  })
}

export default { getBooks }
