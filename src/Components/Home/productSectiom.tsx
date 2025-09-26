import { products } from "../Shared/productsData";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateNext } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";

export const ProductSection = () => {
  interface ArrowProps {
    onClick?: () => void;
  }

  const NextArrow = ({ onClick }: ArrowProps) => {
    return (
      <div
        className="absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 text-gray-700 rounded-full flex bg-gray-200 items-center justify-center cursor-pointer shadow-md z-20"
        onClick={onClick}
      >
        <MdNavigateNext size={24} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }: ArrowProps) => {
    return (
      <div
        className="absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 text-gray-700 rounded-full flex bg-gray-200 items-center justify-center cursor-pointer shadow-md z-20"
        onClick={onClick}
      >
        <GrPrevious size={24} />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="px-5 sm:px-10 lg:px-20 py-20">
      <h2 className="text-responsive-2xl font-display font-medium mb-10 text-black">
        Featured Products
      </h2>

      {/* Slider Container */}
      <div className="relative">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-3">
              <Link
                to={`/products/${product.id}`}
                className="product-card block"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <h3 className="text-responsive font-body font-medium text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-responsive font-body text-gray-600">
                    €{product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
