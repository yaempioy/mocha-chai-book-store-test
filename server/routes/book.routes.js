import express from 'express'
import bookController from '../controllers/book.controller'

const router = express.Router()

router.route('/')
  /** GET /api/book - Get list of books */
  .get(bookController.getBooks)

export default router
