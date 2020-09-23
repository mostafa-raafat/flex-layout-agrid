const callsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CALL_ADDED':
      return {
        ...state,
        [action.payload.attributes.id]: action.payload
      };
    case 'CALL_UPDATED':
      return {
        ...state,
        [action.payload.attributes.id]: action.payload
      };
    default:
      return state;
  }
};

export default callsReducer;
