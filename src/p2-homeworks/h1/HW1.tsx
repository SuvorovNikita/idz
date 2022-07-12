import React from 'react';
import Message from './Message';
import avatar from '../../p1-main/m1-ui/u1-app/img/avatar.jpg';

const messageData = {
  avatar: avatar,
  name: 'Deidara',
  message: 'art is an explosion',
  time: '22:00',
};

function HW1() {
  return (
    <div>
      <hr />
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr />
      {/* <AlternativeMessage /> */}
      <hr />
    </div>
  );
}

export default HW1;
