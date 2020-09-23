import React, { useRef } from 'react';
import SockJsClient from 'react-stomp';
import callsTopic from './topics/CallsTopic';

const SocketHandler = () => {
  const token =
    'MjkzMzg5YTc5ZjAzZjQ3ZTVlNGYxOTk0ZmNiY2NmODc5NDc3NDRlMDM3Nzk4NjM0NzdhMGNlZTBmNzNmYzFkYQ';
  const topics = ['/user/topic/calls/add', '/user/topic/calls/information'];
  const clientRef = useRef();
  return (
    <SockJsClient
      url={`http://192.168.9.111:8080/gss/rest/socket?Token=${token}`}
      topics={topics}
      onMessage={(msg, topic) => callsTopic(topic, msg)}
      ref={client => {
        clientRef.current = client;
      }}
    />
  );
};

export default SocketHandler;
