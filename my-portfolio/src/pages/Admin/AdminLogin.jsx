import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'; // Import Framer Motion
import { fadeUp } from "../../animations/variants";

const Loader = () => {
    return (
        <div
            class="animate-spin drop-shadow-2xl bg-linear-to-bl from-pink-400 via-purple-400 to-indigo-600 h-5 w-5 aspect-square rounded-full"
        >
            <div
                class="rounded-full h-[75%] w-[75%] bg-slate-100 dark:bg-zinc-900 background-blur-md"
            ></div>
        </div>
    )
}

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors on a new attempt
        setLoading(true); // 1. Start loading spinner
        try {
            const res = await fetch("https://my-portfolio-backend-a77b.onrender.com/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.message);
                setLoading(false);
                return;
            }
            localStorage.setItem("adminToken", data.token);
            navigate("/sonu-admin-dashboard");
        } catch {
            setError("Server error");
            setLoading(false);
        }
    };

    return (
        <motion.div
            className='min-h-screen flex items-center justify-center bg-black px-4'
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
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
                        disabled={loading}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none focus:border-indigo-500"
                        required
                        disabled={loading}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded-xl font-semibold text-white transition flex items-center justify-center ${
                            loading ? 'bg-indigo-800 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500'
                        }`}
                    >
                        {loading ? <Loader /> : "Login"}
                    </button>
                </form>
            </div>
        </motion.div>
    )
}

export default AdminLogin