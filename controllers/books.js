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

function newBook(req, res) {
  try {
    res.render('books/new', {
      title: 'Add a Book'
    })
  } catch(error) {
    console.log(error)
    res.redirect('/books')
  }
}

async function create(req, res){
  try {
    await Book.create(req.body)
    res.redirect('/books')
  } catch(error) {
    console.log(error)
    res.redirect('/books')
  }
}

export {
  index,
  newBook as new,
  create
}