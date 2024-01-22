export const BKGVideo: React.FC<{
    src: string;
  }> = ({ src }) => {
    return (
      <video
        className="w-full h-full object-cover object-center opacity-50"
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
  