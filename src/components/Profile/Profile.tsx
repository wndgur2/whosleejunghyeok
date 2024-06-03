import { FunctionComponent, useEffect, useRef, useState } from "react";
import "./Profile.css";
import Tag from "../Tag";
import ProfileItem from "./ProfileItem";

interface ProfileProps {

}

const Profile: FunctionComponent<ProfileProps> = () => {
    const profileRef = useRef<HTMLButtonElement>(null);
    const [clientWidth, setClientWidth] = useState<number>(window.innerWidth);
    const [clickCount, setClickCount] = useState<number>(0);

    useEffect(() => {
        function handleResize() {
            setClientWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        console.log(clickCount)
        if (clickCount > 10)
            profileRef.current?.classList.add("hidden");
    }, [clickCount]);

    const profileClicked = () => {
        if (clickCount > 10) return;
        if (!profileRef.current) return;
        setClickCount(clickCount + 1);

        switch (Math.floor(Math.random() * 10)) {
            case 0:
                profileRef.current.style.animation = "spinLeft 0.3s";
                break;
            case 1:
                profileRef.current.style.animation = "spinRight 0.3s";
                break;
            default:
                profileRef.current.style.animation = "shake 0.3s";
                break;
        }
        setTimeout(() => {
            if (profileRef.current)
                profileRef.current.style.animation = "";
        }, 300);
    }

    return (
        <div className="profile">
            {clientWidth > 768 && <div className="col left">
                <ProfileItem url="https://github.com/wndgur2">
                    <h3>Github</h3>
                    <span>All codes</span>
                    <span className="minor">@wndgur2</span>
                </ProfileItem>
                <ProfileItem url="https://www.youtube.com/channel/UC0u9muX-t6pTnZhJJxMjh5Q">
                    <h3>Youtube</h3>
                    <span>Vlog</span>
                    <span>Demo videos</span>
                    <span className="minor">@junghyeok_lee6710</span>
                </ProfileItem>
                <ProfileItem url="https://mail.google.com/mail/?view=cm&to=dkandjsl@gmail.com">
                    <h3>Email</h3>
                    <span className="minor">dkandjsl@gmail.com</span>
                </ProfileItem>
            </div>}
            <div></div>

            <div className="col center">
                <button className="profile-img-wrapper" onClick={profileClicked} ref={profileRef}>
                    <img className="profile-img" src="/images/profile.jpeg" alt="profile" />
                </button>
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
                <ProfileItem url="https://www.hknu.ac.kr/kor/index.do">
                    <h3>한경국립대학교</h3>
                    <span>컴퓨터공학과</span>
                    <span className="minor">2018.03 ~ 2024.02</span>
                </ProfileItem>
            </div>}
        </div>
    );
}

export default Profile;