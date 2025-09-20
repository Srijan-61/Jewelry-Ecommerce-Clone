import  { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../Shared/productsData";
import { useCart } from "../Shared/CartContext";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const { addToCart } = useCart();

  // Find the product based on the ID from the URL.
  // We use parseInt() to convert the string ID from the URL to a number.
  const product = products.find((p) => p.id === parseInt(productId));

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  // If no product is found for the given ID, display a "not found" message.
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="bg-primary min-h-screen p-8 flex items-center justify-center">
      <div className="flex flex-col md:flex-row max-w-4xl w-full">
        {/* Product Image Section */}
        <div className="w-full md:w-1/2 p-4 flex flex-col">
          {/* Breadcrumb Navigation */}
          <nav className="text-xs font-body text-gray-500 mb-4">
            <Link to="/home" className="hover:text-gray-700 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/shopall" className="hover:text-gray-700 transition-colors">
              All Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{product.name}</span>
          </nav>
          
          {/* Product Image */}
          <div className="flex items-center justify-center flex-1">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-responsive-xl font-display font-medium text-gray-800 mb-2">
              {product.name}
            </h1>
            <p className="text-responsive-lg font-body font-medium text-gray-600 mb-6">
              €{product.price.toFixed(2)}
            </p>

            {/* description*/}
            <div className="mb-6">
              <p className="text-responsive font-body text-gray-800">
                This is the short description of the product
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-responsive font-body font-medium text-gray-700 mb-1">
                Quantity *
              </label>
              <div className="flex items-center border border-gray-300 rounded w-24 bg-white">
                <button
                  onClick={handleDecrement}
                  className="px-3 py-1 text-lg font-semibold text-gray-600 hover:bg-gray-100 rounded-l"
                >
                  -
                </button>
                <span className="flex-1 text-center text-gray-800 text-responsive font-body font-medium">
                  {quantity}
                </span>
                <button
                  onClick={handleIncrement}
                  className="px-3 py-1 text-lg font-semibold text-gray-600 hover:bg-gray-100 rounded-r"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="w-full py-3 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition duration-300 text-responsive font-body"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
