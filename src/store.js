//import { createStore } from "redux";
import { combineReducers } from "redux";
import reducer from "./reducers";
import { userReducer } from "./reducers/user";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//const store = createStore(reducer);

const logMiddleware = (store) => (dispatch) => (action) => {
  console.log(action.type, store.getState());
  return dispatch(action);
};

const store = createStore(
  combineReducers({ book: reducer, user: userReducer }),
  applyMiddleware(thunk, logMiddleware)
);
export default store;
