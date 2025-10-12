import { useState } from "react";
import { products } from "../../Components/Shared/productsData";
import { Link } from "react-router-dom";
import ShopSidebar from "./ShopSidebar";

const ShopAll: React.FC = () => {
  const [minPrice, setMinPrice] = useState(90);
  const [maxPrice, setMaxPrice] = useState(450);

  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleClearFilters = () => {
    setMinPrice(90);
    setMaxPrice(450);
  };

  const filteredProducts = products.filter(
    (p) => p.price >= minPrice && p.price <= maxPrice
  );

  const isPriceFiltered = minPrice !== 90 || maxPrice !== 450;

  return (
    <div className="bg-gray-200">
      <div className="bg-primary text-gray-800 min-h-screen flex font-sans gap-12 p-8 mt-10">
        <ShopSidebar
          minPrice={minPrice}
          maxPrice={maxPrice}
          onPriceChange={handlePriceChange}
        />

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-2">All Products</h1>
          <p className="text-gray-600 text-base mb-4">
            Browse our full collection and filter by price, material, and more.
          </p>

          <div className="flex justify-between items-center mb-4">
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
                      ×
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
                className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
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
