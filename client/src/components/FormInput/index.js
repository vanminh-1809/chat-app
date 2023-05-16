import { Button, Form, Input } from "antd";
import Card from "antd/es/card/Card";
import "../../styles/formInput.scss";
import { useState } from "react";

function FormInput({ actionType, onSubmit, children }) {
  const rules = {
    userName: [{ required: true, message: "Vui lòng nhập tên của bạn!" }],
    password: [{ required: true, message: "Vui lòng nhập mật khẩu!" }],
  };

  const [account, setAccount] = useState({});

  const change = (value, allValues) => {
    setAccount(allValues);
  }

  const handleSubmit = () => {
    onSubmit(account)
  };

  return (
    <div className="wrapper">
      <Card title="CONG CHAT APP" style={{ width: '35%', textAlign: 'center' }}>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: '100%' }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onValuesChange={change}
          onFinish={handleSubmit}
        >
          <Form.Item label="Username" name="username" rules={rules.userName}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={rules.password}>
            <Input.Password />
          </Form.Item>
          {children}
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: '50%' }}
            >
              {actionType}
            </Button>
        </Form>
      </Card>
    </div>
  );
}

export default FormInput;
