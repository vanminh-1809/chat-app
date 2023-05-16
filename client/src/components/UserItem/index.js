import { Avatar, Space, Badge, Tooltip } from "antd";
import '../../styles/userItem.scss'

function UserItem({ username, isActive, location, title }) {
  return (
    <div className='user-item'>
      <Space style={{ width:'100%' }}>
          <Badge offset={[-4, 36]} dot status={isActive ? "success" : "default"}>
            <Avatar
                style={{
                background: "orange",
                verticalAlign: "middle",
                }}
                size="large"
            />
          </Badge>
          <Tooltip title={title}>
            <div style={{ width: '30%' }}>
              <b>{username}</b>
              <p className="location">{location}</p>
            </div>
          </Tooltip>
      </Space>
    </div>
  );
}

export default UserItem;
