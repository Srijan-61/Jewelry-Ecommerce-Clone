import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function OurStory() {
  return (
    <ParallaxProvider>
      <section className="flex flex-col md:flex-row h-auto md:h-[120vh] bg-[rgba(178,191,194,1)] mt-10 px-6 md:px-16 py-10 gap-6 md:gap-10 ">
        <div className="flex-1 flex flex-col justify-between space-y-4 md:space-y-8">
          <div className="space-y-8">
            <h2 className="text-responsive-2xl font-display font-medium text-center md:text-left">
              OUR STORY
            </h2>
            <p className="text-responsive font-body text-gray-700 text-center md:text-left">
              At R. Sinclair, we blend craftsmanship with creativity to offer a
              diverse range of jewelry styles. Each piece is crafted with
              dedication and attention to detail, reflecting elegance and
              sophistication.
            </p>
          </div>

          <img
            src="https://static.wixstatic.com/media/88aac0_49a301e33fb740d5bb9dd1c231fb9e2e~mv2.png"
            alt="Story Image"
            className="w-full hidden md:flex md:w-[70%] mx-auto md:mx-0 mt-6"
          />
        </div>
        <div className="flex-1">
          <div className="md:hidden">
            <img
              src="https://static.wixstatic.com/media/88aac0_0deeaa283fb348a0a7f3664c2becbdb2~mv2.png"
              alt="Story Background"
              className="h-full w-full object-cover"
            />
          </div>
          {/* desktop parallax image */}
          <div className="hidden md:block h-full w-auto overflow-hidden">
            <Parallax speed={-40}>
              <div className=" h-[110vh] w-full bg-cover bg-center bg-no-repeat bg-[url(https://static.wixstatic.com/media/88aac0_0deeaa283fb348a0a7f3664c2becbdb2~mv2.png)]"></div>
            </Parallax>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
}

export default OurStory;
