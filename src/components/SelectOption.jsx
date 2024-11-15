
import React, { useState } from 'react'

const SelectOption = () => {

    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const [selectedOption,setSelectedOption]=useState('');


    const toggleDropdown=()=>{
        setIsMenuOpen(!isMenuOpen); 
    }
    const handleSelectOption=(option)=>{
        setSelectedOption(option);
        setIsMenuOpen(false); 
      }

  return (
   
    <div className="relative w-[90%]">
    <button
      onClick={toggleDropdown}
      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      {/* Selected Option or Placeholder */}
      <span>{selectedOption || 'Select an option'}</span>

      {/* Down/Up Arrow Icon */}
      <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </button>

    {/* Dropdown menu */}
    {isMenuOpen && (
      <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
        <button
          onClick={() => handleSelectOption('General')}
          className="w-full px-4 py-2 text-left hover:bg-gray-200"
        >
          General
        </button>
        <button
          onClick={() => handleSelectOption('Identification')}
          className="w-full px-4 py-2 text-left hover:bg-gray-200"
        >
          Identification
        </button>
        <button
          onClick={() => handleSelectOption('Income')}
          className="w-full px-4 py-2 text-left hover:bg-gray-200"
        >
          Income
        </button>
        <button
          onClick={() => handleSelectOption('Legal & Conveyancing')}
          className="w-full px-4 py-2 text-left hover:bg-gray-200"
        >
          Legal & Conveyancing
        </button>

        <button
          onClick={() => handleSelectOption('Loan')}
          className="w-full px-4 py-2 text-left hover:bg-gray-200"
        >
          Loan
        </button>
        <button
          onClick={() => handleSelectOption('Security')}
          className="w-full px-4 py-2 text-left hover:bg-gray-200"
        >
          Security
        </button>
        <button
          onClick={() => handleSelectOption('Statement of Position')}
          className="w-full px-4 py-2 text-left hover:bg-gray-200"
        >
          Statement of Position
        </button>
      </div>
    )}
  </div>
  )
}

export default SelectOption
