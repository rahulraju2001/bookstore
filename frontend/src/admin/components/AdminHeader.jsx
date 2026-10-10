import { FaPowerOff } from "react-icons/fa"


function AdminHeader() {
  return (
    <>
    {/* header top */}
    <div className="flex justify-between items-center p-3 md:mx-20">
      <div className="flex items-center">
        <img className="rounded-2xl" width={'50px'} height={'50px'} src="https://img.magnific.com/free-vector/books-stack-realistic_1284-4735.jpg?semt=ais_hybrid&w=740&q=80" alt="Icon" />
        <h1 className="text-2xl font-bold ms-2">BOOKSTORE</h1>
      </div>
      <button className="flex items-center px-3 py-2 bg-black text-white rounded border-black hover:bg-white hover:text-black">Logout<FaPowerOff className="ms-2"/></button>
    </div>
    {/* header marquee */}
    <div className="bg-black text-white h-12 flex items-center">
      <marquee>Welcome admin, you are all set to manage and monitor the system. Lets get into work!!!</marquee>
    </div>
    </>
  )
}

export default AdminHeader