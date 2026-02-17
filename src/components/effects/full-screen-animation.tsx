'use client';

const FullScreenAnimation = () => {
  return (
    <div className="animation-wrapper">
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="h-32 w-32 animate-spin rounded-full border-8 border-l-transparent border-t-cyan-400 border-r-fuchsia-500 border-b-purple-500"></div>
      </div>
    </div>
  );
};

export default FullScreenAnimation;
