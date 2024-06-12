import { FunctionComponent } from "react";
import './Tag.css';
import { Link } from "react-router-dom";

interface TagProps {
    tag: string;
}

const Tag: FunctionComponent<TagProps> = ({ tag }) => {
    return (
        <Link
            to={`/search/%23${tag}`}
            className="tag"
            state={{ search_text: `#${tag}` }}
        >
            {tag}
        </Link>
    );
}

export default Tag;