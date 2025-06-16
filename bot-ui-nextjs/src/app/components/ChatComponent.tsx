import React, { useState } from 'react';
import { Input } from 'antd';

interface Message {
  msg: string;
  me: boolean;
  time: Date;
}

const ChatComponent: React.FC = () => {
  const [list, setList] = useState<Message[]>([
    { msg: "hi", me: false, time: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (inputValue.trim()) {
      setList(prevList => [
        ...prevList, 
        { msg: inputValue, me: true, time: new Date() }
      ]);
      setInputValue("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {list.map((message, index) => (
          <div key={index} className={message.me ? "message-right" : "message-left"}>
            <div className={message.me ? "message-bubble-right" : "message-bubble-left"}>
              {message.msg}
            </div>
          </div>
        ))}
      </div>
      <Input
        autoComplete="off"
        placeholder="Type your message here..."
        value={inputValue}
        onChange={handleInputChange}
        onPressEnter={handleSendMessage}
        className="message-input"
      />
    </div>
  );
};

export default ChatComponent;
