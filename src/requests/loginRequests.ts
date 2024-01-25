import apiAxios from "./index";

export async function requestFetchLogin(credentials:any) {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.post("/login", credentials);
    return response;
  } catch (err:any) {
    return err.message;
  }
}
