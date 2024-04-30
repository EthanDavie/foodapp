import React, { useState, useEffect } from "react";
import config from "../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { createRecipe, createRecipeIngredients } from "../graphql/mutations";
import { listIngredients } from "../graphql/queries";

// Configure AWS Amplify with the provided configuration
Amplify.configure(config);
// Generate a client to interact with AWS services
const client = generateClient();

// Component for adding a meal
export const AddAMeal = () => {
    // State variables
    const [recipeName, setRecipeName] = useState(""); // State for the recipe name
    const [selectedIngredients, setSelectedIngredients] = useState([]); // State for selected ingredients
    const [allIngredients, setAllIngredients] = useState([]); // State for all available ingredients
    const [isSuccess, setIsSuccess] = useState(false); // State to track if the recipe creation was successful

    // Fetch ingredients when the component mounts
    useEffect(() => {
        fetchIngredients();
    }, []);

    // Function to fetch all ingredients
    const fetchIngredients = async () => {
        try {
            const ingredientsData = await client.graphql({ query: listIngredients });
            const allIngredients = ingredientsData.data.listIngredients.items;
            setAllIngredients(allIngredients);
        } catch (error) {
            console.error("Error fetching ingredients:", error);
        }
    };

    // Function to handle changes in selected ingredients
    const handleIngredientChange = (ingredientId) => {
        setSelectedIngredients(prevIngredients => {
            if (prevIngredients.includes(ingredientId)) {
                return prevIngredients.filter(id => id !== ingredientId);
            } else {
                return [...prevIngredients, ingredientId];
            }
        });
    };

    // Function to handle recipe submission
    const handleRecipeSubmit = async (event) => {
        event.preventDefault();
        try {
            // Create a new recipe
            const newRecipeData = await client.graphql({
                query: createRecipe,
                variables: {
                    input: {
                        recipeName: recipeName
                    }
                }
            });
            const newRecipeId = newRecipeData.data.createRecipe.id;
            
            // matches selected ingredients with the recipe that is created
            await Promise.all(selectedIngredients.map(async ingredientId => {
                await client.graphql({
                    query: createRecipeIngredients,
                    variables: {
                        input: {
                            recipeId: newRecipeId,
                            ingredientsId: ingredientId
                        }
                    }
                });
            }));

            // Reset form fields and set success state
            setRecipeName("");
            setSelectedIngredients([]);
            setIsSuccess(true); 
        } catch (error) {
            console.error("Error creating recipe:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Add a Meal</h1>
            <form onSubmit={handleRecipeSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Recipe Name:</label>
                    <input
                        type="text"
                        className="block w-full border border-gray-300 rounded-md py-2 px-3"
                        value={recipeName}
                        onChange={(event) => setRecipeName(event.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Select Ingredients:</h2>
                    <ul>
                        {allIngredients.map(ingredient => (
                            <li key={ingredient.id}>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedIngredients.includes(ingredient.id)}
                                        onChange={() => handleIngredientChange(ingredient.id)}
                                        className="mr-2"
                                    />
                                    {ingredient.food_name}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Create Recipe</button>
            </form>
            {isSuccess && (
            <div>
            <p className="text-green-500 mt-4">Recipe added successfully!</p>
            {setTimeout(() => {
            setIsSuccess(false);
            }, 3000)}
  </div>
)}
        </div>
    );
};
