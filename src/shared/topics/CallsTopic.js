import { store } from '../../redux/store';
import Topics from '../TopicsEnum';
import { addCall, updateCall } from '../../redux/actions';

const callsTopic = (topic, msg) => {
  switch (topic) {
    case Topics.ADD_CALL:
      store.dispatch(addCall(msg));
      return msg;
    case Topics.UPDATE_CALL:
      store.dispatch(updateCall(store.getState().calls[msg.id]));
      return msg;
    default:
      return msg;
  }
};

export default callsTopic;
