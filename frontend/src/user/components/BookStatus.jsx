import { useEffect } from "react";
import { deleteUserBookAPI, getUserBooksAPI } from "../../services/allAPI";

function BookStatus() {

  const [uploadBooks,setUploadBooks]=([])

  useEffect(()=>{
    getUploadBooks()
  },[])

  const getUploadBooks = async()=>{
    const result = await getUserBooksAPI
    setUploadBooks(result.data)
  }

  const deleteBook = async (id)=>{
    const result = deleteUserBookAPI(id)
    getUploadBooks()
  }

  return (
    <div className="p-10 my-15 shadow rounded">
      {/* duplicate book */}
      {
        uploadBooks?.length>0?
        uploadBooks?.map(book=>(
          <div className="p-5 rounded mt-4 bg-blue-100">
        <div className="md:grid grid-cols-[3fr_1fr]">
          <div className="px-4">
            <h1 className="text-2xl">{book?.title}</h1>
            <h2 className="text-xl">{book?.author}</h2>
            <h3 className="text-lg text-blue-700">$ {book?.discountPrice}</h3>
            <p className="text-justify">{book?.abstract}</p>
            {/* status image */}
              <div className="flex my-3">
                book?.status=="pending" ?
                <img width={'120px'} height={'120px'} src="https://media.istockphoto.com/id/1478191400/vector/pending-stamp-seal-vector-badge-icon-template-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=SoZmaGLxQOLxKRBqHFz4zOlJFJ36nO0PcxTR69s-u_E=" alt="Pending" />
            </div>
            <div className="flex my-3">
              book?.status=="approved" ?
              <img width={'120px'} height={'120px'} src="https://e7.pngegg.com/pngimages/192/283/png-clipart-approved-approved-thumbnail.png" alt="Approved" />
            </div>
            <div className="flex my-3">
              <img width={'120px'} height={'120px'} src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="Sold" />
            </div>
            
          </div>
          <div className="px-4 mt-4 md:mt-0">
            <img className="w-full" src={book?.imageURL} alt="Book" />
            <div className="mt-4 flex justify-end">
                <button onClick={()=>deleteBook(book?._id)} className="bg-red-700 text-white p-2 rounded">DELETE</button>
            </div>
          </div>
        </div>
      </div>
        ))
      }
      <div className="text-center font-black my-5">Book not found!!!!</div>
    </div>
  );
}

export default BookStatus;
