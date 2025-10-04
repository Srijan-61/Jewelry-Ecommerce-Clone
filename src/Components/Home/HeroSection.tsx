
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import modelpic from "../../assets/88aac0_140457e419f440e9b314d1ae825a0840~mv2.png";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react"; 

// Define custom bottom-to-top reveal animation
const revealFromBottom = keyframes`
  0% {
    clip-path: inset(100% 0 0 0);
    opacity: 0;
  }
  100% {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
`;

function HeroSection() {
  return (
    <ParallaxProvider>
      <div className="mt-50 lg:mt-50 lg:mx-20">
        <div className="flex flex-col lg:flex-row justify-around lg:space-x-16 overflow-x-hidden">
          {/* Left Column */}
          <div className="flex-1 flex flex-col justify-between z-10 relative">
            <div className="space-y-6 flex flex-col">
              {/* Custom reveal animation applied here */}
              <Reveal
                keyframes={revealFromBottom}
                duration={1200}
                triggerOnce
                cascade
                damping={0.25}
              >
                <h1 className="text-responsive-3xl font-display font-light">
                  UNIQUE EXPRESSIONS
                </h1>

                <p className="text-responsive-lg font-body">
                  Discover Your Style Statement
                </p>

                <a href="/shopall">
                  <button className="bg-black text-white px-6 py-3 border border-black transition duration-300 hover:bg-transparent hover:text-black text-responsive font-body font-medium">
                    Shop Now
                  </button>
                </a>
              </Reveal>
            </div>

            <div className="mt-8">
              <img
                src="https://static.wixstatic.com/media/88aac0_e1f0e49db10f4337b1bc450576793501~mv2.png"
                alt="Rose"
                className="hidden lg:block lg:size-60"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 overflow-hidden">
            {/* Mobile (static image) */}
            <img src={modelpic} alt="modelpic" className="lg:hidden h-auto" />

            {/* Desktop (Parallax background) */}
            <div className="hidden lg:block h-full w-full">
              <Parallax speed={-40}>
                <div
                  className="h-[110vh] w-full bg-cover bg-center bg-fixed bg-no-repeat"
                  style={{ backgroundImage: `url(${modelpic})` }}
                ></div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default HeroSection;
