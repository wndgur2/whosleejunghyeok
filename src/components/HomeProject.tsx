import { FunctionComponent } from "react";
import Tag from "./Tag";
import './HomeProject.css';

interface HomeProjectProps {
    title: string;
    image: string;
    tags: string[];
    description?: string;
    github?: string;
    date_started: string;
    date_finished?: string;
}

const HomeProject: FunctionComponent<HomeProjectProps> = (props) => {
    return (
        <div className="project">
            <div className="project-image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="project-info">
                <h3 className="project-title">{props.title}</h3>
                <p className="project-discription">{props.description}</p>
                <div className="project-tags">
                    {props.tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))}
                </div>
                <div className="project-links">
                    <a href={props.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
                <p className="project-date">{props.date_started}</p>
            </div>
        </div>
    );
}

export default HomeProject;