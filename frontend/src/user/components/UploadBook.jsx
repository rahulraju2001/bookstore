import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { addBookAPI } from "../../services/allAPI";

function UploadBook() {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    imageURL: "",
    pages: "",
    price: "",
    discountPrice: "",
    abstract: "",
    publisher: "",
    isbn: "",
    language: "",
    category: "",
    uploadImages: [],
  });

  const [preview, setPreview] = useState("");
  const [previewList, setPreviewList] = useState([]);

  console.log(bookDetails);

  const handleUploadImages = (e) => {
    const imageFile = e.target.files?.[0];
    if (!imageFile || bookDetails.uploadImages.length >= 3) {
      e.target.value = "";
      return;
    }
    const url = URL.createObjectURL(imageFile);
    setBookDetails((prev) => ({
      ...prev,
      uploadImages: [...prev.uploadImages, imageFile],
    }));
    setPreview(url);
    setPreviewList((prev) => [...prev, url]);
    e.target.value = "";
  };

  const resetForm = () => {
    setBookDetails({
      title: "",
      author: "",
      imageURL: "",
      pages: "",
      price: "",
      discountPrice: "",
      abstract: "",
      publisher: "",
      isbn: "",
      language: "",
      category: "",
      uploadImages: [],
    });
    setPreviewList([]);
    setPreview("");
  };

  const handleAddBook = async () => {
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
      uploadImages,
    } = bookDetails;
    if (
      !title ||
      !author ||
      !imageURL ||
      !pages ||
      !price ||
      !discountPrice ||
      !abstract ||
      !publisher ||
      !isbn ||
      !language ||
      !category ||
      uploadImages.length == 0
    ) {
      toast.info("Please fill the form completely");
    } else {
      const reqBody = new FormData();
      for (const key in bookDetails) {
        if (key !== "uploadImages") {
          reqBody.append(key, bookDetails[key]);
        } else {
          bookDetails.uploadImages.forEach((imageFile) => {
            reqBody.append("uploadImages", imageFile);
          });
        }
      }
      const result = await addBookAPI(reqBody);
      console.log(result);
      if (result.status === 201) {
        toast.success("Book Added successfully");
        resetForm();
      } else {
        toast.warning(result.response?.data || "Failed to add book");
      }
    }
  };

  return (
    <div className="p-10 my-20 mx-5 bg-gray-200">
      <h1 className="text-center text-3xl font-medium">Upload Book Details</h1>
      <div className="md:grid grid-cols-2 mt-10 w-full">
        <div className="px-3">
          <div className="mb-3">
            <input
              value={bookDetails.title}
              onChange={(e) =>
                setBookDetails({ ...bookDetails, title: e.target.value })
              }
              type="text"
              placeholder="Book Title"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              value={bookDetails.author}
              onChange={(e) =>
                setBookDetails({ ...bookDetails, author: e.target.value })
              }
              type="text"
              placeholder="Author"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              value={bookDetails.imageURL}
              onChange={(e) =>
                setBookDetails({ ...bookDetails, imageURL: e.target.value })
              }
              type="text"
              placeholder="Book cover image URL"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              value={bookDetails.pages}
              onChange={(e) =>
                setBookDetails({ ...bookDetails, pages: e.target.value })
              }
              type="text"
              placeholder="Total pages"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              value={bookDetails.price}
              onChange={(e) =>
                setBookDetails({ ...bookDetails, price: e.target.value })
              }
              type="text"
              placeholder="Original price"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              value={bookDetails.discountPrice}
              onChange={(e) =>
                setBookDetails({
                  ...bookDetails,
                  discountPrice: e.target.value,
                })
              }
              type="text"
              placeholder="Discount price"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <textarea
              value={bookDetails.abstract}
              onChange={(e) =>
                setBookDetails({ ...bookDetails, abstract: e.target.value })
              }
              type="text"
              placeholder="Abstract"
              rows={"5"}
              className="w-full p-2 rounded bg-white"
            />
          </div>
        </div>
        <div className="px-3">
          <div className="mb-3">
            <input
              value={bookDetails.publisher}
              onChange={(e) =>
                setBookDetails({ ...bookDetails, publisher: e.target.value })
              }
              type="text"
              placeholder="Publisher"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              value={bookDetails.isbn}
              onChange={(e) =>
                setBookDetails({ ...bookDetails, isbn: e.target.value })
              }
              type="text"
              placeholder="ISBN"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              value={bookDetails.language}
              onChange={(e) =>
                setBookDetails({ ...bookDetails, language: e.target.value })
              }
              type="text"
              placeholder="Language"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              value={bookDetails.category}
              onChange={(e) =>
                setBookDetails({ ...bookDetails, category: e.target.value })
              }
              type="text"
              placeholder="Category"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          {/* upload book image */}
          <div className="mb-3 flex justify-center items-center mt-10">
            <label htmlFor="bookImage">
              <input
                onChange={(e) => handleUploadImages(e)}
                type="file"
                id="bookImage"
                hidden
              />
              <img
                width={"200px"}
                height={"200px"}
                src={
                  preview
                    ? preview
                    : "https://static.thenounproject.com/png/1058226-200.png"
                }
                alt="Book file not found"
              />
            </label>
          </div>
          {/* preview of uploaded books */}
          {preview && (
            <div className="flex justify-center items-center">
              {previewList.map((imageURL, index) => (
                <img
                  key={`${imageURL}-${index}`}
                  width={"70px"}
                  className="mx-2"
                  height={"70px"}
                  src={imageURL}
                  alt={`Book preview ${index + 1}`}
                />
              ))}
              {previewList.length < 3 && (
                <label htmlFor="bookUpload">
                  <input
                    onChange={(e) => handleUploadImages(e)}
                    type="file"
                    id="bookUpload"
                    hidden
                  />
                  <FaPlus className="text-3xl ms-2" />
                </label>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex md:justify-end justify-center w-full p-5 mt-5">
        <button
          onClick={resetForm}
          className="bg-blue-500 text-white p-3 rounded me-2"
        >
          Reset
        </button>
        <button
          onClick={handleAddBook}
          className="bg-green-500 text-white p-3 rounded"
        >
          Add Book
        </button>
      </div>
      {/* Toast Container */}
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </div>
  );
}

export default UploadBook;
