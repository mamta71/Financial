import React from "react";
// import DataTable from "react-data-table-component";
import { useState } from "react";
// import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];
const Budget = () => {
  return (
    <body className="bg-gray-100">
      {/* <DataTable columns={columns} data={data} /> */}

      <section id="contact" className="bg-gray-100 flex">
        {/* left side content */}F
        <div className="px-4 w-[40%]">
          <div className="p-5">
            <h3 className="text-xl mb-4 text-black-400 py-4 pb-0 justify-center">
              Account Expense
            </h3>
            <form id="contactForm" action="#" method="POST">
              <div className="mb-4">
                <label
                  for="budget"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Budget Title
                </label>
                <input
                  type="budget"
                  id="budget"
                  className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Budget title"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="amoutnt"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Amount
                </label>
                <input
                  type="amount"
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

        {/* right side content */}
        <div className="p-5 w-[60%]">
          <h3 class="text-xl mb-8 text-black-400 p-4 justify-center">
            This is right content
          </h3>
        </div>
      </section>
    </body>
  );
};

export default Budget;
