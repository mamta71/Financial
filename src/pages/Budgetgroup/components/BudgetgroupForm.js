import React from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const nameOptions = [
  { value: 'ram', label: 'Ram' },
  { value: 'shyam', label: 'Shyam' },
  { value: 'hari', label: 'Hari' },
  { value: 'gita', label: 'Gita' },
  { value: 'rita', label: 'Rita' },
  { value: 'maya', label: 'Maya' },
  { value: 'rahul', label: 'Rahul' },
  { value: 'mina', label: 'Mina' },
  { value: 'ritu', label: 'Ritu' },
  { value: 'rina', label: 'Rina' },
  
];

const BudgetgroupForm = () => {
  return (
    <div className="bg-[#1A384B] text-white dark:bg-gray-900 shadow-md rounded-lg px-6 py-6 w-[35%] ">
      <h1 className="text-2xl font-bold mb-4 dark:text-gray-200 border-b border-black-900">
        Add BudgetGroup
      </h1>
      <form action="#">
        <div className="mb-4">
          <label
            htmlFor="Name"
            className="block text-sm font-medium text-white text-gray-700 dark:text-gray-300 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm rounded-md text-black w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Group Name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="parent"
            className="block mb-2 text-sm font-medium text-white text-gray-900 dark:text-white"
          >
            Select your team
          </label>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            // defaultValue={[nameOptions[0], nameOptions[1]] }
            isMulti
            options={nameOptions}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
               
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: "gray",
              }),
              menuList: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: "gray",
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isFocused ? "grey" : "gray",
                color: state.isFocused ? "white" : "white",
              }),
              multiValue: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: "grey",
                color: "white",
              }),
              multiValueLabel: (baseStyles) => ({
                ...baseStyles,
                color: "white",
              }),
            }}
          />
        </div>

        <button
          type="submit"
          className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default BudgetgroupForm;
