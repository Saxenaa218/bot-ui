
"use client";

import React, { useState } from 'react';
import { Button, Popover } from 'antd';

interface Message {
  msg: string;
  by: string;
  t: Date | null;
}

export const AppComponent: React.FC = () => {
  const [title] = useState<string>("demo");
  const [list] = useState<Message[]>([
    { msg: "demo", by: "me", t: null }
  ]);

  const component = (
    <div>
      {list.map((e, index) => (
        <div key={index}></div>
      ))}
    </div>
  );

  return (
    <div className="index-component">
      <Popover
        content={component}
        title={title}
        trigger="click"
        placement="topRight"
      >
        <Button icon={<span>💬</span>} />
      </Popover>
    </div>
  );
};
