import React, { useRef } from "react";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";

const ProfileuserModal = ({ show, onCloseModal, setShowProfileModal, showProfileModal }) => {
  const modalRef = useRef(null);

  const handleClose = () => {
    onCloseModal && onCloseModal();
  };

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  

  return (
    // <>
    //   {show && (
    //     <div
    //       className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden outline-none bg-gray-800 bg-opacity-50 flex justify-center items-center"
    //       onClick={handleBackdropClick}
    //     >
    //       <div
    //         ref={modalRef}
    //         className="relative bg-gray-800 rounded-md w-80 max-w-lg mx-4 sm:mx-auto"
    //         onClick={(e) => e.stopPropagation()}
    //       >
    //         <div>
    //           {/* Modal header */}
    //           <div className="flex justify-between items-center px-4 py-3 bg-[#1A384B]   border-b border-white-200">
    //             <h5 className="text-xl font-medium text-white">
    //               Edit User
    //             </h5>

    //             <button
    //               type="button"
    //               className="text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
    //               onClick={handleClose}
    //               aria-label="Close"
    //             >
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="h-6 w-6"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke="currentColor"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M6 18L18 6M6 6l12 12"
    //                 />
    //               </svg>
    //             </button>
    //           </div>

    //           {/* Modal body */}

    //           {/* <p>Modal body text goes here.</p> */}

    //           <div className=" flex items-center justify-center w-full bg-[#1A384B] dark:bg-[#1A384B]">
    //             <div className="bg-[#1A384B] dark:bg-[#1A384B] rounded-lg  py-6 max-w-md">
    //               <form action="#">
    //                 <div className="mb-4">
    //                   <label
    //                     for="name"
    //                     className="block text-sm font-medium text-white dark:text-gray-300 mb-2"
    //                   >
    //                     UserName
    //                   </label>
    //                   <input
    //                     type="name"
    //                     id="name"
    //                     className="shadow-sm text-black rounded-md w-full px-4 py-2 bg-gray-200 border border-gray-300 focus:outline-none focus:ring-pink-800 focus:border-pink-800"
    //                     placeholder="Enter your Name"
    //                     required
    //                   />
    //                 </div>

    //                 <div className="mb-4">
    //                   <label
    //                     for="Profile"
    //                     className="block text-sm font-medium text-white dark:text-gray-300 mb-2"
    //                   >
    //                     Edit Profile
    //                   </label>
    //                   <input
    //                     className="relative bg-gray-200 m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
    //                     id="formFileSm"
    //                     type="file"
    //                   />
    //                 </div>
    //               </form>
    //             </div>
    //           </div>

    //           {/* Modal footer */}
    //           <div className="flex justify-end p-4 bg-[#1A384B] rounded-lg  border-t border-white-200">
    //             <button
    //               type="button"
    //               className="inline-block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
    //               onClick={handleClose}
    //             >
    //               Save
    //             </button>
    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //   )}
    // </>

    <Modal
      dismissible
      show={showProfileModal}
      size="md"
      onClose={() => setShowProfileModal(false)}
    >
      <Modal.Header className="flex justify-between items-center px-4 py-3 bg-[#1A384B]  rounded-lg border-b border-white-200">
      <h5 className="text-xl font-medium text-white">
                 Edit User
             </h5>
      </Modal.Header>
      <Modal.Body className=" flex items-center justify-center w-full bg-[#1A384B] dark:bg-[#1A384B]">
        <div className="bg-[#1A384B] dark:bg-[#1A384B] rounded-lg  py-6 max-w-md">
          <form action="#">
            <div className="mb-4">
              <label
                for="name"
                className="block text-sm font-medium text-white dark:text-gray-300 mb-2"
              >
                UserName
              </label>
              <input
                type="name"
                id="name"
                className="shadow-sm text-black rounded-md w-full px-4 py-2 bg-gray-200 border border-gray-300 focus:outline-none focus:ring-pink-800 focus:border-pink-800"
                placeholder="Enter your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                for="Profile"
                className="block text-sm font-medium text-white dark:text-gray-300 mb-2"
              >
                Edit Profile
              </label>
              <input
                className="relative bg-gray-200 m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                id="formFileSm"
                type="file"
              />
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer className="flex justify-end p-4 bg-[#1A384B] rounded-lg  border-t border-white-200">
        <Button
          color="gray"
          className="inline-block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          onClick={() => setShowProfileModal(false)}
        >Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileuserModal;
