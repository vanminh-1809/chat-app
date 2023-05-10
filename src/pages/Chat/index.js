
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";
import classNames from "classnames/bind";
import styles from "./Chat.module.scss";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Chat() {

  const token = useSelector((state) => state.auth.token)

  return token ? (
    <div className={cx("wrapper")}>
      <Card style={{width: '60%'}}>
        <Card.Grid hoverable={false} style={{width: '20%'}} ><Sidebar /></Card.Grid>
        <Content style={{padding: '24px'}} />
      </Card>
    </div>
  ) : <Navigate to='/login' /> ;
}

export default Chat;
