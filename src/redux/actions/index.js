export const zoomToPoint = (location) => ({
  type: 'ZOOM_TO_POINT',
  payload: location
})

export const zoomDone = () => ({
  type: 'ZOOM_DONE'
})

export const addCall = (call) => ({
  type: 'ADD_CALL',
  payload: call
})

export const callAdded = (call) => ({
  type: 'CALL_ADDED',
  payload: call
})

export const updateCall = (call) => ({
  type: 'UPDATE_CALL',
  payload: call
})

export const callUpdated = (call) => ({
  type: 'CALL_UPDATED',
  payload: call
})