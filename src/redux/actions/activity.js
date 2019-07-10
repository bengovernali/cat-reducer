import {
  ACTION_NAP,
  ACTION_EAT,
  ACTION_PLAY,
  ACTION_SET_ACTIVITY
} from "./actionTypes";

export const nap = () => {
  return {
    type: ACTION_NAP
  };
};

export const eat = () => {
  return {
    type: ACTION_EAT
  };
};

export const play = () => {
  return {
    type: ACTION_PLAY
  };
};

export const setActivity = value => {
  return {
    type: ACTION_SET_ACTIVITY,
    payload: { value }
  };
};
