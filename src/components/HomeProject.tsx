import { FunctionComponent } from "react";
import Post from "../types/Post";
import Tag from "./Tag";
import './HomeProject.css';

interface HomeProjectProps {
    post: Post;
    image: string;
}

const HomeProject: FunctionComponent<HomeProjectProps> = ({ post, image }) => {
    return (
        <article className="project">
            <div className="link">
                <div className="project-image">
                    <img src={image} alt={post.title} />
                </div>
                <div className="project-info">
                    <h3 className="project-title">{post.title}</h3>
                    <p className="project-discription">{post.description}</p>
                    <small className="project-date">{post.date_started}~ {post.date_finished}</small>
                </div>
            </div>
            <div className="project-tags ">
                {post.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                ))}
            </div>
        </article>
    );
}

export default HomeProject;