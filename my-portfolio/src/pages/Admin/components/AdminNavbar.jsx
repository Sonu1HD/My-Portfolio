import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AdminNavbar = ({ toggleSidebar, adminEmail, messageCount = 0, loading = false }) => {

    const [openProfile, setOpenProfile] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/");
    };

    return (
        <header className="relative flex items-center justify-between bg-gray-900 px-6 py-4 shadow">
            <button
                onClick={toggleSidebar}
                className="text-xl font-bold md:hidden cursor-pointer"
            >
                ☰
            </button>

            <h1 className="font-semibold text-white text-lg">Dashboard</h1>

            <div className="flex items-center gap-4">
                {/* Messages */}
                <Link to="/admin/messages">
                <div className="relative cursor-pointer text-xl">
                    💬
                    {messageCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white px-1 rounded">
                            {messageCount}
                        </span>
                    )}
                </div>
                </Link>


                {/* Profile */}
                <div className="relative">
                    <div
                        onClick={() => setOpenProfile(!openProfile)}
                        className="w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center cursor-pointer select-none"
                    >
                        <img className="w-8 h-8 rounded-full justify-center" src="/images/Gemini_Generated_Image_ox3ba4ox3ba4ox3b.png" alt="profile-pic" />
                    </div>

                    {/* Profile popup */}
                    {openProfile && (
                        <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50">
                            <p className="text-sm text-gray-500 dark:text-gray-300">
                                Logged in as
                            </p>
                            <p className="font-semibold text-gray-800 dark:text-white break-all">
                                {adminEmail}
                            </p>

                            <hr className="my-3 border-gray-300 dark:border-gray-600" />

                            <button
                                onClick={handleLogout}
                                className="w-full text-left text-red-500 hover:bg-red-500/10 px-2 py-2 rounded"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default AdminNavbar;