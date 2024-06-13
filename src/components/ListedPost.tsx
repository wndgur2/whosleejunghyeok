import { FunctionComponent } from "react";
import './ListedPost.css';
import Tag from "./Tag";
import { BsCaretRightFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import _Post from "../types/_Post";

interface ListedPostProps {
    post: _Post;
}

const ListedPost: FunctionComponent<ListedPostProps> = ({ post }: ListedPostProps) => {
    return (
        <article className="listed-post">
            <Link className="listed-post-title link" to={`/post/${post.title}`}>
                <h3>
                    <BsCaretRightFill className="triangle" size={14} />
                    <span>{post.title}</span>
                </h3>
                <small>{post.date_started}~ {post.date_finished}</small>
            </Link>
            <ol className="tags">
                {post.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                ))}
            </ol>
        </article>
    );
}

export default ListedPost;