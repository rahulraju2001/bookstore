import { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import UploadBook from "../../user/components/UploadBook";
import BookStatus from "../../user/components/BookStatus";
import Purchase from "../../user/components/Purchase";
import { editBookStatusAPI, userListAPI } from "../../services/allAPI";
import axiosInstance from "../../api/axiosInstance";
import { updateBookStatusController } from "../../../../backend/controllers/bookController";
import { ToastContainer, toast } from "react-toastify";


function AdminResource() {
  const [currentTab, setCurrentTab] = useState(1);
  const [allUsers, setAllUsers] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    if (currentTab == 2) {
      getAllUsers();
    } else {
      getAllBooks();
    }
  }, [currentTab]);

  const getAllBooks = async () => {
    const result = await bookListAPI();
    if (result.statuus == 200) {
      setAllBooks(result.data);
    }
  };

  const getAllUsers = async () => {
    const result = await userListAPI();
    if (result.statuus == 200) {
      setAllUsers(result.data);
    }
  };

  const updateBookStatus = async (id) =>{
    const result = await editBookStatusAPI(id)
    if(result.status==200){
      toast.success("Book Approved Successfully")
      getAllBooks()
    }
  }

  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className="text-3xl font-bold text-center mb-10">
            All Resources
          </h1>
          {/* tabs */}
          <div className="flex justify-center items-center my-8 font-medium text-lg">
            <p
              onClick={() => setCurrentTab(1)}
              className={
                currentTab == 1
                  ? "p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer"
                  : "p-4 border-gray-400 border-b rounded cursor-pointer"
              }
            >
              Books
            </p>
            <p
              onClick={() => setCurrentTab(2)}
              className={
                currentTab == 2
                  ? "p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer"
                  : "p-4 border-gray-400 border-b rounded cursor-pointer"
              }
            >
              Users
            </p>
          </div>
          {/* tab content */}
          {currentTab == 1 && (
            <div className="md:grid grid-cols-4 md:my-0">
              {/* Duplicating Card */}
              {allBooks.length > 0 ? (
                allBooks?.map((book) => (
                  <div className="shadow rounded p-3 m-4 md:my-0">
                    <img
                      width={"100%"}
                      height={"300px"}
                      src={book?.imageURL}
                      alt=""
                    />
                    <div className="flex flex-col justify-center items-center mt-4">
                      <h2 className="text-blue-950 font-bold text-xl">
                        {book?.author}
                      </h2>
                      <h3 className="text-lg">{book?.title}</h3>
                      <p className="font-bold text-red-950">${book?.price}</p>
                      {/* approve button */}
                      {
                        book?.status=="pending" ?
                        <button onClick={()=>updateBookStatus(book?._id)} className="bg-green-600 text-white p-2 mt-2 w-fit">
                        Approve
                      </button>
                      :
                      <img width={'50%'} className="mt-2" src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-green-check-mark-icon-flat-style-png-image_5253210.jpg" alt="checked...." />
                      }

                    </div>
                  </div>
                ))
              ) : (
                <div>Sorry no books added yet!!!!</div>
              )}
            </div>
          )}
          {currentTab == 2 && (
            <div>
              <div className="md:grid grid-cols-4 md:my-0">
                {/* Duplicating Card */}
                {allUsers.length > 0 ? (
                  allUsers?.map((user) => (
                    <div
                      key={user._id}
                      className="shadow rounded p-2 m-2 bg-blue-100"
                    >
                      <p className="text-red-500 font-bold text-md">
                        ID: {user._id}
                      </p>
                      <div className="flex mt-3 items-center">
                        <img
                          width={"80px"}
                          height={"80px"}
                          style={{ borderRadius: "50%" }}
                          src={
                            user?.picture == ""
                              ? "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                              : user?.picture.startsWith(
                                    "https://1h3.googleusercontent.com/",
                                  )
                                ? user?.picture
                                : `${axiosInstance.defaults.baseURL}/uploads/${user?.picture}`
                          }
                          alt="User"
                        />
                        <div className="flex flex-col ml-3 w-full">
                          <h4 className="text-blue-600 font-bold text-md">
                            {user?.username}
                          </h4>
                          <p className="text-xs">{user?.mail}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </>
  );
}

export default AdminResource;
