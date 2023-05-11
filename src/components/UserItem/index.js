import { Avatar, Space, Badge } from "antd";
import classNames from "classnames/bind";
import styles from './UserItem.module.scss'

const cx = classNames.bind(styles)

function UserItem({ children }) {
  return (
    <div className={cx('user-item')}>
      <Space>
          <Badge offset={[-4, 36]} dot color="green">
            <Avatar
                style={{
                background: "orange",
                verticalAlign: "middle",
                }}
                size="large"
            >
                C
            </Avatar>
          </Badge>
          <div>
            {children}
          </div>
      </Space>
    </div>
  );
}

export default UserItem;
