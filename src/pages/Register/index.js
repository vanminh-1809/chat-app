import { Form, Input } from "antd";
import FormInput from "../../components/FormInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../redux/slice/authSlice";

function Register() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (account) => {
    dispatch(signUp(account)).then(() => navigate('/'));
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
