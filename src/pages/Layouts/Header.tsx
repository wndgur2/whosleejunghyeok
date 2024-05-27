import { FunctionComponent, useContext } from "react";
import './Header.css';
import Toggle from "../../components/Toggle";
import Search from "../../components/Search";
import Marqueee from "../../components/Marqueee";
import { ThemeContext } from "../../contexts/Theme";

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
    const { isDark, setIsDark } = useContext(ThemeContext);

    return (
        <div id="header">
            <Marqueee />
            <Search />
            <Toggle isChecked={isDark} handleChange={() => {
                setIsDark(!isDark)
            }} />
        </div>
    );
}

export default Header;