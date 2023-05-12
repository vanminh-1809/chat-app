
import { useDispatch } from "react-redux";
import FormInput from "../../components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/slice/authSlice";

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (account) => {
    dispatch(login(account)).then(() => navigate('/room'))
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
