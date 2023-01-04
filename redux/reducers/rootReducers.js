import { combineReducers } from "redux";
import { profileReducers, searchProfileReducers } from "./profileReducers";
import {
  repositoriesReducers,
  repositoriesLengthReducers,
} from "./repositoriesReducers";

const rootReducers = combineReducers({
  profile: profileReducers,
  searchProfile: searchProfileReducers,
  repositories: repositoriesReducers,
  repositoriesLength: repositoriesLengthReducers,
});

export default rootReducers;
