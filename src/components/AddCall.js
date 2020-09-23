import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCall } from '../redux/actions';

// eslint-disable-next-line react/prop-types
const AddCall = ({ addNewCall }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addNewCall(input.value);
          input.value = '';
        }}
      >
        <input
          // eslint-disable-next-line no-return-assign
          ref={node => (input = node)}
        />
        <button type="submit">Add Call</button>
      </form>
    </div>
  );
};

AddCall.propTypes = {
  addNewCall: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    addNewCall: value => dispatch(addCall(value))
  };
};

export default connect(null, mapDispatchToProps)(AddCall);
