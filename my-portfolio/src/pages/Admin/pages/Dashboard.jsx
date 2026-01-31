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
        fetch("http://localhost:3000/admin/messages", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch("http://localhost:3000/projects", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch("http://localhost:3000/skills"),
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
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard title="Messages" value={stats.messages} path="/admin/messages"/>
        <StatCard title="Projects" value={stats.projects} path="/admin/projects"/>
        <StatCard title="Skills" value={stats.skills} path="/admin/skills" />
      </div>
    </AdminLayout>
  );
};


const StatCard = ({ title, value, path }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white/10 p-6 rounded-xl flex flex-col justify-between">
      <div>
        <h2 className="text-gray-400">{title}</h2>
        <p className="text-3xl font-bold text-indigo-400 mt-2">{value}</p>
      </div>
      <button
        onClick={() => navigate(path)}
        className="mt-4 px-4 py-2 bg-indigo-600 cursor-pointer hover:bg-indigo-500 rounded text-sm"
      >
        Manage
      </button>
    </div>
  );
};

export default Dashboard;
