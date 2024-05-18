import React, { useState } from "react";
import IconFilter from "../../assets/icons/iconFilter";

const options = [
  "Wisata Buatan",
  "Wisata Alam",
  "Pantai",
  "Gunung",
  "Air Terjun",
  "Masjid",
  "Monumen Sejarah",
  "Taman Nasional",
];

const ButtonFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(options.length).fill(false)
  );

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (index) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = !newSelectedOptions[index];
    setSelectedOptions(newSelectedOptions);
  };

  const resetFilters = () => {
    setSelectedOptions(new Array(options.length).fill(false));
  };

  const saveFilters = () => {
    console.log("Selected options:", selectedOptions);
  };

  return (
    <div className="relative ">
      <div className="flex items-center gap-1 bg-yellow-primary px-4 py-[10px] rounded-3xl text-white">
        <IconFilter />
        <button onClick={toggleFilter} className="text-white">
          Filter
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-60 bg-white shadow-lg rounded-md p-4 z-10 outline outline-1 outline-yellow-primary">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">Filter</h2>
            <button
              onClick={toggleFilter}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>

          <div className="mb-4">
            {options.map((option, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  className="custom-checkbox mr-2"
                  checked={selectedOptions[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label
                  htmlFor={`checkbox-${index}`}
                  className="text-black text-sm"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={resetFilters}
              className="outline outline-1 outline-yellow-primary text-black text-xs px-4 py-1 rounded hover:bg-yellow-primary"
            >
              Reset
            </button>
            <button
              onClick={saveFilters}
              className="bg-yellow-primary text-white px-4 py-1 rounded text-xs"
            >
              Simpan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonFilter;
