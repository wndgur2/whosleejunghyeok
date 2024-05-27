import { FunctionComponent, useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Layout.css";
import Marqueee from "../../components/Marqueee";
import { ThemeContext } from "../../contexts/Theme";

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
            <Marqueee direction="right" />
        </div>
    );
}

export default Layout;