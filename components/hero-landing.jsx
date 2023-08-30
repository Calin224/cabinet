export const Hero = ({ title }) => {
  return (
    <div className="min-h-[60vh] relative flex items-center justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="z-10 relative flex justify-center items-center flex-col h-[100%] text-white">
        <h1 className="text-5xl font-extrabold text-center mb-5">{title}</h1>
        <p className="text-lg text-center">
        &apos;Nu poți vindeca trupul fără să vindeci sufletul&apos; (SOCRATE)
        </p>
      </div>
    </div>
  );
};
