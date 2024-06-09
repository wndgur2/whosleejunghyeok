import { FunctionComponent, useContext } from "react";
import './Header.css';
import Toggle from "../../components/Toggle";
import SearchBar from "../../components/Search/SearchBar";
import Marqueee from "../../components/Marqueee";
import { ThemeContext } from "../../contexts/Theme";

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
    const { isDark, setIsDark } = useContext(ThemeContext);

    return (
        <div id="header">
            <Marqueee />
            <div className="headModules">
                <SearchBar />
                <Toggle isChecked={isDark} handleChange={() => {
                    setIsDark(!isDark)
                }} />
            </div>
        </div>
    );
}

export default Header;