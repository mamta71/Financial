import React from "react";
import { Dropdown } from "flowbite-react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-extralight text-white/50">
          Financial Management System
        </h3>
        <div className="inline-flex items-center space-x-2 ">
          {/* <a className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </a> */}
          {/* <a className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </a> */}
          <Dropdown
            label={
              <img
                className="h-10 w-10 rounded-full "
                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                alt="Jese Leos"
              />
            }
            placement="bottom"
          >
           
              <Dropdown.Header className="px-4 ">
                <span className="block text-sm"></span>
                <span className="block text-sm">Suraj Suwal</span>
                <span className="block truncate text-sm font-medium">
                  surajsuwa@gmail.com
                </span>
              </Dropdown.Header>

              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
           
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Header;
