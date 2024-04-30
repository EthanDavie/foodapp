/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onCreateRecipe(filter: $filter) {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onUpdateRecipe(filter: $filter) {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onDeleteRecipe(filter: $filter) {
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
export const onCreateIngredients = /* GraphQL */ `
  subscription OnCreateIngredients(
    $filter: ModelSubscriptionIngredientsFilterInput
  ) {
    onCreateIngredients(filter: $filter) {
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
export const onUpdateIngredients = /* GraphQL */ `
  subscription OnUpdateIngredients(
    $filter: ModelSubscriptionIngredientsFilterInput
  ) {
    onUpdateIngredients(filter: $filter) {
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
export const onDeleteIngredients = /* GraphQL */ `
  subscription OnDeleteIngredients(
    $filter: ModelSubscriptionIngredientsFilterInput
  ) {
    onDeleteIngredients(filter: $filter) {
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
export const onCreateRecipeIngredients = /* GraphQL */ `
  subscription OnCreateRecipeIngredients(
    $filter: ModelSubscriptionRecipeIngredientsFilterInput
  ) {
    onCreateRecipeIngredients(filter: $filter) {
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
export const onUpdateRecipeIngredients = /* GraphQL */ `
  subscription OnUpdateRecipeIngredients(
    $filter: ModelSubscriptionRecipeIngredientsFilterInput
  ) {
    onUpdateRecipeIngredients(filter: $filter) {
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
export const onDeleteRecipeIngredients = /* GraphQL */ `
  subscription OnDeleteRecipeIngredients(
    $filter: ModelSubscriptionRecipeIngredientsFilterInput
  ) {
    onDeleteRecipeIngredients(filter: $filter) {
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
