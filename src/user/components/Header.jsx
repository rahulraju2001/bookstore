import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
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
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold ms-2">BOOKSTORE</h1>
        </div>
        <div className="md:flex justify-end items-center hidden">
          <FaInstagram />
          <FaTwitter className="mx-2" />
          <FaFacebook />
          <Link
            to={"/login"}
            className="border border-black rounded px-3 ms-3 flex items-center"
          >
            {" "}
            <FaUser className="me-1" /> Login{" "}
          </Link>
        </div>
      </div>
      {/* Navigation part */}
      <nav className="bg-black w-full p-3 text-white md:flex justify-center items-center">
        {/* menu icon & login button for small screens */}
        <div className="flex justify-between items-center text-2xl py-2 md:hidden">
          <button onClick={() => setToggle(!toggle)}>
            <IoMenu />
          </button>
          <Link
            to={"/login"}
            className="border border-black rounded px-3 ms-3 flex items-center hover:bg-white hover:text-black"
          >
            {" "}
            <FaUser className="ms-1" /> Login
          </Link>
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
