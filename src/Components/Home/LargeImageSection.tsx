import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import videoFile from "../../assets/videoplayback (1).mp4";

function LargeVideoSection() {
  return (
    <ParallaxProvider>
      <section className="h-[vh] w-full overflow-hidden">
        <Parallax speed={-40}>
          <video
            src={videoFile}
            autoPlay
            loop
            muted
            className="h-[110vh] w-full object-cover"
          />
        </Parallax>
      </section>
    </ParallaxProvider>
  );
}

export default LargeVideoSection;
