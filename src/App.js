// App.js

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes'; // Import the AppRoutes component
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
          <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-10 sm:mx-4 sm:rounded-2xl">
            <Sidebar />
            <div className="flex-1 px-2 sm:px-0">
              <Header />
              <AppRoutes />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
