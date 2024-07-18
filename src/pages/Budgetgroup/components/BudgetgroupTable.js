import React from 'react';
import { useNavigate } from "react-router-dom";
import { Edit, Trash } from "react-feather";

const BudgetgroupTable = () => {
    const navigate = useNavigate();
    
    // Handle edit action
  const handleEdit = (row) => {
    console.log("Edit clicked", row);
    alert("Edit clicked", row);
  };

  // Handle delete action
  const handleDelete = (row) => {
    console.log("delete clicked", row);
    alert("Delete clicked", row);
  };
  return (
    
    <div className="relative overflow-x-auto  shadow-md sm:rounded-lg ">
    <form className="flex ">
      <label
        for="countries"
        className="flex mb-2 text-sm font-medium text-white dark:text-white"
      ></label>
      <select
        id="countries"
        className="bg-gray-50 border me-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Bulk action</option>
        <option value="Delete"> Delete</option>
        
      </select>

      <button
        type="button"
        onClick
        className="bg-blue-500 text-white  px-4 py-2 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Apply
      </button>
    </form>
    <table className="w-full mt-2 text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
      <thead className="text-xs text-gray-700 uppercase bg-[#111827] dark:bg-gray-700  text-white dark:text-white-400 rounded-t-lg">
        <tr>
          <th scope="col" class="p-4">
            <div className="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-all-search" className="sr-only">
                checkbox
              </label>
            </div>
          </th>
          <th scope="col" className="px-6 py-3">
            BudgetGroup name
          </th>
          <th scope="col" className="px-6 py-3">
            Team Work
          </th>
         

          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-[#293648] text-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#293648]  dark:hover:bg-[#293648] ">
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-table-search-1" className="sr-only">
                checkbox
              </label>
            </div>
          </td>
          <th
            scope="row"
            className="px-6 py-4 text-white font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
           Team 1 
          </th>
          <td className="px-6 py-4">mobile work</td>
       

          <td className="flex items-center px-6 py-4">
            <a
              href="#"
              className="font-medium text-white-600 dark:text-white-500 hover:underline"
            >
              <Edit
                size={14}
                onClick={() => handleEdit()}
                style={{ marginRight: "10px" }}
              />
            </a>
            <a
              href="#"
              className="font-medium text-white-600 dark:text-white-500 hover:underline ms-3"
            >
              <Trash size={14} onClick={() => handleDelete()} />
            </a>
          </td>
        </tr>
        <tr className="bg-[#293648] text-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#293648] dark:hover:bg-[#293648]">
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-table-search-2"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-table-search-2" className="sr-only">
                checkbox
              </label>
            </div>
          </td>
          <th
            scope="row"
            class="px-6 py-4  text-white font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
           Team 2
          </th>
          <td className="px-6 py-4">App work</td>
         

          <td className="flex items-center px-6 py-4">
            <a
              href="#"
              className="font-medium text-white-600 dark:text-white-500 hover:underline"
            >
              <Edit
                size={14}
                onClick={() => handleEdit()}
                style={{ marginRight: "10px" }}
              />
            </a>
            <a
              href="#"
              className="font-medium text-white-600 dark:text-white-500 hover:underline ms-3"
            >
              <Trash size={14} onClick={() => handleDelete()} />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default BudgetgroupTable;
