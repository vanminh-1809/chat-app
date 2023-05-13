import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "../../styles/_room.scss"
import { useDispatch } from "react-redux";
import { addUserRoom } from "../../redux/slice/userSlice";


function RoomOptions() {

    Notification.requestPermission();

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const newUser = JSON.parse(localStorage.getItem('user'));

    const data = {
        id: 1,
        data: {userId: newUser.id}
    }

    const joinRoom = () => {
        navigate('/chat')
        dispatch(addUserRoom(data))
    }

    return ( 
        <div className="room">
            <Button onClick={joinRoom} type="primary">Tham gia phòng chat</Button>
        </div>
     );
}

export default RoomOptions;