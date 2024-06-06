import { FunctionComponent } from "react";
import Post from "../types/Post";

interface RecentPostProps {
    post: Post
}

const RecentPost: FunctionComponent<RecentPostProps> = ({ post }) => {
    return (
        <div>{post.title}</div>
    );
}

export default RecentPost;