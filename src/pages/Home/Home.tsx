import { FunctionComponent } from "react";
import './Home.css';
import HomeCategory from "../../components/HomeCategory";
import HomePost from "../../components/HomePost";
import HomeProject from "../../components/HomeProject";
import Profile from "../../components/Profile/Profile";
import Post from "../../types/Post";
import Posts from "../../types/Posts";

interface HomeProps {
    posts: Posts;
}

const Home: FunctionComponent<HomeProps> = ({ posts }) => {

    return (
        <div id="home">
            <Profile posts={posts} />
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