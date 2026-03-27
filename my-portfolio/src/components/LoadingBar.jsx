import { motion } from "framer-motion";

export default function LoadingBar({ isLoading }) {
  return (
    <div className="w-full max-w-md mx-auto mt-10">
      {/* Background Track */}
      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden relative">
        {/* Animated Fill */}
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          initial={{ width: "0%" }}
          animate={{ width: isLoading ? "90%" : "100%" }}
          transition={{ 
            duration: isLoading ? 2 : 0.5, 
            ease: "easeOut" 
          }}
        />
        
        {/* Shimmer Glow Effect */}
        <motion.div 
          className="absolute top-0 bottom-0 w-20 bg-white/20 skew-x-12"
          animate={{ x: ["-100%", "400%"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
      </div>
      <p className="text-center text-gray-400 mt-2 text-sm animate-pulse">
        {isLoading ? "Fetching projects..." : "Loaded!"}
      </p>
    </div>
  );
}