import { Input, Layout } from "antd";
import { useState } from "react";
import { SendOutlined } from "@ant-design/icons"

const { Content } = Layout;

function ChatBox({ style, children, onSend }) {

    const [message, setMessage] = useState('')
    
    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSend = (e) => {
        e.preventDefault();
        onSend(message);
        setMessage('');
    }

    return ( 
        <div style={style}>
            <Layout style={{ height: '100%' }}>
                <Content style={{ padding: '15px', display: 'flex', flexFlow: "column" }}>
                    <div style={{ height: '90%' , overflowY: 'scroll' }}>
                        {children}
                    </div>
                    <div style={{ height: '10%' ,display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Input value={message} onChange={handleChange} onPressEnter={handleSend} style={{ marginRight: '10px'}} />
                        <SendOutlined onClick={handleSend} />
                    </div>
                </Content>
            </Layout>
        </div>
     );
}

export default ChatBox;