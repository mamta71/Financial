import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Finance Dashboard
        </h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
