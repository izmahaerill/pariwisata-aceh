/* eslint-disable react/prop-types */
import React, { useState } from "react";
import IconFilter from "../../assets/icons/iconFilter";

const options = [
  { isActive: false, value: "Wisata Buatan" },
  { isActive: false, value: "Wisata Alam" },
  { isActive: false, value: "Pantai" },
  { isActive: false, value: "Air Terjun" },
  { isActive: false, value: "Masjid" },
  { isActive: false, value: "Monumen Sejarah" },
  { isActive: false, value: "Taman Nasional" },
];

// eslint-disable-next-line react/prop-types
const ButtonFilter = ({ dataOld, setDestinations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(options);
  // eslint-disable-next-line no-unused-vars

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (index) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index].isActive = !newSelectedOptions[index].isActive;
    setSelectedOptions(newSelectedOptions);
  };

  const resetFilters = () => {
    setSelectedOptions(options);
    setDestinations(dataOld);
  };

  const saveFilters = () => {
    console.log("Selected options:", selectedOptions);
    const dataResultFilter = dataOld.filter((item) => {
      const checking = selectedOptions.find(
        (option) => option.isActive && option.value === item.typeLocation
      );
      if (!checking) return false;
      return true;
    });
    setDestinations(dataResultFilter);
  };

  return (
    <div className="relative ">
      <div
        className="flex items-center gap-1 bg-yellow-primary px-4 py-[10px] rounded-3xl text-white cursor-pointer"
        onClick={toggleFilter}
      >
        <IconFilter />
        <button className="text-white">Filter</button>
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
                  checked={selectedOptions[index].isActive}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label
                  htmlFor={`checkbox-${index}`}
                  className="text-black text-sm"
                >
                  {option.value}
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
