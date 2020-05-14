import React from "react";
import { Drawer, Button, Icon } from 'antd';
import "./style.css";
import Left from "./Menu/Left";
import Right from "./Menu/Right";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className="menu"
      style={{ position: "fixed", zIndex: 5, width: "100%" }}
    >
      <div className="menu__logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <Left mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <Right mode="horizontal" />
        </div>
        <Button className="menu__mobile-button" type="primary">
          <Icon type="align-right" />
        </Button>
        <Drawer title="Basic Drawer" placement="right" className="menu_drawer">
          <Left mode="inline" />
            <Right mode="inline" />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
