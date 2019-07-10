import React from "react";

import { connect } from "react-redux";
import { setName } from "../redux/actions/name";

let Name = props => {
  const { name, dispatch } = props;

  let input;

  return (
    <div>
      <h2>The Cat's name is: {name}</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          console.log(input.value);
          dispatch(setName(input.value));
          input.value = "";
        }}
      >
        <label>Name: </label>
        <input ref={node => (input = node)} type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  const { name } = state;
  return name;
};

export default connect(mapStateToProps)(Name);
