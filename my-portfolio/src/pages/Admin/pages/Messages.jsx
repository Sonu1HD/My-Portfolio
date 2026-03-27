import { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const res = await fetch("https://my-portfolio-backend-a77b.onrender.com/admin/messages", {
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
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white p-6">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl 
                  border border-white/10 rounded-2xl p-6 shadow-xl">
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold bg-linear-to-r 
                 from-indigo-400 to-purple-400 
                 text-transparent bg-clip-text">
                📩 Messages Inbox
              </h1>
              <p className="text-gray-400 text-sm mt-1">
                View and manage contact form messages
              </p>
            </div>

            {loading ? (
              <p className="text-gray-400 animate-pulse">Loading messages...</p>
            ) : messages.length === 0 ? (
              <p className="text-gray-400">No messages found.</p>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg._id}
                    className="group bg-white/5 border border-white/10 
             rounded-2xl p-5 transition 
             hover:bg-white/10 hover:shadow-lg hover:shadow-indigo-500/10"
                  >
                    {/* Top Row */}
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <p className="font-semibold text-indigo-400 text-lg">
                          {msg.username}
                        </p>

                        <p className="text-sm text-gray-400 break-all">
                          {msg.email}
                        </p>
                      </div>

                      <p className="text-xs text-gray-500 whitespace-nowrap">
                        {new Date(msg.createdAt || msg._id).toLocaleString()}
                      </p>
                    </div>

                    {/* Message */}
                    <p className="mt-4 text-gray-200 leading-relaxed">
                      {msg.message}
                    </p>

                    {/* Actions */}
                    <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                      <a
                        href={`mailto:${msg.email}`}
                        className="px-3 py-1 text-xs rounded-lg 
                 bg-indigo-500/20 text-indigo-300 
                 hover:bg-indigo-500/30 transition"
                      >
                        Reply
                      </a>

                      <button
                        className="px-3 py-1 text-xs rounded-lg 
                 bg-red-500/20 text-red-300 
                 hover:bg-red-500/30 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Messages;
