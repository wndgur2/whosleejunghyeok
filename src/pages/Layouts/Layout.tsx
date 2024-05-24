import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import useLocalStorage from "use-local-storage";
import "./Layout.css";

interface LayoutProps {

}

const Layout: FunctionComponent<LayoutProps> = () => {
    const [isDark] = useLocalStorage("isDark", false);
    return (
        <div id="container" data-theme={isDark ? "dark" : "light"}>
            <Header />
            <Outlet />
        </div>
    );
}

export default Layout;