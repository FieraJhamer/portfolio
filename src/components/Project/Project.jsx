import "./Project.css";

function Project({ title, link }) {
    return (
        <a href={link} className="project" target="_blank">
            <p>{title}</p>
        </a>
    );
}

export default Project;