
import { useEffect, useState } from "react";
import {
  deleteUserBookAPI,
  getUserBooksAPI
} from "../../services/allAPI";

function BookStatus() {
  const [uploadBooks, setUploadBooks] = useState([]);

  useEffect(() => {
    getUploadBooks();
  }, []);

  const getUploadBooks = async () => {
    try {
      const result = await getUserBooksAPI();
      setUploadBooks(result.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await deleteUserBookAPI(id);
      await getUploadBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="p-10 my-15 shadow rounded">
      {uploadBooks?.length > 0 ? (
        uploadBooks.map((book) => (
          <div
            key={book._id}
            className="p-5 rounded mt-4 bg-blue-100"
          >
            <div className="md:grid grid-cols-[3fr_1fr]">
              <div className="px-4">
                <h1 className="text-2xl">
                  {book?.title}
                </h1>

                <h2 className="text-xl">
                  {book?.author}
                </h2>

                <h3 className="text-lg text-blue-700">
                  $ {book?.discountPrice}
                </h3>

                <p className="text-justify">
                  {book?.abstract}
                </p>

                <div className="flex my-3">
                  {book?.status === "pending" && (
                    <img
                      width="120"
                      height="120"
                      src="PENDING_IMAGE_URL"
                      alt="Pending"
                    />
                  )}

                  {book?.status === "approved" && (
                    <img
                      width="120"
                      height="120"
                      src="APPROVED_IMAGE_URL"
                      alt="Approved"
                    />
                  )}

                  {book?.status === "sold" && (
                    <img
                      width="120"
                      height="120"
                      src="SOLD_IMAGE_URL"
                      alt="Sold"
                    />
                  )}
                </div>
              </div>

              <div className="px-4 mt-4 md:mt-0">
                <img
                  className="w-full"
                  src={book?.imageURL}
                  alt={book?.title || "Book"}
                />

                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => deleteBook(book?._id)}
                    className="bg-red-700 text-white p-2 rounded"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center font-black my-5">
          Book not found!!!!
        </div>
      )}
    </div>
  );
}

export default BookStatus;
