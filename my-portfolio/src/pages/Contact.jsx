import React, { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // ⛔ stop HTML reload

    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        alert("Message sent successfully ✅")
        const message = document.getElementById('message')
        message.innerHTML = "Message sent successfully ✅"
        setFormData({ username: "", email: "", message: "" })
      } else {
        alert("Failed to send message ❌")
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div className="flex justify-center min-h-screen bg-[radial-gradient(circle_at_top,#1e1b4b,#020617)] px-4 text-white p-6 items-center">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-indigo-100 mb-8">Contact Me</h1>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-indigo-200 mb-1">Name</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full rounded-lg bg-white/10 border border-indigo-400/20 px-4 py-2 text-indigo-100 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label className="block text-sm font-medium text-indigo-200 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-lg bg-white/10 border border-indigo-400/20 px-4 py-2 text-indigo-100 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <label className="block text-sm font-medium text-indigo-200 mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-lg bg-white/10 border border-indigo-400/20 px-4 py-2 text-indigo-100 placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button type="submit">SEND MESSAGE</button>
      </form>
      <p id="message"></p>
      </div>
    </div>
  )
}

export default Contact
