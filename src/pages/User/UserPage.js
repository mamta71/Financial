"use client";
import React, { useState } from "react";
import profileImage from "../../assets/images/users/avatar.jpg";
import { Dropdown } from "flowbite-react";
import CreateuserModal from "./components/CreateuserModal";
const UserPage = () => {

  const [showUserModal, setShowUserModal] = useState(false);

  const handleShowUserModal = () => {
    setShowUserModal(true);
  };
  const handleCloseUserModal = () => {
    setShowUserModal(false);
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
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

          {/* <!-- Button trigger modal --> */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleShowUserModal}
          >
            Launch demo modal
          </button>

          {/* Show create user modal */}
          <CreateuserModal show={showUserModal} onCloseModal={handleCloseUserModal} />
        </div>

        {/* user container */}
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">
          <a
            className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
            href="#"
          >
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

          <div className="w-full absolute top-2 text-white/20 inline-flex items-center text-xs">
            <div className="relative w-full flex justify-between px-6">
              <div className="flex items-center justify-between">
                Online{" "}
                <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse animate-pulse"></span>
              </div>
              <Dropdown label="">
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
              </Dropdown>
            </div>
          </div>

          <a className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover"
            href="#"
          ></a>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">

          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Gaurav
          </h4>
          <p className="text-white/50">132 members</p>
          <div className="w-full absolute top-2 text-white/20 inline-flex items-center text-xs">
            <div className="relative w-full flex justify-between px-6">
              <div className="flex items-center justify-between">
                Online{" "}
                <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse animate-pulse"></span>
              </div>
              <Dropdown label="">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">

          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Sarita
          </h4>
          <p className="text-white/50">207 members</p>
          <div className="w-full absolute top-2 text-white/20 inline-flex items-center text-xs">
            <div className="relative w-full flex justify-between px-6">
              <div className="flex items-center justify-between">
                Online{" "}
                <span className="ml-2 w-2 h-2 block bg-red-500 rounded-full group-hover:animate-pulse animate-pulse"></span>
              </div>
              <Dropdown label="">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover transition-all duration-300 hover:scale-110">

          <img
            className="w-20 h-20 object-cover object-center rounded-full"
            src={profileImage}
            alt="user"
          />
          <h4 className="text-white text-2xl font-bold capitalize text-center">
            Avin
          </h4>
          <p className="text-white/50">105 members</p>
          <div className="w-full absolute top-2 text-white/20 inline-flex items-center text-xs">
            <div className="relative w-full flex justify-between px-6">
              <div className="flex items-center justify-between">
                Online{" "}
                <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse animate-pulse"></span>
              </div>
              <Dropdown label="">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
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
          <div className="w-full absolute top-2 text-white/20 inline-flex items-center text-xs">
            <div className="relative w-full flex justify-between px-6">
              <div className="flex items-center justify-between">
                Online{" "}
                <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse animate-pulse"></span>
              </div>
              <Dropdown label="">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
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
          <div className="w-full absolute top-2 text-white/20 inline-flex items-center text-xs">
            <div className="relative w-full flex justify-between px-6">
              <div className="flex items-center justify-between">
                Online{" "}
                <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse animate-pulse"></span>
              </div>
              <Dropdown label="">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
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
          <div className="w-full absolute top-2 text-white/20 inline-flex items-center text-xs">
            <div className="relative w-full flex justify-between px-6">
              <div className="flex items-center justify-between">
                Online{" "}
                <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse animate-pulse"></span>
              </div>
              <Dropdown label="">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
