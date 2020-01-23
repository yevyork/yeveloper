import { api } from "./apiConfig";

export const addWorks = async work => {
  try {
    console.log("Work added!");
    const resp = await api.post("/portfolio", work);
    return resp;
  } catch (error) {
    throw error;
  }
};

export const getAllWorks = async () => {
  try {
    const resp = await api.get("/portfolio");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const updateWorks = async (id, work) => {
  try {
    console.log("Work Updated", work);
    const resp = await api.put(`/portfolio/${id}`, work);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const deleteWorks = async id => {
  try {
    console.log("Work deleted");
    const resp = await api.delete(`/portfolio/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};
