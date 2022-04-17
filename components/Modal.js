import React, { Component } from "react";

const style = {
  deleteButton: "float-right text-red-600 hover:text-red-800 cursor-pointer",
  updateButton: "float-right text-blue-600 hover:text-blue-800 cursor-pointer",
  modalOvarlay:
    "overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-gray-700/50",
  modalBackground: "flex h-screen w-screen items-center justify-center ",
  modalWrapper:
    "relative bg-white rounded-lg shadow p-4 w-full max-w-2xl h-full md:h-auto",
  modalHeader:
    "flex justify-between items-center p-5 rounded-t border-b border-gray-200 ",
  modalTitle: "text-xl font-medium leading-normal text-gray-800",
  modalContent: "p-6 space-y-6",
  modalFooter:
    "flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 ",
  textBox:
    "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md",
  modalButton:
    "text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10",
  modalButtonConfirm:
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
  modalClose:
    "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",
};


const Modal = ({ children, updateFunction, closeModal, modalState, title }) => {
  if (!modalState) {
    return null;
  }

  return (
    <div className={style.modalOvarlay} tabindex="-1" aria-hidden="true">
      <div className={style.modalBackground}>
        <div className={style.modalWrapper}>
          <header className={style.modalHeader}>
            <p className={style.modalTitle}>{title}</p>
            <button
              type="button"
              className={style.modalClose}
              onClick={closeModal}
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </header>
          <section className={style.modalContent}>
            <div className={style.modalContent}>{children}</div>
          </section>
          <footer className={style.modalFooter}>
            <button
              className={style.modalButtonConfirm + ` mr-2`}
              onClick={updateFunction}
            >
              Save Changed
            </button>
            <button className={style.modalButton} onClick={closeModal}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Modal
