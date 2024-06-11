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
                <HomeCategory isMain category="Project">
                    {posts.map((post: _Post, index) => (
                        post.category === "project" &&
                        <HomeProject
                            key={index}
                            post={post}
                            image={`images/posts/${post.title}.png`}
                        />
                    ))}
                </HomeCategory>
                <HomeCategory category="Career">
                    {posts.map((post: _Post, index) => (
                        post.category === "career" &&
                        <HomePost
                            key={index}
                            title={post.title}
                            tags={post.tags}
                        />))
                    }
                </HomeCategory>
                <HomeCategory category="Algorithm">
                    {posts.map((post: _Post, index) => (
                        post.category === "algorithm" &&
                        <HomePost
                            key={index}
                            title={post.title}
                            tags={post.tags}
                        />))
                    }
                </HomeCategory>
                <HomeCategory category="Theory">
                    {posts.map((post: _Post, index) => (
                        post.category === "theory" &&
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