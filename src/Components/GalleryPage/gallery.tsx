import galleryImages from "./galleryImages";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-primary p-8 font-sans">
      <h1 className="text-4xl font-light tracking-widest text-[#5C5C5C] mb-8">
        GALLERY
      </h1>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="mb-4 overflow-hidden transition-transform duration-300 hover:scale-105 break-inside-avoid-column"
          >
            <img
              src={image}
              alt={`Jewelry image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
