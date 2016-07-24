import express from 'express'
import bookController from '../controllers/book.controller'

const router = express.Router()

router.route('/')
  /** GET /api/book - Get list of books */
  .get(bookController.getBooks)
  /** POST /api/book - Create new book   */
  .post(bookController.postBook)

export default router
