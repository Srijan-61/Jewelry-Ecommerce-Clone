import { useState } from "react";

interface FilterSectionProps {
  title: string;
  options: string[];
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, options }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const toggle = () => setOpen(!open);
  const handleSelect = (option: string) =>
    setSelected(selected === option ? null : option);

  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <span className="text-gray-800 text-lg">{open ? "−" : "+"}</span>
      </div>

      {open && (
        <div className="mt-3 space-y-2">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center text-sm text-gray-700 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected === option}
                onChange={() => handleSelect(option)}
                className="form-checkbox h-4 w-4 text-gray-800 rounded"
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSection;
