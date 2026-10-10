import { FaLocationPin } from "react-icons/fa6"
import Header from "../components/Header"
import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

function Contact() {
  return (
    <>
    <Header/>
    <div className="md:px-20 p-5 my-5">
      <h1 className="text-center my-5 font-bold text-3xl">Contact Us</h1>
      <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae mollitia est ex magnam sunt, dignissimos ea modi vitae numquam sapiente sint dolores sequi placeat rem doloribus reiciendis beatae ad officiis?</p>
      <div className="md:grid grid-cols-3 items-center md:px-40 p-5 mt-5 md:mt-0">
        <div className="flex items-center">
          <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className="flex items-center justify-center bg-gray-200">
            <FaLocationPin/>
          </div>
          <p className="ms-5">123 Main Street, 123456</p>
        </div>
        <div className="flex items-center">
          <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className="flex items-center justify-center bg-gray-200">
            <FaPhoneAlt/>
          </div>
          <p className="ms-5">1234567890</p>
        </div>
        <div className="flex items-center">
          <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className="flex items-center justify-center bg-gray-200">
            <MdEmail/>
          </div>
          <p className="ms-5">bookstore@gmail.com</p>
        </div>
      </div>
      <div className="md:grid grid-cols-2 items-center gap-10 my-5 p-5 md:px-40">
        <div className="bg-gray-200 p-5 text-center">
          <h1 className="font-semibold text-2xl">Send us Message</h1>
          <form action="">
            <div className="mb-5 my-10">
              <input type="text" placeholder="name" className="bg-white w-full p-2 rounded-2xl"/>
            </div>
            <div className="mb-5 my-10">
              <input type="text" placeholder="email" className="bg-white w-full p-2 rounded-2xl"/>
            </div>
            <div className="mb-5 my-10">
              <input type="text" placeholder="message" className="bg-white w-full p-2 rounded-2xl"/>
            </div>
            <div className="mb-5">
              <button className="bg-black p-2 w-full text-white text-lg flex justify-center items-center rounded"><FaPaperPlane className="ms-2"/>Submit</button>
            </div>
          </form>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31431.001875288126!2d76.29072010517122!3d10.027153274603902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dafbed183bf%3A0x5951f316ba13a37e!2sLuLu%20International%20Shopping%20Mall!5e0!3m2!1sen!2sin!4v1789576720810!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact