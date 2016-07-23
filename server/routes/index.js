import express from 'express'
import bookRoutes from './book.routes'

const router = express.Router()

router.get('/', (req, res) => res.send('OK'))

// mount book routes at /book
router.use('/book', bookRoutes)


export default router
