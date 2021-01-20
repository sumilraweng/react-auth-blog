import Cookies from "js-cookie";
import axios from "axios";
import { AppError } from "../model/errorSchema";
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
    throw new AppError(
      err.response.status,
      err.response.data.status,
      err.response.data.message
    );
  }
};

export const signup = async (query) => {
  try {
    const data = await axios.post(`${url}signup`, query, {
      "Content-Type": "application/json",
    });
    return data;
  } catch (err) {
    throw new AppError(
      err.response.status,
      err.response.data.status,
      err.response.data.message
    );
  }
};

export const logout = async () => {
  try {
    const { data } = (
      await axios.get(`${url}logout`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("blog")}`,
        },
      })
    ).data;
    return data;
  } catch (err) {
    throw new AppError(
      err.response.status,
      err.response.data.status,
      err.response.data.message
    );
  }
};
export const verifyToken = async (query) => {
  try {
    const { data } = (
      await axios.get(`${url}verifyUser`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("blog")}`,
        },
      })
    ).data;
    return data;
  } catch (err) {
    throw new AppError(
      err.response.status,
      err.response.data.status,
      err.response.data.message
    );
  }
};
