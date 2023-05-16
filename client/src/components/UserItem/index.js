import { Avatar, Space, Badge, Tooltip } from "antd";
import '../../styles/_userItem.scss'

function UserItem({ children, isActive, location, title }) {
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
            >
                {/* C */}
            </Avatar>
          </Badge>
          <Tooltip title={title}>
            <div style={{ width: '30%' }}>
              {children}
              <p className="location">{location}</p>
            </div>
          </Tooltip>
      </Space>
    </div>
  );
}

export default UserItem;
