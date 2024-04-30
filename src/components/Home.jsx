import React from 'react';
import MyImage from './foodPics/1stPic.jpg';
import MyImage2 from './foodPics/pastAndMeatBall.jpg';
import MyImage3 from './foodPics/ChickenEnchiladas.jpg';
import MyImage4 from './foodPics/SalmonRice.jpg';

export const Home = () => {
  return (
    <body className="bg-gray-200">
      <header className="flex flex-col justify-center items-center bg-gray-200 py-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Recipe Galore</h1>
        <h4 className="text-gray-500 mt-4">Want to make a meal with items in your house? Click Find A Meal to make a meal fast!</h4>
      </header>
      <hr className="border-b border-gray-400 my-0"></hr>
      <br />
      <hr className="text-black"></hr>
      <header className="flex flex-col justify-center items-center bg-gray-200 py-2">
        <h1 className="text-3xl font-bold text-gray-800">Check Out Some of the Meals!</h1>
      </header>
      <div className="flex justify-center pb-2">
        <div className="flex flex-wrap justify-center mx-4">
          <div className="flex-shrink-0 mx-4 mb-8">
            <h2 className="text-black text-lg font-semibold mb-2">Chicken and Rice with Veggies</h2>
            <img src={MyImage} className="h-80 w-80 object-cover shadow-md" alt="Image 1" />
          </div>
          <div className="flex-shrink-0 mx-4 mb-8">
            <h2 className="text-black text-lg font-semibold mb-2">Chicken Enchiladas</h2>
            <img src={MyImage3} className="h-80 w-80 object-cover shadow-md" alt="Image 1" />
          </div>
          <div className="flex-shrink-0 mx-4 mb-8">
            <h2 className="text-black text-lg font-semibold mb-2">Spagehtti and Meatballs</h2>
            <img src={MyImage2} className="h-80 w-80 object-cover shadow-md" alt="Image 2" />
          </div>
          <div className="flex-shrink-0 mx-4 mb-8">
            <h2 className="text-black text-lg font-semibold mb-2">Salmon with Rice and broccoli</h2>
            <img src={MyImage4} className="h-80 w-80 object-cover shadow-md" alt="Image 2" />
          </div>
        </div>
      </div>
    </body>
  );
};
