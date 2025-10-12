import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

interface FilterSectionProps {
  title: string;
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string | null) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  options,
  selectedOption,
  onSelect,
}) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  const handleSelect = (option: string) =>
    onSelect(selectedOption === option ? null : option);

  return (
    <div className="py-4 border-b border-gray-300">
      <div
        className="flex justify-between items-center cursor-pointer mb-3"
        onClick={toggle}
      >
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <span className="text-gray-600 text-xl">{open ? "−" : "+"}</span>
      </div>

      {open && (
        <div className="mt-3 space-y-2">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center text-sm text-gray-700 cursor-pointer hover:text-gray-900"
            >
              <input
                type="checkbox"
                checked={selectedOption === option}
                onChange={() => handleSelect(option)}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

interface SidebarProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

const ShopSidebar: React.FC<SidebarProps> = ({
  minPrice,
  maxPrice,
  onPriceChange,
}) => {
  const [birthstone, setBirthstone] = useState<string | null>(null);
  const [material, setMaterial] = useState<string | null>(null);
  const [metalType, setMetalType] = useState<string | null>(null);
  const [ringSize, setRingSize] = useState<string | null>(null);
  const [shape, setShape] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);

  const priceMin = 90;
  const priceMax = 450;

  const [values, setValues] = useState([minPrice, maxPrice]);

  const handleChange = (newValues: number[]) => {
    setValues(newValues);
    onPriceChange(newValues[0], newValues[1]);
  };

  return (
    <aside className="w-1/6 p-4 hidden md:block text-sm">
      <h2 className="text-base font-semibold mb-3">Browse by</h2>
      <ul className="space-y-1 mb-5">
        <li className="text-gray-700 cursor-pointer hover:text-gray-900">
          All Products
        </li>
        <li className="text-gray-700 cursor-pointer hover:text-gray-900">
          Custom Jewelry
        </li>
        <li className="text-gray-700 cursor-pointer hover:text-gray-900">
          Modern Minimalism
        </li>
        <li className="text-gray-700 cursor-pointer hover:text-gray-900">
          Vintage Styles
        </li>
      </ul>

      <h2 className="text-base font-semibold mb-3">Filter by</h2>

      {/* Dual Range Price Slider */}
      <div className="py-4 border-b border-gray-300">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-gray-800">Price</h3>
        </div>

        <div className="text-sm text-gray-600 mb-6">
          €{values[0]} - €{values[1]}
        </div>

        <div className="px-2">
          <Range
            values={values}
            step={5}
            min={priceMin}
            max={priceMax}
            onChange={handleChange}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                className="flex h-9 w-full"
              >
                <div
                  ref={props.ref}
                  className="h-1 w-full rounded self-center"
                  style={{
                    background: getTrackBackground({
                      values,
                      colors: ["#d1d5db", "#374151", "#d1d5db"],
                      min: priceMin,
                      max: priceMax,
                    }),
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="h-5 w-5 rounded-full bg-gray-700 focus:outline-none"
              />
            )}
          />
        </div>
      </div>

      {/* Collapsible Filters */}
      <FilterSection
        title="Birthstone Month"
        options={["April", "February", "January", "March", "May"]}
        selectedOption={birthstone}
        onSelect={setBirthstone}
      />

      <FilterSection
        title="Material"
        options={["Gold", "Silver"]}
        selectedOption={material}
        onSelect={setMaterial}
      />

      <FilterSection
        title="Metal Type"
        options={["Gold", "Rose Gold", "Silver"]}
        selectedOption={metalType}
        onSelect={setMetalType}
      />

      <FilterSection
        title="Ring Size"
        options={["5", "6", "7", "8", "9"]}
        selectedOption={ringSize}
        onSelect={setRingSize}
      />

      <FilterSection
        title="Shape"
        options={["Circle", "Square"]}
        selectedOption={shape}
        onSelect={setShape}
      />

      <FilterSection
        title="Size"
        options={["Large", "Medium", "Small"]}
        selectedOption={size}
        onSelect={setSize}
      />
    </aside>
  );
};

export default ShopSidebar;
