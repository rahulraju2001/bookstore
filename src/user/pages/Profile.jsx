import { FaCheckCircle } from "react-icons/fa";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Edit from "../components/Edit";
import UploadBook from "../components/UploadBook";
import BookStatus from "../components/BookStatus";
import Purchase from "../components/Purchase";
import axiosInstance from "../../api/axiosInstance";

function Profile() {
  const [currentTab, setCurrentTab] = useState(1);
  const [username, setUsername] = useState("");
  const [dp, setDp] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"));
      setDp(user?.picture);
      setUsername(user?.username);
      setBio(user?.bio);
    }
  }, []);

  return (
    <>
      <Header />
      <div style={{ height: "200px" }} className="bg-black"></div>
      <div
        style={{
          height: "230px",
          width: "230px",
          borderRadius: "50%",
          marginTop: "-130px",
          marginLeft: "70px",
        }}
        className="bg-white p-3"
      >
        <img
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          src={
            dp == ""
              ? "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
              : dp.startsWith("https://1h3.googleusercontent.com/")
                ? dp
                : `${axiosInstance.defaults.baseURL}/uploads/${dp}`
          }
          alt="user"
        />
      </div>
      <div className="md:flex justify-between px-5">
        <div className="flex items-center">
          <h1 className="text-2xl font-black md:text-3xl">{username}</h1>
          <FaCheckCircle className="text-blue-700 ms-3" />
        </div>
        <div>
          <Edit />
        </div>
      </div>
      <p className="text-xl font-bold px-20 mt-5">{bio}</p>
      <p className="text-justify md:px-20 px-5 my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro
        est rerum delectus nam voluptatum expedita asperiores rem cupiditate
        itaque voluptatibus consectetur aspernatur aliquam quo facilis
        architecto provident, et nemo!
      </p>
      <div className="md:px-40">
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
            Upload Book
          </p>
          <p
            onClick={() => setCurrentTab(2)}
            className={
              currentTab == 2
                ? "p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer"
                : "p-4 border-gray-400 border-b rounded cursor-pointer"
            }
          >
            Upload Book Status
          </p>
          <p
            onClick={() => setCurrentTab(3)}
            className={
              currentTab == 3
                ? "p-4 border-gray-400 border-l border-t border-r rounded cursor-pointer"
                : "p-4 border-gray-400 border-b rounded cursor-pointer"
            }
          >
            Purchase History
          </p>
        </div>
        {/* tab content */}
        {currentTab == 1 && (
          <div>
            <UploadBook />
          </div>
        )}
        {currentTab == 2 && (
          <div>
            <BookStatus />
          </div>
        )}
        {currentTab == 3 && (
          <div>
            <Purchase />
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
