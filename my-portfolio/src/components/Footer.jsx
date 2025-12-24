import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='bg-[#0a0f1f] text-white py-10'>
                <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">

                    {/* Logo / Branding */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Sonu Portfolio</h2>
                        <p className="text-white/70 text-sm">
                            Building the web, one project at a time.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-white/80">
                            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
                            <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
                            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Follow Me</h3>
                        <div className="flex space-x-4">

                            <a href="https://www.linkedin.com/in/sonu-halder-33479b282" target="_blank" rel="noopener noreferrer">
                                <img src="https://yt3.googleusercontent.com/i6KNxiy3gME-BulL4WnuGkTGqHuSYF8jl1WRn0rXftcJdSYK7dHKcJ3gLAaPc-KfhmLSYPwf824=s900-c-k-c0x00ffffff-no-rj" alt="LinkedIn"
                                    className="w-8 hover:scale-110 transition-all rounded-2xl" />
                            </a>

                            <a href="https://wa.me/919871253730" target="_blank" rel="noopener noreferrer">
                                <img src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN" alt="WhatsApp"
                                    className="w-8 hover:scale-110 transition-all rounded-2xl" />
                            </a>

                            <a href="https://github.com/Sonu1HD" target="_blank" rel="noopener noreferrer">
                                <img src="src/assets/icons8-github-logo-50.png" alt="GitHub"
                                    className="w-8 hover:scale-110 transition-all" />
                            </a>

                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 mt-6 pt-4 text-center text-white/70 text-sm">
                    © {new Date().getFullYear()} Sonu Halder — All Rights Reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer