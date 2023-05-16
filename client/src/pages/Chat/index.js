import "../../styles/chat.scss";
import ChatBox from "../../components/ChatBox";
import Sidebar from "../../components/Sidebar";
import Message from "../../components/Message";
import UserItem from "../../components/UserItem";
import { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import { pushNotifications } from "./notification";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersByRoomId,
  statusOff,
  statusOn,
} from "../../redux/slice/userSlice";

const host = "http://localhost:3001";

function Chat() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);
  const thisUser = JSON.parse(localStorage.getItem("user"));

  const [allMess, setAllMess] = useState([]);
  const [id, setId] = useState(null);

  const socketRef = useRef();
  const messageEnd = useRef();

  useEffect(() => {
    socketRef.current = io.connect(host);

    socketRef.current.on("getId", (data) => {
      const status = {
        id: thisUser.id,
        data: { socketIdIn: data },
      };
      dispatch(statusOn(status));
      setId(data);
    });
    socketRef.current.emit("username", thisUser.username);

    socketRef.current.on("usernameConnected", (data) => {
      dispatch(getUsersByRoomId(1));
    });

    socketRef.current.on("sendDataServer", (data) => {
      setAllMess((oldMess) => [...oldMess, data]);
      scrollToBottom();
      if (data.id !== id && document.visibilityState !== "visible") {
        pushNotifications(data.content);
      }
    });

    socketRef.current.on("userOff", (data) => {
      const status = { socketIdOut: data };
      dispatch(statusOff(status))
        .then(() => {
          dispatch(getUsersByRoomId(1));
        })
        .catch((err) => console.log(err));
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (message) => {
    if (message !== "") {
      const msg = {
        content: message,
        id: id,
        username: thisUser.username,
      };
      socketRef.current.emit("sendDataClient", msg);
    }
  };

  const scrollToBottom = () => {
    messageEnd.current.scrollIntoView({ behavior: "smooth" });
  };

  const renderMessage = allMess.map((mess) => {
    return (
      <Message
        className={mess.id === id ? "my-mess" : "other-mess"}
        key={mess.id}
        mess={mess.content}
        username={mess.username}
      />
    );
  });

  const renderUser = users.map((user) => {
    return (
      <UserItem
        key={user.chatusermapping.userId}
        location={user.geoLocation}
        title={`${user.username} | ${user.geoLocation}`}
        isActive={user.isActive}
        username={user.username}
      />
    );
  });
  return (
    <div className="background">
      <Sidebar>{renderUser}</Sidebar>
      <ChatBox onSend={sendMessage}>
        {renderMessage}
        <div style={{ float: "left", clear: "both" }} ref={messageEnd}></div>
      </ChatBox>
    </div>
  );
}

export default Chat;
