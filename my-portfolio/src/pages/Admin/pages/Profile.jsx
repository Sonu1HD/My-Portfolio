import { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";

const Profile = () => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("adminToken");

      const res = await fetch(
        "https://my-portfolio-backend-a77b.onrender.com/admin/profile",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      setAdmin(data);
    };

    fetchProfile();
  }, []);

  return (
    <AdminLayout>
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white p-6">
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl 
                        border border-white/10 rounded-2xl p-6 shadow-xl">

          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold bg-linear-to-r 
                           from-indigo-400 to-purple-400 
                           text-transparent bg-clip-text">
              👤 Admin Profile
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              Manage your account information
            </p>
          </div>

          {/* Profile Card */}
          {admin ? (
            <div className="flex flex-col items-center">

              {/* Avatar */}
              <div className="h-24 w-24 rounded-full 
                              bg-linear-to-r from-indigo-500 to-purple-500 
                              flex items-center justify-center text-3xl font-bold">
                {admin.email?.charAt(0).toUpperCase()}
              </div>

              {/* Info */}
              <h2 className="mt-4 text-xl font-semibold">
                {admin.email}
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Administrator
              </p>

              {/* Info Box */}
              <div className="mt-6 w-full bg-white/5 border border-white/10 
                              rounded-xl p-4 space-y-3">

                <div className="flex justify-between">
                  <span className="text-gray-400">Email</span>
                  <span>{admin.email}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Role</span>
                  <span className="text-indigo-400">Admin</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-400">Status</span>
                  <span className="text-green-400">Active</span>
                </div>

              </div>

              {/* Actions */}
              <div className="mt-6 flex gap-3">

                <button
                  className="px-4 py-2 rounded-lg 
                             bg-indigo-500 hover:bg-indigo-400 
                             transition text-sm"
                >
                  Edit Profile
                </button>

                <button
                  onClick={() => {
                    localStorage.removeItem("adminToken");
                    window.location.href = "/admin/login";
                  }}
                  className="px-4 py-2 rounded-lg 
                             bg-red-500/20 text-red-300 
                             hover:bg-red-500/30 transition text-sm"
                >
                  Logout
                </button>

              </div>
            </div>
          ) : (
            <p className="text-center text-gray-400">Loading...</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Profile;