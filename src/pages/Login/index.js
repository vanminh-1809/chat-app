
import FormInput from "../../components/FormInput";
import { Link } from "react-router-dom";

function Login() {

  

  return (
    <div>
      <FormInput label={"Đăng nhập"}>
        <Link to="/register">Bạn chưa có tài khoản? Cùng đăng ký nhé!!</Link>
      </FormInput>
    </div>
  );
}

export default Login;
