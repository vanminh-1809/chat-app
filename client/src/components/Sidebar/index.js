import { Layout } from "antd";
import "../../styles/sidebar.scss";

const { Sider } = Layout;

function Sidebar({ children }) {

    return ( 
        <div className="sidebar">
            <Layout className="sidebar-layout">
                <Sider className="sidebar-sider">
                    {children}
                </Sider>
            </Layout>
        </div>
     );
}

export default Sidebar;