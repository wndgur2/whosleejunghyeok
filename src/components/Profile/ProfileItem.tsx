import { FunctionComponent } from "react";
import "./ProfileItem.css";
import { Link } from "react-router-dom";

interface ProfileItemProps {
    children: React.ReactNode;
    url: string
}

const ProfileItem: FunctionComponent<ProfileItemProps> = ({ children, url }) => {
    return (
        <Link className="profile-item" to={url} rel="noreferrer" target="_blank">
            {children}
        </Link>
    );
}

export default ProfileItem;