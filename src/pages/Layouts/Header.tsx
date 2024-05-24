import { FunctionComponent } from "react";
import Marquee from "react-fast-marquee";
import './Header.css';
import Toggle from "../../components/Toggle";
import useLocalStorage from "use-local-storage";
import Search from "../../components/Search";

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
    const [isDark, setIsDark] = useLocalStorage("isDark", false);

    return (
        <div id="header">
            <Marquee>
                <span className="marquee">WHO'S LEE JUNG HYEOK? </span>
            </Marquee>
            <Search />
            <Toggle isChecked={isDark} handleChange={() => { setIsDark(!isDark) }} />
        </div>
    );
}

export default Header;