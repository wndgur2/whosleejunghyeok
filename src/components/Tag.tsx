import { FunctionComponent } from "react";
import './Tag.css';

interface TagProps {
    tag: string;
}

const Tag: FunctionComponent<TagProps> = ({ tag }) => {
    return (
        <span className="tag">{tag}</span>
    );
}

export default Tag;