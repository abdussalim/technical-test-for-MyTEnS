import axios from "axios";
import {
  GET_REPOSITORIES_FAILED,
  GET_REPOSITORIES_PENDING,
  GET_REPOSITORIES_SUCCESS,
  GET_REPOSITORIES_LENGTH_FAILED,
  GET_REPOSITORIES_LENGTH_PENDING,
  GET_REPOSITORIES_LENGTH_SUCCESS,
} from "../types";

export const getRepositories =
  (byusername, currentPage, totalPerPage) => async (dispatch) => {
    try {
      dispatch({
        type: GET_REPOSITORIES_PENDING,
        payload: null,
      });

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${byusername}/repos?page=${currentPage}&per_page=${totalPerPage}`
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

export const getRepositoriesLength =
  (byusername, currentPage) => async (dispatch) => {
    try {
      dispatch({
        type: GET_REPOSITORIES_LENGTH_PENDING,
        payload: null,
      });

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${byusername}/repos?page=${currentPage}`
      );

      dispatch({
        type: GET_REPOSITORIES_LENGTH_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      if (error.response) {
        error.message = error.response.data.error;
      }

      dispatch({
        type: GET_REPOSITORIES_LENGTH_FAILED,
        payload: error.message || "Internal Server Error",
      });
    }
  };
