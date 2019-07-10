import React from "react";

import { connect } from "react-redux";
import { eat, nap, play } from "../redux/actions/activity";

const Activity = ({ activity, eat, nap, play }) => {
  return (
    <div>
      <h2>THE CAT IS: {activity}</h2>
      <button onClick={() => eat()}>Eating</button>
      <button onClick={() => nap()}>Nap</button>
      <button onClick={() => play()}>Play</button>
    </div>
  );
};

//this is the subsriber
//listens for changes in state
//subscribes to state changes
const mapStateToProps = state => {
  const { activity } = state;
  return activity;
};

//this is the dispatcher
//dispatches actions to redux
const mapDispatchToProps = dispatch => {
  return {
    eat: () => dispatch(eat()),
    nap: () => dispatch(nap()),
    play: () => dispatch(play())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Activity);
