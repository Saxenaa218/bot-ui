import React from 'react';
import * as Ant from 'antd';
import 'antd/dist/antd.css';

export class IndexComponent extends React.Component {

  state = {
    list: [{msg: "hi", me: false, time:new Date()}],
  }

  render() {
    let t = new Date();
    return (
      <div className="index">
        <div>
          {this.state.list.map(e => <div className={e.me ? "right" : "left"}><div className={e.me ? "right-box" : "left-box"}>{e.msg}</div></div>)}
        </div>
        <Ant.Input
          autoComplete="off"
          id="msg"
          placeholder="msg here !!"
          onPressEnter={e =>
            this.setState({list: [...this.state.list, {msg:e.target.value, me:true, time: new Date()}]}, () => {
              document.querySelector("#msg").value = "";
            })
          }
        />
      </div>
    );
  }
}
