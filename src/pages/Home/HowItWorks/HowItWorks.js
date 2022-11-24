import React from "react";

const HowItWorks = () => {
  return (
    <div className="mt-8">
      <h2 className="text-center font-bold text-transparent text-xl lg:text-3xl bg-clip-text bg-gradient-to-r from-green-400 to-gray-700">
        HOW IT WORKS
      </h2>

      <div className="flex items-center space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap">
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400"
        >
          Architecto
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400"
        >
          Corrupti
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-violet-400 dark:text-gray-50"
        >
          Excepturi
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400"
        >
          Consectetur
        </a>
      </div>
    </div>
  );
};

export default HowItWorks;
