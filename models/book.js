import { Mongoose } from "mongoose"

const schema = Mongoose.schema()

const bookSchema = new schema(
  {
    title: String,
    read: {
      type: Boolean,
      default: false
    }
  }
)

const Book = Mongoose.model('Book', bookSchema)

export {
  Book
}