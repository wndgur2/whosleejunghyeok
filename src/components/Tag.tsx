import { FunctionComponent } from "react";
import './Tag.css';
import { Link } from "react-router-dom";

interface TagProps {
    tag: string;
}

const Tag: FunctionComponent<TagProps> = ({ tag }) => {
    return (
        <Link
            to={`/search/${tag}`}
            className="tag">{tag}</Link>
    );
}

export default Tag;