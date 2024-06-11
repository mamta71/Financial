import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Delete, Edit, Trash } from "react-feather";
import EditBudget from "./EditBudget";

const columns = [
  {
    name: "Budget Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Budget Amount",
    selector: (row) => row.amount,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row) => row.category,
    sortable: true,
  },

  {
    name: "Action",
    cell: (row) => (
      <div className="flex">
        <Edit onClick={()=>console.log(row)}/>
        <Trash />
      </div>
    ),
    selector: (row) => row.action,
    sortable: true,
  },
];

const Budget = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Transforming the fetched data to match the expected structure
        const transformedData = data.products.map((product) => ({
          id: product.id,
          name: product.title,
          amount: product.price,
          category: product.category,
          
        }));
        setData(transformedData);
      });
  }, []);

  return (
    <div className="bg-gray-100">
      <section id="contact" className="bg-gray-100 flex">
        {/* Left side content */}
        <div className="px-4 w-[40%]">
          <div className="p-5">
            <h3 className="text-xl mb-4 text-black-400 py-4 pb-0 justify-center">
              Account Expense
            </h3>
            <form id="contactForm" action="#" method="POST">
              <div className="mb-4">
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Budget Title
                </label>
                <input
                  type="text"
                  id="budget"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Budget title"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Amount"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right side content */}
        <div className="p-5 w-[60%]">
          <h3 className="text-xl mb-8 text-black-400 p-4 justify-center">
            This is right content
          </h3>
          {/* DataTable */}
          <DataTable columns={columns} data={data} />
        </div>
      </section>
      {/* <EditBudget/> */}
    </div>
  );
};

export default Budget;
