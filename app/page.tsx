export default function Home(): JSX.Element {
  return (
    <div id="body" className="min-h-screen w-full cust-body-bkg relative">
      <div
        id="body-pattern-29638264"
        className="z-10 absolute inset-0 cust-pattern-1-circuit-board bg-opacity-50 opacity-40"
      ></div>
      <div
        id="body-bkg-video-29458548"
        className="z-0 absolute inset-0 bg-cover bg-center overflow-hidden"
      >
        <BKGVideo src="/overwatch_action.mp4" />
      </div>
      <div
        id="body-flex-box-cont-295039753"
        className="z-20 flex flex-col items-center justify-between"
      >
        <div id="section-1-container" className="flex-none border p-10">
          <SectionOne />
        </div>
      </div>
    </div>
  );
}

export const BKGVideo: React.FC<{
  src: string;
}> = ({ src }) => {
  return (
    // <div id="video-container" className="w-full h-full">
    <video
      className="w-full h-full object-cover object-center filter blur-sm brightness-[0.2]"
      style={{ transform: "scale(1.3)" }}
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={src} type="video/mp4"></source>
    </video>
  );
};

export const SectionOne: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full p-10 border">
      {/* Add other content here */}
      <h1 className="text-4xl font-bold text-center text-white">this text should be visible</h1>
    </div>
  );
};
