import { FunctionComponent, useEffect } from "react";
import "./Profile.css";
import Tag from "../Tag";
import ProfileItem from "../FooterLink";
import ProfileImage from "./ProfileImage";
import getRecentPosts from "../../utils/getRecentPosts";
import Posts from "../../types/Posts";
import HomePost from "../HomePost";

interface ProfileProps {
    posts: Posts;
}

const Profile: FunctionComponent<ProfileProps> = ({ posts }) => {
    useEffect(() => {
        console.log(getRecentPosts(posts));
    }, [posts]);
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
                    <Tag tag="React" />
                    <Tag tag="NextJS" />
                </div>
            </div>
        </div>
    );
}

export default Profile;