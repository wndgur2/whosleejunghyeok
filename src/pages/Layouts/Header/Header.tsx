import { FunctionComponent, useContext } from "react";
import './Header.css';
import Theme from "./Theme/Theme";
import SearchBar from "./Search/SearchBar";
import Marqueee from "../../../components/Marqueee";
import { DeviceContext } from "../../../contexts/Device";

const Header: FunctionComponent = () => {
    const { isDark, setIsDark } = useContext(DeviceContext);

    return (
        <div id="header">
            <Marqueee />
            <div className="headModules">
                <SearchBar />
                <Theme isChecked={isDark} handleChange={() => {
                    setIsDark(!isDark)
                    localStorage.setItem('theme', isDark ? 'light' : 'dark');
                }} />
            </div>
        </div>
    );
}

export default Header;