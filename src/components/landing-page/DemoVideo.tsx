const DemoVideo = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="rounded-md h-[430px] w-[765px] text-neutral-800 shadow-[0_0_58px_rgba(255,255,255,0.05)]"
    >
      <source src="/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag
    </video>
  );
};

export default DemoVideo;
