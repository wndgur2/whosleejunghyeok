import { FunctionComponent, useEffect, useState } from "react";
import './Home.css';
import HomeCategory from "../components/HomeCategory";
import HomePost from "../components/HomePost";
import HomeProject from "../components/HomeProject";
import { loadPostMetaData } from "../utils/loadPosts";
import Profile from "../components/Profile/Profile";

interface Post {
    type: "project" | "career" | "algorithm" | "theory";
    title: string;
    tags: string[];
    date_started: string;

    description?: string;
    date_finished?: string;
    github?: string;
}

interface Posts {
    project: Post[];
    career: Post[];
    algorithm: Post[];
    theory: Post[];
}

const Home: FunctionComponent = () => {
    const [posts, setPosts] = useState<Posts>();
    useEffect(() => {
        async function fetchPosts() {
            const postMeta: Post[] = await loadPostMetaData();
            const tmp_posts: Posts = {
                project: [],
                career: [],
                algorithm: [],
                theory: []
            };
            for (const post of postMeta) {
                console.log(post);
                tmp_posts[post.type].push(post);
            }
            setPosts(tmp_posts);
        }
        fetchPosts();
    }, []);

    return (
        <div id="home">
            <Profile />
            {posts && <>
                <HomeCategory isMain title="Projects">
                    {posts.project.map((post: Post, index) => (
                        <HomeProject key={index} title={post.title} description={post.description} image="https://via.placeholder.com/150" github={post.github} tags={post.tags} date_started={post.date_started} />
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