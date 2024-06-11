import { FunctionComponent, useContext } from "react";
import './Home.css';
import HomeCategory from "./HomeCategory";
import HomePost from "../../components/ListedPost";
import HomeProject from "./HomeProject";
import Profile from "../../components/Profile/Profile";
import { PostsContext } from "../../contexts/Posts";
import _Post from "../../types/_Post";

const Home: FunctionComponent = () => {
    const posts = useContext(PostsContext).posts as _Post[];
    return (
        <div id="home">

            <Profile />

            {/* posts */}

            {posts && <>
                <HomeCategory isMain title="Projects">
                    {posts.map((post: _Post, index) => (
                        post.type === "project" &&
                        <HomeProject
                            key={index}
                            post={post}
                            image={`images/posts/${post.title}.png`}
                        />
                    ))}
                </HomeCategory>
                <HomeCategory title="Career">
                    {posts.map((post: _Post, index) => (
                        post.type === "career" &&
                        <HomePost
                            key={index}
                            title={post.title}
                            tags={post.tags}
                        />))
                    }
                </HomeCategory>
                <HomeCategory title="Algorithm solve">
                    {posts.map((post: _Post, index) => (
                        post.type === "algorithm" &&
                        <HomePost
                            key={index}
                            title={post.title}
                            tags={post.tags}
                        />))
                    }
                </HomeCategory>
                <HomeCategory title="Theory">
                    {posts.map((post: _Post, index) => (
                        post.type === "theory" &&
                        <HomePost
                            key={index}
                            title={post.title}
                            tags={post.tags}
                        />))
                    }
                </HomeCategory>
            </>
            }
        </div>
    );
}

export default Home;