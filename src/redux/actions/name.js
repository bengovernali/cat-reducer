import { ACTION_SET_NAME } from "./nameType";

export const setName = values => {
  return {
    type: ACTION_SET_NAME,
    payload: { values }
  };
};
