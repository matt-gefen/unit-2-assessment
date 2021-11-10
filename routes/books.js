import { Router } from 'express'
import * as booksCtrl from '../controllers/books.js'
const router = Router()

/* GET users listing. */
router.get('/', booksCtrl.index)
router.get('/new', booksCtrl.new)

export {
  router
}
