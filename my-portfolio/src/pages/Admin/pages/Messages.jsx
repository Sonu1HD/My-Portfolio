import { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const res = await fetch("http://my-portfolio-backend-a77b.onrender.com/admin/messages", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Unauthorized");

        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold mb-6 text-white">
          Contact Messages
        </h1>

        {loading ? (
          <p className="text-gray-400">Loading messages...</p>
        ) : messages.length === 0 ? (
          <p className="text-gray-400">No messages found.</p>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className="bg-white/10 border border-white/10 rounded-xl p-5 shadow"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <p className="font-semibold text-indigo-400">
                      {msg.username}
                    </p>
                    <p className="text-sm text-gray-400">
                      {msg.email}
                    </p>
                  </div>

                  <p className="text-xs text-gray-500 mt-2 sm:mt-0">
                    {new Date(msg.createdAt || msg._id).toLocaleString()}
                  </p>
                </div>

                <p className="mt-4 text-gray-200">
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Messages;
