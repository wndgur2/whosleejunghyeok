import { FunctionComponent } from "react";
import Post from "../../types/Post";

interface SearchPostProps {
    post: Post;
}

const SearchPost: FunctionComponent<SearchPostProps> = ({ post }) => {
    return (
        <div>
            <h2>{post.title}</h2>
        </div>
    );
}

export default SearchPost;