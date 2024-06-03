import { IoLogoGithub } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";

import { FunctionComponent, useEffect, useState } from "react";
import "./Profile.css";
import Tag from "../Tag";
import ProfileItem from "./ProfileItem";
import ProfileImage from "./ProfileImage";

interface ProfileProps {

}

const Profile: FunctionComponent<ProfileProps> = () => {
    const [clientWidth, setClientWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setClientWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="profile">
            {clientWidth > 768 && <div className="col left">
                <ProfileItem title="Github" url="https://github.com/wndgur2" icon={<IoLogoGithub />}>
                    <span>All codes</span>
                    <span className="minor">@wndgur2</span>
                </ProfileItem>
                <ProfileItem title="Youtube" url="https://www.youtube.com/channel/UC0u9muX-t6pTnZhJJxMjh5Q" icon={<FaYoutube />}>
                    <span>Vlog</span>
                    <span>Demo videos</span>
                    <span className="minor">@junghyeok_lee6710</span>
                </ProfileItem>
                <ProfileItem title="Email" url="https://mail.google.com/mail/?view=cm&to=dkandjsl@gmail.com" icon={<BiLogoGmail />}>
                    <span className="minor">dkandjsl@gmail.com</span>
                </ProfileItem>
            </div>}
            <div></div>

            <div className="col center">
                <ProfileImage >
                    <img className="profile-img" src="/images/profile.jpeg" alt="profile" />
                </ProfileImage>
                <div className="profile-content">
                    <h1 className="profile-name">이중혁</h1>
                    <h2 className="profile-description">
                        협력, 성장!
                    </h2>
                    <div className="profile-tags">
                        <Tag tag="HTML" />
                        <Tag tag="CSS" />
                        <Tag tag="TypeScript" />
                        <Tag tag="React" />
                        <Tag tag="NextJS" />
                    </div>
                </div>
            </div>
            <div></div>

            {clientWidth > 768 && <div className="col right">
                <ProfileItem title="한경국립대학교" url="https://www.hknu.ac.kr/hkcommath/2035/subview.do">
                    <span>컴퓨터공학과</span>
                    <span className="minor">2018.03 ~ 2024.02</span>
                </ProfileItem>
                <ProfileItem title="백준 알고리즘" url="https://www.acmicpc.net/user/wndgur2">
                    <span>Gold1</span>
                    <span className="minor">2021.04 ~</span>
                </ProfileItem>
            </div>}
        </div>
    );
}

export default Profile;