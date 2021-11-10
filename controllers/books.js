import { Book } from "../models/book.js"

function index(req, res) {
  try {
    const books = Book.find({})
    res.render('books/index', {
      title: 'Unit 2 Assessment',
      books
    })
  } catch (error) {
    console.log(error)
  }
}

export {
  index
}