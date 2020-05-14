import React from "react";
import { Menu, Icon, Badge } from "antd";
import {Link} from "react-router-dom";

const Right = (props) => {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <Link to="/login">Signin</Link>
      </Menu.Item>
      <Menu.Item key="app">
        <Link to="/register">Signup</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Right;
