import {
  ACTION_NAP,
  ACTION_EAT,
  ACTION_PLAY,
  ACTION_SET_ACTIVITY
} from "../actions/actionTypes";

const initialState = {
  activity: "blep"
};

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_NAP: {
      return {
        ...state,
        activity: "napping"
      };
    }
    case ACTION_EAT: {
      return {
        ...state,
        activity: "eating"
      };
    }
    case ACTION_PLAY: {
      return {
        ...state,
        activity: "playing"
      };
    }
    case ACTION_SET_ACTIVITY: {
      return {
        ...state,
        activity: action.payload.value
      };
    }
    default: {
      return state;
    }
  }
};

export default activityReducer;
