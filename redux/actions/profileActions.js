import axios from "axios";
import {
  GET_PROFILE_FAILED,
  GET_PROFILE_PENDING,
  GET_PROFILE_SUCCESS,
} from "../types";

export const getProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_PROFILE_PENDING,
      payload: null,
    });

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/abdussalim`
    );

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    if (error.response) {
      error.message = error.response.data.error;
    }

    dispatch({
      type: GET_PROFILE_FAILED,
      payload: error.message || "Internal Server Error",
    });
  }
};
