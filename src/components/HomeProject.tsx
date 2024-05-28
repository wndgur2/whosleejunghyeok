import { FunctionComponent, ReactNode } from "react";

interface HomeProjectProps {
    title: string;
    description: string;
    image: string;
    github: string;
    link?: string;
    tags: string[];
    date: string;
}

const HomeProject: FunctionComponent<HomeProjectProps> = (props) => {
    return (
        <div className="project">
            <div className="project-image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="project-info">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div className="project-tags">
                    {props.tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
                <div className="project-links">
                    <a href={props.github} target="_blank" rel="noreferrer">GitHub</a>
                    {props.link && <a href={props.link} target="_blank" rel="noreferrer">View</a>}
                </div>
                <p>{props.date}</p>
            </div>
        </div>
    );
}

export default HomeProject;