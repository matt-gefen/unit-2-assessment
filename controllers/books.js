import { Book } from "../models/book.js"

function index(req, res) {
  try {
    res.render('books/index', {
      title: 'Unit 2 Assessment'
    })
  } catch (error) {
    console.log(error)
  }
}

export {
  index
}