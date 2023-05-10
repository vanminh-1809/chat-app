import { Button, Form, Input } from "antd";
import Card from "antd/es/card/Card";
import styles from "./FormInput.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, signUp } from "../../redux/slice/authSlice";

const cx = classNames.bind(styles);

function FormInput({ label, children }) {
  const rules = {
    userName: [{ required: true, message: "Vui lòng nhập tên của bạn!" }],
    password: [{ required: true, message: "Vui lòng nhập mật khẩu!" }],
  };

  const dispatch = useDispatch();

  const [account, setAccount] = useState({});

  const change = (value, allValues) => {
    setAccount(allValues);
  }

  const handleChange = () => {
    label === "Đăng nhập" ? dispatch(login(account)) : dispatch(signUp(account))
  };


  return (
    <div className={cx("wrapper")}>
      <Card title="CONG CHAT APP" style={{ width: "50%", textAlign: "center" }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onValuesChange={change}
          onFinish={handleChange}
        >
          <Form.Item label="Username" name="username" rules={rules.userName}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={rules.password}>
            <Input.Password />
          </Form.Item>
          {children}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
            >
              {label}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default FormInput;
