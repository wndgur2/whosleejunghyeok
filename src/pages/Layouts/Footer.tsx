import { FunctionComponent, useContext } from "react";
import './Footer.css';
import FooterLink from "./FooterLink";
import { DeviceContext } from "../../contexts/Device";
import { Link } from "react-router-dom";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    const deviceWidth = useContext(DeviceContext).width;
    return (
        <footer>
            {deviceWidth > 768 ?
                <div className="links">
                    <FooterLink title="Github" url="https://github.com/wndgur2">
                        <span>Project</span>
                        <span>Study</span>
                        <small>@wndgur2</small>
                    </FooterLink>
                    <FooterLink title="Youtube" url="https://www.youtube.com/channel/UC0u9muX-t6pTnZhJJxMjh5Q">
                        <span>Vlog</span>
                        <span>Demo videos</span>
                        <small>@junghyeok_lee6710</small>
                    </FooterLink>
                    <FooterLink title="백준 알고리즘" url="https://www.acmicpc.net/user/wndgur2">
                        <span>Gold1</span>
                        <span>Python, Cpp</span>
                        <small>2021.04 ~</small>
                    </FooterLink>
                    <FooterLink title="한경국립대학교" url="https://www.hknu.ac.kr/hkcommath/2035/subview.do">
                        <span>컴퓨터공학과</span>
                        <span>학점 4.16/4.5</span>
                        <small>2018.03 ~ 2024.02</small>
                    </FooterLink>
                    <FooterLink title="Email" url="https://mail.google.com/mail/?view=cm&to=dkandjsl@gmail.com">
                        <small>dkandjsl@gmail.com</small>
                    </FooterLink>
                </div>
                :
                <div className="links">
                    <Link to="https://github.com/wndgur2">Github</Link>
                    <Link to="https://www.youtube.com/channel/UC0u9muX-t6pTnZhJJxMjh5Q">Youtube</Link>
                    <Link to="https://mail.google.com/mail/?view=cm&to=dkandjsl@gmail.com">Email</Link>
                </div>}

        </footer>
    );
}

export default Footer;