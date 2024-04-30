/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
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
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        recipeName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getIngredients = /* GraphQL */ `
  query GetIngredients($id: ID!) {
    getIngredients(id: $id) {
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
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        food_name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRecipeIngredients = /* GraphQL */ `
  query GetRecipeIngredients($id: ID!) {
    getRecipeIngredients(id: $id) {
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
export const listRecipeIngredients = /* GraphQL */ `
  query ListRecipeIngredients(
    $filter: ModelRecipeIngredientsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipeIngredients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeId
        ingredientsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const recipeIngredientsByRecipeId = /* GraphQL */ `
  query RecipeIngredientsByRecipeId(
    $recipeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeIngredientsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipeIngredientsByRecipeId(
      recipeId: $recipeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeId
        ingredientsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const recipeIngredientsByIngredientsId = /* GraphQL */ `
  query RecipeIngredientsByIngredientsId(
    $ingredientsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeIngredientsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipeIngredientsByIngredientsId(
      ingredientsId: $ingredientsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeId
        ingredientsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
