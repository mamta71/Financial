import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // Replace with your desired route
  };

  return (
    <div className="flex justify-center">
      <div className="bg-[#1A384B] text-white dark:bg-gray-900 shadow-md rounded-lg px-6 py-6 w-[400px]">
        <h1 className="text-2xl flex justify-center font-bold mb-4 dark:text-gray-200 border-b border-black-900 pt-4 pb-6">
          Login Page
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="gap-4">
            {/* Username */}
            <div className="mb-4 text-center">
              <label
                htmlFor="username"
                className="block text-md font-medium text-white text-gray-700 dark:text-gray-300 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full shadow-sm rounded-md text-black px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Your Username"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4 text-center">
              <label
                htmlFor="password"
                className="block text-md font-medium text-white text-gray-700 dark:text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full shadow-sm rounded-md text-black px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Your Password"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>

          {/* Remember Me Checkbox */}
          <div className="mt-3">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />{" "}
              Remember me
            </label>

            {/* Forgot Password Link */}
            <div className="flex justify-end align-center mt-2">
              <span className="psw">
                Forgot <a href="#">password?</a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
