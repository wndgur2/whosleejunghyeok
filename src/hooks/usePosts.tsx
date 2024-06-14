import { useEffect, useState } from "react";
import _Post from "../types/_Post";
import fetchAllPosts from "../utils/fetchAllPosts";
import useOctokit from "./useOctokit";

function usePosts() {
    const [posts, setPosts] = useState<_Post[]>([]);
    const octokit = useOctokit();

    useEffect(() => {
        async function fetchPost() {
            fetchAllPosts(octokit, setPosts);
        }
        fetchPost();
    }, [octokit]);

    return posts;
}

export default usePosts;