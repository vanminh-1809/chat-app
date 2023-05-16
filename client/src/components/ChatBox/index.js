import { Input, Layout } from "antd";
import { useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import "../../styles/chatBox.scss";

const { Content } = Layout;

function ChatBox({ children, onSend }) {

    const [message, setMessage] = useState('')
    
    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSend = () => {
        onSend(message);
        setMessage('');
    }

    return ( 
        <div className="chatBox">
            <Layout className="chatBox-layout">
                <Content className="chatBox-content">
                    <div className="chatBox-children">
                        {children}
                    </div>
                    <div className="chatBox-input">
                        <Input value={message} onChange={handleChange} onPressEnter={handleSend} style={{ marginRight: '10px'}} />
                        <SendOutlined onClick={handleSend} />
                    </div>
                </Content>
            </Layout>
        </div>
     );
}

export default ChatBox;