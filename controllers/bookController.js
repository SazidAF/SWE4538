const books = require("./../models/books");
const bookModel = require("./../models/books");

const getBookList = async (req, res) => {
  let data = [];
  let books = [];
  try {
    data = await bookModel.find();
    console.log(data);
    data.forEach((book) => {
      books.push({ name: book.name, author: book.author, genre: book.genre, id: book._id });
    });
  } catch (error) {
    console.log(error);
  } finally {
    res.render("bookList", { books: books });
  }
};

const getBook = (req, res) => {
  res.render("addBooks");
};

const postBook = (req, res) => {
  const data = new bookModel({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/books");
    });
};
const deleteBook = (req, res) => {
  var id = req.body.id
  bookModel
    .findByIdAndRemove(id)
    .then(() => {
      console.log("Data Deleted Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/book-list");
    });
};
const getUpdate = (req, res) => {
  res.render("updateBooks");
};
const postUpdate = (req, res) => {
  var id = req.body.id;
  const data = new bookModel({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });
  bookModel.findByIdAndUpdate(id, {name: data.name, author: data.author, genre:data.genre}, () => {
    res.redirect("/book-list");
  });

  // bookUp
  //   .update()
  //   .then(() => {
  //     console.log("Data Updated Successfully");
  //   })
  //   .finally(() => {
  //     res.redirect("/book-list");
  //   });
}
module.exports = { getBookList, getBook, postBook, deleteBook, getUpdate, postUpdate};
