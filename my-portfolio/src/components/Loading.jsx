import React from "react";

const Loading = () => {
  return (
    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="animate-pulse bg-white/10 p-3 rounded">
          
          {/* Image skeleton */}
          <div className="h-32 bg-gray-300 rounded mb-3"></div>

          {/* Title skeleton */}
          <div className="h-4 bg-gray-300 w-3/4 mb-2"></div>

          {/* Price / text skeleton */}
          <div className="h-4 bg-gray-300 w-1/2"></div>

        </div>
      ))}
    </div>
  );
};

export default Loading;