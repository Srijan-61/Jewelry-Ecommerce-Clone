function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#d9e3e6] flex flex-col items-center py-20 px-6 md:px-16"
    >
      <h1 className="text-responsive-2xl font-display font-medium text-center mb-6">
        GET IN TOUCH
      </h1>
      <p className="text-center text-gray-700 mb-12 text-responsive font-body">
        Have a question or looking for something special? Reach out to us and
        let us assist you in finding the perfect piece.
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
  );
}

export default ContactSection;
