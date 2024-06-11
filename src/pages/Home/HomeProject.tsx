import { FunctionComponent } from "react";
import Post from "../../types/Post";
import Tag from "../../components/Tag";
import './HomeProject.css';
import { Link } from "react-router-dom";

interface HomeProjectProps {
    post: Post;
    image: string;
}

const HomeProject: FunctionComponent<HomeProjectProps> = ({ post, image }) => {
    return (
        <article className="project">
            <Link className="project-info link" to={`search/${post.title}`}>
                <div className="project-image">
                    <img src={image} alt={post.title} />
                </div>
                <h3 className="project-title">{post.title}</h3>
                <p className="project-discription">{post.description}</p>
                <small className="project-date">{post.date_started}~ {post.date_finished}</small>
            </Link>
            <div className="project-tags ">
                {post.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                ))}
            </div>
        </article>
    );
}

export default HomeProject;