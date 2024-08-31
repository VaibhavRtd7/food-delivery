import React from 'react';

function ShimmerMenu() {
  return (
    <div className="w-[75%] mx-auto mt-4 p-6 rounded-lg shadow-lg">
      <div className="animate-pulse flex flex-col md:flex-row justify-between items-center bg-gray-100 shadow-lg">
        <div className="md:w-1/3 md:m-7">
          <div className="w-full h-60 bg-gray-300 rounded-lg"></div>
        </div>

        <div className="border rounded-lg py-4 m-10 md:w-2/3 md:pl-6">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
          <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>

      <hr className="my-10" />

      <div className="border shadow-xl p-4">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="animate-pulse flex items-center mb-4">
            <div className="w-16 h-16 bg-gray-300 rounded-lg mr-4"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShimmerMenu;
