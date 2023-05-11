import classNames from "classnames/bind";
import styles from "./Chat.module.scss";
import ChatBox from "../../components/ChatBox";
import Sidebar from "../../components/Sidebar";
import Message from "../../components/Message";
import { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

const cx = classNames.bind(styles);
const host = "http://localhost:3001";

function Chat() {

  // const token = useSelector((state) => state.auth.token)

  const [allMess, setAllMess] = useState([]);
  const [id, setId] = useState()

  const socketRef = useRef();
  const messageEnd = useRef();

  useEffect(() => {
    socketRef.current = io.connect(host)

    socketRef.current.on('getId', (data) => {
      setId(data)
    })

    socketRef.current.on('sendDataServer', (dataGot) => {
      setAllMess(oldMess => [...oldMess, dataGot.data])
      scrollToBottom()
    })

    return () => {
      socketRef.current.disconnect()
    }
  }, [])

  const sendMessage = (message) => {
    if(message !== null) {
      const msg = {
        content: message,
        id: id
      }
      socketRef.current.emit('sendDataClient', msg)
    }
  }

  const scrollToBottom = () => {
    messageEnd.current.scrollIntoView({ behavior: "smooth" })
  }

  const renderMessage = allMess.map((mess, index) => {
    return <Message className={ mess.id === id ? 'my-mess' : 'other-mess' } key={index} mess={mess.content}/>
  })

  return (
    <div className={cx("wrapper")}>
        <Sidebar style={{ height: '100%' }} />
        <ChatBox onSend={sendMessage} style={{ width: '60%', height: '60%' }}>
          { renderMessage }
          <div style={{ float: 'left', clear: 'both' }} ref={messageEnd}></div>
        </ChatBox>
    </div>
  )
}

export default Chat;
