const mongoose = require("mongoose");
const express = require("express");
let app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/books", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let booksArr = [
  {
    title: "The Great Gatsby",
    description:
      " The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession.",
    status: "avialable",
    email: "ashrfmathkour@gmail.com",
  },
  {
    title: "Things Fall Apart",
    description:
      " Things Fall Apart is the first of three novels in Chinua Achebes critically acclaimed African Trilogy. It is a classic narrative about Africa's cataclysmic encounter with Europe as it establishes a colonial presence on the continent.",
    status: "avialable",
    email: "ashrfmathkour@gmail.com",
  },
  {
    title: "Moby-Dick",
    description:
      "  Moby-Dick is a vivid documentary of life aboard a nineteenth-century whaler, a virtual encyclopedia of whales and whaling, replete with facts, legends, and trivia that Melville had gleaned from personal experience and scores of sources. ",
    status: "avialable",
    email: "ashrfmathkour@gmail.com",
  },
];

const BookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  email: String,
});

const Book = mongoose.model("Book", BookSchema); /// creat collection

booksArr.map((book) => {
  newBooke = new Book(book);
  //   newBooke.save()
});

let bookController=(req,res)=>{

    Book.find((err,books)=>{
        if(err){console.log(err)}
        else{res.json(books)}
    })
}
let createBook = async (req, res) => {
  let data = {
    title: req.body["title"],
    description: req.body["description"],
    status: req.body["status"],
    email:req.body["email"]
  };
 
   newBooke = new Book(data);
  newBooke
    .save()
    .then(res.json({ message: "user created succefully", user: newBooke }));
};

let deleteBook = (req, res) => {
  let dataa = req.params["_id"];

  Book.remove({ _id: dataa }, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      console.log("removed");
      res.json(result);
    }
  });
};

module.exports = { bookController, createBook, deleteBook };

// Book.findOneAndDelete({ _id:dataa }, function (err,data) {
//     if(err) console.log(err);
//     res.json("Successful deletion");
//   });
