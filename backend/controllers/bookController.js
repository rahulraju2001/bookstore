const books = require("../model/bookModel");

//add book
exports.addBookController = async (req, res) => {
  console.log("Inside addBookController");
  //get book details from req body
  const {
    title,
    author,
    imageURL,
    pages,
    price,
    discountPrice,
    abstract,
    publisher,
    isbn,
    language,
    category,
  } = req.body;
  const uploadedImages = req.files.map((item) => item.filename);
  const sellerMail = req.payload;
  //check if book already exists
  const existingBook = await books.findOne({ title, sellerMail });
  //book already exists:
  if (existingBook) {
    res.status(409).json("Book already exist....");
  } else {
    //add book
    const newBook = await books.create({
      title,
      author,
      imageURL,
      pages,
      price,
      discountPrice,
      abstract,
      publisher,
      isbn,
      language,
      category,
      uploadImages,
      sellerMail,
    });
    res.status(201).json(newBook);
  }
};

//get 4 latest books
exports.getHomeBookController = async (req, res) => {
    console.log("getHomeBookController");
    const homeBooks = await books.find().sort({_id:-1}).limit(4)
    res.status(200).json(homeBooks)
};

//get all books : ignore books uploaded by signed in user
exports.getAllBooksController = async (req, res) => {
    console.log("getAllBooksController");
    const loginUserMail = req.payload
    const allBooks = await books.find({sellerMail:{$ne:loginUserMail}})
    res.status(200).json(allBooks)
};

//get signed in user uploaded books
exports.getUserBooksController = async (req, res) => {
    console.log("getUserBooksController");
    const loginUserMail = req.payload
    const userBooks = await books.find({sellerMail:loginUserMail})
    res.status(200).json(userBooks)
};

//user signed in user purchased books
exports.getUserBoughtBooksController = async (req, res) => {
    console.log("getUserBoughtBooksController");
    const loginUserMail = req.payload
    const userBoughtBooks = await books.find({buyerMail:loginUserMail})
    res.status(200).json(userBoughtBooks)
};

//delete book uploaded by signed in user
exports.deleteUploadBooksController = async (req, res) => {
    console.log("deleteUploadBooksController");
    const {id} = req.params
    const deleteBook = await books.findByIdAndDelete({_id:id})
    res.status(200).json(deleteBook)
};

//get single book details to view

//get all books : admin page

//update book status : admin

//book payment
