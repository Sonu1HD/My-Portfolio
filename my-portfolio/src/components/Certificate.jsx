import React from 'react'

const Certificate = () => {
  return (
    <div className="certificate-card w-80 h-52 perspective">
  <div className="certificate-inner relative w-full h-full transition-transform duration-700 ease-out transform-style-preserve-3d hover:rotate-y-180">

    {/* FRONT */}
    <div className="certificate-front absolute inset-0 backface-hidden 
      rounded-2xl border border-white/20 
      bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-pink-500/40 
      backdrop-blur-xl shadow-xl shadow-indigo-500/40 
      flex flex-col items-center justify-center text-white p-6">

      <span className="text-xs uppercase tracking-widest text-indigo-200 mb-2">
        Achievement
      </span>

      <h3 className="text-2xl font-semibold mb-2">
        Professional Certification
      </h3>

      <p className="text-sm text-center text-white/80">
        Recognized for completing an Full-Stack Web Development training program
        focused on practical development skills.
      </p>

      <span className="mt-4 px-4 py-1 text-xs rounded-full 
        bg-white/20 border border-white/30">
        Hover to view
      </span>
    </div>

    {/* BACK */}
    <div className="certificate-back absolute inset-0 rotate-y-180 backface-hidden rounded-2xl overflow-hidden">
      <img
        src="/images/Adobe Scan Jan 18, 2026_page-0001.jpg"
        alt="Certificate"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-end p-4">
        <p className="text-xs text-white/90">
          Verified Certificate • Jan 2026
        </p>
      </div>
    </div>

  </div>
</div>
  )
}

export default Certificate