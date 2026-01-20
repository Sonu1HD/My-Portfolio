import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="sticky top-0 z-40">
            <nav className='flex justify-around p-6 font-semibold border-b-2 bg-gray-800/50 text-white items-center'>
                <div className="logo">My Portfolio</div>
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
                <div className="menubar flex sm:hidden hover:cursor-pointer items-center bg-indigo-500 p-2 rounded-lg text-white font-bold">
                    menu
                    <i className="fa-solid fa-bars"></i>
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