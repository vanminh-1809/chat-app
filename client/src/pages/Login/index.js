import FormInput from "../../components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./services";

function Login() {

  const navigate = useNavigate();

  const handleLogin = async (account) => {
    try {
      const res = await login(account);
      localStorage.setItem('user', JSON.stringify(res.user));
      localStorage.setItem('token', res.accessToken);
      navigate('/room')
    } catch (err) {
      alert('Tai khoan mat khau chua dung')
    }
  }

  return (
    <div>
      <FormInput onSubmit={handleLogin} actionType="Đăng nhập">
        <Link to="/register">Bạn chưa có tài khoản? Cùng đăng ký nhé!!</Link>
      </FormInput>
    </div>
  );
}

export default Login;
