import axios from "axios";

const url = process.env.REACT_APP_AUTH_API;

export const signin = async (query) => {
  try {
    const { data } = (
      await axios.post(`${url}login`, query, {
        "Content-Type": "application/json",
      })
    ).data;
    return data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const signup = async (query) => {
  try {
    const { data } = await axios.post(`${url}signup`, query, {
      "Content-Type": "application/json",
    }).data;
    return data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};
