import {
  GET_REPOSITORIES_FAILED,
  GET_REPOSITORIES_PENDING,
  GET_REPOSITORIES_SUCCESS,
  GET_REPOSITORIES_LENGTH_FAILED,
  GET_REPOSITORIES_LENGTH_PENDING,
  GET_REPOSITORIES_LENGTH_SUCCESS,
} from "../types";

const initialState = {
  isLoading: false,
  isError: false,
  repositories: [],
  repositoriesLength: [],
  error: null,
  empty: false,
};

export const repositoriesReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOSITORIES_PENDING:
      return { ...state, isLoading: true };
    case GET_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: action.payload,
        empty: action.payload.length === 0,
      };
    case GET_REPOSITORIES_FAILED:
      return {
        ...state,
        isError: true,
        error: action.payload,
        empty: false,
      };
    default:
      return state;
  }
};

export const repositoriesLengthReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOSITORIES_LENGTH_PENDING:
      return { ...state, isLoading: true };
    case GET_REPOSITORIES_LENGTH_SUCCESS:
      return {
        ...state,
        repositoriesLength: action.payload,
        empty: action.payload.length === 0,
      };
    case GET_REPOSITORIES_LENGTH_FAILED:
      return {
        ...state,
        isError: true,
        error: action.payload,
        empty: false,
      };
    default:
      return state;
  }
};
