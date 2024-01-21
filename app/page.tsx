import { SectionOne } from "./components/section-one/section-one";

export default function Home() {
  return (
    <div id="body" className=" cust-body-bkg relative">
      <div
        id="body-pattern-29638264"
        className="z-20 absolute inset-0 cust-pattern-1-circuit-board bg-opacity-50 opacity-40"
      ></div>
      <div
        id="body-bkg-video-29458548"
        className="z-10 absolute inset-0 bg-cover bg-center overflow-hidden"
      >
        <BKGVideo src="/overwatch_action.mp4" />
      </div>
      <div
        id="body-flex-box-cont-295039753"
        className="z-30 relative flex flex-col items-center justify-between"
      >
        <div id="section-1-container" className="flex-none">
          <SectionOne />
        </div>
        <div id="section-1-container" className="flex-none">
          <SectionOne />
        </div>
      </div>
    </div>
  );
}

const BKGVideo: React.FC<{
  src: string;
}> = ({ src }) => {
  return (
    // <div id="video-container" className="w-full h-full">
    <video
      className="w-full h-full object-cover object-center filter blur-sm brightness-[0.2]"
      style={{ transform: "scale(1.35)" }}
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={src} type="video/mp4"></source>
    </video>
  );
};
