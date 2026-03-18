import { useEffect, useState } from "react";

const IntroLoader = ({ onFinish }) => {
  const [text, setText] = useState("");
  const fullText = "LOADING PORTFOLIO...";

  // typing effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 60);

    const timer = setTimeout(() => {
      onFinish();
    }, 2500);

    return () => {
      clearInterval(typing);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center z-50">

      {/* Rotating Gradient Ring */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full border-4 border-transparent 
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
          animate-spin"></div>

        {/* Inner Glow */}
        <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-md"></div>
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-white">
        SONU
        <span className="text-purple-400">.</span>
      </h1>

      {/* Typing Text */}
      <p className="mt-4 text-sm text-blue-400 tracking-widest">
        {text}
        <span className="animate-pulse">|</span>
      </p>
    </div>
  );
};

export default IntroLoader;