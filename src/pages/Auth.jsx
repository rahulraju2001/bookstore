import { useState } from "react";
import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Auth({ insideRegister }) {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[url(/login_register.png)] bg-cover bg-center text-blue-900">
      <div className="p-10">
        <h1 className="text-center font-bold text-3xl">BOOKSTORE</h1>
        <div
          style={{ width: "400px" }}
          className="bg-black text-white p-5 flex justify-center items-center flex-col my-5"
        >
          <div
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
            className="border mb-5 flex justify-center items-center"
          >
            <FaUserAlt className="text-3xl" />
          </div>
          <h1 className="3xl">{insideRegister ? "Register" : "Login"}</h1>
          <form action="" className="my-5 w-full">
            {/* username */}
            {insideRegister && (
              <input
                className="bg-white p-2 w-full rounded my-5 text-blue-900"
                type="text"
                placeholder="Username"
              />
            )}
            {/* email */}
            <input
              className="bg-white p-2 w-full rounded my-5 text-blue-900"
              type="text"
              placeholder="E-mail"
            />
            {/* password */}
            <div className="flex items-center">
              <input
                className="bg-white p-2 w-full rounded my-5 text-blue-900"
                type={togglePassword ? "text" : "password"}
                placeholder="Password"
              />
              {togglePassword ? (
                <FaEyeSlash
                  onClick={() => setTogglePassword(!togglePassword)}
                  className="text-gray-400 cursor-pointer"
                  style={{ marginTop: "-2px", marginLeft: "-30px" }}
                />
              ) : (
                <FaEye onClick={()=>setTogglePassword(!togglePassword)}
                  className="text-gray-400 cursor-pointer"
                  style={{ marginTop: "-2px", marginLeft: "-30px" }}
                />
              )}
            </div>
            {/* forgot password */}
            <div className="flex justify-between mb-5">
              <p className="text-xs text-orange-400">Never share your password</p>
              {
                !insideRegister &&
                <button className="text-xs underline">Forgot Password</button>
              }
            </div>
            {/* Login/Register button */}
            <div className="text-center">
              {
                insideRegister ?
                <button className="bg-green-600 p-2 w-full rounded">Register</button>
                :
                <button className="bg-green-600 p-2 w-full rounded">Login</button>
              }
            </div>
            {/* Google Login */}
            {
              !insideRegister &&
              <div className="my-5 text-center">
                <p>--------or--------</p>
                <div className="mt-2 justify-center items-center w-full">
                  Google Auth
                </div>
              </div>
            }
            {/* new/Already */}
            <div className="text-center my-5">
              {
                insideRegister ?
                <p className="text-pink-300">Existing User? <Link to={'/login'} className="underline ms-5">Login</Link></p>
                :
                <p className="text-blue-300">New User?<Link to={'/register'} className="underline ms-5">Register</Link></p>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
