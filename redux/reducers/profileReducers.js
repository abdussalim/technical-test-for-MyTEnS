import {
  GET_PROFILE_FAILED,
  GET_PROFILE_PENDING,
  GET_PROFILE_SUCCESS,
  SEARCH_PROFILE_FAILED,
  SEARCH_PROFILE_PENDING,
  SEARCH_PROFILE_SUCCESS,
} from "../types";

const initialState = {
  isLoading: false,
  isError: false,
  profile: [],
  searchProfile: [],
  error: null,
  empty: false,
};

export const profileReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_PENDING:
      return { ...state, isLoading: true };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        empty: action.payload.length === 0,
      };
    case GET_PROFILE_FAILED:
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

export const searchProfileReducers = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PROFILE_PENDING:
      return { ...state, isLoading: true };
    case SEARCH_PROFILE_SUCCESS:
      return {
        ...state,
        searchProfile: action.payload,
        empty: action.payload.length === 0,
      };
    case SEARCH_PROFILE_FAILED:
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
