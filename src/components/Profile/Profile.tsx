import { FunctionComponent } from "react";
import "./Profile.css";
import Tag from "../Tag";
import ProfileImage from "./ProfileImage";

const Profile: FunctionComponent = () => {
    return (
        <div className="profile">
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
                    <Tag tag="ReactJs" />
                    <Tag tag="NextJs" />
                </div>
            </div>
        </div>
    );
}

export default Profile;