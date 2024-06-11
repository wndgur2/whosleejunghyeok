import { FunctionComponent } from "react";
import './HomePost.css';
import Tag from "./Tag";
import { BsCaretRightFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface HomePostProps {
    title: string;
    tags: string[];
}

const HomePost: FunctionComponent<HomePostProps> = ({ title, tags }: HomePostProps) => {
    return (
        <article className="home-post">
            <Link className="home-post-title link" to={`/search/${title}`}>
                <BsCaretRightFill className="vertical-bar" size={14} />
                <h3>{title}</h3>
            </Link>
            {tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
            ))}
        </article>
    );
}

export default HomePost;