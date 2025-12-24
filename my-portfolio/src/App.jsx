import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/footer'

const projects = [
  {
    title: "Delfood Website",
    img: "src/assets/delfood.png",
    live: "https://sonu1hd.github.io/My-Projects/Delfood/",
    github: "https://github.com/sonu1hd/My-Projects/tree/main/Delfood"
  },
  // more projects...
];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[url("src/assets/431bedc7-2eae-4041-ac4d-ce30444b9518.jpg")] bg-center bg-cover bg-no-repeat min-h-screen flex flex-col'>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
