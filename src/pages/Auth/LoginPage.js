import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#1A384B]  text-white dark:bg-gray-900 shadow-md rounded-lg px-6 py-6 w-[35%] ">
        <h1 className="text-2xl  flex justify-center font-bold mb-4 dark:text-gray-200 border-b border-black-900">
          Login Page
        </h1>
        <form action="#">
          <div className=" gap-4">
            {/* UserName */}
            <div className="mb-4 text-center">
              <label
                htmlFor="UserName"
                className="block text-md font-medium text-white text-gray-700 dark:text-gray-300 mb-2"
              >
                UserName
              </label>
              <input
                type="text"
                id="name"
                className="w-full shadow-sm rounded-md  text-black px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Your UserName"
                required
              />
            </div>

            {/* PassWord*/}
            <div className="mb-4 text-center">
              <label
                htmlFor="PassWord"
                className=" block text-md font-medium text-white text-gray-700 dark:text-gray-300 mb-2"
              >
                PassWord
              </label>
              <input
                type="text"
                id="name"
                className=" w-full shadow-sm rounded-md  text-black px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Your Password"
                required
              />
            </div>
          </div>
          {/*Submit Button*/}

          <button
            type="submit"
            className=" w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>

          <div className="mt-3">
            <label>
              <input type="checkbox" checked="checked" name="remember" />{" "}
              Remember me
            </label>

            <div className="flex justify-between align-center mt-2">
              <button type="button" 
              className="cancelbtn rounded-md shadow-sm bg-red-500 px-4 py-2">
                Cancel
              </button>
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
