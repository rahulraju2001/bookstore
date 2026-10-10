import {
  FaArrowRight,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="md:grid grid-cols-3 md:gap-10 bg-black text-white p-10">
        <div>
          <h4 className="font-bold">About Us</h4>
          <p className="text-justify mt-5">
            We believe books are more than just pages - Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Explicabo dolor esse ipsum,
            temporibus quos quis magnam incidunt corrupti placeat aliquid,
            dolorum, sequi rerum maiores nisi saepe inventore autem itaque quia?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <div className="flex flex-col md:mt-0 mt-5">
            <h4 className="font-bold">NEWS LETTER</h4>
            <p className="my-5">Stay updated with our latest trends.</p>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Email"
              className="border p-2 bg-white text-black"
            />
            <button className="bg-yellow-700 w-10 flex justify-center items-center">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:mt-0 mt-5">
          <h4 className="font-bold">Follow Us</h4>
          <p className="my-5">Let us be social</p>
          <div className="flex">
            <FaFacebook className="me-3" />
            <FaInstagram className="mx-3" />
            <FaTwitter className="mx-3" />
            <FaEnvelope className="mx-3" />
          </div>
        </div>
      </div>
      <p className="bg-black p-2 text-white text-center">
        Copyright 2026 All rights reserved | Luminar Technolab
      </p>
    </>
  );
}

export default Footer;
