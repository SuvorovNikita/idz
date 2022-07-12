import React, { FC } from 'react';
import classes from './Message.module.css';

type MessageType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

const Message: FC<MessageType> = ({ avatar, name, message, time }) => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.avatar} src={avatar} alt="Ошибка" />
      <div className={`${classes.message} ${classes.left}`}>
        <div className={classes.chat}>
          <div className={classes.name}>{name}</div>
          <p className={classes.messages}>{message}</p>
          <div className={classes.time}>{time}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
