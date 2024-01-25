import apiAxios from "./index";

export async function requestFetchRecipesList() {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.get("/recipes");
    return response;
  } catch (err:any) {
    return err.message;
  }
}

export async function requestFetchDeleteRecipe(recipeId:any) {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.delete(`/recipes/${recipeId}`);
    return response;
  } catch (err:any) {
    return err.message;
  }
}

export async function requestFetchPutRecipe(modifiedRecipe:any) {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.put(`/recipes`, modifiedRecipe);
    return response;
  } catch (err:any) {
    return err.message;
  }
}

export async function requestFetchCreateRecipe(newRecipe:any) {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.post(`/recipes`, newRecipe);
    return response;
  } catch (err:any) {
    return err.message;
  }
}

export async function requestFetchPutImage(imgData:any) {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.put(`/recipes/uploadImage`, imgData);
    return response;
  } catch (err:any) {
    return err.message;
  }
}
