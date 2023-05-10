
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";
import classNames from "classnames/bind";
import styles from "./Chat.module.scss";
import { Card } from "antd";

const cx = classNames.bind(styles);

function Chat() {
  return (
    <div className={cx("wrapper")}>
      <Card style={{width: '60%'}}>
        <Card.Grid hoverable={false} style={{width: '20%'}} ><Sidebar /></Card.Grid>
        <Content style={{padding: '24px'}} />
      </Card>
    </div>
  );
}

export default Chat;
