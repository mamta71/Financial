import React from "react";

const CategoryForm = () => {
  return (
    <div className="bg-[#1A384B]  text-white dark:bg-gray-900 shadow-md rounded-lg px-6 py-6 w-[35%] ">
      <h1 className="text-2xl font-bold  mb-4 dark:text-gray-200 border-b border-black-900">
        Add Category
      </h1>
      <form action="#">
        <div className="mb-4">
          <label
            for="Name"
            className="block text-sm font-medium text-white text-gray-700 dark:text-gray-300 mb-2"
          >
            Name
          </label>
          <input
            type="name"
            id="name"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Category Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            for="parent"
            class="block mb-2 text-sm font-medium text-white text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="Parent"
            class="bg-gray-50  text-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a parent</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            for="Slug"
            className="block text-sm text-white font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Slug
          </label>
          <input
            type="slug"
            id="slug"
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Category Slug"
            required
          />
        </div>

        <button
          type="submit"
          className="flex justify-center py-2 px-4  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add 
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
