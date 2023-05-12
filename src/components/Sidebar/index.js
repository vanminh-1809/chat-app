import { Layout } from "antd";
import "../../styles/_sidebar.scss";
// import UserItem from '../UserItem'
// import { useDispatch, useSelector } from "react-redux";
// import { getAllUsers } from "../../redux/slice/userSlice";
// import { useEffect } from "react";

const { Sider } = Layout;

function Sidebar({ style, children }) {

    // const dispatch = useDispatch()
    // const allUsers = useSelector((state) => state.user.users)

    // useEffect(() => {
    //     dispatch(getAllUsers())
    // }, [dispatch])

    return ( 
        <div className="sidebar">
            <Layout className="sidebar-layout">
                <Sider className="sidebar-sider">
                    {/* {allUsers.map((user, index) => {
                        return <UserItem key={index}>{user.username}</UserItem>
                    })} */}
                    {children}
                </Sider>
            </Layout>
        </div>
     );
}

export default Sidebar;