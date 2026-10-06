import { useState } from "react";
import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerAPI,loginAPI } from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";

function Auth({ insideRegister }) {
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);

  const formik = useFormik({
    //since same component is used for both register and login, username: "Username" is necessary instead of "", bcs "" will lead to error since login doesnt have username field
    initialValues: {
      username: "Username",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Must be atleast 3 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      if (insideRegister) {
        console.log("Register API call");
        await handleRegister(values);
        resetForm();
      } else {
        console.log("Login API call");
        handleLogin(values)
        resetForm();
      }
    },
  });

  const handleLogin = async (userData) => {
    const result = await loginAPI(userData);
    console.log(result);
    if (result.status === 200) {
      toast.success("Successfully Logged In....");
      sessionStorage.setItem("token",result.data.token)
      sessionStorage.setItem("user",JSON.stringify(result.data.user))
      setTimeout(()=>{
        if(result.data.user.role=="admin"){
          navigate('/admin')
        }else{
          navigate("/")
        }
      },2500)
    }else{
      toast.error(result)
    }
  };

  const handleRegister = async (userData) => {
    const result = await registerAPI(userData);
    console.log(result);
    if (result.status === 201) {
      toast.success("Successfully registered...please login!!!");
    } else {
      toast.error(result);
    }
    navigate("/login");
  };

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
          <form
            onSubmit={formik.handleSubmit}
            action=""
            className="my-5 w-full"
          >
            {/* username */}
            {insideRegister && (
              <>
                <input
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  className="bg-white p-2 w-full rounded my-5 text-blue-900"
                  type="text"
                  placeholder="Username"
                />
                <div className="mb-5 text-yellow-500">
                  {formik.errors.username}
                </div>
              </>
            )}
            {/* email */}
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="bg-white p-2 w-full rounded my-5 text-blue-900"
              type="text"
              placeholder="E-mail"
            />
            <div className="mb-5 text-yellow-500">{formik.errors.email}</div>
            {/* password */}
            <div className="flex items-center">
              <input
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
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
                <FaEye
                  onClick={() => setTogglePassword(!togglePassword)}
                  className="text-gray-400 cursor-pointer"
                  style={{ marginTop: "-2px", marginLeft: "-30px" }}
                />
              )}
            </div>
            {/* forgot password */}
            <div className="flex justify-between mb-5">
              <p className="text-xs text-orange-400">
                Never share your password
              </p>
              {!insideRegister && (
                <button className="text-xs underline">Forgot Password</button>
              )}
            </div>
            {/* Login/Register button */}
            <div className="text-center">
              {insideRegister ? (
                <button
                  type="submit"
                  className="bg-green-600 p-2 w-full rounded"
                >
                  Register
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-600 p-2 w-full rounded"
                >
                  Login
                </button>
              )}
            </div>
            {/* Google Login */}
            {!insideRegister && (
              <div className="my-5 text-center">
                <p>--------or--------</p>
                <div className="mt-2 justify-center items-center w-full">
                  Google Auth
                </div>
              </div>
            )}
            {/* new/Already */}
            <div className="text-center my-5">
              {insideRegister ? (
                <p className="text-pink-300">
                  Existing User?{" "}
                  <Link to={"/login"} className="underline ms-5">
                    Login
                  </Link>
                </p>
              ) : (
                <p className="text-blue-300">
                  New User?
                  <Link to={"/register"} className="underline ms-5">
                    Register
                  </Link>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </div>
  );
}

export default Auth;
