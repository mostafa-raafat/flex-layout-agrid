const callsReducer = (state = [], action) => {
  switch (action.type) {
    case 'CALL_ADDED':
      return [
        ...state,
        action.payload
      ]
    case 'CALL_UPDATED':
      const newState = state.map(el => {
        if (el.attributes.id === action.payload.attributes.id)
          return action.payload;
        return el
      });
      return newState;
    default:
      return state
  }
}

export default callsReducer