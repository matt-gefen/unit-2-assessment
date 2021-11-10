import { Book } from "../models/book.js"

async function index(req, res) {
  try {
    const books = await Book.find({},)
    console.log(books)
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
async function deleteBook(req, res){
  try {
    await Book.findByIdAndDelete(req.params.id)
    res.redirect('/books')
  } catch(error) {
    console.log(error)
    res.redirect('/books')
  }
}

export {
  index,
  newBook as new,
  create,
  deleteBook as delete
}