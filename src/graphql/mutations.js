/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
      id
      Ingredients {
        nextToken
        __typename
      }
      recipeName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
      id
      Ingredients {
        nextToken
        __typename
      }
      recipeName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
      id
      Ingredients {
        nextToken
        __typename
      }
      recipeName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createIngredients = /* GraphQL */ `
  mutation CreateIngredients(
    $input: CreateIngredientsInput!
    $condition: ModelIngredientsConditionInput
  ) {
    createIngredients(input: $input, condition: $condition) {
      id
      food_name
      recipes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateIngredients = /* GraphQL */ `
  mutation UpdateIngredients(
    $input: UpdateIngredientsInput!
    $condition: ModelIngredientsConditionInput
  ) {
    updateIngredients(input: $input, condition: $condition) {
      id
      food_name
      recipes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteIngredients = /* GraphQL */ `
  mutation DeleteIngredients(
    $input: DeleteIngredientsInput!
    $condition: ModelIngredientsConditionInput
  ) {
    deleteIngredients(input: $input, condition: $condition) {
      id
      food_name
      recipes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRecipeIngredients = /* GraphQL */ `
  mutation CreateRecipeIngredients(
    $input: CreateRecipeIngredientsInput!
    $condition: ModelRecipeIngredientsConditionInput
  ) {
    createRecipeIngredients(input: $input, condition: $condition) {
      id
      recipeId
      ingredientsId
      recipe {
        id
        recipeName
        createdAt
        updatedAt
        __typename
      }
      ingredients {
        id
        food_name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRecipeIngredients = /* GraphQL */ `
  mutation UpdateRecipeIngredients(
    $input: UpdateRecipeIngredientsInput!
    $condition: ModelRecipeIngredientsConditionInput
  ) {
    updateRecipeIngredients(input: $input, condition: $condition) {
      id
      recipeId
      ingredientsId
      recipe {
        id
        recipeName
        createdAt
        updatedAt
        __typename
      }
      ingredients {
        id
        food_name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRecipeIngredients = /* GraphQL */ `
  mutation DeleteRecipeIngredients(
    $input: DeleteRecipeIngredientsInput!
    $condition: ModelRecipeIngredientsConditionInput
  ) {
    deleteRecipeIngredients(input: $input, condition: $condition) {
      id
      recipeId
      ingredientsId
      recipe {
        id
        recipeName
        createdAt
        updatedAt
        __typename
      }
      ingredients {
        id
        food_name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
