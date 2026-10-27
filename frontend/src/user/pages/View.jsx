import { FaBackward, FaCamera, FaEye } from "react-icons/fa"
import Header from "../components/Header"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { buyBookAPI, viewBookAPI } from "../../services/allAPI"
import axiosInstance from "../../api/axiosInstance"
import {loadStripe} from '@stripe/stripe-js';

function View() {
  const [modal,setModal] = useState(false)
  const {id} = useParams()
  const [bookDetails,setBookDetails] = useState({})
  console.log(bookDetails);

  const getBookDetails = async()=>{
    const result = await viewBookAPI(id)
    setBookDetails(result.data)
  }

  useEffect(()=>{
    getBookDetails()
  },[])

  const makePayment = async ()=>{
    //load stripe
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PK);
    //api call
    const result = await buyBookAPI(id)
    window.location.href = result.data.checkOutURL
  }
  
  return (
    <>
      <Header/>
      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-400">
          <div className="md:grid grid-cols-4 gap-x-10">
            {/* image */}
            <div className="col-span-1">
              <img className="w-full" src={bookDetails?.imageURL} alt="book" />
            </div>
            {/* book details */}
            <div className="col-span-3">
              <div className="flex justify-between mt-5 md:mt-0">
                <h3 className="text-2xl font-bold">{bookDetails?.title} </h3>
                <button onClick={()=>setModal(true)} className="text-gray-400"><FaEye/></button>
              </div>
              <h2 className="text-blue-800 font-bold text-xl my-5">{bookDetails?.author} </h2>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className="font-bold">Publisher : {bookDetails?.publisher} </p>
                <p className="font-bold">Language : {bookDetails?.language} </p>
                <p className="font-bold">No.of Pages : {bookDetails?.pages} </p>
                <p className="font-bold">Category : {bookDetails?.category} </p>
                <p className="font-bold">ISBN : {bookDetails?.isbn} </p>
                <p className="font-bold">Seller : {bookDetails?.sellerMail} </p>
              </div>
              <div>
                <h4 className="font-bold text-lg">Abstract: {bookDetails?.abstract} </h4>
              </div>
              <div className="flex justify-end">
                <Link to={'/books'} className="bg-blue-900 text-white p-2 font-black flex items-center"><FaBackward className="me-2"/>Back</Link>
                <button onClick={makePayment} className="bg-green-900 text-white font-black ms-5 p-2">Buy ${bookDetails?.discountPrice} </button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
        {
          modal &&
          <div className="relative z-index overflow-y-auto" onClick={()=>setModal(false)}>
          <div className="bg-gray-500/75 fixed inset-0">
            <div className="flex justify-center items-center min-h-screen">
              <div className="bg-white rounded-2xl md:w-250 w-100">
                {/* Modal Title */}
                <div className="bg-black text-white p-3">
                  <h3>Book Images</h3>
                </div>
                {/* modal body */}
                <div className="relative p-5">
                  <p className="text-blue-600 flex items-center"><FaCamera className="me-2"/>Camera clicks of the book</p>
                  <div className="md:flex flex-wrap my-4">
                    {/* duplicate image */}
                    {
                      bookDetails?.uploadImages?.length>0 ?
                        bookDetails?.uploadImages?.map(filename=>(<img className="md:w-75 w-25 md:me-2 md:mt-0 mb-3" src={`${axiosInstance.defaults.baseURL}/uploads/${filename}`} alt="Book" />))
                        :
                        <div className="my-5 font-semibold">Images not available!!!!</div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        }
      </div>
    </>
  )
}

export default View