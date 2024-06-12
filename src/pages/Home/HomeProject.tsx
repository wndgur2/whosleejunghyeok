import { FunctionComponent } from "react";
import _Post from "../../types/_Post";
import Tag from "../../components/Tag";
import './HomeProject.css';
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import { CiImageOff } from "react-icons/ci";

interface HomeProjectProps {
    post: _Post;
}

const HomeProject: FunctionComponent<HomeProjectProps> = ({ post }) => {
    const thumbnail = post.content.match(/<img[^>]+src="([^">]+)".*>/);
    return (
        <article className="project">
            <Link className="project-info link" to={`/post/${post.title}`}>
                <div className="project-image">
                    {thumbnail ? parse(thumbnail[0] + "</img>") :
                        <div><CiImageOff size={32} /></div>
                    }
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