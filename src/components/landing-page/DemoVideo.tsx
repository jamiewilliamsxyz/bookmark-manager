const DemoVideo = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="rounded-md w-[765px] text-neutral-800 shadow-[0_0_58px_rgba(255,255,255,0.05)] opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]"
    >
      <source src="/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag
    </video>
  );
};

export default DemoVideo;
