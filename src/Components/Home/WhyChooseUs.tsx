function WhyChooseUs() {
  return (
    <section className="px-6 md:px-16 py-10 flex flex-col gap-10">
      {/* Exceptional Quality */}
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
            Our commitment to quality ensures that every piece is a work of art,
            meticulously created to exceed your expectations.
          </p>
        </div>
      </div>

      <hr />

      {/* Unique Designs */}
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center h-96">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-responsive-xl font-elegant font-medium">
            Unique Designs
          </h3>
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-responsive font-body">
            Our designs stand out for their individuality and innovation,
            capturing the essence of modern trends while maintaining timeless
            appeal.
          </p>
        </div>
      </div>

      <hr />

      {/* Personalized Service */}
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center h-96">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-responsive-xl font-elegant font-medium">
            Personalized Service
          </h3>
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-responsive font-body">
            Experience personalized service that goes beyond expectations. We
            are dedicated to creating memorable moments for our clients.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
