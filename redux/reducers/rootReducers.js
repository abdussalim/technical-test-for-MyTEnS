import { combineReducers } from "redux";
import profileReducers from "./profileReducers";
import repositoriesReducers from "./repositoriesReducers";

const rootReducers = combineReducers({
  profile: profileReducers,
  repositories: repositoriesReducers,
});

export default rootReducers;
