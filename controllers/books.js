import { Book } from "../models/book.js"

async function index(req, res) {
  try {
    const books = await Book.find({},)
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
async function edit(req, res) {
  try {
    const book = await Book.findById(req.params.id)
    res.render('books/edit', {
      title: `Edit Book`,
      book
    })
  } catch(error) {
    console.log(error)
    res.redirect('/books')
  }
}

async function update(req, res) {
  try {
    let book = await Book.findById(req.params.id)
    req.body.read = !!req.body.read
    await book.update(req.body, {new: true})
    res.redirect('/books')
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
async function deleteAll(req, res){
  try {
    await Book.remove({})
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
  deleteBook as delete,
  edit,
  update,
  deleteAll
}