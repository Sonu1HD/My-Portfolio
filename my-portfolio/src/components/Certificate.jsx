import React from 'react'

const Certificate = () => {
  return (
    <div className="certificate-card w-70 h-45 perspective">
  <div className="certificate-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
    {/* FRONT */}
    <div className="certificate-front shadow-2xl shadow-indigo-500/50 transition duration-500 absolute inset-0 bg-indigo-400/50 backdrop-blur-lg border border-white/10 
    rounded-2xl flex items-center justify-center text-white backface-hidden">
      <h3 className="text-2xl">MY Achievement</h3>
    </div>

    {/* BACK */}
    <div className="certificate-back absolute inset-0 rotate-y-180 backface-hidden">
      <img className="w-full h-full rounded-2xl object-cover"
      src="/images/Adobe Scan Jan 18, 2026_page-0001.jpg" alt="Certificate" />
    </div>
  </div>
</div>
  )
}

export default Certificate