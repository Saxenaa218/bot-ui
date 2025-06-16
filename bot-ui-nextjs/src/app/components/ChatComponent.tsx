
"use client";

import React, { useState } from 'react';
import { Input } from 'antd';

interface Message {
  msg: string;
  me: boolean;
  time: Date;
}

export const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { msg: "hi", me: false, time: new Date() }
  ]);

  const handleSendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.value.trim()) {
      setMessages(prev => [
        ...prev, 
        { msg: target.value, me: true, time: new Date() }
      ]);
      target.value = "";
    }
  };

  return (
    <div className="chat-container border-2 border-gray-300 h-full">
      <div className="messages-container p-2">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-2 ${message.me ? 'text-right' : 'text-left'}`}
          >
            <div 
              className={`inline-block px-3 py-2 border border-gray-600 max-w-fit ${
                message.me 
                  ? 'rounded-tl-2xl rounded-bl-2xl rounded-br-2xl bg-blue-100' 
                  : 'rounded-tr-2xl rounded-bl-2xl rounded-br-2xl bg-gray-100'
              }`}
            >
              {message.msg}
            </div>
          </div>
        ))}
      </div>
      <div className="input-container p-2">
        <Input
          placeholder="msg here !!"
          onPressEnter={handleSendMessage}
          className="w-full"
        />
      </div>
    </div>
  );
};
