import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "../../styles/room.scss"
import { useDispatch } from "react-redux";
import { addUserRoom, updateAddress } from "../../redux/slice/userSlice";
import { getAddress } from "./services";
import { useEffect } from "react";

function RoomOptions() {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const newUser = JSON.parse(localStorage.getItem('user'));

    Notification.requestPermission();
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude
            const lng = position.coords.longitude
            
            try {
                const res = await getAddress(lat, lng);
                const address = {
                    data: {geoLocation: res.results[0].formatted_address},
                    id: newUser.id,
                }
                dispatch(updateAddress(address));
            } catch (err) {
                alert('Không có quyền truy cập vị trí');
            }
        })
    }, [])

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