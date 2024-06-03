import { FunctionComponent } from "react";
import "./Profile.css";
import Tag from "./Tag";
import ProfileItem from "./ProfileItem";

interface ProfileProps {

}

const Profile: FunctionComponent<ProfileProps> = () => {
    return (
        <div className="profile">
            <div className="left">
                <ProfileItem>
                    <h2>CONTACT</h2>
                    <p>010-1234-5678</p>
                </ProfileItem>
            </div>
            <div className="center">
                <div className="profile-img-wrapper">
                    <img className="profile-img" src="/images/profile.jpeg" alt="profile" />
                </div>
                <div className="profile-content">
                    <h1 className="profile-name">이중혁</h1>
                    <p className="profile-description">
                        협력, 성장!
                    </p>
                    <div className="profile-links">
                        <a href="https://github.com" className="profile-link">Github</a>
                    </div>
                    <div className="profile-tags">
                        <Tag tag="React" />
                        <Tag tag="TypeScript" />
                        <Tag tag="HTML" />
                        <Tag tag="CSS" />
                    </div>
                </div>
            </div>
            <div className="right">
                <ProfileItem>
                    <h2>한경국립대학교</h2>
                    <h3>컴퓨터공학과</h3>
                    <span>2018.03 ~ 2024.02</span>
                </ProfileItem>
                <ProfileItem>
                    <h2>한경국립대학교</h2>
                    <h3>컴퓨터공학과</h3>
                    <span>2018.03 ~ 2024.02</span>
                </ProfileItem>
            </div>
        </div>
    );
}

export default Profile;