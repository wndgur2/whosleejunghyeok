import { useEffect, useState } from "react";
import loadPosts from "../utils/loadPosts";
import _Post from "../types/_Post";

function usePosts() {
    const [posts, setPosts] = useState<_Post[]>([]);

    useEffect(() => {
        async function fetchPost() {
            loadPosts(setPosts);
        }
        fetchPost();
    }, []);

    return posts;
}

export default usePosts;