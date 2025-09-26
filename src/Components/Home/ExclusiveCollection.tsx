import pendent from "../../assets/pendent1.png";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function ExclusiveCollection() {
  return (
    <ParallaxProvider>
      <section className="flex flex-col md:flex-row gap-6 md:gap-10 h-full md:h-[100vh] px-6 md:px-16 py-10">
        {/* mobile image */}
        <div className="flex-1 overflow-hidden ">
          <div className="md:hidden">
            <img src={pendent} alt="Pendent" className="w-full object-cover" />
          </div>

          {/* desktop parallax image */}
          <div className="hidden md:block h-full w-auto">
            <Parallax speed={-40}>
              <div
                className=" h-[100vh] w-full bg-cover bg-center bg-no-repeat "
                style={{ backgroundImage: `url(${pendent})` }}
              ></div>
            </Parallax>
          </div>
        </div>

        {/* text content */}
        <div className="flex-1 space-y-4 text-center md:text-left flex flex-col justify-center">
          <h1 className="text-responsive-2xl font-display font-medium">
            EXCLUSIVE <br /> COLLECTION
          </h1>
          <p className="text-responsive-lg font-body">Limited Edition Pieces</p>
          <button className="bg-gray-800 text-white px-6 py-3 md:px-8 md:py-3 text-responsive font-body font-medium border border-black hover:bg-transparent hover:text-black self-center md:self-start">
            Explore Collection
          </button>
        </div>
      </section>
    </ParallaxProvider>
  );
}

export default ExclusiveCollection;
