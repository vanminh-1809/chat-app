import { Avatar, Space, Badge } from "antd";
import '../../styles/_userItem.scss'

function UserItem({ children, isActive }) {
  return (
    <div className='user-item'>
      <Space>
          <Badge offset={[-4, 36]} dot status={isActive ? "success" : "default"}>
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
