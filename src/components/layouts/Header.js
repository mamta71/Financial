import React from "react";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-extralight text-white">
          Financial Management System
        </h3>
        <div className="inline-flex items-center space-x-2 ">
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
            <Dropdown.Item>
              <Link to="/login">Logout </Link>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Header;
