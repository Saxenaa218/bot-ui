'use client';

import React, { useState } from 'react';
import { Button, Popover } from 'antd';
import ChatComponent from './components/ChatComponent';

export default function Home() {
  const [title] = useState("Bot Chat");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Bot UI - Next.js Version
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Click the chat button to start a conversation
        </p>
        
        <div className="fixed bottom-4 right-4">
          <Popover
            content={<div style={{ width: 300, height: 400 }}><ChatComponent /></div>}
            title={title}
            trigger="click"
            placement="topRight"
          >
            <Button 
              type="primary" 
              shape="circle" 
              size="large"
              className="w-14 h-14 flex items-center justify-center"
            >
              💬
            </Button>
          </Popover>
        </div>
      </div>
    </div>
  );
}
