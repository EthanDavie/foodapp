import React, { useState, useEffect } from "react";
import config from "../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { listRecipes } from "../graphql/queries";
import {listRecipeIngredients} from "../graphql/queries";
import { listIngredients } from "../graphql/queries";

Amplify.configure(config);
const client = generateClient();

export const AllMeals = () => {
    const [recipe, setRecipe] = useState([]);
    const [recipeIngredient, setRecipeIngredient] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        fetchRecipe();
        fetchRecipeIngredients();
        fetchIngredients();
    }, []);

    const fetchRecipe = async () => {
        try {
            const RecipesData = await client.graphql({ query: listRecipes});
            const allRecipes = RecipesData.data.listRecipes.items;
            setRecipe(allRecipes)
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };

    const fetchRecipeIngredients = async () => {
        try {
            const RecipeIngredientData = await client.graphql({ query: listRecipeIngredients});
            const allRecipeIngredient = RecipeIngredientData.data.listRecipeIngredients.items;
            setRecipeIngredient(allRecipeIngredient)
        } catch (error) {
            console.error("Error fetching recipesIngredient:", error);
        }
    };

    const fetchIngredients = async () => {
        try {
            const ingredientsData = await client.graphql({ query: listIngredients});
            const allIngredients = ingredientsData.data.listIngredients.items;
            setIngredients(allIngredients)
        } catch (error) {
            console.error("Error fetching ingredients:", error);
        }
    }

    return (
        <div>
            <div className="bg-gray-400 py-6 px-8">
                <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Find all the meals we have on this website here!</h1>
                </div>
            </div>
            <hr className="border-b border-gray-400 my-0" />
            <div>
                <h2 className="text-lg font-semibold mb-4">All Recipes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recipe.map((recipeItem, index) => (
                        <div key={index} className="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden shadow-md">
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{recipeItem.recipeName}</h3>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2">Ingredients:</h4>
                                    <ul>
                                        {recipeIngredient
                                            .filter(item => item.recipeId === recipeItem.id)
                                            .map((recipeIngredientItem, ingredientIndex) => {
                                                // Find the ingredient object with the matching ID
                                                const matchedIngredient = ingredients.find(item => item.id === recipeIngredientItem.ingredientsId);
                                                // Display the name of the ingredient
                                                return (
                                                    <li key={ingredientIndex}>{matchedIngredient ? matchedIngredient.food_name : 'Unknown Ingredient'}</li>
                                                );
                                            })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );         
};
