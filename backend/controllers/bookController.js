const { model } = require("mongoose");
const books = require("../model/bookModel");
const stripe = require("stripe")(process.env.STRIPE_SK);
const { GoogleGenerativeAI } = require("@google/generative-ai");

//add book
exports.addBookController = async (req, res) => {
  console.log("Inside addBookController");
  try {
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
    const uploadImages = req.files?.map((item) => item.filename) || [];
    const sellerMail = req.payload;
    const existingBook = await books.findOne({ title, sellerMail });
    if (existingBook) {
      return res.status(409).json("Book already exist....");
    }
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
  } catch (error) {
    res.status(500).json(error.message || "Failed to add book");
  }
};

//get 4 latest books
exports.getHomeBookController = async (req, res) => {
  console.log("getHomeBookController");
  const homeBooks = await books.find().sort({ _id: -1 }).limit(4);
  res.status(200).json(homeBooks);
};

//get all books : ignore books uploaded by signed in user
exports.getAllBooksController = async (req, res) => {
  console.log("getAllBooksController");
  const loginUserMail = req.payload;
  const searchKey = req.query.search;
  const allBooks = await books.find({
    sellerMail: { $ne: loginUserMail },
    title: { $regex: "searchKey", $options: "i" },
  });
  res.status(200).json(allBooks);
};

//get signed in user uploaded books
exports.getUserBooksController = async (req, res) => {
  console.log("getUserBooksController");
  const loginUserMail = req.payload;
  const userBooks = await books.find({ sellerMail: loginUserMail });
  res.status(200).json(userBooks);
};

//user signed in user purchased books
exports.getUserBoughtBooksController = async (req, res) => {
  console.log("getUserBoughtBooksController");
  const loginUserMail = req.payload;
  const userBoughtBooks = await books.find({ buyerMail: loginUserMail });
  res.status(200).json(userBoughtBooks);
};

//delete book uploaded by signed in user
exports.deleteUploadBooksController = async (req, res) => {
  console.log("deleteUploadBooksController");
  const { id } = req.params;
  const deleteBook = await books.findByIdAndDelete({ _id: id });
  res.status(200).json(deleteBook);
};

//get single book details to view
exports.viewBookController = async (req, res) => {
  console.log("viewBookController");
  const { id } = req.params;
  const bookDetails = await books.findById({ _id: id });
  res.status(200).json(bookDetails);
};

//get all books : admin page
exports.getAllBookController = async (req, res) => {
  console.log("getAllBookController");
  const allBooks = await books.find();
  res.status(200).json(allBooks);
};

//update book status : admin
exports.updateBookStatusController = async (req, res) => {
  console.log("updateBookStatusController");
  const { id } = req.params;
  const booksDetails = await books.findById({ _id: id });
  booksDetails.status = "approved";
  await bookDetails.save();
  res.status(200).json(booksDetails);
};

//book payment
exports.bookPaymentController = async (req, res) => {
  console.log("Inside bookPaymentController");
  const buyerMail = req.payload;
  const { id } = req.params;
  const bookDetails = await books.findById({ _id: id });
  bookDetails.status = "sold";
  bookDetails.buyerMail = buyerMail;
  await bookDetails.save();
  //create stripe checkout section
  const line_items = [
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: bookDetails.title,
          description: `${bookDetails},${bookDetails.publisher}`,
          //images : bookDetails.uploadImages,
          metadata: {
            title: bookDetails.title,
            author: bookDetails.author,
            price: bookDetails.discountPrice,
          },
        },
        unit_amount: Math.round(bookDetails.discountPrice) * 100,
      },
      quantity: 1,
    },
  ];

  const session = await stripe.checkout.sessions.create({
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/failed",
    line_items,
    mode: "payment",
    allowed_payment_method_types: ["card"],
  });
  console.log(session);
  res.status(200).json({ checkOutURL: session.url });
};

//get book Abstract using Gemini API
exports.generateAbstractAIController = async (req, res) => {
  console.log("Inside generateAbstractAIController");
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
  const { title } = req.body;
  const model = genAI.getGenerativeModel({
    model: "gemini-3.5-flash",
  });
  const result = await model.generateContent(
    `Give me a short Abstract, author name of the book ${title} in json format`,
  );
  const replay = result.response;
  console.log(replay);
  res.status(200).json({
    success: true,
    user: title,
    content: replay.candidates[0].content.parts[0].text,
  });
};
