import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducers from "./reducers/rootReducers";

const middlewares = [thunk, logger];

export const reduxStore = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
