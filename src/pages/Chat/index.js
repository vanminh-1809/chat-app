import "../../styles/_chat.scss";
import ChatBox from "../../components/ChatBox";
import Sidebar from "../../components/Sidebar";
import Message from "../../components/Message";
import UserItem from "../../components/UserItem";
import { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import { pushNotifications } from "./notification";
// import { useSelector } from "react-redux";

const host = "http://localhost:3001";

function Chat() {


  // const users = useSelector((state) => state.user.users);

  const [active, setActive] = useState(false);

  const [allMess, setAllMess] = useState([]);
  const [id, setId] = useState(null)

  const socketRef = useRef();
  const messageEnd = useRef();

  useEffect(() => {
    socketRef.current = io.connect(host)

    socketRef.current.on('getId', (data) => {
      setId(data)
      setActive(true)
    })

    socketRef.current.on('sendDataServer', (data) => {
      setAllMess(oldMess => [...oldMess, data])
      scrollToBottom()
      if(data.id !== id && document.visibilityState !== 'hidden') {
        pushNotifications(data.content)
      }
    })

    return () => {
      socketRef.current.disconnect().on('out', () => setActive(false))
    }
  }, [])

  const sendMessage = (message) => {
    if(message !== '') {
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

  // const renderUser = allUsers.map((user, index) => {
  //   return <UserItem key={index}>{user.userId}</UserItem>
  // })

  return (
    <div className="background">
        <Sidebar>
          {/* {renderUser} */}
          <UserItem isActive={active}>Cong</UserItem>
        </Sidebar>
        <ChatBox onSend={sendMessage}>
          { renderMessage }
          <div style={{ float: 'left', clear: 'both' }} ref={messageEnd}></div>
        </ChatBox>
    </div>
  )
}

export default Chat;
