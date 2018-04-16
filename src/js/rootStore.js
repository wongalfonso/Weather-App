import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from "redux-promise-middleware"
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const myLogger = (store) => (next) => (action) => {
  console.log("logged action", action);
  next(action);
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, promiseMiddleware()))
);

export default rootStore;

