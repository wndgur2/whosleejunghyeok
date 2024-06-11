import { FunctionComponent, useContext } from "react";
import './Home.css';
import HomeCategory from "./HomeCategory";
import HomePost from "../../components/ListedPost";
import HomeProject from "./HomeProject";
import Profile from "../../components/Profile/Profile";
import Post from "../../types/Post";
import Posts from "../../types/Posts";
import { PostsContext } from "../../contexts/Posts";

const Home: FunctionComponent = () => {
    const posts = useContext(PostsContext).posts as Posts;
    return (
        <div id="home">
            <Profile />

            {/* posts */}

            {posts && <>
                <HomeCategory isMain title="Projects">
                    {posts.project.map((post: Post, index) => (
                        <HomeProject
                            key={index}
                            post={post}
                            image={`images/posts/${post.title}.png`}
                        />
                    ))}
                </HomeCategory>
                <HomeCategory title="Career">
                    {posts.career.map((post: Post, index) => (
                        <HomePost
                            key={index}
                            title={post.title}
                            tags={post.tags}
                        />))
                    }
                </HomeCategory>
                <HomeCategory title="Algorithm solve">
                    {posts.algorithm.map((post: Post, index) => (
                        <HomePost
                            key={index}
                            title={post.title}
                            tags={post.tags}
                        />))
                    }
                </HomeCategory>
                <HomeCategory title="Theory">
                    {posts.theory.map((post: Post, index) => (
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