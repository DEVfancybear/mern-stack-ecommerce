import React from "react";
import { Menu, Icon, Badge } from "antd";

const Right = (props) => {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/login">Signin</a>
      </Menu.Item>
      <Menu.Item key="app">
        <a href="/register">Signup</a>
      </Menu.Item>
    </Menu>
  );
};

export default Right;
