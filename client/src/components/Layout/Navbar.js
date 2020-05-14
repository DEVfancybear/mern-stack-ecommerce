import React from "react";
import { Drawer, Button, Icon } from 'antd';
import "./style.css";
const Navbar = () => {
  return (
    <nav
      className="menu"
      style={{ position: "fixed", zIndex: 5, width: "100%" }}
    >
      <div className="menu__logo">
        <a href="/">Logo</a>
      </div>
      <div className="menu__container">
        {/* <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div> */}
        <Button className="menu__mobile-button" type="primary">
          <Icon type="align-right" />
        </Button>
        <Drawer title="Basic Drawer" placement="right" className="menu_drawer">
          {/* <LeftMenu mode="inline" />
            <RightMenu mode="inline" /> */}
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
