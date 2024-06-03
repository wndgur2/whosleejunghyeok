import { useEffect, useState } from "react";
import { loadPostMetaData } from "../utils/loadPosts";

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

function usePosts() {
    const [posts, setPosts] = useState<Posts>();

    useEffect(() => {
        async function fetchPost() {
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
        fetchPost();
    }, []);

    return posts;
}

export default usePosts;