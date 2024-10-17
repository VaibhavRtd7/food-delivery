import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          About Us
        </h2>
        <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
          At Swiggy, we’re dedicated to bringing the best food from your favorite local
          restaurants directly to your door. With a few taps, we make sure your food is
          delivered fresh and fast. Whether you are craving a late-night snack or planning 
          a family dinner, we’ve got you covered.
        </p>
        
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/100" alt="Mission" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"/>
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-2 text-gray-600 text-xs sm:text-sm md:text-base">
              To make the best food accessible to everyone at any time, bringing people closer through food.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/100" alt="Vision" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"/>
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800">Our Vision</h3>
            <p className="mt-2 text-gray-600 text-xs sm:text-sm md:text-base">
              Revolutionizing the food industry by creating a seamless and innovative food delivery experience.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/100" alt="Values" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"/>
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800">Our Values</h3>
            <p className="mt-2 text-gray-600 text-xs sm:text-sm md:text-base">
              We value quality, speed, and customer satisfaction above all else, ensuring each order is a delight.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12">
          <img src="https://via.placeholder.com/1200x400" alt="Team" className="w-full h-auto rounded-lg shadow-lg"/>
          <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold text-gray-800">Meet Our Team</h3>
          <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
            Our team is a diverse group of passionate individuals dedicated to making your food experience exceptional.
          </p>
        </div>
      </div>
      <button className='bg-gray-50 p-2 m-2 rounded-md border-gray-600'> Just for Testing </button>
    </div>
  );
};

export default AboutUs;
