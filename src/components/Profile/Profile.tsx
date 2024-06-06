import { FunctionComponent, useEffect } from "react";
import "./Profile.css";
import Tag from "../Tag";
import ProfileItem from "./ProfileItem";
import ProfileImage from "./ProfileImage";
import getRecentPosts from "../../utils/getRecentPosts";
import Posts from "../../types/Posts";
import RecentPost from "../RecentPost";
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
            <div className="col">
                <h2>recently posted</h2>
                <div className="recent-posts">
                    {
                        getRecentPosts(posts).map((post, index) => (
                            <HomePost key={index} title={post.title} tags={post.tags} />
                        ))}
                </div>
            </div>
            <div className="col">
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
            <div className="col">
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

export default Profile;