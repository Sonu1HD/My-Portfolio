import { Link } from "react-router-dom";

const AdminSidebar = ({ open }) => {
  return (
    <aside
      className={`${open ? "w-64" : "w-16"} 
transition-all duration-300 
bg-gray-900 text-white 
min-h-screen mx-auto
block`}
    >
      <div className="p-4 font-bold text-indigo-400 text-lg">
        {open ? "Admin Panel" : "AP"}
      </div>

      <nav className="mt-6 space-y-2">
        <Link className="block px-4 py-2 hover:bg-gray-800" to="/sonu-admin-dashboard">
          {open ? "Dashboard" : "📊"}
        </Link>
        <Link
          to="/admin/messages"
          className="block px-4 py-2 hover:bg-gray-800 rounded"
        >
          {open ? "Messages" : "💬"}
        </Link>
        <Link className="block px-4 py-2 hover:bg-gray-800" to="/admin/profile">
          {open ? "Profile" : "🪪"}
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;