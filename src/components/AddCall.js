import React from 'react'
import { connect } from 'react-redux'
import { addCall } from '../redux/actions'

const AddCall = ({ addCall }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addCall(input.value)
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Call</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addCall: value => dispatch(addCall(value)),
  };
};

export default connect(null, mapDispatchToProps)(AddCall)