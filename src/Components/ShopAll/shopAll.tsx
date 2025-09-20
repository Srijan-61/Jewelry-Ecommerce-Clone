import { useState } from "react";
import { products } from "../Shared/productsData";
import { Link } from "react-router-dom"; // Import Link component

const ShopAll = () => {
  const [minPrice, setMinPrice] = useState(90);
  const [maxPrice, setMaxPrice] = useState(450);

  const handleMinPriceChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice);
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice);
    setMaxPrice(value);
  };

  const handleClearFilters = () => {
    setMinPrice(90);
    setMaxPrice(450);
  };

  const filteredProducts = products.filter((product) => {
    return product.price >= minPrice && product.price <= maxPrice;
  });

  const isPriceFiltered = minPrice !== 90 || maxPrice !== 450;

  return (
    <div className="bg-gray-200">
      <div className="bg-primary text-gray-800 min-h-screen flex font-sans gap-12 p-8 ">
        {/* Custom CSS for price slider thumb */}
        <style>{`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 16px;
            width: 16px;
            background-color: #4B5563; /* gray-800 */
            border-radius: 50%;
            border: 2px solid #fff;
            cursor: pointer;
          }
        `}</style>

        {/* Sidebar */}
        <aside className="w-1/6 p-4 hidden md:block text-sm">
          <h2 className="text-base font-semibold mb-3">Browse by</h2>
          <ul className="space-y-1 mb-5">
            <li className="text-gray-700 cursor-pointer">All Products</li>
            <li className="text-gray-700 cursor-pointer">Custom Jewelry</li>
            <li className="text-gray-700 cursor-pointer">Modern Minimalism</li>
            <li className="text-gray-700 cursor-pointer">Vintage Styles</li>
          </ul>

          <h2 className="text-base font-semibold mb-3">Filter by</h2>

          {/* Price Section */}
          <div className="py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-base text-gray-700">Price</h3>
              <span>+</span>
            </div>
            <div className="mt-4 relative">
              <div className="flex justify-between text-sm text-gray-500">
                <span>€{minPrice}</span>
                <span>€{maxPrice}</span>
              </div>
              <div className="relative h-1 mt-2">
                <div className="absolute h-1 bg-gray-300 rounded-full w-full"></div>
                <div
                  className="absolute h-1 bg-gray-800 rounded-full"
                  style={{
                    left: `${((minPrice - 90) / (450 - 90)) * 100}%`,
                    right: `${100 - ((maxPrice - 90) / (450 - 90)) * 100}%`,
                  }}
                ></div>
                <input
                  type="range"
                  min="90"
                  max="450"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  className="absolute w-full h-1 bg-transparent appearance-none pointer-events-auto z-10 opacity-0"
                />
                <input
                  type="range"
                  min="90"
                  max="450"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  className="absolute w-full h-1 bg-transparent appearance-none pointer-events-auto z-10 opacity-0"
                />
              </div>
            </div>
          </div>

          {/* Static Filter Categories */}
          <div className="py-4 border-b border-gray-200">
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-bold text-base text-gray-700">
                Birthstone Month
              </h3>
              <span>+</span>
            </div>
            <div className="mt-4 space-y-2">
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">April</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">February</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">January</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">March</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">May</span>
              </label>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200">
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-bold text-base text-gray-700">Material</h3>
              <span>+</span>
            </div>
            <div className="mt-4 space-y-2">
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">Gold</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">Silver</span>
              </label>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200">
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-bold text-base text-gray-700">Metal Type</h3>
              <span>+</span>
            </div>
            <div className="mt-4 space-y-2">
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">Gold</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">Rose Gold</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">Silver</span>
              </label>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200">
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-bold text-base text-gray-700">Ring Size</h3>
              <span>+</span>
            </div>
            <div className="mt-4 space-y-2">
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">5</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">6</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">7</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">8</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">9</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">Size 6</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">Size 7</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">Size 8</span>
              </label>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200">
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-bold text-base text-gray-700">Shape</h3>
              <span>+</span>
            </div>
            <div className="mt-4 space-y-2">
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">Circle</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">Square</span>
              </label>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 last:border-b-0">
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-bold text-base text-gray-700">Size</h3>
              <span>+</span>
            </div>
            <div className="mt-4 space-y-2">
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">Large</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">Medium</span>
              </label>
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2">Small</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-2">All Products</h1>
          <p className="text-gray-600 text-base mb-2">
            This is your category description. It’s a great place to tell
            customers what this category is about, connect with your audience
            and draw attention to your products.
          </p>

          <div className="flex justify-between items-center my-4">
            <div className="flex gap-2 items-center">
              {isPriceFiltered && (
                <>
                  <div className="flex items-center space-x-2 bg-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                    <span>
                      €{minPrice} - €{maxPrice}
                    </span>
                    <span
                      className="cursor-pointer font-bold text-gray-700 hover:text-gray-900"
                      onClick={handleClearFilters}
                    >
                      x
                    </span>
                  </div>
                  <button
                    className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                    onClick={handleClearFilters}
                  >
                    Clear All
                  </button>
                </>
              )}
              <span className="text-gray-500">
                {filteredProducts.length} products
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <label htmlFor="sort" className="text-gray-600 text-sm">
                Sort by
              </label>
              <select
                id="sort"
                className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 appearance-none"
              >
                <option value="Recommended">Recommended</option>
                <option value="Newest">Newest</option>
                <option value="price-asc">Price (low to high)</option>
                <option value="price-desc">Price (high to low)</option>
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                <div className="pt-2">
                  <h3 className="text-sm font-medium text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">€{product.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ShopAll;
