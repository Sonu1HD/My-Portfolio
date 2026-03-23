import { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [stats, setStats] = useState({
    messages: 0,
    projects: 0,
    skills: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    const fetchStats = async () => {
      const [msgRes, projRes, skillRes] = await Promise.all([
        fetch("https://my-portfolio-backend-a77b.onrender.com/admin/messages", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch("https://my-portfolio-backend-a77b.onrender.com/projects", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch("https://my-portfolio-backend-a77b.onrender.com/skills"),
      ]);

      setStats({
        messages: (await msgRes.json()).length,
        projects: (await projRes.json()).length,
        skills: (await skillRes.json()).length,
      });
    };

    fetchStats();
  }, []);

  return (
  <AdminLayout>
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
              🚀 Admin Dashboard
            </h1>
            <p className="text-gray-400 mt-2 text-sm">
              Overview of your portfolio system
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard title="Messages" value={stats.messages} path="/admin/messages" />
            <StatCard title="Projects" value={stats.projects} path="/admin/projects" />
            <StatCard title="Skills" value={stats.skills} path="/admin/skills" />
          </div>
      </div>
    </div>
    </AdminLayout>
  );
};


const StatCard = ({ title, value, path }) => {
  const navigate = useNavigate();

  return (
    <div className="group relative bg-white/5 backdrop-blur-xl 
                    border border-white/10 rounded-2xl p-6 
                    hover:scale-105 transition duration-300 
                    hover:shadow-xl hover:shadow-indigo-500/20">

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-indigo-500/10 opacity-0 
                      group-hover:opacity-100 blur-xl transition"></div>

      <div className="relative z-10">
        <h2 className="text-gray-400 text-sm">{title}</h2>

        <p className="text-4xl font-bold mt-2 text-white">
          {value}
        </p>

        <button
          onClick={() => navigate(path)}
          className="mt-6 w-full py-2 rounded-lg 
                     bg-linear-to-r from-indigo-500 to-purple-500 
                     hover:from-indigo-400 hover:to-purple-400 
                     text-sm font-medium transition shadow-lg shadow-indigo-500/30"
        >
          Manage →
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
