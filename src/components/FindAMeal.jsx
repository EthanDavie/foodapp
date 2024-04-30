import React, { useState, useEffect } from "react";
import config from "../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { listRecipes } from "../graphql/queries";
import { listRecipeIngredients } from "../graphql/queries";
import { listIngredients } from "../graphql/queries";

Amplify.configure(config);
const client = generateClient();

export const FindAMeal = () => {
    const [recipe, setRecipe] = useState([]);
    const [recipeIngredient, setRecipeIngredient] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [possibleMeals, setPossibleMeals] = useState([]);

    useEffect(() => {
        fetchRecipe();
        fetchRecipeIngredients();
        fetchIngredients();
    }, []);

    const fetchRecipe = async () => {
        try {
            const RecipesData = await client.graphql({ query: listRecipes });
            const allRecipes = RecipesData.data.listRecipes.items;
            setRecipe(allRecipes);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    const fetchRecipeIngredients = async () => {
        try {
            const RecipeIngredientData = await client.graphql({ query: listRecipeIngredients });
            const allRecipeIngredient = RecipeIngredientData.data.listRecipeIngredients.items;
            setRecipeIngredient(allRecipeIngredient);
        } catch (error) {
            console.error("Error fetching recipesIngredient:", error);
        }
    };

    const fetchIngredients = async () => {
        try {
            const ingredientsData = await client.graphql({ query: listIngredients });
            const allIngredients = ingredientsData.data.listIngredients.items;
            setIngredients(allIngredients);
        } catch (error) {
            console.error("Error fetching ingredients:", error);
        }
    };

    // Function to handle selecting/deselecting ingredients
    const toggleIngredient = (ingredientId) => {
        const isSelected = selectedIngredients.includes(ingredientId);
        if (isSelected) {
            setSelectedIngredients(selectedIngredients.filter(id => id !== ingredientId));
        } else {
            setSelectedIngredients([...selectedIngredients, ingredientId]);
        }
    };

    // Function to filter recipes based on selected ingredients
const filterRecipes = () => {
    return recipe.filter(recipeItem => {
        // Get the ingredient IDs required for the recipe
        const requiredIngredients = recipeIngredient
            .filter(item => item.recipeId === recipeItem.id)
            .map(item => item.ingredientsId);
        
        // Check if all required ingredients are included in the selected ingredients
        const allIngredientsIncluded = requiredIngredients.every(ingredientId =>
            selectedIngredients.includes(ingredientId)
        );

        // Return true only if all required ingredients are included
        return allIngredientsIncluded;
    });
};


    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Filter recipes based on selected ingredients
        const possibleMeals = filterRecipes();
        // Set the possible meals state
        setPossibleMeals(possibleMeals);
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-semibold mb-4">Find a Meal</h1>
            <form onSubmit={handleSubmit} className="mb-8">
                <h2 className="text-xl mb-2">Select Ingredients:</h2>
                <div className="flex flex-wrap">
                    {ingredients.map(ingredient => (
                        <div key={ingredient.id} className="w-1/2 mb-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    value={ingredient.id}
                                    onChange={() => toggleIngredient(ingredient.id)}
                                />
                                {ingredient.food_name}
                            </label>
                        </div>
                    ))}
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Find Recipes
                </button>
            </form>
            <h2 className="text-xl mb-2">Possible Meals:</h2>
            <div>
                {possibleMeals.length === 0 ? (
                    <p>No meals found with selected ingredients.</p>
                ) : (
                    <ul>
                        {possibleMeals.map(recipe => (
                            <li key={recipe.id}>{recipe.recipeName}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
