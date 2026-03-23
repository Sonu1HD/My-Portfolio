import { lazy, Suspense, useEffect, useState } from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Loading from './components/Loading.jsx';
import IntroLoader from './components/IntroLoader.jsx';
import { motion } from 'framer-motion';
// import Navbar from './components/Navbar.jsx'
// import Footer from './components/Footer.jsx'
// import Contact from './pages/Contact.jsx'
// import Home from './pages/Home.jsx'
// import Projects from './pages/Projects.jsx'
// import About from './pages/About.jsx'
// import AdminLogin from "./pages/Admin/AdminLogin.jsx";
// import Dashboard from './pages/Admin/pages/Dashboard.jsx'
// import Messages from './pages/Admin/pages/Messages.jsx'
// import AdminProjects from './pages/Admin/pages/Projects.jsx'
// import AdminSkills from './pages/Admin/pages/Skills.jsx'
const Navbar = lazy(() => import('./components/Navbar.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const AdminLogin = lazy(() => import('./pages/Admin/AdminLogin.jsx'));
const Dashboard = lazy(() => import('./pages/Admin/pages/Dashboard.jsx'));
const Messages = lazy(() => import('./pages/Admin/pages/Messages.jsx'));
const AdminProjects = lazy(() => import('./pages/Admin/pages/Projects.jsx'));
const AdminSkills = lazy(() => import('./pages/Admin/pages/Skills.jsx'));
const AdminProfile = lazy(() => import('./pages/Admin/pages/Profile.jsx'));

function App() {
  // const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-portfolio-backend-a77b.onrender.com")
  }, [])

  return (
    <>
      {/* 🔥 Intro Loader (first thing) */}
      {loading && <IntroLoader onFinish={() => setLoading(false)} />}

      {/* 🔥 Main App (only after loader finishes) */}
      {!loading && (
        <div className="min-h-screen bg-linear-to-r from-indigo-900 via-black to-indigo-900">

          <Navbar />

          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Home />
                  </motion.div>
                }
              />

              <Route
                path="/projects"
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Projects />
                  </motion.div>
                }
              />

              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
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

              <Route
              path="/admin/profile"
              element={
                <ProtectedRoute>
                  <AdminProfile />
                </ProtectedRoute>
              }
            />
            </Routes>
          </Suspense>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App
