import { combineReducers } from "redux";
import FormReducer from "./components/Form/formReducer"

const rootReducer = combineReducers({
  form: FormReducer
});

export default rootReducer;