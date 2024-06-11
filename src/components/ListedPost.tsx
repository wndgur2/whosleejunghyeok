import { FunctionComponent } from "react";
import './ListedPost.css';
import Tag from "./Tag";
import { BsCaretRightFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface ListedPostProps {
    title: string;
    tags: string[];
}

const ListedPost: FunctionComponent<ListedPostProps> = ({ title, tags }: ListedPostProps) => {
    return (
        <article className="listed-post">
            <Link className="listed-post-title link" to={`/search/${title}`}>
                <BsCaretRightFill className="vertical-bar" size={14} />
                <h3>{title}</h3>
            </Link>
            {tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
            ))}
        </article>
    );
}

export default ListedPost;