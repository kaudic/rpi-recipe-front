import apiAxios from "./index";

export async function requestFetchUnitsList() {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.get("/units");
    return response;
  } catch (err:any) {
    return err.message;
  }
}

export async function requestFetchDeleteUnit(unitId:any) {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.delete(`/units/${unitId}`);
    return response;
  } catch (err:any) {
    return err.message;
  }
}

export async function requestFetchPutUnit(updatedUnit:any) {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.put(`/units`, updatedUnit);
    return response;
  } catch (err:any) {
    return err.message;
  }
}

export async function requestFetchCreateUnit(newUnit:any) {
  try {
    // BASE_URL/api defined by default in apiAxios
    const response = await apiAxios.post(`/units`, newUnit);
    return response;
  } catch (err:any) {
    return err.message;
  }
}
