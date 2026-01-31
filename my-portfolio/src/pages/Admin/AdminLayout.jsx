import { useState, useEffect } from "react";
import AdminSidebar from "./components/AdminSidebar";
import AdminNavbar from "./components/AdminNavbar";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  const [adminEmail, setAdminEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    const fetchAll = async () => {
      try {
        const [msgRes, projRes, skillRes, profileRes] = await Promise.all([
          fetch("http://localhost:3000/admin/messages", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch("http://localhost:3000/projects", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch("http://localhost:3000/skills"),
          fetch("http://localhost:3000/admin/profile", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setMessages(await msgRes.json());
        setProjects(await projRes.json());
        setSkills(await skillRes.json());

        const profile = await profileRes.json();
        setAdminEmail(profile.email);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  return (
    <div className="min-h-screen flex bg-black">
      <AdminSidebar open={sidebarOpen} />

      <div className="flex-1 flex flex-col">
        <AdminNavbar
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          messageCount={messages.length}
          adminEmail={adminEmail}
          loading={loading}
        />

        {/* ⬇️ Pass counts to children */}
        <main className="p-6 text-gray-800 dark:text-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
