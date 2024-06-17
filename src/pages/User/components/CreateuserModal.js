import React, { useRef } from 'react';

const CreateuserModal = ({ show, onCloseModal }) => {
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
        <>
            {show && (
                <div
                    className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden outline-none bg-gray-800 bg-opacity-50 flex justify-center items-center"
                    onClick={handleBackdropClick}
                >
                    <div
                        ref={modalRef}
                        className="relative bg-white rounded-md w-full max-w-lg mx-4 sm:mx-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal header */}
                        <div className="flex justify-between items-center px-4 py-3 bg-gray-100 border-b border-gray-200">
                            <h5 className="text-xl font-medium text-gray-900">
                                Create New User
                            </h5>
                            <button
                                type="button"
                                className="text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                                onClick={handleClose}
                                aria-label="Close"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="p-4">
                            <p>Modal body text goes here.</p>
                        </div>

                        {/* Modal footer */}
                        <div className="flex justify-end p-4 bg-gray-100 border-t border-gray-200">
                            <button
                                type="button"
                                className="inline-block px-4 py-2 mr-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                                onClick={handleClose}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="inline-block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateuserModal;
