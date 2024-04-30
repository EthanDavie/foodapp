import React, { useState, useEffect } from "react";
import { IngredientsCreateForm } from '../ui-components';
import config from "../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { listIngredients } from "../graphql/queries";

Amplify.configure(config);
const client = generateClient();

export const AllIngredients = () => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        fetchIngredients();
    }, []);

    const fetchIngredients = async () => {
        try {
            const ingredientsData = await client.graphql({ query: listIngredients});
            const allIngredients = ingredientsData.data.listIngredients.items;
            setIngredients(allIngredients)
        } catch (error) {
            console.error("Error fetching ingredients:", error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4 mt-8 border-b-4 border-gray-800">Here you can add ingredients that you can use while on this website!</h1>
                <IngredientsCreateForm />
            <hr className="border-b border-gray-400 my-0"></hr>
            <div>
    <h2 className="text-lg font-semibold mb-4">Ingredient List</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ingredients.map((ingredient, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-xl font-semibold mb-2">{ingredient.food_name}</h3>
                {/* You can add more details about each ingredient here */}
            </div>
        ))}
    </div>
</div>
         </div>
    );
};