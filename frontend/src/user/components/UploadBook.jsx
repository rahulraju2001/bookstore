import { FaPlus } from "react-icons/fa";

function UploadBook() {
  return (
    <div className="p-10 my-20 mx-5 bg-gray-200">
      <h1 className="text-center text-3xl font-medium">Upload Book Details</h1>
      <div className="md:grid grid-cols-2 mt-10 w-full">
        <div className="px-3">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Book Title"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Author"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Book cover image URL"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Total pages"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Original price"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Discount price"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <textarea
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
              type="text"
              placeholder="Publisher"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="ISBN"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Language"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Category"
              className="w-full p-2 rounded bg-white"
            />
          </div>
          {/* upload book image */}
          <div className="mb-3 flex justify-center items-center mt-10">
            <label htmlFor="bookImage">
              <input type="file" id="bookImage" hidden />
              <img
                width={"200px"}
                height={"200px"}
                src="https://static.thenounproject.com/png/1058226-200.png"
                alt="Book file not found"
              />
            </label>
          </div>
          {/* preview of uploaded books */}
          <div className="flex justify-center items-center">
            <img
              width={"70px"}
              height={"70px"}
              src="https://www.shutterstock.com/image-vector/upload-icon-circle-outline-arrow-260nw-1939513429.jpg"
              alt="Book Image"
            />
            <label htmlFor="bookUpload">
              <input type="file" id="bookUpload" hidden />
              <FaPlus className="text-3xl ms-2" />
            </label>
          </div>
        </div>
      </div>
      <div className="flex md:justify-end justify-center w-full p-5 mt-5">
        <button className="bg-blue-500 text-white p-3 rounded me-2">
          Reset
        </button>
        <button className="bg-green-500 text-white p-3 rounded">Add Book</button>
      </div>
    </div>
  );
}

export default UploadBook;
