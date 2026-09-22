import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

function Edit() {
  const [offCanvas, setOffCanvas] = useState(false);

  return (
    <div>
      {/* button */}
      <button
        onClick={() => setOffCanvas(true)}
        className="bg-black text-white p-2 flex items-center rounded border hover:bg-white hover:text-black"
      >
        <FaPencilAlt className="me-2" />
        Edit
      </button>
      {/* offcanvas */}
      {offCanvas && (
        <div>
          <div className="fixed inset-0 gb-gray-400/75 w-full h-full"></div>
          <div className="bg-white h-full w-90 z-50 fixed top-0 left-0"></div>
          {/* header */}
          <div className="bg-black text-white px-3 py-4 flex justify-between text-2xl">
            <h1>Update User Proifle</h1>
            <FaX onClick={() => setOffCanvas(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Edit;
