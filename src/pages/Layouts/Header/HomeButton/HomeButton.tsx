import { FunctionComponent } from "react";
import { IoLogoGithub } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import "./HomeButton.css";

const HomeButton: FunctionComponent = () => {
    const location = useLocation();
    return (
        <>
            {
                location.pathname === "/" ?
                    <Link to="https://github.com/wndgur2" className="home-button github" rel="noreferrer" target="_blank">
                        <IoLogoGithub size={42} />
                    </Link>
                    :
                    <Link to="/" className="home-button logo">
                        <img src="/images/profile.jpeg" alt="my face" />
                        <p>HYEOK</p>
                    </Link>
            }
        </>
    );
}

export default HomeButton;