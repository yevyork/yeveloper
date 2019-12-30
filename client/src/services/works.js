import api from "./apiConfig";

export const addWorks = async work => {
  try {
    console.log("Work added!", works);
    const resp = await api.post("/works", work);
    return resp;
  } catch (error) {
    throw error;
  }
};

export const getAllWorks = async () => {
  try {
    const resp = await api.get("/works");
    return resp.data.items;
  } catch (error) {
    throw error;
  }
};

export const updateWorks = async (id, work) => {
  try {
    console.log("Work Updated", work);
    const resp = await api.put(`/work/${id}`, work);
    return resp.data.item;
  } catch (error) {
    throw error;
  }
};

export const deleteWorks = async id => {
  try {
    console.log("Work deleted", works);
    const resp = await api.delete(`/works/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};
