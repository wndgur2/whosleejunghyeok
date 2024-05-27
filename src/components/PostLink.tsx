import { FunctionComponent } from "react";
import './PostLink.css';
import Tag from "./Tag";
import { BsCaretRightFill } from "react-icons/bs";

interface PostLinkProps {
    title: string;
    tags: string[];
}

const PostLink: FunctionComponent<PostLinkProps> = ({ title, tags }: PostLinkProps) => {
    return (
        <div className="post-link">
            <div className="post-link-title">
                <BsCaretRightFill className="vertical-bar" size={14} />
                <h3>{title}</h3>
            </div>
            {tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
            ))}
        </div>
    );
}

export default PostLink;