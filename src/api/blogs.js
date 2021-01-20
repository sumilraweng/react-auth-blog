import axios from "axios";
import { AppError } from "../model/errorSchema";
const url = process.env.REACT_APP_BLOGS_API;

export const getAllBlogs = async () => {
  try {
    const { data } = await axios.get(`${url}/blogs`);
    return data;
  } catch (err) {
    console.log(err);
    throw new AppError(
      err.response.status,
      err.response.data.status,
      err.response.data.message
    );
  }
};

export const getBlogById = async (id) => {
  try {
    const { data } = await axios.get(`${url}/blogs/${id}`);
    return data;
  } catch (err) {
    console.log(err);
    throw new AppError(
      err.response.status,
      err.response.data.status,
      err.response.data.message
    );
  }
};
