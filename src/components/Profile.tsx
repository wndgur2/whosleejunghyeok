import { FunctionComponent } from "react";
import "./Profile.css";

interface ProfileProps {

}

const Profile: FunctionComponent<ProfileProps> = () => {
    return (
        <div className="profile">
            <div className="profile-img-wrapper">
                <img className="profile-img" src="/images/profile.jpeg" alt="profile" />
            </div>
            <div className="profile-content">
                <h1 className="profile-name">이중혁</h1>
                <p className="profile-description">
                    프론트엔드 개발자입니다.
                </p>
                <div className="profile-links">
                    <a href="https://github.com" className="profile-link">Github</a>
                </div>
                <div className="profile-tags">
                    <span className="tag">React</span>
                    <span className="tag">TypeScript</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;