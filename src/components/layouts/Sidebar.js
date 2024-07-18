import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import home from "@iconify-icons/mdi-light/home";

const Sidebar = () => {
  return (
    <div className="bg-gray-900 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
      <nav className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
        {/* Home */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `p-4 inline-flex justify-center rounded-md smooth-hover ${
              isActive
                ? "bg-gray-800 text-white"
                : "text-white/50 hover:bg-gray-800 hover:text-white"
            }`
          }
        >
          <Icon icon={home} width={32} height={32} />
        </NavLink>

        {/* Service */}
        <NavLink
          to="/budget"
          className={({ isActive }) =>
            `p-4 inline-flex justify-center rounded-md smooth-hover ${
              isActive
                ? "bg-gray-800 text-white"
                : "text-white/50  hover:bg-gray-800 hover:text-white"
            }`
          }
        >
          <Icon icon="carbon:web-services-container" width={32} height={32} />
        </NavLink>

        {/* People */}
        <NavLink
          to="/user"
          className={({ isActive }) =>
            `p-4 inline-flex justify-center rounded-md smooth-hover ${
              isActive
                ? "bg-gray-800 text-white"
                : "text-white/50  hover:bg-gray-800 hover:text-white"
            }`
          }
        >
          <Icon icon="ion:people-outline" width={32} height={32} />
        </NavLink>

        {/*BudgetGroup */}
        <NavLink
          to="/budgetgroup"
          className={({ isActive }) =>
            ` p-4 inline-flex justify-center  rounded-md smooth-hover mtop-10 ${
              isActive
                ? "bg-gray-800 text-white"
                : "text-white/50 hover:bg-gray-800 hover:text-white"
            }`
          }
        >
          <Icon icon="mingcute:group-3-line" width={32} height={32} />
        </NavLink>

         {/*Setting */}
         <NavLink
          to="/setting"
          className={({ isActive }) =>
            ` p-4 inline-flex justify-center  rounded-md smooth-hover mtop-10 ${
              isActive
                ? "bg-gray-800 text-white"
                : "text-white/50 hover:bg-gray-800 hover:text-white"
            }`
          }
        >
          <Icon icon="uil:setting" width={32} height={32} />
        </NavLink>
      </nav>

      {/* <div className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
        <a className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </a>
        <a className="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </a>
      </div> */}
    </div>
  );
};

export default Sidebar;
