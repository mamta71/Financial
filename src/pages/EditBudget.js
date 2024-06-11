import React from "react";

const EditBudget = () => {
  return (
    <div>
      <div class="fixed z-50 inset-0 flex items-center justify-center overflow-hidden">
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div class="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Rules to Follow
            </h3>
            <div class="mt-2">
              <ul class="list-disc list-inside">
                <li>Rule 1: Be respectful and considerate.</li>
                <li>
                  Rule 2: No offensive language or inappropriate behavior.
                </li>
                <li>Rule 3: Do not share personal information.</li>
                <li>Rule 4: No spamming or advertising.</li>
                <li>Rule 5: Follow all community guidelines.</li>
              </ul>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBudget;
