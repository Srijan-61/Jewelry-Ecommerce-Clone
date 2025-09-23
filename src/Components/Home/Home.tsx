import { useEffect } from "react";
import { ProductSection } from "./productSectiom";
import pendent from "./../../assets/pendent1.png";
import modelpic from "../../assets/88aac0_140457e419f440e9b314d1ae825a0840~mv2.png";

function Home() {
  useEffect(() => {
    const img = document.getElementById("zoomImage");
    if (!img) return;

    const handleScroll = () => {
      // Run only on mobile (<768px)
      if (window.innerWidth >= 768) {
        img.style.transform = "scale(1)"; // reset for desktop
        return;
      }

      const scrollY = window.scrollY;
      let scale = 1.3 - scrollY / 1000; // Starts at 1.3 → shrinks to 1
      if (scale < 1) scale = 1;
      img.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-200 ">
      <div className="bg-primary overflow-hidden">
        {/* Hero Section */}
        <div className="flex flex-col mt-20 md:flex-row justify-around px-4 md:m-20 overflow-x-hidden ">
          {/* Left Column (text & rose image) */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="space-y-6">
              <h1 className="text-responsive-3xl font-display font-medium">
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
            </div>
            <div className="mt-8">
              <img
                src="https://static.wixstatic.com/media/88aac0_e1f0e49db10f4337b1bc450576793501~mv2.png"
                alt="Rose"
                className="hidden md:block md:size-60"
              />
            </div>
          </div>

          {/* Right Column (Model Image with scroll zoom on mobile only) */}
          <div className="flex-1 md:h-[80vh] overflow-hidden">
            <img
              src={modelpic}
              alt="Model"
              id="zoomImage"
              className="h-full w-full object-cover transition-transform duration-300"
              style={{ transform: "scale(1.3)" }} // initial zoom for mobile
            />
          </div>
        </div>

        {/* Products Section */}
        <ProductSection />

        {/* Exclusive Collection Section */}
        <section className="flex flex-col md:flex-row gap-6 md:gap-10 h-auto md:h-[70vh] px-6 md:px-16 py-10">
          <div className="flex-1">
            <img
              src={pendent}
              alt="Pendent"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left flex flex-col justify-center">
            <h1 className="text-responsive-2xl font-display font-medium">
              EXCLUSIVE <br /> COLLECTION
            </h1>
            <p className="text-responsive-lg font-body">
              Limited Edition Pieces
            </p>
            <button className="bg-gray-800 text-white px-6 py-3 md:px-8 md:py-3 text-responsive font-body font-medium border border-black hover:bg-transparent hover:text-black self-center md:self-start">
              Explore Collection
            </button>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="flex flex-col md:flex-row h-auto md:h-[90vh] bg-[rgba(178,191,194,1)] mt-10 px-6 md:px-16 py-10 gap-6 md:gap-10">
          <div className="flex-1 flex flex-col justify-center space-y-4 md:space-y-6">
            <h2 className="text-responsive-2xl font-display font-medium text-center md:text-left">
              OUR STORY
            </h2>
            <p className="text-responsive font-body text-gray-700 text-center md:text-left">
              At R. Sinclair, we blend craftsmanship with creativity to offer a
              diverse range of jewelry styles. Each piece is crafted with
              dedication and attention to detail, reflecting elegance and
              sophistication.
            </p>
            <img
              src="https://static.wixstatic.com/media/88aac0_49a301e33fb740d5bb9dd1c231fb9e2e~mv2.png"
              alt="Story Image"
              className="w-full hidden md:flex md:w-[70%] mx-auto md:mx-0 mt-6"
            />
          </div>
          <div className="flex-1">
            <img
              src="https://static.wixstatic.com/media/88aac0_0deeaa283fb348a0a7f3664c2becbdb2~mv2.png"
              alt="Story Background"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="px-6 md:px-16 py-10 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-10 justify-between items-center h-96">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h2 className="text-responsive-2xl font-display font-medium">
                WHY CHOOSE US
              </h2>
              <h3 className="text-responsive-xl font-elegant font-medium">
                Exceptional Quality
              </h3>
            </div>
            <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
              <button className="bg-gray-800 text-white px-6 py-3 sm:px-8 sm:py-3 text-responsive font-body font-medium border border-black hover:bg-transparent hover:text-black self-center md:self-start">
                Explore
              </button>
              <p className="text-responsive font-body">
                Our commitment to quality ensures that every piece is a work of
                art, meticulously created to exceed your expectations.
              </p>
            </div>
          </div>

          <hr />

          <div className="flex flex-col md:flex-row gap-10 justify-between items-center h-96">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-responsive-xl font-elegant font-medium">
                Unique Designs
              </h3>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-responsive font-body">
                Our designs stand out for their individuality and innovation,
                capturing the essence of modern trends while maintaining
                timeless appeal.
              </p>
            </div>
          </div>

          <hr />

          <div className="flex flex-col md:flex-row gap-10 justify-between items-center h-96">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-responsive-xl font-elegant font-medium">
                Personalized Service
              </h3>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-responsive font-body">
                Experience personalized service that goes beyond expectations.
                We are dedicated to creating memorable moments for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Large Image Section*/}
        <section className="h-[70vh]">
          <img
            src="https://static.wixstatic.com/media/11062b_2f27d743f79e40c083f0fd29f2917fcbf000.jpg"
            alt="Large"
            className="h-full w-full object-cover"
          />
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-[#d9e3e6] flex flex-col items-center py-20 px-6 md:px-16"
        >
          <h1 className="text-responsive-2xl font-display font-medium text-center mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-center text-gray-700 mb-12 text-responsive font-body">
            Have a question or looking for something special? Reach out to us
            and let us assist you in finding the perfect piece.
          </p>
          <form className="w-full max-w-3xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <label className="block text-gray-700 text-responsive font-body font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-600 bg-transparent focus:outline-none py-2 text-responsive font-body"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-responsive font-body font-medium">
                  Surname *
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-600 bg-transparent focus:outline-none py-2 text-responsive font-body"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-responsive font-body font-medium">
                Email *
              </label>
              <input
                type="email"
                className="w-full border-b border-gray-600 bg-transparent focus:outline-none py-2 text-responsive font-body"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-responsive font-body font-medium">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full border-b border-gray-600 bg-transparent focus:outline-none py-2 resize-none text-responsive font-body"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 mt-6 hover:bg-transparent hover:text-black border border-black transition text-responsive font-body font-medium"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Home;
