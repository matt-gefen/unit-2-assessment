import { Router } from 'express'
import * as booksCtrl from '../controllers/books.js'
const router = Router()

/* GET users listing. */
router.get('/', booksCtrl.index)
router.get('/new', booksCtrl.new)
router.get('/:id/edit', booksCtrl.edit)
router.post('/', booksCtrl.create)
router.patch('/:id', booksCtrl.update)
router.delete('/:id', booksCtrl.delete)
router.delete('/', booksCtrl.deleteAll)

export {
  router
}
