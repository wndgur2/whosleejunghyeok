import { FunctionComponent } from "react";
import './Tag.css';
import { Link } from "react-router-dom";

interface TagProps {
    tag: string;
}

const Tag: FunctionComponent<TagProps> = ({ tag }) => {
    return (
        <li
            className="tag"
        >
            <Link
                to={`/search/%23${tag}`}
                state={{ search_text: `#${tag}` }}
            >
                {tag}
            </Link>
        </li>
    );
}

export default Tag;