import { FunctionComponent } from "react";
import './Footer.css';
import ProfileItem from "../../components/FooterLink";
import Marqueee from "../../components/Marqueee";

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <div id="footer">
            <div className="links">
                <ProfileItem title="Github" url="https://github.com/wndgur2">
                    <span>Project</span>
                    <span>Study</span>
                    <span className="minor">@wndgur2</span>
                </ProfileItem>
                <ProfileItem title="Youtube" url="https://www.youtube.com/channel/UC0u9muX-t6pTnZhJJxMjh5Q">
                    <span>Vlog</span>
                    <span>Demo videos</span>
                    <span className="minor">@junghyeok_lee6710</span>
                </ProfileItem>
                <ProfileItem title="백준 알고리즘" url="https://www.acmicpc.net/user/wndgur2">
                    <span>Gold1</span>
                    <span>Python, Cpp</span>
                    <span className="minor">2021.04 ~</span>
                </ProfileItem>
                <ProfileItem title="한경국립대학교" url="https://www.hknu.ac.kr/hkcommath/2035/subview.do">
                    <span>컴퓨터공학과</span>
                    <span>학점 4.16/4.5</span>
                    <span className="minor">2018.03 ~ 2024.02</span>
                </ProfileItem>
                <ProfileItem title="Email" url="https://mail.google.com/mail/?view=cm&to=dkandjsl@gmail.com">
                    <span className="minor">dkandjsl@gmail.com</span>
                </ProfileItem>
            </div>
        </div>
    );
}

export default Footer;