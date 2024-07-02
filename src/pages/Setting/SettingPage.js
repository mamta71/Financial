import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Breadcrumb from "../../components/layouts/Breadcrumb";

const SettingPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  console.log(startDate);
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Setting", link: "/Setting" },
    { label: "list", link: null },
  ];
  return (
    <div>
      <Breadcrumb breadcrumbData={breadcrumbItems} />

      <div className="min-h-screen bg-gray-900 flex justify-center w-full mt-6 mb-6  dark:bg-gray-950">
        <div className="bg-[#1A384B] text-white dark:bg-gray-900 shadow-md rounded-lg px-6 py-6 w-[100%] ">
          <h1 className="text-2xl font-bold mb-4 dark:text-gray-200 border-b border-black-900">
            Gerenal Setting
          </h1>
          <form action="#">
            <div className="grid grid-cols-2 gap-4">
              {/* Site Title */}
              <div className="mb-4">
                <label
                  htmlFor="Site Title"
                  className="block text-sm font-medium text-white text-gray-700 dark:text-gray-300 mb-2"
                >
                  Site Title
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm rounded-md w-full text-black px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Your Site Title"
                  required
                />
              </div>
              {/* Site Description*/}
              <div className="mb-4">
                <label
                  htmlFor="Site Description"
                  className="block text-sm font-medium text-white text-gray-700 dark:text-gray-300 mb-2"
                >
                  Site Description
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm rounded-md w-full text-black px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Fill Your Description"
                  required
                />
              </div>
              {/* Total Amount*/}
              <div className="mb-4">
                <label
                  htmlFor="Amount"
                  className="block text-sm font-medium text-white text-gray-700 dark:text-gray-300 mb-2"
                >
                  Amount
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm rounded-md w-full text-black px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Fill Your total Amount"
                  required
                />
              </div>

              {/* Time*/}

              {/* Date*/}
              <div className="mb-4 ">
                <label
                  htmlFor="Year"
                  className="block mb-2 text-sm font-medium text-white text-gray-900 dark:text-white"
                >
                  Select Your Year
                </label>
                <DatePicker
                  className="text-black rounded-lg lllllllllllllllllll"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              {/* Budget Description*/}
              <div className="mb-4">
                <label
                  htmlFor="Budget Description"
                  className="block text-sm text-white font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Budget Description
                </label>
                <input
                  type="text"
                  id="budget description"
                  className="shadow-sm rounded-md text-black w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Fill Your Budget description"
                  required
                />
              </div>

              {/* Related Document*/}
              <div className="mb-4 col-span-2">
                <label
                  htmlFor="Document"
                  className="block text-sm text-white font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Related Document
                </label>
                <input
                  className="relative bg-gray-200 m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  id="formFileSm"
                  type="file"
                />
              </div>
            </div>
            {/*Submit Button*/}
            <button
              type="submit"
              className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
