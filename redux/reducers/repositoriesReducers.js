import {
  GET_REPOSITORIES_FAILED,
  GET_REPOSITORIES_PENDING,
  GET_REPOSITORIES_SUCCESS,
} from "../types";

const initialState = {
  isLoading: false,
  isError: false,
  repositories: [],
  error: null,
  empty: false,
};

const repositoriesReducers = (state = initialState, action) => {
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

export default repositoriesReducers;
