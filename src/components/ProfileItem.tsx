import { FunctionComponent } from "react";
import "./ProfileItem.css";

interface ProfileItemProps {
    children: React.ReactNode;
}

const ProfileItem: FunctionComponent<ProfileItemProps> = ({ children }) => {
    return (
        <div className="profile-item">
            <h3>한경국립대학교</h3>
            <p>컴퓨터공학과</p>
            <span>2018.03 ~ 2024.02</span>
        </div>
    );
}

export default ProfileItem;