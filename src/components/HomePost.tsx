import { FunctionComponent } from "react";
import './HomePost.css';
import Tag from "./Tag";
import { BsCaretRightFill } from "react-icons/bs";

interface HomePostProps {
    title: string;
    tags: string[];
}

const HomePost: FunctionComponent<HomePostProps> = ({ title, tags }: HomePostProps) => {
    return (
        <div className="home-post">
            <div className="home-post-title">
                <BsCaretRightFill className="vertical-bar" size={14} />
                <h3>{title}</h3>
            </div>
            {tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
            ))}
        </div>
    );
}

export default HomePost;