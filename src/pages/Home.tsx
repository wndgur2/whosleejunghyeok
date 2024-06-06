import { FunctionComponent } from "react";
import './Home.css';
import HomeCategory from "../components/HomeCategory";
import HomePost from "../components/HomePost";
import HomeProject from "../components/HomeProject";
import Profile from "../components/Profile/Profile";
import usePosts, { Post } from "../hooks/fetchPosts";

const Home: FunctionComponent = () => {
    const posts = usePosts();

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
                    <HomePost title="How to write a resume" tags={["resume", "career"]} />
                    <HomePost title="How to prepare for an interview" tags={["interview", "career"]} />
                    <HomePost title="How to write a resume" tags={["resume", "career"]} />
                    <HomePost title="How to prepare for an interview" tags={["interview", "career"]} />
                </HomeCategory>
                <HomeCategory title="Algorithm solve">
                    <HomePost title="How to sort an array" tags={["sort", "algorithm"]} />
                    <HomePost title="How to implement a binary search" tags={["binary search", "algorithm"]} />
                    <HomePost title="How to sort an array" tags={["sort", "algorithm"]} />
                    <HomePost title="How to implement a binary search" tags={["binary search", "algorithm"]} />
                </HomeCategory>
                <HomeCategory title="Theory">
                    <HomePost title="How to communicate effectively" tags={["communication", "talk"]} />
                    <HomePost title="How to make a good presentation" tags={["presentation", "talk"]} />
                    <HomePost title="How to communicate effectively" tags={["communication", "talk"]} />
                    <HomePost title="How to make a good presentation" tags={["presentation", "talk"]} />
                </HomeCategory>
            </>
            }
        </div>
    );
}

export default Home;