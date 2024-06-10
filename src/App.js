// app.js

import React from 'react';
import AppRoutes from './routes'; // Import the AppRoutes component
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
// import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-10 sm:mx-4 sm:rounded-2xl">
          {/* sidebar */}
          <Sidebar />
          <div className="flex-1 px-2 sm:px-0">
            {/* Header */}
            <Header />
            {/* Main Body */}
            <AppRoutes /> {/* Render the AppRoutes component */}
            {/* <Outlet /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
