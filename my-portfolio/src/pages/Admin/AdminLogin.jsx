import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://my-portfolio-backend-a77b.onrender.com/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.message);
                return;
            }
            localStorage.setItem("adminToken", data.token);
            navigate("/sonu-admin-dashboard");
        } catch {
            setError("Server error");
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-black px-4'>
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
                <h1 className="text-3xl font-bold text-white text-center mb-6">
                    Admin Login
                </h1>
                {error && (
                    <p className="text-red-400 text-sm text-center mb-4">
                        {error}
                    </p>
                )}
                <form method='post' onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Admin Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none focus:border-indigo-500"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none focus:border-indigo-500"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold text-white"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin