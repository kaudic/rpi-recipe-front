import apiAxios from "./index";

export async function requestFetchIngredientsList() {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.get("/ingredients");
    return response;
  } catch (err:any) {
    return err.message;
  }
}

export async function requestFetchDeleteIngredient(ingredientId:any) {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.delete(`/ingredients/${ingredientId}`);
    return response;
  } catch (err:any) {
    return err.message;
  }
}

export async function requestFetchPutIngredient(updatedIngredient:any) {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.put(`/ingredients`, updatedIngredient);
    return response;
  } catch (err:any) {
    return err.message;
  }
}

export async function requestFetchCreateIngredient(newIngredient:any) {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.post(`/ingredients`, newIngredient);
    return response;
  } catch (err:any) {
    return err.message;
  }
}
