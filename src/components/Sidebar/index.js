import { Layout } from "antd";
import UserItem from '../UserItem'
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/slice/userSlice";
import { useEffect } from "react";

const { Sider } = Layout;

function Sidebar({ style }) {

    const dispatch = useDispatch()
    const allUsers = useSelector((state) => state.user.users)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return ( 
        <div style={style}>
            <Layout style={{ height: '100%'}}>
                <Sider style={{ padding: '15px', background: '#fff' }}>
                    {allUsers.map((user, index) => {
                        return <UserItem key={index}>{user.username}</UserItem>
                    })}
                </Sider>
            </Layout>
        </div>
     );
}

export default Sidebar;