import { FunctionComponent, useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Layout.css";
import { DeviceContext } from "../../contexts/Device";
import Footer from "./Footer";

interface LayoutProps {

}

const Layout: FunctionComponent<LayoutProps> = () => {
    const { isDark, width } = useContext(DeviceContext);
    return (
        <div id="container" data-theme={isDark ? "dark" : "light"} device-type={width < 768 ? "mobile" : "desktop"}>
            <Header />
            <div id="body-container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;