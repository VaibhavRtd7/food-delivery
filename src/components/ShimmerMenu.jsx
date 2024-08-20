import React from 'react';

function ShimmerMenu() {
  return (
    <div className="animate-pulse mx-auto mt-2 w-full px-5">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/3">
          <div className="w-full h-60 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="md:w-2/3 md:pl-6">
          <div className="h-8 bg-gray-300 rounded mb-2 w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded mb-2 w-1/2"></div>
          <div className="h-6 bg-gray-300 rounded mb-2 w-1/3"></div>
          <div className="h-6 bg-gray-300 rounded mb-2 w-1/4"></div>
          <div className="h-6 bg-gray-300 rounded mb-2 w-1/4"></div>
          <div className="h-6 bg-gray-300 rounded mb-2 w-1/4"></div>
          <div className="flex space-x-4 mt-4">
            <div className="h-10 bg-gray-300 rounded w-24"></div>
            <div className="h-10 bg-gray-300 rounded w-24"></div>
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <div>
        <div className="h-8 bg-gray-300 rounded mb-4 w-1/4"></div>
        <div className="space-y-2">
          <div className="h-6 bg-gray-300 rounded w-full"></div>
          <div className="h-6 bg-gray-300 rounded w-full"></div>
          <div className="h-6 bg-gray-300 rounded w-full"></div>
          <div className="h-6 bg-gray-300 rounded w-full"></div>
          <div className="h-6 bg-gray-300 rounded w-full"></div>
          <div className="h-6 bg-gray-300 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default ShimmerMenu;
