import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import activityReducer from "./activity";
import nameReducer from "./name";

export default combineReducers({
  activity: activityReducer,
  name: nameReducer,
  form: formReducer
});
