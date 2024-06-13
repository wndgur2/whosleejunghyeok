import { FunctionComponent, useCallback, useRef, useState } from "react";
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
    const projectRef = useRef<HTMLDivElement>(null);
    const setEventOccuredTime = useState<Date>(new Date())[1];

    const handleMouseEvent = useCallback(() => {
        setEventOccuredTime((current) => {
            if (new Date().getTime() - current.getTime() < 100) {
                projectRef.current?.classList.add('fix-width');
            }
            return new Date();
        });
    }, [setEventOccuredTime]);

    return (
        <article
            className="project"
            ref={projectRef}
            onMouseEnter={handleMouseEvent}
        >
            <Link className="project-info link" to={`/post/${post.title}`}>
                <div className="project-image">
                    {post.thumbnail ? parse(post.thumbnail) :
                        <div><CiImageOff size={32} /></div>
                    }
                </div>
                <h3 className="project-title">{post.title}</h3>
                <p className="project-discription">{post.description}</p>
                <small className="project-date">{post.date_started}~ {post.date_finished}</small>
                <ol className="tags">
                    {post.tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </ol>
            </Link>
        </article>
    );
}

export default ListedProject;