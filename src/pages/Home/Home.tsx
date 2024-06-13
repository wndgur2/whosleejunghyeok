import { FunctionComponent, useContext } from "react";
import './Home.css';
import HomeCategory from "./HomeCategory";
import HomePost from "../../components/ListedPost";
import ListedProject from "../../components/ListedProject";
import Profile from "../../components/Profile/Profile";
import { PostsContext } from "../../contexts/Posts";
import _Post from "../../types/_Post";
import Loading from "../../components/Loading";

const Home: FunctionComponent = () => {
    const posts = useContext(PostsContext).posts as _Post[];
    // const posts = [] as _Post[];
    return (
        <div id="home">

            <Profile />

            {posts.length ? <>
                <HomeCategory isMain category="Project">
                    {posts.map((post: _Post, index) => (
                        post.category === "project" &&
                        <ListedProject
                            key={index}
                            post={post}
                        />
                    ))}
                </HomeCategory>
                <HomeCategory category="Career">
                    {posts.map((post: _Post, index) => (
                        post.category === "career" &&
                        <HomePost
                            key={index}
                            post={post}
                        />))
                    }
                </HomeCategory>
                <HomeCategory category="Algorithm">
                    {posts.map((post: _Post, index) => (
                        post.category === "algorithm" &&
                        <HomePost
                            key={index}
                            post={post}
                        />))
                    }
                </HomeCategory>
                <HomeCategory category="Theory">
                    {posts.map((post: _Post, index) => (
                        post.category === "theory" &&
                        <HomePost
                            key={index}
                            post={post}
                        />))
                    }
                </HomeCategory>
            </> :
                <Loading phrase="Fetching data" />
            }
        </div>
    );
}

export default Home;