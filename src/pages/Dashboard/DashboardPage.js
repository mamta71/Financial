import React from "react";
import { Icon } from "@iconify/react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

// Define the labels directly
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 30, 50, 20, 25, 44, -10],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    },
    {
      label: 'Dataset 2',
      data: [100, 33, 22, 19, 11, 49, 30],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
    }
  ]
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Min and Max Settings'
    }
  },
  scales: {
    y: {
      min: 10,
      max: 50,
    }
  }
};

function DashboardPage() {
  return (
    <>
      <div className="mb-20 sm:mb-0 mt-20 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="relative group py-4 px-6 flex gap-3 space-y-2 items-center cursor-pointer rounded-md bg-[#1A384B] hover:bg-white-900/80 hover:smooth-hover">
          <div className="w-[25%]">
            <Icon icon="carbon:view" width={32} height={32} color="white" />
          </div>
          <div>
            <p className="text-white text-xl font-bold capitalize">Total Users</p>
            <p className="text-white font-bold capitalize">80.5k</p>
          </div>
        </div>

        <div className="relative group py-4 px-6 flex gap-3 space-y-2 items-center cursor-pointer rounded-md bg-[#1A384B] hover:bg-white-900/80 hover:smooth-hover">
          <div className="w-[25%]">
            <Icon icon="mdi:like" width={32} height={32} color="white" />
          </div>
          <div>
            <p className="text-white text-xl font-bold capitalize">Likes</p>
            <p className="text-white font-bold capitalize">70.5k</p>
          </div>
        </div>

        <div className="relative group py-4 px-6 flex gap-3 space-y-2 items-center cursor-pointer rounded-md bg-[#1A384B] hover:bg-white-900/80 hover:smooth-hover">
          <div className="w-[25%]">
            <Icon icon="mdi:comments" width={32} height={32} color="white" />
          </div>
          <div>
            <p className="text-white text-xl font-bold capitalize">Comments</p>
            <p className="text-white font-bold capitalize">40.5k</p>
          </div>
        </div>

        <div className="relative group py-4 px-6 flex gap-3 space-y-2 items-center cursor-pointer rounded-md bg-[#1A384B] hover:bg-white-900/80 hover:smooth-hover">
          <div className="w-[25%]">
            <Icon
              icon="material-symbols:published-with-changes"
              width={32}
              height={32}
              color="white"
            />
          </div>
          <div>
            <p className="text-white text-xl font-bold capitalize">Published</p>
            <p className="text-white font-bold capitalize">20.5k</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="py-4 px-6 bg-white rounded-md shadow-md mt-10">
        <Bar data={data} options={options} />
      </div>
    </>
  );
}

export default DashboardPage;
