import "../../styles/_chat.scss";
import ChatBox from "../../components/ChatBox";
import Sidebar from "../../components/Sidebar";
import Message from "../../components/Message";
import UserItem from "../../components/UserItem";
import { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import { pushNotifications } from "./notification";
import { useDispatch, useSelector } from "react-redux";
import { getUsersByRoomId } from "../../redux/slice/userSlice";

const host = "http://localhost:3001";

function Chat() {
  const dispatch = useDispatch()

  const users = useSelector((state) => state.user.users);
  const thisUser = JSON.parse(localStorage.getItem('user'))

  // const [active, setActive] = useState(false);

  const [allMess, setAllMess] = useState([]);
  const [id, setId] = useState(null)

  const socketRef = useRef();
  const messageEnd = useRef();

  useEffect(() => {
    socketRef.current = io.connect(host)

    socketRef.current.emit('username', thisUser.id)
    
    socketRef.current.on('usernameConnected', (data) => {
      dispatch(getUsersByRoomId(1))
    })

    socketRef.current.on('getId', (data) => {
      setId(data)
      // setActive(true)
    })


    socketRef.current.on('sendDataServer', (data) => {
      setAllMess(oldMess => [...oldMess, data])
      scrollToBottom()
      if(data.id !== id && document.visibilityState !== 'visible') {
        pushNotifications(data.content)
      }
    })


    return () => {
      socketRef.current.disconnect()
    }
  }, [])

  const sendMessage = (message) => {
    if(message !== '') {
      const msg = {
        content: message,
        id: id,
        username: thisUser.username,
      }
      socketRef.current.emit('sendDataClient', msg)
    }
  }

  const scrollToBottom = () => {
    messageEnd.current.scrollIntoView({ behavior: "smooth" })
  }

  const renderMessage = allMess.map((mess, index) => {
    return <Message className={ mess.id === id ? 'my-mess' : 'other-mess' } key={index} mess={mess.content} />
  })

  const renderUser = users.map((user) => {
    return <UserItem key={user.userId}>{user.userId}</UserItem>
  })

  return (
    <div className="background">
        <Sidebar>
          {renderUser}
        </Sidebar>
        <ChatBox onSend={sendMessage}>
          { renderMessage }
          <div style={{ float: 'left', clear: 'both' }} ref={messageEnd}></div>
        </ChatBox>
    </div>
  )
}

export default Chat;
