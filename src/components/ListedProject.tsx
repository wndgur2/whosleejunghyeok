import { FunctionComponent } from "react";
import _Post from "../types/_Post";
import Tag from "./Tag";
import './ListedProject.css';
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import { CiImageOff } from "react-icons/ci";

interface ListedProjectProps {
    post: _Post;
}

const ListedProject: FunctionComponent<ListedProjectProps> = ({ post }) => {
    return (
        <article className="project">
            <Link className="project-info link" to={`/post/${post.title}`}>
                <div className="project-image">
                    {post.thumbnail ? parse(post.thumbnail) :
                        <div><CiImageOff size={32} /></div>
                    }
                </div>
                <h3 className="project-title">{post.title}</h3>
                <p className="project-discription">{post.description}</p>
                <small className="project-date">{post.date_started}~ {post.date_finished}</small>
            </Link>
            <ol className="tags">
                {post.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                ))}
            </ol>
        </article>
    );
}

export default ListedProject;