import React, { useState } from "react";
import profileImage from "../../assets/images/users/avatar.jpg";

const UserPage = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="group bg-gray-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
          <a
            className="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </a>
          <a
            className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center"
            href="#"
          >
            Add New User
          </a>
        </div>

        {/* user container */}
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">
          <a
            className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
            href="#"
          >
            {/* ----------------- */}
            {/* <!-- Dropdown menu --> */}
            <div>
              <div className="relative inline-block text-left">
                <div>
                  <button
                   onClick={toggleDropdown} // Toggle dropdown on button click
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {/* menu */}
                <div
                 className={`${
              isDropdownOpen ? "block" : "hidden"
            } absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Account settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Support
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      License
                    </a>
                    <form method="POST" action="#" role="none">
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-3"
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* ----------------- */}
          </a>
          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Rahul Pandey
          </h4>
          <p className="text-white/50">55 members</p>
          <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
            Online{" "}
            <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse animate-pulse"></span>
          </p>
          <a
            className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
            href="#"
          ></a>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">
          <a
            className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </a>
          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Gaurav
          </h4>
          <p className="text-white/50">132 members</p>
          <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
            Online{" "}
            <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span>
          </p>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">
          <a
            className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </a>
          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Sarita
          </h4>
          <p className="text-white/50">207 members</p>
          <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
            offline
            <span className="ml-2 w-2 h-2 block bg-red-400 rounded-full group-hover:animate-pulse"></span>
          </p>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">
          <a
            className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </a>
          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Avin
          </h4>
          <p className="text-white/50">105 members</p>
          <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
            Online{" "}
            <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span>
          </p>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">
          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Suraya
          </h4>
          <p className="text-white/50">67 members</p>
          <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
            Online{" "}
            <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span>
          </p>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">
          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Gautam
          </h4>
          <p className="text-white/50">83 members</p>
          <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
            Online{" "}
            <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span>
          </p>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">
          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Preety
          </h4>
          <p className="text-white/50">108 members</p>
          <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
            Online{" "}
            <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserPage;
