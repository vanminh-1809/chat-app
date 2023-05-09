import { Avatar, Space, Badge } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useState } from "react";

function UserItem() {
    const [rename, setRename] = useState(false)

    const handleClick = () => {
        setRename(true)
    }
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
          <MoreOutlined onClick={handleClick} />
      </Space>
    </div>
  );
}

export default UserItem;
