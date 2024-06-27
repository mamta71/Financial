import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";

// BrowserRouter component must be outside of the App component because
//  useLocation hook must be used within a Router

function AppLayout() {
  const location = useLocation();
  const showExceptLogin = location.pathname !== "/login";

  return (
    <>
      {showExceptLogin && (
        <div className="app min-h-80vh">
          <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-10 sm:mx-4 sm:rounded-2xl min-h-[90vh]">
              <Sidebar />
              <div className="flex-1 px-2 sm:px-0">
                <Header />
                {/* Main Container */}
                <AppRoutes />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="app min-h-80vh">
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
          <AppRoutes />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
