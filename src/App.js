import './App.css'
import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { AddAMeal } from './components/AddAMeal';
import { AllIngredients } from './components/AllIngredients';
import { FindAMeal } from './components/FindAMeal';
import { AllMeals } from './components/AllMeals';



export function App() {
  return (
    <>
       <nav class="bg-gray-800 py-4">
       <ul class="flex justify-between px-8">
          <li>
             <Link to="/" class="text-white hover:text-gray-300">Home</Link>
          </li>
          <li class = "flex space-x-8">
          <li>
          <Link to="/findAMeal" class="text-white hover:text-gray-300">Find A Meal</Link>
          </li>
          <li>
             <Link to="/addAMeal" class="text-white hover:text-gray-300">Add Meals</Link>
          </li>
          <li>
             <Link to="/allIngredients" class="text-white hover:text-gray-300">Add Ingredients</Link>
          </li>
          <li>
          <Link to="/allMeals" class="text-white hover:text-gray-300">All Meals</Link>
          </li>
          </li>
       </ul>
 </nav>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddAMeal" element={<AddAMeal />} />
          <Route path="/allIngredients" element={<AllIngredients />} />
          <Route path="/allMeals" element={<AllMeals />} />
          <Route path="/findAMeal" element={<FindAMeal />} />
       </Routes>
    </>
  );
}

export default App;