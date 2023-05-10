import { Form, Input } from "antd";
import FormInput from "../../components/FormInput";

function Register() {
  return (
    <div>
      <FormInput label="Đăng ký">
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              name: "confirmPassword",
              message: "Vui lòng nhập lại mật khẩu",
            },
          ]}
        >
            <Input.Password />
        </Form.Item>
      </FormInput>
    </div>
  );
}

export default Register;
