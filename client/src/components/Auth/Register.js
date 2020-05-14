import React from "react";
import { Form, Input, Button } from "antd";

const Register = () => {
  return (
    <div className="app" style={{paddingTop: "100px", marginRight: "200px"}}>
      <h2 style={{textAlign: "center", alignItems: "center"}}>Sign up</h2>
      <Form style={{ minWidth: "375px" }} {...formItemLayout}>
        <Form.Item required label="Name">
          <Input id="name" placeholder="Enter your name" type="text" />
        </Form.Item>

        <Form.Item required label="Last Name">
          <Input id="lastName" placeholder="Enter your Last Name" type="text" />
        </Form.Item>

        <Form.Item required label="Email" hasFeedback>
          <Input id="email" placeholder="Enter your Email" type="email" />
        </Form.Item>

        <Form.Item required label="Password" hasFeedback>
          <Input
            id="password"
            placeholder="Enter your password"
            type="password"
          />
        </Form.Item>

        <Form.Item required label="Confirm" hasFeedback>
          <Input
            id="confirmPassword"
            placeholder="Enter your confirmPassword"
            type="password"
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default Register;
