import React, { useState } from "react";
import { useParams } from "react-router";
import projectData from "../static/projects.json";
import "../styles/project.css";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";

function getProject(id) {
    for (let i = 0; i < projectData.projects.length; i++) {
        if (projectData.projects[i].id === id) {
            return projectData.projects[i];
        }
        if (projectData.other[i].id === id) {
            return projectData.other[i];
        }
    }
}

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgba(34,34,34, 0.95)";

const Project = (props) => {
    let params = useParams();
    let project = getProject(params.projectId);
    const [showModal, setShowModal] = useState(false);
    const [activeImage, setActiveImage] = useState("");

    return (
        <div id="project">
            <div className="project-header">
                <NavLink to="/projects">Projects</NavLink>
                <i className="material-icons">navigate_next</i>
                <h2>{project.title}</h2>
            </div>
            <div className="project-content">
                <div id="project-image-spanner">
                    <img
                        src={require(`../img/previews/${project.previewImage}`).default}
                        alt=""
                    />
                </div>
                <h3 className="section-content-header">Description</h3>
                <div dangerouslySetInnerHTML={{ __html: project.article }}></div>
                <h3 className="section-content-header">Project Info</h3>
                <div id="project-info">
                    <BadgeItem description="Date" item={project.date} />
                    <BadgeItem description="Website" item={project.website} />
                    <BadgeItem description="Stack" item={project.stack} />
                </div>
                <MediaGrid
                    id={project.id}
                    images={project.images}
                    modalUpdater={setShowModal}
                    imageUpdater={setActiveImage}
                />
                <Modal
                    className="Modal"
                    isOpen={showModal}
                    contentLabel="Minimal Modal Example"
                    onRequestClose={() => setShowModal(false)}
                >
                    <div className="modal-content">
                        <button id="close-modal" onClick={() => setShowModal(false)}>
                            <i className="material-icons">close</i>
                        </button>
                        <ModalImage imageID={project.id} imageName={activeImage} />
                    </div>
                </Modal>
            </div>
        </div >
    );
};

const ModalImage = (props) => {
    if (props.imageName == null) {
        return null;
    }
    return (
        <img
            src={
                require(`../img/scrollable/${props.imageID}/${props.imageName}`).default
            }
            alt=""
            id="modal-image"
        />
    );
};

const MediaGrid = (props) => {
    if (props.images == null) {
        return null;
    }
    const buttonHandler = (imageName) => {
        props.modalUpdater(true);
        props.imageUpdater(imageName);
    };
    return (
        <div>
            <h3 className="section-content-header">Media</h3>
            <div className="media-grid">
                {props.images.map((image) => (
                    <img
                        src={require(`../img/scrollable/${props.id}/${image}`).default}
                        alt=""
                        onClick={() => buttonHandler(image)}
                        id="project-media-image"
                    />
                ))}
            </div>
        </div>
    );
};

const BadgeItem = (props) => {
    if (props.item == null) {
        return null;
    }
    if (props.description === "Website") {
        let isDep = false;
        if (props.item.includes("deprecated")) {
            isDep = true;
        }
        return (
            <div className="badge-item">
                <div className="badge">{props.description}</div>
                {isDep ? (
                    props.item
                ) : (
                    <a href={props.item} target="_blank" rel="noreferrer">
                        {props.item}
                    </a>
                )}
            </div>
        );
    }
    return (
        <div className="badge-item">
            <div className="badge">{props.description}</div>
            {props.description === "Stack" ? (
                <TechStackRow stack={props.item} />
            ) : (
                props.item
            )}
        </div>
    );
};

const TechStackRow = (props) => {
    return (
        <div className="tech-stack-row">
            {props.stack.map((item) => (
                <TechStackItem item={item} />
            ))}
        </div>
    );
};

const TechStackItem = (props) => {
    return <div className="tech-stack-item">{props.item}</div>;
};

export default Project;
