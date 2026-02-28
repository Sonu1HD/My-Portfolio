import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer.jsx'
import AdminLogin from "./pages/Admin/AdminLogin.jsx";
import Dashboard from './pages/Admin/pages/Dashboard.jsx'
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Messages from './pages/Admin/pages/Messages.jsx'
import AdminProjects from './pages/Admin/pages/Projects.jsx'
import AdminSkills from './pages/Admin/pages/Skills.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[url("/images/431bedc7-2eae-4041-ac4d-ce30444b9518.jpg")] bg-center bg-cover bg-no-repeat min-h-screen flex flex-col'>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Home />} />
          <Route path="/sonu-admin-login" element={<AdminLogin />} />
          <Route
            path="/sonu-admin-dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/messages"
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/projects"
            element={
              <ProtectedRoute>
                <AdminProjects />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/skills"
            element={
              <ProtectedRoute>
                <AdminSkills />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
