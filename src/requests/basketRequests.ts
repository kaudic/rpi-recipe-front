import apiAxios from "./index";

export async function requestFetchBasketList() {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.get("/basket");
    return response;
  } catch (err:any) {
    return err.message;
  }
}

export async function requestFetchBasketIngredientsList() {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.get("/basket/ingredients");
    return response;
  } catch (err:any) {
    return err.message;
  }
}

export async function requestFetchDeleteAllBasket() {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.delete("/basket");
    return response;
  } catch (err:any) {
    return err.message;
  }
}

export async function requestFetchAddOneBasket(recipeId:any) {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.get(`/basket/${recipeId}`);
    return response;
  } catch (err:any) {
    return err.message;
  }
}

export async function requestFetchDeleteOneBasket(recipeId:any) {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.delete(`/basket/${recipeId}`);
    return response;
  } catch (err:any) {
    return err.message;
  }
}
