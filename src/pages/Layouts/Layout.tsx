import { FunctionComponent, useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Layout.css";
import { ThemeContext } from "../../contexts/Theme";
import Footer from "./Footer";

interface LayoutProps {

}

const Layout: FunctionComponent<LayoutProps> = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <div id="container" data-theme={isDark ? "dark" : "light"}>
            <Header />
            <div id="body-container">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;