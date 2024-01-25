export const SET_RECIPES_LIST = 'SET_RECIPES_LIST';
export const SET_SEARCH_LIST = 'SET_SEARCH_LIST';
export const FETCH_RECIPES_LIST = 'FETCH_RECIPES_LIST';
export const FETCH_DELETE_RECIPE = 'FETCH_DELETE_RECIPE';
export const SET_DELETE_RECIPE = 'SET_DELETE_RECIPE';
export const FETCH_PUT_RECIPE = 'FETCH_PUT_RECIPE';
export const SET_PUT_RECIPE = 'SET_PUT_RECIPE';
export const FETCH_PUT_IMG = 'FETCH_PUT_IMG';
export const SET_PUT_IMG = 'SET_PUT_IMG';
export const FETCH_CREATE_RECIPE = 'FETCH_CREATE_RECIPE';
export const SET_RANDOM_RECIPE = 'SET_RANDOM_RECIPE';


/**
 * Store the array of recipes in Redux Store
 * @param {Array<Object>} recipes list of recipes
 * @returns {Action}
 */
export function actionSetRecipesList(recipes) {
  return { type: SET_RECIPES_LIST, payload: recipes };
}

/**
 * Get the list of recipes from API
 * @returns {Action}
 */
export function actionFetchRecipesList() {
  return { type: FETCH_RECIPES_LIST };
}




/**
 * Store in Redux Store the array of recipes corresponding to the search String 
 * @param {Array<Object>} recipes list of searched recipes
 * @returns {Action}
 */
export function actionSetSearchList(searchRecipes) {
  return { type: SET_SEARCH_LIST, payload: searchRecipes };
}

/**
 * Send the API the recipe ID to delete
 * @returns {Action}
 */
export function actionFetchDeleteRecipe(recipeId) {
  return { type: FETCH_DELETE_RECIPE, payload: recipeId };
}

/**
 * Update the store by deleting the recipe
 * @returns {Action}
 */
export function actionSetDeleteRecipe(recipeId) {
  return { type: SET_DELETE_RECIPE, payload: recipeId };
}

/**
 * Making a PUT API call to modify a recipe
 * @param {modifiedRecipe} modifiedRecipe 
 * @returns {Action}
 */
export function actionFetchModifyRecipe(modifiedRecipe) {
  return { type: 'FETCH_PUT_RECIPE', payload: modifiedRecipe }
}

/**
 * Making a POST API call to create a new recipe
 * @param {newRecipe} newRecipe 
 * @returns {Action}
 */
export function actionFetchCreateRecipe(newRecipe, imgData) {
  // condition to make a second request after creating the new recipe
  if (imgData != '') {
    return { type: 'FETCH_CREATE_RECIPE', payload: newRecipe, imgData }
  }
  return { type: 'FETCH_CREATE_RECIPE', payload: newRecipe }

}



/**
 * Setting new value for a recipe in the Store
 * @param {modifiedRecipe} modifiedRecipe 
 * @returns {Action}
 */
export function actionSetPutRecipe(modifiedRecipe) {
  return { type: 'SET_PUT_RECIPE', payload: modifiedRecipe }
}

/**
 * Sending to the API image File and image Name for a recipe
 * @param {imgData} imgData (image Name and image File)
 * @returns {Action}
 */
export function actionFetchPutImage(imgData) {
  return { type: 'FETCH_PUT_IMG', payload: imgData }
}

/**
 * Update in the store the name of the recipe image
 * @param {recipeId,imgName} imgData (image Name and recipe Id)
 * @returns {Action}
 */
export function actionSetPutImg(imgData) {
  return { type: 'SET_PUT_IMG', payload: imgData }
}

/**
 * Making the list of recipes in a random way
 * @param {recipesOldState} recipes Old State
 * @returns {Action}
 */
export function actionSetRandomRecipe() {
  return { type: 'SET_RANDOM_RECIPE' }
}

