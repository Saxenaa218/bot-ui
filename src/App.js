import React from 'react';
import './App.css';
import { Button, Popover } from 'antd';
import 'antd/dist/antd.css';

class App extends React.Component {
  state = {
    title: "demo",
    list: [{ msg: "demo", by: "me", t:null }]
  };

  render() {

    const component = (
      <div>
        {this.state.list.map(e => (
          <div></div>
        ))}
      </div>
    );

    return (
      <div className="index-component">
        <Popover
          content={component}
          title={this.state.title}
          trigger="click"
          placement="topRight"
        >
          <Button icon="msg" />
        </Popover>
      </div>
    );
  }
}

export default App;
