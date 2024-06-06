import { FunctionComponent } from "react";
import Tag from "./Tag";
import './HomeProject.css';
import Post from "../types/Post";

interface HomeProjectProps {
    post: Post;
    image: string;
}

const HomeProject: FunctionComponent<HomeProjectProps> = ({ post, image }) => {
    return (
        <div className="project">
            <div className="project-image">
                <img src={image} alt={post.title} />
            </div>
            <div className="project-info">
                <h3 className="project-title">{post.title}</h3>
                <p className="project-discription">{post.description}</p>
                <p className="project-date minor">{post.date_started}~ {post.date_finished}</p>
                <div className="project-tags ">
                    {post.tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeProject;