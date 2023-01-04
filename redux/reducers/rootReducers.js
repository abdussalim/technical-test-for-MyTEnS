import { combineReducers } from "redux";
import { profileReducers, searchProfileReducers } from "./profileReducers";
import repositoriesReducers from "./repositoriesReducers";

const rootReducers = combineReducers({
  profile: profileReducers,
  searchProfile: searchProfileReducers,
  repositories: repositoriesReducers,
});

export default rootReducers;
