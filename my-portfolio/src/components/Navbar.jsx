import { Link, useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const [clickCount, setClickCount] = useState(0);
    const timerRef = useRef(null);


    const handleSecretClick = () => {
        console.log("Logo clicked");


        setClickCount((prev) => {
            const newCount = prev + 1;
            console.log("Click count:", newCount);


            // reset after 3 seconds
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                console.log("Reset click count");
                setClickCount(0);
            }, 3000);


            if (newCount === 5) {
                console.log("SECRET UNLOCKED 🚀");
                setClickCount(0);
                navigate("/sonu-admin-login");
            }


            return newCount;
        });
    }
    return (
        <div className="sticky top-0 z-40">
            <nav className='flex justify-between px-4 sm:px-10 p-6 font-semibold border-b-2 bg-gray-800/50 text-white items-center'>
                <div onClick={handleSecretClick} className="logo cursor-pointer font-mono select-none">My Portfolio</div>
                <ul className='hidden sm:flex gap-5'>
                    <li className='hover:cursor-pointer border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:cursor-pointer border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300'>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className='hover:cursor-pointer border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='hover:cursor-pointer border-b-2 border-transparent hover:border-indigo-500 transition-all duration-300'>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div
                    onClick={() => setOpen(!open)}
                    className="
                     sm:hidden
                     flex items-center gap-2
                     cursor-pointer
                     px-4 py-2
                     rounded-xl
                     bg-indigo-500
                     text-white font-semibold
                     transition-all duration-300
                     active:scale-95
                     "
                >
                    <span className="text-sm">Menu</span>
                    <i
                        className={`fa-solid fa-bars transition-transform duration-300 ${open ? "rotate-90" : ""
                            }`}
                    ></i>
                </div>
                <div
                    className={`
    sm:hidden
    absolute top-full left-0 w-full
    bg-gray-900/95 backdrop-blur-md
    overflow-hidden
    transition-all duration-300 ease-out
    ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
  `}
                >
                    <ul className="flex flex-col items-center gap-5 py-6">
                        {["/", "/projects", "/about", "/contact"].map((path, i) => (
                            <Link
                                key={i}
                                to={path}
                                onClick={() => setOpen(false)}
                                className="
          text-white text-lg font-medium
          transition-all duration-200
          hover:text-indigo-400
          hover:scale-105
        "
                            >
                                {path === "/" ? "Home" : path.replace("/", "")}
                            </Link>
                        ))}
                    </ul>
                </div>

                <div className="h-full border-l-2 border-white/30 pl-3">
                    <ul className="space-y-2 flex flex-wrap sm:space-y-0 sm:flex-row sm:space-x-3">
                        <li className='hover:shadow-indigo-500/50 transition duration-500 transform hover:-translate-y-2'>
                            <a
                                href="https://www.linkedin.com/in/sonu-halder-33479b282"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="w-7 rounded-2xl"
                                    src="https://yt3.googleusercontent.com/i6KNxiy3gME-BulL4WnuGkTGqHuSYF8jl1WRn0rXftcJdSYK7dHKcJ3gLAaPc-KfhmLSYPwf824=s900-c-k-c0x00ffffff-no-rj"
                                    alt="LinkedIn"
                                />
                            </a>
                        </li>
                        <li className='hover:shadow-indigo-500/50 transition duration-500 transform hover:-translate-y-2'>
                            <a
                                href="https://wa.me/919871253730"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="w-7 rounded-2xl"
                                    src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"
                                    alt="WhatsApp"
                                />
                            </a>
                        </li>
                        <li className='hover:shadow-indigo-500/50 transition duration-500 transform hover:-translate-y-2'>
                            <a
                                href="https://github.com/Sonu1HD"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="w-7 rounded-2xl"
                                    src="src/assets/icons8-github-logo-50.png"
                                    alt="GitHub"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar