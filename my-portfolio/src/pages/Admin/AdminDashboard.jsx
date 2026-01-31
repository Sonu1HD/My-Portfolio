import { useNavigate } from "react-router-dom";

const AdminDashboard = ({}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-indigo-400">
          Admin Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-400 transition"
        >
          Logout
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:shadow-indigo-500/30 transition">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <p className="text-gray-400">Add, edit or delete projects</p>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:shadow-indigo-500/30 transition">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <p className="text-gray-400">Manage your skills section</p>
        </div>

        <div className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:shadow-indigo-500/30 transition">
          <h2 className="text-xl font-semibold mb-2">Messages</h2>
          <p className="text-gray-400">View contact form messages</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;