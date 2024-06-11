import { FunctionComponent, useContext } from "react";
import './Header.css';
import Toggle from "../../components/Toggle";
import SearchBar from "../../components/Search/SearchBar";
import Marqueee from "../../components/Marqueee";
import { DeviceContext } from "../../contexts/Device";

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
    const { isDark, setIsDark } = useContext(DeviceContext);

    return (
        <div id="header">
            <Marqueee />
            <div className="headModules">
                <SearchBar />
                <Toggle isChecked={isDark} handleChange={() => {
                    setIsDark(!isDark)
                    localStorage.setItem('theme', isDark ? 'light' : 'dark');
                }} />
            </div>
        </div>
    );
}

export default Header;