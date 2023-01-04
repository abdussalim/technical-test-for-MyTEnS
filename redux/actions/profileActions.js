import axios from "axios";
import {
  GET_PROFILE_FAILED,
  GET_PROFILE_PENDING,
  GET_PROFILE_SUCCESS,
  SEARCH_PROFILE_FAILED,
  SEARCH_PROFILE_PENDING,
  SEARCH_PROFILE_SUCCESS,
} from "../types";

export const getProfile = (byusername) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PROFILE_PENDING,
      payload: null,
    });

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${byusername}`
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

export const searchUser =
  (byusername = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: SEARCH_PROFILE_PENDING,
        payload: null,
      });

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/search/users?q=${byusername}+repos:>4&per_page=6`
      );

      dispatch({
        type: SEARCH_PROFILE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      if (error.response) {
        error.message = error.response.data.error;
      }

      dispatch({
        type: SEARCH_PROFILE_FAILED,
        payload: error.message || "Internal Server Error",
      });
    }
  };
