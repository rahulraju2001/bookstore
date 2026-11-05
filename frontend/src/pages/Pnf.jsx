import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routeContext } from "../contextAPI/RouteGuard";


function Pnf() {
  const { role, setRole, authorisedUser, setAuthorisedUser } =
    useContext(routeContext);

  const navigate = useNavigate()

  const backToHome = ()=>{
    if(role=="user"){
      navigate("/")
    }else{
      navigate("/admin")
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <img
        className="w-100"
        src="https://blog.thomasnet.com/hubfs/shutterstock_774749455.jpg"
        alt="Page Not Found"
      />
      <p>Oh No!</p>
      <h3 className="text-2xl font-medium">Looks like your'e lost</h3>
      <p>The page youre looking for is not available</p>
      {
        authorisedUser ?
        <button onClick={backToHome} className="bg-black mt-5 px-3 py-2 text-white">
        Home
      </button>
      :
      <Link to={"/"} className="bg-black mt-5 px-3 py-2 text-white">
        Back To Home
      </Link>
      }
    </div>
  );
}

export default Pnf;
