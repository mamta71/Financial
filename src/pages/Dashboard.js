import React from "react";

const Dashboard = () => {
  return (
    <div className="">
      <div className="bg-gray-100">
        <div className=" flex flex-col">

    
          {/* Main contaner */}
          <main className="flex-grow p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* <!-- Card 1: Balance --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700">
                  Total Balance
                </h2>
                <p className="text-2xl text-gray-800 mt-4">$25,000</p>
              </div>

              {/* <!-- Card 2: Income --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700">
                  Total Income
                </h2>
                <p className="text-2xl text-green-500 mt-4">$15,000</p>
              </div>

              {/* <!-- Card 3: Expenses --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700">
                  Total Expenses
                </h2>
                <p className="text-2xl text-red-500 mt-4">$10,000</p>
              </div>
            </div>

            {/* <!-- Chart Section --> */}
            <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Monthly Overview
              </h2>
              <div id="chartContainer">
                {/* <!-- You can integrate a chart library here, e.g., Chart.js --> */}
                <canvas id="myChart"></canvas>
              </div>
            </div>

            {/* <!-- Table Section --> */}
            <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Recent Transactions
              </h2>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2">Date</th>
                    <th className="py-2">Description</th>
                    <th className="py-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">2024-06-01</td>
                    <td className="py-2">Salary</td>
                    <td className="py-2 text-green-500">+$5,000</td>
                  </tr>
                  <tr>
                    <td className="py-2">2024-06-03</td>
                    <td className="py-2">Groceries</td>
                    <td className="py-2 text-red-500">-$200</td>
                  </tr>
                  <tr>
                    <td className="py-2">2024-06-05</td>
                    <td className="py-2">Utility Bill</td>
                    <td className="py-2 text-red-500">-$150</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>


        </div>
      </div>
    </div>
  );
};

export default Dashboard;
