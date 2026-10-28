import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaUser,
  FaPowerOff,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

function Header() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [token, setToken] = useState("");
  const [dp, setDp] = useState("");
  const [userId, setUserId] = useState("");
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const userToken = sessionStorage.getItem("token");
      const user = JSON.parse(sessionStorage.getItem("user"));
      setToken(userToken);
      setDp(user.picture);
      setUserId(user._id);
    }
  }, [token]);

  const logout =()=>{
    sessionStorage.clear()
    setToggle(false)
    setToken("")
    setDp("")
    setUserId("")
    setDropDown(false)
    navigate('/')
  }

  return (
    <>
      {/* Header top part */}
      <div className="grid grid-cols-3 p-3">
        <div className="flex items-center">
          <img
            width={"50px"}
            height={"50px"}
            className="rounded-2xl"
            src="https://img.magnific.com/free-vector/books-stack-realistic_1284-4735.jpg?semt=ais_hybrid&w=740&q=80"
            alt="BOOKS"
          />
        </div>
        {/* title */}
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold ms-2">BOOKSTORE</h1>
        </div>
        <div className="md:flex justify-end items-center hidden">
          <FaInstagram />
          <FaTwitter className="mx-2" />
          <FaFacebook />
          {/* login Link */}
          {!token ? (
            <Link
              to={"/login"}
              className="border border-black rounded px-3 ms-3 flex items-center"
            >
              {" "}
              <FaUser className="me-1" /> Login{" "}
            </Link>
          ) : (
            <div>
              <button
                onClick={() => setDropDown(!dropDown)}
                className="shadow-sm rounded p-1 hover:bg-gray-100"
              >
                <img
                  width={"40px"}
                  height={"40px"}
                  style={{ borderRadius: "50%" }}
                  src={
                    dp == ""
                      ? "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                      : dp.startsWith("https://1h3.googleusercontent.com/")
                        ? dp
                        : `${axiosInstance.defaults.baseURL}/uploads/${dp}`
                  }
                  alt="profile icon"
                />
              </button>
              {/* dropdown menu */}
              {dropDown && (
                <div className="absolute right-0 z-10 mt-2 w-40 bg-white shadow rounded ring-1 ring-black/5 p-2 focus:outline-hidden">
                  <Link
                    to={`/profile/${userId}`}
                    className="flex items-center text-gray-600 text-sm px-3 py-2"
                  >
                    <FaGear className="me-1" /> Profile
                  </Link>
                  <button onClick={logout} className="flex items-center text-gray-600 text-sm px-3 py-2">
                    <FaPowerOff className="me-1" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Navigation part */}
      <nav className="bg-black w-full p-3 text-white md:flex justify-center items-center">
        {/* menu icon & login button for small screens */}
        <div className="flex justify-between items-center text-2xl py-2 md:hidden">
          <button onClick={() => setToggle(!toggle)}>
            <IoMenu />
          </button>
          {!token ? (
            <Link
              to={"/login"}
              className="border border-black rounded px-3 ms-3 flex items-center hover:bg-white hover:text-black"
            >
              {" "}
              <FaUser className="ms-1" /> Login
            </Link>
          ) : (
            <div>
              <button
                onClick={() => setDropDown(!dropDown)}
                className="shadow-sm rounded p-1 hover:bg-gray-100"
              >
                <img
                  width={"40px"}
                  height={"40px"}
                  style={{ borderRadius: "50%" }}
                  src={
                    dp == ""
                      ? "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                      : dp.startsWith("https://1h3.googleusercontent.com/")
                        ? dp
                        : `${axiosInstance.defaults.baseURL}/uploads/${dp}`
                  }
                  alt="profile icon"
                />
              </button>
              {/* dropdown menu */}
              {dropDown && (
                <div className="absolute right-0 z-10 mt-2 w-40 bg-white shadow rounded ring-1 ring-black/5 p-2 focus:outline-hidden">
                  <Link
                    to={`/profile/${userId}`}
                    className="flex items-center text-gray-600 text-sm px-3 py-2"
                  >
                    <FaGear className="me-1" /> Profile
                  </Link>
                  <button onClick={logout} className="flex items-center text-gray-600 text-sm px-3 py-2">
                    <FaPowerOff className="me-1" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        <ul className={toggle ? "flex flex-col" : "md:flex hidden"}>
          <li>
            <Link to={"/"} className="md:mx-4 mt-2 md:mt-0">
              HOME
            </Link>
          </li>
          <li>
            <Link to={"/books"} className="md:mx-4 mt-2 md:mt-0">
              BOOKS
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="md:mx-4 mt-2 md:mt-0">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
