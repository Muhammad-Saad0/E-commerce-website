import { combineReducers } from "redux";
import productReducer from "./productReducers";
import { filterReducer } from "./filterReducers";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  products: productReducer,
  filter: filterReducer,
  user: userReducer,
});

export default rootReducer;
