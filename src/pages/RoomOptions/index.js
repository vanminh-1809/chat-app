import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "../../styles/_room.scss"
import { useDispatch } from "react-redux";
import { getUsersByRoomId, addUserRoom } from "../../redux/slice/userSlice";
import { useEffect } from "react";


function RoomOptions() {

    Notification.requestPermission();

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const newUser = JSON.parse(localStorage.getItem('user'));

    const data = {
        userId: newUser.id
    }

    const joinRoom = (id) => {
        navigate('/chat')
        // dispatch(getUsersByRoomId(id))
        // dispatch(addUserRoom(id, data))
    }
    console.log(data);
    const joinFirstRoom = () => {
        joinRoom(1)
    }
    const joinSecondRoom = () => {
        joinRoom(2)
    }
    const joinThirdRoom = () => {
        joinRoom(3)
    }

    return ( 
        <div className="room">
            <Button onClick={joinFirstRoom} type="primary">Phòng 1</Button>
            <Button onClick={joinSecondRoom} type="primary">Phòng 2</Button>
            <Button onClick={joinThirdRoom} type="primary">Phòng 3</Button>
        </div>
     );
}

export default RoomOptions;