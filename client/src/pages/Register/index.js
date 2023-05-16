import { Form, Input } from "antd";
import FormInput from "../../components/FormInput";
import { useNavigate } from "react-router-dom";
import { signUp } from "./services";

function Register() {

  const navigate = useNavigate();

  const handleSignUp = async (account) => {
    try {
      await signUp(account);
      navigate('/');
    } catch (err) {
      alert('Vui lòng xác nhận lại mật khẩu')
    }
  }

  return (
    <div>
      <FormInput onSubmit={handleSignUp} actionType="Đăng ký">
        <Form.Item
          label="Confirm Pass"
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
