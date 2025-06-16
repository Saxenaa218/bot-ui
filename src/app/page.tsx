
"use client";

import React, { useState } from 'react';
import { Button, Popover } from 'antd';
import { IndexComponent } from '@/components/IndexComponent';

interface AppState {
  title: string;
  list: Array<{ msg: string; by: string; t: Date | null }>;
}

export default function Home() {
  const [state, setState] = useState<AppState>({
    title: "demo",
    list: [{ msg: "demo", by: "me", t: null }]
  });

  const component = (
    <div>
      <IndexComponent />
    </div>
  );

  return (
    <div className="index-component">
      <Popover
        content={component}
        title={state.title}
        trigger="click"
        placement="topRight"
      >
        <Button icon={<span>💬</span>}>Chat</Button>
      </Popover>
    </div>
  );
}
