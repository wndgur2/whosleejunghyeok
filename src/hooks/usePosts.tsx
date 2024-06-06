import { useEffect, useState } from "react";
import loadPosts from "../utils/loadPosts";
import Posts from "../types/Posts";
import Post from "../types/Post";

function usePosts() {
    const [posts, setPosts] = useState<Posts>({
        project: [],
        career: [],
        algorithm: [],
        theory: []
    });

    useEffect(() => {
        async function fetchPost() {
            const postMeta: Post[] = await loadPosts();
            const tmp_posts: Posts = {
                project: [],
                career: [],
                algorithm: [],
                theory: []
            };
            for (const post of postMeta) {
                tmp_posts[post.type].push(post);
            }
            setPosts(tmp_posts);
        }
        fetchPost();
    }, []);

    return posts;
}

export default usePosts;