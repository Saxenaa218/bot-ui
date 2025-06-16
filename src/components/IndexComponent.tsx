
"use client";

import React, { useState } from 'react';
import { Input } from 'antd';

interface Message {
  msg: string;
  me: boolean;
  time: Date;
}

export const IndexComponent: React.FC = () => {
  const [list, setList] = useState<Message[]>([
    { msg: "hi", me: false, time: new Date() }
  ]);

  const handleSendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const newMessage: Message = {
      msg: target.value,
      me: true,
      time: new Date()
    };
    
    setList(prevList => [...prevList, newMessage]);
    target.value = "";
  };

  return (
    <div className="index">
      <div>
        {list.map((e, index) => (
          <div key={index} className={e.me ? "right" : "left"}>
            <div className={e.me ? "right-box" : "left-box"}>
              {e.msg}
            </div>
          </div>
        ))}
      </div>
      <Input
        autoComplete="off"
        id="msg"
        placeholder="msg here !!"
        onPressEnter={handleSendMessage}
      />
    </div>
  );
};
