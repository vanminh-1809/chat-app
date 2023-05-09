import { Avatar, Space, Badge } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

function UserItem() {
  return (
    <div>
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
            Trần Thế Công<br/>
            Hải phòng
          </div>
          <EllipsisOutlined />
      </Space>
    </div>
  );
}

export default UserItem;
