import AdminHeader from "../components/AdminHeader"
import AdminSidebar from "../components/AdminSidebar"

function AdminDashboard() {
  return (
    <>
      <AdminHeader/>
      <div className="md:grid grid-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar/>
        </div>
        <div className="col-span-4">
          Admin Dasboard
        </div>
      </div>
    </>
  )
}

export default AdminDashboard