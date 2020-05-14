import React from "react";
import { Form, Icon, Input, Button, Checkbox, Typography } from "antd";

const Login = () => {
  const { Title } = Typography;

  return (
    <div className="app" style={{paddingTop: "100px", marginLeft: "700px"}}>
      <Title level={2}>Log In</Title>
      <form style={{ width: "350px" }}>
        <Form.Item required>
          <Input
            id="email"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Enter your email"
            type="email"
          />
        </Form.Item>

        <Form.Item required>
          <Input
            id="password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Enter your password"
            type="password"
          />
        </Form.Item>

        <Form.Item>
          <Checkbox id="rememberMe">Remember me</Checkbox>
          <a
            className="login-form-forgot"
            href="/reset_user"
            style={{ float: "right" }}
          >
            Forgot password
          </a>
          <div>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ minWidth: "100%" }}
            >
              Log in
            </Button>
          </div>
          Or <a href="/register">Register now!</a>
        </Form.Item>
      </form>
    </div>
  );
};

export default Login;
