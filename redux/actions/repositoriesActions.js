import axios from "axios";
import {
  GET_REPOSITORIES_FAILED,
  GET_REPOSITORIES_PENDING,
  GET_REPOSITORIES_SUCCESS,
} from "../types";

export const getRepositories = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_REPOSITORIES_PENDING,
      payload: null,
    });

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/abdussalim/repos`
    );

    dispatch({
      type: GET_REPOSITORIES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_REPOSITORIES_FAILED,
      payload: error.message || "Internal Server Error",
    });
  }
};
