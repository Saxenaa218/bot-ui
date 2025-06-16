"use client";

import React from 'react';
import { Button, Popover } from 'antd';
import { ChatComponent } from './components/ChatComponent';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Bot UI - Next.js Chat Application
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Welcome to the migrated chat application!
          </h2>
          <p className="text-gray-600 mb-4">
            This application has been successfully migrated from a React app to Next.js. 
            Click the chat button below to start a conversation.
          </p>
          
          <div className="flex justify-center">
            <Popover
              content={
                <div style={{ width: 400, height: 300 }}>
                  <ChatComponent />
                </div>
              }
              title="Chat with Bot"
              trigger="click"
              placement="topRight"
            >
              <Button 
                type="primary" 
                size="large"
                className="bg-blue-500 hover:bg-blue-600"
              >
                💬 Open Chat
              </Button>
            </Popover>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Real-time chat interface</li>
              <li>• Message bubbles with different styles</li>
              <li>• Responsive design with Tailwind CSS</li>
              <li>• Next.js App Router architecture</li>
              <li>• TypeScript support</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Technology Stack</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Next.js 15 with App Router</li>
              <li>• React 18 with Hooks</li>
              <li>• Ant Design components</li>
              <li>• Tailwind CSS for styling</li>
              <li>• TypeScript for type safety</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
